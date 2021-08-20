import axios from "axios";

export const getCategories = async () => {
  const { data } = await axios.get("/api/category-list");
  return data;
};

export const getPrograms = async (category) => {
  const { data } = await axios.get("/api/program-list?category=" + category);
  return data;
};

export const getAssets = async (program_id) => {
  const { data } = await axios.get("/api/assets?program_id=" + program_id);
  return data;
};
