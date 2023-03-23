
# Nest.js Authentication and Crud
A nestjs authetication and crud application which return jwt tokens upon successful login and signup.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Shresthutk/Nest-Backend.git
```

Go to the project directory

```bash
  cd Nest-Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nest start
```
### Authentication
Signup
```bash
localhost:3000/auth/signup
```
Login
```bash
localhost:3000/auth/login
```
### Blog
Get all blogs
```bash
Get -> localhost:3000/blogs
```
Post a blog
```bash
Post -> localhost:3000/blogs
```
Update a blog
```bash
Patch -> localhost:3000/blogs/<id>
```
Delete a blog
```bash
Delete -> localhost:3000/blogs/<id>
```

## Deployment

This project is deployed on https://nestbackend.onrender.com .
Replace localhost with this link to run the project directly on server instead of local machine.


<p align="center"> Made with 💻 by Utkarsh 🗿</p>