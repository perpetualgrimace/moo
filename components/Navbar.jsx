import ChevronDownIcon from "components/icons/ChevronDownIcon";
import Navmenu from "components/Navmenu";
import NavmenuLink from "components/NavmenuLink";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-nav wrapper" role="navigation">
        <a className="navbar-logo" href="/">
          <img
            src="/logo-horizontal.png"
            srcSet="/logo-horizontal.png 1x, /logo-horizontal@2x.png 2x"
            alt="Mu, home"
            draggable="false"
          />
        </a>

        <ul className="navbar-list">
          <li className="navbar-item">
            <a
              className="navbar-link u-font-sm"
              href="assets"
              aria-current="page"
            >
              Asset viewer
              <ChevronDownIcon />
            </a>

            <Navmenu>
              <NavmenuLink href="assets/servers">Servers</NavmenuLink>
              <NavmenuLink href="assets/data" current={true}>
                Data
              </NavmenuLink>
              <NavmenuLink href="assets/engines">Engines</NavmenuLink>
              <NavmenuLink href="assets/engagements">Engagements</NavmenuLink>
            </Navmenu>
          </li>
        </ul>
      </nav>
    </div>
  );
}
