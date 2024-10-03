import { UserPropsType } from "../Types/types";
type circularUserProfilePropsType = {
  userList: UserPropsType;
  value: number;
  toggleUserListView: () => void;
};
export default function CircularUserProfile({
  userList,
  value,
  toggleUserListView,
}: circularUserProfilePropsType) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={toggleUserListView}
    >
      <img
        src={userList[value - 1].User_img}
        alt=""
        className="h-[44px] w-[44px] rounded-[50%]"
      />
      <span className="h-[30%] text-[20px]">{userList[value - 1].name}</span>
    </div>
  );
}
