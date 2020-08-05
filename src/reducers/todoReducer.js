
let initialState={
  currId:'',
  darkMode:false,
  list:[]
}

export const todoReducer =  (state=initialState, action)=>{
  let list =state.list
  let mode =state.mode
  switch(action.type){

    case "INSERT":
      return {
        ...state,
      list:[...state.list, action.data]
      }

      case "UPDATE":
        list.map(item=>{
          if(item.currId===action.id)
            item.todoItem =action.data
            return {...state,...list,[item.todoItem]:list}
        })

      case "DELETE":
          list = list.filter(item=>{
            return item.currId!==action.payload
          })
        return{...state, list}

      case 'TOGGLE':
        let isComplited =state.list.find(item=>(item.currId===action.payload))
          if(!isComplited.complited){
            isComplited.complited=true
            return {...state,...list}
          }
            isComplited.complited=false
            return {...state,...list}

        case 'DARK_MODE':
          if(state.darkMode){
            state.darkMode=false
            return {...state, ...list, mode}
          }
            state.darkMode=true
            return {...state, ...list, mode}

      default:
        return state
  }
}
