import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "@ui-kitten/components";
import { useGetLocation, useLocatiobPostion } from "./hooks";
const Location = () => {
  const setLocation = useGetLocation();
  const onPress = () => setLocation();
  const { longtude, latitude } = useLocatiobPostion();
  const [place, setPlace] = React.useState("");
  const onTextChange = (value: string) => {
    setPlace(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={place}
        onChangeText={onTextChange}
        placeholder="Where Are you from?"
      />
      <Button onPress={onPress} disabled={!place.length}>
        Get Location
      </Button>
      {longtude && latitude ? (
        <Text>{`Long => ${longtude} lat => ${latitude}`}</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Location;
