import Logo from './Logo'

function NavBar()
{
    return (
        <>
           <div className='w-full bg-stone-400 h-[24vh] rounded-r-[40px] flex align-center'>
                <Logo/>
           </div>
        </>
    );
}

export default NavBar;