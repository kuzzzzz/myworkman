import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/shows/">
        <a>Shows</a>
      </Link>
      <Link href="/businesses/">
        <a>Businesses</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
