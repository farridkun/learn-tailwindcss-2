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
                src="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124872962_1246579712383734_5852371571300108529_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=b63YuMLAA_sAX_S2Awk&tp=1&oh=d7217250f104a650dab3408cdd2bd86c&oe=5FE4DE31"
                alt="farrid_jr"
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

      {/* Post */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap px-6">
            <div className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
              <div className="bg-white transition ease-in-out duration-500 hover:shadow-xl">
                <li className="flex items-center space-y-1">
                  <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 mx-3 my-3 rounded-full">
                    <a
                      className="block bg-white p-1 rounded-full transform transition hover:-rotate-6"
                      href="#"
                    >
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/124872962_1246579712383734_5852371571300108529_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=b63YuMLAA_sAX_S2Awk&tp=1&oh=d7217250f104a650dab3408cdd2bd86c&oe=5FE4DE31"
                        alt="Farrid Kun"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col -space-y-1">
                    <a href="#" className="font-semibold text-sm">
                      farrid_jr
                    </a>
                    <a
                      href="#"
                      className="text-true-gray-400 text-sm tracking-wider"
                    >
                      Toko Kopi Djawa
                    </a>
                  </div>
                </li>
                <img
                  src="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/52587363_337058170259838_5151250109469521684_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0mKd6FG1ZyEAX8Fl2oj&tp=1&oh=8e76f8d49c202c92c6a87bcef20b458e&oe=5FE639A6"
                  alt=""
                  class="h-auto w-full"
                />
                <div className="px-4 py-4 md:px-10">
                  <div className="flex">
                    <div className="mr-3">
                      <svg
                        aria-label="Unlike"
                        class="_8-yf5 "
                        fill="#ed4956"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                    </div>
                    <div className="mr-3">
                      <svg
                        aria-label="Comment"
                        class="_8-yf5 "
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <svg
                        aria-label="Share Post"
                        class="_8-yf5 "
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center text-sm tracking-wider mt-2">
                    <div className="font-light mr-1">Disukai oleh</div>
                    <div className="font-bold mr-1">kuntoro.tech</div>
                    <div className="font-light mr-1">dan</div>
                    <div className="font-bold">Lainnya</div>
                  </div>
                  <p className="py-2">
                    <strong>farrid_jr</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Deleniti harum quibusdam cum
                    quod error iste voluptas! Voluptas rem sapiente minus?
                    Corrupti vero, possimus velit veniam, cumque neque
                    repudiandae nihil impedit atque quae ipsum alias itaque quo,
                    perferendis fuga repellat tempora.
                  </p>
                  <p className="text-sm tracking-wider text-gray-400">
                    1 Hari yang lalu
                  </p>
                </div>
                <hr />
                <div className="px-4 py-4 md:px-10 flex justify-between items-center">
                  <div className="text-true-gray-400 text-sm tracking-wider">
                    Add a comment...
                  </div>
                  <div className="text-blue-500 font-semibold">POST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StoryIG;
