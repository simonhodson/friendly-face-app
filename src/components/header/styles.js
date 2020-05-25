import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#058ed9',
    height: 60,
  },
  colMid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '70%',
  },
  colOutter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '15%',
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
});
