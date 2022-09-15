import { StyleSheet, LogBox } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

LogBox.ignoreLogs(["Remote debugger"]);

export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({});
