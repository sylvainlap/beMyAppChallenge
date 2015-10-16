var Agenda = require('agenda');

module.exports = {

  schedule: function () {
    var agenda = new Agenda({ db: { address: 'localhost:27017/beMyApp-agenda' } });
    agenda.define('parseLanyrd', function (job, done) {
      ParserService.parseLanyrd(done);
    });
    agenda.every('day', 'parseLanyrd');
    agenda.start();
  }

};
