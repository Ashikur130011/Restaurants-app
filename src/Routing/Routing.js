import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home/Home';
import MealDetails from '../components/Home/Meal/MealDetails';
import Header from '../components/Shared/Header/Header';

const Routing = () => {
    return (
        <BrowserRouter>
        <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mealdetails/:mealId" element={<MealDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;