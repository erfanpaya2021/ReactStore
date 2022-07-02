import tw, { styled } from "twin.macro";
import Image from "../../assets/images/shopping.svg";

export const Home = styled.section`
    ${tw`
        flex flex-col-reverse justify-center items-center py-12 gap-8
        md:flex-row md:justify-around md:items-center
    `}
`;

export const HeroImage = styled.div`
    background-image: url(${Image});

    ${tw` 
        bg-local bg-contain bg-no-repeat bg-center w-full h-48
        sm:h-80 
        md:w-1/2 md:h-120
    `}
`;

export const HeroTextContainer = styled.div`
    ${tw`
        flex flex-col justify-center items-start space-y-4
        md:w-1/2
    `}

    & > h2 {
        ${tw`
        text-2xl font-extrabold 
        sm:text-3xl 
        md:text-4xl 
        `}
    }

    & > p {
        ${tw`
        text-sm font-normal 
        md:text-base 
        `}
    }
`;
