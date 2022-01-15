import express from 'express';

interface obj {
  filename: string;
  width: number;
  height: number;
}

export default (
  filename: string,
  width: number,
  height: number
): Promise<obj> => {
  //get image from images folder by filname asynchronously
  //resize image with sharp
  //create new folder for the given image "thumbs"
  //create resized image file and add to "thumbs"

  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        filename,
        width,
        height
      });
    }, 3000);
  });
};
