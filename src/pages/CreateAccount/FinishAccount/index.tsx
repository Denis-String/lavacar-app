import React from 'react';
import Card from '../../../components/Card';
import Input from '../../../components/Input';
import {View, ImageBackground, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import BackgroundLogin from '../../../assets/images/BackGroundBanner01.png';
import AppLogo from '../../../assets/images/AppLogo.png';

function Login() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={BackgroundLogin} style={styles.container}>
      <Card>
        <Image style={styles.logo} source={AppLogo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Finalizando o cadastro</Text>
        </View>
        <View>
          <Text>Informações sobre você:</Text>
          <Input placeholder="Nome"></Input>
        </View>
        <View>
          <Text>Informações sobre a empresa:</Text>
          <Input placeholder="Nome"></Input>
          <Input placeholder="Cidade"></Input>
        </View>
      </Card>
    </ImageBackground>
  );
}

export default Login;
