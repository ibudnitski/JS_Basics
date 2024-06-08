let schedule = {};

/*let isEmpty = (schedule) => {
    return Object.keys(schedule).length === 0;
};*/

let isEmpty = (schedule) => {
    for (const scheduleKey in schedule) {
        if (schedule.hasOwnProperty(scheduleKey)) {
            return false;
        }
    }
    return true;
}

console.log(isEmpty(schedule));

schedule.isReady = true;

console.log(isEmpty(schedule));