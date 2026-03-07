// services/api.ts
type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  token?: string;
};

const DEFAULT_BASE_URL = "http://localhost:3000";

function baseUrl() {
  return process.env.NEXT_PUBLIC_API_URL ?? DEFAULT_BASE_URL;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }

  const res = await fetch(`${baseUrl()}${path}`, {
    method: options.method ?? "GET",
    headers,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const payload = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const message =
      typeof payload === "object" && payload && "message" in payload
        ? String((payload as any).message)
        : `Error HTTP ${res.status}`;
    throw new Error(message);
  }

  return payload as T;
}

export const get = <T>(path: string, token?: string) =>
  request<T>(`/api${path}`, { method: "GET", token });

export const post = <T>(path: string, body: unknown, token?: string) =>
  request<T>(`/api${path}`, { method: "POST", body, token });

export const put = <T>(path: string, body: unknown, token?: string) =>
  request<T>(`/api${path}`, { method: "PUT", body, token });

export const patch = <T>(path: string, body: unknown, token?: string) =>
  request<T>(`/api${path}`, { method: "PATCH", body, token });

export const del = <T>(path: string, token?: string) =>
  request<T>(`/api${path}`, { method: "DELETE", token });
