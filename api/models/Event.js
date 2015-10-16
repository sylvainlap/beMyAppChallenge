module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      url: true,
      required: true,
      unique: true
    }
  }

};
