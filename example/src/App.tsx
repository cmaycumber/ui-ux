import { useDripsyTheme } from "dripsy";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, CleanDesignProvider } from "unnamed-component-library";

export default function App() {
  const theme: any = {
    button: {
      primary: {
        bg: "primary",
      },
    },
  };

  return (
    <CleanDesignProvider theme={theme}>
      <Component />
      <View style={styles.container}>
        <Button>Test</Button>
      </View>
    </CleanDesignProvider>
  );
}

const Component = () => {
  const { theme } = useDripsyTheme();
  console.log(theme);
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
