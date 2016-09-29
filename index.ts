import * as  $ from "jquery";
import * as  _ from "underscore";
import * as  React from "react";
import * as  ReactDom from "react-dom";

let hello: string = "Hello, world!!";

$("document").ready(function(){
    console.log("Hello, world!!");
});

class User{
    public UserId: number;
    public FirstName: string;
    public LastName: string;
    public Mail: string;
    
    constructor() {
    }
}
let users: Array<User> = [
    {UserId: 1, FirstName: "Marco", LastName: "Aranzulla", Mail: "marco.aranzulla@gmail.com"},
    {UserId: 2, FirstName: "Edoardo", LastName: "Moneta", Mail: "Edoardo.Moneta@gmail.com"},
    {UserId: 3, FirstName: "Silvia", LastName: "Taddeo", Mail: "silvia.taddeo@gmail.com"}
];

console.log(users.slice(1,2));

function PrintUsers(attr: string):void{
$("body").append("<dt>");
_.pluck(users, attr).forEach(
    function(item){
        return $("body").append("<dd>" + item + "</dd>");
    }
)
$("body").append("</dt>");
}

PrintUsers("FirstName");
PrintUsers("LastName");


