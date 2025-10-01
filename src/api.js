const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT = "2560-ftb-ct-web-pt";
const API = BASE_URL + COHORT;           


export async function fetchGuests(signal) {
  const res = await fetch(`${API}/guests`, { signal });
  if (!res.ok) throw new Error(`Failed to fetch guests: ${res.status}`);
  const data = await res.json();

  return data?.data ?? data;
}

export async function fetchGuestById(id, signal) {
  const res = await fetch(`${API}/guests/${id}`, { signal });
  if (!res.ok) throw new Error(`Failed to fetch guest ${id}: ${res.status}`);
  const data = await res.json();
  return data?.data ?? data;
}
