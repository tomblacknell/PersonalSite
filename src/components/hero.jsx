/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import scrollTo from '../utils/scrollTo';

const colors = [
  ['rgba(248, 255, 233, 1)', 'rgba(237, 173, 58, 0.4)', 'rgba(80, 44, 17, 0.4)'], // yellow
  ['rgba(247, 216, 221, 1)', 'rgba(210, 100, 64, 0.4)', 'rgba(60, 25, 30, 0.4)'], // red
  ['rgba(180, 192, 224, 1)', 'rgba(115, 102, 165, 0.4)', 'rgba(32, 31, 58, 0.4)'], // purple
];

const Hero = ({ children }) => {
  const background = useRef(null);
  const canvas = useRef(null);

  const fixDpi = (dpi) => {
    const styleHeight = window.getComputedStyle(canvas.current).getPropertyValue('height').slice(0, -2);
    const styleWidth = window.getComputedStyle(canvas.current).getPropertyValue('width').slice(0, -2);
    canvas.current.setAttribute('height', styleHeight * dpi);
    canvas.current.setAttribute('width', styleWidth * dpi);
  };

  const generateStars = (canvasWidth, canvasHeight) => {
    const stars = [];
    for (let n = 0; n < 100; n += 1) {
      const [
        innerCol,
        outerCol,
        glowCol,
      ] = colors[Math.floor(Math.random() * colors.length, 10)];
      stars.push({
        x: parseInt(Math.random() * canvasWidth, 10),
        y: parseInt(Math.random() * canvasHeight, 10),
        radius: Math.random() * 5,
        innerCol,
        outerCol,
        glowCol,
      });
    }
    return stars;
  };

  const [stars, setStars] = useState(null);
  const [started, setStarted] = useState(false);

  const animate = () => {
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.rect(0, 0, background.current.width, background.current.height);
    ctx.fill();
    stars.forEach((star, pos) => {
      // glow
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2, false);
      ctx.fillStyle = star.glowCol;
      ctx.fill();
      ctx.closePath();
      // outer
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2, false);
      ctx.fillStyle = star.outerCol;
      ctx.fill();
      ctx.closePath();
      // inner
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = star.innerCol;
      ctx.fill();
      ctx.closePath();

      // update positions
      if (star.x > (canvas.current.width + (star.radius * 2))) {
        stars[pos].x = -star.radius;
      } else {
        stars[pos].x = star.x + (star.radius / 15);
      }
    });

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    fixDpi(window.devicePixelRatio);
    setStars(generateStars(canvas.current.width, canvas.current.height));
  }, []);

  useEffect(() => {
    if (stars && !started) {
      setStarted(true);
      requestAnimationFrame(animate);
    }
  }, [stars]);

  return (
    <div className="canvas-hero">
      <canvas
        style={{ backgroundColor: 'black' }}
        id="background-canvas"
        ref={background}
        className="canvas"
      />
      <canvas
        id="stars-canvas"
        ref={canvas}
        className="canvas"
      />
      <div style={{ height: '100%' }}>
        {children}
      </div>
      <div className="row justify-center">
        <FontAwesomeIcon
          onClick={() => scrollTo('projects')}
          className="icon-hero bounce"
          size="2x"
          icon={faAngleDoubleDown}
        />
        <small
          style={{
            color: 'white',
            bottom: 0,
            position: 'absolute',
            marginBottom: 10,
            right: 10,
          }}
        >
          <a
            href="https://github.com/tomblacknell/PersonalSite/blob/master/src/components/hero.jsx"
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'rgb(135, 135, 135)',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Source
          </a>
        </small>
      </div>
    </div>
  );
};

export default Hero;
