import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import {store, persistor} from "./src/redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from "react-native";

export default function App() {
  return (<Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
  <NativeRouter>
      <StatusBar style="auto" translucent={true} />
      
      <Main />
  </NativeRouter>
    </PersistGate>
  </Provider>

  );
}
