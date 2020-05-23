module.exports = (app) => {
    const controller = app.controller.users

    app.get('/users', controller.index)
}