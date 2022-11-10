import Link from "next/link";

export default function NotFound() {
  // thsi comment is to refresh the build and add the new content for while I create a real DDBB
  return (
    <>
      <span>404</span>
      <p>
        <Link href={`${process.env.URL}/docs/`}>
          <a>return to the docs</a>
        </Link>
      </p>
      <small>Ignore this page, the budget is not enough :c</small>
    </>
  );
}
