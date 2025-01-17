import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import CustomInput from '../custom_comp/CustomInput';
import { Controller, useForm } from 'react-hook-form';
import { CustomButton } from '../custom_comp/CustomModel/CustomButton';
import { useUpdateEmployeeInfo } from '@/api_services/mutations';


const EditEmployee = ({ setModelVisible, getEmployeeinfo }: any) => {

  
  const { control, handleSubmit, formState, watch, reset } = useForm();

  React.useEffect(() => {
    if (getEmployeeinfo?.data) {
      reset({
        employeeName: getEmployeeinfo?.data?.data.employee_name,
        employeeSalary: getEmployeeinfo?.data?.data.employee_salary.toString(),
        employeeAge: getEmployeeinfo?.data?.data.employee_age.toString(),
      });
    }
  }, [reset, getEmployeeinfo?.data]);


  const closeModel =()=>{
    setModelVisible(false)
  }


  const onSubmit = (data:any) => {
    updateEmployeeData.mutate({
      id:getEmployeeinfo?.data?.data?.id,
      name: data?.employeeName,
      salary: data?.employeeSalary,
      age: data?.employeeAge,
    });
  };
const updateEmployeeData = useUpdateEmployeeInfo(closeModel);
  return (
    <View className=" h-auto w-80 p-5 bg-white rounded-lg">
      <View className=" flex-row justify-between my-2">
        <Text className=" font-bold text-sm">Edit Employee</Text>
        <TouchableOpacity
          onPress={() => {
            setModelVisible(false);
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {getEmployeeinfo.isPending && <ActivityIndicator />}
      {getEmployeeinfo.data && (
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
                placeholder="enter salary"
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
            title={updateEmployeeData?.isPending ? "Loading..." : "Save"}
            onPress={handleSubmit(onSubmit)}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default EditEmployee