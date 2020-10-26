import React, { useState } from 'react';
import { StyleSheet, Linking, ScrollView } from 'react-native';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import { styling } from './assets/Styles';


const styles = styling;

export default function App() {
  const [location, setLocation] = useState();
  const [lastLocation, setLastLocation] = useState();

  const changeLocation = input => {
    setLastLocation(input);
    switch (input) {
      case "menu":
        setLocation(input);
        break;
      case "home":
        setLocation(input);
        break;
      default:
        setLocation("home");
        break;
    }
  }

  const back = () => {
    if (location === lastLocation) {
      setLocation("home");
    } else {
      setLocation(lastLocation);
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
        console.log("events page opens: nothing to link to yet");
        break;
      case "donate":
        Linking.openURL("https://www.itsyours.org/donate/");
        break;
      case "youtube":
        Linking.openURL("https://www.youtube.com/channel/UC41X0QO8aeiP5ClWoXhkeRQ");
        break;
      case "facebook":
        Linking.openURL("https://www.facebook.com/iY-818020725034867/");
        break;
      case "insta":
        Linking.openURL("https://www.instagram.com/iynonprofit/");
        break;
      case "about":
        Linking.openURL("https://www.itsyours.org/about-us/");
        break;
      case "shop":
        Linking.openURL("https://www.itsyours.org/product/its-yours-t-shirt/");
        break;
      default:
        break;
    }

  }

  let rendered;

  switch (location) {
    case "home":
      rendered = (
        <Home
          container={styles.container}
          link={link} button={styles.button}
          icon={styles.tinyIcon}
          location={changeLocation}
          pill={styles.pillButton}
          text={styles.homeText}
          smallContainer={styles.smallContainer}
        />
      );
      break;
    case "menu":
      rendered = (
        <Menu
          container={styles.container}
          link={link} button={styles.button}
          icon={styles.tinyIcon}
          location={changeLocation}
          back={back}
        />
      );
      break;
    default:
      setLocation("home");
      break;
  }

  return (
    <React.Fragment>
      <Header header={styles.header} text={styles.text} image={styles.tinyLogo} truth={styles.truthBeTold} />
      <ScrollView>
        {rendered}
      </ScrollView>
      <Footer footer={styles.footer} icon={styles.tinyIcon} iconContainer={styles.iconContainer} link={link} />
    </React.Fragment>
  );
}

