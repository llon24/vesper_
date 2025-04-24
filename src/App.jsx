import DataEnd from './components/DataEnd';
import DataMonth from './components/DataMonth';
import DataStart from './components/DataStart';
import DataEtc from './components/DataEtc';
import { useState } from 'react';

function App() {
  const [more, setMore] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const onClickMore = () => {
    setMore(!more);
    setShowBtn(false);
  };
  return (
    <>
      <div className="relative flex flex-col py-10 mx-auto space-y-10 bg-gray-900 text-sm/6 w-sm md:text-xl/9 md:w-3xl">
        <DataStart />
        <DataMonth />
        <DataEnd />
        {more && <DataEtc />}
      </div>
      {showBtn && (
        <div className="relative">
          <div className="fixed bottom-4 right-[max(calc(8px+((100%-384px)/2)),8px)] md:bottom-4 md:right-[max(calc(15px+((100%-768px)/2)),15px)] md:px-5">
            <button
              className={`flex items-center justify-center w-6 h-6 md:w-12 md:h-12 text-white 
                        bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl
                        focus:ring-2 focus:outline-none focus:ring-cyan-300 rounded-full
                        text-xs md:text-lg`}
              onClick={onClickMore}
            >
              +
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
