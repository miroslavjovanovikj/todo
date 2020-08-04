import React,{Component} from 'react';
import TodoForm from './TodoForm';
import {connect} from 'react-redux';
import '.././style/css/TodoList.css';
import FlipMove from 'react-flip-move';
import * as actions from '../actions/todoActions'


class TodoList extends Component{

    handleEdit(data,id,e){
      this.props.updateTodoIndex(data,id,e)
    }
    handleDelete(id){
      this.props.deleteTodo(id)
    }
    handleDone(id){
      this.props.toggleItem(id)
    }
    handleMode(data){
      this.props.darkMode(data)
    }
  render(){
    {this.props.newMode ?  document.body.style.backgroundColor='#101935' : document.body.style.backgroundColor='#ffff'}
    return(
      <div className='container'>
        <div className='row'>
          <div className="col-md-4"></div>
          <div className="Todo col-md-4 ">
            <i className={ this.props.newMode ?
                'fas fa-moon ligthDark' :
                'fas fa-moon lightLight'}
                onClick={(data)=>{this.handleMode(data)}}>
            </i>
              <p className={this.props.newMode ?
                  'lightNameMode' :
                  'ChangeMode'}>
                  {this.props.newMode ? 'DARK' : 'LIGHT'} MODE
              </p>
            <TodoForm />
             <div className='TodoList '>
               {this.props.list.map((todo)=>(
                 <div className="TodoListItem"  key={todo.currId}>
                     <form onSubmit={this.handleEdit}>
                     <p className='TodoItems col-md-10 col-xs-10'>
                        <input className="editTodo" type="text" value={todo.todoItem } name="todoItem"
                          onChange={(e)=>this.handleEdit(e.target.value, todo.currId)}
                        />
                      </p>
                      <div>
                          <i onClick={()=>this.handleDone(todo.currId)}
                              className={!todo.complited ?
                                'TodoToggleButton  col-md-1 col-xs-1 fas fa-check-circle':
                                'TodoToggleButton1 col-md-1 col-xs-1 fas fa-check-circle'}>
                            </i>
                      </div>
                       <div className='TodoButtons col-md-1 col-xs-1'>
                          <button className='DeleteButton' onClick={()=>this.handleDelete(todo.currId)}><i className=" fas fa-trash"></i></button>
                       </div>
                     </form>
                 </div>
               ))}

             </div>
            </div>
              <div className="col-md-4"></div>
          </div>


        </div>

    )
  }
}
const mapStateToProps=(state)=>{
  return{
    list:state.list,
    newMode:state.darkMode
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    deleteTodo:(id)=>dispatch(actions.deleteItem(id)),
    updateTodoIndex:(data,id)=>dispatch(actions.updateItem(data,id)),
    toggleItem:(id)=>dispatch(actions.toogleComplited(id)),
    handleInsert:(id)=>dispatch(actions.insertItem(id)),
    darkMode:(data)=>dispatch(actions.toggleDarkMode(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
              // <FlipMove duration={300} easing='ease-in-out'>
                        // </FlipMove>
// <input type="text" name="myname" value={this.state.myname} onChange={this.handleInput} />
