console.log("boa noite");

var titulo = document.querySelector(".art");
  titulo.textContent = "Vex Climatização";

  function climatizacao(){

    document.getElementById('dois'). innerHTML = "<iframe src='./html/climatização.html' frameborder='0'></iframe>"
   }

  function servico(){

    document.getElementById('dois'). innerHTML = "<iframe src='./html/serviço.html' frameborder='0'></iframe>"
    
   }


  function projeto(){
    //document.getElementById('um'). innerText = "projeto";
    document.getElementById('2'). innerHTML = "A Vex Climatização oferece serviços completos de projeto em climatização, atendendo às necessidades específicas de cada cliente. Nossa equipe especializada realiza análises detalhadas do ambiente para desenvolver projetos sob medida, garantindo eficiência energética, conforto térmico e qualidade do ar. Do dimensionamento dos equipamentos à elaboração de layouts e planos de instalação, cuidamos de todos os detalhes para criar soluções que atendam aos mais altos padrões de desempenho e conforto. Conte com a expertise da Vex Climatização para projetos que transformam ambientes e proporcionam bem-estar em todas as estações."
  }

  function contato(){
    //document.getElementById('um'). innerHTML = "contato";
    document.getElementById("2").innerHTML = "<img src='img/carla.jpg' width = '250px'>";

  }


 