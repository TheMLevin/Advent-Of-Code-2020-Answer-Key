import React from 'react'

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {day: 1, part: 1, input: ""}
        this.changeDay = this.changeDay.bind(this)
        this.changePart = this.changePart.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.checkForm = this.checkForm.bind(this)
    }
    changeDay(x) {
        this.setState({day: x.target.value})
    }

    changePart(x) {
        this.setState({part: x.target.value})
    }

    changeInput(x) {
        this.setState({input: x.target.value})
    }

    checkForm(){
        let message = []
        if(1 > this.state.day || this.state.day > 25){
            message.push('INVALID DAY PROVIDED')
        }
        if(1 > this.state.part || this.state.part > 2){
            message.push('INVALID PART PROVIDED')
        }
        if(this.state.input.length === 0){
            message.push("NO INPUT PROVIDED")
        }
        if(message.length >= 1){
            alert(`${message.join('\n')}\nPlease Fix the Above Problem${message.length > 1 ? 's' : ''}`)
        } else {
            this.props.assign(`D${this.state.day}P${this.state.part}`, this.state.input)
        }
    }

    render(){
        console.log('Form.js called');
        return(
            React.createElement('div', null,
                React.createElement('label', {htmlFor: "day"}, "Day: "),
                React.createElement('input', {type: "number", min: "1", max: "25", value: this.state.day, id: "day", step: "1", onChange: this.changeDay}),
                React.createElement('label', {htmlFor: "part"}, " Part: "),
                React.createElement('input', {type: "number", min: "1", max: "2", value: this.state.part, id: "part", step: "1", onChange: this.changePart}),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement('label', {htmlFor: "text"}, "What is your input?"),
                React.createElement('br', null),
                React.createElement('textarea', {cols: '50', rows: '20', id: "text", placeholder: 'Paste Your Input', onChange: this.changeInput}),
                React.createElement('br', null),
                React.createElement('button', {onClick: this.checkForm}, "Find Answer")
            )
        );
    }
}