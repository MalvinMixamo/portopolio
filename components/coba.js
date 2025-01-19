// pages/index.js
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = textRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hitung posisi scroll untuk animasi
      const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

      // Update posisi teks berdasarkan progress scroll
      element.style.transform = `translate(-50%, calc(-50% + ${progress * 500}px))`;
    };

    // Tambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "00vh", backgroundColor: "black" }}>
      <div
        ref={textRef}
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          fontSize: "200px",
          transform: "translate(-50%, -50%)",
          color: "transparent",
          WebkitTextStroke: "2px white",
          transition: "transform 0.1s linear",
          zIndex: "-1",
        }}
      >
        MALVIN
      </div>
    </div>
  )
}
