import prisma from '@/app/libs/prismadb';
import Image from 'next/image';

export const data =  async ()=>{
   return await prisma.listing.findMany({
    orderBy : {
      createdAt: "desc"
    }
   })
}

const Page = async() => {
  const result = await data()

 
  
  return (
    <div>
      main page
    </div>
  )
}

export default Page