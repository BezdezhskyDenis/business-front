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
  return response.data;
}

export async function createCard(card) {
  const url = `${API_BASE}`;
  const response = await httpService.post(url,card,{
    headers: {
      'x-auth-token': localStorage.token
    }
  });
  return response;
}

export async function getCard(id) {
  const url = `${API_BASE}/${id}`;
  const response = await httpService.get(url);
  return await response.data
}

// export function deleteCard(id) {
//   return httpService.delete(`/cards/${id}`);
// }

// export function updateCard(id, card) {
//   return httpService.put(`/cards/${id}`, card);
// }

const cardsService = {
  createCard,
  getMyCards,
  getCard,
  // deleteCard,
  // updateCard,
  getAllCards
};

export default cardsService;

