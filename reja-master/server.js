//-2- http require qilyapmiiz
const http = require("http");
//-3- mongo db ni require qilyapmiz
const mongodb = require("mongodb");

//comen.js da require boladi
//modul.js da import boladi

//-1- connection string xosil qilyapmiz
let db;
const connectionString =
  "mongodb+srv://bek77519101:bkzd1377@cluster0.q0ifhex.mongodb.net/Reja";

//-4- mongodb objectini connect degan metodini chaqiryapmiz
// va pastki qismi hammasi callback function bor
mongodb.connect(
  connectionString,
  //1 chi qismi
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  //2 chi qismi
  (err, client) => {
    //agar yaxshi ulanmas error boladi
    if (err) console.log("ERROR on connection MongDB");
    else {
      //agar data besga yaxshi ulansa client ishga tushadi
      console.log("MongoDB connection succeed");
      // console.log(client);
      module.exports = client;

      //-5- data basega yaxshi ulanganndan keyin serverni quramiz
      const app = require("./app");
      //-6-server xosil qilamiz
      //-7-http ni <createServer> degan metodini chaqiryapmiz va <app> ni argumnet sifatida pass qilyapmiz
      // natija bizga serverni beradi (bu documention dan olingan)
      const server = http.createServer(app); //server ham object
      let PORT = 3000;
      //-8- serverga <listen> qil degan metoodi orqali buyuruq beryapmiz
      //<listen> ichida 2 ta orgemnt bor. Bu callback. 1.PORT 2.Function
      // 3000 chi portni eshitib deb majburlayapmiz
      server.listen(PORT, function () {
        console.log(
          // va 3000 chi portni eshitgan payti <localhost 3000> malumotni ber diyapmiz
          `The server is running successfully on port:${PORT},http://localhost:${PORT}`
        );
        //server shu bilan 3000 prtda ishga tushyapti
      });
    }
  }
);
