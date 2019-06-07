# Doctor Lookup

#### A web-based application that acts as a directory of doctors.

#### By **Zach Weintraub**

## Description

A web-based application that returns a list of doctors based on the following user-inputted search criteria: symptom or doctor name, city or zip code.

| Specs |
| :-------------     |
|Program can convert a city or zip code into geocode by calling the MapQuest API.|
|Program can pass above geocode as a parameter when calling the BetterDoctors API.|
|Program can pass a doctor's name or a symptom as a parameter when calling the BetterDoctors API.|
|Program can accept user input for all of the above values.|
|Program can return a list of matching doctors based on user's search criteria.|
|Program notifies user if no matching doctors were found.|
|For each matching doctor, program includes the following information: name, address, telephone.|
|If a matching doctor's address has a "street2" value, program includes this value.|
|If a matching doctor's practice has a "website" value, program includes this value.|
|Program informs user whether each matching doctor is currently accepting new patients.|

## Setup/Installation Requirements

-First, clone this repository: 

  ``$ git clone http://www.github.com/zachweintraub/doctor-lookup.git``

-Ensure that you have [node.js](https://nodejs.org/) and node package manager installed locally, then navigate to the top level of the project's directory:

  ``$ cd doctor-lookup``<br>

-Create a .env file to store your own API keys:

  ``$ touch .env``<br>

-Open the .env file in your text editor of choice and populate it:

  ``LOC_KEY = //enter your MapQuest API key here``<br>
  ``DOC_KEY = //enter your BetterDoctors API key here``<br>

-And run the following commands to launch the program:

  ``$ npm install``<br>
  ``$ npm start``<br>


## Known Bugs
* No known bugs at this time.

## Technologies Used
* ES6, webpack, eslinter, Postman, BetterDoctors API, MapQuest API

## Support and contact details

_Email me with any questions, comments, or concerns:_
zachweintraub@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **_{Zach Weintraub}_**