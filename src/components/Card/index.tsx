import React from 'react';
import {View} from 'react-native';

import styles from './styles';

interface CardProps {}

const Card: React.FC<CardProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;
