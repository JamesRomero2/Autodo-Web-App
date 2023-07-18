import { SignIn, SignOutButton, SignUp, SignedOut, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();

  const {data} = api.task.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="">
          {
            !user.isSignedIn && <SignIn/>
          }
          {
            !!user.isSignedIn && <SignOutButton/>
          }
        </div>
        <div className="">
          {
            data?.map((task) => (<div key={task.id}>{task.content}</div>))
          }
        </div>
      </main>
    </>
  );
}
