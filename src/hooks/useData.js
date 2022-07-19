import React, { useEffect, useState } from 'react';

const useData = () => {
    const [meals, setMeals] = useState([])
    const [searchMeal, setSearchMeal] = useState([])

    useEffect( () => {
        fetch(
            "https://raw.githubusercontent.com/MdWahiduzzamanEmon/db.json/main/db.json"
        )
            .then(res => res.json())
            .then(data => {
                setMeals(data)
                setSearchMeal(data)
            })
    },[])
    return {
        meals,
        setMeals,
        searchMeal,
        setSearchMeal
    }
};

export default useData;