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
      </Head>
      {children}
    </>
  );
};

export default Page;
