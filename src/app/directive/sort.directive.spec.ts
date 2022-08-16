import { SortDirective } from './sort.directive';
import {Renderer2, ElementRef, HostListener } from '@angular/core';

describe('SortDirective', () => {
  it('should create an instance', () => {
    let renderer: any;
    let targetElement: any;
    const directive = new SortDirective(renderer, targetElement);
    expect(directive).toBeTruthy();
  });
});
