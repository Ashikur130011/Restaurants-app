import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import Meal from '../Meal/Meal';

const Meals = () => {
    const {meals} = useData()
    return (
        <div>
            <h1>This is meals</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    meals.map(meal => <Meal
                        key= {meal.id}
                        meal= {meal}
                    ></Meal>)
                }
            </Row>
        </div>
    );
};

export default Meals;