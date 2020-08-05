import React,{Component} from 'react';
import {connect} from 'react-redux';
import '.././style/css/TodoForm.css';
import {v4} from 'node-uuid';
import *as actions from '../actions/todoActions';

class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state={todoItem:''}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }
  componentDidUpdate(preevProps){
    if(preevProps.currId!== this.props.currId|| preevProps.list.length!== this.props.list.length)
    this.setState({todoItem:''})
  }

  handleInputChange(e){
      this.setState({
          [e.target.name]:e.target.value,
          currId:v4(),
          complited:false
      })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.insertTodo(this.state)
  }
  render(){

    return(
      <div className='container'>
        <div className='row'>
        <div className="TodoForm">
          <form  className='TodoFormInput'  onSubmit={this.handleSubmit}>
          <input type="text" name="todoItem" placeholder='Enter Text' value={this.state.todoItem} onChange={this.handleInputChange} />

          <button className='TodoFormButton'type="submit" disabled={this.state.todoItem==='' || this.state.todoItem.length>23}>
            <i className={this.state.todoItem==='' || this.state.todoItem.length>23 ?
              'iconEmpty far fa-plus-square' :
              'plusIcon far fa-plus-square'}>
            </i>
          </button>
            {this.state.todoItem.length>23 ?<p className="MessageForm">Your todo is to long</p> : ''}
        </form>
        </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    list:state.list,
    currId:state.currId
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    insertTodo:(data)=>dispatch(actions.insertItem(data)),
    updateTodo:(data)=>dispatch(actions.updateItem(data)),
    updateTodoIndex:(data,id)=>dispatch(actions.updateItem(data,id)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm);
