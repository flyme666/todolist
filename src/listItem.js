import React, { Component } from 'react';

class ListItem extends Component {
    constructor (props) {
        super(props);

        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleFinished () {
        let status = this.props.item.status;

        status = (status === 0 ? 1 : 0);

        let obj = {
            id: this.props.item.id,
            task: this.props.item.task,
            status: status
        }

        this.props.finishedChange(obj);
    }

    handleDelete () {
        this.props.totalChange(this.props.item);
    }

    render () {
        const item = this.props.item;

        const unfinish = {
            backgroundColor: '#CCFFFF',
            color: '#000',
        };

        const finish = {
            backgroundColor: '#52FFA8',
            color: '#000',
            textDecoration: 'line-through'
        }

        let itemStyle = item.status === 0 ? unfinish : finish;

        return (
            <li key={item.id} style={itemStyle}>
				<span
    onClick={this.handleFinished}
    id={item.id}
    className="check-btn"
    style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
    />
                <span>{ item.task }</span>
                <span onClick={this.handleDelete} className="delete-btn">删除</span>
            </li>
        );
    }
}

export default ListItem;