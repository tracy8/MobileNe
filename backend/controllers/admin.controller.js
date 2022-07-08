const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { checkPhoneNumberAvailable } = require('../services/checkPhone');

exports.register = async (req, res) => {
  try {

    if (await checkPhoneNumberAvailable(req.body.phone))
      return res
        .status(409)
        .send({ message: 'Admin with the same phone number already exist' });

    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const newAdmin = await Admin.create({
      ...req.body,
      password: encryptedPassword,
    });

    const foundAdmin = newAdmin.toJSON();
    delete foundAdmin.password;

    const token = jwt.sign(
      {
        admin_id: foundAdmin._id,
        phone: foundAdmin.phone,
      },
      'vote_secret',
      { expiresIn: '1d' }
    );
    foundAdmin.token = token;

    return res.status(201).send({ message: 'Admin created!', data: foundAdmin });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const admin = await Admin.findOne({ phone: req.body.phone });

    if (!admin) {
      return res.status(400).send({ message: 'Admin does not exist' });
    } else {
      const foundAdmin = admin.toJSON();
      delete foundAdmin.password;
      const validPassword = await bcrypt.compare(
        req.body.password,
        admin.password
      );

      if (!validPassword)
        return res.status(400).send({ message: 'Invalid credentials' });

      const token = jwt.sign(
        {
          admin_id: admin._id,
          phone: admin.phone,
        },
        'mivote_secret',
        { expiresIn: '1d' }
      );
      foundAdmin.token = token;

      return res
        .status(200)
        .send({ message: 'Admin logged in!', data: foundAdmin });
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
