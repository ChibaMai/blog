export const adjust = () => {
  let bodyWidth = document.getElementsByTagName("body")[0].offsetWidth;

  return { bodyWidth }
}


export const ripple = () => {
  new Ripple({
    // 水波纹透明度
    opacity: 0.6,
    // 水波纹扩散速度
    speed: "100ms",
    // 水波纹颜色
    bgColor: "rgba(0,0,0,.3)",
    // 是否显示手型指针
    cursor: true
  });
}
