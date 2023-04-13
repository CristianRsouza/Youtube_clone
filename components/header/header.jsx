import './header.css'

const Header = () => {
    return(
        <div className='Header'>
            <div className='Logo'>
                <h1>Youtube-Clone</h1>
            </div>
            <div className='Input_Search'>
                <input type="text" placeholder='Pesquisar' />
            </div>
            <div className='Profile'></div>
        </div>
    )
}

export default Header