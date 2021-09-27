var moment = require('moment');

module.exports = {
    format_date: () => {
        // Format date as MM/DD/YYYY
        return moment().format('LL');
      }
};