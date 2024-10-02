
export const getUserFromLocal = () => {
    console.log("fetching user data from the local storage")
    const user = localStorage.getItem("users");
    if (user !== null) {
        return (JSON.parse(user))
    }
}
