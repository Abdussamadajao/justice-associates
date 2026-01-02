"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FaShieldAlt, FaGavel, FaBriefcase, FaSearch } from "react-icons/fa";
import { FaBuilding, FaCopyright } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { Skeleton } from "@/components/ui/skeleton";

const iconMap: Record<string, IconType> = {
  FaShieldAlt,
  FaGavel,
  FaBriefcase,
  FaSearch,
  FaBuilding,
  FaCopyright,
};

interface PracticeAreaHeroProps {
  title: string;
  shortDescription: string;
  iconName: string;
  imageUrl: string;
}

const PracticeAreaHero: React.FC<PracticeAreaHeroProps> = ({
  title,
  shortDescription,
  iconName,
  imageUrl,
}) => {
  const IconComponent = iconMap[iconName] || FaShieldAlt;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true); // Show content even if image fails
    };

    // Fallback: if image takes too long, show content anyway
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 5000); // 5 second timeout

    return () => {
      clearTimeout(timeout);
    };
  }, [imageUrl]);

  return (
    <section className="relative pt-32 pb-20 bg-secondary overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: imageError
              ? "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000')"
              : `url(${imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-secondary/65 via-secondary/50 to-secondary/65" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Loading State */}
          {!imageLoaded && (
            <div className="space-y-8">
              <Skeleton className="h-6 w-48 bg-white/20" />
              <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                <Skeleton className="h-20 w-20 rounded-2xl bg-white/20" />
                <div className="flex-1 space-y-4">
                  <Skeleton className="h-12 w-full max-w-2xl bg-white/20" />
                  <Skeleton className="h-8 w-full max-w-xl bg-white/20" />
                  <Skeleton className="h-8 w-full max-w-lg bg-white/20" />
                </div>
              </div>
            </div>
          )}

          {/* Content - shown after image loads */}
          <div
            className={`transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            {/* Back Button */}
            <Link
              href="/practice-areas"
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors duration-300 group"
            >
              <FaArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Practice Areas</span>
            </Link>

            {/* Icon and Title */}
            <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-8">
              <div className="shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <IconComponent className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                  {title}
                </h1>
                <p className="text-white/95 text-lg md:text-xl leading-relaxed">
                  {shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaHero;
