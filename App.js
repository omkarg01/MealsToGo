import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/app";
import "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useLateef,
  Lateef_400Regular,
} from "@expo-google-fonts/lateef";
import {
  useFonts as useJomhuria,
  Jomhuria_400Regular,
} from "@expo-google-fonts/jomhuria";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBEoy-aH1zavpGQfukZQoj9CybLb5aDkpo",
  authDomain: "mealstogo-27a97.firebaseapp.com",
  projectId: "mealstogo-27a97",
  storageBucket: "mealstogo-27a97.appspot.com",
  messagingSenderId: "5462697765",
  appId: "1:5462697765:web:5832dba12b8193de3a9ccc",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const { user, onLogin } = useContext(AuthenticationContext);
  // useEffect(() => {
  //   onLogin
  // }, []);

  const [lateefLoaded] = useLateef({
    Lateef_400Regular,
  });
  const [jomhuriaLoaded] = useJomhuria({
    Jomhuria_400Regular,
  });
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!lateefLoaded || !jomhuriaLoaded || !oswaldLoaded || !latoLoaded) {
    return null;
  }
  // if (!isAuthenticated) {
  //   return null;
  // }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
