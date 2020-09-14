import React from 'react'
import './login.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

class Utente {
	constructor(email, hash, salt) {
		this.email = email;
		this.hash = hash;
		this.salt = salt;
	}
}
const sha512 = require('js-sha512');

export default function Login(){
    const creaUtenteDef = () => {
        const utente = JSON.parse(window.localStorage.getItem('user'));
        if (utente === null) {
            const marco = new Utente("marcoaiello@gmail.com", sha512('aaaa' + 49), 49);
            window.localStorage.setItem('user', JSON.stringify(marco));
            return marco;
        } else {
            return utente;
        }
    }

    useEffect(()=>{
        creaUtenteDef();
    },[])

    const utente = creaUtenteDef();
    const[noval,setNoval] = useState(false);
    console.log(noval)
    const history = useHistory();
    const checkLogin = (ev) => {
        ev.preventDefault();
        console.log("sha512 ",sha512(ev.currentTarget.password.value + utente.salt));
        console.log("hash ",utente.hash);
        if(ev.currentTarget.email.value === utente.email && sha512(ev.currentTarget.password.value + utente.salt) === utente.hash){
            window.sessionStorage.setItem('user',JSON.stringify(utente));
            history.go("/");
        }else{
            setNoval(true)
            ev.currentTarget.reset();
        }
    }

    return(
        <div className="box-login d-flex flex-column">
          <form  onSubmit={checkLogin} className="form-group m-auto">
              <div className="login__group">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="login__group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
              </div>
              <div className="d-flex flex-column mt-3">
                  <input type="submit" className="btn btn-primary ml-auto" value="Login"/>
              </div>
          </form>    

      </div>
    )
}