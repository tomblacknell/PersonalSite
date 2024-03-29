/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import scrollTo from '../utils/scrollTo';

const colors = [
  ['rgba(248, 255, 233, 1)', 'rgba(237, 173, 58, 0.3)', 'rgba(80, 44, 17, 0.1)'], // yellow
  ['rgba(247, 216, 221, 1)', 'rgba(210, 100, 64, 0.3)', 'rgba(60, 25, 30, 0.1)'], // red
  ['rgba(180, 192, 224, 1)', 'rgba(115, 102, 165, 0.3)', 'rgba(32, 31, 58, 0.1)'], // purple
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
        radius: Math.random() * 4,
        innerCol,
        outerCol,
        glowCol,
      });
    }
    return stars;
  };

  const [stars, setStars] = useState(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    fixDpi(window.devicePixelRatio);
    setStars(generateStars(canvas.current.width, canvas.current.height));
  }, []);

  useEffect(() => {
    let frame;
    const ctx = canvas.current.getContext('2d');
    ctx.globalAlpha = 0.0;
    const animate = () => {
      if (frame < 200) {
        ctx.globalAlpha += 0.005;
      } else {
        ctx.globalAlpha = 1;
      }
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      ctx.beginPath();
      ctx.fillStyle = 'transparent';
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
      frame = requestAnimationFrame(animate);
    };

    if (stars && !started) {
      setStarted(true);
      frame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [stars]);

  return (
    <div className="canvas-hero">
      <canvas
        style={{ backgroundImage: 'linear-gradient(rgb(27, 27, 92) , rgb(57 57 194))' }}
        id="background-canvas"
        ref={background}
        className="canvas"
      />
      <canvas
        id="stars-canvas"
        ref={canvas}
        className="canvas"
      />
      <div style={{ height: '100%', boxShadow: 'inset 0px 0px 5px 0px #000000' }}>
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
              color: 'white',
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
