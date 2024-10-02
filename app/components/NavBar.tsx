
import { ModeToggle } from "./ModeToggle";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
const  NavBar = () => {
  return (
    <div 
     className='flex justify-end items-center gap-3 p-3 mx-4'
    >
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