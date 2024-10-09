import { singleUserPropsTypeTwo, UserPropsType } from "../Types/types";
type circularUserProfilePropsType = {
  CurrentUser: singleUserPropsTypeTwo;
  toggleUserListView: () => void;
};
export default function CircularUserProfile({
  CurrentUser,
  toggleUserListView,
}: circularUserProfilePropsType) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={toggleUserListView}
    >
      <img
        src={CurrentUser.User_img}
        alt=""
        className="h-[44px] w-[44px] rounded-[50%]"
      />
      <span className="h-[30%] text-[20px]">{CurrentUser.name}</span>
    </div>
  );
}
