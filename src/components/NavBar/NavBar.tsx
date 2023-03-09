import { Button, Navbar } from "flowbite-react";

import { useRouter } from "next/router";

const NavBar = () => {
  const pathname = useRouter().pathname;
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M16.5 7.5h-9v9h9v-9z" />
          <path
            fillRule="evenodd"
            d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
            clipRule="evenodd"
          />
        </svg>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PolyglotAI
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Sign In</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={pathname === "/"}>
          Welcome
        </Navbar.Link>
        <Navbar.Link href="/lessons" active={pathname === "/lessons"}>
          Lessons
        </Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/create"}>
          Create
        </Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/words"}>
          Words
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
