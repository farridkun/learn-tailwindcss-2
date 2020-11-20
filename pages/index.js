// const { default: Quote } = require('../components/Quote');
import Quote from '../components/Quote';
import Ring from '../components/Ring';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-5/12">
        <Quote />
        <Ring />
      </div>
    </div>
  );
}

export default Home;
