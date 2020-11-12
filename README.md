## Retrieving shipment data from spreadsheet

* Used [sheets2api](https://sheet2api.com/) to retrieve data from [this google sheet](https://docs.google.com/spreadsheets/d/1J87LPbUFmG9DSa0dQeWvikuZ0xmr-r1u-XBdr-nXlbU/edit?usp=sharing) in JSON format. 
* API is currently set to READ only with no authorization
* Got burned by call limit so had to make a second account, then used postman to make requests for all the data in JSON so I could store in in the `data.json` file to avoid hitting the call limit during development