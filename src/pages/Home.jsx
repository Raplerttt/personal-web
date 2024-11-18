import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-4 sm:left-1">
      {/* Header */}
      <div className="flex flex-col items-center w-full max-w-6xl sm:flex-row">
        {/* Gambar Abstrak SVG - Now on top */}
        <div className="mb-8 sm:mr-24 sm:ml-0"> {/* Increased the margin to 12 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-64 h-64 sm:w-80 sm:h-80"
          >
            <circle cx="100" cy="100" r="80" fill="red" />
            <circle cx="100" cy="100" r="20" fill="black" />
            <g>
              {/* Tomoe Pertama */}
              <circle cx="140" cy="100" r="20" fill="black">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Tomoe Kedua */}
              <circle cx="60" cy="100" r="20" fill="black">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Roda Tengah */}
            <g>
              <circle
                cx="100"
                cy="100"
                r="40"
                fill="none"
                stroke="black"
                strokeWidth="3"
              />
              {/* Gigi Gir (Roda/Gir) */}
              <circle
                cx="100"
                cy="100"
                r="40"
                fill="none"
                stroke="black"
                strokeWidth="3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Gigi Gir di Sekitar Tengah */}
              <g>
                <circle cx="150" cy="100" r="15" fill="red">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x="140"
                  y="90"
                  width="10"
                  height="20"
                  fill="black"
                  transform="rotate(90, 100, 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>
                <circle cx="50" cy="100" r="15" fill="red">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x="50"
                  y="90"
                  width="10"
                  height="20"
                  fill="black"
                  transform="rotate(270, 100, 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
            </g>

            {/* Efek Rotasi Lingkaran Mata (Sekeliling) */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="white"
              strokeWidth="3"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>

        {/* Nama dan Deskripsi */}
        <div className="text-center sm:text-left justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Muhamad Rafi Nasrullah
          </h1>
          <p className="site-description text-lg sm:text-xl text-white mt-4">
            Programmer • Web Developer • Graphic Designer
          </p>
          <div className="flex space-x-4 mt-6 justify-center sm:justify-start">
            <button
              aria-label="WhatsApp"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#18af1b] text-white hover:shadow-lg transition-transform transform hover:scale-110"
            >
              <FaWhatsapp size="1.5em" />
            </button>
            <button
              aria-label="GitHub"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#000000] text-white hover:shadow-lg transition-transform transform hover:scale-110"
            >
              <FaGithub size="1.5em" />
            </button>
            <button
              aria-label="Instagram"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#f72f25] text-white hover:shadow-lg transition-transform transform hover:scale-110"
            >
              <FaInstagram size="1.5em" />
            </button>
            <button
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded bg-[#333333] text-white hover:shadow-lg transition-transform transform hover:scale-110"
            >
              <FaLinkedin size="1.5em" />
            </button>
          </div>
          <div className="flex space-x-4 mt-6 justify-center sm:justify-start">
            <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
