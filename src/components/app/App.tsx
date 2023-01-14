import React from 'react';
import {createStore} from "redux";
import {reducer} from "../../redux/Reducer";
import {initialState} from "../../redux/State";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Add} from "../../pages/add/Add";
import {Edit} from "../../pages/edit/Edit";
import {Provider} from 'react-redux'
import {Home} from "../../pages/home/Home";

function App() {
    const store = createStore(reducer as any, initialState,);


    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home/>}/>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/edit" element={<Edit/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}


export default App;
