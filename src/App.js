import React from 'react'
import {Intro} from './Intro'
import {Form} from './Form'
import {Answer} from './Answer'

export class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {script: 'D1P1', input: ''}
        this.makeInput = this.makeInput.bind(this)
    }

    makeInput(newScript, newInput){
        this.setState({script: newScript, input: newInput});
    }

    render(){
        //console.log('App.js called');
        return (
            React.createElement('div', null, 
                React.createElement(Intro, null),
                React.createElement(Form, {assign: this.makeInput}),
                React.createElement(Answer, {script: this.state.script, input: this.state.input})
            )
        )
	}
}