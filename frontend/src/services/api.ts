// services/api.ts
const API_BASE = "/api";

export async function get<T>(url: string): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`);
  if (!res.ok) throw new Error("Error al obtener datos");
  return res.json();
}

export async function post<T>(url: string, body: any): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Error al enviar datos");
  return res.json();
}

export async function put<T>(url: string, body: any): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Error al actualizar datos");
  return res.json();
}

export async function del<T>(url: string): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar datos");
  return res.json();
}
