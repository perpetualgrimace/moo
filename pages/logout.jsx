import { useRouter } from "next/router";

import { userService } from "/services/userService";

import Meta from "/components/layout/components/Meta";
import SpaceBG from "/components/layout/components/SpaceBG";

export default function Login() {
  // userService.logout(useRouter().query.returnUrl || null);

  return (
    <div className="login-layout">
      <Meta pageTitle="Logging out" description="Logging out..." />

      <h1>Logging out...</h1>

      <SpaceBG />
    </div>
  );
}
