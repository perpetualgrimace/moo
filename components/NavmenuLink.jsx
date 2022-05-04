export default function NavmenuLink(props) {
  const { href, children, current } = props;

  return (
    <li className="navmenu-item">
      <a
        className="navmenu-link u-font-sm"
        href={href}
        aria-current={current ? "page" : null}
      >
        {children || "NavmenuLink text = children"}
      </a>
    </li>
  );
}
