import React from 'react';
import { Button, TextField } from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <TextField label="Login" variant="outlined"/>
            <TextField label="Password" variant="outlined" type="password"/>
            <Button>Login</Button>
        </div>
    );
}

export default App;
