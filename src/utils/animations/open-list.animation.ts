import {
    trigger, state, style,
    transition, animate, keyframes
} from "@angular/animations";

export const openList = trigger('showList', [
    state('isOpen', style({
        'max-height': '0px',
        opacity: 0
    })),
    transition(':enter', [
        animate('0.15s ease-in-out', keyframes([
            style({ 'max-height': '0px', opacity: 0 }),
            style({ 'max-height': '255px', opacity: 1 })
        ]))
    ]),
    transition(':leave', [
        animate('0.15s ease-in-out', keyframes([
            style({ 'max-height': '255px', opacity: 1 }),
            style({ 'max-height': '0px', opacity: 0 })
        ]))
    ])
])