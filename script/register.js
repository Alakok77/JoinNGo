document.addEventListener('DOMContentLoaded', () => {
    let isLogin = false;

    const formSubtitle = document.getElementById('form-subtitle');
    const formTitle = document.getElementById('form-title');
    const toggleMsg = document.getElementById('toggle-msg');
    const toggleAction = document.getElementById('toggle-action');
    const nameFields = document.getElementById('name-fields');
    const createBtn = document.querySelector('.create');

    toggleAction.addEventListener('click', () => {
        isLogin = !isLogin;

        if (isLogin) {
            formSubtitle.textContent = 'WELCOME BACK';
            formTitle.textContent = 'Back to your trips';
            toggleMsg.textContent = 'New here?';
            toggleAction.textContent = 'Create an account';
            nameFields.classList.add('hidden');
            createBtn.textContent = 'Login';
        } else {
            formSubtitle.textContent = 'START FOR FREE';
            formTitle.textContent = 'Start Your Journey';
            toggleMsg.textContent = 'Already a member?';
            toggleAction.textContent = 'Log in';
            nameFields.classList.remove('hidden');
            createBtn.textContent = 'Create Account';
        }
    });
});
