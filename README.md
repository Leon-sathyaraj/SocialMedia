# SocialMedia

A social media web application where users can follow other users, post comments, like posts and upload profile and cover pictures. This application is built using Node.js, Express.js, MySQL and React.

Dependencies
Express.js - web application framework for Node.js
MySQL - relational database management system
Mongoose - MongoDB object modeling tool
Axios - Promise based HTTP client for the browser and Node.js
Bcrypt - password-hashing library
Helmet - security middleware for Express.js
Multer - middleware for handling multipart/form-data
Material-UI Icons - React icons library
Nodemon - tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
Moment - date/time parsing and manipulation library

Features
User authentication with JSON Web Token (JWT)
Follow and fetch comments from followed users
Upload and update profile and cover pictures
Delete own comments and other users' comments
Like other users' posts
Protected routes - only logged in users can access home page

Mysql dumb can be found in this directory:
Client\mysqldump

mySql Tables and keys(PK and FK)

![database](https://user-images.githubusercontent.com/115027854/224471893-5807364a-c7c8-4137-9614-075de2fb6112.png)


Users are able to update their cover and profile picture


![user can update profile and cover page](https://user-images.githubusercontent.com/115027854/224472766-7827a2da-699a-4cd4-a8cf-ea59ac0ece50.png)
![uploading profile and cover page via modal](https://user-images.githubusercontent.com/115027854/224473140-a2ad3176-548e-463b-9c78-a384b8b89b1f.png)


Users are able to follow other users.
Once a User followed another User, the posts of the followed user will be fetched in the follower's home page.


![follwed and fetch posts data with comments](https://user-images.githubusercontent.com/115027854/224472786-f82438ff-f236-4bed-b87d-44cf787a2cd6.png)


User that creates a post is able to;
1) Create a Post
2) Add a image to their Post (by clicking on the button in 3)


![post and comment](https://user-images.githubusercontent.com/115027854/224472828-072443bb-d346-4074-89d9-11af31ebc0af.png)

Post by Users are able to;

1) Delete their own post entirely
2) like their own post
3) post a comment(in 4) or view other user's post by clicking the icon in 3)
4) Able to delete their and others comments

Post that belongs to the user that post are able to delete comments. Other users will not have the function to do so


![deleting post and comment](https://user-images.githubusercontent.com/115027854/224472865-6d2cb161-5b2c-42d1-8ee7-8ec6bcc21333.png)


Features that I would like to add:

1) User' stories and
2) Socket.io for users to message each other and receive it in real time

Features that are broken:

1) Comments Database has issues.
2) The ability for User to update their own post's desc and change image
