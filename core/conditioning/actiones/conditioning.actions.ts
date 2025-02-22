import { recobatApi } from "@/core/api/recobatApi";
import { RegisterActivityConditioning } from "../interfaces/index.interface";

export const registerConditioningActivity = async (
  employee: string,
  salary: string,
  register_date: string,
  type_conditioning: string,
  idConditioningProcces: string,
  status_activity = "enabled"
) => {
  try {
    const { data } = await recobatApi.post<RegisterActivityConditioning>(
      "/conditioning-activities",
      {
        data: {
          employees: [employee],
          salary,
          register_date,
          status_activity,
          type_conditionings: [type_conditioning],
          conditioning_sub_details: [idConditioningProcces],
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    // throw new Error("Error al momento de iniciar sesion");
    return null;
  }
};
