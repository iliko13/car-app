import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <h1 className=" font-extrabold text-3xl text-blue-700">Rentify</h1>
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
