import React from 'react'

export class Answer extends React.Component{
    constructor(props){
        super(props);
        this.call = this.call.bind(this);
    }

    call(){
        return this.props.clear ? '' : Object.values(require(`./challenges/${this.props.script}.js`))[0](this.props.input) || alert("Your input may be incomplete. Try again.")
    }

   render(){
       //console.log("Answer.js called")
       return React.createElement('p', null, this.call());
   }
}