export default function Navbar() {
  return(
    <div className="navbar">
      <nav className="navbar-nav wrapper" role="navigation">
        <a className="navbar-logo" href="/">
          <img src="/logo-horizontal.png" srcSet="/logo-horizontal.png 1x, /logo-horizontal@2x.png 2x" alt="Mu, home" draggable="false" />
        </a>

        <ul className="navbar-list">
          {/* <li className="navbar-item">
            <a className="navbar-link u-font-xs" href="">
              Asset viewer
            </a>
          </li> */}
          <li className="navbar-item">
            <a className="navbar-link u-font-sm" aria-current="page" href="">
              Tools
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}