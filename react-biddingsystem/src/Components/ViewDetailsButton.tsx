import { useNavigate } from "react-router-dom";
import { useBiddingContext } from "../Pages/ContextComponent";
type ViewDetailsButtonPropsType = {
  itemId: number;
};
export default function ViewDetailsButton({
  itemId,
}: ViewDetailsButtonPropsType) {
  const navigate = useNavigate();
  const {currentuser} = useBiddingContext()
  return (
    <button
      className="bg-[#FC9905] w-[116px] h-[44px] px-[20px] rounded-[4px] text-white text-[16px] font-semibold items-center tracking-[-2%] leading-[24px] flex-nowrap active:scale-90"
      onClick={()=> navigate(`/UserBiddingPage/${itemId}`, {
        state: {
          value: itemId,
          currentUser: currentuser,
        },
      }) }
    >
      View Details
    </button>
  );
}