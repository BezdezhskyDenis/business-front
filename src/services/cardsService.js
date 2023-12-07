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

export async function deleteCard(id,bizNumber) {
  const url = `${API_BASE}/${id}`;
  const response = await httpService.delete(url,bizNumber,{
    headers: {
      'x-auth-token': localStorage.token
    }
  });
  return response;
}

export async function updateCard(id, card) {
  const url = `${API_BASE}/${id}`;
  const response = await httpService.put(url,card,{
    headers: {
      'x-auth-token': localStorage.token
    }
  });
  return response;
}

export async function likeCard(id) {
  const url = `${API_BASE}/${id}`;
  const card = await getCard(id)
  const cardData = {
    // title:card.title,
    // subtitle:card.subtitle,
    // description:card.description,
    // phone:card.phone,
    // email:card.email,
    // web:card.web,
    // image:{
    //   url:card.image.url,
    //   alt:card.image.alt,
    // },
    // address:{
    //   state:card.address.state,
    //   country:card.address.country,
    //   city:card.address.city,
    //   street:card.address.street,
    //   houseNumber:card.address.houseNumber,
    //   zip:card.address.zip
    // },
    card
  }
  // console.log(id, card, localStorage.token, url)
  const response = await httpService.patch(url,card,{
    headers: {
      'x-auth-token': localStorage.token
    }
  });
  return response;
}

const cardsService = {
  createCard,
  getMyCards,
  getCard,
  deleteCard,
  updateCard,
  getAllCards,
  likeCard
};

export default cardsService;

