import React from 'react';
import {createStore} from "redux";
import {reducer} from "../../redux/Reducer";
import {initialState} from "../../redux/State";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "../home/Home";
import {Add} from "../add/Add";

const store = createStore(reducer as any, initialState,)
export const StoreContext = React.createContext(store);

function App() {
    return (
        <StoreContext.Provider value={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add" element={<Add/>}/>
                </Routes>
            </BrowserRouter>
        </StoreContext.Provider>
    )

}


export default App;
