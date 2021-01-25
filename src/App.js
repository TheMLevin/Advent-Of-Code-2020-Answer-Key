import React from 'react'
import {Intro} from './Intro'
import {Form} from './Form'
import {Answer} from './Answer'

export class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {script: 'D1P1', input: '', clear: true}
        this.makeInput = this.makeInput.bind(this)
        this.clear = this.clear.bind(this)
    }

    makeInput(newScript, newInput){
        this.setState({script: newScript, input: newInput, clear: false});
    }

    clear(){
        this.setState({clear: true})
    }

    render(){
        //console.log('App.js called');
        return (
            React.createElement('div', null, 
                React.createElement(Intro, null),
                React.createElement(Form, {assign: this.makeInput, clear: this.clear}),
                React.createElement(Answer, {script: this.state.script, input: this.state.input, clear: this.state.clear})
            )
        )
	}
}