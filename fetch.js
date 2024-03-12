//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
console.log("Fetch API");

fetch("https://api.github.com/users").then((res) => console.log(res)); //! bu şekilde get isteği attım ve cevap olumlu döndü verim geldi clg ye yazdım fakat benim görmek istediğim vei responsive içinde body kısmında bu dan dolayı aşğıda işlemi değiştirerek devam ediyorum.

fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((res) => console.log(res)); //& böyle yaparak yukarıda ki ham veriyi json formatına soktum sonrada 2. then ile de onu clg ye bastırdım.

fetch("https://api.github.com/users")
  .then((res) => {
    return res.json();
  })
  .then((res) => console.log(res)); //! 17. satırda yaptığım işlemi manuel return olarak yaptım burada tek farkı o.

fetch("https://api.github.com/user")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`birşeyler yanlış ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => document.write(err));
//& users ın s sini silip hata oluşturdum bu hatayı browser yakaladı ama biz yakalamadık. aslında fetch api yakaladığını düşünüyor çünkü ona bir cevap geldi aslında. işte bu durumu aşmak için if yapısı ile beraber throw new Error yapısını kullanarak hata fırlatırım ve bu hatayı catch yakalar.

//? buradaki verileri clg göndermeden ekrana bastırmak istiyorsam ne yaparım?
let userData = ""
fetch("https://api.github.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`birşeyler yanlış ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data)
    userData = data
    showUser(data)
  })
  .catch((err) => document.write(err));
console.log(userData);
//! burada yukarıdan aşağıya baktığımızda let userData = [] çalışır sonra console.log(userData); çalışır bu yüzden clg de console.log(userData); bize boş döner. sonra istek atılır veri gelir ama geri dönmeyeceği için göremeyiz artık boş gelmiş olur. bunun çözümü bir fonkyon yazarak olur.

const showUser = (data) => {
    console.log(data);
    const userSection = document.getElementById("users")
    userSection.innerHTML += data
}