import {
    trigger, transition, group,
    query, style, animate
} from "@angular/animations";

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        group([
            query(':enter', [
                style({
                    opacity: 0,
                    display: 'block'
                }),
                animate('0.2s ease-in-out', style({
                    opacity: 1
                }))
            ],
                { optional: true }),
            query(':leave', [
                style({
                    opacity: 1,
                    display: 'none'
                }),
                animate('0.2s ease-in-out', style({
                    opacity: 0
                })
                )],
                { optional: true }),
        ])
    ])
])