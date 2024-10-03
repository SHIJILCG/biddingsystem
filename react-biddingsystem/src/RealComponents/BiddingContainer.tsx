import { useState } from "react";
import { useBiddingContext } from "../Pages/ContextComponent";
type biddingContainerPropsType = {
  value: number;
  inputRef: React.RefObject<HTMLInputElement>;
  handleButttonclick: (InputValue: number) => void;
};
export default function BiddingContainer({
  value,
  inputRef,
  handleButttonclick,
}: biddingContainerPropsType) {
  const { productsList: productList } = useBiddingContext();
  const [InputValue, setInputValue] = useState<number>(0);
  const ManageFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleButttonclick(InputValue);
  };
  return (
    <div className="bg-white p-[30px] rounded-xl">
      <span className="text-[30px] font-bold">
        {productList[value - 1].Item_name}
      </span>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-[25px] font-bold ">
              ${productList[value - 1].start_bid_Amount}
            </span>
            <span className="text-[15px]  ">Starting bid</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[25px] font-bold ">
              ${productList[value - 1].current_bid_Amount}
            </span>
            <span className="text-[15px]">Current bid</span>
          </div>
        </div>
        <div className="flex  justify-between mt-[10px] biddinPriceSection">
          <form action="" onSubmit={(e) => ManageFormSubmission(e)} className="flex justify-between mt-[10px] biddinPriceSection w-[100%]">
            <input
              ref={inputRef}
              placeholder="30000"
              onChange={(e) => setInputValue(+e.target.value)}
              type="number"
              className=" border-2 border-[#cec5c5]  w-[200px] h-[50px] text-[30px]"
            />
            <input
              type="submit"
              className="bg-[#FC9905] text-white px-[20px] py-[10px] text-[16px] rounded-[5px] font-bold active:scale-90"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
