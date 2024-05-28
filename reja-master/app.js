console.log("web serverni boshlash");
const express = require("express");
const http = require("http");
const fs = require("fs");
const app = express();

// mongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

//1.kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2.session code

//3.views code
app.set("views", "views");
app.set("view engine", "ejs");

//4.routing code
//comment
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.post("/create-item", (req, res) => {
  console.log("user entered / create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

// 8. API qoshamiz bu ham post boladi va urli <"/edit-item"> boladi
// va callback (req, res) ochib olamiz
app.post("/edit-item", (req, res) => {
  // va <const data> qilib olib  <req> ni <body> qismidan olamiz
  const data = req.body;

  //console.log qilib teksiramuz
  //res.end-  usuli serverga signal berish uchun ishlatiladi,

  //9. endi data besega edit qilib olishimiz kerak
  // < db.collection> bu crud operatsiyalarini boshaqarish uchun kk
  // buning uchun bizga  data baseimizni <findOneAndUpdate> degan komandasi kk boaldi
  db.collection("plans").findOneAndUpdate(
    //<findOneAndUpdate> ham <_id> ni oladi,  <{ _id: new mongodb.ObjectId(data.id) }> endi <id> <data> ni ichida <data.id>

    //browser.js ichidagi <e.target.getAttribute("data-id") rejamizga tegishli bolgan idini biz mongo object id ga aylantirib olyapmiz <{ _id: new mongodb.ObjectId(data.id) },>
    { _id: new mongodb.ObjectId(data.id) },

    //10. mongodb ni <set> digan komandasi bor va <reja> ni yangi-text bian nomlaymiz. Yangi-textni axios ichidagi datani <new_input> qismiga joylashtirganmiz
    { $set: { reja: data.new_input } },

    //manashu parametrlar muvofaqiyatli ishga tushsa <function> ishga tushsin
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(() => {
      res.json({ state: "hammasi delete" });
    });
  }
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
