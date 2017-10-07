// import moment from 'moment';
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    // essentially, moment() creates a moment based on the current point in time. Our
    // mocked moment returns a fixed point in time with moment();
    return moment(timestamp);
};