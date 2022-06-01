import { useRouter } from "next/router";

export default function Login() {
  useRouter().push("/assets");
  return null;
}
