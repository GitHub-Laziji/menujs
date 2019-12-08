export function hasClass(el, className) {
  if (!className) {
    return true;
  }
  if (!el || !el.className) {
    return false;
  }
  for (let cn of el.className.split(/\s+/)) {
    if (cn === className) {
      return true;
    }
  }
  return false;
}

