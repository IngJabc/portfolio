"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectCarousel.module.css";

interface ProjectCarouselProps {
  images: string[];
  title: string;
  onOpen?: () => void;
}

export default function ProjectCarousel({ images, title, onOpen }: ProjectCarouselProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total]);

  const openModal = (startIndex: number = 0) => {
    setCurrent(startIndex);
    setModalOpen(true);
    onOpen?.();
  };

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft") setCurrent((c) => Math.max(0, c - 1));
      if (e.key === "ArrowRight") setCurrent((c) => Math.min(total - 1, c + 1));
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [modalOpen, total]);

  if (total === 0) return null;

  return (
    <>
      <div className={styles.thumbnailStrip}>
        <div className={styles.thumbnailsScroll}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={styles.thumbnail}
              onClick={() => openModal(i)}
              aria-label={`View screenshot ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                sizes="96px"
                className={styles.thumbImage}
                loading="lazy"
                draggable={false}
              />
            </button>
          ))}
        </div>
        <div className={styles.counter}>
          <svg className={styles.cameraIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span className={styles.badge}>{total}</span>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>

              <div className={styles.carousel}>
                <div
                  className={styles.track}
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <div key={src} className={styles.slide}>
                      <Image
                        src={src}
                        alt={`${title} screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        className={styles.slideImage}
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>

                {current > 0 && (
                  <button
                    type="button"
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={prev}
                    aria-label="Previous screenshot"
                  >
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                )}
                {current < total - 1 && (
                  <button
                    type="button"
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={next}
                    aria-label="Next screenshot"
                  >
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                )}

                <div className={styles.dots} role="tablist" aria-label="Screenshot navigation">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                      onClick={() => setCurrent(i)}
                      role="tab"
                      aria-selected={i === current}
                      aria-label={`Screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.modalCounter}>
                {current + 1} / {total}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
