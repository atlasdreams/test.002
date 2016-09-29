"use strict";
var $ = require("jquery");
var _ = require("underscore");
var hello = "Hello, world!!";
$("document").ready(function () {
    console.log("Hello, world!!");
});
var User = (function () {
    function User() {
    }
    return User;
}());
var users = [
    { UserId: 1, FirstName: "Marco", LastName: "Aranzulla", Mail: "marco.aranzulla@gmail.com" },
    { UserId: 2, FirstName: "Edoardo", LastName: "Moneta", Mail: "Edoardo.Moneta@gmail.com" },
    { UserId: 3, FirstName: "Silvia", LastName: "Taddeo", Mail: "silvia.taddeo@gmail.com" }
];
console.log(users.slice(1, 2));
console.log(_.pluck(users, "FirstName"));
