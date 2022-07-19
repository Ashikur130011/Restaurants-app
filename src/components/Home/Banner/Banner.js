import React from 'react';
import { Row } from "react-bootstrap";
import useData from '../../../hooks/useData';
import bannerImg from '../../../images/bannerbackground.png'
import Meal from '../Meal/Meal';
import './Banner.css'

const Banner = () => {
    const {meals, setMeals,searchMeal,setSearchMeal} = useData()
    const handleDisplayFood = (e) => {
        const searchText = e.target.value
        const value = meals.filter(meal => meal.f_name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchMeal(value)
    }

    const handleMealCategory = (time) => {
        const value = meals.filter(meal => meal.f_menu_time.toLowerCase().includes(time.toLowerCase()))
        setSearchMeal(value)
    }

    const active = searchMeal.find(meal=> meal.f_menu_time)
    return (
        <div>
            <div
                className="banner-bg"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <div className="conatiner">
                    <div className="banner-text text-center">
                        <div>
                            <h1 className="text-danger fw-bolder">
                                Best food waiting for your belly
                            </h1>
                            <div className="input-group mb-3 mt-4">
                                <input
                                    type="text"
                                    className="w-50 mx-auto p-2 rounded-pill position-relative text-center"
                                    placeholder="Search food items"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    onChange={handleDisplayFood}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container w-50 mt-3 pt-3">
                <div className="d-flex justify-content-evenly">
                    <p
                        className={
                            active?.f_menu_time === "breakfast"
                                ? "text-danger fw-bold text-decoration-underline"
                                : "fw-bold"
                        }
                        onClick={() => handleMealCategory("breakfast")}
                    >
                        Breakfast
                    </p>
                    <p
                        className={
                            active?.f_menu_time === "lunch"
                                ? "text-danger fw-bold text-decoration-underline"
                                : "fw-bold"
                        }
                        onClick={() => handleMealCategory("lunch")}
                    >
                        Lunch
                    </p>
                    <p
                        className={
                            active?.f_menu_time === "dinner"
                                ? "text-danger fw-bold text-decoration-underline"
                                : "fw-bold"
                        }
                        onClick={() => handleMealCategory("dinner")}
                    >
                        Dinner
                    </p>
                </div>
            </section>
            {/* ----- */}
            <div className="container">
                <Row xs={1} md={3} className="g-4 my-4">
                    {searchMeal.map((meal) => (
                        <Meal key={meal.id} meal={meal}></Meal>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Banner;