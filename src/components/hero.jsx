/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
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

  function fixDpi(dpi) {
    const styleHeight = window.getComputedStyle(canvas.current).getPropertyValue('height').slice(0, -2);
    const styleWidth = window.getComputedStyle(canvas.current).getPropertyValue('width').slice(0, -2);
    canvas.current.setAttribute('height', styleHeight * dpi);
    canvas.current.setAttribute('width', styleWidth * dpi);
  }

  function draw() {
    const ctx = canvas.current.getContext('2d');
    const dpi = window.devicePixelRatio;
    fixDpi(dpi);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.rect(0, 0, background.current.width, background.current.height);
    ctx.fill();
    for (let n = 0; n < 100; n += 1) {
      const [innerCol, outerCol, glowCol] = colors[Math.floor(Math.random() * colors.length, 10)];
      const x = parseInt(Math.random() * canvas.current.width, 10);
      const y = parseInt(Math.random() * canvas.current.height, 10);
      const radius = Math.random() * 5;
      // glow
      ctx.beginPath();
      ctx.arc(x, y, radius * 4, 0, Math.PI * 2, false);
      ctx.fillStyle = glowCol;
      ctx.fill();
      ctx.closePath();
      // outer
      ctx.beginPath();
      ctx.arc(x, y, radius * 2, 0, Math.PI * 2, false);
      ctx.fillStyle = outerCol;
      ctx.fill();
      ctx.closePath();
      // inner
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.fillStyle = innerCol;
      ctx.fill();
      ctx.closePath();
    }
    // requestAnimationFrame(draw);
  }

  useEffect(() => {
    requestAnimationFrame(draw);
  }, []);

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
