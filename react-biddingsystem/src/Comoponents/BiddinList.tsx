import React from 'react'
import { bidding_ProductsPropsType } from '../Types/types'
import { biddingListProsType } from '../Types/types'
type BiddinListPropsType={
     value:biddingListProsType
}
export default function BiddinList(data:BiddinListPropsType) {
  return (
    <>
     {
         data.value.map(val=> (
            <div className=''>
                <span className=''>{val.name}</span>
                <span className=''>{val.price}</span>
            </div>
         ))
     }
    </>
  )
}
