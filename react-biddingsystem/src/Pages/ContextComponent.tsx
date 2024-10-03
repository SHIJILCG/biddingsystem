import { createContext, useContext, useState } from "react";
import { Users } from "../Data_store/Users";
import { bidding_Products } from "../Data_store/Products";
import {
  bidding_ProductsPropsType,
  ResultProdutsPropsType,
  UserPropsType,
} from "../Types/types";
import getProductsFromLocal from "../Common/getProductsFromLocal";
import { getUserFromLocal } from "../Common/getUserFromLocal";

export const MainComponentsContext = createContext<{
  usersList: UserPropsType;
  productsList: bidding_ProductsPropsType;
  setUserProducts?: (
    value?: bidding_ProductsPropsType,
    editedUsers?: UserPropsType
  ) => void;
}>({
  usersList: [],
  productsList: [],
});

export const ContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userList, setUserList] = useState<UserPropsType>(
    getUserFromLocal() || Users
  );
  const [productList, setProductList] = useState<bidding_ProductsPropsType>(
    getProductsFromLocal() || bidding_Products
  );
  const setThe_User_Products = (
    editedProducts?: ResultProdutsPropsType,
    editedUsers?: UserPropsType
  ) => {
    ////////function to set updated productist and userList
    localStorage.clear();
    editedProducts !== undefined &&
      localStorage.setItem("Products", JSON.stringify(editedProducts));
    editedUsers !== undefined &&
      localStorage.setItem("users", JSON.stringify(editedUsers));
    setProductList(getProductsFromLocal());
    setUserList(getUserFromLocal());
  };
  return (
    <MainComponentsContext.Provider
      value={{
        productsList: productList,
        usersList: userList,
        setUserProducts: setThe_User_Products,
      }}
    >
      {children}
    </MainComponentsContext.Provider>
  );
};

export const useBiddingContext = () => useContext(MainComponentsContext)

