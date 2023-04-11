module.exports = app => {
    const customer = require("../controllers/customer.controller");
    var router = require("express").Router();
  
    // Create a new customer
    router.post("/", customer.create);
  
    // Retrieve all customers
    router.get("/", customer.findAll);
  
    // Retrieve a single customer with id
    router.get("/:id", customer.findOne);
  
    // Update a customer with id
    router.put("/:id", customer.update);
  
    // Delete a customer with id
    router.delete("/:id", customer.delete);
  

  
    app.use('/api/v1/customer', router);
  };
  