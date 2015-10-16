module.exports.bootstrap = function(cb) {

  // start Agenda
  AgendaService.schedule();
  cb();

};
