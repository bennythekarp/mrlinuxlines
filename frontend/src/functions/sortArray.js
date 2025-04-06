function sortArray(array, criteria) {
    console.log(array, criteria)
    array.sort((a, b) => {
        if (a.date.start < b.date.start) return -1
        if (a.date.start > b.date.start) return 1
        if (a.date.start = b.date.start) return 0
  })
}
export default sortArray