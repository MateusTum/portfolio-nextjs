
export default function Footer() {
    return (
      <footer className="w-full border-t-gray-900 border-t-[0.1rem] bg-neutral-950">
        <div className="container">
          <div className="grid grid-cols-4 justify-center text-start">
            <div>
              <span className="text-white text-xl">Mateus Tum</span>
            </div>
            <div>
              <span className="text-white text-xl">More</span>
            </div>
            <div>
              <span className="text-white text-xl">Contact</span>
            </div>
            <div>
              <span className="text-white text-xl">Theme</span>
            </div>
          </div>
          <div>
            <div className="flex text-left">
              <span className="text-neutral-500">© 2024 Mateus Tum.</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  