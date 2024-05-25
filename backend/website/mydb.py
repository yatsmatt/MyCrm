import mysql.connector
import os
from dotenv import load_dotenv
# creat the databse
database =mysql.connector.connect(
    host="localhost",
    user=os.getenv('USER'),
    passwd=os.getenv('PASSWORD'),
)

cursorObject=database.cursor()

cursorObject.execute("CREATE DATABASE ClientsCrm")

print("done!")