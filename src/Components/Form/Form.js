import React from 'react';
import './form.css';
import FormItem from './FormItem';
import FadeIn from 'react-fade-in';
// import FadeIn from 'react-fade-in';

const Form = () => {
    return (
        <main className="helfen">
            <h1 className="wirhelfen">Hi, wie <br></br>können wir <br></br>dir <span className="cool">helfen?</span></h1>
            <h2 className="superhilfe">Du erreichst uns am besten an den folgenden Tagen<br></br>
             und Zeiten:<br></br><br></br>Montag - Freitag<br></br>09.00 - 17.00 Uhr<br></br>
                <br></br><br></br>Unser Campus befindet sich im Super7000<br></br>Coworking Space -
             der Mutter aller CoworkingSpaces.<br></br>Die genaue Adresse lautet: <br></br>
                <br></br>Ratherstraße. 25 <br></br>40476 Düsseldorf</h2>
            <FormItem />
        </main>
    );
}

export default Form;