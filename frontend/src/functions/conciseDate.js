function conciseDate(date) {
    let dateArray = date.split('-')
    let conciseDate = dateArray[1] < 10 ? `${dateArray[1].split('')[1]}-${dateArray[2]}` : `${dateArray[1]}-${dateArray[2]}`
    return conciseDate
}

export default conciseDate