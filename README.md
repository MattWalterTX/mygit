# myGit: the Hubbining

## Abstract
myGit: the Hubbening is an application designed to view cards from the newest set from Magic: the Gathering. On load the cards of all 5 colors will load in. They can be further sorted down by color selection, clicked to view the card and added to a collection. 

#### Goals and Objectives
- Use the technology you’ve been working with over the course of the module to demonstrate mastery of the following:
  - React, Router, Asynchronous JavaScript, End to end testing with Cypress
- Create personas and user stories to describe your target audience.

- Work within constraints to deliver a product for your niche audience, which helps solve a problem unique to them.

- Your applications must have the following core functionality:
  - Display the data from the API in a way that applies directly to your audience
  - Ability for users to store/manipulate the data displayed in the application, such as favoriting or adding to a list, searching, commenting, etc
  - Multiple views handled by Router
  - Be deployed using Heroku, Surge, or any other similar service

## Technologies
- [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
  - [![React](https://img.shields.io/badge/react-%23323330.svg?style=for-the-badge&logo=react&logoColor=%23F7DF1E)](https://reactjs.org/)
  - [![Router](https://img.shields.io/badge/router-%23323330.svg?style=for-the-badge&logo=react-router&logoColor=%CA4245)](https://reactrouter.com/en/main)
- [![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.css3.info/)
- [![Cyrpess](https://img.shields.io/badge/cypress-%1004E9F.svg?style=for-the-badge&logo=cypress&logoColor=%23F7DF1E)](https://www.cypress.io/)
- [![MUI](https://img.shields.io/badge/mui-007FFF.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

## Illustrations
![myGit-gif](https://user-images.githubusercontent.com/106847513/212799239-44104af2-600a-4a3e-a138-9347094c4c93.gif)

## Features
- Renders card from the Brothers War set of M:tG cards
- Cards can be sorted by colors
- Cards can be view in full and added to a collection
- Collection will display saved cards, which can be removed

## Possible Future Extensions
- Card Ratings
- Deck Building

#### Milestones
- I had a long and hard fight with my API data every step of the way through. This was the single most challenging individual project for me so far for this reason. I learned that how you chose the data structures to use for app creation can be the single largest blocker to success.
- I was able to properly implement Prop Types alone, which were not as terrifying ass i assumed.
- I implemented data rendering on a table, which was a small thing that I somehow missed in my ealrier mods.

#### Challenges 
- Data - every aspect of it was difficult and infuriating. But I feel that I did learn a lot about how to interpret and use more complex data throughout the sprint.
- Cypress - Specifically stubbing fixture data. Due to a complicated Promise.all i was nearly unable to get the data to render in Cypress without reverting to my API call.
- Data matching - in retrospect I chose an entire too large/ complex an API for the scope fo this project, but was ultimately more successful than I thought I would be heading into this weekend.

## Set Up

### Deployed at 

### Local Installation
1. Clone the repo
   ```sh
   git@github.com:MattWalterTX/myGit.git
   ```
2. Enter the directory and install NPM packages
   ```sh
   npm install
   npm start
   ``` 
3. Enter the following url in your browser: http://localhost:3000/
4. Explore the website

## Sources
  - [Deckstats](https://deckstats.net/?lng=en)
  - [the Gatherer](https://gatherer.wizards.com/Pages/Default.aspx)
  - [Aetherhub](https://aetherhub.com/)

## Contributors
  - [Matt Walter](https://github.com/MattWalterTX)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)


