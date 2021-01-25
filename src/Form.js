import React from 'react'

export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {day: 1, part: 1, input: "", pass: false, check: Object.values(require('./inputCheck/D1'))[0]}
        this.changeDay = this.changeDay.bind(this)
        this.changePart = this.changePart.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }
    changeDay(x){
        this.props.clear()
        try{
            let func = Object.values(require(`./inputCheck/D${x.target.value}`))[0]
            func(this.state.input) //Once all days are done, this won't be necessary anymore
            this.setState({day: parseInt(x.target.value), check: func})
        } catch{}
    }

    changePart(x) {
        this.props.clear()
        if (['1','2'].includes(x.target.value)) this.setState({part: parseInt(x.target.value)})
    }

    changeInput(x) {
        this.props.clear()
        this.setState({input: x.target.value})
    }

    render(){
        //console.log('Form.js called');
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
                React.createElement('textarea', {cols: '50', rows: '20', id: "text", placeholder: 'Paste Your Input', style: {background: this.state.check(this.state.input) || this.state.input.length == 0 ? 'white' : 'pink'} , onChange: this.changeInput}),
                React.createElement('br', null),
                this.state.check(this.state.input) ? React.createElement('button', {onClick: () => this.props.assign(`D${this.state.day}P${this.state.part}`, this.state.input)}, "Find Answer") : React.createElement('br', null)
            )
        );
    }
}