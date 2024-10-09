import { createContext, useContext, useEffect, useState } from "react";
import getCurrentUser from "../Common/getCurrentUser";
import getProductsFromLocal from "../Common/getProductsFromLocal";
import { getUserFromLocal } from "../Common/getUserFromLocal";
import { bidding_Products } from "../Data_store/Products";
import { Users } from "../Data_store/Users";
import {
  bidding_ProductsPropsType,
  ResultProdutsPropsType,
  singleUserPropsTypeTwo,
  UserPropsType,
} from "../Types/types";

export const MainComponentsContext = createContext<{
  usersList: UserPropsType;
  productsList: bidding_ProductsPropsType;
  currentuser: singleUserPropsTypeTwo;
  setLocalStorageItems?: (
    value?: bidding_ProductsPropsType,
    editedUsers?: UserPropsType,
    editedcurrentUser?: singleUserPropsTypeTwo,
  ) => void;
}>({
  usersList: [],
  productsList: [],
  currentuser: {} as singleUserPropsTypeTwo,
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
  const [CurrentUser, setCurrentUser] = useState<singleUserPropsTypeTwo>(
    getCurrentUser() || ({} as singleUserPropsTypeTwo)
  );
  const setLocalStorage = (
    editedProducts?: ResultProdutsPropsType,
    editedUsers?: UserPropsType,
    editedcurrentUser?: singleUserPropsTypeTwo,
  ) => {
    ////////function to set updated productist and userList
    console.log(editedcurrentUser);
    editedProducts !== undefined &&
      localStorage.setItem("Products", JSON.stringify(editedProducts));
    editedUsers !== undefined &&
      localStorage.setItem("users", JSON.stringify(editedUsers));
    editedcurrentUser !== undefined &&
      localStorage.setItem("currentUser", JSON.stringify(editedcurrentUser));
    editedProducts !== undefined && setProductList(getProductsFromLocal());
    editedUsers !== undefined && setUserList(getUserFromLocal());
    editedcurrentUser !== undefined && setCurrentUser(getCurrentUser());
  };

  return (
    <MainComponentsContext.Provider
      value={{
        productsList: productList,
        usersList: userList,
        currentuser: CurrentUser,
        setLocalStorageItems: setLocalStorage,
      }}
    >
      {children}
    </MainComponentsContext.Provider>
  );
};

export const useBiddingContext = () => useContext(MainComponentsContext);
