//singup
document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.querySelector("#signup-form");
    signUpForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const signupEmail = document.querySelector('#signup-email').value;
        const signupPassword = document.querySelector('#signup-password').value;

        try {
            await auth.createUserWithEmailAndPassword(signupEmail, signupPassword);
            signUpForm.reset();
            $('#signup-modal').modal('hide');
            console.log('Usuario creado exitosamente');
        } catch (error) {
            console.error('Error al crear el usuario:', error.message);
            // Aquí puedes mostrar el mensaje de error en el formulario de registro
        }
    });
});





//singin
document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector("#signin-form"); // Cambio de signUpForm a signInForm
    signInForm.addEventListener("submit", (e) => { // Cambio de signUpForm a signInForm
        e.preventDefault();
        const signInEmail = document.querySelector('#login-email').value; // Cambio de signipEmail a signInEmail
        const signInPassword = document.querySelector('#login-password').value; // Cambio de signipPassword a signInPassword

        console.log(signInEmail, signInPassword);
        auth.signInWithEmailAndPassword(signInEmail, signInPassword) // Cambio de singInWithEmailAndPassword a signInWithEmailAndPassword
            .then(UserCredential => {
                signInForm.reset();
                $('#login-modal').modal('hide') // Cambio de signip-modal a signin-modal

                console.log('signin'); // Cambio de signip a signin
            })
            .catch(error => {
                console.error('Error al ingresar al usuario:', error);
            });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.querySelector("#logout-confirm-btn");
    logoutBtn.addEventListener("click", () => {
        auth.signOut()
            .then(() => {
                $('#logout-modal').modal('hide');

                console.log('Usuario cerró sesión');
            })
            .catch(error => {
                console.error('Error al cerrar sesión:', error);
            });
    });
});

auth.onAuthStateChanged(user => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (user) {
        // Usuario autenticado
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        // Usuario no autenticado
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
});




    
