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
* **client**: contains the React App files
  * **src**: this folder houses most of the JavaScript files that are compiled by webpack
    * **components**: 
      * **App**: the parent component that renders the dropdown menu when the app is first started
      * **dropdown**: a menu that opens and closes onclick as well as renders a different map component depending on the type selected
      * **slider**: injects new data into the map component when changed by the user by prompting a new action to update the map states
      * **maps**: reads the csv data and maps it to the data state in the component. A composable map is rendered with geographies that match the data ids to the topojson ids from the geoUrl
  * **public**: 
    * index.hmtl: where the HTML code of the React Components are injected into
Back end: 
* **data**: 
  * ALL DATA PARSING FILES AND WHATNOT

## Project Setup
1. Clone this GitHub repository
2. Open project and navigate to *client* folder via terminal
3. Run the following line in the terminal to install all necessary dependencies: 
```npm install```
4. Run the following line in the terminal to run the project (make sure it is run in the client folder): 
```npm start```

## Roles
#### Arul: 
BLURB OF WHAT ARUL DID
#### Jash: 
BLURB OF WHAT JASH DID
#### Nimish: 
BLURB OF WHAT NIMISH DID
#### Kaitlyn: 
React App and Components: App, County/State/World Maps, Slider (updating data onChange), Dropdown Menu
