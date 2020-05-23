module.exports = (app) => {
    const model = app.model.users

    return {
        index: (req, res) => {
            model.find(null, (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
                return res.send('respond with a resource')
            })
        }
    }
}