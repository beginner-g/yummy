import {createStore} from 'redux'
const initStore=[

]
const rootReducer=(state=initStore,action)=>{
  switch(action.type){
    case 'ADD_USER':
      return [...state,
            {user:action.signval.val}
          ]
    default:
      return state
  }
}
const store =createStore(rootReducer)
export default store
