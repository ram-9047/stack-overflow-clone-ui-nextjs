import Link from "next/link";

export default function Header() {
  return (
    <div className="static">
      <div className="h-1 bg-orange-550"></div>
      <div className="flex py-2  ml-24">
        <div className="flex">
          <img
            src="https://www.tcfp.org.uk/wp-content/uploads/2015/01/icon-menu.png"
            alt="menubar-icon"
            className="h-6 w-6 mx-2 mt-1 cursor-pointer"
          />
          <a className="cursor-pointer">
            <svg class=" h-8 w-8" viewBox="0 0 32 37">
              <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
              <path
                d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z"
                fill="#F48024"
              ></path>
            </svg>
          </a>
          <h3 className="font-light mt-2 cursor-pointer">
            stack <span className="font-semibold">Overflow</span>
          </h3>
        </div>
        <ol className="mt-2">
          <a className="rounded-full text-sm cursor-pointer text-white  bg-orange-550 hover:bg-orange-600 px-4 py-2 ml-4">
            Products
          </a>
          <a className="rounded-full text-sm cursor-pointer text-black  bg-white hover:bg-gray-400 px-4 py-2 mx-4">
            Customers
          </a>
          <a className="rounded-full text-sm cursor-pointer text-black  bg-white hover:bg-gray-400 px-4 py-2 mr-4">
            Use cases
          </a>
        </ol>
        <input className="border border-red-900 w-1/3 mt-1 h-8 rounded-md"></input>
        <div className=" mt-2">
          <a className=" cursor-pointer rounded-md text-sm text-blue-500 border border-blue-600 bg-blue-300 hover:bg-blur-400 px-4 py-2 ml-4">
            Log in
          </a>
          <a className="cursor-pointer rounded-md text-sm text-blue-500 border border-blue-600 bg-blue-300 hover:bg-blur-400 px-4 py-2 mx-1">
            Signup
          </a>
        </div>
      </div>
      {/* <Link href="/">
        <a className="text-xl hover:text-indigo-100">Home</a>
      </Link>
      <Link href="/signin">
        <a className="text-xl hover:text-indigo-100">Sign In</a>
      </Link>
      <Link href="/signup">
        <a className="text-xl hover:text-indigo-100">Sign Up</a>
      </Link> */}
    </div>
  );
}
