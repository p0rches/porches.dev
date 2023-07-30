import Head from "next/head";
import Link from "next/link";
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { DesktopLayout } from "~/components/desktopLayout";
import { MobileLayout } from "~/components/mobileLayout";
import useMediaQuery from "~/helpers/useMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Head>
        <title>porches.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-white text-black">
        <div className="container flex flex-col gap-4 p-8 sm:p-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            {'Hi, I\'m '}<span className="text-emerald-400 underline decoration-black">{'Alex'}</span>
          </h1>
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              About me
            </h2>
            <p>I am a Junior Engineer that enjoys making things in Typescript.</p>
            <p>{'I currently work as an Avaloq Consultant.'}</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Projects
            </h2>
            {isDesktop && <DesktopLayout />}
            {!isDesktop && <MobileLayout />}
          </div>
          <div className="sm:pt-6">
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
