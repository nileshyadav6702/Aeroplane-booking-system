function dateTimeHelper(timestring1, timestring2){
    let time1= new Date(timestring1)
    let time2= new Date(timestring2)

    return time1.getTime()-time2.getTime()
}

module.exports = {dateTimeHelper}