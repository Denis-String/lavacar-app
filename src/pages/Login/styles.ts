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
    marginTop: 5,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 25,
    color: '#04405D',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 15,
    color: '#7A7D95',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  createAccountTitle: {
    fontFamily: 'OpenSans_600SemiBold',
    // color: '#413D3D ',
    marginTop: 5,
  },
  rememberPasswordContainer: {
    alignItems: 'flex-end',
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
  }
});

export default styles;
