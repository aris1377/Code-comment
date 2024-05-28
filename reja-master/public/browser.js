console.log("FrontEnd JS ishga tushdi");

function itemTemplat(item) {
  return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm">
              Ochirish
            </button>
          </div>
        </li>`;
}

//new_reja degan value ni endi qabul qilishimiz kk
let createField = document.getElementById("create-field");

//create formni qolga olamiz
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplat(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function (e) {
  //delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimiisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((respose) => {
          console.log(respose.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling!");
        });
    }
  }

  //edit komandasi logikasi! yani o'zgarish knopkasi bosilganda malumotni ozgartira olishimiz kk
  if (e.target.classList.contains("edit-me")) {
    //1.buni biz <promt> bilan qilamiz
    //2.<promt> bu maxsus browser kamandasi
    //3."o'zgartirishni kiriting" tekstini malum bir userni inputiga tenglashtiramiz <userInput>
    let userInput = prompt(
      "O'zgartirishni kiriting",

      //4. biz ozgartirishni bosganimizda noldan chiqarib beryapti, bizga bunday emas usha bosgan qiymatni xosil qilamiz
      //bunda promtning yana bir xusuiyati bor yani <"O'zgartirishni kiriting"> degan info qismidan keyin qiymat qoshsak boaldi
      //(ixtiyoriy qiymat qousak ozgartirishni bosgan keyin osha qiymatni olib beradi)
      //buni orniga niz bosgan qiymatimizni olib berish kk.

      //5. buning uchun biz buni <e.target> imizdan olamiz va reja ejs ichidan <"item-text"> ni ikishimiz kerak
      //2 ta parent elemnt chiqib olamiz "item-text" ni qiymatini olamiz
      //querySelector -(DOM) bilan bog'liq bo'lgan narsa va bu HTML elementlarini tanlash va boshqarish imkonini beradi.
      //(".item-text"). <innerHTML> -bu HTML ichidagi textni qoolga olib beradi
      //bu narsalar bizga HTML ichidagi malumotlarni olin beradi// kirib tekshirsak har birini bosilgan tugmasini olib beryapti
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );

    // va biz qandaydir <if (userInput)> ozgartirish kiritsak uni qiymati mavjud bolsa bizga  <console.log> qilib chiqarib bersin
    if (userInput) {
      // console.log(userInput) -> qilib tekshirib olamiz
      //console.log(userInput);
      //bu frontenda ozgartirishni kiritsak konsol qilsmida <querty> ni olib beradi
      //bu promt ishlaganimizmi bildiradi

      //7. Endi bosilgan tugmani ozgartirish logikasini qilamiz
      // bizga endi axios kerak boladi..
      // axios bu serverlar bilan osongina va samarali ravishda aloqada bo'lish imkonini beradi
      axios
        // axios orqali bakend API ga post qilishimiz kk
        //buning uchun biz yangi </edit-item> nomli API yozamiz
        .post("/edit-item", {
          //va biz unga post qilmoqchi bolgan narsalarni kiritamiz
          //bosgan tugmamizmi  idisini <id:> orqali post qilamiz < e.target.getAttribute("data-id")> shu orqali
          id: e.target.getAttribute("data-id"), //---> bizga data objekt boladi body qismida kelgan // va id: qismida  rejamizga tegishli bolgan <e.target.getAttribute("data-id")> id bu
          //va <new_input> nomli yangi textimiz va uninhg qiymati <userInput> boladi.
          new_input: userInput,
        })
        // then bizga data olib beradi (response - javob);
        // bakenda kelayotgan malumotni responsda qabul qilib olamiz
        .then((response) => {
          //11. ejs imizni edit qivolishimiz kk
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
            //
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("iltimos qaytadan harakat qiling!", err);
        });
    }
  }
});
document.getElementById("clean-all").addEventListener("click", function () {
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => {
      alert(response.data.state);
      // Remove all items from the DOM
      document.querySelectorAll(".list-group-item").forEach((item) => {
        item.remove();
      });
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
});
