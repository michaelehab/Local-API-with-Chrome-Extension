# Local API Communication Extension
This Chrome extension features a text field and a button. When the button is clicked, it sends the entered URL to a local API via a background script. The API, leveraging the 'requests' package, fetches the JSON data from the provided URL and returns it to the extension. The received JSON data is then displayed within the extension's user interface.

## How to Use
### Setting up the Extension in Chrome
1. Navigate to the Chrome Extensions settings (`chrome://extensions/`).
2. Enable Developer Mode by toggling the switch in the top right corner.
3. Click on "Load Unpacked" and select the `extension` directory from your local files.

### Running the Local API Server
1. Open the `api` directory in your terminal.
2. Execute the command `python server.py` to start the server.
3. If port 8000 is unavailable, you may need to change the port number in both `server.py` and `background.js`.

## Screenshots
Here are some screenshots demonstrating the extension in action:
![extension interface](https://github.com/michaelehab/Local-API-with-Chrome-Extension/assets/29122581/45a4cc4e-0eae-4cdf-8c8f-40bec30b377a)
![extension working](https://github.com/michaelehab/Local-API-with-Chrome-Extension/assets/29122581/2ef61da2-cfff-44b8-bb26-bdede9588143)

