import React from 'react';

export const ProductCardEmpty = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all z-1 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full bg-gray-200 aspect-[230/230]"></div>

      <div className="p-2 flex-1 flex flex-col">
        <div className="flex-1 space-y-2">
          {/* Title skeleton */}
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>

          {/* Description skeleton */}
          <div className="h-3 bg-gray-200 rounded w-full"></div>

          {/* Price skeleton */}
          <div className="flex justify-between mt-2">
            <div className="flex gap-2">
              <div className="h-4 bg-gray-200 rounded w-10"></div>
              <div className="h-4 bg-gray-200 rounded w-10"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Bottom buttons skeleton */}
        <div className="flex items-center gap-2 mt-4">
          <div className="bg-gray-200 w-12 h-9 rounded"></div>
          <div className="bg-gray-200 h-9 w-full rounded"></div>
        </div>
      </div>
    </div>
  );
};
