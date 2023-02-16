const staticPaths = new Set([]);
function isStaticPath(method, url) {
  if (method.toUppercase() !== 'GET') return false;
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (url.searchParams.get('qwikcity.static') === "false") {
    return false;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  return false;
}
export { isStaticPath };