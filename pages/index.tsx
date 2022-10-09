import Page from "components/Page";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const imgSize = 85;
  return (
    <Page title="Home">
      <div className="fixed right-0 p-4 text-xl font-bold text-right">
        <Link href="https://youtube.com/c/UCYmgF3XHt5Mwo2_k9SSDv7Q">
          <a className="hover:underline">YouTube</a>
        </Link>
        <br />
        <Link href="https://twitter.com/TCAbutnot">
          <a className="hover:underline">Twitter</a>
        </Link>
        <br />
        <Link href="/discord">
          <a className="hover:underline">Discord</a>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center text-center h-screen">
        <Image
          src="/logo.png"
          alt="Logo"
          width={imgSize}
          height={imgSize}
          className="rounded-full"
        />
        <h1 className="text-7xl font-bold">TCA</h1>
        <p>
          Front-End Developer,{" "}
          <Link href="/graphify">
            <a className="hover:underline">YouTuber</a>
          </Link>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center h-screen">
        <h3 className="underline decoration-4 underline-offset-[6px] font-bold text-2xl">
          About
        </h3>
        <p className="mt-2 max-w-2xl">
          Ever since I was 10 years old, I&apos;ve wanted to program. Now
          I&apos;m {Math.abs(new Date().getUTCFullYear() - 2009)} years old, and
          I would say I&apos;m proficient in front-end development. I&apos;m
          also a content creator, making{" "}
          <Link href="/graphify">
            <a className="hover:underline">statistics videos on YouTube</a>
          </Link>
          , and{" "}
          <Link href="https://twitch.tv/NotTCA">
            <a className="hover:underline">livestreaming on Twitch.</a>
          </Link>{" "}
          I also run a{" "}
          <Link href="/discord">
            <a className="hover:underline">really great Discord community.</a>
          </Link>
        </p>
      </div>
    </Page>
  );
}
