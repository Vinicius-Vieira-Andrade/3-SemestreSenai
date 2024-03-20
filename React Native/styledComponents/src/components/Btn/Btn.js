import styled from "styled-components";

export const Decrement = styled.TouchableOpacity`
margin-bottom: 30px;
border-width: 1px;
border-radius: 8px;
background-color: black;
width: 30%;
height: 50px;
align-items: center;
justify-content: center;
`

export const Increment = styled(Decrement)`
    background-color: pink;
    margin-top: 20px;
    border-color: pink;
`