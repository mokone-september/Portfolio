import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-black-700">
    I am a Software Developer &
      <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-[#2f7df4]">Farmer</li>
          <li className="text-[#2f7df4]">Cooker</li>
          <li className="text-[#2f7df4]">Reader</li>
        </ul>
      </span>
    </div>
  </div>
  )
}

export default TextRotator