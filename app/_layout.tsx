import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Slot, Stack } from "expo-router"
const RootLayout = () => {
  return (<Stack>
    <Stack.Screen name="index" options={{ headerShown: true }} />
  </Stack>

  )
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});