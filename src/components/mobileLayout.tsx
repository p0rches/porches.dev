import Link from "next/link";

export const MobileLayout = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8">
      <div className="flex flex-row w-full gap-4">
        <Link
          className="flex w-full flex-col gap-4 rounded-xl p-4 bg-gradient-to-t from-emerald-400 to-emerald-200 hover:bg-opacity-40"
          href="https://amillionlagers.com"
        >
          <h3 className="text-2xl font-bold">A Million Lagers</h3>
          <p>A fullstack web application designed, created, and deployed by myself.</p>
        </Link>
      </div>
      <div>
        <div className="flex flex-row w-full gap-4">
          <Link
            className="flex w-full flex-col gap-4 rounded-xl p-4 bg-gradient-to-t from-emerald-400 to-emerald-200 hover:bg-opacity-40"
            href="https://tasklist-personal.vercel.app/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Task List</h3>
            <p>My first React application using typescript; helped me explore the basics of react.</p>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-row w-full gap-4">
          <Link
            className="flex w-full flex-col gap-4 rounded-xl p-4 bg-gradient-to-t from-emerald-400 to-emerald-200 hover:bg-opacity-40"
            href=""
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Polyrhythm Visualisation</h3>
            <p>Making music is a passion of mine, this app demonstrates polyrhythms/polymeters...</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
