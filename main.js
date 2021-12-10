import Ztextify from './ztext.js';
import anime from 'animejs';

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

const dialog = document.getElementById('dialogElement'),
    ;

if ('HTMLDialogElement' in window === false) {
    document.documentElement.classList.add('dialog-unsupported');
    dialog.setAttribute('open', '');
} else {
    openDialog.onclick = () => dialog.showModal();
    closeDialog.onclick = () => dialog.closest();
}
