import { ScrollView } from "react-native";
import {
  Container,
  InfoContainer,
  UserBoxInput,
} from "../../components/Container/style";
import { ImageBox } from "../../components/Image/Image";
import { BoxUserInput, InputUser } from "../../components/Input/style";
import {
  Label,
  LabelCepCity,
  LabelDate,
  TextEmail,
} from "../../components/Text/style";
import { TitleUser } from "../../components/Titulo/style";
import {
  Button,
  ButtonEdit,
  ButtonExitApp,
  ButtonTitle,
} from "../../components/Botao/style";
import { InputUserSquare } from "./Index";

import {
  BoxFooter,
  FooterText,
  FooterTextSelected,
  OptionsFooter,
  OptionsFooterSelected,
} from "../../components/FooterComponent/style";

import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const PerfilUser = ({navigation}) => {
  return (
    <ScrollView>
      <Container>
        <ImageBox source={require("../../assets/images/Rectangle426.png")} />

        <InfoContainer>
          <TitleUser>Richard Kosta</TitleUser>
          <TextEmail>richard.kosta@gmail.com</TextEmail>
        </InfoContainer>

        <LabelDate>Data de Nascimento:</LabelDate>
        <InputUser />

        <Label>CPF</Label>
        <InputUser />

        <Label>Endereço</Label>
        <InputUser />

        <UserBoxInput>
          <BoxUserInput>
            <LabelCepCity>Cep</LabelCepCity>
            <InputUserSquare
              placeHolder="00000-000"
              containerWidth={144}
              maxLength={9}
              keyType="numeric"
            />
          </BoxUserInput>

          <BoxUserInput>
            <LabelCepCity>Cidade</LabelCepCity>
            <InputUserSquare placeHolder="Cidade" containerWidth={144} />
          </BoxUserInput>
        </UserBoxInput>
        <Button>
          <ButtonTitle onPress={() => navigation.replace("Paciente Prontuario")}>Salvar</ButtonTitle>
        </Button>

        <ButtonEdit>
          <ButtonTitle>Editar</ButtonTitle>
        </ButtonEdit>

        <ButtonExitApp>
          <ButtonTitle>Sair do app</ButtonTitle>
        </ButtonExitApp>

        {/* <BoxFooter>
          <OptionsFooterSelected>
            <FontAwesome6 name="calendar-days" size={22} color="#607EC5" />
            <FooterTextSelected>Agenda</FooterTextSelected>
          </OptionsFooterSelected>

          <OptionsFooter>
            <MaterialCommunityIcons
              name="hospital-building"
              size={22}
              color="black"
            />
            <FooterText>Clínicas</FooterText>
          </OptionsFooter>

          <OptionsFooter>
            <FontAwesome6 name="circle-user" size={22} color="black" />
            <FooterText>Perfil</FooterText>
          </OptionsFooter>
        </BoxFooter> */}
      </Container>
    </ScrollView>
  );
};
