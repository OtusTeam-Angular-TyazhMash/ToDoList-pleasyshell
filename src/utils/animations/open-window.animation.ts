import {
    trigger, state, style,
    transition, animate, keyframes
} from "@angular/animations";

export const openWindow = trigger('showModal', [
    state('isOpen', style({
        opacity: 0
    })),
    transition(':enter', [
        animate('0.1s ease-in-out', keyframes([
            style({ opacity: 0 }),
            style({ opacity: 1 })
        ]))
    ]),
    transition(':leave', [
        animate('0.2s ease-in-out', keyframes([
            style({ opacity: 1 }),
            style({ opacity: 0 })
        ]))
    ])
])