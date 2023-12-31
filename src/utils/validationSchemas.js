
export const createCardValidation = {
    title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      image:{
        url: "",
        alt: "",
      },
      address:{
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: undefined,
      },
}

export const manageCardValidation = (card)=>{
  const cardData = {
    title: card.title,
      subtitle: card.subtitle,
      description: card.description,
      phone: card.phone,
      email: card.email,
      web: card.web,
      image:{
        url: card.image?.url,
        alt: card.image?.alt,
      },
      address:{
        state: card.address?.state,
        country: card.address?.country,
        city: card.address?.city,
        street: card.address?.street,
        houseNumber: card.address?.houseNumber,
        zip: card.address?.zip,
      },
  }
  return cardData
}

export default createCardValidation