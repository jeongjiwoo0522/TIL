import styled from "@emotion/styled";
export const Block = styled.blockquote`
    background: #fafafa;
    margin: 2rem 0px;
    border-left: 4px solid #005cc5;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 1rem 1rem 1rem 2rem;
    & > p{
        color: #212529;
        margin-bottom: 5px;
    }
    &>:last-child{
        margin-bottom: 0px;
    }
`