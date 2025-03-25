import Link from "next/link";
import Icon from "./Icon";

const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <div className="flex justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          String.log
        </Link>

        <div className="flex w-26 justify-between space-x-2">
          <Icon name="moon" />

          <Link href="/series">
            <Icon name="tag" />
          </Link>

          <Link href="/search">
            <Icon name="search" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
