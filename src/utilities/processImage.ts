import express from 'express';

interface obj { 
  filename: string,
  width: number,
  height: number
}

export default (filename: string, width: number, height: number): Promise<obj> => { 

  //get image from images folder by filname asyncronously
  // resize image with sharp
  //create new folder for the given image
  //create resized image file 
  return new Promise((res, rej) => { 
    setTimeout(() => { 
      res({
        filename, 
        width,
        height
      })
    }, 3000)
  }) 
}