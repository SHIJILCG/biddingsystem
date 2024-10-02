import { biddingListProsType } from "../Types/types";
type BiddinListPropsType = {
  value: biddingListProsType;
};
export default function BiddinList(data: BiddinListPropsType) {
  return (
    <>
      {data.value.map((val) => (
        <div
          className=" py-[10px] flex justify-between border-b-2 border-b-[#0002]"
          key={val.id}
        >
          <span className="font-bold">{val.name}</span>
          <span className="">${val.price}</span>
        </div>
      ))}
    </>
  );
}
