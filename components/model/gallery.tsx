"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

// Exterior - Interior - Details
export function ImageGallery({ imageUrls }: { imageUrls: string[] }) {
  // Track both the selected image and its index
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Navigate to the next image
  const showNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }, [imageUrls.length]);

  // Navigate to the previous image
  const showPrevImage = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  }, [imageUrls.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case "ArrowRight":
          showNextImage();
          break;
        case "ArrowLeft":
          showPrevImage();
          break;
        case "Escape":
          closeModal();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, showNextImage, showPrevImage]);

  const openModal = (index: number): void => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // Navigation button component for DRY code
  const NavigationButton = ({
    onClick,
    direction,
    label,
  }: {
    onClick: () => void;
    direction: "prev" | "next";
    label: string;
  }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "prev" ? "left-4" : "right-4"
      } bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all`}
      aria-label={label}
    >
      {/* Light Box Navigation Button Design */}
      <span className="sr-only">{label}</span>
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "prev" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {imageUrls.map((src: string, index: number) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 16vw"
              priority={true}
              quality={50}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full"
              aria-label="Close modal"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {/* Use regular img tag for this to prioritize loading speed */}
            <div className="relative aspect-[16/9] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrls[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="object-contain w-[85vh] h-[85vh] mx-auto"
              />
            </div>

            <NavigationButton
              onClick={showPrevImage}
              direction="prev"
              label="Previous image"
            />

            <NavigationButton
              onClick={showNextImage}
              direction="next"
              label="Next image"
            />
            <div className="absolute -bottom-12 left-0 right-0 text-white text-center">
              {currentIndex + 1} / {imageUrls.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
