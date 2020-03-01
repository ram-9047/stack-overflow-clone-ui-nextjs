import Link from "next/link";
import "../stylesheet/style.css";

export default function Header() {
  return (
    <div className="flex justify-around bg-blue-500 p-5">
      <Link href="/">
        <a className="text-xl hover:text-indigo-100">Home</a>
      </Link>
      <Link href="/signin">
        <a className="text-xl hover:text-indigo-100">Sign In</a>
      </Link>
      <Link href="/signup">
        <a className="text-xl hover:text-indigo-100">Sign Up</a>
      </Link>
    </div>
  );
}
