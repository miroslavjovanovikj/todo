
export const insertItem=(data)=>({
  type:'INSERT',
  data
})

export const updateItem=(data,id)=>{
  return{
    type:"UPDATE",
    data,
    id
  }
}
export const deleteItem=(id)=>{
  return{
    type:"DELETE",
    payload:id
  }
}

export const toogleComplited =(id)=>{
  return{
    type:"TOGGLE",
    payload:id
  }
}

export const toggleDarkMode =(data)=>{
  return{
    type:"DARK_MODE",
    payload:data
  }
}
