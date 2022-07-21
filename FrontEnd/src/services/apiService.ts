import { ICampeonatoResult } from "./interfaces/ICampeonatoResult";

const BASE_URL = "http://localhost:3001";

export function GetResults(year: string): Promise<ICampeonatoResult[]> {
  return fetch(`${BASE_URL}/${year}`).then(handleResponse);
}

function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}
