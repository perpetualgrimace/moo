import { useRouter } from "next/router";
import checkRoute from "../functions/checkRoute";

export default function NavmenuLink(props) {
  const { href, children } = props;
  const currRoute = useRouter().pathname;

  return (
    <li className="navmenu-item">
      <a
        className="navmenu-link u-font-sm"
        href={href}
        aria-current={checkRoute(href, currRoute)}
      >
        {children || "NavmenuLink text = `children` prop"}
      </a>
    </li>
  );
}
