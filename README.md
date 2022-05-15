# Sitter 4 Hire

##ABOUT
This was the semester long project done as a collaboration between my Database class and the GUI class at SMU.
The project involved the formation of a five-person development team with two GUI class members and three database class members. 
The scope of the project was defined by a project team who set the stories and general vision of the project. 

The project in the repo is the product which I was a member of the backend (database) team for. The vast majority of the frontend component was done by Caleb Moore. 

Due to the increased amount of manpower needed to do the GUI side, there are some features which the backend has implemented which the GUI does not. 
These include the ability to rate and comment on jobs, to block parents and the ability to search based on ratings. 

##The project
The goal of the project was to create an application which made it easy for families to find and hire babysitters.

The requirements were as follows:
- Two separate account types: Parents and babysitters which should be able to register and login.
- Both account types should be able to post times when they need a babysitter / can babysit.
- The parent account type should be able to book a job when a babysitter is available.
- Both account types should be able to rate the other and comment on the other.
- The babysitter account type should be able to block the parent from booking jobs with them.
- An account of one type should be able to message another account type.
- Both account types should be able to search the above features based on a number of filters.

The above is a general outline of the project. For the list of stories and acceptance criteria, please see [here](usefulDocs/userStoriesAndAcceptanceCriteria.xlsx).

I am happy to say the backend team was able to have 100% story acceptance.

##My contributions
As a part of the backend team I did the following:
- Used Agile and Scrum methodologies to develop the project as a part of a team
- Created the database schema and deployed the database on Amazon Web Services' Relational Database Service (RDS)
- Created the routes to preform CRUD operations on 9 tables in the database using the Express framework and the Model View Controller (MVC) pattern
- Used Token based authentication to secure the routes

##How to use the application
1. The first step is to clone this repository from Github. This can be done by using the following command:

```git clone https://github.com/RayaanJIrani/team1-gui-db.git```
2. The next once you have installed this repository is to install all the dependencies. This can be done by using the following commands:

```cd backend```

```npm install```

```cd ..```

```cd frontend```

```npm install --force```

```cd ..```
3. Next, you will need to start up the database. Todo this, go to the usefulDocs folder and find the file named "DBGenerator.sql" and generate the database. Next go to the backend/knexfile.js and change my mysaql information to your database information.
4. After this, you should start up the site. This can be done by using the following command:

```docker-compose up```
5. After a few seconds you should be able to go to 'http://localhost:3000/' to acess the site.
6. Once you are done with the site, you can stop the site by using the following command:

```docker-compose down```

##More Information
For more information about this project please look at the usefulDocs folder.
It contains:
- All the stories and acceptance criteria
- The database schema
- Documentation for the backend API 
