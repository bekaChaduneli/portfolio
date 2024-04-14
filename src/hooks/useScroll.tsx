export const useScroll = (scrollPosition: number) => {
  const targetScroll = scrollPosition;
  console.log(targetScroll);

  window.scrollTo({
    top: targetScroll,
    behavior: "smooth",
  });
};
