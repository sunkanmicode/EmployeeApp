import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";



export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Employee List",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="employees"
        options={{
          title: "Employee Details",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-details"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
