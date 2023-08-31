# found-foliage-project-server
# Project Name

<br>



## Description

 Capture a photo, upload it, and our AI-driven platform will unravel the plant's identity within seconds. Your portal to unlocking the secrets of the plant realm.


<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage to log in and sign up.
- **about** - As a user I want to be able to access the about page and check the developer team. 
- **sign up** - As a user I want to sign up on the web page so that I can upload a photo of the plant I want to identify.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account.
- **Logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **AddPlant** - As a user I want to add a photo to identify the plant.
- **Plant Details** - As a user I want to be able to see the details of the plant.
- **profile page/ garden** - As a user I want to see my profile and see all the plants I've uploaded and I want to be able name my garden, give it a description, change my garden background and change my profile pic.               
                
                - ** Optional **
- **result** - As a user I want to be able to search the plants plants.
- **garden category**- as a user I want to have the ability to divide my garden into categories e.g front-yard and assign especific plants to it.




<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
                                |
        |
| `GET`      | `/restaurants`                     | Renders `restaurant-list` view.                              |                                                          |
| `GET`      | `/restaurants/details/:id`         | Renders `restaurant-details` view for the particular restaurant. |                                                          |







## Models

User model

```javascript
{
  username: String,
  email: String,
  password: String,
 
}

```



Garden model

```javascript
{
  TBA
}

```

Plants model - Basic Info

```javascript
{
  name: String,
  email: String,
}



<br>

## API's
PLANTS API

<br>


## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
FirstName LastName - [`<github-username>`](https://github.com/person1-username) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person1-username)

FirstName LastName - [`<github-username>`](https://github.com/person2-username) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person2-username)























































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



