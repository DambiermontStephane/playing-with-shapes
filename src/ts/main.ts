import {settings} from "./settings";
import {Shapes} from "./Shapes";

(
    function () {
        const app = {

            init() {
                this.drawSwissFlag();
                this.drawMasterCard();
            },

            drawSwissFlag() {
                const canvas: HTMLCanvasElement = document.getElementById('Swiss-flag') as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

                Shapes.drawFilledRectangle(ctx, 0, 0, canvas.width, canvas.height, settings.swissFlag.backgroundColor)

                Shapes.drawFilledRectangle(
                    ctx,
                    canvas.width / 2 - settings.swissFlag.rect.width / 2,
                    canvas.height / 2 - settings.swissFlag.rect.height / 2,
                    settings.swissFlag.rect.width,
                    settings.swissFlag.rect.height,
                    settings.swissFlag.rect.backgroundColor
                )

                Shapes.drawFilledRectangle(
                    ctx,
                    canvas.width / 2 - settings.swissFlag.rect.height / 2,
                    canvas.height / 2 - settings.swissFlag.rect.width / 2,
                    settings.swissFlag.rect.height,
                    settings.swissFlag.rect.width,
                    settings.swissFlag.rect.backgroundColor
                )
            },

            drawMasterCard() {
                const canvas: HTMLCanvasElement = document.getElementById('master-card') as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

                Shapes.drawFilledRectangle(ctx, 0, 0, canvas.width, canvas.height, settings.masterCard.color.backgroundColor);

                Shapes.drawFilledCircle(
                    ctx,
                    canvas.width / 2 - canvas.width / 6,
                    canvas.height / 2,
                    125,
                    0,
                    2 * Math.PI,
                    settings.masterCard.color.ellipseRed)

                Shapes.drawFilledCircle(
                    ctx,
                    canvas.width / 2 + canvas.width / 6,
                    canvas.height / 2,
                    125,
                    0,
                    2 * Math.PI,
                    settings.masterCard.color.ellipseOrange)
            },
        };
        app.init();
    }
)();