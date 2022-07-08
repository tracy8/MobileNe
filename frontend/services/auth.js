import axios from 'axios';

const url = 'localhost:8000/api/v1';

export async function signup(signUpInfo) {
  return await axios.post(`${url}/auth/signup`, signUpInfo);
}

export async function signin(signInInfo) {
  return await axios.post(`${url}/auth/signin`, signInInfo);
}
