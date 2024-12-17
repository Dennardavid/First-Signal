export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between px-10 pt-3">
        <img src="/logo.png" alt="First Signal Logo"  className="w-32"/>
        <div className="pr-9">
          <ul className="flex items-center gap-16 text-lg font-semibold">
            <li>Home</li>
            <li>About Us</li>
            <li>Products & Services</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
