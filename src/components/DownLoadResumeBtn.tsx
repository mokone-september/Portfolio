"use client";

import React from 'react';
import HackerBtn from './animation/HackerBtn';
import { Download } from 'lucide-react';

function DownLoadResumeBtn() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Thabiso_Kenneth_Mokone_-_Software_Developer.pdf'; 
    link.download = 'Thabiso_Kenneth_Mokone_-_Software_Developer.pdf'; 
    link.click(); 
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn label="Download Resume" onClick={downloadResume} />
    </div>
  );
}

export default DownLoadResumeBtn;
