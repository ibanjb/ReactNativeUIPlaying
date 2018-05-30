import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import store from './redux/store';
import Splash from './screens/splash';

console.disableYellowBox = true;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }

  _loadAssets = async() => {
    await Font.loadAsync({
      'fontawesome': require('./assets/fonts/fontawesome.ttf'),
      'icomoon': require('./assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({loaded: true});
  };

  componentWillMount() {
    this._loadAssets();
  }

  render() {
    const loaded = this.state.loaded;    

    if (loaded) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ loaded: false })}
          onError={console.warn}
        />
      );
    }
    return (      
      <Provider store={store}>
        <Splash />
      </Provider>    
    );
  }
}

Expo.registerRootComponent(App);