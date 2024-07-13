import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import CustomInput from "../custom_comp/CustomInput";
import { CustomButton } from "../custom_comp/CustomModel/CustomButton";
import { Controller, useForm } from "react-hook-form";
import { useCreateEmployee } from "@/api_services/mutations";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const AddEmployee = ({ CloseSheet }: any) => {
  //useHook
  const createEmployee = useCreateEmployee(CloseSheet);

  //USEFORM
  const { control, handleSubmit, formState, watch } = useForm();

  const onSubmit = (data:any) => {
    createEmployee.mutate({
      name: data?.employeeName,
      salary: data?.employeeSalary,
      age: data?.employeeAge,
    });
  };
  return (
    <View className="flex-1 p-5 bg-white">
      <View className=" flex-row justify-between my-2">
        <Text className=" font-bold text-lg">Add New Employee</Text>
        <TouchableOpacity
          onPress={() => {
            CloseSheet();
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          name="employeeName"
          rules={{
            required: "Employee name is required",
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <CustomInput
              label="Employee name"
              whiteBg
              placeholder="enter name"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="employeeSalary"
          rules={{
            required: "Employee salary is required",
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <CustomInput
              label="Employee salary"
              whiteBg
              placeholder="Enter salary"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="employeeAge"
          rules={{
            required: "Employee age is required",
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <CustomInput
              label="Employee age"
              whiteBg
              keyboardType="numeric"
              placeholder="Enter age"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />

        <CustomButton
          primary
          title={createEmployee?.isPending? 'Loading...':"Save"}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </View>
  );
};

export default AddEmployee;
