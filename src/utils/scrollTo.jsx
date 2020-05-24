/* eslint-disable no-undef */
const scrollTo = (id) => {
  const element = document.getElementById(id);
  const offset = 30;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export default scrollTo;
