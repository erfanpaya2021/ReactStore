import React from "react";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { Button } from "../../styles";

import * as styles from "./Home.styled";

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const navigateToShopHandler = () => {
        navigate("/products");
    };

    return (
        <styles.Home>
            <styles.HeroTextContainer>
                <h2>ReactStore</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusantium sit fugiat, mollitia repellendus quas qui quia
                    voluptatum. Repellendus consequatur magni repudiandae
                    impedit illum voluptatum vel sequi, culpa laudantium
                    consequuntur accusamus.
                </p>
                <Button onClick={navigateToShopHandler}>
                    Go to shop <FaAngleRight tw="md:text-lg" />
                </Button>
            </styles.HeroTextContainer>
            <styles.HeroImage></styles.HeroImage>
        </styles.Home>
    );
};
