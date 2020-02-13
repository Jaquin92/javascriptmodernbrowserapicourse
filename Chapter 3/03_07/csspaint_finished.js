if (typeof registerPaint !== 'undefined') {
    // define a class to implement the paint worklet
    class SampleCSSPaint {
        // declare the properties that the class has access to
        static get inputProperties() {
            return ['--cross-thickness', '--cross-color']
        }

        paint(ctx, size, props) {
            // get the custom property values
            let width = props.get('--cross-thickness');
            let color = props.get('--cross-color').toString();

            ctx.lineWidth = width;
            ctx.strokeStyle = color;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(size.width, size.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(size.width, 0);
            ctx.lineTo(0, size.height);
            ctx.stroke();
        }
    }

    // register the paint worklet for CSS
    registerPaint('samplepainter', SampleCSSPaint)
}