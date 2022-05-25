import Link from "next/link";

export default function Hero(props) {
  const { pageTitle, imgSlug, parentSlug, parentTitle } = props;

  return (
    <header className="hero" role="banner">
      <div className="hero-inner wrapper">
        <h1 className="hero-headline u-title">
          {pageTitle || "missing `pageTitle` prop"}
        </h1>

        {parentSlug && parentTitle && (
          <Link href={parentSlug}>
            <a className="hero-breadcrumb u-font-sm">{parentTitle}</a>
          </Link>
        )}
      </div>
      {imgSlug && (
        <img
          className="hero-img"
          src={`/hero/${imgSlug}-hero.png`}
          srcSet={`/hero/${imgSlug}-hero.png 1x, /hero/${imgSlug}-hero@2x.png 2x`}
          alt=""
          draggable="false"
          loading="lazy"
        />
      )}
    </header>
  );
}
