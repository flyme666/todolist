import React ,{Component}from 'react';
import ListItem from './listItem';
import AddTask from './AddTask';
import './main.css';
class TodoList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      list: [{
        id: 0,
        task: '学习',
        status: 0
      }, {
        id: 1,
        task: '看书',
        status: 0
      }, {
        id: 2,
        task: '玩游戏',
        status : 0
      }],
      finished: 0
    };
  }

  addTask (newitem) {
    let allTask = this.state.list;
    allTask.push(newitem);
    this.setState({
      list: allTask
    });
  }

  updateFinished (todoItem) {
    let sum = 0;
    this.state.list.forEach( (item) => {
      if (item.id === todoItem.id) {
        item.status = todoItem.status;
      }
      if (item.status === 1) {
        sum++;
      }
    });
    this.setState({
      finished: sum
    });
  }

  updateTotal (todoItem) {
    let obj = [], sum = 0;
    this.state.list.forEach((item) => {
      if (item.id !== todoItem.id) {
        obj.push(item);
        if (item.status === 1 ) {
          sum++;
        }
      }
    });
    this.setState({
      list: obj,
      finished: sum
    });
  }

  render () {
    return (
        <div className="container">
          <h1>TodoList</h1>
          <ul>
            { this.state.list.map ((item, index) =>
                <ListItem
                    item={item}
                    finishedChange={this.updateFinished.bind(this)}
                    totalChange={this.updateTotal.bind(this)}
                    key={index}
                />
            )}
          </ul>
          <p>Finished&nbsp;/&nbsp;Total Tasks&nbsp;:&nbsp;{this.state.finished}&nbsp;/&nbsp;{this.state.list.length}</p>
          <AddTask addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
        </div>
    );
  }
}
export default TodoList;
