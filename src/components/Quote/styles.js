import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  container: {
    background: 'url(../../img/ocean.jpg) no-repeat bottom / cover',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
  },
  container__quote: {
    display: 'flex',
    alignItems: 'center',
  },
  container__quote__text: {
    fontSize: '24px',
  },
  container__footer: {
    display: 'flex',
    justifyContent: 'center',
  },
});
