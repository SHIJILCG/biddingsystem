import { useNavigate } from "react-router-dom";
import { useBiddingContext } from "./ContextComponent";

export const UsersView = () => {
  const navigate = useNavigate();
  const { userList } = useBiddingContext();
  return (
    <div className="flex  flex-col w-[100%] h-[100%] items-center justify-center">
      <span className="text-[50px] mb-[20px] text-center">
        Choose an account
      </span>
      {userList.map((user) => (
        <div
          className="w-[90%] min-w-[210px] max-w-[600px] flex  border-b-[1px] border-[#b8b8b8]  items-center m-[10px] p-[10px]"
          key={user.user_id}
          onClick={() => navigate("./UserHomePage", { state: user })}
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
