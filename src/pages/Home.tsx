import React, { useEffect, useState } from 'react';
import { config, Spring, animated, SpringValue } from 'react-spring';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import LoopIcon from '@mui/icons-material/Loop';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

import Typography from '@mui/material/Typography';

import './Home.css';
import './gradiant.css';
import Footer from '../component/Footer';

function Home() {
  const [index, setIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const viewArray = [
    { id: 'title', name: 'Accueil' },
    { id: 'presentation-1', name: 'Description 1' },
    { id: 'presentation-2', name: 'Description 2' },
    { id: 'timeline', name: 'Chronologie' },
    { id: 'team', name: 'Équipe' }
  ];
  const membersList = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      name: 'Mickael PONAPIN',
      status: 'Développeur Frontend'
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      name: 'Elias BENZAOUI',
      status: 'Développeur Frontend'
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      name: 'Imdad ADELABOU',
      status: 'Développeur Frontend'
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      name: 'Maxime THIONG-KAY',
      status: 'Développeur Frontend'
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      name: 'Quentin DI-MEO',
      status: 'Développeur Frontend'
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      name: 'William NIZARD',
      status: 'Développeur Frontend'
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      name: 'Alexandre BERTHOMIER',
      status: 'Développeur Backend'
    }
  ];

  useEffect(() => {
    document.getElementById(viewArray[index].id)?.scrollIntoView();
  }, []);

  document.body.style.overflow = 'hidden';
  if (isScrolling === false) {
    document.body.addEventListener('wheel', MouseWheelHandler, false);
  }
  document.getElementById(viewArray[index].id)?.scrollIntoView();
  window.addEventListener(
    'resize',
    () => document.getElementById(viewArray[index].id)?.scrollIntoView(),
    false
  );

  // eslint-disable-next-line
  function MouseWheelHandler(event: any) {
    if (
      isScrolling === false &&
      index > 0 &&
      event.target.matches('#timeline-div, #timeline-div *') === false &&
      event.deltaY < 0
    ) {
      setIsScrolling(true);
      setIndex(index - 1);
      document.body.removeEventListener('wheel', MouseWheelHandler, false);
      document.addEventListener('scrollend', ScrollEndHandler, false);
    } else if (
      isScrolling === false &&
      index < viewArray.length - 1 &&
      event.target.matches('#timeline-div, #timeline-div *') === false &&
      event.deltaY > 0
    ) {
      setIsScrolling(true);
      setIndex(index + 1);
      document.body.removeEventListener('wheel', MouseWheelHandler, false);
      document.addEventListener('scrollend', ScrollEndHandler, false);
    }
  }

  function ScrollEndHandler() {
    setIsScrolling(false);
    document.removeEventListener('scrollend', ScrollEndHandler, false);
    document.body.addEventListener('wheel', MouseWheelHandler, false);
  }

  return (
    <div className="home-page" id={'title'}>
      <div className="nav-dot-container">
        {viewArray.map((item, i) => (
          <Spring
            config={config.wobbly}
            from={{ transform: `scale(1)` }}
            to={{ transform: index === i ? `scale(1.25)` : `scale(1)` }}
          >
            {({ transform }: { transform: SpringValue<string> }) => (
              <Tooltip title={item.name} placement="left" arrow>
                <animated.button
                  className="nav-dot"
                  style={{ transform }}
                  onClick={() => setIndex(i)}
                  onMouseOver={() => console.log(item.name)}
                ></animated.button>
              </Tooltip>
            )}
          </Spring>
        ))}
      </div>
      <div style={{ padding: '0' }} className="container-fs" id="test">
        <div style={{ padding: '0' }} className="fullscreen-image" />
        <div className="content cover-text">
          <div className="title">Hik'Up</div>
          <Button
            style={{
              fontSize: '0.9em',
              color: 'white'
            }}
            variant="text"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={() => window.scrollBy(0, window.innerHeight)}
          >
            En savoir plus
          </Button>
        </div>
      </div>
      <div className="presentation" id="presentation-1">
        <div className="content">
          <div className="title">Presentation de l'application</div>
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
              Hik'Up est une application de randonnée qui s'inspire du célèbre
              jeu mobile, Pokémon Go. L'application vise à apporter le plaisir
              et l'excitation de la réalité virtuelle et des jeux vidéo dans le
              monde de la randonnée et des activités en plein air.
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
              Avec Hik'Up, les utilisateurs peuvent explorer de nouveaux
              sentiers de randonnée, découvrir des endroits intéressants et
              collecter des récompenses virtuelles à mesure qu'ils avancent dans
              l'application. L'application utilise la technologie de réalité
              augmentée pour superposer des éléments virtuels sur le monde réel,
              créant ainsi une expérience immersive pour les utilisateurs.
            </div>
          </div>
        </div>
      </div>
      <div className="presentation" id="presentation-2">
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
              les appareils Android et est gratuite à télécharger et à utiliser.
            </div>
          </div>
        </div>
      </div>
      <div className="presentation" id={'timeline'}>
        <div className="content">
          <div className="title">Chronologie</div>
        </div>
        <div className="timeline" id="timeline-div">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                Septembre 2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <RocketLaunchIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Création
                </Typography>
                <Typography>Naissance du projet Hik&apos;UP.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Décembre 2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined">
                  <RemoveRedEyeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Prototypage
                </Typography>
                <Typography>Vérification de la viabilité du projet.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Janvier 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="success">
                  <CheckCircleIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Validation
                </Typography>
                <Typography>
                  Projet validé par notre équipe pédagogique.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Mars 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <CodeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Développement
                </Typography>
                <Typography>
                  Début du développement de notre application.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Septembre 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined">
                  <LoopIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Restructuration
                </Typography>
                <Typography>
                  Passage du moteur de rendu de notre carte d'Unity à Flutter.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Janvier 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined">
                  <StorageIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Backend 2.0
                </Typography>
                <Typography>
                  Réécriture du backend en prévision du lancement de notre bêta.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Mai 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                  <BugReportIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Bêta
                </Typography>
                <Typography>
                  Bêta de notre application, axée sur son aspect informatif.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Septembre 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined">
                  <SportsEsportsIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Ludification
                </Typography>
                <Typography>
                  Lancement de l'aspect ludique de notre application.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                Novembre 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <NewReleasesIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Publication
                </Typography>
                <Typography>
                  Lancement de la version grand public de notre application.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div className="presentation" id="team">
        <div className="content">
          <div className="title">Notre équipe</div>
        </div>
        <ImageList sx={{ width: '50em', height: 600 }} cols={4}>
          {membersList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.name}
                subtitle={<span>{item.status}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Footer />
    </div>
  );
}

export { Home };
