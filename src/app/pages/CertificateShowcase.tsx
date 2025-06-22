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
 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-slide functionality
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
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Certificates
        </h2>
        <p className="text-gray-600 text-lg">
          Professional certifications and completed courses
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {certificates.map((certificate) => (
            <div key={certificate.id} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Certificate Preview */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-80 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      onClick={() => openModal(certificate)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {certificate.category}
                  </div>
                  
                  {/* Provider Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {certificate.provider}
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {certificate.description}
                    </p>
                    
                    {/* Certificate Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Completed</p>
                        <p className="font-semibold text-gray-900">{certificate.completedDate}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-900">{certificate.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => openModal(certificate)}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg"
                    >
                      <Eye size={20} />
                      View Certificate
                    </button>
                    <button
                      onClick={() => window.open(certificate.downloadUrl, '_blank')}
                      className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                      <Download size={20} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 group"
        >
          <ChevronLeft className="text-gray-700 group-hover:text-blue-600" size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 group"
        >
          <ChevronRight className="text-gray-700 group-hover:text-blue-600" size={24} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dots Indicator */}
        <div className="flex gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            isAutoPlay 
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
          {isAutoPlay ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Modal for Full Preview */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full bg-white rounded-xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors duration-200"
            >
              <X className="text-gray-700" size={24} />
            </button>
            
            <div className="p-6">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedCertificate.description}
                </p>
                <button
                  onClick={() => window.open(selectedCertificate.downloadUrl, '_blank')}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                  <Download size={20} />
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