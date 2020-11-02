import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 35,
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 15,
    color: '#04405D',
    marginTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  googleButton: {
    flexDirection: 'row',
  },
  googleLogo: {
    margin: -12,
    marginRight: 30,
  },
  googleButtonText: {
    color: 'white',
    fontFamily: 'OpenSans_600SemiBold',
  },
  subtitle: {
    fontSize: 15,
    color: '#7A7D95',
  },
});

export default styles;
