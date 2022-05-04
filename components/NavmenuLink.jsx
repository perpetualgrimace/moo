export default function NavmenuLink(props) {
  const { href, children, activePage } = props;

  return (
    <li className="navmenu-item">
      <a
        className="navmenu-link u-font-sm"
        href={href}
        aria-current={activePage ? "page" : null}
      >
        {children || "NavmenuLink text = `children` prop"}
      </a>
    </li>
  );
}
