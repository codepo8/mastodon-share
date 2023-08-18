const button = document.querySelector('.tootshare');
    let key = 'mastodon-instance';
    let prompt = 'Please tell me your Mastodon instance';

    if(localStorage.getItem(key)) {
        button.querySelector('span').remove();
    }

    button.addEventListener('click', (e) => {
    if(localStorage.getItem(key)) {
    button.href = button.href.replace(
        "mastodon.social", 
        localStorage.getItem(key)
    );

    } else {
        e.preventDefault();
        let instance = window.prompt(prompt);
        localStorage.setItem(key, instance);
        button.querySelector('span').remove();
    }
});
