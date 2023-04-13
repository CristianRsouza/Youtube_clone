import { useState } from 'react'
import './navbar.css'

const NavBar = () => {
   
    const generateid = (() => {
        let currentId = 1;
        return () => currentId++;
    })();

const [inscricoes, setInscricoes] = useState([
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: false
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: false
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
    {
        id:generateid(),
        name: "canal" ,
        newVideo: true
    },
]);

   
    return(
        <div className='Navbar'>
            <div className='Navigation'>
                <h1 className='HasPage'>Inicio</h1>
                <h1>Shorts</h1>
                <h1>Incriçoes</h1>
                <hr />
                <h1>Biblioteca</h1>
                <h1>Historico</h1>
                <h1>Seus Videos</h1>
                <h1>Assistir mais tarde</h1>
                <hr />
                <div className='Inscricoes'>

                    <h2>Inscriçoes</h2>
                    {inscricoes.map(inscricoes => 
                    <li key={inscricoes.id}>
                        <h1 className={inscricoes.newVideo ? 'canal HasVideo': 'canal'}>{inscricoes.name}</h1>
                    </li>)

                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar