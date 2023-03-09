import React, { ReactElement, useEffect, useState } from 'react';
import { config, Spring, animated, SpringValue } from 'react-spring';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import './Home.scss';

function Home() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const allowScroll = ['pres-grid', 'team-grid', 'timeline-container'];
  const viewArray = [
    { id: 'home', name: 'Accueil' },
    { id: 'presentation', name: 'Présentation' },
    { id: 'timeline', name: 'Chronologie' },
    { id: 'team', name: 'Équipe' },
    { id: 'social', name: 'Réseaux' }
  ];
  const timelineList: {
    date: string;

    // eslint-disable-next-line
    icon: ReactElement<any, any>;
    iconColor?:
      | 'success'
      | 'error'
      | 'inherit'
      | 'grey'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'warning';
    iconVariant?: 'outlined' | 'filled';
    title: string;
    description: string;
  }[] = [
    {
      date: 'Septembre 2021',
      icon: <RocketLaunchIcon />,
      title: 'Création',
      description: "Naissance du projet Hik'UP."
    },
    {
      date: 'Décembre 2021',
      icon: <RemoveRedEyeIcon />,
      iconVariant: 'outlined',
      title: 'Prototypage',
      description: 'Vérification de la viabilité du projet.'
    },
    {
      date: 'Janvier 2022',
      icon: <CheckCircleIcon />,
      iconColor: 'success',
      title: 'Validation',
      description: 'Projet validé par notre équipe pédagogique.'
    },
    {
      date: 'Mars 2022',
      icon: <CodeIcon />,
      title: 'Développement',
      iconVariant: 'outlined',
      description: 'Début du développement de notre application.'
    },
    {
      date: 'Septembre 2022',
      icon: <LoopIcon />,
      iconVariant: 'outlined',
      title: 'Restructuration',
      description: "Passage du moteur de rendu d'Unity à Flutter."
    },
    {
      date: 'Janvier 2023',
      icon: <StorageIcon />,
      iconVariant: 'outlined',
      title: 'Backend 2.0',
      description: 'Réécriture du backend en prévision de notre bêta.'
    },
    {
      date: 'Mai 2023',
      icon: <BugReportIcon />,
      iconColor: 'secondary',
      title: 'Bêta',
      description: 'Bêta, axée sur son aspect informatif.'
    },
    {
      date: 'Septembre 2023',
      icon: <SportsEsportsIcon />,
      iconVariant: 'outlined',
      title: 'Ludification',
      description: "Lancement de l'aspect ludique de notre application."
    },
    {
      date: 'Novembre 2023',
      icon: <NewReleasesIcon />,
      iconColor: 'primary',
      title: 'Publication',
      description: 'Version grand public de notre application.'
    }
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
      img: 'team_3.png',
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
      img: 'team_5.png',
      name: 'Quentin DI-MEO',
      status: 'Développeur Frontend'
    },
    {
      key: 6,
      img: 'team_6.png',
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
  const socialList = [
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      description: 'Suivez notre avancement sur GitHub !',
      url: 'https://github.com/Hik-UP'
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      description: 'Contactez-nous par mail !',
      url: 'mailto:hikupapp@gmail.com'
    }
  ];

  useEffect(() => {
    window.addEventListener('resize', WindowResizeHandler, false);
  }, []);

  useEffect(() => {
    document.getElementById(viewArray[index].id)?.scrollIntoView();
    new Promise((r) => setTimeout(r, 800)).then(() => {
      document.body.addEventListener('wheel', MouseWheelHandler, false);
    });
  }, [index]);

  document.body.style.overflow = 'hidden';

  // eslint-disable-next-line
  function WindowResizeHandler(event: any) {
    setIndex(index);
  }

  // eslint-disable-next-line
  function MouseWheelHandler(event: any) {
    getAllowedScrollList();
    if (
      ((event.deltaY < 0 && index - 1 >= 0) ||
        (event.deltaY > 0 && index + 1 <= viewArray.length - 1)) &&
      event.target.matches(getAllowedScrollList()) === false
    ) {
      document.body.removeEventListener('wheel', MouseWheelHandler, false);
      setIndex(
        event.deltaY < 0 ? index - 1 : event.deltaY > 0 ? index + 1 : index
      );
    }
  }

  function getAllowedScrollList() {
    const elementsList = allowScroll.map((item) => ({
      id: item,
      element: document.getElementById(item)
    }));
    const list = elementsList
      .filter(
        (item) =>
          item.element && item.element.scrollHeight > item.element.clientHeight
      )
      .map((item) => `#${item.id}, #${item.id} *`);

    return list;
  }

  window.onload = function () {
    setLoading(false);
  };

  if (loading === true) {
    return (
      <div className="loading">
        <CircularProgress style={{ color: 'black' }} />
      </div>
    );
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
              const [open, setOpen] = useState(false);
              const [block, setBlock] = useState(false);
              const [hover, setHover] = useState(false);

              if (block === false && i === index) {
                setBlock(true);
                setOpen(true);
                new Promise((r) => setTimeout(r, 800)).then(() => {
                  setOpen(false);
                });
              } else if (block === true && i !== index) {
                setBlock(false);
              }

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
                  placement={window.innerWidth > 1000 ? 'left' : 'top'}
                  open={open || hover}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  arrow
                >
                  <animated.button
                    className="nav-dot"
                    style={{ transform }}
                    onClick={
                      i !== index
                        ? () => {
                            document.body.removeEventListener(
                              'wheel',
                              MouseWheelHandler,
                              false
                            );
                            setIndex(i);
                          }
                        : undefined
                    }
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
            setIndex(1 <= viewArray.length - 1 ? 1 : index);
          }}
        >
          En savoir plus
        </Button>
      </div>
      <div className="presentation" id="presentation">
        <div className="title">Présentation</div>
        <div className="grid" id="pres-grid">
          <Grid
            container
            rowSpacing={5}
            columns={{ xs: 1, sm: 1, md: 1, lg: 2 }}
          >
            <Grid item xs={1} sm={1} md={1} className="grid-item">
              <div className="text">
                Hik'Up est un jeu mobile qui rend la randonnée plus ludique tout
                en guidant ses utilisateurs vers de nombreux points d'intérêt.
                Novices et passionnés se retrouvent au sein d'une communauté
                unie par l'expérience tout en contribuant à la protection des
                écosystèmes.
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} className="grid-item">
              <img
                style={{
                  height: '10em',
                  width: '10em',
                  borderRadius: '10px'
                }}
                src={require('../assets/logo.png')}
                alt="Hik'Up"
              />
            </Grid>
            <Grid item xs={1} sm={1} md={1} className="grid-item">
              <img
                style={{
                  height: '20em',
                  width: '10em',
                  borderRadius: '10px'
                }}
                src={require('../assets/navigation.png')}
                alt="Hik'Up"
              />
            </Grid>
            <Grid item xs={1} sm={1} md={1} className="grid-item">
              <div className="text">
                Le principe du jeu est de pouvoir gagner des points en marchant
                lors de randonnées, ceux-ci étant attribués en fonction de la
                distance parcourue. Les joueurs auront par la suite la
                possibilité de dépenser les points gagnés pour planter des
                arbres, ou pour améliorer l’apparence de leur personnage. De
                plus, une carte interactive affichant la position du joueur sur
                le chemin permettra de visualiser les points d’intérêt à
                proximité, chaque point d’intérêt visité lui attribuant un
                succès visible par les autres utilisateurs.
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="timeline" id={'timeline'}>
        <div className="title">Chronologie</div>
        <div className="container" id="timeline-container">
          <Timeline position="alternate">
            {timelineList.map((item) => (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    color={item.iconColor}
                    variant={item.iconVariant}
                  >
                    {item.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography className="big-text" component="span">
                    {item.title}
                  </Typography>
                  {window.innerWidth > 1000 ? (
                    <Typography>{item.description}</Typography>
                  ) : null}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
      <div className="team" id="team">
        <div className="title">Équipe</div>
        <div className="grid" id="team-grid">
          <Grid
            container
            rowSpacing={5}
            columnSpacing={2}
            columns={{ xs: 1, sm: 1, md: 2, lg: 4 }}
          >
            {membersList.map((item) => (
              <Grid item xs={1} sm={1} md={1} className="grid-item">
                <Card>
                  <CardMedia
                    component="img"
                    height="180"
                    image={require(`../assets/${item.img}`)}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography className="name" component="div">
                      {item.name}
                    </Typography>
                    <Typography className="status" color="text.secondary">
                      {item.status}
                    </Typography>
                  </CardContent>{' '}
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="social" id="social">
        <div className="title">Réseaux</div>
        <List className="list">
          {socialList.map((item) => (
            <ListItem className="list-item">
              <ListItemAvatar>
                <Avatar>{item.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={item.description}
                onClick={() => window.open(item.url, '_blank')}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export { Home };
