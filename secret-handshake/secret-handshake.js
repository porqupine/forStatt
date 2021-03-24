
//This solution relies on a pre-built codebook object
//where the keys are the binary integers to allow bitmasking
//There are a number of different ways to achieve the same result
//including converting the input to a binary string, or
//bitshifting the input to the right repeatedly and using a mask of 1

const codes = {
  1: "wink",
  2: "double blink",
  4: "close your eyes",
  8: "jump",
};
const reverse = 16;

export const commands = (code) => {
  let output = [];
  //Negative numbers are stored in 2's compliment
  // so this method wouldn't work without modification.
  //Additionally there are none in the test spec so I assume they're not required.
  //Shorting the logic on 0 helps us avoid some computation.
  if (code <= 0) return output;
  let keys = Object.keys(codes);
  //There are a few different ways to get this reversal, I chose to
  //reverse the list of keys. This is O(n) but n is tiny.
  //You can avoid this by using a for loop and setting the start/end points
  //based on reverse - [0 to keys.length) normally and (keys.length to 0] for reverse
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
