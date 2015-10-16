module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    country: {
      type: 'string'
    },
    town: {
      type: 'string'
    },
    date: {
      type: 'string'
    }
  }

};
