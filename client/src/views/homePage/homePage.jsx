import './homePage.css';
import FilterBar from '../../component/filterBar/filterBar';
import Cards from '../../component/cards/cards';

function HomePage() {
    return(
        <div className='container-home'>
            <FilterBar/>
            <Cards/>
        </div>
    )
}

export default HomePage;