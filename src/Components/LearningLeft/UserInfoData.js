import React from 'react';

const UserInfoData = ({students}) => {
    const date = new Date();
    var timeDiff = date.getHours() - 14;
    if (timeDiff <= -12) {
        timeDiff = timeDiff + 24;
    } else if (timeDiff <= 0) {
        timeDiff = timeDiff + 12;
    }
    
    return [
        {
            id: 0,
            language: students[0].language,
            week: students[0].week,
            name: students[0].name,
            university: students[0].university,
            localTime: students[0].localTime,
            curHours: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
            curMinutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
            curAMPM: date.getHours() > 12 ? "pm" : "am",
            schedule: students[0].schedule
        },
        {
            id: 1,
            language: students[1].language,
            week: students[1].week,
            name: students[1].name,
            university: students[1].university,
            localTime: students[1].localTime,
            curHours: timeDiff > 12 ? timeDiff - 12 : timeDiff,
            curMinutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
            curAMPM: timeDiff > 12 ? "pm" : "am",
            schedule: students[1].schedule
        }
    ];
};

export default UserInfoData;