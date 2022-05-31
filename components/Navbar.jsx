import Link from "next/link";
import { useRouter } from "next/router";
import checkRoute from "/helpers/checkRoute";

import NavbarLink from "components/NavbarLink";
import Navmenu from "components/Navmenu";
import NavmenuLink from "components/NavmenuLink";

export default function Navbar() {
  const currRoute = useRouter().pathname;

  return (
    <div className="navbar">
      <nav className="navbar-nav wrapper" role="navigation">
        <Link href="/">
          <a
            className="navbar-logo"
            aria-current={checkRoute("/", currRoute)}
          >
            <img
              src="/logo-horizontal.png"
              srcSet="/logo-horizontal.png 1x, /logo-horizontal@2x.png 2x"
              alt="Mu, home"
              draggable="false"
            />
          </a>
        </Link>

        <ul className="navbar-list">
          <NavbarLink label="Asset viewer" href="/assets">
            <Navmenu>
              <NavmenuLink href="/assets/servers">Servers</NavmenuLink>
              <NavmenuLink href="/assets/data">Data</NavmenuLink>
              <NavmenuLink href="/assets/engines">Engines</NavmenuLink>
              <NavmenuLink href="/assets/engagements">
                Engagements
              </NavmenuLink>
            </Navmenu>
          </NavbarLink>
        </ul>
      </nav>
    </div>
  );
}
