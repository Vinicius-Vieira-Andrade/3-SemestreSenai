import styled from "styled-components";

export const HeaderContainer = styled.View`
    justify-content: center;
    background-color: gold;
    height: 20%;
    shadow-color: 'black';
    shadow-offset:  20px 20px;
	shadow-opacity: 0.36;
	shadow-radius: 10px;
    elevation: 3;
    border-radius: 0 0 15px 15px;
`


export const HeaderContent = styled.SafeAreaView`
     align-items: center;
    justify-content: center; 
    /* background-color: brown; */
    height: 80%;
`


export const TextHeader = styled.Text`
    font-size: 20px;
    font-family: 'Roboto_500Medium';
`