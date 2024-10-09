export default function getCurrentUser() {
     const currentUser = localStorage.getItem('currentUser')
     if(currentUser !== null) return JSON.parse(currentUser)
}
