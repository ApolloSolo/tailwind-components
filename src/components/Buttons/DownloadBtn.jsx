import {FiDownload} from "react-icons/fi"

const DownloadBtn = () => {
  return (
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <FiDownload/>
      <span className="ml-2">Download</span>
    </button>
  );
};

export default DownloadBtn;
