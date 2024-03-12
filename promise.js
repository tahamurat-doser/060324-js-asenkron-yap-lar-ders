//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise")

const request = new Promise((resolve, reject) => {//& promise yapıs başarılı bittiğinde resolve çalışır, başarısız olduğunda da reject çalışır.
  const data = { name: "Can", surname: "Canan" } //? mock data

  const success = Math.floor(Math.random() * 5) //? 0 1 2 3 4

  if (success) {
    resolve(data)
  } else {
    reject("Something went wrong")
  }
})
/* console.log(request); */
/* request.then((res) => console.log(res)) *///! asenkron kod çalıştıktan sonra ilk then e girer ve then ile yakalarım veriyi. hatalı gelirse catch i kullanırım.

request.then((res) => console.log(res)).catch((err) => console.log(err))

request.then((res) => console.log(res)).catch((err) => document.write(err))//& bu şekilde hatayı ekrana bastırabilirim.

request.then((res) => {console.log(res); return res}).then((data) => console.log(data.name)).catch((err) => document.write(err)).finally(() => console.log("finally her zaman çalışır."))//! başarılı ya da başarısız olması fark etmeksizin finally her zaman çalışır.
//& ikinci then i kullanarak vrinin içinden başka bir veriyi yakaldım.