import React from 'react'

export class Answer extends React.Component{
    constructor(props){
        super(props);
        this.call = this.call.bind(this);
    }

    call(){
        if (this.props.input.length != 0){
            try{
                const chl = require(`./challenges/${this.props.script}`);
                console.log('pass')
                const ans = Object.values(chl)[0](this.props.input);
                return ans
            } catch(err) {
                console.log('catch')
                if("MODULE_NOT_FOUND" === err.code){
                    alert("Sorry, I haven't written that one yet")
                } else {
                    alert("This input is invalid for this challenge")
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