class MediaPlayer {
  media: HTMLMediaElement;
  plugins : Array<any>;
  container: HTMLElement;

  constructor(config: { el: HTMLMediaElement; plugins: any[]; }) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }


  initPlayer(){
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container,this.media);
    this.container.appendChild(this.media);
  }
  private initPlugins() {
    //Aislar las propiedades para solo darle entrada a las necesarias.
    this.plugins.forEach(plugin => {
      plugin.init(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  mute() {
    this.media.muted = this.media.muted === true ? false : true;
  }
}




export default MediaPlayer;