import {React, useRef, useState, useEffect, useContext } from 'react';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //  This useEffect will set the focus on the first input when component loads...This will happen the component loads.
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // This UseEffect will empty out any error message that we might have If the user changes the userState or PasswordState.So if the user changes anything in the input field, it will make the error message to disappear.

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const  handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }


  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                            />
                <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                {/*put router link here*/}
                <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
     )
}
   </>
  )
}

export default Login