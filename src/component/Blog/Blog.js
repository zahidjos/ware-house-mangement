import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container mt-5">
               <div>
                   <h4>Question:Difference between Node.JS and Javascript</h4>
                   <p> Answer: <br /> NodeJS : NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
<p> JavaScript : Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
               </div>
               <div>
                   <h4>Question: When should you use nodejs and when should you use mongodb?</h4>
                   <p>Answer: <br /> MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. => There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS. </p>
               </div>

               <div>
                   <h4>Question: Difference between SQL and NoSQL</h4>
                   <p>Answer: <br /> SQL: SQL databases are primarily called RDBMS or Relational Databases. Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems. Structured query language (SQL). SQL databases are table based databases. SQL databases have a predefined schema.</p>
                   <p>NoSQL: NoSQL databases are primarily called as Non-relational or distributed database. NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application. NoSQL databases can be document based, key-value pairs, graph databases. No declarative query language.</p>
               </div>
            </div>
        </div>
    );
};

export default Blog;