
import { bidding_Products } from "../Data_store/Products";
import { Outlet,useLocation,useNavigate } from "react-router-dom";
export const  UserHomeUI = ()=> {
  const location = useLocation();
  const navigate = useNavigate(); 
  const value = location.state || {};
  return (
    <div className=" uerHomeUI flex flex-wrap w-[100%] align-middle justify-center ">
      <div className="w-[100%] h-[8      4px]  flex justify-end px-[20px] bg-white border-1 border-[#C3D4E966]">
         <div className="flex flex-col items-center justify-center">
              <img src={value.User_img} alt="" className="h-[44px] w-[44px] rounded-[50%]" />
               <span className="h-[30%] text-[20px]">{value.name}</span>
         </div>
      </div>
      {bidding_Products.map((item) => (
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
                <span className="text-[20px] font-bold">${item.current_bid_Amount}</span>
                <span className="text-[14px] font-semibold text-[#9B9B9B]">Current Bid</span>
            </span>
            <button className="bg-[#FC9905] w-[116px] h-[44px] px-[20px] rounded-[4px] text-white text-[16px] font-semibold items-center tracking-[-2%] leading-[24px] flex-nowrap" onClick={()=> navigate("UserBiddingPage", { state: item })}>
              View Details
            </button>
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
