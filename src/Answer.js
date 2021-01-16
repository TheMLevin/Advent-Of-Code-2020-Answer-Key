import React from 'react'

export class Answer extends React.Component{
    constructor(props){
        super(props);
        this.call = this.call.bind(this);
    }

    call(){
        if (this.props.input.length != 0){
            try{
                return Object.values(require(`./challenges/${this.props.script}`))[0](this.props.input);
            } catch(err) {
                console.log('catch')
                if("Invalid Input" === err){
                    alert("This input is invalid for this challenge")
                } else {
                    alert("Sorry, I haven't written that one yet")
                }
                console.log(err)
                return ''
            }
        } else {
            return ''
        }
    }

   render(){
       return React.createElement('p', null, this.call());
   }
}