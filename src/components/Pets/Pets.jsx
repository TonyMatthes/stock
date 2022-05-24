import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PetItem from './PetItem'

function Pets() {
    const dispatch = useDispatch();

    // Grab pets from state
    const pets = useSelector(store => store.pets);

    useEffect(() => {
        dispatch({
            type: 'FETCH_PETS'
        });
    }, []);

    return (
        <>
            <h1>Pets component</h1>

            <h2>Check out all my awesome saucesome pets</h2>
            <ul>
                {pets.map(pet => (
                    <PetItem key={pet.id} pet = {pet}/>
                ))}
            </ul>
        </>
    )
}

export default Pets;