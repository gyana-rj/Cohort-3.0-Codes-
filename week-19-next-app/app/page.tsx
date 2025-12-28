import Link from "next/link";

export default function Home() {

  return (
   <div className="text-4xl w-screen h-screen flex items-center justify-center">
    <div>
      Todo application

      <br />
      <br />
      <Link className="text-2xl border m-2" href="/signin">Sign in</Link>

      <Link className="text-2xl border m-2" href="/signup">Sign up</Link> 
    </div>
   </div>
  );
}