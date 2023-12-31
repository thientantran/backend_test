const multer = require("multer");
var fs = require('fs');

const uploadImage = (type) => {
    var dir = `./public/images/${type}`;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, `./public/images/${type}`);
        },
        filename: function(req, file, cb){
            cb(null, Date.now() + "_" + file.originalname);
        }
    })
    const upload = multer({
        storage: storage,
        fileFilter: function(req, file, cb){
            const extensionImageList = [".jpg",".png",". jpeg"];
            const extension = file.originalname.slice(-4);
            const check = extensionImageList.includes(extension);
            if(check){
                cb(null, true)
            }else{
                cb(new Error("Please upload jpg, png, jpeg"))
            }
        }
    });
    return upload.single(type)
}

module.exports = {uploadImage}