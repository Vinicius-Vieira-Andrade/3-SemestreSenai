import { Button, ButtonTitle } from "../../components/Botao/style"
import { CloseButton } from "../../components/CloseButton/Index"
import { Container } from "../../components/Container/style"
import { LinkDown } from "../../components/ContentAccount/style"
import { Input } from "../../components/Input/style"
import { Icon, Logo } from "../../components/Logo/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Titulo/style"

export const CreateAccount = ({ navigation }) => {
    return (
        <Container>
            {/* <Icon source={require("../../assets/icons/Group170.png")}/> */}

            <Logo source={require("../../assets/images/VitalHub_Logo 1.png")} />

            <Title>Criar conta</Title>
            <Text>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Text>

            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirma Senha" />

            <Button>
                <ButtonTitle onPress={() => navigation.replace('Login')}> Cadastrar</ButtonTitle>
            </Button>

            <LinkDown onPress={() => navigation.replace('Login')}>Cancelar</LinkDown>




        </Container>

    )

}