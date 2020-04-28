const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const uploads = await connection('uploads').select('*');

        return response.json(uploads);
    },

    async create(request, response) {
        const [id] = await connection('uploads').insert({
            image: request.file.path,
        });

        return response.json({ id });
    }
};
