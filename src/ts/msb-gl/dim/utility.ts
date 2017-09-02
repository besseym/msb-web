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

export function createShader(gl: WebGLRenderingContext, shaderType: number, shaderSource: string){

    let shader = gl.createShader( shaderType );
    gl.shaderSource( shader, shaderSource );
    gl.compileShader( shader );
    if ( !gl.getShaderParameter(shader, gl.COMPILE_STATUS) ) {
        throw gl.getShaderInfoLog( shader );
    }

    return shader;
}

export function createProgramByShaderElements(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string): WebGLProgram {

    let program: WebGLProgram,
        vertextShader: WebGLShader,
        fragmentShader: WebGLShader,
        vertextShaderElement: HTMLElement = document.getElementById(vertexShaderId),
        fragmentShaderElement: HTMLElement = document.getElementById(fragmentShaderId );

    vertextShader = createShader(gl, gl.VERTEX_SHADER, vertextShaderElement.innerText);
    fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderElement.innerText);

    program = gl.createProgram();
    gl.attachShader( program, vertextShader );
    gl.attachShader( program, fragmentShader );
    gl.linkProgram( program );

    if ( !gl.getProgramParameter(program, gl.LINK_STATUS) ) {
        throw gl.getProgramInfoLog( program );
    }

    return program;
}

export function createProgram(gl: WebGLRenderingContext, vertexShaderSource: string, fragmentShaderSource: string): WebGLProgram {

    let vertextShader: WebGLShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource),
        fragmentShader: WebGLShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource),
        program: WebGLProgram = gl.createProgram();

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