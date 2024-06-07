import prisma from '@/lib/prisma'
import User from '@/app/components/User'
async function getUsers(){
  //"npx prisma studio" (to insert data using GUI)
  const Users = await prisma.user.findMany()

  return Users;
}
export default async function Home() {
  const users = await getUsers()
  // console.log({users}) 
  return (
    <>
    <div className=" w-full | bg-Blue-100 | cr-Blue-600 flex justify-center flex-col items-center">
    <h1>just to test the connection with the DB</h1>
    <br />
    {users.map((users)=>{
      return (
        <User
        key = {users.id}
        id = {users.id}
        fullName = {users.fullName}
        email = {users.email}
        />
      )
    })
    }
    </div>
    </>
  );
}
