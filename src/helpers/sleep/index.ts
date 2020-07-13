/**
 * sets timeout for the given amount of time
 * @param time
 */
export const sleep = (time: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
