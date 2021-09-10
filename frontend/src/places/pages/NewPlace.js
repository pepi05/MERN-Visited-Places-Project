import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import './NewPlace.css'

const NewPlace = () => {
    const titleInputHandler = (id, value, isValid) => {

    }

    return <form className="place-form">
        <Input 
            type="text" 
            label="Title" 
            element="input" 
            errorText="please enter valid title" 
            onChange={titleInputHandler}
        />
    </form>
};

export default NewPlace;