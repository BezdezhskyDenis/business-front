import httpService from "./httpService";

const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export async function getAllCards() {
  const url = `${API_BASE}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getMyCards() {
  const url = `${API_BASE}/my-cards`;
  const response = await httpService.get(url,{
    headers: {
      'x-auth-token': localStorage.token
    }
  });
  return await response;
}

// export function createCard(card) {
//   return httpService.post("/cards", card);
// }

// export function getAll() {
//   return httpService.get("/cards");
// }

// export function getCard(id) {
//   return httpService.get(`/cards/${id}`);
// }

// export function deleteCard(id) {
//   return httpService.delete(`/cards/${id}`);
// }

// export function updateCard(id, card) {
//   return httpService.put(`/cards/${id}`, card);
// }

const cardsService = {
  // createCard,
  getMyCards,
  // getCard,
  // deleteCard,
  // updateCard,
  getAllCards
};

export default cardsService;

