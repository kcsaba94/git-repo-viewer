let btnFetch = document.querySelector('#btn-fetch');

btnFetch.addEventListener('click', (e) => {
    let inputUsername = document.querySelector('#input-username');
    let inputUserValue = inputUsername.value;

    document.querySelector('.repo-url').innerHTML = ``;
    document.querySelector('.created-at').innerHTML = ``;
    document.querySelector('.updated-at').innerHTML = ``;
    document.querySelector('.forks').innerHTML = ``;
    document.querySelector('.watchers').innerHTML = ``;
    document.querySelector('.issues').innerHTML = ``;

    if(inputUserValue) {
        e.preventDefault();
        fetch(`https://api.github.com/users/${inputUserValue}/repos`)
        .then((response) => response.json())
        .then((repos) => {
            repos.map((repo) => {
                document.querySelector('.repo-url').innerHTML += `<li><a href='${repo.html_url}' target='_blank'>${repo.name}</a></li>`;
                document.querySelector('.created-at').innerHTML += `<li>${repo.created_at}</li>`;
                document.querySelector('.updated-at').innerHTML += `<li>${repo.updated_at}</li>`;
                document.querySelector('.forks').innerHTML += `<li>${repo.forks}</li>`;
                document.querySelector('.watchers').innerHTML += `<li>${repo.watchers}</li>`;
                document.querySelector('.issues').innerHTML += `<li>${repo.open_issues}</li>`;


                document.querySelector('.selected-name').style.display = 'block';
                document.querySelector('.selected-name').textContent = `${inputUserValue} username is valid.`;
                inputUsername.value = '';
                document.querySelector('.invalid-name').textContent = '';
            });
        })
        .catch((error) => {
            document.querySelector('.invalid-name').style.display = 'block';
            document.querySelector('.invalid-name').textContent = `${inputUserValue} username is invalid. Please select another.`;
            document.querySelector('.selected-name').textContent = ` `;
            inputUsername.value = '';
            inputUsername.focus();

        });
        }
    });


