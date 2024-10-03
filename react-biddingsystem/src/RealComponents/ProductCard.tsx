
import { bidding_ProductPropsType } from "../Types/types";
import ViewDetailsButton from "./ViewDetailsButton";
type ProductCardPropsType = {
  item: bidding_ProductPropsType;
  value: number;
};
export default function ProductCard({ item, value }: ProductCardPropsType) {
  return (
    <div
      className="Item-details max-w-[314px] flex flex-col  h-[288px] m-[10px] p-[10px] bg-white rounded-lg justify-between"
      key={item.Item_id}
    >
      <span className="itemName  text-[20px] max-h-[10%] flex align-middle justify-start">
        {item.Item_name}
      </span>
      <img
        src={item.img}
        alt={item.Item_name}
        className="max-h-[80%] w-[100%] rounded-xl"
      />
      <div className="flex justify-between">
        <span className=" max-h-[10%]  flex flex-col">
          <span className="text-[20px] font-bold">
            ${item.current_bid_Amount}
          </span>
          <span className="text-[14px] font-semibold text-[#9B9B9B]">
            Current Bid
          </span>
        </span>
        <ViewDetailsButton value={value} itemId={item.Item_id} />
      </div>
    </div>
  );
}
