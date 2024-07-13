import { axiosInstance } from "@/libs/axiosInstance";

//Get Employee Lists
export const getEmployeeLists = async (userId: any) => {
  try {
    const res = await axiosInstance.get(`/employees`);
    return res.data;
  } catch (error) {
    console.error("get EmployeeList", error);
    throw error;
  }
};


//Employee details
   export const getEmployeeDetails = async (Id: any) => {
     try {
       const res = await axiosInstance.get(`/employees/${Id}`);
       return res.data;
     } catch (error) {
       console.error("get employee details", error);
       throw error;
     }
   };

//Create Employee 
   export const createEmployee = async (data: any) => {
     try {
       const res = await axiosInstance.post(`/create`, data);
       return res.data;
     } catch (error) {
       console.error("createEmployee", error);
       throw error;
     }
   };

   //update Employee 
   export const updateEmployeeInfo = async (id: any) => {
     try {
       const res = await axiosInstance.put(`/update/${id}`);
       return res.data;
     } catch (error) {
       console.error("updateEmployeeInfo", error);
       throw error;
     }
   };

     //update Employee 
   export const deleteEmployee = async (id: any) => {
     try {
       const res = await axiosInstance.delete(`/delete/${id}`);
       return res.data;
     } catch (error) {
       console.error("deleteEmployee", error);
       throw error;
     }
   };
