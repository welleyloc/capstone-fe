### TTS Capstone Front-end

* This project was generated with Angular CLI version 8.3.1.
* Note that the back-end for this project is located at [capstone-be]()

#### Additional imports

* Font awesome CDN
* Google Charts Module
* Bootstrap 4 (angular.json)

#### Process

1. Format the given front-end template into Angular
2. Convert the given product CSV with Spring Batch to H2 database and use batch processor to map dept id # to dept name

#### Project requirements

[] Create a RESTful API service to add, update, and retrieve product information
[] Uses Hibernate to interact with a SQL database
[x] Utilizes Angular on the front-end 

Each product is an record with the following columns:
[] id: unique identifier
[] name
[] category: ID relating to category table
[] full_price: up to two places of decimal
[] sale_price: up to two places of decimal
[] availability: boolean value stating is the product is in stock (true) or not (false)
[] supplier?: related table?

The MVP will be able to :
[] Perform basic CRUD functions
[] Return a list of products by category
[] Return a list of products by category and availability
[] Sort products by full price, sale price, and the percentage of discount

#### Development server

Clone repo, type `npm install` in project directory to restore node_modules, and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.