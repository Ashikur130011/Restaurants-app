import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home/Home';
import MealDetails from '../components/Home/Meal/MealDetails';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mealdetails/:mealId" element={<MealDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;