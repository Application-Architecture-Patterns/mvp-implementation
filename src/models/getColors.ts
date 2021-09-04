export interface ColorSource {
  id: number;
  color: string;
}

type ColorResponse = Promise<{
  data: ColorSource[];
}>;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

export default function getColors(): ColorResponse {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          id: 0,
          color: getRandomColor()
        },
        {
          id: 1,
          color: getRandomColor()
        },
        {
          id: 2,
          color: getRandomColor()
        },
        {
          id: 3,
          color: getRandomColor()
        },
        {
          id: 4,
          color: getRandomColor()
        }
      ]
    });
  });
}
