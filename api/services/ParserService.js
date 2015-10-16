var cheerio = require('cheerio');
var request = require('request');

module.exports = {

  parseLanyrd: function (callback) {
    request('http://lanyrd.com/topics/javascript/', function (err, res, body) {
      if (err) return callback(err);

      var $ = cheerio.load(body);

      var events = $('.summary');
      async.each(events, function (event, cb) {
        Event.findOrCreate({
          name: event.children[0].data,
          url: 'http://lanyrd.com' + event.attribs.href
        }).exec(cb);
      }, function (err) {
        if (err) return callback(err);

        callback();
      });
    });
  }

};
