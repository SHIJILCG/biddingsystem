import { useNavigate } from "react-router-dom";
import { useBiddingContext } from "../Pages/ContextComponent";
type ViewDetailsButtonPropsType = {
  itemId: number;
  value: number;
};
export default function ViewDetailsButton({
  value,
  itemId,
}: ViewDetailsButtonPropsType) {
  const navigate = useNavigate();
  const { usersList: userList } = useBiddingContext();
  return (
    <button
      className="bg-[#FC9905] w-[116px] h-[44px] px-[20px] rounded-[4px] text-white text-[16px] font-semibold items-center tracking-[-2%] leading-[24px] flex-nowrap active:scale-90"
      onClick={() =>
        navigate("/UserBiddingPage", {
          state: {
            value: itemId,
            currentUser: userList[value - 1],
          },
        })
      }
    >
      View Details
    </button>
  );
}
