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

    createBtn.addEventListener('click', async () => {
        const email = document.querySelector(".email").value;
        const password = document.querySelector(".password").value;
        const firstname = document.querySelector(".fname").value;
        const lastname = document.querySelector(".lname").value;

        const url = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';
        const data = isLogin ? { email, password } : { email, password, firstname, lastname };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
            const result = await response.json();
    
            if (response.ok) {
                alert(isLogin ? 'Login successful!' : 'Registration successful!');
    
                if (result.token) {
                    localStorage.setItem('token', result.token);
                }
    
                window.location.href = '/html/landingpage.html';
            } else {
                alert(result.error || 'An error occurred');
            }
    
        } catch (error) {
            alert('Fetch error: ' + error.message);
        }
    });
});
