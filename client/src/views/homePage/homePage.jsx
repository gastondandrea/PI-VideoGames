import './homePage.css';
import FilterBar from '../../component/filterBar/filterBar';
import Cards from '../../component/cards/cards';
import Pages from '../../component/pages/pages'

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions/actions";


function HomePage() {
    const allVideogames = useSelector((state) => state.allVideogames);

    // Dispatch
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getAllVideogames());
	}, [dispatch]);

    // Paginación
    // Page actual
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 15;
    // ultimo indice
    const indexOfLastItem = currentPage * itemsPerPage;
    // primer indice
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //pages actuales
    const currentItems = allVideogames.slice(indexOfFirstItem, indexOfLastItem);
    //Set page actual
	const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return(
        <div className='container-home'>
            <FilterBar/>
            <Cards allVideogames={currentItems}/>
            <Pages totalItems={allVideogames.length}
				itemsPerPage={itemsPerPage}
				onPageChange={paginate}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default HomePage;