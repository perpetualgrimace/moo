import NavbarItem from "components/NavbarItem";
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
          <NavbarItem
            label="Asset viewer"
            href="/assets"
            activePage={true}
          >
            <Navmenu>
              <NavmenuLink href="/assets/servers">
                Servers
              </NavmenuLink>
              <NavmenuLink href="/assets/data" activePage={true}>
                Data
              </NavmenuLink>
              <NavmenuLink href="/assets/engines">
                Engines
              </NavmenuLink>
              <NavmenuLink href="/assets/engagements">
                Engagements
              </NavmenuLink>
            </Navmenu>
          </NavbarItem>
        </ul>
      </nav>
    </div>
  );
}
