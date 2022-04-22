import Tile from '/components/Tile';

export default function ToolsItem(props) {
  return (
    <li className="tools-item">
      <Tile {...props} />
    </li>
  )
}