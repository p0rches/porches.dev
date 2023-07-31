import Link from "next/link";

export const DesktopLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8">
      <div className="flex flex-row w-full gap-4">
        <Link
          className="flex w-full max-w-xs flex-col gap-4 rounded-xl p-4 bg-gradient-to-t from-emerald-400 to-emerald-200 hover:bg-opacity-40"
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
            className="flex w-full max-w-xs flex-col gap-4 rounded-xl p-4 bg-gradient-to-t from-emerald-400 to-emerald-200 hover:bg-opacity-40"
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
            className="flex w-full max-w-xs flex-col gap-4 rounded-xl p-4 bg-gradient-to-t from-emerald-400 to-emerald-200 hover:bg-opacity-40"
            href="/"
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
  );
};
