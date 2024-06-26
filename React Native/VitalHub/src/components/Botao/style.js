import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    background-color: #496BBA;
    border-radius: 5px;
    height: 53px;
    width: 90%;
    justify-content: center;
    border: 1px solid #496BBA;
    margin-top: 33px;
`

export const ButtonEditable = styled(Button)`
    background-color: #ACABB7;
    border: 1px solid #ACABB7;
`

export const ButtonExitApp = styled(ButtonEditable)`
    width: 189px;
    margin-bottom: 50px;
`

export const ButtonSelect = styled(Button)`
    align-self: center;
`

export const ButtonTitle = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    
`
export const ButtonGoogle = styled(Button).attrs({})`
    background-color: #FAFAFA;
    border: #496BBA;
    margin-top: 15px;
    flex-direction: row;
    gap: 27;
    align-items: center;
`

export const GoogleTitle = styled(ButtonTitle).attrs({})`
    color: #496BBA;
`

export const ButtonEdit = styled(Button)`
    margin-bottom: 10px;
`

export const ButtonSelected = styled(Button)`
    width: 100px;
    height: 39px;
`


export const ButtonUnselected = styled(Button)`
     width: 100px;
    height: 39px;
    background-color: #ffffff;
    border: 2px solid #607EC5;
`

export const TitleSelected = styled(ButtonTitle)`
    font-size: 12px;
`

export const TitleUnselected = styled(ButtonTitle)`
    font-size: 12px;
    color: #607EC5;
`

export const ModalButton = styled(Button)`
    width: 80%;
`
export const ButtonSecundary = styled.TouchableOpacity`
   background-color: white;
`
export const ButtonSecundaryText = styled.Text`
 text-transform: capitalize;
 text-decoration: underline;
 color: #344F8F;
 margin: 20px 0;
`

