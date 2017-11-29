import { Directive } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ElementRef } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { HostListener } from "@angular/core";
import { Event } from "@angular/router";

@Directive({
    selector : '[myDirective]'
})

export class recipesDirective implements OnInit{
    constructor(private elementRef : ElementRef, private rend: Renderer2) {}

    ngOnInit(){
        this.rend.setStyle(this.elementRef.nativeElement,'color','white');
    }

    @HostListener('mouseenter') mouseover(e: Event){
        this.rend.setStyle(this.elementRef.nativeElement,'background-color','black');
    }

    @HostListener('mouseleave') mouseleave(e: Event){
        this.rend.setStyle(this.elementRef.nativeElement,'background-color','pink');
    }
}