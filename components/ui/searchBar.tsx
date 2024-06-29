"use client"
import React, { useState,useRef } from 'react';
import { FaMagnifyingGlass ,FaRegCircleXmark } from "react-icons/fa6";
import { Input } from './input';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import Link from 'next/link';
import toast from 'react-hot-toast';
export default function SearchBar() {
  const [results, setResults] = useState<any[]>([]);
  const loading = useRef(false);
  let ShowresultsDropMenu:boolean;
  if(results.length===0){
    ShowresultsDropMenu = false
  }else{
    ShowresultsDropMenu=true
  }
  function handleXClick(){
    setResults([])
  }
  const formSchema = z.object({
    Search: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Search: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      loading.current =true
      const response = await fetch(`/api/search?query=${values.Search}`);
      const data = await response.json();
      if(data.length===0){
        toast.error('!! Item not found')
      }else{
        setResults(data);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }finally{
      loading.current =false
    }
  }

  return (
    <div className='relative'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          <FormField
            control={form.control}
            name="Search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='min-w-[350px] min-h-[3rem] text-primary bg-Blue100 border border-solid border-lightBlue rounded-lg'
                    placeholder='Search...'
                    type="text"
                    disabled={loading.current}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
            {
              loading.current?(<span className="text-lightGrey loading loading-spinner loading-sm absolute top-1/2 -translate-y-1/2 right-3"></span>):
              (<FaMagnifyingGlass className='text-Blue600 size-5 font-semibold absolute top-1/2 -translate-y-1/2 right-3'/>)
            }
            {
              ShowresultsDropMenu&&(
                  <FaRegCircleXmark className='text-Blue600 cursor-pointer  size-5 font-semibold absolute top-1/2 -translate-y-1/2 right-10' onClick={handleXClick}/>
              )
            }
        </form>
      </Form>
      {
        ShowresultsDropMenu&&(
        <div className='absolute top-16 w-full left-0 max-h-96 overflow-hidden overflow-y-auto flex flex-col p-4 gap-2 drop-shadow-2xl bg-white border border-solid border-lightBlue rounded-lg'>
          {
            results.map((item,indx) =>{
              return(
                <Link
                key={indx} 
                href={`/Menu/${item.categoryId}/${item.id}`}
                className=' text-sm text-DarkBlue font-semibold flex justify-start items-center gap-2 p-2 rounded-lg hover:bg-lightBlue'
                >
                  <FaMagnifyingGlass className=' size-4 text-Blue600'/>
                  {
                    item.title
                  }
                </Link>
              )
            })
          }
        </div>
        )
      }
    </div>
  );
}
//<span className='text-sm text-Red font-semibold'> !!Item not found </span>