
import { Users } from "../Data_store/Users";
import { useNavigate } from "react-router-dom";
export const UsersView = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col w-[100%] h-[100%] items-center justify-center">
      {Users.map((user) => (
        <div
          className="w-[90%] min-w-[210px] max-w-[600px] flex border-2 border-black justify-between items-center m-[10px] p-[10px] rounded-2xl"
          key={user.user_id}
          onClick={() => navigate("./UserHomePage", { state: user })}
        >
          <img
            src={user.User_img}
            alt=""
            className="h-[90px] w-[100px] rounded-[50%] "
          />
          <span className="text-[30px] p-[20px]">{user.name}</span>
        </div>
      ))}
    </div>
  );
};
