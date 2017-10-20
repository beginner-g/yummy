import {createStore} from 'redux'
const initStore=[

]
const rootReducer=(state=initStore,action)=>{
  switch(action.type){
    case 'SIGNDATA':
    // console.log([...state,action.sign]);
      return [...state,action.username]
    default:
      return state
  }
}
const store =createStore(rootReducer)
export default store
