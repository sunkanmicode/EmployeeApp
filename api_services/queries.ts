import { useQuery } from "@tanstack/react-query";
import { getEmployeeDetails, getEmployeeLists } from ".";

export const useEmployeeLists = () => {
  return useQuery({
    queryKey: ["get-employee-lists"],
    queryFn: getEmployeeLists,
  });
};


 export const useEmployeeDetails = () => {
   return useQuery({
     queryKey: ["get-employee-details"],
     queryFn: getEmployeeDetails,
   });
 };