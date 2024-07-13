<<<<<<< HEAD
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router';
=======
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
>>>>>>> 37422536a79a2b3889c07bfa2abff4633c74db98
import { Ionicons } from "@expo/vector-icons";
import {  useEmployeeLists } from "@/api_services/queries";
import Spinner from "react-native-loading-spinner-overlay";
import { useDeleteEmployee } from "@/api_services/mutations";
import Toast from "react-native-toast-message";

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

const EmployeeListScreen = () => {
<<<<<<< HEAD
  //usestate
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredEmployees, setFilteredEmployees] =
      useState<Employee[]>();
=======

  //useState
  const [currentIndex, setCurrentIndex] = useState<number | null>();
>>>>>>> 37422536a79a2b3889c07bfa2abff4633c74db98
  //Api useHook
  const employeeData = useEmployeeLists();
  const deleteEmployee = useDeleteEmployee();


  //
   useEffect(() => {
     const lowercasedQuery = searchQuery.toLowerCase();
     const filtered = employeeData?.data?.data.filter((employee:any) =>
       employee.employee_name.toLowerCase().includes(lowercasedQuery)
     );
     setFilteredEmployees(filtered);
   }, [searchQuery]);

 

  const handleDelete = (item: Employee, index: number) => {
    // Implement delete functionality heres
    console.log(`Delete employee with id: ${item.id}`);
    setCurrentIndex(index)

    Alert.alert("Delete!", `Are you sure you want to delete ${item?.employee_name}?`, [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Ok",
        onPress: () => {
          //  Toast.show({
          //    type: "success",
          //    text2: "You have logged out",
          //  });
          deleteEmployee.mutate(item?.id);

          console.log("removed");
        },
      },
    ]);
  };

  const handleEdit = (id: number) => {
    // Implement edit functionality here
    console.log(`Edit employee with id: ${id}`);
    // For example, you might navigate to an edit screen:
    // router.push(`/employees/edit/${id}`);
  };

  // console.log(employeeList.data, "employeeList");

  const renderItem = ({ item, index }: { item: Employee; index: number }) => (
    <View className="flex-row items-center bg-white p-5 my-2 mx-4 rounded-md">
      <Link href={`/employees/${item.id}`} asChild>
        <TouchableOpacity className="flex-1">
          <Text className="text-lg font-bold">{item.employee_name}</Text>
          <Text className="text-sm text-gray-600">
            Salary: ${item.employee_salary}
          </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity onPress={() => handleEdit(item.id)} className="mr-4">
        <Ionicons name="pencil" size={24} color="#4B5563" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item, index)}>
        {deleteEmployee.isPending && currentIndex === index ? (
          <ActivityIndicator size="small" />
        ) : (
          <Ionicons name="trash" size={24} color="#EF4444" />
        )}
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <Spinner
        visible={employeeData.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      <View className="flex-1  bg-gray-100">
        <View className="pt-10 pb-4 px-4 bg-white">
          <TextInput
            className="bg-gray-200 px-4 py-2 rounded-md"
            placeholder="Search employees..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <FlatList
          data={filteredEmployees}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

export default EmployeeListScreen;
