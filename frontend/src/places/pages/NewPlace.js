import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import './NewPlace.css'

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]:  {value: action.value} 
                }
            }
            default:
                return state;
    }
}

const NewPlace = () => {
   const [formState, dispatch] = useReducer(formReducer, {
       inputs: {
        //    title: {
        //        value: '',
        //    },
        //    discription: {
        //        value: '',
        //    },
        //    address: {
        //        value:''
        //    }
       }
   });

   const inputHandler = useCallback((id, value) => {
       dispatch({
           type: 'INPUT_CHANGE',
           value: value,
           inputId: id
       });
   }, []);

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