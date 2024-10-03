import { ResultProdutsPropsType } from "../Types/types";

type createKeyvalueForBiddinListPorsType={
     allProducts:ResultProdutsPropsType,
     value:number,
}
export const createKeyvalueForBiddinList = ({allProducts,value}:createKeyvalueForBiddinListPorsType) => {
  let indexValue = allProducts[value - 1].bidding_list.length;
  return indexValue++;
};
