import React from 'react';
import { Button } from "@/components/ui/button";

const DownloadResumeButton = () => {
  const handleDownload = () => {
   
    const resumeUrl = '/pdf/resume.pdf';
    
    
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'resume.pdf';
    anchor.click();
  };

  return (
  
    <Button onClick={handleDownload} >Resume</Button>
  );
};

export default DownloadResumeButton;
