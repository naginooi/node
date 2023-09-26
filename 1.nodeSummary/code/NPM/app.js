/* 
제목 : 사진 폴더 정리 Script 생성
요구사항 
  1. 동영상(mp4), 이미지(png) 파일들이 함께 있는 폴더를
     각각 동영상과 이미지를 분리하여 관리
  2. 동영상 파일은 video 폴더에, png 파일은 capture 폴더에 각각 이동하여 관리
*/

const path = require('path');
const fs = require('fs').promises;
const constants = require('fs').constants;

//현재 경로를 받아 하위 폴더로 video, img 폴더 생성
// const oldFolder = __dirname;
// const videoFolder = path.join(oldFolder, 'video'); //NPM/video
// const imgFolder = path.join(oldFolder, 'capture'); //NPM/capture

//실행하는 명령어의 매개변수를 받아 경로를 설정 후 하위 폴더로 video, img 폴더 생성
const folder = process.argv[1]; // String[]로 반환
const wkdir = path.join(__dirname, folder);
const videoFolder = path.join(wkdir, 'video');
const imgFolder = path.join(wkdir, 'capture');

// 폴더 존재하는지 확인
//F_OK : 파일 존재 여부
//W_OK : 쓰기 권한 여부
//R_OK : 읽기 권한 여부
fs.access(videoFolder, constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    // 폴더가 존재하고 모든 권한이 있을 경우
    return Promise.reject('이미 비디오 폴더 있음요');
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      //폴더가 존재하지 않을 경우
      console.log('비디오 폴더 없음요');
      return fs.mkdir(videoFolder);
    }
    return Promise.reject(err);
  });

fs.access(imgFolder, constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    // 폴더가 존재하고 모든 권한이 있을 경우
    return Promise.reject('이미 이미지 폴더 있음요');
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      //폴더가 존재하지 않을 경우
      console.log('이미지 폴더 없음요');
      return fs.mkdir(imgFolder);
    }
  });

//현재 경로의 모든 파일 읽음
fs.readdir(oldFolder)
  .then((files) => {
    fileCheck(files);
  })
  .catch((err) => {
    console.error(err);
  });

function fileCheck(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      //비디오 폴더로 파일을 이동시킴
      move('video', file);
    } else if (isImgFile(file)) {
      //이미지 폴더로 파일을 이동시킴
      move('capture', file);
    }
  });
}

const isVideoFile = function (file) {
  if (path.extname(file) === '.mp4') return true;
};
const isImgFile = function (file) {
  if (path.extname(file) === '.png') return true;
};

const move = function (folder, file) {
  return fs.rename(`./${file}`, `./${folder}/${file}`).catch((err) => {
    console.err(err);
  });
};
