import { BASE_PATH } from '../utils/constants'

export async function getCertificate(id){
  try {
    const url = `${BASE_PATH}/certificates/${id}`
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getAllCertificates(){
  
}