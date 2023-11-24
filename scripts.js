function switchTheme() {
    if (document.documentElement.getAttribute('data-theme') == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
        document.getElementById('theme-button').innerText="light_mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
        document.getElementById('theme-button').innerText="dark_mode";

    }
}
