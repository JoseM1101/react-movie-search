function debounce(fn, wait = 1000) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(this, ...args), wait);
  };
}

export default debounce;
