import React, { useEffect, useRef, useState } from 'react';
import { config, Spring, animated, SpringValue } from 'react-spring';

import Button from '@mui/material/Button';

import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

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

import DownloadIcon from '@mui/icons-material/Download';
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
import Grid from '@mui/material/Grid';

import './Home.scss';

function Home() {
  const [index, setIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const tooltip = useRef(false);
  const viewArray = [
    { id: 'home', name: 'Accueil' },
    { id: 'presentation', name: 'Présentation' },
    { id: 'timeline', name: 'Chronologie' },
    { id: 'team', name: 'Équipe' }
  ];
  const membersList = [
    {
      key: 1,
      img: 'team_1.png',
      name: 'Mickael PONAPIN',
      status: 'Développeur Frontend'
    },
    {
      key: 2,
      img: 'team_2.png',
      name: 'Elias BENZAOUI',
      status: 'Développeur Frontend'
    },
    {
      key: 3,
      img: 'team_1.png',
      name: 'Imdad ADELABOU',
      status: 'Développeur Frontend'
    },
    {
      key: 4,
      img: 'team_1.png',
      name: 'Maxime THIONG-KAY',
      status: 'Développeur Frontend'
    },
    {
      key: 5,
      img: 'team_1.png',
      name: 'Quentin DI-MEO',
      status: 'Développeur Frontend'
    },
    {
      key: 6,
      img: 'team_1.png',
      name: 'William NIZARD',
      status: 'Développeur Frontend'
    },
    {
      key: 7,
      img: 'team_7.png',
      name: 'Alexandre BERTHOMIER',
      status: 'Développeur Backend'
    }
  ];

  useEffect(() => {
    window.addEventListener('resize', WindowResizeHandler, false);
  }, []);

  useEffect(() => {
    document.getElementById(viewArray[index].id)?.scrollIntoView();
    setIsScrolling(true);
    new Promise((r) => setTimeout(r, 800)).then(() => {
      document.body.addEventListener('wheel', MouseWheelHandler, false);
      tooltip.current = false;
      setIsScrolling(false);
    });
  }, [index]);

  document.body.style.overflow = 'hidden';

  // eslint-disable-next-line
  function WindowResizeHandler(event: any) {
    setIndex(index);
  }

  // eslint-disable-next-line
  function MouseWheelHandler(event: any) {
    if (
      isScrolling === false &&
      ((event.deltaY < 0 && index - 1 >= 0) ||
        (event.deltaY > 0 && index + 1 <= viewArray.length - 1)) &&
      event.target.matches('#timeline-container, #timeline-container *') ===
        false
    ) {
      document.body.removeEventListener('wheel', MouseWheelHandler, false);
      tooltip.current = true;
      setIndex(
        event.deltaY < 0 ? index - 1 : event.deltaY > 0 ? index + 1 : index
      );
    }
  }

  return (
    <div className="home-page">
      <div className="nav-dot-container">
        {viewArray.map((item, i) => (
          <Spring
            config={config.wobbly}
            from={{ transform: `scale(1)` }}
            to={{ transform: index === i ? `scale(2)` : `scale(1)` }}
          >
            {({ transform }: { transform: SpringValue<string> }) => {
              const [hover, setHover] = useState(false);

              return (
                <Tooltip
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: '0.7em'
                      }
                    }
                  }}
                  TransitionComponent={Zoom}
                  title={item.name}
                  placement="left"
                  open={(i === index && tooltip.current) || hover}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  arrow
                >
                  <animated.button
                    className="nav-dot"
                    style={{ transform }}
                    onClick={() => {
                      setIndex(i);
                    }}
                  ></animated.button>
                </Tooltip>
              );
            }}
          </Spring>
        ))}
      </div>
      <div className="home" id="home">
        <div className="title">Hik'Up</div>
        <Button
          href="https://github.com/Hik-UP/android/releases/latest/download/app-release.apk"
          style={{
            fontSize: '0.9em',
            color: 'white'
          }}
          variant="text"
          startIcon={<DownloadIcon />}
          endIcon={<DownloadIcon />}
        >
          Télécharger
        </Button>
        <Button
          style={{
            fontSize: '0.9em',
            color: 'white'
          }}
          variant="text"
          startIcon={<KeyboardArrowDownIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={() => {
            tooltip.current = true;
            setIndex(1 <= viewArray.length - 1 ? 1 : index);
          }}
        >
          En savoir plus
        </Button>
      </div>
      <div className="presentation" id="presentation">
        <div className="title">Présentation</div>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="grid"
        >
          <Grid item xs={6} className="grid-item">
            <div className="text">
              Hik'Up est un jeu mobile qui rend la randonnée plus ludique tout
              en guidant ses utilisateurs vers de nombreux points d'intérêt.
              Novices et passionnés se retrouvent au sein d'une communauté unie
              par l'expérience tout en contribuant à la protection des
              écosystèmes.
            </div>
          </Grid>
          <Grid item xs={6} className="grid-item">
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
          </Grid>
          <Grid item xs={6} className="grid-item">
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
          </Grid>
          <Grid item xs={6} className="grid-item">
            <div className="text">
              Le principe du jeu est de pouvoir gagner des points en marchant
              lors de randonnées, ceux-ci étant attribués en fonction de la
              distance parcourue. Les joueurs auront par la suite la possibilité
              de dépenser les points gagnés pour planter des arbres, ou pour
              améliorer l’apparence de leur personnage. De plus, une carte
              interactive affichant la position du joueur sur le chemin
              permettra de visualiser les points d’intérêt à proximité, chaque
              point d’intérêt visité lui attribuant un succès visible par les
              autres utilisateurs.
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="timeline" id={'timeline'}>
        <div className="title">Chronologie</div>
        <div className="container" id="timeline-container">
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
      <div className="team" id="team">
        <div className="title">Notre équipe</div>
        <ImageList cols={4} className="container">
          {membersList.map((item) => (
            <ImageListItem key={item.key}>
              <img
                src={require(`../assets/${item.img}`)}
                srcSet={require(`../assets/${item.img}`)}
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
    </div>
  );
}

export { Home };
