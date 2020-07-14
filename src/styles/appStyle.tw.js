import styled from "styled-components";

export const PageContainer = styled.div.attrs({
    className: "bg-white rounded-t-lg overflow-hidden border-t border-m border-r border-gray-400 p-4 p-10 flex justify-center"
})``;

export const HeaderContainer = styled.div.attrs({
    className: "max-w-sm rounded overflow-hidden shadow-lg"
})``;
export const HeaderImage = styled.img.attrs({
    className: "w-full",
    src:'https://tailwindcss.com/img/card-top.jpg',
})``;

export const ContentContainer = styled.div.attrs({
    className: "px-6 py-4"
})``;

export const ContentHeading = styled.div.attrs({
    className: "font-bold text-xl mb-2"
})``;

export const ContentText = styled.p.attrs({
    className: "text-gray-700 text-base"
})``;

