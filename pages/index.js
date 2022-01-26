import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import appConfig from '../config.json';


function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['100']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
    const [username, setUsername] = useState("evansouzaa") //valor passado é default utilizando set state do react
    const router = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundImage: 'url(https://wallpapercave.com/wp/wp2284535.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                {/* <Box
                as='video'
                type='video/mp4'
                autoplay=''
                loop=''
                src='https://www.desktophut.com/wp-content/uploads/2021/12/SpaceX-Falcon-9-Rocket-Takeoff-and-Landing-4K-Live-Wallpaper.mp4'
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'green',
                    width: '100%',
                    height: '100%',
                    top: '0',
                    bottom: '0',
                    position: 'fixed',
                }}
            > */}

                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '600px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.primary[100],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function(event){
                            event.preventDefault()
                            router.push('/chat')
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Bem vindo Astronauta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
                            {`${appConfig.name}  ${username}`}
                        </Text>

                        <TextField
                            fullWidth
                            onChange={function(event){
                                const valor = event.target.value;
                                if(valor.length > 2) setUsername(valor)
                            }}
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.primary[100],
                                    mainColor: appConfig.theme.colors.neutrals[100],
                                    mainColorHighlight: appConfig.theme.colors.primary[100],
                                    backgroundColor: appConfig.theme.colors.neutrals[400],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["100"],
                                mainColor: appConfig.theme.colors.primary[200],
                                mainColorLight: appConfig.theme.colors.primary[300],
                                mainColorStrong: appConfig.theme.colors.primary[400],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.primary[300],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[100],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.primary[200],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}