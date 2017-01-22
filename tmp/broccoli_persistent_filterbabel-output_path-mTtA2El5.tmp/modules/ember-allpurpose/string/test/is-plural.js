

export default isPlural;
import charAt from '../char-at';
function isPlural(name) {
  var lastChar = charAt(name, name.length - 1);
  return lastChar === 's';
}