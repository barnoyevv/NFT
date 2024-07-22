import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Index = () => {
  const links = [
    { path: "/", title: "Marketplace" },
    { path: "/trending-collection", title: "Rankings" },
    { path: "/top-creator", title: "Connect a Wallet" },
  ];

  return (
    <header className="py-4 bg-gray-900 flex justify-between items-center px-8 ">
      <div className="flex items-center space-x-4">
        <Image src={Logo} alt="Logo" width={32} height={32} />
        <h1 className="text-xl font-bold text-white">NFT Marketplace</h1>
      </div>
      <div className="flex gap-7 items-center">
        {links.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`text-white font-medium hover:text-purple-400 ${
              item.path === "/sign-up" ? "hidden" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/sign-up"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <AssignmentIndIcon />
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Index;
