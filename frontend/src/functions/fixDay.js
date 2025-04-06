function fixDay(day) {
    day < 10 ? day = `${0}${day}` : day = day
    /* console.log(day) */
    return day
}

export default fixDay