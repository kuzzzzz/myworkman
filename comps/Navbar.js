import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" alt="site logo" width={130} height={50} />
        </Link>
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
