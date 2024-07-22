import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";

const Index = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">NFT Marketplace</h3>
          <p className="text-gray-400 mb-4">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-gray-400 mb-4">Join our community</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <YouTubeIcon fontSize="small" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="https://apple.com" aria-label="Apple">
              <AppleIcon fontSize="small" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Explore</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="#">Marketplace</a>
            </li>
            <li className="mb-2">
              <a href="#">Rankings</a>
            </li>
            <li className="mb-2">
              <a href="#">Connect a wallet</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Join Our Weekly Digest</h3>
          <p className="text-gray-400 mb-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white"
            />
            <button className="bg-purple-600 p-2 rounded-r-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8-4H8m8 8H8m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-6 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-center">
          © NFT Market. Use this template freely.
        </p>
      </div>
    </footer>
  );
};

export default Index;
