document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('#main');

    toggler.addEventListener('click', function () {
        if (collapse.classList.contains('show')) {
            toggler.classList.remove('active');
        } else {
            toggler.classList.add('active');
        }
    });
});
