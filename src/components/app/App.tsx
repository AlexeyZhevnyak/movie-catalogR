import React from 'react';
import {createStore} from "redux";
import {reducer} from "../../redux/Reducer";
import {initialState} from "../../redux/State";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {Add} from "../../pages/add/Add";
import {Edit} from "../../pages/edit/Edit";

const store = createStore(reducer as any, initialState,)
export const StoreContext = React.createContext(store);

function App() {
    return (
        <StoreContext.Provider value={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/edit" element={<Edit/>}/>
                </Routes>
            </BrowserRouter>
        </StoreContext.Provider>
    )
}


export default App;
