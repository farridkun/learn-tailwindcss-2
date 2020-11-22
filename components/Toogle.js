import { Switch } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
// import Container from '../pages/Container';

function Toogle() {
  const [enabled, setEnabled] = useState(false);

  const selectTheme = (value) => {
    localStorage.setItem('theme', value);
    document.querySelector('html').classList.add(localStorage.getItem('theme'));

    if (value == 'dark') {
      document.querySelector('html').classList.remove('light');
    } else if ('light') {
      document.querySelector('html').classList.remove('dark');
    }
  };

  useEffect(() => {
    document.querySelector('html').classList.add(localStorage.getItem('theme'));
  }, []);

  // const handleToggle = (value) => {
  //   localStorage.setItem('theme', value);
  //   const html = document.querySelector('html');
  //   html.classList.add(localStorage.getItem('theme'));

  //   if (value == 'dark') {
  //     html.classList.remove('light');
  //   } else {
  //     html.classList.remove('dark');
  //   }
  // };

  return (
    // <Container>
    <div className="dark:bg-gray-800 flex items-center justify-center p-12">
      <div className="w-full max-w-xs mx-auto">
        <Switch.Group as="div" className="flex items-center space-x-4">
          <Switch.Label className="text-gray-800 dark:text-white">
            Enable dark mode
          </Switch.Label>
          <div
            onClick={
              enabled ? () => selectTheme('light') : () => selectTheme('dark')
            }
          >
            <Switch
              as="button"
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? 'bg-green-400' : 'bg-gray-200'
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

    // </Container>
  );
}

export default Toogle;
