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
      <div className="relative flex flex-col w-full py-4 md:py-10 mx-auto space-y-4 md:space-y-10 bg-gray-900 text-lg/8 md:text-xl/9 md:w-3xl">
        <DataStart />
        <DataMonth />
        <DataEnd />
        {more && <DataEtc />}
      </div>
      {showBtn && (
        <div className="relative">
          <div className="fixed bottom-4 right-4 md:bottom-4 md:right-[max(calc(15px+((100%-768px)/2)),15px)] md:px-5">
            <button
              className={`flex items-center justify-center w-12 h-12 text-2xl text-white 
                        bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl
                        focus:ring-2 focus:outline-none focus:ring-cyan-300 rounded-full`}
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
