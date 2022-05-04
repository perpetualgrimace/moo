import ChevronDownIcon from "components/icons/ChevronDownIcon";

export default function NavbarItem(props) {
  const { href, label, activePage, children } = props;

  return (
    <li className="navbar-item">
      <a
        className="navbar-link u-font-sm"
        href={href}
        aria-current={activePage ? "page" : null}
      >
        {label || "NavbarItem text = `label` prop"}

        {children && <ChevronDownIcon />}
      </a>

      {children}
    </li>
  );
}
