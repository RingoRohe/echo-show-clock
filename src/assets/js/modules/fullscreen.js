export default () => {
    const fullscreenElement = document.documentElement;

    const enterFullscreen = element => {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
        }
    }

    const isFullscreen = () => {
        return (
            window.fullscreen ||
            (window.innerWidth == screen.width &&
                window.innerHeight == screen.height)
        );
    }

    // create Fullscreen Button
    let button = document.createElement('a');
    button.setAttribute('href', '#');
    button.classList.add('fullscreen-toggle');
    button.innerHTML = 'toggle<br>Fullscreen';

    // on mouse move handler for show/hide fullscreen button
    let buttonTimeout = null;
    document.addEventListener('mousemove', () => {
        buttonTimeout != null ? clearTimeout(buttonTimeout) : buttonTimeout = null;
        button.style.opacity = 1;
        buttonTimeout = setTimeout(() => {
            button.style.opacity = 0;
        }, 3000);
    })

    button.addEventListener('click', (e) => {
        e.preventDefault();
        isFullscreen() ? exitFullscreen() : enterFullscreen(fullscreenElement);
    })

    // add button to wrapper
    document.querySelector('body>.wrapper').appendChild(button);
}