const fs = require("fs");

//fs에서는 3가지 방식으로 제공
//promise: rename(old, new)
//callback : rename(old, new, callback)

//synchoronous : renameSync(old, new)
try {
  fs.renameSync("./test.txt", "./test-new.txt");
  console.log("-- success");
} catch (error) {
  console.log("-- error");
}

//callback : rename(old, new, callback)
fs.rename("./test.txt", "./test-new.txt", (error) => {
  console.log(error);
});

//promise : rename(old, new)
fs.promises
  .rename("./test.txt", "./new-test.txt")
  .then(() => {
    console.log("--success");
  })
  .catch((error) => {
    console.log("--error");
  })
  .finally(() => {
    console.log("--terminate");
  });
