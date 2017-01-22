

export default isCustomProtocol;
import getProtocol from "../get-protocol";
function isCustomProtocol(str) {
  var protocol = getProtocol(str);
  return !!protocol && protocol.indexOf('http') === -1;
}