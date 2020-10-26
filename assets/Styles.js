import { StyleSheet } from 'react-native';

export const styling = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5vh 0 0 0',
    backgroundImage: 'linear-gradient(to bottom right, #404040, #787878)',
    alignContent: 'space-around',
    justifyContent: 'flex-start',
    height: '85vh'
  },
  header: {
    backgroundColor: '#303030',
    height: '14vh',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  footer: {
    backgroundColor: '#303030',
    margin: '0 0 5vh 0',
    height: '10vh',
    width: '100vw',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    bottom: 0,
    position: "fixed"
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    color: 'white',
    fontSize: '6vh'
  },
  button: {
    margin: '1vh'
  },
  pillButton: {
    margin: 'auto 0',
    border: '1.5px solid white',
    borderRadius: '500px',
    padding: '2vh',
    flex: 1,
    alignItems: 'center'
  },
  homeText: {
    flex: 4,
    padding: '0.5vh',
  },
  tinyLogo: {
    width: '12vh',
    height: '12vh',
    color: 'white',
    order: 0,
  },
  tinyIcon: {
    width: '7vh',
    height: '7vh'
  },
  smallContainer: {
    flex: 0.35,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'center'
  },
  truthBeTold: {
    height: '8vh',
    width: '70vw',
    color: 'white',
    order: 1
  }
});