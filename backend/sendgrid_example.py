# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# Debug: Print the first few characters of the API key
api_key = os.environ.get('SENDGRID_API_KEY')
if not api_key:
    print("WARNING: No API key found in environment!")
else:
    print(f"API key found: {api_key[:7]}...")  # Only show beginning of key

message = Mail(
    from_email='afnan.amer.alt@gmail.com',
    to_emails='AfnanAmirAltalhi@gmail.com',
    subject='Sending with Twilio SendGrid is Fun',
    html_content='<strong>Helloooooooooo</strong>')
try:
    sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(str(e))