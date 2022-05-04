import { useRouter } from "next/router";
import checkRoute from "../functions/checkRoute";

import ChevronDownIcon from "components/icons/ChevronDownIcon";

export default function NavbarItem(props) {
  const { href, label, children } = props;
  const currRoute = useRouter().pathname;

  return (
    <li className="navbar-item">
      <a
        className="navbar-link u-font-sm"
        href={href}
        aria-current={checkRoute(href, currRoute)}
      >
        {label || "NavbarItem text = `label` prop"}

        {children && <ChevronDownIcon />}
      </a>

      {children}
    </li>
  );
}
