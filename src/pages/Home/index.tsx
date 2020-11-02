import React, { useEffect} from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import {View, ImageBackground, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Auth } from 'aws-amplify'

import styles from './styles';
import BackgroundLogin from '../../assets/images/BackGroundBanner01.png';
import AppLogo from '../../assets/images/AppLogo.png';

function Login() {
  const navigation = useNavigation();

  useEffect(() => {
    const getAuthenticatedUser = async () => {
      try {
        await Auth.currentAuthenticatedUser({ bypassCache: true });
        navigation.navigate('FinishAccount');
        console.log('Redirecionando para a rota');
      } catch (err) {
        console.log('Usuario não está logado', err);
      }
    }
    getAuthenticatedUser();
  }, []);

  const navigationToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const navigationToLogin = () => {
    navigation.navigate('Login');
  };
  
  return (
    <ImageBackground source={BackgroundLogin} style={styles.container}>
      <Card>
        <Image style={styles.logo} source={AppLogo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LAVA CAR</Text>
          <Text style={styles.subtitle}>Seu negócio em suas mãos</Text>
        </View>
        <View>
          <Button
            label="ENTRAR"
            onPress={() => navigationToLogin()}
            style={styles.loginButton}
          />
          <Button style={styles.createAccountButton} outline label="Criar Conta" onPress={() => navigationToCreateAccount() } />
        </View>
      </Card>
    </ImageBackground>
  );
}

export default Login;
