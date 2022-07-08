import { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image } from 'react-native';
import Input from '../components/Input';
import { Feather } from '@expo/vector-icons';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const  [nationalID, setNationalID] = useState('');
  const [phone, setPhone] = useState('');
  const { navigate } = useNavigation();

  const submitForm = () => {
    navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/img/logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.innerTitle}>Make your vote matter today.</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={firstName}
            onChangeText={(name) => setFirstName(name)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder={'Names'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={email}
            onChangeText={(email) => setEmail(email)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder={'Email'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={nationalID}
            onChangeText={(nationalID) => setNationalID(nationalID)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder={'National ID'}
          />
        </View>
    
        <View style={styles.inputContainer}>
          <Input
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            Icon={<Feather name="user" size={24} color="silver" />}
            placeholder={'Phone Number'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={password}
            onChangeText={(password) => setPassword(password)}
            Icon={<Feather name="lock" size={24} color="silver" />}
            placeholder={'Password'}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Sign up'} onPress={submitForm} />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.loginLink}>
            Already have an account?{' '}
            <Text onPress={() => navigate('Login')} style={styles.text}>
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginLeft: 8,
    paddingTop: 20,
    padding: 16,
  },
  title: {
    fontSize: 18,
    paddingVertical: 8,
  },
  innerTitle: {
    fontSize: 14,
    color: '#BCBCBC',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
  },
  logoText: {
    fontSize: 32,
    paddingLeft: 12,
    color: '#0B4850',
  },
  inputContainer: {
    display: 'flex',
    paddingHorizontal: 24,
    paddingTop: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  text: {
    fontSize: 14,
    paddingTop: 8,
    textAlign: 'right',
    color: '#0B4890',
  },
  loginLink: {
    textAlign: 'center',
    color: '#A1A1A1',
    paddingTop: 36,
  },
});
