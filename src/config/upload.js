const multer = require('multer');

const path = require('path');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname);
        }
    }),

    limits: {
        fileSize: 1024 * 1024 * 5
    },

    fileFilter: (req, file, cb) => {
        const permittedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ];

        if (permittedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    },
};
