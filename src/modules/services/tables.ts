import { axiosInstance } from "@/modules/services/axios";
import { type paths } from "@/schemas/schema";

//================>>>> Create a table <<<<=========================================//
export type CreateTableBodyParam =
  paths["/tables"]["post"]["requestBody"]["content"]["application/json"];
export type CreateTableResponse = paths["/tables"]["post"]["responses"]["201"];

export const createTable = async (
  params: CreateTableBodyParam,
): Promise<void> => {
  await axiosInstance.post<CreateTableResponse>("/tables", params);
};

//================>>>> Get all tables <<<<=========================================//
export type GetAllTablesResponse =
  paths["/tables"]["get"]["responses"]["200"]["content"]["application/json"];

export const getAllTables = async (): Promise<GetAllTablesResponse> => {
  const { data } = await axiosInstance.get<GetAllTablesResponse>("/tables");
  return data;
};
