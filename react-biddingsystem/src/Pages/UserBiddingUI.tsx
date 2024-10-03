import { useLocation } from "react-router-dom";
import BiddinList from "../RealComponents/BiddinList";
import { ResultProdutsPropsType, UserPropsType } from "../Types/types";
import getProductsFromLocal from "../Common/getProductsFromLocal";
import { useBiddingContext } from "./ContextComponent";
import { bidding_Products } from "../Data_store/Products";
import { useRef } from "react";
import { getUserFromLocal } from "../Common/getUserFromLocal";
import { Users } from "../Data_store/Users";
import BiddingContainer from "../RealComponents/BiddingContainer";
import { addMessageToOtherUsrs } from "../Common/addMessagetoOthers";
import { createKeyvalueForBiddinList } from "../Common/CreatKeyvalueForBiddinList";

export const UserBiddingUI = () => {
  let InputValue: number = 0;
  const { setThe_User_Products, productList } = useBiddingContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const { value, currentUser } = location.state || {};
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    InputValue = +e.target.value;
  };
  const allProducts: ResultProdutsPropsType =
    getProductsFromLocal() || bidding_Products;

  const allUsers: UserPropsType = getUserFromLocal() || Users;

  const handleButttonclick = () => {
    ////// Managing User Bidding Price
    if (
      InputValue > 0 &&
      InputValue > allProducts[value - 1].current_bid_Amount &&
      InputValue > allProducts[value - 1].start_bid_Amount
    ) {
      let indexValue = allProducts[value - 1].bidding_list.length; /////for id of live auction List
      allProducts[value - 1].current_bid_Amount = InputValue;
      // let valueForKey = createKeyvalueForBiddinList(allProducts) //////////////////////////////last work
      allProducts[value - 1].bidding_list.push({
        id: indexValue++,
        name: currentUser.name,
        price: InputValue,
      }); ////// for the Live Auction
      let changedUserList = addMessageToOtherUsrs(
        allUsers,
        currentUser.user_id,
        currentUser.name,
        InputValue,
        productList[value - 1].Item_name
      );
      if (inputRef.current) inputRef.current.value = "";
      if (setThe_User_Products)
        setThe_User_Products(allProducts, changedUserList);
    } else {
      alert("Enter a Price above the Current Price and Starting price");
    }
  };
  return (
    <div className="biddinUI flex p-[20px]  justify-center ">
      <img
        src={productList[value - 1].img}
        alt=""
        className="bg-white w-[400px] h-[230px] rounded-xl"
      />
      <div className="px-[20px] flex flex-col biddingContainer w-[500px]">
        <BiddingContainer
          value={value}
          inputRef={inputRef}
          handleButttonclick={handleButttonclick}
          handleInputChange={handleInputChange}
        />
        <div className="m-h-[424px] w-[100%] mt-[20px] overflow-y-scroll hide-scrollbar ">
          <span className="font-bold">Live Auction</span>
          {productList[value - 1].bidding_list.length > 0 ? (
            <BiddinList value={productList[value - 1].bidding_list} />
          ) : (
            <div>No bid is added</div>
          )}
        </div>
      </div>
    </div>
  );
};
