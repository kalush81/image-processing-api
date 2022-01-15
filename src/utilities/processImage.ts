import express from 'express';

export default (filename: any, width: any, height:any) => { 
  return {
    filename, 
    width,
    height
  }
}