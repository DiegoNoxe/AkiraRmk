function showInfo(infoId) {
  
    document.getElementById("mensagemArea").style.display = "block";

  
    var infos = document.getElementsByClassName("info-text");
    for (var i = 0; i < infos.length; i++) {
        infos[i].style.display = "none";
    }

    document.getElementById(infoId).style.display = "block";
}

function mudarFundo(imageUrl) 
{
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

