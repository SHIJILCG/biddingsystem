import { getUserFromLocal } from "../Common/getUserFromLocal";
import { ResultUsersPropsType } from "../Types/types";
import { useBiddingContext } from "../Comoponents/ContextComponent";
import UserProfile from "./UserProfile";
export const HomeUserLIstView = () => {
  let result: ResultUsersPropsType = [];
  result = getUserFromLocal();
  const { userList } = useBiddingContext();
  return (
    <div
      className={`w-[300px] h-[300px] bg-white shadow-2xl flex flex-col justify-between rounded-lg absolute top-20 right-10 p-[10px] border-1 border-black`}
    >
      {userList.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
};
