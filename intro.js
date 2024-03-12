console.log("senkron");
/* alert("blocking") */
console.log("FS16");

const gecikme = (sure) => {
    const basla = new Date().getTime()
    while (new Date().getTime() < basla + sure) {

    }
    console.log("çalıştı");
}
console.time("timer")//! bu kod ile başka bir kodun çalışma zamanını işaretleyip time End ile de ne kadar süre çalıştığımnın dönüşümü alıyorum.

gecikme(5000)
console.timeEnd("timer")//! time kritik uygulamaları denemek için kullanabiliriz.

console.log("gecikiyor");
//* Asenkron (setTimeout()) - Belirli sure sonraya zaman kurar.
//* ------------------------------------------------
console.log("start");
const timeoutID = setTimeout(() => {
  console.log("Timeout1 doldu")
}, 2000)
console.log("uygulama bitti");
//& bu kod ile asenkron yapı oluşturabiliyorum set... yazdığımda bana 2000 ms süre sonra clg deki değeri yazdır demiş oldum.
//! setTime macrotask kuyruğunda çalışıyor.
//& internet sitelerinde belli bir süreden sonra kalkmasını istediğimiz şeyler için kullanılabilir.reklamı kaldırmak için basar ama 5s sonra kalkar.süreye bağlı olan heryerde kullanbiliriz.
//! setT... 1 kere oluşturulur.

//* Asenkron (setInterval, clearInterval) - Periyodik bir aralik belirler
//*-----------------------------------------------
let sayac = 0
const intervalId = setInterval(() => {
console.log(++sayac)
if (sayac >= 7){
    clearInterval(intervalId)//& clear... komutu ile çalışan kodu durdurabiliyorum.
}
}, 1000) //! periyodik olarak çalışması gereken yapılarda kullnılabilir.

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi") //? veri isteği (req)
    setTimeout(() => {
      console.log("Sarah: Hello") //? res geliyor
      setTimeout(() => {
        console.log("John: How Are you?") //? veri gonder
        setTimeout(() => {
          console.log("Sarah:Fine and you?") //?gondermeye baslaniyor
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
  
  
  //? COZUMLER:
  //?----------------------------------------------------
  //* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
  //? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  //* 2- Promise (Custom async kod yazmak için elverişli- Advance)
  //! 3- Fetch API (Promise'in basitlestirilmis hali),
  //! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)