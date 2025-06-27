🔗 React URL Shortener

A simple React-based URL shortener application developed as part of the Affordmed campus evaluation. It allows users to create short URLs, specify custom shortcodes and validity, and view statistics. The app uses client-side routing and includes logging functionality to a remote evaluation server.

-> Features

-  Shorten any valid URL with a custom shortcode
-  Default validity of 30 minutes if not specified
-  Client-side routing using `react-router-dom`
-  Redirects to original URL via path like `/shortcode`
-  Statistics page showing:
  - Original URL
  - Shortened URL
  - Expiry time
  - Creation time
-  Logs all major events using Affordmed logging API
-  Form validation for inputs
-  Fully styled using **Material UI**

-> How It Works
1. User enters a long URL + optional shortcode and validity
2. App generates and stores the mapping in localStorage
3. Visiting /shortcode redirects to the original URL
4. Clicking on "View Stats" shows all mappings with timestamps

All important actions are logged using the Log() function

![image](https://github.com/user-attachments/assets/b3949d34-0048-454a-a7d2-544beb891f16)






