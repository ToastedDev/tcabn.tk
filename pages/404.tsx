import Page from "components/Page";
import Link from "next/link";

export default function NotFound() {
  return (
    <Page title="Not Found">
      <div className="flex flex-col justify-center items-center text-center h-screen">
        <h1 className="text-6xl font-bold">Whoops...</h1>
        <h2 className="text-lg mt-1">
          That page was not found. Try going back to the{" "}
          <Link href="/">
            <a className="hover:underline">home page.</a>
          </Link>
        </h2>
      </div>
    </Page>
  );
}
