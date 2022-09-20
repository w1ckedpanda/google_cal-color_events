function ColorEvents() {

    var today = new Date();
    var nextweek = new Date();
    nextweek.setDate(nextweek.getDate() + 7);
    Logger.log(today + " " + nextweek);
  
    var calendars = CalendarApp.getAllOwnedCalendars();
    Logger.log("found number of calendars: " + calendars.length);
  
    for (var i=0; i<calendars.length; i++) {
      var calendar = calendars[i];
      var events = calendar.getEvents(today, nextweek);
      for (var j=0; j<events.length; j++) {
        var e = events[j];
        var title = e.getTitle();
        if (title.slice(0,3) == "SPO" || title.slice(0,3) == "POZ" || title.slice(0,3) == "spo" || title.slice(0,3) == "poz") {
          e.setColor(CalendarApp.EventColor.RED);
        }
        if (title.slice(0,3) == "PRE" || title.slice(0,3) == "pre") {
          e.setColor(CalendarApp.EventColor.YELLOW);
        }
        if (title.slice(0,3) == "AKT" || title.slice(0,3) == "akt") {
          e.setColor(CalendarApp.EventColor.GREEN);
        }
        if (title.slice(0,3) == "ROZ" || title.slice(0,3) == "TEL" || title.slice(0,3) == "roz" || title.slice(0,3) == "tel") {
          e.setColor(CalendarApp.EventColor.BLUE);
        }
      }
    }
  }  