import React from "react";

export default function Movie() {
  return (
    <section
      className="w-full flex flex-col items-center py-24 bg-transparent"
      id="movie"
    >
      {/* タイトル */}
      <div className="mb-16 w-full max-w-6xl px-4">
        <div className="relative inline-block">
          <h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 tracking-wider drop-shadow-lg text-left"
            style={{
              letterSpacing: "0.08em",
              fontFamily: "'Shippori Mincho B1'",
            }}
          >
            Movie
          </h2>
          <span
            className="block mt-2 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fc3f7 0%, #b0c4de 100%)",
            }}
          ></span>
        </div>
      </div>
      {/* 動画 */}
      <div className="w-full max-w-6xl px-4">
        <div
          className="w-full aspect-video overflow-hidden mb-4"
          style={{
            border: "2px solid #b0c4de",
            boxShadow: "0 8px 0 0 #b0c4de, 0 16px 32px 0 rgba(79,195,247,0.15)",
            fontFamily: "serif",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JhAwFZgtzvs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </section>
  );
}
