import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useState } from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    // Sua lógica vai aqui
    const [mensagem, setMensagem] = React.useState("");
    const [listaMensagens, setListaMensagens] = useState([]);

    function handleNovaMensagem(novaMensagem) {
        const mensagem = { // cria objeto e passa a mensagem como parametro
            id: listaMensagens.length + 1,
            de: 'evansouzaa',
            texto: novaMensagem
        }
        setListaMensagens([ // manda um array com os proprios itens
            mensagem, // adiciona outro item no array { um objeto }
            ...listaMensagens // ...espalha os itens do proprio array   
        ])
    }

    // ./Sua lógica vai aqui
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundImage: `url(https://wallpapercave.com/wp/wp2284535.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    marginTop: '130px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '70%',
                    maxHeight: '60vh',
                    padding: '20px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaMensagens} /> {/*passa como parametro mensagens*/}
                    <Box
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault()
                            handleNovaMensagem(mensagem)
                            setMensagem("")
                        }}
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            onChange={function (event) {
                                event.preventDefault()
                                setMensagem(event.target.value);
                            }}
                            onKeyPress={function (event) {
                                if (event.key === "Enter") {
                                    event.preventDefault()
                                    handleNovaMensagem(mensagem)
                                    setMensagem("")
                                }
                            }}
                            placeholder="Digite sua mensagem..."
                            type="textarea"
                            value={mensagem}
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button
                            type='submit'
                            label='Enviar'
                            styleSheet={{
                                width: '70px',
                                height: '40px',
                                marginBottom: '8px'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{
                width: '100%',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }} >
                <Text variant='heading5'>
                    Chat SpaceX privado
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    const [prop, setDel] = React.useState({})
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map(function (mensagem) {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/evansouzaa.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            <Button
                                onClick={function (evento) {
                                    const msgDeletada = props.mensagens.filter(function (valor, index, array) {
                                        return array.splice(index, 1)
                                    })
                                    console.log({ mensagens: msgDeletada })
                                    setDel({ mensagens: msgDeletada })
                                }}
                                label='X'
                                styleSheet={{
                                    width: '8px',
                                    height: '8px',
                                    marginLeft: '90%'
                                }}
                            />
                        </Box>
                        {mensagem.texto}
                    </Text>
                )
            })}

        </Box>
    )
}