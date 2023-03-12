import React, { ReactElement, useEffect, useState } from 'react';
import { config, Spring, animated, SpringValue } from 'react-spring';

import Button from '@mui/material/Button';

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
  const allowScroll = [
    'pres-grid',
    'team-grid',
    'timeline-container',
    'social-list'
  ];
  const viewArray = [
    { id: 'home', name: 'Accueil' },
    { id: 'presentation', name: 'Présentation' },
    { id: 'timeline', name: 'Chronologie' },
    { id: 'team', name: 'Équipe' },
    { id: 'social', name: 'Réseaux' }
  ];
  const presList: (
    | { type: 'text'; body: string }
    | {
        type: 'picture';
        path: string;
        width: string;
        height: string;
        alt: string;
      }
  )[] = [
    {
      type: 'text',
      body: "Hik'UP est une application mobile visant à rendre la randonnée plus ludique pour tous.\
            Créée par un groupe d'étudiants de l'école d'expertise informatique EPITECH, son \
            développement a commencé à l'aube de 2022 et verra sa bêta sortir l'année suivante \
            pour entrevoir une sortie officielle en janvier 2024."
    },
    {
      type: 'picture',
      path: 'logo.png',
      width: '10em',
      height: '10em',
      alt: "logo Hik'UP"
    },
    {
      type: 'picture',
      path: 'navigation.png',
      width: '12em',
      height: '18em',
      alt: 'projection de navigation 3D sur la GR20'
    },
    {
      type: 'text',
      body: "Hik'UP propose à l'aide d'une carte interactive et l'outil Mapbox la possibilité \
            d'arpenter des trajets de toutes difficultés, pour débuter comme pour se dépasser. \
            Passez par les points d'intérêt de vos régions, partez en expédition avec vos amis \
            et partagez de moments extraordinaires sur des routes et sentiers qui vous offrirons \
            les bols d'air frais que vous méritez."
    },
    {
      type: 'text',
      body: "Avec toutes les informations dont vous avez besoin pour mener vos expéditions à bien, \
            préparez au mieux vos sorties avec le matériel adapté grâce à notre panneau de données \
            météo et terrain. Hik'UP vous offre également la possibilité de convertir votre sueur \
            en bonne action, plantant des arbres à chaque nouveau point de contrôle atteint."
    },
    {
      type: 'picture',
      path: 'logo.png',
      width: '10em',
      height: '10em',
      alt: "logo Hik'UP"
    },
    {
      type: 'picture',
      path: 'logo.png',
      width: '10em',
      height: '10em',
      alt: "logo Hik'UP"
    },
    {
      type: 'text',
      body: "Grâce à ses statistiques poussées et ses parcours uniques, tracez vos efforts sur \
            mobile comme sur notre application web, et sortez le meilleur de vous-mêmes en \
            gonflant votre motivation. Accumulez des points et customisez l'apparence de votre \
            personnage 2D avec un look unique, et partagez vos expériences sur le forum de la \
            communauté. Participez aux événements saisonniers pour gagner des récompenses uniques \
            et devenir une icône du tableau des scores."
    },
    {
      type: 'text',
      body: "Vous vous sentez d'humeur inspirée et imaginative ? Participez à la création \
            d'itinéraires inédits et à la suggestion de points d'intérêt en devenant un curateur \
            et évaluez les randonnées que vous avez complétées pour nous aider à perfectionner les \
            ressources proposées !"
    },
    {
      type: 'picture',
      path: 'logo.png',
      width: '10em',
      height: '10em',
      alt: "logo Hik'UP"
    },
    {
      type: 'picture',
      path: 'logo.png',
      width: '10em',
      height: '10em',
      alt: "logo Hik'UP"
    },
    {
      type: 'text',
      body: "Que vous veniez en touriste ou soyiez à la recherche de nouvelles expériences \
            trépidantes, Hik'UP a tout ce qu'il faut pour agrémenter votre quotidien et devenir \
            votre meilleur compagnon deroute sur le chemin de la performance."
    }
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
      description: "Naissance du projet Hik'UP"
    },
    {
      date: 'Décembre 2021',
      icon: <RemoveRedEyeIcon />,
      iconVariant: 'outlined',
      title: 'Prototypage',
      description: 'Vérification de la viabilité du projet'
    },
    {
      date: 'Janvier 2022',
      icon: <CheckCircleIcon />,
      iconColor: 'success',
      title: 'Validation',
      description: 'Projet validé par notre équipe pédagogique'
    },
    {
      date: 'Mars 2022',
      icon: <CodeIcon />,
      title: 'Développement',
      iconVariant: 'outlined',
      description: 'Début du développement de notre application'
    },
    {
      date: 'Septembre 2022',
      icon: <LoopIcon />,
      iconVariant: 'outlined',
      title: 'Restructuration',
      description: "Passage du moteur de rendu d'Unity à Flutter"
    },
    {
      date: 'Janvier 2023',
      icon: <StorageIcon />,
      iconVariant: 'outlined',
      title: 'Backend 2.0',
      description: 'Réécriture du backend en prévision de notre bêta'
    },
    {
      date: 'Mai 2023',
      icon: <BugReportIcon />,
      iconColor: 'secondary',
      title: 'Bêta',
      description: 'Bêta, axée sur son aspect informatif'
    },
    {
      date: 'Septembre 2023',
      icon: <SportsEsportsIcon />,
      iconVariant: 'outlined',
      title: 'Ludification',
      description: "Lancement de l'aspect ludique de notre application"
    },
    {
      date: 'Novembre 2023',
      icon: <NewReleasesIcon />,
      iconColor: 'primary',
      title: 'Publication',
      description: 'Version grand public de notre application'
    }
  ];
  const membersList = [
    {
      key: 1,
      img: 'team_1.png',
      name: 'Mickael P.',
      status: 'Développeur front-end',
      caption:
        "Chef de groupe, Mickael contribue majoritairement aux pages \
        annexes de l'application mobile : connexion, accueil, maquettes..."
    },
    {
      key: 2,
      img: 'team_2.png',
      name: 'Elias B.',
      status: 'Développeur front-end',
      caption:
        'Grâce à ses compétences en sécurité, Elias contribue à la robustesse \
        des échanges de données utilisateur vers et depuis les serveurs.'
    },
    {
      key: 3,
      img: 'team_3.png',
      name: 'Imdad A.',
      status: 'Développeur full stack',
      caption:
        'Électron libre polyvalent, Imdad assiste Alexandre sur le back et \
        contribue aux systèmes de notification utilisateur.'
    },
    {
      key: 4,
      img: 'team_4.png',
      name: 'Maxime T.',
      status: 'Développeur front-end',
      caption:
        "Notre patte artistique, Maxime s'occupe de notre charte graphique et \
        de rendre notre application plus belle et agréable à utiliser."
    },
    {
      key: 5,
      img: 'team_5.png',
      name: 'Quentin D.',
      status: 'Développeur front-end',
      caption:
        "Atout majeur du front-end, Quentin s'occupe en priorité de la carte \
        interactive et ses fonctionnalités : itinéraires, points d'intérêt, \
        bulles..."
    },
    {
      key: 6,
      img: 'team_6.png',
      name: 'William N.',
      status: 'Développeur front-end',
      caption:
        "Chargé de l'interaction utilisateur, William s'occupe de nos réseaux \
        sociaux en parallèle de ses contributions à la page communautaire."
    },
    {
      key: 7,
      img: 'team_7.png',
      name: 'Alexandre B.',
      status: 'Développeur back-end',
      caption:
        'Notre directeur back-end, Alexandre opère sur nos serveurs et nos \
        API en les sécurisant et nous offrant les connexions dont nous \
        avons besoin.'
    },
    {
      key: 8,
      img: 'logo.png',
      name: ' ',
      status: ' ',
      caption: "Hik'UP"
    }
  ];
  const socialList = [
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      description: "Suivez l'avancement de l'application Hik'UP sur GitHub !",
      url: 'https://github.com/Hik-UP'
    },
    {
      icon: <EmailIcon />,
      title: 'E-mail',
      description: "Contactez-nous via l'addresse mail de Hik'UP !",
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
    const finalScrollList = getAllowedScrollList();

    if (
      ((event.deltaY < 0 && index - 1 >= 0) ||
        (event.deltaY > 0 && index + 1 <= viewArray.length - 1)) &&
      (finalScrollList.length === 0 ||
        event.target.matches(finalScrollList) === false)
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
                  style={{ zIndex: 4 }}
                  TransitionComponent={Zoom}
                  title={item.name}
                  placement={window.innerWidth > 800 ? 'left' : 'top'}
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
                  />
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
          style={{ color: '#fff' }}
          variant="text"
          startIcon={<DownloadIcon />}
          endIcon={<DownloadIcon />}
          className="text"
        >
          Télécharger
        </Button>
        <Button
          style={{ color: '#fff' }}
          variant="text"
          startIcon={<KeyboardArrowDownIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={() => {
            setIndex(1 <= viewArray.length - 1 ? 1 : index);
          }}
          className="text"
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
            className="grid__presentation"
          >
            {presList.map((item) => (
              <Grid item xs={1} sm={1} md={1} className="grid-item">
                {item.type === 'text' ? (
                  <div className="text">{item.body}</div>
                ) : (
                  <img
                    style={{
                      height: item.height,
                      width: item.width,
                      borderRadius: '10px'
                    }}
                    src={require(`../assets/${item.path}`)}
                    alt="Hik'Up"
                    className="presentation--img"
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="timeline" id="timeline">
        <div className="title">Chronologie</div>
        <div className="container" id="timeline-container">
          <Timeline position="alternate">
            {timelineList.map((item) => (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text.secondary"
                  className="date"
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
                <TimelineContent
                  sx={{ py: '12px', px: 2 }}
                  className="timeline-content"
                >
                  <Typography className="task" component="span">
                    {item.title}
                  </Typography>
                  {window.innerWidth > 800 ? (
                    <Typography className="description">
                      {item.description}
                    </Typography>
                  ) : undefined}
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
            style={{ padding: '5% 0' }}
          >
            {membersList.map((item) => (
              <Grid item xs={1} sm={1} md={1} className="grid-item">
                <div className="wrapper">
                  <Card>
                    <CardMedia
                      component="img"
                      image={require(`../assets/${item.img}`)}
                      alt={item.name}
                      className="picture"
                    />
                    {item.key < 8 ? (
                      <CardContent style={{ padding: '10px' }}>
                        <Typography className="name" component="div">
                          {item.name}
                        </Typography>
                        <Typography className="status" color="text.secondary">
                          {item.status}
                        </Typography>
                      </CardContent>
                    ) : (
                      <></>
                    )}
                  </Card>
                  {item.key < 8 ? (
                    <div className="caption">
                      <div className="caption--text">{item.caption}</div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="social" id="social">
        <div className="title">Réseaux</div>
        <div className="list-container" id="social-list">
          <List className="list">
            {socialList.map((item) => (
              <ListItem className="list-item">
                <ListItemAvatar>
                  <Avatar>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={
                    window.innerWidth > 800 ? item.description : undefined
                  }
                  onClick={() => window.open(item.url, '_blank')}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="footer">
          <p>
            {window.innerWidth > 800
              ? "© Hik'UP 2022  |  All rights reserved"
              : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

export { Home };
