export type bidding_ProductsPropsType = {
      Item_id:number
      Item_name:string
      img:string
      start_bid_Amount:number
      current_bid_Amount:0
      bidding_list:biddingListProsType

}[]

export type  biddingListProsType={
    name:string
    price:number
}[]


export type UserPropsType ={
     user_id:number,
     name:string
     User_img:string
}[]