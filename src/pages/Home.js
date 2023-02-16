/* eslint-disable no-console */
import './Home.css';
import './gradiant.css'
import Footer from '../component/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import logo from "../logo.png"
import navigation from "../navigation.png"
import meteo from "../meteo.png"
import sample from "../sample.png"

function Home() {

    const background = document.querySelector('#background');

window.addEventListener('mousemove', (event) => {
  const xPos = event.clientX / window.innerWidth;
  const yPos = event.clientY / window.innerHeight;
  background.style.transform = `translate(-${xPos * 50}px, -${yPos * 50}px)`;
});

    const [showMenu, setShowMenu] = useState(false);

    const [x, setX] = useState(0);
    const [direction, setDirection] = useState(1);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setX(x + 0.1 * direction);
        if (x > 100){
          setDirection(-1);
        }
        if (x < 0){
            setDirection(1);
        }
      }, 50);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [x, direction]);
    // const [position, setPosition] = useState({ x: 0, y: 0 });
  
    // const handleMouseMove = (e) => {
    //   setPosition({ x: e.clientX, y: e.clientY });
    // }
  
    // const styles = {
    //   position: "absolute",
    //   top: position.y,
    //   left: position.x,
    // }

    // const delay = ms => new Promise(res => setTimeout(res, ms));

    const reveal = async () =>{
        // await delay(2000);

        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 0;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

  window.addEventListener("scroll", reveal);



      
    return(
        <>
        
            {/* <div class="content">
            <h1 class="title">Animating gradients</h1>
            <button class="fun">Hover me!</button>
            </div> */}
            {/* <div className='betweenContent'> */}
            <div style={{padding: "0"}} className="container-fs">
                <div style={{padding: "0"}} className="fullscreen-image"></div>
                <div style={{}} className='content cover-text'>
                    <div className="title">
                        Hik'Up
                    </div>
                </div>
            </div>
            {/* <img src="https://www.freeiconspng.com/thumbs/leaf-icon-png/green-leaf-icon-10.png"  id="background"></img> */}
            {/* <div class="container reveal fade-bottom">
                <div className='content'>
                    <div className="title">
                        Hik'Up
                    </div>
                </div>
            </div>
            <div className='article'>
                <div style={{maxWidth: '50%',}}>
                    <div className='arround_image_article'>
                        <div className='div_image_article'>
                            <img className='image_article' src='/article_randonnee.jpg' alt='randonnee'/>
                        </div>
                    </div>
                </div> */}

                {/* <div className='container reveal fade-right'>
                <div class="smallContent">
                    <div className='div_text_article'>
                        Hik'up l'application qui prepare votre meilleure randonnée
                    </div>
                </div>
                    <div className='button_article'>
                    <Button variant="success">Lire notre article</Button>{' '}
                    </div>
                </div> */}
            {/* </div> */}
            <div class="container reveal fade-bottom">
                <div className='content'>
                    <div className="title">
                    Quelques chiffres
                    </div>
                </div>
            </div>
            <div className='container_ai'>
                <div className='col_ai'>
                    <div class="container reveal fade-bottom">
                        <div className='content'>
                            <div className="figures">
                            80%
                            </div>
                        </div>
                    </div>
                    <div className='text_figures'>
                        des adolescents dans le monde ne font pas au moins 1 heure d'exercice physique par jour
                    </div>
                    {/* <input type="button" onclick="window.open(
                        'https://www.geeksforgeeks.org/','geeks',
                        'toolbars=0,width=300,height=300,left=200,
                        top=200,scrollbars=1,resizable=1');"
                        value="Open the window"> */}
                    <div id='linkable-div' class='text_figures small_link bottom-text' style={{cursor: "pointer"}}>
                        Selon une étude de l'agence de santé des Nations Unies
                    </div>
                    {/* <script>
                    window.onload = function() {
                        var linkableDiv = document.getElementById("linkable-div")

                        if (linkableDiv) {
                        linkableDiv.addEventListener("click", function() {
                            window.open("https://www.dw.com/en/four-in-five-teens-do-not-exercise-enough-who/a-51360732", "_blank")
                        })
                        }
                    }
                    </script> */}
                </div>
                {/* <div className='vertical_div'/> */}
                <div className='col_ai'>
                    <div class="container reveal fade-bottom">
                            <div className='content'>
                                <div className="figures">
                                73%
                                </div>
                            </div>
                    </div>
                    <div className='text_figures'>
                    Des enfants ont déclaré ne pas jouer régulièrement à l'extérieur de leur maison, contre 71 % de la génération des baby-boomers. 
                    </div>
                    <div id='linkable-div' class='text_figures small_link bottom-text' style={{cursor: "pointer"}}>
                            Selon une étude de l'agence de santé des Nations Unies
                    </div>
                </div>
            </div>
            <div class="container reveal fade-bottom">
                <div className='content'>
                    <div className="title">
                    les bienfaits de la randonnee
                    </div>
                </div>
            </div>
            <div className='container_ai'>     
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    onClick={() => setShowMenu(!showMenu)}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn1.iconfinder.com/data/icons/physiotherapy/64/joint-healthcare_and_medical-articulation-anatomy-joints-therapy_-1024.png" alt="articulation" />
                    La randonnée renforce le squelette et les articulations
                    {showMenu && (
                        <div
                        style={{
                            animation: 'slideDown 0.5s ease-in-out',
                            backgroundColor: '#fff',
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: '200px',
                            overflow: 'scroll',
                        }}
                        >
                        HELLLO
                        </div>
                    )}
                    {/* <style>
                        @keyframes slideDown {
                        from {
                            transform: translateY(-100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                        }
                    </style> */}
                </div>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Cardiovascular-icon.png" alt="articulation" />
                    La randonnée limite les risques cardio-vasculaires
                </div>
            </div>
            <div className='container_ai'>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/5167/5167035.png" alt="articulation" />
                    La randonnée lutte contre le surpoids et l'obésité
                </div>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/1995/1995830.png" alt="articulation" />
                    La randonnée libère la respiration
                </div>
            </div>
            <div className='container_ai'>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/639/639284.png" alt="articulation" />
                    La randonnée entretient les muscles
                </div>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/2865/2865511.png" alt="articulation" />
                    La randonnée renforce le système immunitaire
                </div>
            </div>
            <div className='container_ai'>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/883/883039.png" alt="articulation" />
                    La randonnée fortifie le cerveau
                </div>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/130/130159.png" alt="articulation" />
                    La randonnée diminue les accidents
                </div>
            </div>
            <div className='container_ai'>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn-icons-png.flaticon.com/512/1356/1356427.png" alt="articulation" />
                    La randonnée redonne le moral
                </div>
                <div className='col_ai'
                    style={{
                        position: 'relative',
                        //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                    <img style={{height: "50px", width: "50px"}} src="https://cdn4.iconfinder.com/data/icons/senses-3/500/yul1325_5_human_body_senses-512.png" alt="articulation" />
                    La randonnée éveille les sens
                </div>
            </div>
            <div  class="container reveal fade-bottom">
                <div className='content'>
                    <div className="title">
                    Presentation de l'application
                    </div>
                </div>
            </div>
            <div className='container_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "20em",
                    }}>
                        <div style={{}}>
                        Hik'Up est une application de randonnée qui s'inspire du célèbre jeu mobile, Pokémon Go. L'application vise à apporter le plaisir et l'excitation de la réalité virtuelle et des jeux vidéo dans le monde de la randonnée et des activités en plein air.
                        </div>
                </div>
                <img className='fade-left' style={{margin: "3em", height: "10em", width: "10em", borderRadius: "10px"}} src={logo} alt="Hik'Up" />
            </div>
            <div className='container_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                <img className='fade-left' style={{margin: "3em", height: "20em", width: "10em", borderRadius: "10px"}} src={navigation} alt="Hik'Up" />
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "20em",
                    }}>
                        <div style={{}}>
                        Avec Hik'Up, les utilisateurs peuvent explorer de nouveaux sentiers de randonnée, découvrir des endroits intéressants et collecter des récompenses virtuelles à mesure qu'ils avancent dans l'application. L'application utilise la technologie de réalité augmentée pour superposer des éléments virtuels sur le monde réel, créant ainsi une expérience immersive pour les utilisateurs.                        </div>
                </div>
            </div>
            <div className='container_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                <div>
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "20em",
                    }}>
                        <div style={{}}>
                        En plus de ses éléments de jeu, Hik'Up inclut également une gamme de fonctionnalités utiles pour les randonneurs, notamment des cartes détaillées des sentiers, des prévisions météorologiques et des alertes d'urgence. L'application permet également aux utilisateurs de suivre leur progression, de partager leurs randonnées avec leurs amis et de se connecter avec d'autres utilisateurs de Hik'Up pour découvrir de nouveaux sentiers et des endroits.
                        </div>
                </div>

                </div>
                <img className='fade-left' style={{margin: "3em", height: "20em", width: "13em", borderRadius: "10px"}} src={meteo} alt="Hik'Up" />
            </div>
            <div className='container_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                <img className='fade-left' style={{margin: "3em", height: "23em", width: "13em", borderRadius: "10px"}} src={sample} alt="Hik'Up" />
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "20em",
                    }}>
                        <div style={{}}>
                        Hik'Up est conçu pour être facile et intuitif à utiliser, avec une interface simple et conviviale. L'application est disponible pour les appareils iOS et Android et est gratuite à télécharger et à utiliser.</div>
                </div>
            </div>
            <div className='container_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                <div>
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "40em",
                    }}>
                        <div style={{}}>
                        Que vous soyez un randonneur expérimenté ou que vous débutiez, Hik'Up est l'application idéale pour explorer la grande nature, vous défier et découvrir de nouvelles aventures. Alors pourquoi attendre ? Téléchargez Hik'Up dès aujourd'hui et commencez votre voyage de randonnée !                        </div>
                </div>

                </div>
            </div>
            <div class="container reveal fade-bottom">
                <div className='content'>
                    <div className="title">
                    Ecologie
                    </div>
                </div>
            </div>
            <div className='container_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                <div>
                <div className='container_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                <div>
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "40em",
                    }}>
                        <div style={{}}>
                        Hik'Up est une application remarquable car elle combine l'aventure et l'utilité. En gagnant des niveaux dans l'application en parcourant de nouveaux sentiers de randonnée, vous pouvez contribuer à la planète en plantant un arbre quelque part dans le monde. Cela signifie que vos aventures en plein air peuvent avoir un impact positif sur l'environnement, ce qui est bon pour tout le monde.
                    </div>
                </div>
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "40em",
                    }}>
                        <div style={{}}>
                        Le fait de planter un arbre à chaque nouveau niveau atteint est une motivation supplémentaire pour les utilisateurs de continuer à explorer de nouveaux sentiers et de se défier eux-mêmes. Cela rend également l'application plus significative et engageante pour les utilisateurs, car ils peuvent voir directement comment leur activité peut aider à préserver notre planète pour les générations futures.                    </div>
                </div>
                <div className='col_ai' style={{
                        position: 'relative',
                        // //left: `${x}px`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "40em",
                    }}>
                        <div style={{}}>
                        En résumé, le fait de pouvoir planter un arbre en gagnant des niveaux dans Hik'Up rend cette application unique et utile, en offrant aux utilisateurs la possibilité de faire un impact positif sur l'environnement tout en s'amusant et en explorant de nouveaux sentiers de randonnée.                        </div>
                </div>
                </div> 
                </div>
                </div>
                <img className='fade-left' style={{margin: "3em", height: "10em", width: "10em", borderRadius: "10px"}} src="https://cdn-icons-png.flaticon.com/512/5347/5347647.png" alt="Hik'Up" />
            </div>
            {/* <div class="container reveal fade-bottom">
                <div className='content'>
                    <div className="title">
                    Notre equipe
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col className="equipe"><img src='/mickael_ponapin.jpg' alt='mickael'/></Col>
                    <Col className="equipe"><img src='/alexandre_berthomier.jpg' alt='mickael'/></Col>
                    <Col className="equipe"><img src='/quentin_di-meo.jpg' alt='mickael'/></Col>
                    <Col className="equipe"><img src='/loris_reggiani.jpg' alt='mickael'/></Col>
                    <Col className="equipe"><img src='/paul_gallimard.jpg' alt='mickael'/></Col>
                </Row>
                <Row>
                    <Col className="nom_equipe">Mickael Ponapin</Col>
                    <Col className="nom_equipe">Alexandre Berthomier</Col>
                    <Col className="nom_equipe">Quentin Di Meo</Col>
                    <Col className="nom_equipe">Loris Reggiani</Col>
                    <Col className="nom_equipe">Paul Gallimard</Col>
                </Row>
            </Container> */}
            {/* <div className='equipe'>
                <div className='personne_de_equipe'>
                    <img className='image_equipe' src='/mickael_ponapin.jpg' alt='mickael'/>
                </div>
                <div className='personne_de_equipe'>
                    <img className='image_equipe' src='/adrien_moreau.jpg' alt='adrien'/>
                </div>
                <div className='personne_de_equipe'>
                    <img className='image_equipe' src='/alexandre_berthomier.jpg' alt='alexandre'/>
                </div>
                <div className='personne_de_equipe'>
                    <img className='image_equipe' src='/quentin_di-meo.jpg' alt='quentin'/>
                </div>
                <div className='personne_de_equipe'>
                    <img className='image_equipe' src='/loris_reggiani.jpg' alt='loris'/>
                </div>
                <div className='personne_de_equipe'>
                    <img className='image_equipe' src='/paul_gallimard.jpg' alt='paul'/>
                </div>
            </div>
            <div className='equipe'>
                    <div className='personne_de_equipe' style={{backgroundColor: "red"}}>
                        Mickael Ponapin<br/>
                    </div>
                    <div className='personne_de_equipe' style={{backgroundColor: "red"}}>
                        Adrien Moreau<br/>
                    </div>
                    <div className='personne_de_equipe' style={{backgroundColor: "red"}}>
                        Alexandre Berthomier<br/>
                    </div>
                    <div className='personne_de_equipe' style={{backgroundColor: "red"}}>
                        Quentin Di Meo<br/>
                    </div>
                    <div className='personne_de_equipe' style={{backgroundColor: "red"}}>
                        Loris Reggiani<br/>
                    </div>
                    <div className='personne_de_equipe' style={{backgroundColor: "red"}}>
                        Paul Gallimard<br/>
                    </div>
            </div> */}
            <Footer/>
        </>
    )
}

export { Home }