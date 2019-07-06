export default function sleep(ms = 0, needReject = false) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      needReject ? reject(ms) : resolve(ms);
    }, ms);
  });
}
