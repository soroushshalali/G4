import React, { Component } from 'react';
import "./workshop.css"


class Designworkshop extends Component {
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
                        <h3 className="online-workshop" onClick={this.handleClick} style={{ backgroundColor: this.state.backgroundColor}}>{this.props.name}</h3>
                    </div>
                <section className="klappentext" style={{ display: this.state.text}}>
                    <div>
                        <p>An vier Abenden lernst du alle Basics für die Erstellung eines modernen Web-Designs. Design Basics, UX & UI, Prototyping mit Figma bis hin zu Designthinking. Du lernst intensiv, schnell und ultra praxisorientiert - denn schon von Tag eins arbeitest du an deinem digitalen und funktionalen Prototypen.<br></br>Durch die praktische Anwendung wirst du die wichtigsten Themen aus dem Bereich Webdesign schnell verstehen</p><br></br>
                        <div className="Inhalte_Details">
                        <h4>Inhalte</h4>
                        <ul>
                            <li>Design Basics</li>
                            <li>UX & UI Basics</li>
                            <li>Prototyping</li>
                            <li>Designthinking</li>
                        </ul><br></br>
                        <h4>Details</h4>
                        <ul>
                            <li>Zeitraum: 02.06. - 23.06.2020</li>
                            <li>Wochentage: immer Dienstags</li>
                            <li>Uhrzeit: 18:00 - 21:00 Uhr</li>
                            <li>Lerneinheiten: 16 (je 45 Minuten)</li>
                            <li>Level: Anfänger*innen</li>
                        </ul>
                        </div>
                    </div>
                    <div>
                        <h4>Trainer</h4>
                        <ul>
                            <li>Ruben Wellinger</li>
                            <li>Sérgio Cardeal</li>
                        </ul><br></br>
                        <h4>Ort&Software</h4>
                        <p>Unser Workshop findet Online statt. Du musst aber nichts installieren benötigst keine extra Coding Software</p>
                    </div>
                    <div>
                        <h4>Technik</h4>
                        <p>Du benötigst keinen besonderen PC oder Laptop. Aber ein zweiter Monitor wäre ideal.</p>
                        <h4>Preis</h4>
                        <p>250,00€ zzgl. Gebühren</p>
                        <a href="https://www.eventbrite.de/o/supercode-gmbh-amp-co-kg-20262218583" target="_blank">ANMELDEN</a>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Designworkshop;