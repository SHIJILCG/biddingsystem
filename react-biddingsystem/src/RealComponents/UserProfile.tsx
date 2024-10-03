import { useState } from "react";
import { singleUserPropsTypeTwo } from "../Types/types";
import { useNavigate } from "react-router-dom";
type UserProfileTypeProps = {
  user: singleUserPropsTypeTwo;
};
export default function UserProfile({ user }: UserProfileTypeProps) {
  const [toggleactiveclasss, settoggleactiveclasss] = useState("");
  const navigate = useNavigate();
  const handleUserLoginClick = (user: singleUserPropsTypeTwo) => {
    settoggleactiveclasss("active");
    setTimeout(() => {
      settoggleactiveclasss("");
    }, 100);
    navigate("/UserHomePage", { state: user.user_id });
  };
  return (
    <div
      className={`w-[90%] min-w-[210px] max-w-[600px] flex  border-b-[1px] border-[#b8b8b8]  items-center m-[10px] p-[10px] ${toggleactiveclasss}`}
      key={user.user_id}
      onClick={() => handleUserLoginClick(user)}
    >
      <img
        src={user.User_img}
        alt=""
        className="h-[40px] w-[40px] rounded-[50%] "
      />
      <div className="flex flex-col">
        <span className="text-[14px] font-bold ml-[10px] ">{user.name}</span>
        <span className="ml-[10px] text-[#5F6368]">email@gmail.com</span>
      </div>
    </div>
  );
}
