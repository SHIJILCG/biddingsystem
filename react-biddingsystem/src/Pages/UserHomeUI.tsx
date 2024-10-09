import { useState } from "react";
import CircularUserProfile from "../Components/CircularUserProfile";
import { HomeUserLIstView } from "../Components/HomeUserLIstView";
import MessageButton from "../Components/MessageButton";
import ProductCard from "../Components/ProductCard";
import UserMessage from "../Components/UserMessage";
import { useBiddingContext } from "./ContextComponent";

export const UserHomeUI = () => {
  const [userListShow, setuserListShow] = useState(false);
  const [userMessageShow, setuserMessageShow] = useState(false);

  const toggleUserListView = () => {
    setuserListShow((Prev) => !Prev);
  };
  const toggleUserMessages = () => {
    setuserMessageShow((perv) => !perv);


  };
  const { productsList: productList, currentuser: CurrentUser } =
    useBiddingContext();
  return (
    <div className=" uerHomeUI flex flex-wrap w-[100%] items-center justify-center relative bg-[#eaedf5]">
      <div className="w-[100%] h-[84px]  flex justify-end px-[20px]  border-1 border-[#C3D4E966] userHomePagHeader">
        <MessageButton toggleUserMessages={toggleUserMessages} />
        <CircularUserProfile
          CurrentUser={CurrentUser}
          toggleUserListView={toggleUserListView}
        />
      </div>
      {userMessageShow && (
        <UserMessage messages={CurrentUser.messages} />
      )}
      {userListShow && <HomeUserLIstView />}
      {productList.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
};
