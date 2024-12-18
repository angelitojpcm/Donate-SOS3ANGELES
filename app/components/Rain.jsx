"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const RainEffect = () => {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    setRaindrops(
      Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        size: `${Math.random() * 15 + 5}px`,
        left: Math.random() * 100,
        duration: Math.random() * 0.5 + 0.5,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {raindrops.map((drop) => (
        <Raindrop
          key={drop.id}
          size={drop.size}
          left={drop.left}
          duration={drop.duration}
        />
      ))}
    </div>
  );
};

export const RainSound = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isLooping, setIsLooping] = useState(true);
  const [currentSound, setCurrentSound] = useState(0);
  const audioRef = useRef(null);

  const sounds = [
    { name: "Thoughts in the Rain", src: "/assets/sounds/rain.mp3" },
    { name: "Wherever You Go", src: "/assets/sounds/rain-2.mp3" },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  };

  const nextSound = () => {
    setCurrentSound((prev) => (prev + 1) % sounds.length);
  };

  const prevSound = () => {
    setCurrentSound((prev) => (prev - 1 + sounds.length) % sounds.length);
  };

  const getVolumeIcon = () => {
    if (volume === 0)
      return "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1z";
    if (volume < 0.5)
      return "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z";
    return "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 bg-black/30 backdrop-blur-sm p-4 rounded-xl shadow-lg w-64 md:w-72">
      <div className="flex flex-col gap-2">
        {sounds.map((sound, index) => (
          <button
            key={sound.name}
            onClick={() => setCurrentSound(index)}
            className={`flex items-center justify-between p-2 rounded-lg transition-all ${
              currentSound === index
                ? "bg-white/20 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="text-sm font-medium">{sound.name}</span>
            {currentSound === index && (
              <motion.div
                className="flex items-center gap-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="w-1 h-1 bg-current rounded-full" />
                <span className="w-1 h-1 bg-current rounded-full" />
                <span className="w-1 h-1 bg-current rounded-full" />
              </motion.div>
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-2 pt-2 border-t border-white/10">
        <motion.svg
          className="w-4 h-4 text-white/70"
          viewBox="0 0 24 24"
          fill="currentColor"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.2 }}
        >
          <path d={getVolumeIcon()} />
        </motion.svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-center gap-2 mt-2">
        <button
          onClick={toggleLoop}
          className={`text-white/70 hover:text-white p-2 transition-colors ${
            isLooping ? "text-primary-500" : ""
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 17H7V14L3 18L7 22V19H19V13H17M7 7H17V10L21 6L17 2V5H5V11H7V7Z" />
          </svg>
        </button>
        <button
          onClick={togglePlay}
          className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all hover:scale-105"
        >
          {isPlaying ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={sounds[currentSound].src}
        autoPlay={true}
        loop={isLooping}
      />
    </div>
  );
};

const Raindrop = ({ size, left, duration }) => (
  <motion.div
    className="absolute text-blue-400 opacity-30"
    initial={{ top: -20, left: `${left}%` }}
    animate={{ top: "100vh" }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{ fontSize: size }}
  >
    |
  </motion.div>
);
