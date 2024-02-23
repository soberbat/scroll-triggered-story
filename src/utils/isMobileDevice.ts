export default () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 1024;
  }
};
