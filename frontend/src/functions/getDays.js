import fixDay from './fixDay'

function getDays() {
    let date = new Date()
    console.log(date)
    let time = date.getHours()
    let day = date.getDate()
    let yesterday = day - 1
    let tomorrow = day + 1
    let dayAfterTomorrow = tomorrow + 1
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    // logic to make single digit month or day have a zero in front for the API call
    day = fixDay(day)
    yesterday = fixDay(yesterday)
    tomorrow = fixDay(tomorrow)
    dayAfterTomorrow = fixDay(dayAfterTomorrow)
    month = fixDay(month)
    console.log(day, yesterday, tomorrow, dayAfterTomorrow, month)

    
    let todaysDate = `${year}-${month}-${day}`
    let yesterdaysDate = `${year}-${month}-${yesterday}`
    let tomorrowsDate = `${year}-${month}-${tomorrow}`
    let dayAfterTomorrowsDate = `${year}-${month}-${dayAfterTomorrow}`

    // logic to deal with first of month, last of month, february and shorter months
    let shorterMonths = [4, 6, 9, 11]
    let monthAfterShorterMonth = [5, 7, 10, 12]

    if (month === 2 && day === 27) {
        dayAfterTomorrowsDate = `${year}-03-01`
    } else if (month === '02' && day === 28) {
        tomorrowsDate = `${year}-03-01`
        dayAfterTomorrowsDate = `${year}-03-02`
    } else if (month === '03' && day === '01') {
        yesterdaysDate = `${year}-02-28`
    } else if (month === '01' && day === '01') {
        yesterdaysDate = `${year - 1}-12-31`
    } else if (month === 12 && day === 30) {
        dayAfterTomorrowsDate = `${year + 1}-01-01`
    } else if (month === 12 && day === 31) {
        tomorrowsDate = `${year + 1}-01-01`
        dayAfterTomorrowsDate = `${year + 1}-01-02`
    }else if (monthAfterShorterMonth.includes(Number(month)) && day === '01') {
        yesterdaysDate = `${year}-0${Number(month) - 1}-30`
    } else if (shorterMonths.includes(Number(month)) && day === 30) {
        tomorrowsDate = `${year}-0${Number(month) + 1}-01`
        dayAfterTomorrowsDate = `${year}-0${Number(month) + 1}-02`
    } else if (!monthAfterShorterMonth.includes(Number(month)) && day === '01') {
        yesterdaysDate = `${year}-0${Number(month) - 1}-30`
    } else if (!shorterMonths.includes(Number(month)) && day === 31) {
        tomorrowsDate = `${year}-0${Number(month) + 1}-01`
        dayAfterTomorrowsDate = `${year}-0${Number(month) + 1}-02`
    } else if (!shorterMonths.includes(Number(month)) && day === 30) {
        dayAfterTomorrowsDate = `${year}-0${Number(month) + 1}-01`
    }

    console.log(todaysDate, yesterdaysDate, tomorrowsDate, dayAfterTomorrowsDate, time)
    return { today: todaysDate, yesterday: yesterdaysDate, tomorrow: tomorrowsDate, dayAfterTomorrow: dayAfterTomorrowsDate, time: time }
}

export default getDays