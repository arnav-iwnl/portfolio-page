import React, { useRef, useEffect } from 'react';
import { createShader, createProgram } from '../../utils/webglUtils';
import { vertexShader, fragmentShader } from '../../shaders/shader';


// const ShaderBackground = ({ 
//   color = [1.0, 0.0, 44.0], 
//   amplitude = 1.0, 
//   speed = 1.0, 
//   progress = 0.5 
// }) => {
//   const canvasRef = useRef(null);
//   const animationFrameId = useRef();
//   const startTime = useRef(Date.now());

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const gl = canvas.getContext('webgl');
//     if (!gl) return;

//     const program = createProgram(gl, vertexShader, fragmentShader);
//     if (!program) return;

//     const positions = new Float32Array([
//       -1, -1, 0,
//        1, -1, 0,
//       -1,  1, 0,
//        1,  1, 0,
//     ]);

//     const uvs = new Float32Array([
//       0, 0,
//       1, 0,
//       0, 1,
//       1, 1,
//     ]);

//     const positionBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

//     const uvBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);

//     const positionLocation = gl.getAttribLocation(program, 'position');
//     const uvLocation = gl.getAttribLocation(program, 'uv');

//     const timeLocation = gl.getUniformLocation(program, 'uTime');
//     const colorLocation = gl.getUniformLocation(program, 'uColor');
//     const amplitudeLocation = gl.getUniformLocation(program, 'uAmplitude');
//     const speedLocation = gl.getUniformLocation(program, 'uSpeed');
//     const progressLocation = gl.getUniformLocation(program, 'uProgress');

//     const render = () => {
//       const { width, height } = canvas.getBoundingClientRect();
//       canvas.width = width;
//       canvas.height = height;
//       gl.viewport(0, 0, width, height);

//       gl.clearColor(0, 0, 0, 1);
//       gl.clear(gl.COLOR_BUFFER_BIT);
//       gl.useProgram(program);

//       gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//       gl.enableVertexAttribArray(positionLocation);
//       gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

//       gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
//       gl.enableVertexAttribArray(uvLocation);
//       gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 0, 0);

//       const time = (Date.now() - startTime.current) / 1000;
//       gl.uniform1f(timeLocation, time);
//       gl.uniform3fv(colorLocation, color);
//       gl.uniform1f(amplitudeLocation, amplitude);
//       gl.uniform1f(speedLocation, speed);
//       gl.uniform1f(progressLocation, progress);

//       gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

//       animationFrameId.current = requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, [color, amplitude, speed, progress]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full -z-10"
//     />
//   );
// };
const ShaderBackground = ({ color, amplitude, speed, progress }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef();
  const startTime = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    // Set up geometry
    const positions = new Float32Array([
      -1, -1, 0,
      1, -1, 0,
      -1, 1, 0,
      1, 1, 0,
    ]);

    const uvs = new Float32Array([
      0, 0,
      1, 0,
      0, 1,
      1, 1,
    ]);

    // Create and bind buffers
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);

    // Get attribute locations
    const positionLocation = gl.getAttribLocation(program, 'position');
    const uvLocation = gl.getAttribLocation(program, 'uv');

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'uTime');
    const colorLocation = gl.getUniformLocation(program, 'uColor');
    const amplitudeLocation = gl.getUniformLocation(program, 'uAmplitude');
    const speedLocation = gl.getUniformLocation(program, 'uSpeed');
    const progressLocation = gl.getUniformLocation(program, 'uProgress');

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
      gl.enableVertexAttribArray(uvLocation);
      gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 0, 0);

      const time = (Date.now() - startTime.current) / 1000;
      gl.uniform1f(timeLocation, time);
      gl.uniform3fv(colorLocation, color);
      gl.uniform1f(amplitudeLocation, amplitude);
      gl.uniform1f(speedLocation, speed);
      gl.uniform1f(progressLocation, progress);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [color, amplitude, speed, progress]);

  return (
    <canvas
      ref={canvasRef}
      className="none"
    >
    </canvas>
  );
};
export default ShaderBackground;
