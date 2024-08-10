declare module "@studio-freight/lenis" {
  interface LenisOptions {
    lerp?: number;
    duration?: number;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
  }
}
