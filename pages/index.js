import Head from 'next/head'
import { Avatar } from '../components/Avatar'
import {MicrophoneIcon,ViewGridIcon}from "@heroicons/react/solid"
import Image from "next/image"
// import styles from '../styles/globals.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Nasir Google clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* header */}
<header className="flex w-full p-5 justify-between text-sm txt-gray-700 ">
  {/* left */}
  <div className="flex space-x-4 items-center">
    <p className="link">ABOUT </p>
    <p className="link">Store</p>
  </div>
  {/* right */}
  <div className="flex space-x-4 items-center">
    <p className="link">Gmail</p>
    <p className="link">Image</p>
    {/* Icon */}


    {/* avatar */}
    <ViewGridIcon className="h-10 w-10 p-2 rounderd-full hover:gray-100 cursor-pointer"/>
    <Avatar url="https://pbs.twimg.com/profile_images/1288182634749853698/ddb8Pr3T_400x400.jpg"/>
  </div>
</header>

{/* body */}
<form action="">
  <Image
  src="https://google.com/"
  />
</form>

{/* footer */}
      </div>
  )
}
