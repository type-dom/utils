
export function getScroll(area?: Element): {x: number; y:number} {
  const body = {
    top:
      document.body.scrollTop > 0
        ? document.body.scrollTop
        : document.documentElement.scrollTop,
    left:
      document.body.scrollLeft > 0
        ? document.body.scrollLeft
        : document.documentElement.scrollLeft,
  };
  return {
    y: area && area.scrollTop >= 0 ? area.scrollTop : body.top,
    x: area && area.scrollLeft >= 0 ? area.scrollLeft : body.left,
  };
}
