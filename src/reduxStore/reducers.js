// reducers are nothing but just pure functions who are responsible for updating the store
export var harshit = function (state = {
    dell: 10
}, action) {
    // state means here state of store i.e that object whihc contains data
    // action means what it has to do 

    switch (action.type) {
        case "ACTION1": {
            state = { ...state }
            // do something to state
            return state
        }

        case "ACTION2": {
            state = { ...state }
            // do something to state
            state["dell"] -= 1
            return state
        }

        case "ACTION3": {
            state = { ...state }
            // do something to state
            state["hp"] += 1
            return state
        }

        default: return state
    }

}


export var developer = function (state = {
    dev: 0
}, action) {

    switch (action.type) {
        case "REACT": {
            state = { ...state }
            //do something to state
            state["react"] += 2
            return state
        }

        case "ANGULAR": {
            state = { ...state }
            state["angular"] -= 1
            return state
        }

        default: return state
    }
}