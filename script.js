

$("#trigger").click(function(){
const holidayDates = [
[new Date(2021,12,25), ('days until Christmas Day')], 
[new Date(2022,01,01), ('days until New Years Day')], 
[new Date(2021,02,14), ('days until Valentines Day')]];

var today = new Date(2021,06,02).getTime();


holidayDates.forEach(item => { 
    const calcDaysUntil = parseInt ((item[0] - new Date()) / (24 * 60 * 60 * 1000));
    const countdownResult = "<li>" + calcDaysUntil + " days-until " + item[1] + "</li>";
$("#days-until").append(countdownResult);
})
})

