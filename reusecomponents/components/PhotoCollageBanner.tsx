import React from "react";
import Image from "next/image";

const PhotoCollageBanner = () => {
  return (
    <div className="relative h-64 overflow-hidden">
      {/* Zdjęcie 1 */}
      <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden transform -skew-x-12">
        <Image
          src="/api/placeholder/800/600"
          alt="Zdjęcie 1"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden transform skew-x-12">
        <Image
          src="/api/placeholder/800/600"
          alt="Zdjęcie 2"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute w-1/2 overflow-hidden transform top-1/4 left-1/4 h-1/2 -rotate-6">
        <Image
          src="/api/placeholder/800/600"
          alt="Zdjęcie 3"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nakładka z gradientem dla lepszej czytelności tekstu */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

      {/* Tekst na banerze */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Twój Tekst Tutaj</h1>
      </div>
    </div>
  );
};

export default PhotoCollageBanner;
