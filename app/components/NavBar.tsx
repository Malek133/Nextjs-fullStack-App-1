import React from 'react'
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
const  NavBar = () => {
  return (
    <div 
     className='flex justify-end items-center gap-3 p-3 mx-4'
    >
        <ModeToggle />
        <Button>LogIn</Button>
    </div>
  )
}

export default NavBar