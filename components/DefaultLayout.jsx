import { useRouter } from "next/router";

import Meta from "/components/Meta";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import SpaceBG from "/components/SpaceBG";

export default function DefaultLayout(props) {
  const { title, slug, children } = props;

  const currRoute = useRouter().pathname;
  let parentSlug, parentTitle;
  if (currRoute.split("/").length === 3) {
    parentSlug = `/${currRoute.split("/")[1]}`;
    parentTitle = parentSlug === "/assets" ? "Asset Viewer" : parentSlug;
  }

  return (
    <div className={`${slug}-layout default-layout`}>
      <Meta pageTitle={title} description="Data science toolkit" />

      <Navbar />

      <main className="main" id="#main">
        <Hero
          pageTitle={title}
          imgSlug={slug}
          parentSlug={parentSlug}
          parentTitle={parentTitle}
        />

        <div className={`${slug}-wrapper wrapper u-pb-xl`}>
          {children}
        </div>
      </main>

      <SpaceBG />
    </div>
  );
}
