
import { ModeToggle } from "./ModeToggle";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from "next/link";
const  NavBar = () => {
  return (
    <div 
     className='flex justify-end items-center gap-3 p-3 mx-4'
    >
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