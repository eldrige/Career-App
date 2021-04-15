function navBar() {
    const zero = document.querySelector('#sidebarCollapse');
    const first = document.querySelector('#sidebar');
    zero.addEventListener('click', () => {
        const queryCode = first.classList.toggle('active');
        queryCode.classList.toggle('active');

    });
}
navBar();