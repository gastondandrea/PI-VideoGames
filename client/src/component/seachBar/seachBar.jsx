import "./seachBar.css";
import { useState } from 'react';
import { getVideogamesByName } from "../../redux/actions/actions";
import { useDispatch } from 'react-redux';

function SeachBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (event)=>{
        event.preventDefault();
        setName(event.target.value);
    }

    const onSearch = (n) =>{
        dispatch(getVideogamesByName(n));
        setName("");
    }
    return(
        <div className='navbar-search'>
            <div className='icono-search'>
            <button onClick={()=>onSearch(name)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                    <path d="M17.9167 30.0833C24.9123 30.0833 30.5833 24.4123 30.5833 17.4167C30.5833 10.4211 24.9123 4.75 17.9167 4.75C10.9211 4.75 5.25 10.4211 5.25 17.4167C5.25 24.4123 10.9211 30.0833 17.9167 30.0833Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M33.75 33.25L26.8625 26.3625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            </div>
            <input className="input-search" type="text" placeholder='Search by name..' value={name} onChange={handleChange}/>
        </div>
    )
}

export default SeachBar;