export default function GlobalHero(props) {
  const {pageTitle, imgSlug} = props;
  return (
    <header className="hero" role="banner">
      <div className="hero-wrapper wrapper">
        <h1 className="hero-headline">{ pageTitle || 'missing `pageTitle` prop' }</h1>
      </div>
      {imgSlug &&
        <img 
          className="hero-img" 
          src={ `/hero/${imgSlug}-hero.png` }
          srcSet={ `/hero/${imgSlug}-hero.png 1x, /hero/${imgSlug}-hero@2x.png 2x` }
          alt="" 
          draggable="false"
        />
      }
    </header>
  )
}