function alphabetizeArray(array) {
    console.log(array)
    array.sort((a, b) => {
        if (a.lastname < b.lastname) return -1
        if (a.lastname > b.lastname) return 1
        if (a.lastname = b.lastname) return 0
  })
}
export default alphabetizeArray