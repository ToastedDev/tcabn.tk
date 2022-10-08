import { FC, PropsWithChildren } from "react";
import Head from "next/head";

const Page: FC<PropsWithChildren & { title: string }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{"TCA • " + title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </>
  );
};

export default Page;
