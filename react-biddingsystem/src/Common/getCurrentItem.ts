export default function getCurrentItem() {
    const currentItem = localStorage.getItem('currentItem')
    if(currentItem !== null) return JSON.parse(currentItem)
}
