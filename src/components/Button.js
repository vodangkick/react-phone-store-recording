import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:1px solid var(--lightBlue);
border-color:${props => props.cart ? "var--mainYellow" : "var(--lightBlue)"};
color:${props => props.cart ? "var--mainYellow" : "var(--lightBlue)"};
color:var(--lightBlue);
border-radius:4px;
padding:0.2rem 0.5rem;
curcor:pointer;
margin:0.2 0.4rem 0.2rem 0;
&:hover{
    background:${props => props.cart ? "var--mainYellow" : "var(--lightBlue)"};
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}
`;
