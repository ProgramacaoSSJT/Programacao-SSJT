document.addEventListener('DOMContentLoaded', function() {
    var link = document.querySelector('.link');
    var audio = document.getElementById('audio');
  
    console.log(link);
    console.log(audio);
  
    if (link && audio) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        audio.play()
          .then(function() {
            console.log('Áudio reproduzido com sucesso!');
          })
          .catch(function(error) {
            console.error('Erro ao reproduzir áudio:', error);
          });
  
        setTimeout(function() {
          window.location.href = link.href;
        }, 1000);
      });
    } else {
      console.error('Link ou áudio não encontrados.');
    }
  });
  