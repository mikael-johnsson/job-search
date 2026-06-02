import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hitta din tech stack</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">HEM</Link>
          </li>
          <li>
            <Link href="/add-company">LÄGG TILL FÖRETAG</Link>
          </li>
          <li>
            <Link href="/add-tech">LÄGG TILL TECH</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
