import { applyMiddleware, createStore, compose, Action } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { rootReducer } from './reducers'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// Types
type AppState = ReturnType<typeof rootReducer>
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActions<T extends {[key: string]: (...argc: any[]) => any}> = ReturnType<PropertiesType<T>>
export type BaseThunk<A extends Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A> 
