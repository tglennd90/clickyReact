import React from "react";

function Jumbotron() {
    return (        
        <div className="row jumbotron bg-dark text-white">
            <div className="container">
                <h1 className="display-4">Clicky Game!</h1>
                <p className="lead">Click on an image to earn points, but don't 
                click the same image twice in a row!</p>
            </div>
        </div>           
    );
};

export default Jumbotron;