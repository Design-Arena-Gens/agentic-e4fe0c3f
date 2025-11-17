'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scene, setScene] = useState(0);
  const [showPlay, setShowPlay] = useState(true);

  const scenes = [
    { text: "Meet Sarah...", emoji: "👧", bg: "#1a1a2e" },
    { text: "She discovers a magical lava ice cream", emoji: "🍦", bg: "#16213e" },
    { text: "The ice cream glows with fiery colors", emoji: "🔥", bg: "#e94560" },
    { text: "She takes the first bite...", emoji: "😋", bg: "#ff6b6b" },
    { text: "It's AMAZING!", emoji: "🤩", bg: "#ee5a6f" },
    { text: "The lava flavor explodes!", emoji: "💥", bg: "#c44569" },
    { text: "Another delicious bite", emoji: "😍", bg: "#f67280" },
    { text: "Pure happiness!", emoji: "✨", bg: "#ffa502" }
  ];

  const startVideo = () => {
    setShowPlay(false);
    setScene(0);
    let currentScene = 0;
    const interval = setInterval(() => {
      currentScene++;
      if (currentScene >= scenes.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowPlay(true);
          setScene(0);
        }, 2000);
      } else {
        setScene(currentScene);
      }
    }, 2000);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: scenes[scene].bg,
      transition: 'background 0.8s ease',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Animated particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'rgba(255,255,255,0.5)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      {showPlay ? (
        <button
          onClick={startVideo}
          style={{
            fontSize: '80px',
            background: 'rgba(255,255,255,0.2)',
            border: '4px solid white',
            borderRadius: '50%',
            width: '160px',
            height: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            paddingLeft: '10px'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.background = 'rgba(255,255,255,0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.background = 'rgba(255,255,255,0.2)';
          }}
        >
          ▶️
        </button>
      ) : (
        <div style={{
          textAlign: 'center',
          animation: 'fadeIn 0.8s ease',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '120px',
            marginBottom: '30px',
            animation: 'bounce 1s infinite',
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))'
          }}>
            {scenes[scene].emoji}
          </div>
          <h1 style={{
            fontSize: '48px',
            color: 'white',
            margin: 0,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            fontWeight: 'bold'
          }}>
            {scenes[scene].text}
          </h1>
        </div>
      )}

      {/* Title overlay when not playing */}
      {showPlay && (
        <div style={{
          position: 'absolute',
          top: '80px',
          textAlign: 'center',
          animation: 'fadeIn 1s ease'
        }}>
          <h1 style={{
            fontSize: '56px',
            color: 'white',
            margin: 0,
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            fontWeight: 'bold'
          }}>
            🔥 Lava Ice Cream 🍦
          </h1>
          <p style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '10px'
          }}>
            The Hottest Frozen Treat
          </p>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
