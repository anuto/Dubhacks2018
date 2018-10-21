import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Button,
  Alert,
} from 'react-native';

import Icon from 'expo';
import Colors from '../constants/Colors';

import { WebBrowser } from 'expo';

import ButtonIcon from '../components/ButtonIcon';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _storesNav() {

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.title}>Food Stamps</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <Text style={styles.codeHighlightText}>Welcome back!</Text>
            </View>
          </View>

          <View style={styles.buttonFormat}>
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <ButtonIcon
                  name={
                    Platform.OS === 'ios'
                      ? `ios-information-circle`
                      : 'md-map'
                  }
                />
              </View>
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android'
                ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>STORES</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <ButtonIcon
                  name={
                    Platform.OS === 'ios'
                      ? `ios-information-circle`
                      : 'md-search'
                  }
                />
              </View>
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android'
                ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>SEARCH</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.buttonFormat}>
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <ButtonIcon
                  name={
                    Platform.OS === 'ios'
                      ? `ios-information-circle`
                      : 'md-add'
                  }
                />
              </View>
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android'
                ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>ADD RECEIPT</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <ButtonIcon
                  name={
                    Platform.OS === 'ios'
                      ? `ios-information-circle`
                      : 'md-options'
                  }
                />
              </View>
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android'
                ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>PROFILE</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </ScrollView>


      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    display: 'none',
  },
  contentContainer: {
    paddingTop: 30,
    marginTop: 50,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  buttonContainer: {
    margin: 10,
    height: 150,
    width: 150,
    backgroundColor: "#A4C639",
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto',
  },
  buttonFormat: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: -10,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -30,
  },
});
