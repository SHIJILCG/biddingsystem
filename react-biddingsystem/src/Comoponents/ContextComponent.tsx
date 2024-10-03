import { createContext, useContext, useState } from "react";
import { Users } from "../Data_store/Users";
import { bidding_Products } from "../Data_store/Products";
import {
  bidding_ProductsPropsType,
  ResultProdutsPropsType,
  ResultUsersPropsType,
  UserPropsType,
} from "../Types/types";
import getProductsFromLocal from "../Common/getProductsFromLocal";
import { getUserFromLocal } from "../Common/getUserFromLocal";

export const MainComponentsContext = createContext<{
  userList: UserPropsType;
  productList: bidding_ProductsPropsType;
  setThe_User_Products?: (
    value?: bidding_ProductsPropsType,
    editedUsers?: ResultUsersPropsType
  ) => void;
}>({
  userList: [],
  productList: [],
});

export const ContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let UserNames: UserPropsType =
    localStorage.getItem("users") === null ? Users : getUserFromLocal();
  let ProductsData: bidding_ProductsPropsType =
    localStorage.getItem("Products") === null
      ? bidding_Products
      : getProductsFromLocal();
  const [userList, setUserList] = useState<UserPropsType>(UserNames);
  const [productList, setProductList] =
    useState<bidding_ProductsPropsType>(ProductsData);
  const setThe_User_Products = (
    editedProducts?: ResultProdutsPropsType,
    editedUsers?: ResultUsersPropsType
  ) => {
    ////////function to set updated product list and userList
    localStorage.clear();
    editedProducts !== undefined
      ? localStorage.setItem("Products", JSON.stringify(editedProducts))
      : localStorage.setItem("Products", JSON.stringify(bidding_Products));
    editedUsers !== undefined
      ? localStorage.setItem("users", JSON.stringify(editedUsers))
      : localStorage.setItem("users", JSON.stringify(Users));
    setProductList(getProductsFromLocal());
    setUserList(getUserFromLocal());
  };
  return (
    <MainComponentsContext.Provider
      value={{
        productList,
        userList,
        setThe_User_Products,
      }}
    >
      {children}
    </MainComponentsContext.Provider>
  );
};

export const useBiddingContext = () => useContext(MainComponentsContext);
