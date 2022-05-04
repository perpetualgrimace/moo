import OutboundIcon from "/components/icons/OutboundIcon";

export default function Tile(props) {
  const { href, outbound, imgSrc, label, altText, children } = props;

  return (
    <a className="tile darkglass u-mb-md" href={href}>
      {outbound && (
        <div className="tile-icon">
          <OutboundIcon />
        </div>
      )}
      <div className="tile-inner u-m-auto">
        {imgSrc && (
          <img
            className="tile-img u-mh-auto"
            src={`/icons/tools/${imgSrc}.png`}
            srcSet={`/icons/tools/${imgSrc}.svg`}
            alt={altText}
            draggable="false"
          />
        )}
        {label && <span className="tile-title">{label}</span>}
        {children}
      </div>
    </a>
  );
}
