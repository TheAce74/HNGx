const padStart = (item) => {
  return item.toString().padStart(2, "0");
};

const formatTimer = (timer) => {
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer - hours * 3600) / 60);
  const seconds = timer - hours * 3600 - minutes * 60;
  return `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
};

export { formatTimer };
