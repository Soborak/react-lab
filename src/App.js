import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    // let email = 'smax@student.agh.edu.pl';
    const [email, setEmail] = useState('fracz@agh.edu.pl');


    function handleChange(event) {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handleClick() {
        alert(email);
    }

  function handleSubmit(event) {
    event.preventDefault();
    alert(email);
  }

    let message = " ";

    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 15) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

  return (

       <div>
         <h1>System do zapisów na zajęcia</h1>
         <h2>Twój e-mail to {email}</h2>
         <form onSubmit={handleSubmit}>
         {/*<input type="text" onChange={handleChange}/>*/}
      <input type="text" value={email} onChange={handleChange}/>
            <button onClick={handleClick}>Pokaż e-mail</button>
            <button type="submit">Wyślij</button>
         </form>
       </div>
    );

}

export default App;
