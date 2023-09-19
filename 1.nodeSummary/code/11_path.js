const path = require("path");

console.log(__dirname); //global에 있는 디렉토리
console.log(__filename); //global에 있는 파일
console.log(path.sep); //경로구분자
console.log(path.delimiter); //환경변수 구분자

//basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//dirname
console.log(path.dirname(__dirname));

//extension
console.log(path.extension(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

//normalize
console.log(path.normalize("./folder////////sub"));

//join
// console.log(__dirname + "/" + "image"); --> 권장 NO !
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image", "test"));
