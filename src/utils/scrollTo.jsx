/* eslint-disable no-undef */
const scrollTo = (id) => {
  const element = document.getElementById(id);
  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export default scrollTo;
