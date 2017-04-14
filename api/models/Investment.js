/**
 * Investment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    category: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    aquired_value: {
      type: 'float'
    },

    aquired_date: {
      type: 'string'
    },

    recent_value: {
      type: 'float'
    },

    recent_date: {
      type: 'string'
    },

    owner: {
      model: 'customer',
      required: true
    }
  }
};

