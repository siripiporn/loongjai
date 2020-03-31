
import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'prompt-bold': require('./assets/fonts/Prompt-Bold.ttf'),
  'prompt-medium': require('./assets/fonts/Prompt-Medium.ttf'),
  'prompt-thin': require('./assets/fonts/Prompt-Thin.ttf'),
  'prompt-regular': require('./assets/fonts/Prompt-Regular.ttf')
 
});
 
export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <Navigator />
     
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setfontLoaded(true)}
      />
    )
  }

}

