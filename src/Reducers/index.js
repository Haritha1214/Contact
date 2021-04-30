/*import {combineReducers} from 'redux';
import Actions from '../Action';*/
import {CREATE,DELETE,EDIT,CONTACTS,DELETE_SELECTED,SELECT,CLEAR} from "../Action/index";
import {combineReducers} from 'redux';
const intialState = {
  contacts: [
    {
      id: 1,
      name: "Hariii",
      Phone: "7010041125",
    },
    {
      id: 2,
      name: "Anna",
      Phone: "9940866311",
      
    },
    
  ],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case EDIT:
      return {
        ...state,
        contacts: state.contacts.map(
        (contact) =>
        contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
      case CLEAR:
        return {
          ...state,
          selectedContacts: [],
        };
  
      case CONTACTS:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
  case DELETE_SELECTED:
      return {
        ...state,
        contacts: [],
      };
    case SELECT:
      return {
        ...state,
        selectedContacts: action.payload,
      };
      default:
      return state;
  }
}
   

   




    
/*const reducer = (state=intialState, action) => {
    if (action.type === "CREATE") {
      return  [
        ...state,
        Object.assign({}, action.contact)
      ];
    } else if (action.type === "DELETE") {
      return [
        ...state,
        Object.delete({}, action.contact)
      ];
    }
    else if (action.type==="EDIT"){
      return [
        ...state,
        Object.edit({}, action.contact)
      ];;
    }
    
    else {
      return state;
    }
  };*/
  export default combineReducers(
    { Contact:contactReducer} 
      )
