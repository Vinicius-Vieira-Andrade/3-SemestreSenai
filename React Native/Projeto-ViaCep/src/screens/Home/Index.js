import { BoxInput } from "../../components/BoxInput/Index";
import { ContainerForm, ScrollForm } from "./styles";
import { ContainerInput } from "../../components/BoxInput/style";
import { useEffect, useState } from "react";
import api from "../../Services/Services";

export function Home() {
    const [cep, setCep] = useState("");
    const [data, setData] = useState({
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null,
        uf: null
    });


    async function chamaCep() {
        try {
            const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
            const dados = await response.data;
            setCep(dados.cep)
            setData({ logradouro: dados.logradouro, bairro: dados.bairro, cidade: dados.localidade, estado: dados.uf, uf: dados.uf })
        } catch (error) {
            console.warn("Erro na API")
        }

    }

    useEffect(() => {
        if (cep.length === 8 && cep != "") {
            chamaCep();
        }
    }, [cep])




    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informar CEP"
                    placeholder='CEP...'
                    keyType="numeric"
                    editable={true}
                    maxLength={8}
                    onChangeText={(e) => setCep(e)}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder='Logradouro...'
                    fieldValue={data.logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder='Bairro...'
                    fieldValue={data.bairro}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder='Cidade...'
                    fieldValue={data.localidade}
                />
                <ContainerInput>
                    <BoxInput
                        textLabel="Estado"
                        placeholder='Estado...'
                        fieldWidth={60}
                        fieldValue={data.estado}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder='UF...'
                        fieldWidth={30}
                        fieldValue={data.uf}
                    />
                </ContainerInput>

            </ContainerForm>
        </ScrollForm>
    )
}