# PotatoTrading

### Homepage
https://potatotrading.azurewebsites.net/ <--- visit here 

For input you can select from the dropdown or type and it auto suggests

### Back End Endpoints
You can look at the output of some of the API endpoints directly here

Names of products pulled via a GET request from Azure SQL Database
https://potatotradingwebapi20190316095132.azurewebsites.net/api/product/names

Names of storage companies pulled via a GET request from Azure SQL Database
https://potatotradingwebapi20190316095132.azurewebsites.net/api/product/storage

Endpoints exist for saving data

### Overview
The back end is built in C# using .Net Core 2.2 with a SQL database.

Code for the api is here: https://github.com/ltoshea/PotatoTrading/tree/master/webapp_api/PotatoTradingWebApi

Code for the SQL tables and stored procedure to save:
https://github.com/ltoshea/PotatoTrading/tree/master/webapp_api/PotatoTradingWebApi/SQL

Code for the Front End:
https://github.com/ltoshea/PotatoTrading/tree/master/potato-trading-spa

### SQL Table design - Normalised

dbo.Product
- ProductId (Primary Key)
- Product information1
- Product information 2
...

dbo.StorageCompany
- Id
- Name

dbo.StoragePrice
- ProductId
- StorageId
- StorageFee
- ValidFrom
- ValidToo

StoragePrices was created as a temporal table. This is particularly useful becuase it allows us to get the most up to date price very quickly but also keeps an easily queryable history table. This makes it very easy to find out WHEN a price was changed for a particular product/storage company. This is very useful for historical analysis and for spotting errors. It also allows you to get a  point-in-time snapshot of what the data looked like at a particular time.


#### Improvements
Given the time I had to pick and choose the areas that were most important. A few quick thoughts of future improvements

- authentication - so only traders can submit prices. This also doubles as an audit log for changes and to trace back any fat finger errors

- Add more data field on the form. 
e.g. we could make the distinction between live price and prediction. If a prediction we could have a confidence rating.

- Form feedback that prices have been submitted sucessfully

- Better error handling and logging 

- Unit Tests

- Better model structure
