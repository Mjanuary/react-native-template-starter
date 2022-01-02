import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // redux-chrome-tool
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import tw from "tailwind-react-native-classnames";
import Home from "./screens/Home";

// const store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
); // redux-chrome-tool enabled

let composeEnhancers = compose;

// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// }

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
        <Text style={tw`text-4xl font-bold`}>app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
