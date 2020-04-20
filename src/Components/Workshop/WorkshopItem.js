import React, { Component } from 'react';
import "./workshop.css"


class WorkshopItem extends Component {
    state = { 
        open: true,
        text: "",
        backgroundColor: "#03000F",
     };
     
    handleClick = () => {
        this.setState({ open: !this.state.open });
        if(this.state.open) {
            this.setState({ text: "grid" });
            this.setState({ backgroundColor: "#5D3EDE"  });
            // this.setState({height: "50vh"})
        } else {
            this.setState({ text: "none" });
            this.setState({ backgroundColor: "#03000F"  });
            // this.setState({height: "0"})
        }
        
    }
    render() {
        return ( 
            <div className="coden-lernen">
                    <div>
                        <h3 onClick={this.handleClick} style={{ backgroundColor: this.state.backgroundColor}}>{this.props.name}</h3>
                    </div>
                <section className="klappentext" style={{ display: this.state.text}}>
                    <div>
                        <p>Tauche ein in die wundervolle Welt der Web-Entwicklung und mache bei uns dein Seepferdchen im Bereich HTML & CSS.</p>
                        <h4>Inhalte</h4>
                        <ul>
                            <li>Grundlagen zum Thema Web-Entwicklung</li>
                            <li>Übersicht der gängigsten Programmiersprachen</li>
                            <li>Grundlagen im Bereich HTML & CSS</li>
                        </ul>
                        <h4>Ziele</h4>
                        <ul>
                            <li>Du weißt was Web-Entwicklung bedeutet</li>
                            <li>Du kannst Web-Entwicklung von anderen IT Berufen abgrenzen</li>
                            <li>Du kennst die Grundlagen von HTML und CSS</li>
                            <li>Du kannst eine kleine eigene Webseite erstellen!! </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Trainer</h4>
                        <ul>
                            <li>Eric Noack</li>
                            <li>Maher Alhallak</li>
                            <li>Sergio Cardeal</li>
                        </ul>
                        <h4>Ort&Software</h4>
                        <p>Unser Workshop findet Online statt. Du musst aber nichts installieren benötigst keine extra Coding Software</p>
                    </div>
                    <div>
                        <h4>Technik</h4>
                        <p>Du benötigst keinen besonderen PC oder Laptop. Aber ein zweiter Monitor wäre ideal.</p>
                        <h4>Preis</h4>
                        <p>Dieser Workshop ist kostenlos. Die Tickets/Plätze sind allerdings stark limitiert</p>
                        <a href="https://www.eventbrite.de/o/supercode-gmbh-amp-co-kg-20262218583" target="_blank">ANMELDEN</a>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default WorkshopItem;