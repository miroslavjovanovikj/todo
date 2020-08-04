export const loadState=()=>{
  try{
    const serializedState= localStorage.getItem('todos');
    if (serializedState===null){
      return undefined;
    }
    return JSON.parse(serializedState)
  }catch(err){
    return undefined;
  }
}
export const saveState =(list,darkMode)=>{
  try{
    const serializedState = JSON.stringify(list, darkMode);
    localStorage.setItem('todos', serializedState)
  }catch(err){
      //ignore errors
      console.log(err)
  }
}
