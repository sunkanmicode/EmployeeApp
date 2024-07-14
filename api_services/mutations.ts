import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { createEmployee, deleteEmployee, updateEmployeeInfo } from ".";

export const useCreateEmployee = (CloseSheet:any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEmployee,
    onSuccess(data: any) {
      queryClient.invalidateQueries({ queryKey: ["get-employee-lists"] });
      Toast.show({
        type: "success",
        text2: data.message,
      });
      CloseSheet()
    },
    onError(error: any) {
      console.log(error);
      if (error?.response) {
        Toast.show({
          type: "error",
          text2: error?.response?.data?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text2: error?.message,
        });
      }
      CloseSheet();

    },
  });
};

export const useUpdateEmployeeInfo = (closeModel:()=>void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateEmployeeInfo,
    onSuccess(data: any) {
      queryClient.invalidateQueries({ queryKey: ["get-employee-lists"] });
      Toast.show({
        type: "success",
        text2: data.message,
      });
      closeModel()
    },
    onError(error: any) {
      console.log(error);
      if (error?.response) {
        Toast.show({
          type: "error",
          text2: error?.response?.data?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text2: error?.message,
        });
      }
    },
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess(data: any) {
      console.log(data, "Successresole");
      queryClient.invalidateQueries({ queryKey: ["get-employee-lists"] });
      Toast.show({
        type: "success",
        text2: data.message,
      });
    },
    onError(error: any) {
      console.log(error);
      if (error?.response) {
        Toast.show({
          type: "error",
          text2: error?.response?.data?.message,
        });
      } else {
        Toast.show({
          type: "error",
          text2: error?.message,
        });
      }
    },
  });
};
