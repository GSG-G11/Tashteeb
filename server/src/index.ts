import app from './app';

const port:Number = app.get('port');

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app is listining on http://localhost:${port}`);
});
