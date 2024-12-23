import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#FDF0D5B2] sticky top-0 shadow-sm z-50 backdrop-blur-md">
      <div className="px-4 py-2 w-full max-w-[1440px] mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="First Signal Logo" className="w-24" />
        <div className="pr-9">
          <ul className="flex items-center gap-16 text-xl font-medium text-[#000000a4]">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About Us</li>
            </Link>
            <Link href="/products">
              <li>Products & Services</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
