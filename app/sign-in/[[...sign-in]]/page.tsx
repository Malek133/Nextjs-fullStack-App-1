import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
  <section className="w-full flex justify-center items-center">
    <span></span>
     <SignIn />
     <span></span>
  </section> 
  )
}