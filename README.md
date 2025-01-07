Hipp To Do List

This application lets you create your to do list tracker which you can manipulate by checking the tasks that are completed and the tasks not completed.

Link to project: http://recruiters-love-seeing-live-demos.com/

How It's Made:

Express was used to create a server that responds to the request made by the client. Initially, Through the use of index.ejs file under Views folder on the request of homepage lists out all the tasks and the associated delete button. it also displays the remaining number of tasks that needed to be done. also, displaying a strike through to the tasks that were completed. Through the use of main.js file under public folder, upon clicking the delete button on the tasks, sends the delete request to the server which then listens for that request and deletes the task from the database using database properties associated with collections.

Tech used: HTML, CSS, JavaScript, Nodejs, Express, mongoDB

Optimizations

(optional)
I could definitely add a way to prioritise some tasks over the other. I can also create a category for the different kind of tasks and create a different list for the completed and incomplete tasks.

Lessons Learned:
It was a great learning experience getting our server to respond to the requests made by the client. It was very confusing in the beginning while learning to work on the front end and sending the data to the server.
It was a great aha moment when I realized when choosing Express to build server, it handles all the parsing of the JSON objects sent by the front end automatically.

Examples:

Take a look at these couple examples that I have in my own portfolio:

Palettable: https://github.com/alecortega/palettable

Twitter Battle: https://github.com/alecortega/twitter-battle

Patch Panel: https://github.com/alecortega/patch-panel
