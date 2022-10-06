export interface IProducts {
  id: number;
  title: string;
  price: number;
  img: string;
}
export interface IProductsList {
  title: string;
  products: IProducts[];
}
export const coffee: IProductsList = {
  title: "Coffee",
  products: [
    {
      id: 1,
      title: "Double Espresso",
      price: 12.9,
      img: "https://images.unsplash.com/photo-1542128423-054d636febca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80",
    },
    {
      id: 2,
      title: "Americano",
      price: 13.9,
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      title: "Iced Americano",
      price: 13.9,
      img: "https://images.unsplash.com/photo-1581996323441-538096e854b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
    {
      id: 4,
      title: "Cappuccino",
      price: 14.9,
      img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80",
    },
    {
      id: 5,
      title: "Flat white",
      price: 11.9,
      img: "https://images.unsplash.com/photo-1591200687855-88a85ac7bb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ],
};
