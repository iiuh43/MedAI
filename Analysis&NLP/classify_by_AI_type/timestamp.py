
from datetime import datetime

def insert_timestamp(identifier):
    now = datetime.now()
    print(f"start [{identifier}]: {now.strftime('%Y-%m-%d %H:%M:%S')}")