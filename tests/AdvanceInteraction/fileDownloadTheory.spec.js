/*

In Playwright, file download handling means downloading a file from a website and verifying that the file has been downloaded successfully.

For example:
- Downloading a PDF.
- Downloading an Excel or CSV file.
- Downloading an image.
- Downloading a report.
Playwright provides the page.waitForEvent('download') method to handle downloads.

Save the downloaded file
By default, Playwright manages downloaded files in a temporary location. You can save the file to a specific path using saveAs().

*/