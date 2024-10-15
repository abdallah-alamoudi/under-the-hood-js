const promisify = (fun) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fun(...args, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  };
};
module.export = promisify;
