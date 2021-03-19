 import React from 'react'

export class Intro extends React.Component{
    render(){
        //console.log('Intro.js called');
        return (
            React.createElement('div', null,
                React.createElement('h1', null, "Hello and Welcome to the 2020 Advent of Code Answer Key"),
                React.createElement('p', null, "Advent of Code is a coding challenge that occurs every December and consists of 25 puzzles, each with two parts."),
                React.createElement('a', {href: "https://adventofcode.com/", target: "_blank"}, 'First, make an account with Advent of Code'),
                React.createElement('p', null, "\nAdvent of Code gives each participant a slightly different input that will give them a different result.\n"),
                React.createElement('p', null, 'You can run your each of your inputs through this app to get the correct answers for your account.\n'),
                React.createElement('p', null, "If the Day counter does not let you input a certain day, that day has not been completed yet.")
            )
        );
    }
}