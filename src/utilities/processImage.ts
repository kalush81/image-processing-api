import sharp from 'sharp';

interface OutputInfo {
  format: string;
  width: number;
  height: number;
  channels: number;
  premultiplied: boolean;
  size: number;
}

export default (
  filename: string,
  width: number,
  height: number
): Promise<OutputInfo> => {
  return new Promise((res, rej) => {
    sharp('images/' + filename + '.jpg')
      .resize(width, height)
      .toFile(`images/thumbs/${filename}.webp`, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
  });
};
