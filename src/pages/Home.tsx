import React from 'react';

import './Home.css';
import './gradiant.css';
import Footer from '../component/Footer';

function Home() {
  return (
    <div className="home-page">
      <div style={{ padding: '0' }} className="container-fs">
        <div style={{ padding: '0' }} className="fullscreen-image" />
        <div className="content cover-text">
          <div className="title">Hik'Up</div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="title">Quelques chiffres</div>
        </div>
      </div>
      <div>
        <div className="col_ai">
          <div className="container">
            <div className="content">
              <div className="figures">80%</div>
            </div>
          </div>
          <div className="text_figures">
            des adolescents dans le monde font moins d'une heure d'exercice
            physique par jour.
          </div>
          <div
            id="linkable-div"
            className="text_figures small_link bottom-text"
            style={{ cursor: 'pointer' }}
          >
            Selon une étude de l'agence de santé des Nations Unies
          </div>
        </div>
        <div className="col_ai">
          <div className="container">
            <div className="content">
              <div className="figures">73%</div>
            </div>
          </div>
          <div className="text_figures">
            des enfants ont déclaré ne pas jouer régulièrement à l'extérieur de
            leur maison.
          </div>
          <div
            id="linkable-div"
            className="text_figures small_link bottom-text"
            style={{ cursor: 'pointer' }}
          >
            Selon une étude de l'agence de santé des Nations Unies
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="title">les bienfaits de la randonnee</div>
        </div>
      </div>
      <div className="container_ai">
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn1.iconfinder.com/data/icons/physiotherapy/64/joint-healthcare_and_medical-articulation-anatomy-joints-therapy_-1024.png"
            alt="articulation"
          />
          La randonnée renforce le squelette et les articulations
        </div>
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Cardiovascular-icon.png"
            alt="articulation"
          />
          La randonnée limite les risques cardio-vasculaires
        </div>
      </div>
      <div className="container_ai">
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn-icons-png.flaticon.com/512/5167/5167035.png"
            alt="articulation"
          />
          La randonnée lutte contre le surpoids et l'obésité
        </div>
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn-icons-png.flaticon.com/512/1995/1995830.png"
            alt="articulation"
          />
          La randonnée libère la respiration
        </div>
      </div>
      <div className="container_ai">
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn-icons-png.flaticon.com/512/639/639284.png"
            alt="articulation"
          />
          La randonnée entretient les muscles
        </div>
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn-icons-png.flaticon.com/512/2865/2865511.png"
            alt="articulation"
          />
          La randonnée renforce le système immunitaire
        </div>
      </div>
      <div className="container_ai">
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn-icons-png.flaticon.com/512/883/883039.png"
            alt="articulation"
          />
          La randonnée fortifie le cerveau
        </div>
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn-icons-png.flaticon.com/512/130/130159.png"
            alt="articulation"
          />
          La randonnée diminue les accidents
        </div>
      </div>
      <div className="container_ai">
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn-icons-png.flaticon.com/512/1356/1356427.png"
            alt="articulation"
          />
          La randonnée redonne le moral
        </div>
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img
            style={{ height: '50px', width: '50px' }}
            src="https://cdn4.iconfinder.com/data/icons/senses-3/500/yul1325_5_human_body_senses-512.png"
            alt="articulation"
          />
          La randonnée éveille les sens
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="title">Presentation de l'application</div>
        </div>
      </div>
      <div
        className="container_ai"
        style={{
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '20em'
          }}
        >
          <div className="text">
            Hik'Up est une application de randonnée qui s'inspire du célèbre jeu
            mobile, Pokémon Go. L'application vise à apporter le plaisir et
            l'excitation de la réalité virtuelle et des jeux vidéo dans le monde
            de la randonnée et des activités en plein air.
          </div>
        </div>
        <img
          style={{
            margin: '3em',
            height: '10em',
            width: '10em',
            borderRadius: '10px'
          }}
          src={require('../assets/logo.png')}
          alt="Hik'Up"
        />
      </div>
      <div
        className="container_ai"
        style={{
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          style={{
            margin: '3em',
            height: '20em',
            width: '10em',
            borderRadius: '10px'
          }}
          src={require('../assets/navigation.png')}
          alt="Hik'Up"
        />
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '20em'
          }}
        >
          <div className="text">
            Avec Hik'Up, les utilisateurs peuvent explorer de nouveaux sentiers
            de randonnée, découvrir des endroits intéressants et collecter des
            récompenses virtuelles à mesure qu'ils avancent dans l'application.
            L'application utilise la technologie de réalité augmentée pour
            superposer des éléments virtuels sur le monde réel, créant ainsi une
            expérience immersive pour les utilisateurs.
          </div>
        </div>
      </div>
      <div
        className="container_ai"
        style={{
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div>
          <div
            className="col_ai"
            style={{
              position: 'relative',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '20em'
            }}
          >
            <div className="text">
              En plus de ses éléments de jeu, Hik'Up inclut également une gamme
              de fonctionnalités utiles pour les randonneurs, notamment des
              cartes détaillées des sentiers, des prévisions météorologiques et
              des alertes d'urgence. L'application permet également aux
              utilisateurs de suivre leur progression, de partager leurs
              randonnées avec leurs amis et de se connecter avec d'autres
              utilisateurs de Hik'Up pour découvrir de nouveaux sentiers et des
              endroits.
            </div>
          </div>
        </div>
        <img
          style={{
            margin: '3em',
            height: '20em',
            width: '13em',
            borderRadius: '10px'
          }}
          src={require('../assets/meteo.png')}
          alt="Hik'Up"
        />
      </div>
      <div
        className="container_ai"
        style={{
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          style={{
            margin: '3em',
            height: '23em',
            width: '13em',
            borderRadius: '10px'
          }}
          src={require('../assets/sample.png')}
          alt="Hik'Up"
        />
        <div
          className="col_ai"
          style={{
            position: 'relative',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '20em'
          }}
        >
          <div className="text">
            Hik'Up est conçu pour être facile et intuitif à utiliser, avec une
            interface simple et conviviale. L'application est disponible pour
            les appareils iOS et Android et est gratuite à télécharger et à
            utiliser.
          </div>
        </div>
      </div>
      <div
        className="container_ai"
        style={{
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div>
          <div
            className="col_ai"
            style={{
              position: 'relative',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '40em'
            }}
          >
            <div className="text">
              Que vous soyez un randonneur expérimenté ou que vous débutiez,
              Hik'Up est l'application idéale pour explorer la grande nature,
              vous défier et découvrir de nouvelles aventures. Alors pourquoi
              attendre ? Téléchargez Hik'Up dès aujourd'hui et commencez votre
              voyage de randonnée !
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="title">Ecologie</div>
        </div>
      </div>
      <div
        className="container_ai"
        style={{
          position: 'relative',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div>
          <div
            className="container_ai"
            style={{
              position: 'relative',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div>
              <div
                className="col_ai"
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '40em'
                }}
              >
                <div className="text">
                  Hik'Up est une application remarquable car elle combine
                  l'aventure et l'utilité. En gagnant des niveaux dans
                  l'application en parcourant de nouveaux sentiers de randonnée,
                  vous pouvez contribuer à la planète en plantant un arbre
                  quelque part dans le monde. Cela signifie que vos aventures en
                  plein air peuvent avoir un impact positif sur l'environnement,
                  ce qui est bon pour tout le monde.
                </div>
              </div>
              <div
                className="col_ai"
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '40em'
                }}
              >
                <div className="text">
                  Le fait de planter un arbre à chaque nouveau niveau atteint
                  est une motivation supplémentaire pour les utilisateurs de
                  continuer à explorer de nouveaux sentiers et de se défier
                  eux-mêmes. Cela rend également l'application plus
                  significative et engageante pour les utilisateurs, car ils
                  peuvent voir directement comment leur activité peut aider à
                  préserver notre planète pour les générations futures.
                </div>
              </div>
              <div
                className="col_ai"
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '40em'
                }}
              >
                <div className="text">
                  En résumé, le fait de pouvoir planter un arbre en gagnant des
                  niveaux dans Hik'Up rend cette application unique et utile, en
                  offrant aux utilisateurs la possibilité de faire un impact
                  positif sur l'environnement tout en s'amusant et en explorant
                  de nouveaux sentiers de randonnée.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          style={{
            margin: '3em',
            height: '10em',
            width: '10em',
            borderRadius: '10px'
          }}
          src="https://cdn-icons-png.flaticon.com/512/5347/5347647.png"
          alt="Hik'Up"
        />
      </div>
      <Footer />
    </div>
  );
}

export { Home };
