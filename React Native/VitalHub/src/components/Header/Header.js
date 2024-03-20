import { FontAwesome } from "@expo/vector-icons";
import {
  DoctorName,
  DoctorUser,
  HeaderContainer,
  HeaderContent,
  Welcome,
} from "./style";
import { ContentInfosDoc, DoctorBox } from "../Container/style";

export const HeaderConsult = ({ user, imagem, navigation }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <DoctorBox>
          <DoctorUser
            source={imagem.imagem}
          />
          <ContentInfosDoc onPress={() => navigation.replace("Tela de Usuário")} >
            <Welcome>Bem vindo</Welcome>
            <DoctorName>{user.nome}</DoctorName>
          </ContentInfosDoc>
        </DoctorBox>
        <FontAwesome name="bell" size={25} color="white" />
      </HeaderContent>
    </HeaderContainer>
  );
};
