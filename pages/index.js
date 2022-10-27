import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router'
import appConfig from '../config.json';


function Titulo(props) {

    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: '#ffffff';
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    )

}

  

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Welcome to Next.js!</Titulo>
//         </div>
//     )

// }

// export default HomePage

export default function PaginaInicial() {
    //const username = '';
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const roteamento = useRouter();
    //const [disableUsername, setDisableUserName] = React.useState();
    //const direcionamento = [];

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '',
                    backgroundImage: 'url(https://saygo.com.br/wp-content/uploads/2022/08/notebook-hand-pen-2178656.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '20px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: 'rgba(31, 36, 68, 0.8)',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (eventclick){
                            eventclick.preventDefault();
                            roteamento.push('/chat')
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >

                        <Image
                            styleSheet={{
                                width: '240px',
                                height: '100px',
                                marginBottom: '20px',
                            }}
                            src={`https://saygo.com.br/wp-content/uploads/2022/08/SayGo-Completo-Horizontal-Fundo-Azul-e1665454517879.png`}
                        />

                        <TextField
                            fullWidth
                            placeholder='User Name'
                            value={username}
                            //disabled={disableUsername}
                            onChange={function (eventuser){
                                const valor = eventuser.target.value;
                                setUsername(valor);
                            }}
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            placeholder='Password'
                            type='password'
                             value={password}
                             onChange={function (eventpass){
                                 const valor = eventpass.target.value;
                                 setPassword(valor);
                             }}
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            styleSheet={{
                                marginTop: '20px',
                            }}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: '#cb9e22',
                                //mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: '#7A5F15',
                            }}
                            // onClick={function travabotao(username){
                            //     const numerocaracter = username.target.value
                            //     if ((numerocaracter.length) > 2){
                            //         direcionamento.push('/chat')
                            //     } else {
                            //         alert("beeeeeeeeeeeeeennnnnnnn!!!!");
                            //         setDisableUserName(username);
                            //     }
                            // }}                 
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
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
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
                                backgroundColor: appConfig.theme.colors.neutrals[900],
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