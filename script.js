let btnFetch = document.querySelector('#btn-fetch');

btnFetch.addEventListener('click', (e) => {
    let inputUsername = document.querySelector('#input-username');
    let inputUserValue = inputUsername.value;

    

    if(inputUserValue) {
        e.preventDefault();
        fetch(`https://api.github.com/users/${inputUserValue}/repos`)
        .then((response) => response.json())
        .then((repos) => {
            repos.map((repo) => {
                document.querySelector('.repo-name').innerHTML += `<li>${repo.name}</li>`;
                document.querySelector('.repo-description').innerHTML += `<li>${repo.description}</li>`;
                document.querySelector('.repo-url').innerHTML += `<li><a href='${repo.html_url}' target='_blank'>${repo.name}</a></li>`;
                inputUsername.value = '';
            });
        })
        .catch((error) => {
            document.querySelector('.invalid-name').style.display = 'block';
            inputUsername.value = '';
            inputUsername.focus();
            console.log(inputUsername);
            console.log(Error);
        });
        }
    });


