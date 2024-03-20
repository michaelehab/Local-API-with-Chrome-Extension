from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api/fetch', methods=['POST'])
def fetch_data():
    # Get the text from the request data
    data = request.get_json()
    user_text = data.get('text')

    # Fetch JSON from the web using the requests package
    response = requests.get(user_text)
    if response.status_code == 200:
        # Return the fetched JSON data
        return jsonify(response.json())
    else:
        # Return an error message if the request was unsuccessful
        return jsonify({'error': 'Failed to fetch data from the web'}), response.status_code

if __name__ == '__main__':
    app.run(port=8000)
