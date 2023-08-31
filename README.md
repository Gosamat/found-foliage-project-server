# 🌱 Found Foliage 

# About The Project
With our user-friendly website, identifying plants has never been easier. Just upload a photo of a plant, and our "smart" AI will quickly tell you its name and characteristics. 

Create an account to unlock the Garden Companion feature. Each plant you identify gets saved in your personal garden album. You can even add notes, like watering schedules or care tips, to keep your plants healthy and thriving.

Explore the world of plants with "PlantSnap Garden Companion" – your go-to tool for all things green!

In short:
* Upload a plant and it'll tell you the name and some basic info. 🌼
* You can create an account to make your own garden 🌼
* You can add notes to each plant. 🌼

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#Server-Routes">Server Routes</a></li>
        <li><a href="#Models">Models</a></li>
        <li><a href="#API">Api</a></li>
        <li><a href="#Packages">Packages</a></li>
        <li><a href="#Other-Info">Other Info</a></li>
      </ul>
    </li> 
  <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<be>

# Built With


# User Stories

**404 Page Display** - In the event that I navigate to a non-existent page, I desire the presence of a well-crafted 404 page. This will help me understand that the issue lies with my actions.

**500 Error Page** - When technical glitches occur due to the super team's work, I wish to encounter an aesthetically pleasing error page. This will help me recognize that the responsibility does not rest with my actions.

**Homepage Access** - My objective is to easily reach the homepage for the purpose of logging in and signing up.

**About Page Access** - I seek the capability to effortlessly access the About page to review information about the developer team.

**Sign Up Functionality** - I have a desire to register on the website, facilitating the upload of photos of plants I intend to identify.

**Login Process** - I aim to execute a seamless login process on the website to regain access to my account.

**Logout Feature** - I aspire to possess the ability to log out from the website, ensuring the security of my account from unauthorized access.

**Plant Addition** - I am inclined to upload a photo of a plant for identification purposes.

**Plant Details Viewing** - It is my wish to have the capacity to view comprehensive information about identified plants.

**Profile Page / Your Garden** - I hold an interest in viewing my profile, encompassing all uploaded plants. Moreover, I desire the option to name my garden, provide a description for it, modify the garden's background, and alter my profile image.   
                - ** Optional **
**Search Functionality** - I wish to possess the ability to conduct searches for specific plants.

**Garden Categorization** - I seek the functionality to categorize my garden into sections such as "front-yard," enabling the assignment of particular plants to these defined categories.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password, username  }                                    |
| `GET`      | `/private/edit/garden`             | Private route. Renders `edit-garden` form view.             |                                                          |
| `PUT`      | `/private/edit/garden`             | Private route. Sends garden info to server and updates user in DB. | { garden title, userProfilePic } |
| `GET`      | `/plants`                          |  Renders `plant-list` view.            |                                                            |
| `GET`      | `/plants/details/:id`              | Renders `plant-details` view for the particular restaurant. |    
| `GET`      | `/plant/add`                       | Renders `addPlant` view.                              |                                                          |
| `GET`      | `/plants/details/:id`              | Renders `plant-details` view for the particular restaurant. |
| `GET`      | `/about`                           | Renders `about` view.                              |  |
                               
## Models

* User model
* Garden model
* Plants model 
<br>

## API's
PLANTS API
PlantNet API

<br>


## Packages



<br>


## Other Info:
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



