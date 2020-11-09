import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DrawingService } from '../services/drawing.service';

@Component({
  selector: 'app-drawing-page',
  templateUrl: './drawing-page.page.html',
  styleUrls: ['./drawing-page.page.scss'],
})
export class DrawingPagePage implements AfterViewInit {

  // @ViewChild('myCanvas') canvas: any;

  @ViewChild('myCanvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  private canvasElement: any;
  private lastX: number;
  private lastY: number;

  private currentColour = '#1abc9c';
  private brushSize = 10;

  constructor(public platform: Platform, private drawingService: DrawingService) {
  }

  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.platform.width() + '';
    this.canvasElement.height = this.platform.height() - 100 + '';
  }

  public handleStart(ev){
    const canvasPosition = this.canvasElement.getBoundingClientRect();
    this.lastX = ev.touches[0].pageX - canvasPosition.x;
    this.lastY = ev.touches[0].pageY - canvasPosition.y;
  }

  public handleMove(ev){
    const canvasPosition = this.canvasElement.getBoundingClientRect();
    const ctx = this.canvasElement.getContext('2d');
    const currentX = ev.touches[0].pageX - canvasPosition.x;
    const currentY = ev.touches[0].pageY - canvasPosition.y;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();

    ctx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;

  }

  public  saveCanvasImage() {
    const dataUrl = this.canvasElement.toDataURL();
    const ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.drawingService.saveCanvasImage(dataUrl).subscribe();
  }
}

