

const MainTitle = ({title}) => {
    return (
        <>

        <h1 className='main-title text-center text-capitalize mt-4'>
                {title}
        </h1>
        <p className='text-center' >
                Choissisez votre artisan et cliquez sur ses informations.
        </p>
        <hr className='main-hr'/>
        </>
    )
};

export default MainTitle;