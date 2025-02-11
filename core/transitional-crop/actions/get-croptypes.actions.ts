import { recobatApi } from "@/core/api/recobatApi";
import { CropTypesProps } from "../interfaces/index.interface";

//* accion para llamar todas las fincas del usuario autenticado
export const getCropTypes = async (TransitionalId: string) => {
  try {
    const { data } = await recobatApi.get<CropTypesProps>(
      `/transitional-crops/${TransitionalId}?populate=crop_types`
    );
    // formateamos la data para llevarnos solo lo de del nombre y el id
    // const cropTypes = Array.isArray(data.data)
    //   ? data.data.map((cropType) => ({
    //       label: cropType.crop_type.name,
    //       value: cropType.id,
    //     }))
    //   : [];
    // console.log(cropTypes);
    return data.data.crop_types; //* devuelve los tipos de cultivos del cultivo seleccionado
  } catch (error) {
    throw new Error(
      "Error al momento de obtener los datos de las fincas del paciente"
    );
  }
};
