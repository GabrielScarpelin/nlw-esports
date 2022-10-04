
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'

import { Home } from './src/screens/Home';
import { Loading } from './src/screens/Loading';
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
    Inter_600SemiBold
  })
  return (
    <Background>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
