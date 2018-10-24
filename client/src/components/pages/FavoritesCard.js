import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// image card
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

// text card
const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

//   image card
// const styles = {
//     card: {
//       maxWidth: 450,
//       padding: '5%',
//       paddingTop: '2%',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center', 
//     },
//     media: {
//       height: 140,
//     },
//   };


function FavoritesCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className={classes.layout}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" align="center">
            Fav Food Spot
          </Typography>
          <Typography variant="h5" align="center" component="h2">
              Carl's Pizza Palace
          </Typography>
          <Typography className={classes.pos} color="textSecondary" align="center">
            pizza
          </Typography>
          <Typography component="p" align="center">
            !!!
            <br />
            {'"the best!"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
    );
  }
  
FavoritesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavoritesCard);
