import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HomeUserLIstView } from "../RealComponents/HomeUserLIstView";
import { useBiddingContext } from "./ContextComponent";
import UserMessage from "../RealComponents/UserMessage";
import ProductCard from "../RealComponents/ProductCard";
import CircularUserProfile from "../RealComponents/CircularUserProfile";
import MessageButton from "../RealComponents/MessageButton";
export const UserHomeUI = () => {
  const [userListShow, setuserListShow] = useState(false);
  const [userMessageShow, setuserMessageShow] = useState(false);
  const location = useLocation();
  const value = location.state || {};

  const toggleUserListView = () => {
    setuserListShow((Prev) => !Prev);
  };
  const toggleUserMessages = () => {
    setuserMessageShow((perv) => !perv);
  };
  const { productList, userList } = useBiddingContext();
  return (
    <div className=" uerHomeUI flex flex-wrap w-[100%] items-center justify-center relative bg-[#eaedf5]">
      <div className="w-[100%] h-[84px]  flex justify-end px-[20px]  border-1 border-[#C3D4E966] userHomePagHeader">
        <MessageButton toggleUserMessages={toggleUserMessages} />
        <CircularUserProfile
          value={value}
          userList={userList}
          toggleUserListView={toggleUserListView}
        />
      </div>
      {userMessageShow && (
        <UserMessage messages={userList[value - 1].messages} />
      )}
      {userListShow && <HomeUserLIstView />}
      {productList.map((item, index) => (
        <ProductCard key={index} value={value} item={item} />
      ))}
    </div>
  );
};
