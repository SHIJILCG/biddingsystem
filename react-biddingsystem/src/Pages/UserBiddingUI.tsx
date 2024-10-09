import { useRef } from "react";
import {useParams } from "react-router-dom";
import { addMessageToOtherUsrs } from "../Common/addMessagetoOthers";
import Backbutton from "../Components/Backbutton";
import BiddingContainer from "../Components/BiddingContainer";
import BiddinList from "../Components/BiddinList";
import { useBiddingContext } from "./ContextComponent";

export const UserBiddingUI = () => {
  const {
    setLocalStorageItems: setThe_User_Products,
    productsList: productList,
    usersList,
    currentuser,
  } = useBiddingContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const { itemId } = useParams();
  if (!itemId || typeof +itemId !== "number") {
    return <>No item matched</>;
  }
  const itemValue: number = +itemId;
  const currentItem = productList[itemValue - 1];
  const handleButttonclick = (InputValue: number) => {
    ////// Managing User Bidding Price
    if (
      InputValue > 0 &&
      InputValue > currentItem.current_bid_Amount &&
      InputValue > currentItem.start_bid_Amount
    ) {
      let indexValue = currentItem.bidding_list.length; /////for id of live auction List
      currentItem.current_bid_Amount = InputValue;
      // let valueForKey = createKeyvalueForBiddinList(value,allProducts)
      currentItem.bidding_list.push({
        id: indexValue++,
        name: currentuser.name,
        price: InputValue,
      }); ////// for the Live Auction
      let changedUserList = addMessageToOtherUsrs(
        usersList,
        currentuser.user_id,
        currentuser.name,
        InputValue,
        currentItem.Item_name
      );
      if (inputRef.current) inputRef.current.value = "";
      if (setThe_User_Products)
        setThe_User_Products(productList, changedUserList);
    } else {
      alert("Enter a Price above the Current Price and Starting price");
    }
    // handleButttonclick end
  };
  return (
    <div className="biddinUI flex  p-[20px]  justify-center ">
      <Backbutton />
      <img
        src={currentItem.img}
        alt=""
        className="bg-white w-[400px] h-[230px] rounded-xl"
      />
      <div className="px-[20px] flex flex-col biddingContainer w-[500px]">
        <BiddingContainer
          value={itemValue}
          inputRef={inputRef}
          handleButttonclick={handleButttonclick}
        />
        <div className="m-h-[424px] w-[100%] mt-[20px] overflow-y-scroll hide-scrollbar ">
          <span className="font-bold">Live Auction</span>
          {currentItem.bidding_list.length > 0 ? (
            <BiddinList value={currentItem.bidding_list} />
          ) : (
            <div>No bid is added</div>
          )}
        </div>
      </div>
    </div>
  );
};
