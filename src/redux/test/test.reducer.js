const INITIAL_STATE = {
    test:'Fuckinng_HARD'
};

const testReducer = (state = INITIAL_STATE , actions)=>{
    switch(actions.type){
        case "SET_TEST":
            return{
                ...state,
                test:actions.payload
            }
        default:
            return state;
    }
}

export default testReducer;