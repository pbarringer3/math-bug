/**
 * Created by Pat on 3/26/2017.
 */

import { Component,  Input, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'latex',
    template: `<div id="{{id}}">Test</div>`
})
export class LatexComponent implements AfterViewInit {
    @Input() latex: string;
    @Input() id: string;

    ngAfterViewInit(): void {
        this.renderLatex();
    }

    renderLatex(): void {
        let resultDiv = document.getElementById( this.id );
        resultDiv.innerHTML = this.latex;
        MathJax.Hub.Queue([ "Typeset", MathJax.Hub, this.id]);
    }
}