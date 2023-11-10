//posts
const postList = document.querySelector('.posts');

const setupPost = data => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {        
            const post = doc.data();
            const li = `
                <li class="list-group-item list-group-item-action">
                    <h5>${post.title}</h5>
                    <p>${post.description}</p>
                </li>`;
            html += li;
        });
        postList.innerHTML = html;
    } else {
        // Aplica la clase CSS al mensaje
        postList.innerHTML = '<p class="text-center login-message">Ingresa con tu usuario para ver el foro.</p>';
    }
};
// Listens for auth state changes
auth.onAuthStateChanged(user => {
    if (user) {
        fs.collection('post2') // Cambiar 'post' a 'post2'
            .get()
            .then(snapshot => {
                console.log(snapshot.docs);
                setupPost(snapshot.docs);
            });

        console.log('User signed in');
    } else {
        setupPost([]);
        console.log('User signed out');
    }
});

// Escucha el evento submit del formulario
const postForm = document.getElementById("post-form");
postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const postTitle = document.getElementById("post-title").value; // Agrega este campo
    const postContent = document.getElementById("post-content").value;

    const user = auth.currentUser;
    if (user) {
        fs.collection("post2") // Cambiar 'post' a 'post2'
            .add({
                title: postTitle, // Usa el título ingresado
                description: postContent
            })
            .then(() => {
                console.log("Post agregado correctamente");
                postForm.reset();
            })
            .catch((error) => {
                console.error("Error al agregar el post:", error);
            });
    } else {
        console.log("Usuario no autenticado, no se puede agregar el post");
    }
});

// Verifica si el usuario está autenticado
auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("post-form-container").style.display = "block";
        console.log('User signed in');
    } else {
        document.getElementById("post-form-container").style.display = "none";
        console.log('User signed out');
    }
});
