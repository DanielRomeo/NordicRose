
# <span style='color:orange'>NordicRose</span>

#### This is an implementation of the <span style='color:orange'>NordicRose</span> design.

A working example of this application can be found on [NordicWebsite](https://nordic-rose-six.vercel.app/)

### About this application:
This applicatoin was developed in order to showcase design implementation in ReactJs and Django.
This application is a simple blog website that uses a small database to store user data and blog data. 
The backend is a standard RestAPI and uses Django functions in the Views file.

### How to run the application:

First clone the repository to your local machine:
`git clone https://github.com/DanielRomeo/NordicRose`

##### Install the backend packages:
In the `backend/` directory: run `pip install -r requirements.txt`
run `python3 manage.py runserver`
This will run your server on `http://localhost:8000`


Then the frontend: In the `frontend/` directory: run `yarn run install`
Then run the application: `yarn run dev`
This will run the frontend on `http://localhost:3000`
 
 ---
 No Database needs to be installed because this app uses SQLite, which is already incorporated in the server.

