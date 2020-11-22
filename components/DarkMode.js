import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch } from '@headlessui/react';

function DarkMode() {
  const [datas, setDatas] = useState([]);
  const [enabledTheme, setEnabledTheme] = useState(false);
  const [loading, setLoading] = useState(false);

  const urlAPI = 'https://5fa178342541640016b6b13b.mockapi.io/api/v1/products';

  const selectTheme = (value) => {
    localStorage.setItem('theme', value);

    const html = document.querySelector('html');

    html.classList.add(localStorage.getItem('theme'));

    if (value == 'dark') {
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      document
        .querySelector('html')
        .classList.add(localStorage.getItem('theme'));

      axios.get(urlAPI).then((res) => {
        setDatas(res.data);
        setLoading(false);
      });
    }, 2000);
  }, []);

  // <svg
  //   class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
  //   xmlns="http://www.w3.org/2000/svg"
  //   fill="none"
  //   viewBox="0 0 24 24"
  // ></svg>;

  if (loading) {
    return (
      <div>
        <div className="flex justify-center">
          <button
            type="button"
            className="focus:outline-none bg-gray-900 text-white dark:text-gray-800 dark:bg-white rounded-lg py-4 px-10 flex justify-between shadow"
            disabled
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white dark:text-gray-800"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading Data
          </button>
        </div>

        {/* // <div> */}
        {/* <div className="animate-pulse bg-white dark:bg-gray-800 shadow p-4 rounded-lg my-6 flex items-center justify-between">
          <div className="h-4 bg-gray-400 dark:bg-gray-900 rounded w-2/4 font-semibold text-lg text-gray-800 dark:text-white"></div>
          <div>
            <button
              onClick={() => selectTheme('light')}
              className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            ></button>
            <button
              onClick={() => selectTheme('dark')}
              className="focus:outline-none w-4 h-4 bg-black rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            ></button>
          </div>
        </div> */}
        {datas.map((data, i) => (
          <div key={i}>
            <div className=" bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden my-6">
              <div className="px-10 py-8">
                <h1 className="h-4 rounded w-2/4 bg-gray-400 dark:bg-gray-900 text-2xl font-bold text-gray-800 dark:text-white mb-6"></h1>
                <div className="h-8 rounded w-5/4 bg-gray-400 dark:bg-gray-900 leading-relaxed text-gray-500 dark:text-gray-300 text-lg"></div>
              </div>
              <div className="px-10 py-6 bg-white dark:bg-gray-900 border-t border-gray-200 ">
                <div className="h-4 rounded w-1/4 bg-gray-400 dark:bg-gray-800 px-6 dark:border-gray-900 dark:text-gray-200"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg my-6 flex items-center justify-between">
        <div className="font-semibold text-lg text-gray-800 dark:text-white">
          Product List 💥
        </div>
        <div>
          {/* <button
            onClick={() => selectTheme('light')}
            className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          ></button>
          <button
            onClick={() => selectTheme('dark')}
            className="focus:outline-none w-4 h-4 bg-black rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          ></button> */}
          <Switch.Group as="div" className="flex items-center space-x-4">
            <div
              onClick={
                enabledTheme
                  ? () => selectTheme('light')
                  : () => selectTheme('dark')
              }
            >
              <Switch
                as="button"
                checked={enabledTheme}
                onChange={setEnabledTheme}
                className={`${
                  enabledTheme ? 'bg-green-400' : 'bg-gray-200'
                } relative inline-flex flex-shrink-0 h-6 w-12 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:shadow-outline`}
              >
                {({ checked }) => (
                  <span
                    className={`${
                      checked ? 'translate-x-6' : 'translate-x-0'
                    } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
                  />
                )}
              </Switch>
            </div>
          </Switch.Group>
        </div>
      </div>
      {datas.map((data) => (
        <div key={data.id}>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden my-6">
            <div className="px-10 py-8">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {data.name}
              </h1>
              <div className="leading-relaxed text-gray-500 dark:text-gray-300 text-lg">
                {data.description}
              </div>
            </div>
            <div className="flex justify-between items-center px-10 py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-900 dark:text-gray-200">
              <div>IDR {data.price}0,00</div>
              <div className="px-2 py-2 rounded-lg tracking-widest hover:transition-shadow hover:shadow-xl duration-300 ease-in-out hover:bg-red-200 border-2 border-gray-900 dark:border-gray-500 text-gray-900 dark:text-gray-200 dark:hover:text-gray-500 grid grid-cols-5 gap-4">
                <div className="select-all col-span-4">{data.material}</div>
                <div className="text-gray-900 dark:text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-copy"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DarkMode;
