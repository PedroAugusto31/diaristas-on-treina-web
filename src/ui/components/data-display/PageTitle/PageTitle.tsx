import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitle } from './PageTitle.style'

interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {

    return (
    <PageTitleContainer> 
        <PageTitleStyled>{props.title}</PageTitleStyled>
       
       <PageSubtitle>
       {props.subtitle}
       </PageSubtitle>

       {props.children}
    </PageTitleContainer>
    );
}

export default PageTitle;