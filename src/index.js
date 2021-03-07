module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let brackets = bracketsConfig.map((item) => item.join(''));
  for (let i = 0, len = brackets.length; i < len; i++) {
    while (str.includes(brackets[i])) {
        str = str.replace(brackets[i], '');
        i = -1;
    }
  }
  return str === '' ? true : false;
}
