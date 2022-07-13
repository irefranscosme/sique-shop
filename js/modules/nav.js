export function navIndicator() {
    const navItem = document.querySelectorAll('.nav-item')

    navItem.forEach(item => {
        item.addEventListener('click', function() {
                navItem.forEach((item) => item.classList.remove("active"));
                this.classList.add('active')          
        })
    })
}