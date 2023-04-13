import { useState } from 'react'
import './main.css'

const Main = () => {
  
    const generateid = (() => {
        let currentId = 1;
        return () => currentId++;
    })();

    const [videos, setVideos] = useState([
        {
            id:generateid(),
            name: "this is the first video",
            host: 'Cristian',
            view: Math.floor(Math.random() * 1000) + 1
        },
        {
            id:generateid(),
            name: "this is the second video",
            host: 'Cristian',
            view: Math.floor(Math.random() * 1000) + 1
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
            view:Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
            view:Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the first video",
            host: 'Cristian',
            view: Math.floor(Math.random() * 1000) + 1
        },
        {
            id:generateid(),
            name: "this is the second video",
            host: 'Cristian',
            view: Math.floor(Math.random() * 1000) + 1
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
            view:Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
            view:Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the first video",
            host: 'Cristian',
            view: Math.floor(Math.random() * 1000) + 1
        },
        {
            id:generateid(),
            name: "this is the second video",
            host: 'Cristian',
            view: Math.floor(Math.random() * 1000) + 1
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
            view:Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
            view:Math.floor(Math.random() * 1000) + 1 
        },
        {
            id:generateid(),
            name: "this is the ... video",
            host: 'Cristian',
             view: Math.floor(Math.random() * 1000) + 1 
        },
    ])

  
    return(
        <div className='Main'>
            {videos.map(videos =>
            <li className='video' key={videos.id}>
                <div className='Thumb'></div>
                <div className='Description'>
                    <div className='ProfileThumb'></div>
                    <div className='Desc'>
                        <h1>{videos.name}</h1>
                        <div className='DescAbout'>
                            <p>{videos.host}</p>
                            <p>{videos.view} Views</p>
                        </div>
                    </div>
                </div>
            </li>)

            }
        </div>
    )
}

export default Main