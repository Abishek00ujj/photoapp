import React from 'react'
import { Download, Heart } from 'lucide-react';
const Procomponents = (props) => {
    let img='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
    let likes=10;
    return (
        <div className="relative w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg border-2 border-black">
          <img
            src={props.img}
            alt="Image"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out"
            onClick={() => window.open(props.downimg, '_blank')}
          >
            <Download size={20} />
          </button>
          <div className="absolute top-2 left-2 bg-gray-800 text-white p-2 rounded-full flex items-center gap-1">
            <Heart size={20} className="text-red-500" />
            <span>{props.likes}</span>
          </div>
        </div>
      );
}

export default Procomponents