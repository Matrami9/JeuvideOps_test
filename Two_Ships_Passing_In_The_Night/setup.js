/* eslint-disable no-unused-vars */
// setup.js

// 1. Simulation de base pour les nœuds
class FakeAudioNode {
  connect(dest) {
    return dest || this;
  }
  disconnect() {}
}

class FakeAudioParam {
  constructor(val = 1) {
    this.value = val;
  }
  setValueAtTime() {
    return this;
  }
  exponentialRampToValueAtTime() {
    return this;
  }
}

// 2. Classes spécifiques à ton fichier audio.js
global.AudioBuffer = class {
  constructor({ length, sampleRate }) {
    this.length = length;
    this.sampleRate = sampleRate;
    this.duration = length / sampleRate;
  }
  getChannelData() {
    return new Float32Array(this.length);
  }
};

global.AudioBufferSourceNode = class extends FakeAudioNode {
  constructor() {
    super();
    this.buffer = null;
  }
  start() {}
  stop() {}
};

global.GainNode = class extends FakeAudioNode {
  constructor() {
    super();
    this.gain = new FakeAudioParam(1);
  }
};

global.ConvolverNode = class extends FakeAudioNode {
  constructor() {
    super();
    this.buffer = null;
  }
};

global.AudioDestinationNode = class extends FakeAudioNode {};

// 3. AudioContext et OfflineAudioContext
global.AudioContext = class {
  constructor() {
    this.sampleRate = 44100;
    this.destination = new global.AudioDestinationNode();
  }
  resume() {
    return Promise.resolve();
  }
  createGain() {
    return new global.GainNode();
  }
};

global.OfflineAudioContext = class extends global.AudioContext {
  constructor(channels, length, sampleRate) {
    super();
    this.length = length;
  }
  startRendering() {
    return Promise.resolve(
      new global.AudioBuffer({ length: this.length, sampleRate: 44100 }),
    );
  }
};

// 4. Simulation du DOM et Browser
global.document = {
  querySelector: () => ({ textContent: '', hidden: false, style: {} }),
  addEventListener: () => {},
  exitPointerLock: () => {},
};

global.window = {
  addEventListener: () => {},
  AudioContext: global.AudioContext,
  OfflineAudioContext: global.OfflineAudioContext,
};

Object.defineProperty(global, 'navigator', {
  value: { userAgent: 'node' },
  writable: true,
  configurable: true,
});

global.addEventListener = () => {};
