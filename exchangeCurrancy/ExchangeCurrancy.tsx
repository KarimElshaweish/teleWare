import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { useCurreny } from "../currancy/hooks";
import { Button, Text } from "@ui-kitten/components";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";
interface Boundries {
  start: number;
  end: number;
}
interface Props {
  conversion_rates: { [key: string]: number };
}
const chartConfig: AbstractChartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
};
const Graph = ({ conversion_rates }: Props) => {
  const [boundries, setBoundries] = useState<Boundries>({ start: 0, end: 10 });
  const conversionRates = Object.keys(conversion_rates ?? []);
  const length = conversionRates.length;
  const labels = conversionRates.slice(boundries.start, boundries.end);
  const values = Object.values(conversion_rates);
  useEffect(() => {
    setData({ labels, datasets });
  }, [boundries]);
  const datasets = [
    {
      data: values.slice(boundries.start, boundries.end),
    },
  ];
  const onPress = () => {
    setBoundries({ start: boundries.end + 1, end: boundries.end + 11 });
  };
  const lastPagePress = () => {
    setBoundries({ start: boundries.start - 11, end: boundries.start - 1 });
  };
  const [data, setData] = useState({ labels, datasets });
  return (
    <View>
      <Text>{length}</Text>
      <View style={styles.container}>
        <Button onPress={lastPagePress} disabled={boundries.start < 11}>
          Last Page
        </Button>
        <Button onPress={onPress} disabled={boundries.end + 11 > length}>
          Next Page
        </Button>
      </View>
      <LineChart
        data={data}
        width={400}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};
const ExchangeCurrancy = () => {
  const currancy = useCurreny();
  if (Object.keys(currancy).length !== 0) {
    return <Graph conversion_rates={currancy} />;
  }
  return <ActivityIndicator size="large"/>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  chart: {
    marginVertical: 8,
    flex: 1,
  },
});

export default ExchangeCurrancy;
