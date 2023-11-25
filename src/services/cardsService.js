// import httpService from "./httpService";

const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export async function getAllCards() {
  const url = `${API_BASE}`;
  const response = await fetch(url);
  return await response.json();
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
  // getAll,
  // getCard,
  // deleteCard,
  // updateCard,
  getAllCards
};

export default cardsService;

