import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Universo Prompts",
    description: 'Descubre y comparte Prompts para IA'
}

const RootLayout = ({children}) => {
  return (
    <html lang='es'>
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favs/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favs/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favs/favicon-16x16.png"/>
            <link rel="manifest" href="/assets/favs/site.webmanifest"/>
        </head>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;