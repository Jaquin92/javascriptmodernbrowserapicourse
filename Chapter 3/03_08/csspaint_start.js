if (typeof registerPaint !== 'undefined') {
    // define a class to implement the paint worklet
    class SampleCSSPaint {
        // TODO: declare the properties that the class has access to

        
        // TODO: fill out the paint function to do the drawing work
        paint(ctx, size, props) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "blue";

            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(size.width,size.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(size.width,0);
            ctx.lineTo(0,size.height);
            ctx.stroke();
        }
    }

    // TODO: register the paint worklet for CSS
    registerPaint("samplepainter", SampleCSSPaint);
}