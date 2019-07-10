import React, { Component } from 'react';

class AddTask extends Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let len = this.props.nums;
        let newid = len > 0 ? len : 0;
        let value = this.refs.myText.value;
        if (value !== '') {
            let obj = {
                id: newid,
                task: value,
                status: 0
            };
            this.refs.myText.value = '';
            this.props.addNewTask(obj);
        }
    }

    render () {
        return (

            <div className="dialog">
                <div>
                    <h3>Task</h3>
                    <input type="text" ref="myText" placeholder="What do you want to do?"/>
                </div>
                <div>
                    <input type="button" value="Save Task" onClick={this.handleClick}/>
                </div>
            </div>

        );
    }
}

export default AddTask;
