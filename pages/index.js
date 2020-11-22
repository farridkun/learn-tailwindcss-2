// const { default: Quote } = require('../components/Quote');
// import Quote from '../components/Quote';
// import Ring from '../components/Ring';

// import Toogle from '../components/Toogle';

const { default: DarkMode } = require('../components/DarkMode');
import { Offline, Online } from 'react-detect-offline';
import OfflineStats from '../components/OfflineStats';

function Home() {
  return (
    <>
      <Online>
        <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
          <div className="w-5/12">
            <DarkMode />
          </div>
        </div>
      </Online>
      <Offline>
        <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
          <div className="w-5/12">
            <OfflineStats />
          </div>
        </div>
      </Offline>
    </>

    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="w-5/12">
    //     <Quote />
    //     <Ring />
    //   </div>
    // </div>

    // <Toogle />
  );
}

export default Home;
