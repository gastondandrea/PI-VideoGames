import './homePage.css';
import FilterBar from '../../component/filterBar/filterBar';
import Cards from '../../component/cards/cards';
import Pages from '../../component/pages/pages'

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames, setIsSeach } from "../../redux/actions/actions";
import Spinner from '../../component/spinner/spinner';


function HomePage() {
    // estado de carga
    const isLoading = useSelector((state) => state.isLoading);
    const isSeach = useSelector((state) => state.isSeach);
    const allVideogames = useSelector((state) => state.allVideogames);
    // Dispatch
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllVideogames());
    }, [dispatch]);


    // Paginación
    // Page actual
    const [currentPage, setCurrentPage] = useState(1);
    
    //candidad de card por pagina
    const itemsPerPage = 15;
    // ultimo card
    const indexOfLastItem = currentPage * itemsPerPage;
    // primer card
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //cards actuales
    const currentItems = allVideogames.slice(indexOfFirstItem, indexOfLastItem);

    // Restablecer la página actual cuando cambian los datos filtrados
    useEffect(() => {
        const totalItems = allVideogames.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        if (currentPage > totalPages) {
            setCurrentPage(1); // Ajusta la página a 1 si la página actual es inválida
        }
    }, [allVideogames, currentPage, itemsPerPage]);
    
    const onClose = () =>{
        dispatch(getAllVideogames());
        dispatch(setIsSeach(false));
    }

    return(
        <div className='container-home'>
            <FilterBar/>
            {isLoading ? (
                <div className="loading-indicator">
                    <Spinner />
                </div>
            ) : (
                <>
                    <Cards allVideogames={currentItems} /> 
                    {isSeach ? <button className='cerrar_button' onClick={()=>onClose()}>x</button> : null}
                    <Pages 
                        totalItems={allVideogames.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </>
            )}
        </div>
    )
}

export default HomePage;