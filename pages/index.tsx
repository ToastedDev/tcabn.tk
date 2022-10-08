import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      <h1 className="text-6xl font-bold">Coming soon...</h1>
      <h2 className="text-lg mt-1">
        Keep your eyes pealed on this website and the{" "}
        <Link href="https://github.com/NotTCA/tcabn.tk">
          <a className="hover:underline">GitHub repo.</a>
        </Link>
      </h2>
    </div>
  );
}
