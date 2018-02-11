from flask import Flask, render_template
import requests
import json

app = Flask(__name__, template_folder='/orders')

@app.route('/')
def homepage():
  params = {
    'api_key': '{API_KEY}',
  }
  r = requests.get(
      'https://http://www.mocky.io/v2/5a7db7113100005b00cd0a05',
      params=params)
  return render_template('orders.html', orders=json.loads(r.text)['orders'])

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)