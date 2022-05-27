import LoginForm from "/components/LoginForm";
import Meta from "/components/Meta";
import SpaceBG from "../components/SpaceBG";

export default function Home() {
  return (
    <div className="login-layout">
      <Meta pageTitle="Log in" description="Log in to Mu" />

      <main className="main" id="main">
        <h1>Log in</h1>

        <LoginForm />
      </main>

      <SpaceBG />
    </div>
  );
}
