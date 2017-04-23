/**
 * Created by on 11/13/16.
 */

let glContextNames = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];

export function getWebGLRenderingContext(canvas: HTMLCanvasElement, optAttribs?): WebGLRenderingContext {

    let context: WebGLRenderingContext = null;
    for (let name of glContextNames) {

        try {
            context = <WebGLRenderingContext> canvas.getContext(name, optAttribs);
        }
        catch (e) {
            context = null;
        }

        if (context) {
            break;
        }
    }

    return context;
}

export function compileShaders(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string): WebGLProgram {

    let program: WebGLProgram,
        vertextShader: WebGLShader, fragmentShader: WebGLShader,
        vertextShaderElement: HTMLElement = document.getElementById(vertexShaderId),
        fragmentShaderElement: HTMLElement = document.getElementById(fragmentShaderId );

    vertextShader = gl.createShader( gl.VERTEX_SHADER );
    gl.shaderSource( vertextShader, vertextShaderElement.innerText );
    gl.compileShader( vertextShader );
    if ( !gl.getShaderParameter(vertextShader, gl.COMPILE_STATUS) ) {
        throw gl.getShaderInfoLog( vertextShader );
    }

    fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );
    gl.shaderSource( fragmentShader, fragmentShaderElement.innerText );
    gl.compileShader( fragmentShader );
    if ( !gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) ) {
        throw gl.getShaderInfoLog( fragmentShader );
    }

    program = gl.createProgram();
    gl.attachShader( program, vertextShader );
    gl.attachShader( program, fragmentShader );
    gl.linkProgram( program );

    if ( !gl.getProgramParameter(program, gl.LINK_STATUS) ) {
        throw gl.getProgramInfoLog( program );
    }

    return program;
}

export function toDataArray(a: number[]): Float32Array {
    return (new Float32Array(a));
}