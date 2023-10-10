export const debounce = (fnc, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
};

// higher oder function it is calling the fnc function after some delay

// delay => 800ms

// 100   900  1200  2000  2200 2400  3200

// user type=>
