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
        <title>Alexander Scott</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen justify-center items-center text-black">
        <div className="container flex flex-col gap-4 p-8 sm:p-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-center">
            {'Hi, I\'m '}<span className="text-emerald-400 underline decoration-black">{'Alex'}</span>
          </h1>
          <div>
            <h2 className="text-4xl font-extrabold py-8 text-center">
              Contact me
            </h2>
            <div className="max-w-3xs mx-auto flex flex-row gap-4 text-5xl text-zinc-500 justify-between">
              <Link
                href="mailto:as.consultingworks@gmail.com"
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
                href="https://www.linkedin.com/in/alexander-scott-dev/"
                className="hover:text-zinc-900"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
