import React from 'react';

function StoryIG() {
  return (
    <>
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-fuchsia-600 mb-3">
        Trying make....
      </h2>
      <p className="text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-light mb-8">
        Koeching Stories.
      </p>

      {/* Code of stories */}
      <ul className="flex space-x-6">
        <li className="flex flex-col items-center space-y-1">
          <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/200"
                alt="Cute kitty"
              />
            </a>
            <button className="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700 focus:outline-none">
              +
            </button>
          </div>
          <a href="#">You</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/200/201"
                alt="Cute kitty"
              />
            </a>
          </div>
          <a href="#">meng_tampan</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/220/200"
                alt="Cute kitty"
              />
            </a>
          </div>
          <a href="#">richmeeowww</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
            <a
              className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
              href="#"
            >
              <img
                className="h-24 w-24 rounded-full"
                src="https://placekitten.com/210/200"
                alt="Cute kitty"
              />
            </a>
          </div>
          <a href="#">anggoramahal</a>
        </li>
      </ul>
    </>
  );
}

export default StoryIG;
