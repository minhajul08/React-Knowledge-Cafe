import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-auto max-w-6xl p-4 border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={Profile} alt="" />
        </header>
    );
};

export default Header;