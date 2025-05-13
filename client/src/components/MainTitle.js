

const MainTitle = ({title}) => {
    return (
        <>

        <h1 className='main-title text-center text-capitalize mt-4'>
                {title}
        </h1>
        <h2 className='text-center fs-5' >
                Choissisez votre artisan et cliquez sur ses informations.
        </h2>
        <hr className='main-hr'/>
        </>
    )
};

export default MainTitle;