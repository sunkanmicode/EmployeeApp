import { axiosInstance } from "@/libs/axiosInstance";

export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

//Get Employee Lists
export const getEmployeeLists = async () => {
  try {
    const res = await axiosInstance.get(`/employees`);
    return res.data;
  } catch (error) {
    console.error("get EmployeeList", error);
    throw error;
  }
};

//Employee details
export const getEmployeeDetails = async (id: any) => {
  try {
    const res = await axiosInstance.get(`/employee/${id}`);
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

 export const updateEmployeeInfo = async (data: any) => {
  const payload = {
    name: data?.name,
    salary: data?.salary,
    age: data?.age,
  };
   try {
     const res = await axiosInstance.put(`/update/${data.id}`, payload);
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

