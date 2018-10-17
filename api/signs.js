const signs = require('../signos')
const moment = require('moment');
const betweenDays = (birthday, starts, ends) => moment(birthday).isBetween(starts, ends, null, "[]")

function getStarSign(birthday) {
    birthday = birthday.split("-")
    const birthdayFormat = `${birthday[2]}-${birthday[1]}-${birthday[0]}`
    const result = signs.signos.filter(signo => {
        let begins = signo.starts.split('-')
        let finals = signo.ends.split("-")
        return betweenDays(birthdayFormat, `${birthday[2]}-${begins[1]}-${begins[0]}`, 
            `${birthday[2]}-${finals[1]}-${finals[0]}`)
    })
    if (!result.length) {
        return "Capricórnio"
    }
    console.log(result.length)
    return result[0].name
}

module.exports = {
    getStarSign
}