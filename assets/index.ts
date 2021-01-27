import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads/index'
const video = document.querySelector('video')
const buttonPlay: HTMLElement = document.querySelector('#button_play')
const buttonMute: HTMLElement = document.querySelector('#button_mute')
const buttonPause: HTMLElement = document.querySelector('#button_pause')

const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()]})


console.log(player)


buttonPlay.onclick = () => player.play()
buttonPause.onclick = () => player.pause()
buttonMute.onclick = () => player.mute()


if('serviceWorker' in navigator){
  navigator.serviceWorker.register(('/sw.js')).catch( error => {
    console.log(error.message);
  })
}