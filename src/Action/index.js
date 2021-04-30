export const CREATE = "CREATE";
export const EDIT = "EDIT";
export const DELETE = "DELETE";
export const CONTACTS = "CONTACTS";
export const SELECT= "SELECT_CONTACT";
export const CLEAR = "CLEAR_CONTACT";
export const DELETE_SELECTED = "DELETE_SELECTED_CONTACT";



export const addUser=(contact)=>{
    return{
      type:"CREATE",
      payload:contact
    }
}
export const deleteUser=(id)=>{
    return{
       type:"DELETE",
       payload:id
    }
}
export const editUserDetails=(contact)=>{
  return{
    type:"EDIT",
    payload:contact
  }
}
export const contacts=(id)=>{
    return{
      type:"CONTACTS",
      payload:id
    }
  }

  // select all contact
export const selectAllContact = (id) => ({
  type: SELECT,
  payload: id,
});

// clear selected contacts
export const clearAllContact = () => ({
  type: CLEAR,
});

// delete selected contacts
export const deleteAllContact = () => ({
  type: DELETE_SELECTED,
});