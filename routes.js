module.exports = router => {
    require('./routes/people')
    require('/routes/people/:id')
    return router;
}