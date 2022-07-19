import React from 'react';
import { useParams } from "react-router-dom";


const MealDetails = () => {
    const {mealId} = useParams()
    return (
        <div>
            <h1>This is meal detail {mealId}</h1>
        </div>
    );
};

export default MealDetails;