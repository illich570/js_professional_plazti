import MediaPlayer from "../MediaPlayer";

class AutoPlay{
  constructor(){}

  init(player: MediaPlayer){
    if(!player.media.muted){
      player.media.muted = true;
    }
    player.play()
  }
}

export default AutoPlay;