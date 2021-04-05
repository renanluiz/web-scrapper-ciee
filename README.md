<h1 align="center">
  <br>
  <img height="300px" src="https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif" alt="Estagiar na Globo">
  <br>
  Web Scrapper CIEE
  <br>
</h1>

<h4 align="center">A Web Scrapper using puppeteer.</h4>

<p align="center">
  <a href="https://pptr.dev/">
    <img alt="Puppeteer Framework" src="https://img.shields.io/badge/Puppeteer-v7.1-blue">
  </a>
  <a href="https://github.com/renanluiz/web-scrapper-ciee/stargazers">
    <img src="https://img.shields.io/github/stars/renanluiz/web-scrapper-ciee?color=yellow" alt="Project Stars">
  </a>
    <a href="https://nodejs.org/dist/latest-v14.x/docs/api/">
    <img src="https://img.shields.io/badge/NodeJs-v14-brightgreen" alt="NodeJs Documentation">
  </a>
</p>

<p align="center">
  <a href="#overview">Overview</a>
  •
  <a href="#Technologies">Technologies</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#Preview">Preview</a>
</p>

# Overview

This scrapper was created to send email notifications to my girlfriend when new job opportunities are available on the portal 😂.
You're free to use this project to automate this procces for you too.

This is a *self-hosted bot* – meaning you will need to host and maintain your own instance in order to use it.

# Technologies
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-NodeJS-informational?style=flat-square&logo=node.js&logoColor=white&color=293053"></a>
<a href="https://pptr.dev/"><img src="https://img.shields.io/badge/-Puppeteer-informational?style=flat-square&logo=puppeteer&logoColor=white&color=293053"></a>
<a href="https://nodemailer.com/about/"><img src="https://img.shields.io/badge/-Nodemailer-informational?style=flat-square&logo=minutemailer&logoColor=white&color=293053"></a>
<a href="https://www.npmjs.com/package/cron"><img src="https://img.shields.io/badge/-Cron-informational?style=flat-square&logo=material-design-icons&logoColor=white&color=293053"></a>


# Installation
Clone the repository locally

```
git clone https://github.com/renanluiz/web-scrapper-ciee.git
```

Before installing the dependencies, fill in the config.json file with your credentials

```
{
    "email": "your@mail.com",
    "password": "",
    "send_to": "your@mail.com", // You can add more emails separated by a comma e.g: your@mail.com, additional@mail.com
    "ciee_user" : "",
    "ciee_password" : ""
}

```
<h3>Now install the dependencies and run the project</h3>

```
npm install
npm start
```

If after reading the guide you are still experiencing issues, feel free to open a issue or contact me
[here](mailto:renansouzaoliveira10@gmail.com).

# Preview

<img src="https://i.ibb.co/YjDbGx0/image.png" alt="image" border="0">
