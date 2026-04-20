
import { useState } from "react";

const projects = [
  {
    thumb: "https://img.youtube.com/vi/uyeRi2Lc954/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/uyeRi2Lc954"
  },
  {
    thumb: "https://img.youtube.com/vi/NdcygytQlYQ/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/NdcygytQlYQ"
  },
  {
    thumb: "https://img.youtube.com/vi/SDHKQbKC7gA/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/SDHKQbKC7gA"
  },
  {
    thumb: "https://img.youtube.com/vi/p6UiFObNQlE/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/p6UiFObNQlE"
  },
  {
    thumb: "https://img.youtube.com/vi/tTplmSnPIHQ/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/tTplmSnPIHQ"
  },
  {
    thumb: "https://img.youtube.com/vi/f-rBpnp4BP4/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/f-rBpnp4BP4"
  },
  {
    thumb: "/thumbnails/video1.jpg",
    video: "https://drive.google.com/file/d/1CDvtJn55SepglvKkhiONdHMg41AyqFJ0/preview"
  },
  {
    thumb: "/thumbnails/video2.jpg",
    video: "https://drive.google.com/file/d/10JJjlT3kiiO5fOwyPfYEAYvCfHI58LhK/preview"
  },
  {
    thumb: "/thumbnails/video3.jpg",
    video: "https://drive.google.com/file/d/1X2xA4PdKna-0V2533sDeMt-l1N6P7YR1/preview"
  }
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="px-10 py-24 bg-[#F8F7F4]">
      <h2 className="text-3xl font-semibold mb-12 text-[#111]">Selected Work</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer bg-white"
            onClick={() => setActiveVideo(p.video)}
          >
            <img src={p.thumb} className="w-full" />
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[800px]">
            <iframe
              src={activeVideo}
              className="w-full aspect-video rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-[-40px] right-0 text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
