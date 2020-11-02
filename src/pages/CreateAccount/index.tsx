import React from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {View, ImageBackground, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import BackgroundLogin from '../../assets/images/BackGroundBanner01.png';
import AppLogo from '../../assets/images/AppLogo.png';
import GoogleLogo from '../../assets/images/GoogleLogo.png';

function Login() {
  const navigation = useNavigation();

  const navigationToLogin = () => {
    navigation.navigate('Login');
  };
  
  return (
    <ImageBackground source={BackgroundLogin} style={styles.container}>
      <Card>
        <Image style={styles.logo} source={AppLogo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Como deseja se cadastrar?</Text>
        </View>
        <View>
          <Input placeholder="Email"></Input>
          <Input placeholder="Senha"></Input>
          <Input placeholder="Confirmar Senha"></Input>
          <Button label="Criar conta"></Button>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{borderColor: '#327FD6', borderWidth: 1, width: '40%'}} />
          <Text style={[styles.subtitle, { padding: 5, color: '#327FD6', fontSize: 12 }]}>OU</Text>
          <View style={{borderColor: '#327FD6', borderWidth: 1, width: '40%'}} />        
        </View>
        <View>
          <Button style={styles.googleButton}>
            <Image source={GoogleLogo} style={styles.googleLogo} />
            <Text style={styles.googleButtonText}>USAR CONTA GOOGLE</Text>
          </Button>
        </View>
      </Card>
    </ImageBackground>
  );
}

export default Login;
