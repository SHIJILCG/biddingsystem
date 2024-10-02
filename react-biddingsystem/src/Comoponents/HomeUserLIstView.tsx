import { useNavigate } from "react-router-dom";
import { getUserFromLocal } from "../Common/getUserFromLocal";
import { ResultUsersPropsType } from "../Types/types";
import { useBiddingContext } from "./ContextComponent";
export const HomeUserLIstView = () => {
  const navigate = useNavigate();
  let result: ResultUsersPropsType = [];
  result = getUserFromLocal();
   const {userList} = useBiddingContext()
  return (
    <div className="w-[300px] h-[300px] bg-white shadow-2xl flex flex-col justify-between rounded-lg absolute top-20 right-10 p-[10px] border-1 border-black">
      {userList.map((user) => (
        <div
          className="w-[90%] min-w-[210px] max-w-[600px] flex  border-b-[1px] border-[#b8b8b8]  items-center m-[10px] p-[10px]"
          key={user.user_id}
          onClick={() => navigate("/UserHomePage", { state: user })}
        >
          <img
            src={user.User_img}
            alt=""
            className="h-[40px] w-[40px] rounded-[50%] "
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold ml-[10px] ">
              {user.name}
            </span>
            <span className="ml-[10px] text-[#5F6368]">email@gamil.com</span>
          </div>
        </div>
      ))}
    </div>
  );
};
