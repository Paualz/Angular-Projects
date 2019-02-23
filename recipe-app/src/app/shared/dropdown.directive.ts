import { Directive, ElementRef, OnInit, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]' //Directive configuration: template selector. 
    //Is is used w/out square brackets!
})
export class dropwDownDirective implements OnInit{
    @HostBinding('class.open') openDropwdown: boolean; //A tidy way of setting values, instead
    //of using renderer2.
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
    }  

    @HostListener('mouseenter') toggleOpen(){
        this.openDropwdown = true;
    }
    @HostListener('mouseleave') mouseleave(eventdata: Event){
        this.openDropwdown = false;
    }
        
}