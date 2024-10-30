function colorCodeMeetingsByDomain() {
  Logger.log("Starting color coding process...");

  // Color map based on email domain
  const domainColorMap = {
    "microsoft.com": "11", // Pale red
    "apple.com": "5", // Yellow
    "nvidia.com": "8", // Gray
    "wechange.company": "4",
    "default": "10", // Blue (default color for no guests)
  };
  
  const noMatchColor = "2"; //  color for meetings with guests but no domain match

  Logger.log("Domain-Color map initialized with codes: " + JSON.stringify(domainColorMap));

  // Define the time range to scan (e.g., next 30 days)
  const calendar = CalendarApp.getDefaultCalendar();
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + 30);

  // Get all events in the time range
  const events = calendar.getEvents(now, endDate);
  Logger.log("Number of events found until: " + endDate + ": " + events.length);

  events.forEach((event, index) => {
    const eventTitle = event.getTitle();
    const guests = event.getGuestList();
    let eventColor = domainColorMap["default"]; // Default color for events with no guests

    Logger.log("Processing event #" + (index + 1) + ": " + eventTitle);
    Logger.log("Number of guests for event '" + eventTitle + "': " + guests.length);

    // Process only if there are guests
    if (guests.length > 0) {
      let domainMatchFound = false;

      for (let guest of guests) {
        const guestEmail = guest.getEmail();
        const domain = guestEmail.split("@")[1];
        Logger.log("Checking guest email: " + guestEmail + " with domain: " + domain);

        // Set color if domain matches
        if (domainColorMap[domain]) {
          eventColor = domainColorMap[domain];
          domainMatchFound = true;
          Logger.log("Match found! Setting color for domain: " + domain + " with color code: " + eventColor);
          break; // Stop if a domain match is found
        }
      }

      // Set to noMatchColor if there are guests but no matching domain
      if (!domainMatchFound) {
        eventColor = noMatchColor;
        Logger.log("No matching domain found; setting color to noMatchColor for event with guests.");
      }

      // Apply the selected color to the event
      event.setColor(eventColor);
      Logger.log("Color set to: " + eventColor + " for event titled '" + eventTitle + "'");
      
    } else {
      Logger.log("No guests found for event titled '" + eventTitle + "'; applying default color.");
      //event.setColor(eventColor); // Apply default color for events with no guests
    }
  });

  Logger.log("Color coding process completed.");
}
