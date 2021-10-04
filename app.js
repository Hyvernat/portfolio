const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim,  {
   deleteSpeed: 20
})
.changeDelay(20)
.typeString('Moi c\'est Hafsa Hyvernat ')
.pauseFor(300)
.typeString('<strong>,étudiante dans le develepoment du web</strong>')
.pause(1000)
.deleteChars(27)
.typeString('<span style="color: #27ae60;">HTML/CSS</span> !')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color: midnightblue;">Bootstrap</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #ea39ff;">JavaScript</span> !')
.start()