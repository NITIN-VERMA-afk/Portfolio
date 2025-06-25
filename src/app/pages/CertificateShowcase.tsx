"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, X, Download, Eye } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  downloadUrl: string;
  category: string;
  provider: string;
  completedDate: string;
  duration: string;
}

const CertificateShowcase = () => {
  // Sample certificate data - replace with your actual certificate images/data
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "The complete 2023 web development bootcamp",
      description: "learn fundamentals of full stack web development",
      image: "img/web dev bootcamp.png",
      downloadUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-76f68601-3751-4fdd-a6a9-20b6823045d9.pdf",
      category: "bootcamp",
      provider: "Udemy",
      completedDate: "2024",
      duration: "63 hours"
    },
    {
      id: 2,
      title: "javascript argorithms and data structures masterclass", 
      description: "problem solving and coding interview preparation",
      image: "img/dsamasterclass.png",
      downloadUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d403efb9-c1c7-4e56-8a53-4b6937675361.pdf",
      category: "DSA",
      provider: "Udemy",
      completedDate: "2024",
      duration: "22 hours"
    },
    {
      id: 3,
      title: "devops begineer to advance with projects",
      description: "Advanced devops concepts and best practices",
      image: "img/devops.png",
      downloadUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-76168fa9-abeb-49ac-824d-6b3aeeebcda8.pdf", 
      category: "bootcamp",
      provider: "Udemy",
      completedDate: "2025",
      duration: "55 hours"
    },
    {
      id: 3,
      title: "Langchain-Develop LLM powered applications with langchain",
      description: "gen ai",
      image: "img/langchain.png",
      downloadUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6c0af23e-af2f-43d9-bd62-46d8994c97fd.pdf", 
      category: "bootcamp",
      provider: "Udemy",
      completedDate: "2025",
      duration: "12 hours"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

 
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, certificates.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div id='Certificates' className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4">
          Certificates
        </h2>
        <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg px-2 xs:px-4">
          Professional certifications and completed courses
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {certificates.map((certificate) => (
            <div key={certificate.id} className="w-full flex-shrink-0 min-w-0">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 p-3 sm:p-4 md:p-6 lg:p-8">
               
                <div className="relative group w-full">
                  <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-purple-50">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-80 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      onClick={() => openModal(certificate)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                    </div>
                  </div>
                  
                  
                  <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    {certificate.category}
                  </div>
                  
                  
                  <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium shadow-lg">
                    {certificate.provider}
                  </div>
                </div>

                
                <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 w-full min-w-0">
                  <div className="w-full">
                    <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight break-words">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed mb-3 break-words">
                      {certificate.description}
                    </p>
                    
                 
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                      <div className="bg-gray-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Completed</p>
                        <p className="font-semibold text-gray-900 text-xs xs:text-sm">{certificate.completedDate}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-md">
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-900 text-xs xs:text-sm">{certificate.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full">
                    <button
                      onClick={() => openModal(certificate)}
                      className="flex items-center justify-center gap-1 xs:gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg transition-all duration-200 font-medium shadow-lg text-xs xs:text-sm sm:text-base flex-1 xs:flex-none"
                    >
                      <Eye size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span className="whitespace-nowrap">View</span>
                    </button>
                    <button
                      onClick={() => window.open(certificate.downloadUrl, '_blank')}
                      className="flex items-center justify-center gap-1 xs:gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg transition-colors duration-200 font-medium text-xs xs:text-sm sm:text-base flex-1 xs:flex-none"
                    >
                      <Download size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      <span className="whitespace-nowrap">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200 group"
        >
          <ChevronLeft className="text-gray-700 group-hover:text-blue-600 w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200 group"
        >
          <ChevronRight className="text-gray-700 group-hover:text-blue-600 w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </div>


      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 sm:mt-6">
       
        <div className="flex gap-1.5 sm:gap-2 order-2 sm:order-1">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-6 sm:w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        
        <button
          onClick={toggleAutoPlay}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base order-1 sm:order-2 ${
            isAutoPlay 
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isAutoPlay ? <Pause size={16} className="sm:w-5 sm:h-5" /> : <Play size={16} className="sm:w-5 sm:h-5" />}
          {isAutoPlay ? 'Pause' : 'Play'}
        </button>
      </div>

     
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-1 xs:p-2 sm:p-4">
          <div className="relative w-full max-w-5xl max-h-full bg-white rounded-lg overflow-hidden mx-1 xs:mx-2 sm:mx-4">
            <button
              onClick={closeModal}
              className="absolute top-1 xs:top-2 sm:top-4 right-1 xs:right-2 sm:right-4 bg-white/90 hover:bg-white p-1 xs:p-1.5 sm:p-2 rounded-full shadow-lg z-10 transition-colors duration-200"
            >
              <X className="text-gray-700 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="p-2 xs:p-3 sm:p-6">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[50vh] xs:max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] object-contain rounded-md"
              />
              
              <div className="mt-2 xs:mt-3 sm:mt-4 text-center">
                <h3 className="text-sm xs:text-base sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 px-1 xs:px-2 break-words">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base px-1 xs:px-2 break-words">
                  {selectedCertificate.description}
                </p>
                <button
                  onClick={() => window.open(selectedCertificate.downloadUrl, '_blank')}
                  className="inline-flex items-center gap-1 xs:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg transition-colors duration-200 font-medium text-xs xs:text-sm sm:text-base"
                >
                  <Download size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateShowcase;