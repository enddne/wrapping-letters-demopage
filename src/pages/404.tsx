import Link from "next/link";

export default function NotFound() {
  // thsi comment is to refresh the build and add the new content for while I create a real DDBB
  // This is the second comment to refresh the build in vercel xd, well this is weird
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
