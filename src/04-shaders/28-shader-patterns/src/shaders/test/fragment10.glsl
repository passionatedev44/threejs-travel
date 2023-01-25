varying vec2 vUv;

void main() {
  /*
  gl_FragColor is a special variable that holds the color of the
  fragment. It is a vec4, which means it has four components: red,
  green, blue, and alpha. Each component is a floating point number
  between 0.0 and 1.0. The default value is (0.0, 0.0, 0.0, 0.0).
  */
  float strength = mod(vUv.x * 10.0, 1.0);
  strength = step(0.8, strength);
  
  gl_FragColor = vec4(strength, strength, strength, 1.0);
}