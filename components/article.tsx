import Image from "next/image";
import Actronom from "@/public/nav/actronom.png";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 flex justify-center items-start">
      <div className="bg-gray-800 rounded-lg p-[30px] flex items-start w-[1457px] h-[530px] gap-[80px] rounded-tl-[20px] opacity-100">
        <div className="relative w-[600px] h-[460px] overflow-hidden rounded-tl-[20px]">
          <Image
            src={Actronom}
            alt="Astronaut Reading Newspaper"
            layout="fill"
            objectFit="cover"
            className="rounded-tl-[20px] cursor-pointer hover:scale-105 transition"
          />
        </div>
        <div className="w-[600px] h-[400px] flex flex-col justify-center gap-[40px]">
          <h2 className="text-4xl font-bold mb-4">
            Join Our Weekly <br /> Digest
          </h2>
          <p className="text-gray-400 mb-4">
            Get Exclusive Promotions & Updates <br />
            Straight To Your Inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 p-3 rounded-l-lg bg-gray-700 text-white"
            />
            <Button className="bg-purple-600 text-white p-3 rounded-r-lg flex items-center">
              <EmailIcon style={{ fontSize: 20, marginRight: 8 }} />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
