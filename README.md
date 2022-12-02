# PROJECT TITLE
> *By Arul, Jash, Nimish, and Kaitlyn*

## Introduction 
Motivation: 
EXPLAIN MOTIVATION

Functionality:
EXPLAIN FUNCTIONALITY

## Architecture
A LITTLE BIT OF EXPLANATION. 

Front End App: 
* **client**: where the 
  * **src**: this folder houses most of the JavaScript files that are compiled by webpack
    * **components**: 
      * **App**: the parent component that renders the dropdown menu when the app is first started
      * **dropdown**: a menu that opens and closes onclick as well as renderes a different map component depending on the type seelcted
      * **slider**: injects new data into the map component when changed by the user by prompting a new action to update the map states
      * **maps**: reads the csv data and maps it to the data state in the component. A composable map is rendered with geographies that match the data ids to the topojson ids from the geoUrl
  * **public**: 
    * index.hmtl: 
    
Back end: 
* **data**: 
  * ALL DATA PARSING FILES ADN WHATNOT

## Project Setup
1. Clone this GitHub repository
2. open project and navigate to *client* folder via terminal
3. run the following line in the terminal to install all necessary dependencies: 
```npm install```
4. run the following line in the terminal to run the project (make sure it is run in the client folder): 
```npm start```

## Roles
#### Arul: 
BLURB OF WHAT ARUL DID
#### Jash: 
BLURB OF WHAT JASH DID
#### Nimish: 
BLURB OF WHAT NIMISH DID
#### Kaitlyn: 
React App and Components: 
* App
* County/State/World Maps
* Slider
* DropDown Menu

