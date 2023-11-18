import { useEffect, useState } from "react";
// import cardsService from "../services/cardsService";

export const useMyCards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "denis",
      description:"qqqqq",
      phone: 1234234,
      address: "test 20 test",
      image:"https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg?size=626&ext=jpg&ga=GA1.1.2106351961.1670174756&semt=sph",
  },{
    id: 12,
    title: "test",
    description:"test",
    phone: 12392835023,
    address: "test 20 test",
    image:"https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg?size=626&ext=jpg&ga=GA1.1.2106351961.1670174756&semt=sph",
  
},{
  id: 15,
  title: "test",
  description:"test",
  phone: 12392835023,
  address: "test 20 test",
  image:"https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg?size=626&ext=jpg&ga=GA1.1.2106351961.1670174756&semt=sph",

}
  ]);

  // useEffect(() => {
  //   const getCards = async () => {
  //     const { data } = await cardsService.getAll();
  //     setCards(data);
  //   };

  //   getCards();
  // }, []);

  return cards;
};
