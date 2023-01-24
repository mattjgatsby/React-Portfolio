# React Portfolio

## Description

This application is my personal portfolio that I created using React.js. Building this app helped me learn how to utilise and deploy a React application. I will be updating this portfolio as I contiune to improve my abilities with React.js

## Site Link
[Visit the site!](https://mattjgatsby.github.io/React-Portfolio/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![ScreenShot](/matt-gatsby-portfolio/src/assets/images/SiteSS.png)

## Technology Used
* React.js
* JavaScript
* CSS
* Bootstrap
* Node.js


## Code Snippet
Here is a utility function that validates an email entered into the site
```JavaScript
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
```
Here is my footer function that includes a function to handle a click event on an image of the GitHub logo that redirects the page to my GitHub.
```JavaScript
const Footer = () => {
const githubClick =() =>{
document.location.replace("https://github.com/mattjgatsby")
}
  return (
    <div className="navbar navbar-dark bg-dark fixed-bottom">
      <img
      className="mx-auto "
        src={ghImage}
        alt="GitHub Icon"
        onClick={githubClick}
      ></img>
    </div>
  );
};
```

## Author Links 
* [Github](https://github.com/mattjgatsby)
* [LinkedIn](https://www.linkedin.com/in/matthew-gatsby-1a1521250/)