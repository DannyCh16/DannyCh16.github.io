let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #00676c;">Programo sitios web y soy participante de diversos proyectos sociales.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
