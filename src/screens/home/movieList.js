import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function SingleLineImageList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} rowHeight={250} cols={6}>
        {props.moviesData.map((item) => (
          <ImageListItem key={item.poster_url}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{

              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}