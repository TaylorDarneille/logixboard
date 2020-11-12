## Installation
This app was bootstrapped using [create-react-app](https://github.com/facebook/create-react-app).

After cloning the repo, run `npm i` to install dependencies. Run the app w/ `npm start`.

## Retrieving shipment data from spreadsheet

* Used [sheets2api](https://sheet2api.com/) to retrieve data from [this google sheet](https://docs.google.com/spreadsheets/d/1L-B-wbHabvm3s6Sv8eEiOAhX1BCqX39SwEAZGZhb3Sg/edit?usp=sharing) in JSON format. 
* API is currently set to READ only with no authorization
* Got burned by call limit so had to make a second account, then used postman to make requests for all the data in JSON so I could store in in the `data.json` file to avoid hitting the call limit during development

## Styling

* To get an initial table layout, I used a template from [React-Table](https://react-table.tanstack.com/)
* Most of the styling is the default from create-react-app, as well as the in-line styling from the React-Table template
* None of this is very sexy, so I would like to make a lot of changes here

## Functionality

* Spent far too much time trying to debug when the API call limit was reached and I didn't realize that's why things suddenly weren't working
* Ideally, I would like to spend more time playing with the sorting and filtering hooks provided by React-Table, so I wasn't reinventing the wheel. Used a generic `handleChange` to demonstrate ideal dropDown functionality (since that was going to take me less time then learning React-Table).

## With more time I would...

* Use React-Table to create filters for all fields
* Add write functionality and authorization to the sheets API
* Move all in-line styling to stylesheet and make it all look much more modern and modular
* Add [React-Charts] or other charting tool for some aggregate data (eg. bell curve showing distribution of difference between estimated delivery date and true delivery date (if that data became available), or a barchart showing # of shipments per client, etc.)