
import { ModeToggle } from "./ModeToggle";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from "next/link";
import { SheetDemo } from "./Open";
const  NavBar = () => {
  return (
    <div 
     className='flex justify-end items-center gap-3 p-3 mx-24'
    >
        <Link href="/Dashboard">
      <p>
        Dashboard
      </p>
      </Link>
      <Link href="/">
      <p>
        Home
      </p>
      </Link>
      <Link href="/Products">
      <p>
        Products
      </p>
      </Link>

      <Link href="/Gproducts">
      <p>
        Grid
      </p>
      </Link>
      <SheetDemo />
      
        <ModeToggle />
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

    </div>
  )
}

export default NavBar