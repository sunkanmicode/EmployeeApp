import { useQuery } from "@tanstack/react-query";
import { deleteEmployee, getEmployeeDetails, getEmployeeLists } from ".";

export const useEmployeeLists = () => {
  return useQuery({
    queryKey: ["get-employee-lists"],
    queryFn: getEmployeeLists,
  });
};


 export const useEmployeeDetails = (id:any) => {
   return useQuery({
     queryKey: ["get-employee-details", {id}],
     queryFn: () => getEmployeeDetails(id),
     enabled: !!id,
   });
 };

