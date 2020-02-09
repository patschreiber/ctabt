const request = require('request');

module.exports = {

  /*
   * This method returns a promise
   * which gets resolved or rejected based
   * on the result from the API
   */
  fetch: function (url) {

    let options = {
      baseUrl: '',
      url: url,
      method: 'GET',
      qs: {
        key: process.env.API_KEY, //TODO: Don't let this go to github
        json: true
      },
    };

    return new Promise((resolve, reject) => {
      request(options, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  }
};
