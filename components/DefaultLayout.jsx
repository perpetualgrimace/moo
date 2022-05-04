import Meta from "/components/Meta";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";

import SpaceBG from "../components/SpaceBG";

export default function DefaultLayout(props) {
  const { title, slug, children } = props;

  return (
    <div className={`${slug}-layout default-layout`}>
      <Meta pageTitle={title} description="Data science toolkit" />

      <Navbar />

      <main className="main" id="#main">
        <Hero pageTitle={title} imgSlug={slug} />

        <div className={`${slug}-wrapper wrapper`}>{children}</div>
      </main>

      <SpaceBG />
    </div>
  );
}
