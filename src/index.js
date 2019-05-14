const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('We\'ve gone to the port ',
        app.get('port'))
});