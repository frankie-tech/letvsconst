import Ztextify from './ztext.js';
import anime from 'animejs';
import dialogPolyfill from 'dialog-polyfill';

const z = new Ztextify('[data-splitting]', {
    depth: '2em',
	layers: 8,
	fade: false,
	direction: 'backwards',
});

const timeline = anime.timeline({
    targets: '.z-layers > .z-layer',
    delay: (el, i) => i * 10,
    duration: 500,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
});

timeline.add({
    scale: (el, i, total) => {
        i = ++i;
        const scaleFactor = (total - i) * 2 / total;

        let scale = 1 + (scaleFactor / 3);
        return scale
    },
});

/*
const open = document.getElementById('openDialog'),
    close = document.getElementById('closeDialog'),
    
    dialogPolyfill.registerDialog(dialog);
    
    open.addEventListener('click', () => {
        dialog.showModal()
        timeline.pause();
    });
    close.addEventListener('click', () => {
        dialog.close()
        timeline.play();
    });*/
    
const dialog = document.getElementById('dialogElement');

if ('HTMLDialogElement' in window === false) {
    document.documentElement.classList.add('dialog-unsupported');
    dialog.setAttribute('open', '');
}
