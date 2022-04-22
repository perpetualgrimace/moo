import OutboundIcon from '/components/icons/OutboundIcon';

export default function Tile(props) {
  const {href, outbound, imgSrc, label, altText} = props;
  
  return(
    <a className="tile darkglass" href={href}>
      {outbound &&
        <div className="tile-icon">
          <OutboundIcon />
        </div>
      }
      <div className="tile-inner">
        <img 
          className="tile-img" 
          src={`/icons/tools/${imgSrc}.png`}
          srcSet={`/icons/tools/${imgSrc}.svg`}
          alt={altText}
          draggable="false"
        />
        {label &&
          <span className="tile-title">{label}</span>
        }
      </div>
    </a>
  )
}