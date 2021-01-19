import React from 'react'

export class Answer extends React.Component{
    constructor(props){
        super(props);
        this.call = this.call.bind(this);
    }

    call(){
        if (this.props.input.length != 0){
            try{
                Object.values(require(`./inputCheck/${this.props.script.split('P')[0]}.js`))[0](this.props.input)
                return Object.values(require(`./challenges/${this.props.script}.js`))[0](this.props.input) || alert("Your input may be incomplete. Try again.")
            } catch(err) {
                console.log(err)
                if("Invalid Input" === err){
                    alert("This input is invalid for this challenge")
                } else {
                    alert("Sorry, I haven't written that one yet")
                }
                return ''
            }
        } else {
            return ''
        }
    }

   render(){
       //console.log("Answer.js called")
       return React.createElement('p', null, this.call());
   }
}