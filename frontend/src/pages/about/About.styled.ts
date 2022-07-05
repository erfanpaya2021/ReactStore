import tw, { styled } from "twin.macro";

export const AboutContainer = tw.section`mt-8 flex flex-col items-center`;
export const Title = tw.h2`font-bold text-4xl md:text-7xl lg:text-9xl`;
export const SubTitle = tw.h3`font-medium text-2xl md:text-5xl lg:text-7xl`;
export const SocialIcons = styled.div`
    ${tw`flex justify-center gap-4 mt-8`}

    & > a {
        ${tw`text-6xl sm:text-8xl
            hover:text-green-500
        `}
    }
`;
