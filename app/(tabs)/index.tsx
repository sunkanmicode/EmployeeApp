import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEmployeeLists } from "@/api_services/queries";
import Spinner from "react-native-loading-spinner-overlay";
import { useDeleteEmployee } from "@/api_services/mutations";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EditEmployeeInfo from "../components/AddEmployee";
import CustomBottomSheet from "../custom_comp/BottomSheet";
import AddEmployee from "../components/AddEmployee";

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

const EmployeeListScreen = () => {
  //Api useHook
  const employeeData = useEmployeeLists();
  const deleteEmployee = useDeleteEmployee();
  //usestate
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(
    employeeData?.data?.data
  );
  const [currentIndex, setCurrentIndex] = useState<number | null>();

  const SheetRef = React.useRef<null | any>(null);

  //
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = employeeData?.data?.data?.filter((employee: any) =>
      employee.employee_name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredEmployees(filtered);
  }, [searchQuery]);

  const handleDelete = (item: Employee, index: number) => {
    // Implement delete functionality heres
    setCurrentIndex(index);

    Alert.alert(
      "Delete!",
      `Are you sure you want to delete ${item?.employee_name}?`,
      [
        {
          text: "Cancel",
          onPress: () => {},
        },
        {
          text: "Ok",
          onPress: () => {
            deleteEmployee.mutate(item?.id);

            console.log("removed");
          },
        },
      ]
    );
  };

  const handleEdit = (id: number) => {
    // Implement edit functionality here
    console.log(`Edit employee with id: ${id}`);
  };

  const height = hp("50%");

  const CloseSheet = () => {
    if (SheetRef.current) {
      SheetRef.current.close();
    }
  };
  const OpenSheet = () => {
    if (SheetRef.current) {
      SheetRef.current.open();
    }
  };

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
      <View className="flex-1  bg-gray-100 relative">
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

        <TouchableOpacity
          className="w-14 h-14 bg-slate-400 rounded-full items-center justify-center absolute bottom-10 right-5"
          onPress={() => {
            OpenSheet();
          }}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <CustomBottomSheet
        closeOnDragDown={true}
        height={height}
        ref={SheetRef}
        message={<AddEmployee CloseSheet={CloseSheet} />}
      />
    </>
  );
};

export default EmployeeListScreen;
