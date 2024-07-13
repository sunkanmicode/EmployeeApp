import React from "react";
import { View, Text } from "react-native";

export default function DetailsTab() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-5">
      <Text className="text-lg text-center">
        Select an employee from the list to view details.
      </Text>
    </View>
  );
}
