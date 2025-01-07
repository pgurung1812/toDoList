Hipp To-Do List

This application lets you create your to-do list tracker which you can manipulate by checking the tasks that are completed and the tasks not completed.
![HPoM](https://github.com/user-attachments/assets/f0eb578c-b707-4d13-a3a3-22517fc784e9)

Link to project: http://recruiters-love-seeing-live-demos.com/

How It's Made:

Express was used to create a server that responds to the request made by the client. Initially, Through the use of index.ejs file under the Views folder on the request of the homepage lists all the tasks and the associated delete button. it also displays the remaining number of tasks that need to be done. also, displaying a strike through to the tasks that were completed. Through the use of the main.js file under the public folder, upon clicking the delete button on the tasks, sends the delete request to the server which then listens for that request and deletes the task from the database using database properties associated with collections.

Tech used: HTML, CSS, JavaScript, Nodejs, Express, MongoDB

Optimizations

(optional)
I could add a way to prioritize some tasks over the other. I can also create a category for the different kinds of tasks and create a different list for the completed and incomplete tasks.

Lessons Learned:
It was a great learning experience getting our server to respond to the requests made by the client. It was very confusing in the beginning while learning to work on the front end and sending the data to the server.
It was a great aha moment when I realized when choosing Express to build the server, it handles all the parsing of the JSON objects sent by the front end automatically.

Examples:

Take a look at these couple of examples that I have in my portfolio:

Palettable: https://github.com/alecortega/palettable

Twitter Battle: https://github.com/alecortega/twitter-battle

Patch Panel: https://github.com/alecortega/patch-panel
