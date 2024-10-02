

export default function getProductsFromLocal() {
    console.log("fetching Product data from the local storage")
    const user = localStorage.getItem("Products");
    if (user !== null) {
        return (JSON.parse(user))
    }
}
