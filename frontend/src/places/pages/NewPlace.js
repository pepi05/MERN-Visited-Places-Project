import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import './PlaceForm.css'



const NewPlace = () => {
    const [formState, inputHandler] = useForm(
    {
        title: {
            value: '',
        },
        description: {
            value: '',
        },
        address: {
            value: '',
        }
    });



   const placeSubmitHandler = (event) => {
       event.preventDefault();
       console.log(formState.inputs);
   }


    return <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
            id="title" 
            element="input" 
            type="text" 
            label="Title" 
            onChange={inputHandler}
        />
            <Input
            id="description" 
            element="textarea"  
            label="Description" 
            onChange={inputHandler}
        />
            <Input
            id="address" 
            element="input"  
            label="address" 
            onChange={inputHandler}
        />
        <Button type="submit">
            ADD PLACE
        </Button>
    </form>
};

export default NewPlace;