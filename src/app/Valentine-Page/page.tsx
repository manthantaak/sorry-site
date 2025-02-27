"use client"
import React, { useState, useEffect } from 'react';
import { Heart, XCircle } from 'lucide-react';
import Image from 'next/image';

const FloatingHeart = ({ index }: { index: number }) => {
  const position = {
    left: `${(index * 15) % 85}%`,
    top: `${(index * 20) % 80}%`,
    animationDelay: `${index * 0.5}s`
  };

  return (
    <div className="absolute animate-float" style={position}>
      <Heart size={24} className="text-pink-500" fill="currentColor" />
    </div>
  );
};

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/love1.jpg", alt: "Romantic moment 1" },
    { src: "/love2.jpg", alt: "Romantic moment 2" },
    { src: "/love3.jpg", alt: "Romantic moment 3" },
    { src: "/cute.jpg", alt: "Romantic moment 4" },
    { src: "/love5.jpg", alt: "Romantic moment 5" },
    { src: "/love6.jpg", alt: "Romantic moment 6" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="relative h-[470px] w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-pink-500 w-4' : 'bg-pink-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ValentinePage = () => {
  const [isClient, setIsClient] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
    setShowMessage(true);
  }, []);

  const moveNoButton = () => {
    if (typeof window !== 'undefined') {
      const x = Math.random() * (window.innerWidth / 2);
      const y = Math.random() * (window.innerHeight / 2);
      setNoButtonPosition({ x, y });
    }
  };

  const handleYes = () => {
    setAnswer('yes');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <FloatingHeart key={i} index={i} />
          ))}
        </div>
      )}

      <div className={`transform transition-all duration-1000 ${
        showMessage ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="bg-gradient-to-br from-pink-200 to-red-200 backdrop-blur-lg rounded-3xl p-8 max-w-md mx-auto text-center shadow-xl relative">
          {answer === 'yes' ? (
            <div className="space-y-6">
              <div className="flex justify-center space-x-2">
                <Heart className="text-red-500 animate-bounce" size={32} fill="currentColor" />
                <Heart className="text-pink-500 animate-bounce delay-100" size={32} fill="currentColor" />
                <Heart className="text-red-500 animate-bounce delay-200" size={32} fill="currentColor" />
              </div>
              <h1 className="text-3xl font-bold text-pink-600">
                Yaaay! 🎉
              </h1>
              <p className="text-lg text-white font-bold">
                I LOVE YOU BABY!❤️
              </p>
              <ImageCarousel />

              {/* Additional Sections */}
              <div className="space-y-8 max-w-2xl mx-auto mt-6">
                {/* GIF Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Love in Motion</h2>
                  <div className="relative w-full h-80">
                    <Image src="/love.gif" alt="Cute couple gif" layout="fill" objectFit="cover" quality={100} />
                  </div>
                </div>

               

                {/* Sorry Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-pink-600 mb-4">A Little Apology</h2>
                  <p className="text-lg text-pink-500">
                  I know I may not deserve forgiveness for everything, but what I&apos;m asking for is a chance - a chance to improve, a chance to show you how deeply I care about our relationship. Beyond my tantrums, my anger, and my flaws, you are the one thing that keeps me going. You&apos;re the driving force in my life now.
                  So Tamanna, after everything you&apos;ve done for me, I&apos;m not just saying sorry - I&apos;m asking for a second chance to be better, to show you the person I can be. I promise you won&apos;t regret giving me this opportunity. You&apos;re the reason I want to change, to grow, to be someone worthy of your love. 💝
                  </p>
                </div>

                {/* Letter Section */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-pink-600 mb-4">A Little Note for You</h2>
                  <p className="text-lg text-pink-500 italic">
                    My love Tamanna,
                    <br />
                    <br />
                    When I look at you, I find confidence and hope in everything I do. Even when we argue about the smallest things, I cherish that you&apos;re the only one I can be completely myself with. Falling in love with you has been my craziest adventure, 
 The strength I get from thinking of you is incredible. Thank you for being my Gwen - you&apos;re truly my love, my everything. 💗
                    <br />
                    Forever yours,<br />
                    Manthan 💖
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <Heart 
                  className="mx-auto text-red-500 animate-pulse" 
                  size={64} 
                  fill="currentColor"
                />
              </div>

              <h1 className="text-3xl font-bold text-pink-600 mt-4">
                Do You Love Me?
              </h1>

              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={handleYes}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transform transition-all hover:scale-110 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>Yes</span>
                  <Heart size={20} fill="currentColor" />
                </button>

                {isClient && (
                  <button
                    onMouseEnter={moveNoButton}
                    style={{
                      transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                      transition: 'all 0.3s ease'
                    }}
                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-full flex items-center space-x-2"
                  >
                    <span>No</span>
                    <XCircle size={20} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValentinePage;
