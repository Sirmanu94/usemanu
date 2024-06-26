import CookieConsent, { Cookies } from 'react-cookie-consent';
import { Link } from 'react-router-dom';

function Cookie(){

    return (
        <>
              <CookieConsent
        location="bottom"
        buttonText="Accetta"
        declineButtonText="Rifiuta"
        cookieName="myCookieConsent"
        style={{ background: "white", color : "black" }}
        declineButtonStyle={{ color: "white", background: "black", fontSize: "20px", borderRadius: "10px" }}
        buttonStyle={{ color: "white", background: "black",  fontSize: "20px", borderRadius: "10px" }}
        expires={150}
        enableDeclineButton
      >
        Questo sito utilizza i cookie per migliorare l'esperienza utente. Tratteremo i tuoi dati in maniera corretta e sicura. Per qualsiasi altra informazione{" "}
        <Link to="/termini" style={{ color: "red" }}>leggi la nostra politica sui cookies e sulla privacy.</Link>
      </CookieConsent>
        </>
    )
}

export default Cookie