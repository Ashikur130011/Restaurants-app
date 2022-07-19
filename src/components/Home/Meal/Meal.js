import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./Meal.css";

const Meal = ({ meal }) => {
    const { id, f_name, f_price,f_text, f_img, f_menu_time } = meal;
    const navigate = useNavigate()

    const foodDetails = () => {
        navigate(`./mealDetails/${id}`)
    }
    return (
        <>
            <Col>
                <Card className="f-card pb-3 border-0"
                onClick={foodDetails}
                >
                    <img className="w-50 img-fluid mx-auto my-3 " src={f_img} alt="" />
                    <h5 className="text-danger">{f_name}</h5>
                    <p>{f_text}</p>
                    <h5>$ {f_price}</h5>
                </Card>
            </Col>
        </>
    );
};

export default Meal;
