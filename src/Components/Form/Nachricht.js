import React from "react";
import { useForm } from "react-hook-form";



export default function App() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        console.log('Submit event', e)
        alert("Vielen Dank für deine Nachricht, Wir melden uns so schnell wie möglich bei dir =)")
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input name="firstName" ref={register} />
            <input name="lastName" ref={register} /> */}
            <button type="submit">Senden</button>
        </form>
    )
}
