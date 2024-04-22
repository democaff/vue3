import http from "./http";

export async function useBanner() {
  const banner = await http.get("/banner", { type: 1 });
  return banner;
}
