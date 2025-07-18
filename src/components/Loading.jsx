import React from "react";

export const Loading = () => {
  return (
    <div className="w-full h-screen fixed z-[999999] top-0 left-0 right-0 bottom-0 overflow-hidden py-20 bg-gray-500 bg-opacity-60 dark:bg-black">
      <div className="absolute w-full inset-0 flex items-center justify-center">
        {/* Logo image as circle */}
        <div className="absolute animate-ripple rounded-full z-10 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/omdalogo.png')] outline outline-offset-2 outline-blue-300 dark:outline-gray-600 shadow-xl border w-[180px] h-[180px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 bg-contain bg-white"></div>

        {/* Ripples */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-black shadow-xl border border-solid top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100`}
            style={{
              width: `${180 + i * 70}px`,
              height: `${180 + i * 70}px`,
              opacity: 0.2 - i * 0.03,
              animationDelay: `${i * 0.06}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
