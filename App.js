import { useEffect, useState } from 'react';
import Route from './src/route';
import * as Font from "expo-font";
import { Provider } from 'react-redux'; 
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './src/redux/Store'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'mon-b': require('./assets/fonts/Montserrat-Bold.ttf'),
        'mon-r': require('./assets/fonts/Montserrat-Regular.ttf'),
        'mon-l': require('./assets/fonts/Montserrat-Light.ttf'),
        'mon-eb': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  const store = createStore(reducer,applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
