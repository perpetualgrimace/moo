import { userService } from "/services/userService";

import Meta from "/components/Meta";
import SpaceBG from "/components/SpaceBG";

export default function Login() {
  userService.logout();

  return (
    <div className="login-layout">
      <Meta pageTitle="Logging out" description="Logging out..." />

      <h1>Logging out...</h1>

      <SpaceBG />
    </div>
  );
}
