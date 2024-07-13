import { axiosInstance } from "@/libs/axiosInstance";

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
    console.log(id, "deleteapi");

     try {
       const res = await axiosInstance.delete(`/delete/${id}`);
       return res.data;
     } catch (error) {
       console.error("deleteEmployee", error);
       throw error;
     }
   };


// import { axiosInstance } from "@/libs/axiosInstance";

// interface Employee {
//   id: number;
//   employee_name: string;
//   employee_salary: number;
//   employee_age: number;
//   profile_image: string;
// }

// interface ApiResponse<T> {
//   status: string;
//   data: T;
//   message: string;
// }

// // Get Employee Lists
// export const getEmployeeLists = async (): Promise<ApiResponse<Employee[]>> => {
//   try {
//     const res = await axiosInstance.get<ApiResponse<Employee[]>>("/employees");
//     return res.data;
//   } catch (error) {
//     console.error("get EmployeeList", error);
//     throw error;
//   }
// };

// // Employee details
// export const getEmployeeDetails = async (
//   id: number
// ): Promise<ApiResponse<Employee>> => {
//   try {
//     const res = await axiosInstance.get<ApiResponse<Employee>>(
//       `/employees/${id}`
//     );
//     return res.data;
//   } catch (error) {
//     console.error("get employee details", error);
//     throw error;
//   }
// };

// // Create Employee
// export const createEmployee = async (
//   data: Omit<Employee, "id">
// ): Promise<ApiResponse<Employee>> => {
//   try {
//     const res = await axiosInstance.post<ApiResponse<Employee>>(
//       "/create",
//       data
//     );
//     return res.data;
//   } catch (error) {
//     console.error("createEmployee", error);
//     throw error;
//   }
// };

// // Update Employee
// export const updateEmployeeInfo = async (
//   id: number,
//   data: Partial<Omit<Employee, "id">>
// ): Promise<ApiResponse<Employee>> => {
//   try {
//     const res = await axiosInstance.put<ApiResponse<Employee>>(
//       `/update/${id}`,
//       data
//     );
//     return res.data;
//   } catch (error) {
//     console.error("updateEmployeeInfo", error);
//     throw error;
//   }
// };

// // Delete Employee
// export const deleteEmployee = async (
//   id: number
// ): Promise<ApiResponse<null>> => {
//   try {
//     const res = await axiosInstance.delete<ApiResponse<null>>(`/delete/${id}`);
//     return res.data;
//   } catch (error) {
//     console.error("deleteEmployee", error);
//     throw error;
//   }
// };

