const config ={
    app:{
        port: process.env.PORT || 8080,
    },
    db:{
        uri: "mongodb+srv://Ngocvine:17012001@cluster0.ihie8.mongodb.net/Thuc_hanh_ct449?retryWrites=true&w=majority"
    },
};

module.exports = config;