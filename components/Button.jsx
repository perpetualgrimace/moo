import Link from "next/link";

export default function Button(props) {
  const { href, type, fontSize, children } = props;

  const Component = href ? (
    <Link href={href} {...props} passHref>
      <a className={`button u-font-${fontSize || "md"}`}>{children}</a>
    </Link>
  ) : (
    <button
      className={`button u-font-${fontSize || "md"}`}
      {...props}
      type={type || "button"}
    >
      {children}
    </button>
  );

  return Component;
}
