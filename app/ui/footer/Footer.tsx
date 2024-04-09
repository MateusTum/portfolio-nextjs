import type { SimpleIcon } from "simple-icons";
import { siInstagram, siLinkedin, siGithub } from "simple-icons/icons";

interface mySocialMedia {
  [key: string]: {
    icon: SimpleIcon;
    url: string;
  };
}

const mySocialMedia: mySocialMedia = {
  github: {
    icon: siGithub,
    url: "https://www.github.com/mateustum",
  },
  linkedin: {
    icon: siLinkedin,
    url: "https://www.linkedin.com/in/mateus-rosa-tum-7b803a1b6/",
  },
  instagram: {
    icon: siInstagram,
    url: "https://www.instagram.com/mateustum/",
  },
};

export default function Footer() {
  return (
    <footer className="py-2 w-full border-t-gray-900 border-t-[0.1rem] bg-neutral-950 flex justify-center">
      <div className="container">
        <div className="grid grid-cols-2 justify-center text-start">
          <div className="col-span-3 sm:col-span-1 text-center sm:text-left">
            <span className="text-white text-xl">Mateus Tum Dev</span>
            <div className="flex items-center p-2 justify-center sm:justify-start">
              {Object.keys(mySocialMedia).map((key) => {
                return (
                  <a
                    key={key}
                    href={mySocialMedia[key].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      className="w-10 h-10"
                    >
                      <path
                        d={mySocialMedia[key].icon.path}
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>
          {/* <div>
            <span className="text-white text-xl">More</span>
          </div> */}
          {/* <div>
            <span className="text-white text-xl">Contact</span>
            <div className="text-neutral-500 grid grid-rows">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/mateustum"
              >
                Instagram
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:mateus.tum@icloud.com"
              >
                Email
              </a>
            </div>
          </div> */}
          {/* <div>
            <span className="text-white text-xl">Theme</span>
          </div> */}
        </div>
        <div className="my-5 sm:my-0">
          <div className="text-center sm:text-left">
            <span className="text-neutral-500">Portfolio v2.0</span>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-neutral-500">© 2024 Mateus Tum.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
