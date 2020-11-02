import React, { useState } from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { View, ImageBackground, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify'
// import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

import styles from './styles';
import BackgroundLogin from '../../assets/images/BackGroundBanner01.png';
import AppLogo from '../../assets/images/AppLogo.png';
import GoogleLogo from '../../assets/images/GoogleLogo.png';

interface UserProps {
  email: String;
  password: String;
}

function Login() {
  const navigation = useNavigation();

  const [user, setUser] = useState<UserProps>({email: 'default', password: ''});
  // Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
  
  return (
  <ImageBackground source={BackgroundLogin} style={styles.container}>
    <Card>
      <Image style={styles.logo} source={AppLogo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Entrar</Text>
      </View>
      <View>
        <Input placeholder="Email"></Input>
        <Input placeholder="Senha"></Input>
      </View>
      <View>
        <Button label="ENTRAR" />
        <View style={styles.rememberPasswordContainer}>
          <Text style={styles.subtitle}>Esqueci minha senha</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{borderColor: '#327FD6', borderWidth: 1, width: '40%'}} />
        <Text style={[styles.subtitle, { padding: 5, color: '#327FD6', fontSize: 12 }]}>OU</Text>
        <View style={{borderColor: '#327FD6', borderWidth: 1, width: '40%'}} />        
      </View>
      <Button style={styles.googleButton}>
        <Image source={GoogleLogo} style={styles.googleLogo} />
        <Text style={styles.googleButtonText}>ENTRAR COM GOOGLE</Text>
      </Button>
    </Card>
  </ImageBackground>
  );
}

export default Login;
