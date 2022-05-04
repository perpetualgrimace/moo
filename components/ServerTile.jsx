export default function ServerTile(props) {
  const { label } = props;

  return (
    <div className="server-tile darkglass u-mb-md">
      <div className="server-tile-inner u-m-auto">
        <h3 className="server-tile-title u-font-lg u-mb-0">{label}</h3>
        <p className="u-mb-auto">Remote</p>

        <ul className="server-tile-list u-m-auto">
          <li className="server-tile-item">
            <h3 className="server-label u-font-md u-mb-xs">AWS</h3>
            <img
              className="server-img"
              src={`/icons/server.png`}
              srcSet={`/icons/server.png 1x, /icons/server@2x.png 2x`}
              alt=""
              draggable="false"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
