module.exports = mongoose =>
    mongoose.model(
        'snippets',
        mongoose.Schema({
            content: {
                type: String,
                required: true
            },
            URL: {
                type: String,
                required: true
            }
        })
    );
