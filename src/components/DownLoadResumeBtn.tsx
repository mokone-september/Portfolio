"use client";

import React from 'react';
import HackerBtn from './animation/HackerBtn';


function DownLoadResumeBtn() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Thabiso_Kenneth_Mokone_-_Software_Developer.pdf'; 
    link.download = 'Thabiso_Kenneth_Mokone_-_Software_Developer.pdf'; 
    link.click(); 
  };

  return (
    <div className="h-fit w-full mt-2 py- px-4">
      <HackerBtn label="Download Resume" onClick={downloadResume} />
    </div>
  );
}

export default DownLoadResumeBtn;
