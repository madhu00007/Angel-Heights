import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidApi-Host': 'bayut.p.rapidapi.com',
      'x-rapidApi-Key': '387cdff499mshaa9f57701f472e3p15227bjsnf4a0af71b29b' ,
    },
  });
    
  return data;
}