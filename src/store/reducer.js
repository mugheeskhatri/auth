

const INITIAL_STATE = {
    users:[],
    key: []
};

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
        case "updateData":
          return {...INITIAL_STATE,
                  products : action.data
          }
          default :
          return state
      }
};