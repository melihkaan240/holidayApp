import React from 'react'
import Image from 'next/image'
import {data} from '../page'

const page = async (detail:any) => {
    const datas = await data();

    console.log("this is datas",datas)
  return (
    <>
    <div>{detail.params.detail}</div>
    <div className='flex items-center flex-wrap'>
       {
        datas?.filter((dataFilter) => dataFilter.category === detail.params.detail ).map((list:any,i:any) => (
          <div className=' w-[250px] border rounded-lg p-3 m-2' key={i}>
              <Image
                src={list.imageSrc}
                width={200}
                height={200}
                alt=''
                unoptimized
              />
              <div className='text-xl tracking-wider mt-2'>
                 {list.category} - {list.locationValue}

              </div>
          </div>
        ))
      } 
    </div>
    </>
  )
}

export default page