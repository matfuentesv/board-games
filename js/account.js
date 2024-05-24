
document.querySelector('.show-password-btn').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = 'Ocultar';
    } else {
        passwordInput.type = 'password';
        this.textContent = 'Mostrar';
    }
});
