import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
                    <li key={pet.id}>{pet.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Pets;