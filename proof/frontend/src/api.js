import axios from "axios";

export const getPrograms = async () => {
  const { data } = await axios.get("/api/programs");
  return data;
};

export const getAssets = async program_id => {
  const { data } = await axios.get("/api/assets?program_id=" + program_id);
  return data;
};
