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

    const sliderData = [
        { id: "1", title: "1", image: "1" },
        { id: "2", title: "2", image: "2" },
        { id: "3", title: "3", image: "3" },
        { id: "4", title: "4", image: "4" },
    ];

    return (
        <styles.Home>
            <styles.HeroSection>
                <styles.HeroTextContainer>
                    <h2>ReactStore</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusantium sit fugiat, mollitia repellendus quas
                        qui quia voluptatum. Repellendus consequatur magni
                        repudiandae impedit illum voluptatum vel sequi, culpa
                        laudantium consequuntur accusamus.
                    </p>
                    <Button onClick={navigateToShopHandler}>
                        Go to shop <FaAngleRight tw="md:text-lg" />
                    </Button>
                </styles.HeroTextContainer>
                <styles.HeroImage></styles.HeroImage>
            </styles.HeroSection>
        </styles.Home>
    );
};
