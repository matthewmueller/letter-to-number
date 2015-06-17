/**
 * Module Dependencies
 */

var alphabet = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25
};

/**
 * Export `lton`
 */

module.exports = lton;

/**
 * Letter to number
 *
 * @param {String} l
 * @return {Number}
 */

function lton(l) {
  // l[0]*26^n + l[1]*26^(n-1) + ... l[l.length - 1]*26^(0) + 26^(n-1) + ... + 26^1
  var n = l.length;
  var o = 0;

  for (var i = 0; i < n; i++) {
    o += alphabet[l[i]] * Math.pow(26, n - i - 1);
    if (i > 0) o += Math.pow(26, n - i);
  }

  return o;
}
