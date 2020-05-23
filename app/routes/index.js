module.exports = (app) => {
    const controller = app.controller.pages

    app.get('/', controller.index)
}