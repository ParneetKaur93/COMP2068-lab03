const { index } = require('../controllers/people');

module.exports = router => {
    router.get('/', index);

    return router;
};