export default function SpaceBG(props) {
  const { className, variant } = props;

  return (
    <div className={`space-bg${className ? ` ${className}` : ""}`}>
      <img
        className="space-bg-img"
        src={`/bg.jpg${variant ? `-${variant}` : ""}`}
        srcSet={`/bg.jpg${variant ? `-${variant}` : ""} 1x, /bg${
          variant ? `-${variant}` : ""
        }@2x.jpg 2x`}
        alt=""
        draggable="false"
      />
    </div>
  );
}
