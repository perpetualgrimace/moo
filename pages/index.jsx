import LoginForm from "/components/LoginForm";
import Meta from "/components/Meta";
import SpaceBG from "/components/SpaceBG";

export default function Home() {
  return (
    <div className="login-layout">
      <Meta pageTitle="Log in" description="Log in to Mu" />

      <div className="login-logo">
        <img
          className="login-logo-img"
          src="/logo-vertical.png"
          srcSet="/logo-vertical.png 1x, /logo-vertical@2x.png 2x"
          alt="Mu, home"
          draggable="false"
        />
        <SpaceBG className="login-logo-bg" variant="login" />
      </div>

      <main className="main" id="main">
        <h1 className="u-visually-hidden">Log in</h1>

        <LoginForm />
      </main>
    </div>
  );
}
