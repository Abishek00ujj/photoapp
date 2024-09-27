import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import axios from 'axios';
import Procomponents from './components/Procomponents';
import { Code,Linkedin,Github} from 'lucide-react';
function App() {
  const accessKey = "aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs";
  const [page, setPage] = useState(1);
  const [inputData, setInputData] = useState('dog');
  const [photos, setPhotos] = useState([]);
  const inputRef = useRef(null);

  const fetchData = async (query, pageNumber) => {
    const url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${query}&client_id=${accessKey}`;
    try {
      const response = await axios.get(url);
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchData(inputData, page);
  }, [page, inputData]);

  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
    setInputData(inputValue);
    setPage(1);  
    setPhotos([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for images"
          className="border rounded-l-md p-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 rounded-r-md"
        >
          Search
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-6">
        {photos.length > 0 ? (
          photos.map(photo => (
            <div key={photo.id} className="relative">
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                onClick={() => window.open(photo.links.download, '_blank')}
                className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out"
              >
                Download
              </button>
              <div className="absolute top-2 left-2 bg-gray-800 text-white p-2 rounded-full flex items-center gap-1">
                <span className="text-red-500">❤️</span> {photo.likes}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No images found.</p>
        )}
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={loadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Load More
        </button>
      </div>
      <footer className="mt-10 p-4 bg-slate-900 text-white text-center">
        <h3 className="mb-4 text-lg">Connect with Me</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://leetcode.com/u/abisheks123/" target="_blank" rel="noopener noreferrer">
            <Code className="w-8 h-8 hover:text-orange-400 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/abishek-s-336b612b9?fromQR=1 " target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 hover:text-blue-400 transition duration-200" />
          </a>
          <a href="https://github.com/Abishek00ujj" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 hover:text-gray-400 transition duration-200" />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 Abishek. All rights reserved.<br/><p>Made with ❤ by Abishek</p></p>
      </footer>
    </>
  );
}

export default App;
