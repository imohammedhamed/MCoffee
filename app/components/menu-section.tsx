import React from 'react'
import MenuContent from './menu-content'
import prisma from '@/lib/prisma'
import SectionHeading from './section-heading'
import CategoryNav from './category-nav'
import SearchBar from '@/components/ui/searchBar'

//and we can use npx prisma studio to access data via GUI .
 
interface MenuSectionProps{
  categoryId?:string |any
}

export default async function MenuSection({categoryId}:MenuSectionProps) {
  
  async function getItems(){
    try {
      const items = await prisma.item.findMany({
        where:{categoryId:{equals:categoryId}}
      });
      return items; // select * from item
    } catch (error) {
      console.error("Error fetching items:", error);
      return [];
    }
  }

  async function getCategory(){
    try {
      const categories = await prisma.category.findMany();
      return categories; // select * from category
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  const items = await getItems();
  const categories = await getCategory();
  return (
    <div className=' container mx-auto'>
      <SectionHeading> Menu </SectionHeading>
      <div className=' flex justify-between items-center px-5 md:flex-col sm:flex-col'>
        <SearchBar/>
      <div className=' sm:mt-5 md:mt-5 flex justify-cente items-center flex-row-reverse p-2  bg-white border border-solid bosrder bosrder-lightBlue rounded-lg'>
      {categories.map(category =>{
        return(
          <CategoryNav
          key={category.id}
          Name={category.name}
          Id={category.id}
          Active ={categoryId || "666f62470a947d597a3e15bb"}
          />
        )
      })}
      </div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
      {items.map(item => {
        return(
          <MenuContent
          key={item.id}
          title={item.title}
          picture={item.picture}
          price={item.price}
          categoryId={item.categoryId}
          id={item.id}
          />
        )
      })}
      </div>
    </div>
  )
}