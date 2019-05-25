# Dish

*A food sharing app to bring people together and reduce food wastage*


[![Dish Build Status](https://travis-ci.com/FAC-Sixteen/dish.svg?branch=master)](https://travis-ci.com/FAC-Sixteen/dish)
[![codecov](https://codecov.io/gh/FAC-Sixteen/dish/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC-Sixteen/dish)

## Installation Instructions

**Heroku app:** https://community-dish.herokuapp.com/

**The idea:** a community-based app where users can share their leftovers with people who need lunch

## Table of Contents

<details><summary>Expand</summary>
<p>

[TOC]

</p>
</details>



## Team and Roles
![](https://i.imgur.com/MLXFDaQ.jpg)


Scrum Master: [Sam](https://github.com/starsuit)
DevOps: [Bobby](https://github.com/bobbysebolao)
UX: [Anna](https://github.com/aniablaziak)
QA: [Kate](https://github.com/dubhcait)
[definitely-not-starsuit](https://github.com/definitely-not-starsuit) (honorary mention)

## Tech Stack
* JavaScript
* Sass
* Express
* Handlebars.js
* PostgreSQL
* Travis.CI
* Jest.js
* Codecov
* Heroku


## Goals

### Overall
* Handlebars templating
* Flexible server routing
* Authentication
* More complex database queries
* Design thinking

### Personal
* Anna - Sass
* Bobby - AWS S3
* Kate - Input sanitation
* Sam - GitHubbing best practice

### Product
- Responsive, mobile-first design
- Users should be able to browse, create and claim dishes
- Users should be able to create, browse and join communities

### Stretch
- Authentication 
- Toggle dyslexic-friendly font
- Dark mode
- Splash screen
- Admin role
- Calculate estimated number of servings


## Planning & Organisation

![](https://i.imgur.com/94AxIHP.jpg)

We all had a pretty solid idea of how we thought the app would flow, and worked together to brainstorm ideas. We went through a couple of app names before deciding on dish!

![](https://i.imgur.com/7rNNFHM.jpg)

We whiteboarded out our initial database schema, but it quickly became a mess of arrows. We ended up using [DBDiagrams.io](https://dbdiagram.io/home) to sort it all out. We initally thought we'd have to make a new 'dish' table for each user when they created a dish, but decided instead on a 'transactions' table, which would hold all the dish adds, dish claims and community joins.

![](https://i.imgur.com/Wm2jhc9.png)

We also whiteboarded how our frontend would communicate with our server, and our server with our database.

![](https://i.imgur.com/FX3zlEB.jpg)

We decided on a design-system very early-on, and found a nice font we could use for our 'logo'. 

![](https://i.imgur.com/ESvDlZ0.png)

![](https://i.imgur.com/ZBmvmCi.png)

**Figma Prototype:** https://www.figma.com/file/BxkdIuIUrIOIKb4l1Gw24BJN/Dish?node-id=0%3A1


### User Journeys

**"As a user, I want to list my leftovers so that I don't waste food"**

<details><summary>User stories</summary>
<p>


-  "I want to see a menu with the option to post a dish"
-  "I want to see a form"
  -  "I want to upload a picture of my dish"
  -  "I want to name my dish"
  -  "I want to add dietary labels"
  -  "I want to write a one-line teaser"
 -   "I want to add handover details (location, time)"
  -  "I want to choose which community -  I'm posting to"
  -  "I want to add more info about my dish"
  -  "I want to submit all of the above with one click"
 -   "When I've finished & submitted, I want to see a confirmation message"
 -   "I want to view the dish I've just added in my community listing"
  </p>
</details>

---

**"As a user, I want to join a community so that I can meet/cook/eat with other people"**<details><summary>User stories</summary>
  -  "I want to see a menu with the option to browse communities"
  -  "I want to see a page listing available communities"
  -  "I want to click on a community to see more information on it" 
  -  "I want to click a button to request to join a community" 
</details>

---

**"As a user, I want to claim food so that I can eat it"**<details><summary>User stories</summary>
 -   "I want to see a menu with the option to browse dishes"
-   "I want to see a page listing the dishes available in all my communities"
-   "I want to be able to claim a dish with one click"
</details>

---
**"As a user/admin, I want to create a community so I can share food with friends and meet new people"**<details><summary>User stories</summary>
 -   "I want to see a menu with the option to create a new community"
 -   "I want to see a form"
 -   "I want to upload a picture that describes my community"
 -   "I want to give my community a goal"
  -  "I want to add a description of my community"
 -   "I want to select a London Borough for my community"
  -  "I want to click a button to submit this info"
  -  "I want to see a confirmation that my community has been created"
 -   "I want to see my community in the community listings page"
</details>

---

## User Testing

### Overall themes
* Easy navigation
* Confirmation pages
* Having to re-login after registration
* Info on communities
* Labelling and naming is not clear enough (dibs, collection, cooked)
* Too many clicks
* Too many scrolls
* Suggestion of a tinder-style swipe feature
* Drop down option of where you want to post the dish - i.e which community
* Create a dish page - unclear heading
* Grouping the logout link and profile pic as all 'logout' - need separate link for profile?

### 🍳 Insights from people who cook

**How do you like to receive feedback when you cook for others?**

*An honest but hopefully not too harsh text review I guess. More than just points/stars or its a bit pointless as feedback.*

*Verbally but also feedback on cooking is hard as I get very emotionally invested and then criticism is difficult*

*I don't, just eat it.*

###  🍛 Insights from people who eat

**What would you consider a fair portion size? (e.g. two cups of rice, a standard takeaway container)**

*"It's hard to tell, depends on the type of food... picture would help, it's easy to tell by seeing a container as well."*

*"If it fills up three-quarters of the plate, it's good!"*

**When you're choosing what to eat, what do you prioritise? ( e.g. portion size, cost, healthiness...)**

*Portion! When I choose what to eat I always think about whether it’s nice and filling.*


## GitHub Setup & Planning

We began by raising issues for each of our four user journeys. We then added issues for the user stories and put them as checkboxes inside the core user journey issues. This was really great as we could check off each of these once the task was complete.

![](https://i.imgur.com/NrCMxUt.png)

Inside each user story, we then raised the development tasks that would need to be completed to make the user story happen:

![](https://i.imgur.com/HhdoMpd.png)

We put all of this into a project so we could keep track of what was in-progress and what was coming up next: 

![](https://i.imgur.com/p5H0wTk.png)



## Build Sprint Week 1
                      START
                        |
                        |
          1: Mapping User Journeys and Stories
                        |
                        |
          2: Technical Spike Research
                        |
                        |
          3: Raising GitHub issues and project planning
                        |
                        |
          4: Deployment to Heroku 
                        |
                        |
          5: Create file structure
                        |
                        |
          6: Write static routes in controllers
                        |
                        |
          7: Write hbs partials
                        |
                        |
          8: Route testing and writing db queries
                        |
                        |
          9: Start linking db query responses to hbs templates
                        |
                        |
                       END

## Build Sprint Week 2
                      START
                        |
                        |
          1: Technical Spike Research
                        |
                        |
          2: Style important pages (SASS)
                        |
                        |
          3: Add 'Claim a Dish' functionality
                        |
                        |
          4: Add login/regist/authentication functionality
                        |
                        |
          5: Write additional db query to get user data
                        |
                        |          
          6: Add passing code coverage
                        |
                        |
          7: User testing and sythesising results
                        |
                        |
                       END
          
          
## Technical Spike Research

<details><summary>Postgresql vs MongoDB</summary>
<p>


Main benefits of using MongoDB is it's flexibility as it doesn't have a schema, It uses nested json objects to order

Main benefits of Postgres is the rigity of the tables. it allows checks and error handling can be easier. There are more constraints. 

For this project, it would be morebeneficial to set up a rigid struct initialy rather than having a dynamic structure that could become error prone and difficult to structure. 


https://www.sisense.com/blog/postgres-vs-mongodb-for-storing-json-data/

|PostgreSQL | MongoDB | 
| -------- | -------- | 
| ACID Transactions    | ACID Transactions   | 
| Table     | Collection   | 
| Row   | Document  | 
| Column   | Field  | 
| Secondary Index  | Secondary Index    | 
| JOINs    |Embedded documents, $lookup & $graphLookup | 
| GROUP_BY	    |Aggregation Pipeline    | 
![](https://i.imgur.com/AFgt4LD.jpg)

</p>
</details>


<details><summary>Using Amazon S3 Cloud storage to host images</summary>
<p>


  - **Why** - Heroku does not allow you to save user-uploaded images. When the server goes to sleep, any user-uploaded images get deleted. AWS S3, or similar storage services, are important when architecting applications for scale and are a perfect complement to Heroku’s [ephemeral filesystem](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem).
  ![](https://i.imgur.com/WyHm8qn.png)
  - **How** - [Guide to Direct to S3 File Uploads in Node.js](https://devcenter.heroku.com/articles/s3-upload-node#initial-setup)
`

</p>
</details>
<details><summary>SASS</summary>
<p>

  - Learn SASS in 20 Minutes https://www.youtube.com/watch?v=Zz6eOVaaelI&t=711s 
 - Sass Basics https://sass-lang.com/guide
 - Learning by doing
`

</p>
</details>

### Today I Learned
- What a Procfile does
- Markdown tickboxes can be checked from a Github Projects issue
- You can make Github issues in projects
- Figma!
- Combinations of req.params (``'/:item-:type'`` as an endpoint) to handle multiple routes at once
-  How to pass objects into Handlebars templates and access different levels ("../"), iterating through a list, comparator helper functions
- How promises work???
- Boolean in SQL & checkboxes in forms - you can set defaults in your SQL build script

## Testing strategy 

Testing frameworks
- Jest 
- Supertest

Initially we tested the server routes using status codes. For the home route we tested for `<h1>dish</h1>` as we had no content at that point. We had unit testing on our helper functions as they were pure functions. 

Async testing in Jest was difficult; when introducing the database it changed our routes from rendering static pages to include async data. This broke all our route tests. After a lot of struggle we changed the route tests to include async build script before each test, and an "afterAll" script which would close the database connection before finishing the test run. We repeated this technique for our database tests. 

We set up code coverage with codecov and are now passing Travis CI.  

Further testing we would have added if we had more time:
- [ ]  404, 500,login and registration routes
- [ ] Logged in/ not logged in
- [ ] Jest mocks
- [ ] End to End testing



## Appendix

### Useful Tools
[CSS Gradients.io](https://cssgradient.io/) - make nice css gradients in seconds
[DBDiagrams.io](https://dbdiagram.io/home) - create db schema and build scripts
