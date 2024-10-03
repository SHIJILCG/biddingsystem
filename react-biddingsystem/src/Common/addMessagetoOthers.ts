import { UserPropsType } from "../Types/types";

export const addMessageToOtherUsrs = (
    allUsers: UserPropsType,
    currentUserId: number,
    currentUseName: string,
    InputValue: number,
    ProductName: string
  ) => {
    /////adding message to all users expect the current user
    allUsers.forEach((user) => {
      if (user.user_id !== currentUserId) {
        user.messages.push(
          `${currentUseName} has placed a new bid of $${InputValue} on the product ${ProductName}`
        );
      }
    });
    return allUsers;
  };