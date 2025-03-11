export class Shapes {
    static drawFilledRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(x, y, width, height)
        ctx.closePath();
        ctx.restore();
    }

    static drawFilledCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, startAngle: number, endAngle: number, color: string) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}