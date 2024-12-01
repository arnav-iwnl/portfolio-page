export const fragmentShader = `

precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform float uSpeed;
uniform float uProgress;
uniform vec3 uColor;

varying vec2 vUv;

// Noise function
vec2 hash2(vec2 p) {
    p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    
    vec3 h = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a,hash2(i)), dot(b,hash2(i+o)), dot(c,hash2(i+1.0)));
    
    return dot(n, vec3(70.0));
}

void main() {
    vec2 uv = vUv;
    float t = uTime * uSpeed;
    vec2 movement = vec2(t * 0.1, t * 0.2);
    
    float n = 0.0;
    float amplitude = uAmplitude;
    float frequency = 3.0;
    
    for (int i = 0; i < 4; i++) {
        vec2 distortedUV = uv + movement;
        n += noise(distortedUV * frequency) * amplitude;
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    
    float lines = fract(n * 8.0 + uProgress);
    lines = smoothstep(0.0, 0.1, lines) * smoothstep(1.0, 0.9, lines);
    
    vec3 baseColor = vec3(0.118, 0.161, 0.231);
    vec3 finalColor = mix(baseColor, uColor, lines);
    
    gl_FragColor = vec4(finalColor, 1.0);
}

`

export const vertexShader = `precision mediump float;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`