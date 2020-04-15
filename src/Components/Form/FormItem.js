import React from 'react';
import './form.css';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1>Hi, Wie können wir dir helfen?</h1><h2>Du erreichst und am besten an den folgenden Tagen und Zeiten:
            <br></br>Montag - Freitag<br></br>09.00 - 17.00 Uhr<br></br>Super7000 - Coworking Space<br></br>Ratherstraße. 25
            <br></br>40476 Düsseldorf</h2>
            <input type="text" placeholder="VORNAME" name="VORNAME" ref={register({ required: true, maxLength: 80 })} />
            <br></br>
            <input type="text" placeholder="NAME" name="NAME" ref={register({ required: true, maxLength: 100 })} />
            <br></br>
            <input type="email" placeholder="EMAIL" name="EMAIL" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
            <br></br>
            <input type="tel" placeholder="TELEFONNUMMER" name="TELEFONNUMMER" ref={register({ required: true, maxLength: 22 })} />
            <br></br>
            <textarea name="NACHRICHT" placeholder="Deine Nachricht" ref={register({ required: true, maxLength: 1000 })} />
            <br></br>
            <input type="submit" />
        </form>
    );
}
//Hi, Wie können wir dir helfen?

//Du erreichst und am besten an den folgenden Tagen und Zeiten:

//Montag - Freitag
//09.00 - 17.00 Uhr

//Unser Campus befindet sich im Super7000
//Coworking Space - der Mutter aller Coworking
//Spaces. Die genaue Adresse lautet:

//Super7000 - Coworking Space
//Ratherstraße. 25
//40476 Düsseldorf