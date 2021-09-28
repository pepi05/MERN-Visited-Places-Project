import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: "Empire State Building",
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat:40.7484405,
            lng:-73.9878584
        },
        creator: 'u2'
    },
]

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: ''
        },
        description: {
            value: ''
        }
    })

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        setFormData({
            title: {
                value: identifiedPlace.title
            },
            description: {
                value: identifiedPlace.description
            }
        })
    }, [setFormData, identifiedPlace]);
    

    const placeUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return (
            <div>
                <Card>
                <h2>Could not find place.</h2>
                </Card>
            </div>
        )
    };

    if (!formState.inputs.title.value) {
        return (
            <div>
            <h2>Loading...</h2>
        </div> 
        )
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id="title"
                element="input"
                type="text"
                label="Title"
                onChange={inputHandler}
                value={formState.inputs.title.value}
            />
            <Input 
                id="description"
                element="textarea"
                label="Description"
                onChange={inputHandler}
                value={formState.inputs.description.value}
            />
            <Button type="submit">
                UPDATE PLACE
            </Button>
        </form>
        )
}

export default UpdatePlace;