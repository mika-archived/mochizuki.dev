import React, { useEffect, useRef, useState } from "react";
import useFetch from "use-http";

import RootTemplate from "../../templates/Root";

import { ExtractProps } from "../../../type-helper";

// static variables
const another = "You can see another side (not as an engineer) of me from here.";
const name = "Fuyuno Mikazuki";
const description = "Software / Web Engineer writing C#, TypeScript, Rust and Perl in Tokyo";
const href = "https://mochizuki.moe";
const icon = "https://assets.mochizuki.moe/anna.png";
const login = "mika-f";
const links: ExtractProps<typeof RootTemplate>["links"] = [
  {
    account: "MikazukiFuyuno",
    href: "https://twitter.com/MikazukiFuyuno",
    icon: "twitter",
    label: "Twitter",
    prefix: "brands"
  },
  {
    account: "mika-f",
    href: "https://github.com/mika-f",
    icon: "github",
    label: "GitHub",
    prefix: "brands"
  },
  {
    account: "mika_f",
    href: "https://keybase.io/mika_f",
    icon: "keybase",
    label: "Keybase",
    prefix: "brands"
  },
  {
    account: "me@mochizuki.moe",
    href: "mailto:me@mochizuki.moe",
    icon: "envelope",
    label: "Mail",
    prefix: "light"
  },
  {
    account: "3M9JdFXaD1vc8uscaovkoRHCaWqe1P13vR",
    href: "https://btc.com/3M9JdFXaD1vc8uscaovkoRHCaWqe1P13vR",
    icon: "bitcoin",
    label: "Bitcoin",
    prefix: "brands"
  },
  {
    account: "0x3cD67f16C2D7FE518E924930f645DD73AAdAAF39",
    href: "https://etherscan.io/address/0x3cd67f16c2d7fe518e924930f645dd73aadaaf39",
    icon: "ethereum",
    label: "Ethereum",
    prefix: "brands"
  }
];

const RootPage: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const isInitialized = useRef(false);
  const [request, response] = useFetch("https://mochizuki.now.sh");

  const fetchProjects = async () => {
    const res = (await request.get("/api/github/repositories")) as any[];
    if (response.ok) {
      setProjects(res.splice(0, 4));
    }
  };

  useEffect(() => {
    if (isInitialized.current) return;

    isInitialized.current = true;
    fetchProjects();
  }, []);

  return <RootTemplate another={another} description={description} href={href} icon={icon} links={links} login={login} name={name} projects={projects} />;
};

export default RootPage;
