$("#trigger").click(function(){
  var HolidayDates = new Date();
  var Christmas = new Date(2021,12,25)
  var NewYear = new Date(2022,01,01)
  var Valentines = new Date(2022,02,14)
  var CalcDaysUntil = parseInt((Valentines-HolidayDates)/(24*3600*1000));
  
  $("#days-until").append("<li>" + CalcDaysUntil.toString()+" days until Christmas</li>");
  $("#days-until").append("<li>" + CalcDaysUntil.toString()+" days until New Year</li>");
  $("#days-until").append("<li>" + CalcDaysUntil.toString()+" days until Valentines Day</li>");
})

