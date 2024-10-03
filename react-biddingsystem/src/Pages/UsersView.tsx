import { useBiddingContext } from "./ContextComponent";
import UserProfile from "../RealComponents/UserProfile";

export const UsersView = () => {
  const { usersList: userList } = useBiddingContext();
  return (
    <div className="flex  flex-col w-[100%] h-[100%] items-center justify-center">
      <span className="text-[50px] mb-[20px] text-center">
        Choose an account
      </span>
      {userList.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
};
