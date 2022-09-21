function ColorEvents() {

  var today = new Date();
  var nextweek = new Date();
  var nextmonth = new Date();
  
  nextmonth.setDate(nextmonth.getDate() + 31);

  Logger.log(today + " " + nextweek);

  var calendars = CalendarApp.getAllOwnedCalendars();
  Logger.log("found number of calendars: " + calendars.length);

  for (var i=0; i<calendars.length; i++) {
    var calendar = calendars[i];
    var events = calendar.getEvents(today, nextmonth);
    for (var j=0; j<events.length; j++) {
      var e = events[j];
      var title = e.getTitle();
      if (title.match(/pozysk/i) != null) {
        e.setColor(CalendarApp.EventColor.RED);
      }
      if (title.match(/prezentacja/i) != null) {
        e.setColor(CalendarApp.EventColor.YELLOW);
      }
      if (title.match(/notar/i) != null) {
        e.setColor(CalendarApp.EventColor.GREEN);
      }
      if (title.match(/telefon/i) != null) {
        e.setColor(CalendarApp.EventColor.BLUE);
      }
    }
  }
}  
