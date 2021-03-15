import {ADD_PERSON} from '../constants/action-types'

const personData=[
    { name: 'Max',age: Math.floor( Math.random() * 40 )},
]

{
type:'UPDATE_PERSON'
payload: personData
}

const personReducer =(state= personData, action)=>{
    // console.log(action)
    if(action.type=='UPDATE_PERSON'){
        //const newState=[...state];
        return Object.assign({},state,{
            articles:state.articles.concat(action.payload)
        });
        return state;
        //BUENO state.articles.push(action.payload);
        //BUENO return state
    }/*else{
        return state
    }*/
}

export default personReducer;