import React from 'react';
import './form.css';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}><h1 className="">Hi, wie können wir dir helfen?</h1>
            <input type="text" placeholder="VORNAME" name="VORNAME" ref={register({ required: true, maxLength: 80 })} />
            <br></br>
            <input type="text" placeholder="NAME" name="NAME" ref={register({ required: true, maxLength: 100 })} />
            <br></br>
            <input type="email" placeholder="EMAIL" name="EMAIL" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
            <br></br>
            <input type="tel" placeholder="TELEFONNUMMER" name="TELEFONNUMMER" ref={register({ required: true, maxLength: 22 })} />
            <br></br>
            <textarea name="NACHRICHT" placeholder="NACHRICHT" ref={register({ required: true, maxLength: 1000 })} />
            <br></br>
            <input type="submit" />
        </form>
    );
}