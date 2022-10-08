import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaTwitch,
  FaGlobe,
} from "react-icons/fa";
import React from "react";
import Page from "components/Page";

interface BackstoryOpts {
  title: string;
  company: {
    name: string;
    link: string;
  };
}

interface LinkOpts {
  name: string;
  icon: React.ReactElement;
  href: string;
}

const Backstory = ({ title, company }: BackstoryOpts) => {
  return (
    <h2>
      {title}{" "}
      <Link href={company.link}>
        <a className="font-semibold hover:underline">{company.name}</a>
      </Link>
    </h2>
  );
};

const Social = ({ name, icon, href }: LinkOpts) => {
  return (
    <Link href={href}>
      <a className="font-semibold hover:underline text-[1.7rem] mt-2">
        {icon} {name}
      </a>
    </Link>
  );
};

export default function Links() {
  const imgSize = 85;
  return (
    <>
      <Page title="Links">
        <div className="mt-3 flex flex-row items-center justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={imgSize}
            height={imgSize}
            className="rounded-full"
          />
          <h1 className="font-bold text-6xl ml-2">TCA</h1>
        </div>
        <div className="mt-2 flex flex-col items-center">
          <Backstory
            title="Founder @"
            company={{
              name: "Graphify",
              link: "https://youtube.com/c/GraphifyStats",
            }}
          />
          <Backstory
            title="Creator of"
            company={{
              name: "create-djs-app",
              link: "https://create-djs-app.js.org",
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <Social
            name="YouTube"
            icon={<FaYoutube className="inline" />}
            href="https://youtube.com/channel/UCYmgF3XHt5Mwo2_k9SSDv7Q"
          />
          <Social
            name="Twitter"
            icon={<FaTwitter className="inline" />}
            href="https://twitter.com/TCAbutnot"
          />
          <Social
            name="GitHub"
            icon={<FaGithub className="inline" />}
            href="https://github.com/NotTCA"
          />
          <Social
            name="Discord"
            icon={<FaDiscord className="inline mb-1" />}
            href="https://discord.gg/Cwm6ctmvxF"
          />
          <Social
            name="Twitch"
            icon={<FaTwitch className="inline" />}
            href="https://twitch.tv/NotTCA"
          />
          <Social
            name="Website"
            icon={<FaGlobe className="inline" />}
            href="https://tcabn.tk"
          />
        </div>
      </Page>
    </>
  );
}
