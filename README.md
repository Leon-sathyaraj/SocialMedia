# SocialMedia<br>
<br>
A social media web application where users can follow other users, post comments, like posts and upload profile and cover pictures. This application is built using Node.js, Express.js, MySQL and React.<br>
<br>
Dependencies<br>
Express.js - web application framework for Node.js<br>
MySQL - relational database management system<br>
Mongoose - MongoDB object modeling tool<br>
Axios - Promise based HTTP client for the browser and Node.js<br>
Bcrypt - password-hashing library<br>
Helmet - security middleware for Express.js<br>
Multer - middleware for handling multipart/form-data<br>
Material-UI Icons - React icons library<br>
Nodemon - tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.<br>
Moment - date/time parsing and manipulation library<br>
<br>
Features<br>
User authentication with JSON Web Token (JWT)<br>
Follow and fetch comments from followed users<br>
Upload and update profile and cover pictures<br>
Delete own comments and other users' comments<br>
Like other users' posts<br>
Protected routes - only logged in users can access home page<br>
<br>
Mysql dumb can be found in this directory:<br>
Client\mysqldump<br>
<br>
mySql Tables and keys(PK and FK)<br>

![database](https://user-images.githubusercontent.com/115027854/224471893-5807364a-c7c8-4137-9614-075de2fb6112.png)<br>
<br>
<br>
Users are able to update their cover and profile picture<br>
<br>
<br>
![user can update profile and cover page](https://user-images.githubusercontent.com/115027854/224472766-7827a2da-699a-4cd4-a8cf-ea59ac0ece50.png)<br>
![uploading profile and cover page via modal](https://user-images.githubusercontent.com/115027854/224473140-a2ad3176-548e-463b-9c78-a384b8b89b1f.png)<br>
<br>
<br>
Users are able to follow other users.<br>
Once a User followed another User, the posts of the followed user will be fetched in the follower's home page.<br>
<br>
<br>
![follwed and fetch posts data with comments](https://user-images.githubusercontent.com/115027854/224472786-f82438ff-f236-4bed-b87d-44cf787a2cd6.png)<br>
<br>
<br>
User that creates a post is able to;<br>
1) Create a Post<br>
2) Add a image to their Post (by clicking on the button in 3)<br>
<br>
<br>
![post and comment](https://user-images.githubusercontent.com/115027854/224473665-1e95f7cf-9b72-4a52-a32a-5d30a44e66f6.png)<br>
<br>
Post by Users are able to;<br>
<br>
1) Delete their own post entirely<br>
2) like their own post<br>
3) post a comment(in 4) or view other user's post by clicking the icon in 3)<br>
4) Able to delete their and others comments<br>
<br>
Post that belongs to the user that post are able to delete comments. Other users will not have the function to do so<br>
<br>
<br>
![deleting post and comment](https://user-images.githubusercontent.com/115027854/224473656-268d143a-d95d-44e8-b7a4-82aa39e956fb.png)
<br>
<br>
<br>
Features that I would like to add:<br>
<br>
1) User' stories and<br>
2) Socket.io for users to message each other and receive it in real time<br>
<br>
Features that are broken:<br>
<br>
1) Comments Database has issues.<br>
2) The ability for User to update their own post's desc and change image<br>
