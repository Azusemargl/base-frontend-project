import { InferActions, BaseThunk } from './../store';

const initialState = {
   title: 'Hello World'
}

export const mainReducer = (state = initialState, action: Action): InitialState => {
   switch (action.type) {
      case 'MAIN':
         return { ...state, title: action.payload }
   
      default:
         return state
   }
}

// Actions
const actions = {
   setTitle: (payload: string) => ({type: 'MAIN', payload} as const)
}

// Thunks
const SetTitle = (): Thunk => async (dispatch) => {
   
}

// Types
type InitialState = typeof initialState
type Action = InferActions<typeof actions>
type Thunk = BaseThunk<Action>
