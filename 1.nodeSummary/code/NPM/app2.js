/* 
제목 : 사진 폴더 정리 Script 생성
요구사항 
  1. 동영상(mp4), 이미지(png) 파일들이 함께 있는 폴더를
     각각 동영상과 이미지를 분리하여 관리
  2. 동영상 파일은 video 폴더에, png 파일은 img 폴더에 각각 이동하여 관리
*/

const path = require('path');
const fs = require('fs').promises;
const constants = require('fs').constants;

// node app2 test
const folder = process.argv[2]; // String[]로 반환
const wkdir = path.join(__dirname, folder); // 현재 경로안에 폴더 넣기
const videoFolder = path.join(wkdir, 'video'); //wkdir에 비디오 폴더 넣기
const imgFolder = path.join(wkdir, 'img'); //wkdir에 이미지 폴더 넣기

/* access가 나타내는 경우의 수는 3가지임
   1. 폴더가 존재하고 모든 권한이 있을 경우
   2. 폴더가 존재하고 권한이 없을 경우
   3. 폴더가 존재하지 않을 경우
*/
//F_OK : 파일 존재 여부
//W_OK : 쓰기 권한 여부
//R_OK : 읽기 권한 여부

//비디오 폴더가 존재하는가?

fs.access(wkdir, constants.F_OK || constants.W_OK || constants.R_OK)
  .then(() => {
    //폴더가 존재하고 모든 권한이 있을 경우
    console.log('이미 작업 폴더가 있지롱');
  })
  .catch((err) => {
    //파일이나 폴더가 없을 때의 에러 코드 : ENOENT
    if (err.code === 'ENOENT') {
      console.log('작업 폴더가 없으니 만들겠다');
      return fs.mkdir(wkdir);
    }

    // 폴더가 존재하고 권한이 없을 때
    return Promise.reject(err);
  });

fs.access(videoFolder, constants.F_OK || constants.W_OK || constants.R_OK)
  .then(() => {
    //폴더가 존재하고 모든 권한이 있을 경우
    console.log('이미 비디오 폴더가 있지롱');
  })
  .catch((err) => {
    //파일이나 폴더가 없을 때의 에러 코드 : ENOENT
    if (err.code === 'ENOENT') {
      console.log('비디오 폴더가 없으니 만들겠다');
      return fs.mkdir(videoFolder);
    }

    // 폴더가 존재하고 권한이 없을 때
    return Promise.reject(err);
  });

fs.access(imgFolder, constants.F_OK || constants.W_OK || constants.R_OK)
  .then(() => {
    console.log('이미 이미지 폴더가 있어여');
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      console.log('이미지 폴더가 없으니 만들겠다');
      return fs.mkdir(imgFolder);
    }
    return Promise.reject(err);
  });

//현재 파일의 모든 파일을 읽기
fs.readdir(__dirname)
  .then((files) => {
    fileCheck(files);
  })
  .catch((err) => {
    console.error(err);
  });

const fileCheck = (files) => {
  files.forEach((file) => {
    if (isVideoFile(file)) move('video', file);
    else if (isImgFile(file)) move('img', file);
  });
};

const isVideoFile = (file) => {
  //확장자가 mp4이면 true 반환
  if (path.extname(file) === '.mp4') return true;
};
const isImgFile = (file) => {
  //확장자가 png or jpg이면 true 반환
  if (path.extname(file) === '.png' || path.extname(file) === '.jpg') return true;
};

const move = (folder, file) => {
  // oldPath -> newPath 으로 이동
  return fs.rename(`./${file}`, `${wkdir}/${folder}/${file}`).catch((err) => {
    console.error(err);
  });
};
