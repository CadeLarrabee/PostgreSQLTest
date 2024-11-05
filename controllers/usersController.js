const { body, validationResult } = require("express-validator");
const usersStorage = require("../storages/usersStorage");
const db = require("../db/queries");

async function usersListGet(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function usersListCreate(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function usersListForm(req, res) {
  console.log("Lists will be shown here");
  res.render("createUser", {
    title: "Create user",
  });
}
async function usersListUsernames(req, res) {
  console.log("Lists will be shown here");
  res.render("createUser", {
    title: "Create user",
  });
}

module.exports = {
  usersListForm,
  usersListCreate,
  usersListGet,
  usersListUsernames,
};
