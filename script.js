$("#trigger").click(function(){
  var holidayDates = new Date();
  var christmas = new Date(2021,12,25)
  var newYears = new Date(2022,01,01)
  var valentines = new Date(2022,02,14)
  var calcDaysUntil = parseInt ((date-holidayDates)/(24*3600*1000));

  $("#days-until").append("<li>" + calcDaysUntil.toString()+" days until Christmas</li>");
  $("#days-until").append("<li>" + calcDaysUntil.toString()+" days until New Year</li>");
  $("#days-until").append("<li>" + calcDaysUntil.toString()+" days until Valentines Day</li>");
})

