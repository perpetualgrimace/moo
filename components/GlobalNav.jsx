export default function GlobalNav() {
  return(
    <div className="nav">
      <nav className="nav-inner wrapper" role="navigation">
        <a className="nav-logo" href="">
          <img src="/logo-horizontal.png" srcSet="/logo-horizontal.png 1x, /logo-horizontal@2x.png 2x" alt="Mudavar, home" draggable="false" />
        </a>

        <ul className="nav-list">
          {/* <li className="nav-item">
            <a className="nav-link u-font-xs" href="">
              Asset viewer
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link u-font-xs" aria-current="page" href="">
              Tools
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}