// Handles register and login view functionality

function login(handleInput, passwordInput){
    console.log(`Attempting to log in with handle: ${handleInput} & password: ${passwordInput}`);
}

function register(handleInput, passwordInput, confirmPasswordInput){
    if(passwordInput === confirmPasswordInput){
        console.log(`Attempting to register with the handle: ${handleInput} & password: ${passwordInput}`);
    }
}