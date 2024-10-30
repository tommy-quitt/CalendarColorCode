# Google Calendar Event Color-Coder by Email Domain

This Google Apps Script automatically color-codes events in your Google Calendar based on the email domain of the guests attending the meetings. It helps you visually organize and differentiate events according to participants from specific organizations. 

## Features

- **Domain-Based Color Coding**: Assigns a specific color to events based on the email domain of the guests, allowing quick identification of meetings with participants from particular organizations.
- **Handles Guestless Events**: Uses a default color for events with no guests.
- **Distinct Color for No-Match Guests**: Applies a unique color to events with guests but no domain match, setting them apart from events without guests.
- **Automated Execution**: Set up a time-based trigger to run the script automatically at your chosen frequency (e.g., daily or weekly).

## How It Works

The script:
1. Scans events in your Google Calendar over the next 30 days.
2. For each event:
   - Checks the email domains of the guests.
   - Matches the domain against a predefined color map.
   - Applies the designated color based on the guest’s email domain.
   - Uses a distinct color if no domain matches, or the default color if there are no guests.
   
The result is a color-coded calendar that reflects the domains of the guests for each event.

## Color Map

Customize the color map to define colors based on domains. Here’s the default setup:
```javascript
const domainColorMap = {
    "microsoft.com": "11", // Pale red
    "google.com": "5", // Yellow
    "mycustomer.com": "3", // Purple
    "anotherdomain.com": "2", // Green
    "default": "1", // Blue (default color for no guests)
};
const noMatchColor = "8"; // Gray for events with guests but no domain match

domainColorMap: Maps email domains to Google Calendar color codes.
noMatchColor: Color code for events with guests but no matching domain.
Color Codes

### Google Calendar color codes:

1 = Blue (default)
2 = Green
3 = Purple
4 = Red
5 = Yellow
6 = Orange
7 = Turquoise
8 = Gray
9 = Bold Blue
10 = Bold Green
11 = Bold Red

## Setup Instructions
Add the Script to Your Google Account:

Open Google Drive, create a new Google Apps Script file, and paste the code.
Set Up Authorization:

Run the script manually once to grant authorization.
Configure Time-Based Trigger:

Go to Triggers in the Apps Script editor.
Set up a time-driven trigger to run colorCodeMeetingsByDomain at your preferred interval (e.g., daily).


## Contributing
Feel free to fork this repository and submit pull requests. Contributions to enhance functionality or improve the documentation are welcome!

## Support
For issues or questions, please open an issue in the repository.
