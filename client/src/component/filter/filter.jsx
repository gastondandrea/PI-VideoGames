import "./filter.css"

function Filter(){
    return(
        <div className='container-filter'>
            <label>Filter:</label>
            <select name="filter-genres" defaultValue="defect" id="filter-genres">
                <option value="defect">-</option>
                <option value="action">Action</option>
                <option value="aventure">Aventure</option>
            </select>
            <select name="filter-source" defaultValue="defect" id="filter-source">
                <option value="defect">-</option>
                <option value="api">API</option>
                <option value="bbdd">BBDD</option>
            </select>
        </div>
    )
}

export default Filter;