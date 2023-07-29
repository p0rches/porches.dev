import Head from "next/head";
import Link from "next/link";
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>porches.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-white text-black">
        <div className="container flex flex-col gap-4 px-16 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            {'Hi, I\'m '}<span className="text-emerald-400 underline decoration-black">{'Alex'}</span>
          </h1>
          <div>
            <h2 className="text-4xl font-extrabold">
              About me
            </h2>
            <p>I am a Junior Engineer that enjoys making things in Typescript.</p>
            <p>{'I\'m currently working as an Avaloq Consultant.'}</p>
          </div>
          <h2 className="text-4xl font-extrabold">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <div className="flex flex-row w-full gap-4">
              <Link
                className="flex w-full max-w-xs flex-col gap-4 rounded-xl p-4 bg-emerald-400 hover:bg-opacity-40"
                href="https://amillionlagers.com"
              >
                <h3 className="text-2xl font-bold">amillionlagers.com</h3>
              </Link>
              <div className="bg-zinc-100 rounded-xl p-4 w-full">
                <h3 className="text-2xl font-bold">A Million Lagers</h3>
                <p>A fullstack web application designed, created, and deployed by myself.</p>
                <p>Technologies include Next.js, React, tRPC, Prisma, Tailwindcss, Clerk.dev, and MySQL.</p>
                <p>Currently has an active userbase of ~40-50 people</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row w-full gap-4">
                <Link
                  className="flex w-full max-w-xs flex-col gap-4 rounded-xl p-4 bg-emerald-400 hover:bg-opacity-40"
                  href="https://tasklist-personal.vercel.app/"
                  target="_blank"
                >
                  <h3 className="text-2xl font-bold">Task List</h3>
                </Link>
                <div className="bg-zinc-100 rounded-xl p-4 w-full">
                  <h3 className="text-2xl font-bold">A simple to-do web app</h3>
                  <p>My first React application using typescript; helped me explore the basics of hooks.</p>
                  <p>I intentionally kept it simple as I wanted a lightweight, relatively nice looking app.</p>
                  <p>{'Doesn\'t store information so refreshing will remove tasks currently...'}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row w-full gap-4">
                <Link
                  className="flex w-full max-w-xs flex-col gap-4 rounded-xl p-4 bg-emerald-400 hover:bg-opacity-40"
                  href="https://create.t3.gg/en/introduction"
                  target="_blank"
                >
                  <h3 className="text-2xl font-bold">Polyrhythm Visualisation</h3>
                </Link>
                <div className="bg-zinc-100 rounded-xl p-4 w-full">
                  <h3 className="text-2xl font-bold">Coming soon...</h3>
                  <p>Making music is a passion of mine, this app demonstrates polyrhythms/polymeters...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <div className="flex flex-row gap-4 text-3xl text-zinc-500">
              <Link
                href="mailto:ascott.sco@gmail.com"
                className="hover:text-zinc-900"
              >
                <FaEnvelope />
              </Link>
              <Link
                href="https://github.com/p0rches"
                className="hover:text-zinc-900"
              >
                <FaGithubSquare />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alexander-scott-consultant/"
                className="hover:text-zinc-900"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="text-zinc-400">
            Copyright © 2023 Alexander Scott. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}
