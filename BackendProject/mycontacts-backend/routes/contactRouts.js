const express = require("express");
const { getContact, updateContact, createContact, getOneContact ,deleteContact} = require("../controllers/concactController");
const router = express.Router();



//get a contact
router.route("/").get(getContact)
//post a contact
router.route("/").post(createContact)
//update a contact
router.route("/:id").put(updateContact)

//get one contact
router.route("/:id").get(getOneContact)
//delete a contact
router.route("/:id").delete(deleteContact)


module.exports = router;
