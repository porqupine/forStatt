
//This solution relies on a pre-built codebook object
//where the keys are the binary integers to allow bitmasking
//There are a number of different ways to achieve the same result
//including converting the input to a binary string, or
//bitshifting the input to the right repeatedly and using the mask of 1
const codes = {
  1: "wink",
  2: "double blink",
  4: "close your eyes",
  8: "jump",
};
const reverse = 16;

export const commands = (code) => {
  let output = [];
  if (code <= 0) return output;
  let keys = Object.keys(codes);
  if (code & reverse) {
    keys = keys.reverse();
  }
  for (const key of keys) {
    if (code & key) {
      output.push(codes[key]);
    }
  }
  return output;
};
