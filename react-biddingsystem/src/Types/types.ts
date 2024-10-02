export type bidding_ProductsPropsType = {
  Item_id: number;
  Item_name: string;
  img: string;
  start_bid_Amount: number;
  current_bid_Amount: number;
  bidding_list: biddingListProsType;
}[];

export type bidding_ProductPropsType = {
  Item_id: number;
  Item_name: string;
  img: string;
  start_bid_Amount: number;
  current_bid_Amount: number;
  bidding_list: biddingListProsType;
};

export type biddingListProsType = {
  id: number;
  name: string;
  price: number;
}[];

export type UserPropsType = {
  user_id: number;
  name: string;
  User_img: string;
}[];

export type ResultProdutsPropsType = {
  Item_id: number;
  Item_name: string;
  bidding_list: { id: number; name: string; price: number }[]
  current_bid_Amount: number
  img: string
  start_bid_Amount: number
}[];


export type ResultUsersPropsType =  { user_id: number; name: string; User_img: string }[]