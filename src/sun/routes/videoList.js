const express = require('express');
const router = express.Router();
const Video = require('../models/video.model');
const multer = require('multer');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const verifyToken = require('./utils')
const config = require('../config');
const formatError = require('../utils/logValidationErrors');
const unlinkFiles = require('../utils/unlinkFilesOnError');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './video-files');
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.split('.').pop();
        cb(null, crypto.randomBytes(10).toString('hex') + '.' + ext);
    }
})

const upload = multer({ storage });

router.post('/videoList', verifyToken, upload.single('video'), (req, res) => {
    jwt.verify(req.token, config.secret, (err, authData) => {
        if (err) {
            res.sendStatus(401)
            return
        }
        const videoData = { description, videoTitle } = req.body;
        const file = req.file.path;
        const videoObject = new Video({
            description,
            file,
            videoTitle
        })

        videoObject.save()
            .then(videoObject => {
                if (!videoObject || videoObject.length === 0) {
                    return res.status(500);
                }
                res.status(200).send(videoObject);
            })
            .catch(err => {
                const errorMessages = formatError(err);
                if (errorMessages.length) {
                    unlinkFiles([[image]]);
                    res.send(500, {
                        message: errorMessages.join(',')
                    })

                } else {
                    res.status(500).json({
                        message: 'Ошибка сервера'
                    })
                }
            })
    })
})

// router.put('/gallery/:_id', verifyToken, upload.single('image'), (req, res) => {
//     jwt.verify(req.token, config.secret, (err, authData) => {
//         if (err) {
//             res.sendStatus(401)
//             return
//         }
//         const editData = req.file ? {
//             ...req.body,
//             image: req.file.path
//         } : req.body;
//         Gallery.findById(req.params._id, (err, oldPost) => {
//             if (!oldPost) {
//                 res.status(404).json({
//                     message: 'Ошибка: Запись не найдена.'
//                 })
//                 return
//             }
//             Gallery.findByIdAndUpdate(req.params._id, editData, { new: true }, (err, galleryPost) => {
//                 if (err) {
//                     if (err.code == 11000) {
//                         res.status(500).json({
//                             message: 'Ошибка: были найдены не уникальные поля'
//                         })
//                         return
//                     }
//                     res.status(500).send(err.errmsg);
//                 }
//                 else {
//                     if (req.file && fs.existsSync(oldPost.image)) {
//                         fs.unlinkSync(oldPost.image)
//                     }
//                     res.status(200).send(galleryPost)
//                 }
//             })
//         })
//     })
// })

// router.delete('/gallery/:_id', verifyToken, (req, res) => {
//     jwt.verify(req.token, config.secret, (err, authData) => {
//         if (err) {
//             res.sendStatus(401)
//             return
//         }
//         Gallery.findByIdAndDelete(req.params._id, (err, galleryPost) => {
//             if (!galleryPost) {
//                 res.status(404).json({
//                     message: 'Ошибка: Запись не найдена.'
//                 })
//                 return
//             }
//             if (err) {
//                 res.status(500).send(err.msg)
//                 return
//             }
//             if (fs.existsSync(galleryPost.image)) {
//                 fs.unlinkSync(galleryPost.image);
//             }
//             res.status(200).send(galleryPost);
//         })
//     })
// })

router.get('/videoList', (req, res) => {
      Video.find({}, (err, video) => {
        res.send(video);
      })
})

module.exports = router;
