import tw, { styled } from "twin.macro";
export const SpinnerContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.3);

    ${tw`
        fixed
        top-0
        right-0
        bottom-0
        left-0
        z-10
        flex
        justify-center
        items-center
    `}
`;

export const Spinner = styled.div`
    border: 8px solid;
    border-color: #000 transparent #555 transparent;
    ${tw`
        w-20
        h-20
        border-8
        rounded-full
        animate-spin
    `}
`;
