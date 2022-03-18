import axios from "axios";

export const getCep = async (cep) => {
  console.log(cep)
  const { status, data } = await axios({
    url: "http://localhost:3001/getCep/" + cep,
  });
  console.log(data);
  return { status, data };
};
