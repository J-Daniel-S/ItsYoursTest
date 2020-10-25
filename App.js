import React, { useState } from 'react';
import { StyleSheet, Linking } from 'react-native';

import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  const [location, setLocation] = useState();

  const changeLocation = () => {
    if (location === "home") {
      setLocation("about");
    } else if (location === "about") {
      setLocation("home");
    }
  }

  const link = input => {
    switch (input) {
      case "audio":
        Linking.openURL("https://www.itsyours.org/testimonies/#Audio");
        break;
      case "video":
        Linking.openURL("https://www.itsyours.org/testimonies/#Video");
        break;
      case "record":
        Linking.openURL("https://www.itsyours.org/testify/");
        break;
      case "events":
        console.log("events page opens");
        break;
      case "donate":
        Linking.openURL("https://www.itsyours.org/donate/");
        break;
      default:
        break;
    }

  }

  let rendered;

  switch (location) {
    case "home":
      rendered = (
        <Home container={styles.container} link={link} button={styles.button} />
      );
      break;
    default:
      setLocation("home");
      break;
  }

  return (
    <React.Fragment>
      <Header header={styles.header} text={styles.text} />
      {rendered}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5vh 0 0 0',
    backgroundColor: '#DCDCDC',
    alignItems: 'stretch',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#505050',
    padding: '1vh',
    margin: '0 0 5vh 0',
    height: '14vh'
  },
  text: {
    color: 'white',
    fontSize: '8vh'
  },
  button: {
    backgroundColor: '#DCDCDC',
    borderRadius: '50%',
    height: '11vh',
    borderColor: 'white'
  }
});
