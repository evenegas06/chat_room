const http = require('./app');
const port = 3000;

http.listen(port, () => {
    console.log('Server running on port ', port);
});