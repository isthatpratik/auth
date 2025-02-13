import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Navbar() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <Link href={"/"}>
          <Image
            src={"/images/fynar-logo.png"}
            alt="Fynar Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>

        <div>
          {
            session ? (
                <form action={async () => {
                    'use server'
                    await auth.api.signOut({
                        headers: await headers()
                    });
                    redirect('/')
                }}>
                    <Button type="submit">Sign Out</Button>
                </form>
            ) :
            <Link href={"/sign-in"} className={buttonVariants()}>
            Sign In
          </Link>
          }
        </div>
      </div>
    </div>
  );
}
