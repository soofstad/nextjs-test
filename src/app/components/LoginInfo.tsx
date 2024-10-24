'use client'

import {ReactNode, useContext} from "react";
import dynamic from 'next/dynamic'
import {AuthContext, TAuthConfig, TRefreshTokenExpiredEvent} from 'react-oauth2-code-pkce'

const AuthProvider = dynamic(() => import("react-oauth2-code-pkce")
    .then((mod) => mod.AuthProvider), {ssr: false})

const authConfig: TAuthConfig = {
    clientId: 'account',
    authorizationEndpoint: 'https://keycloak.ofstad.xyz/realms/master/protocol/openid-connect/auth',
    tokenEndpoint: 'https://keycloak.ofstad.xyz/realms/master/protocol/openid-connect/token',
    logoutEndpoint: 'https://keycloak.ofstad.xyz/realms/master/protocol/openid-connect/logout',
    redirectUri: 'http://localhost:3000/',
    onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => event.logIn('', {}, 'popup'),
    decodeToken: true,
    scope: 'profile openid',
    autoLogin: false,
}

function LoginInfo() {
    const {tokenData, token, idTokenData, logIn, error, loginInProgress} = useContext(AuthContext)
    if (loginInProgress) return null
    return (<>
            {error && <div style={{color: 'red'}}>An error occurred during authentication: {error}</div>}
            <>
                <button onClick={() => logIn()}>Log in w/redirect</button>
            </>
            {token ? (<>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div>
                            <h4>Login Information from Access Token</h4>
                            <pre
                                style={{
                                    width: '400px',
                                    margin: '10px',
                                    padding: '5px',
                                    border: 'black 2px solid',
                                    wordBreak: 'break-all',
                                    whiteSpace: 'break-spaces',
                                }}
                            >
                    {JSON.stringify(tokenData, null, 2)}
                  </pre>
                        </div>
                        <div>
                            <h4>Login Information from ID Token</h4>
                            <pre
                                style={{
                                    width: '400px',
                                    margin: '10px',
                                    padding: '5px',
                                    border: 'black 2px solid',
                                    wordBreak: 'break-all',
                                    whiteSpace: 'break-spaces',
                                }}
                            >
                    {JSON.stringify(idTokenData, null, 2)}
                  </pre>
                        </div>
                    </div>
                </>) : (<div style={{backgroundColor: 'red'}}>You are not logged in</div>)}
        </>)
}

export default function Login() {
    (<AuthProvider authConfig={authConfig}>
        <LoginInfo/>
    </AuthProvider>)
}