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

  //useState
  const [currentIndex, setCurrentIndex] = useState<number | null>();
  //Api useHook
  const employeeData = useEmployeeLists();
  const deleteEmployee = useDeleteEmployee();

  // const employeeData: Employee[] = [
  //   {
  //     id: 1,
  //     employee_name: "Tiger Nixon",
  //     employee_salary: 320800,
  //     employee_age: 61,
  //     profile_image: "",
  //   },
  //   {
  //     id: 2,
  //     employee_name: "Garrett Winters",
  //     employee_salary: 170750,
  //     employee_age: 63,
  //     profile_image: "",
  //   },
  //   {
  //     id: 3,
  //     employee_name: "Ashton Cox",
  //     employee_salary: 86000,
  //     employee_age: 66,
  //     profile_image: "",
  //   },
  //   {
  //     id: 4,
  //     employee_name: "Cedric Kelly",
  //     employee_salary: 433060,
  //     employee_age: 22,
  //     profile_image: "",
  //   },
  //   {
  //     id: 5,
  //     employee_name: "Airi Satou",
  //     employee_salary: 162700,
  //     employee_age: 33,
  //     profile_image: "",
  //   },
  //   {
  //     id: 6,
  //     employee_name: "Brielle Williamson",
  //     employee_salary: 372000,
  //     employee_age: 61,
  //     profile_image: "",
  //   },
  //   {
  //     id: 7,
  //     employee_name: "Herrod Chandler",
  //     employee_salary: 137500,
  //     employee_age: 59,
  //     profile_image: "",
  //   },
  //   {
  //     id: 8,
  //     employee_name: "Rhona Davidson",
  //     employee_salary: 327900,
  //     employee_age: 55,
  //     profile_image: "",
  //   },
  //   {
  //     id: 9,
  //     employee_name: "Colleen Hurst",
  //     employee_salary: 205500,
  //     employee_age: 39,
  //     profile_image: "",
  //   },
  //   {
  //     id: 10,
  //     employee_name: "Sonya Frost",
  //     employee_salary: 103600,
  //     employee_age: 23,
  //     profile_image: "",
  //   },
  //   {
  //     id: 11,
  //     employee_name: "Jena Gaines",
  //     employee_salary: 90560,
  //     employee_age: 30,
  //     profile_image: "",
  //   },
  //   {
  //     id: 12,
  //     employee_name: "Quinn Flynn",
  //     employee_salary: 342000,
  //     employee_age: 22,
  //     profile_image: "",
  //   },
  //   {
  //     id: 13,
  //     employee_name: "Charde Marshall",
  //     employee_salary: 470600,
  //     employee_age: 36,
  //     profile_image: "",
  //   },
  //   {
  //     id: 14,
  //     employee_name: "Haley Kennedy",
  //     employee_salary: 313500,
  //     employee_age: 43,
  //     profile_image: "",
  //   },
  //   {
  //     id: 15,
  //     employee_name: "Tatyana Fitzpatrick",
  //     employee_salary: 385750,
  //     employee_age: 19,
  //     profile_image: "",
  //   },
  //   {
  //     id: 16,
  //     employee_name: "Michael Silva",
  //     employee_salary: 198500,
  //     employee_age: 66,
  //     profile_image: "",
  //   },
  //   {
  //     id: 17,
  //     employee_name: "Paul Byrd",
  //     employee_salary: 725000,
  //     employee_age: 64,
  //     profile_image: "",
  //   },
  //   {
  //     id: 18,
  //     employee_name: "Gloria Little",
  //     employee_salary: 237500,
  //     employee_age: 59,
  //     profile_image: "",
  //   },
  //   {
  //     id: 19,
  //     employee_name: "Bradley Greer",
  //     employee_salary: 132000,
  //     employee_age: 41,
  //     profile_image: "",
  //   },
  //   {
  //     id: 20,
  //     employee_name: "Dai Rios",
  //     employee_salary: 217500,
  //     employee_age: 35,
  //     profile_image: "",
  //   },
  //   {
  //     id: 21,
  //     employee_name: "Jenette Caldwell",
  //     employee_salary: 345000,
  //     employee_age: 30,
  //     profile_image: "",
  //   },
  //   {
  //     id: 22,
  //     employee_name: "Yuri Berry",
  //     employee_salary: 675000,
  //     employee_age: 40,
  //     profile_image: "",
  //   },
  //   {
  //     id: 23,
  //     employee_name: "Caesar Vance",
  //     employee_salary: 106450,
  //     employee_age: 21,
  //     profile_image: "",
  //   },
  //   {
  //     id: 24,
  //     employee_name: "Doris Wilder",
  //     employee_salary: 85600,
  //     employee_age: 23,
  //     profile_image: "",
  //   },
  // ];

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
      <View className="flex-1 bg-gray-100">
        <FlatList
          data={employeeData?.data?.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

export default EmployeeListScreen;
