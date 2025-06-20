import { API_BASE_URL } from "./config";

// Obtener todas las propiedades
export const getAllProperties = async () => {
  const res = await fetch(`${API_BASE_URL}/properties`);
  if (!res.ok) throw new Error("Error al obtener propiedades");
  return res.json();
};

// Obtener propiedades destacadas
export const getFeaturedProperties = async () => {
  const res = await fetch(`${API_BASE_URL}/properties?featured=true`);
  if (!res.ok) throw new Error("Error al obtener destacadas");
  return res.json();
};

// Obtener propiedades por filtros
export const searchProperties = async (queryParams) => {
  const res = await fetch(`${API_BASE_URL}/properties/search?${queryParams}`);
  if (!res.ok) throw new Error("Error al buscar propiedades");
  return res.json();
};
