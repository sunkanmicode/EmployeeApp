import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEmployeeDetails } from "@/api_services/queries";
import Spinner from "react-native-loading-spinner-overlay";

export default function EmployeeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  //API USEHOOK CALL
  const employeeDetails = useEmployeeDetails(id);

  const employee = employeeDetails?.data?.data;

  return (
    <>
      <Spinner
        visible={employeeDetails.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      {employeeDetails.isError && (
        <View className="flex-1 items-center justify-center bg-gray-100 p-5">
          <Text className="text-lg text-center">Something went wromg.</Text>
        </View>
      )}

      {employeeDetails?.isSuccess && (
        <View className="flex-1 items-center justify-center bg-gray-100 p-5">
          <Text className="text-2xl font-bold mb-5">
            {employee.employee_name}
          </Text>
          <Text className="text-lg mb-2.5">ID: {employee.id}</Text>
          <Text className="text-lg mb-2.5">Age: {employee.employee_age}</Text>
          <Text className="text-lg mb-2.5">
            Salary: ${employee.employee_salary}
          </Text>
        </View>
      )}
    </>
  );
}
