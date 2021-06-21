# Light Up 

![Various Devices](https://github.com/TimMorrisDev/light-up/blob/master/static/wire/wire.JPG)

### [Live Site](https://light-up-pride.herokuapp.com/)

### [GitHub](https://github.com/TimMorrisDev/light-up)

Light Up is Team 5's entry for the [Code Institute](https://codeinstitute.net/) Pride hackathon. The idea is to connect rural members of the LGBTQ community.

---
## Table of Contents

**<details><summary>Project overview</summary>**
* [**_Project overview_**](#project-overview)
* [**_User Stories_**](#user-stories)
</details>

**<details><summary>UX</summary>**
* [_Color Scheme_](#color-scheme)
* [_Typography_](#typography)
* [_Media_](#Media)
* [_Wireframes_](#wireframes)
</details>

**<details><summary>Features</summary>**
* [**_Existing Features_**](#existing-features)
* [**_Features Left to Implement_**](#features-left-to-implement)
</details>

**<details><summary>Technologies Used</summary>**
* [**_Libraries_**](#libraries)
* [**_Version Control_**](#version-control)
</details>

**<details><summary>Testing</summary>**
* [**_Testing_**](#testing)
* [**_Lighthouse_**](#lighthouse)
</details>

**<details><summary>Deployment</summary>**
* [**Deployment**](#deployment)
</details>

**<details><summary>Credits</summary>**
* [**_Content_**](#content)
* [**_Acknowledgements_**](#acknowledgements)
</details>

---

# Project Overview

"Light Up" came to fruition as the result of a Hackathon being undertaken by current students and Alumni at Code Institute in June 2021. The brief for our Hackathon is to build something that promotes and celebrates the LGBTQ+ community. We were therefore tasked with finding solutions that amplify LGBTQ+ voices, connect the community, educate others and support the needs of LGBT+ people. We designed and created an application which would allow members of the LGBTQ+ community in rural Ireland (with a passion for Coding and Tech), to connect seamlessly with other users who share a similar interest. In order to fulfil the brief and Hackacthon spec, our Application allows users to find upcoming events and either attend a physical event or create/join a virtual event in the West of Ireland. The aim is to therefore allow such users feel a sense of inclusivity and belonging without having to travel to Dublin which is typically the hub of gay life in Ireland. Networking and making connections is a huge part of allowing people to come together. They will have a safe zone in which to make new acquaintances, attend virtual workshops, or attend in-person conferences, all with the underlying theme of Community. We are extremely proud to deliver and submit this project as part of the Pride Hackathon at Code Institute. #ProudCoders

---

### User Stories

- User Story A: I want to connect with other members of the rural LGBTQ community <br />
- User Story B: I want to know about upcoming events near me <br />


## Opportunities arising from user stories:

<div align="center">
 
|Opportunities | Importance | Viability / Feasibility
|-----|:------:|:-----:|
|**Simple Clean UI** | 5 | 5 |
|**Clearly indicate purpose** | 5 | 5 |

</div>

---


#### Design

A standard layout that is fully responsive on mobile devices and larger screens.

#### Color Scheme

![Color Palette](https://github.com/TimMorrisDev/light-up/blob/master/static/wire/colors.JPG)


#### Typography

We choose [Quicksand](https://fonts.google.com/specimen/Quicksand?query=quicks) because it suits colorful bright headers <br />
and [Montserrat](https://fonts.google.com/specimen/Montserrat?query=montser) for the body because it is very easy to read.

#### Media

Icons, map pins and favicon created by the team using [Affinity Designer](https://affinity.serif.com/en-us/)

#### Wireframes

![Various Devices](https://github.com/TimMorrisDev/light-up/blob/master/static/wire/balsamiq.jpg)



##### back to [top](#table-of-contents)

---

# Features

## Existing Features

#### Navbar
-  A color selector allows users to dicatate the color scheme

#### Body
- On the index page a map displays user and event locations

#### Footer

The footer features: 
- Footer features creator information, privacy policy, social links and contact information

## Features Left To Implement

#### Event Registration

Currently events are added manually by site admin but in the future events will be input by users.

##### back to [top](#table-of-contents)

# Technologies Used

#### 1. Languages

[HTML 5](https://en.wikipedia.org/wiki/HTML5)

[CSS 3](https://en.wikipedia.org/wiki/CSS)

[Java Script](https://en.wikipedia.org/wiki/JavaScript)

[Python](https://www.python.org/)

[MongoDB](https://www.mongodb.com/)

#### 2.Integration

[Bootstrap](https://getbootstrap.com/)

[Google Fonts](https://fonts.google.com/)

#### 3. Workspace, version control and Repository storage

[GIT](https://git-scm.com/)

[GITHUB](https://github.com/) 

# Resources

[Code Institute](https://codeinstitute.net/) Course Content <br />
Code Institute SLACK Community <br />
[Youtube](https://www.youtube.com/) - General resource. <br />
[Am I Responsive](http://ami.responsivedesign.is/) - Responsive website mockup image generator.


---
  
# Testing
- Color scheme changes when buttons are selected.
- Regisration successfully adds new profiles.
- Map pins toggle on hover.

---

# Deployment

1. This repository may be cloned directly into an editor by pasting the following command into the terminal:   
`git clone https://github.com/TimMorrisDev/light-up`    
Alternatively, you can save a copy of this repository by clicking the green button "Clone or download" , then "Download Zip" button, and after extract the Zip file to your folder.
2. In the terminal window change directory (CD) to the correct file location (directory that you have just created).
3. Set up environment variables:
    - Create **.env** file in the root directory.
    - On the top of the file add `import os` to set the environment variables in the operating system.
    - Set the connection to your MongoDB database(MONGO_URI) and a SECRET_KEY with the following syntax:
    `os.environ["SECRET_KEY"] = "YourSecretKey"`   
    `os.environ["MONGO_URI"] = "YourMongoURI"`  
    .
4. Install all requirements from the **requirements.txt** file putting this command into your terminal:   
`pip3 install -r requirements.txt`  
*Note: GitPod does not require `sudo`, so if you use another IDE, you will need to include `sudo` in the beginning of the command: `sudo pip3 install -r requirements.txt`.*
5. Create a new Database called "recipe_manager" in [MongoDB Atlas](https://www.mongodb.com/).   
*You can sign up for free account, if you do not have one.*
6. Create relevant databases.

---

# Credits

### Content

1. Google Fonts for font styles; https://fonts.google.com/

2. Map was created using Google Maps API

3. icons, favicon and map pins created by the team using Affinity Designer

4. Logo SVG created using Figma

### Acknowledgements

1.  We would like to thank our Mentor Mike Murtagh for his help on this project. <br />
2. Thank all of our Team Members for their efforts on building this project.<br />


---

This project is for educational use only

##### back to [top](#table-of-contents)
