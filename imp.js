var Jimp = require("jimp");

var fileName = 'pic.jpg';
var imageCaption = 'Integra';
var loadedImage;
delete ('sample.jpg');
Jimp.read(fileName)
    .then(function (image) {
        loadedImage = image;
        //return Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
        return Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    })
    .then(function (font) {
        loadedImage.print(font, 700, 500, imageCaption)
                   .write('sample.jpg');
    })
    .catch(function (err) {
        console.error(err);
    });