export default function calCoordi(width, height, number, i = 1) {
  const fullrad = Math.PI * 2;
  const onerad = fullrad / number;
  const inRad = onerad * i;

  const leftbottomW = 0;
  const leftbottomH = 0;

  const lefttopW = -Math.sin(inRad) * height;
  const lefttopH = Math.cos(inRad) * height;

  const rightbottomW = Math.cos(inRad) * width;
  const rightbottomH = Math.sin(inRad) * width;

  const righttopH = lefttopH + rightbottomH;
  const righttopW = lefttopW + rightbottomW;

  const clipCord = {
    leftTop: [lefttopW, lefttopH],
    rightTop: [righttopW, righttopH],
    leftBottom: [leftbottomW, leftbottomH],
    rightBottom: [rightbottomW, rightbottomH],
  };
  return clipCord;
}
