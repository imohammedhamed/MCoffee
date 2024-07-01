import React from 'react'
import UserProductsCard from './UserProductsCard'
import OrderSummary from './OrderSummary'
interface Item{
    id          :string| undefined
    title       :String| undefined
    picture     :String| undefined |any
    price       :Number| undefined
    preferences? :string|undefined,
}
interface Orders{
    id:string|undefined
    items:Item[]|undefined|any,
}
interface UserProductsProps{ 
    userId:string|undefined
    orders:Orders[]|undefined|any
}
export default function UserProducts(props:UserProductsProps) {
  return (
    <div className=' grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10'>
    <div>
        <h1 className=' text-xl text-DarkBlue font-bold'>Your Products</h1>
        {
            props.orders.map((order: any) =>{
                return order.items.map((item: any,indx:number) =>{
                    return(
                        <UserProductsCard
                        orderId={order.id}
                        key ={indx}
                        id ={item.id}
                        title={item.title}
                        picture={item.picture}
                        price={item.price}
                        preferences ={item.preferences}
                        />
                    )
                })
            })
        }
    </div>
    <div className=' mt-10'>
        {
            props.orders.map((order: { id: string , items:{title:string,price:number}[] },indx:number) =>{
                return(
                    <OrderSummary 
                    key={indx}
                    OrderId={order.id}
                    item={order.items}
                    />
                )
            })
        }
    </div>
    </div>
  )
}
