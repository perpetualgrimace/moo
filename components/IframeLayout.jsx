import Meta from "/components/Meta";
import Navbar from "/components/Navbar";
import SpaceBG from "/components/SpaceBG";

export default function IframeLayout(props) {
  const { title, slug, src } = props;

  return (
    <div className={`${slug}-layout iframe-layout`}>
      <Meta pageTitle={title} description="Data science toolkit">
        <meta
          http-equiv="Content-Security-Policy"
          content="frame-src http://averroes.andal.us:8003/ http://averroes.andal.us:8003/*"
        />
      </Meta>

      <Navbar />

      <h1 className="u-visually-hidden">{title}</h1>

      <main className="main" id="#main">
        <iframe
          className="iframe-layout-iframe"
          src={src}
          title={title}
        />
      </main>

      <SpaceBG />
    </div>
  );
}
