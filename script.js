let birinciDeger = '0';
let ikinciDeger = '0';
let seciliIslem = '';
let oncekiSonuc = '';
let icekran = document.getElementById('ekranic');
let secilitemizleme = '';
let islemTuru = '';


const ekran = document.getElementById('ekran');



const sayilar = document.querySelectorAll('.sayilar');
const islemler = document.querySelectorAll('.islem');
const temizle = document.querySelectorAll('.temizle');
const digerİslemler = document.querySelectorAll('.digerİslem');

digerİslemler.forEach(button =>{
    button.addEventListener('click', function(){
        islemTuru = this.value;
        switch (islemTuru) {
            case 'yuzde':
            ekran.value = ekran.value / 100;
            break;
            case 'ters':
            ekran.value = -ekran.value
        
            default:
                break;
        }
    })
})

temizle.forEach(button => {
    button.addEventListener('click', function(){
        secilitemizleme = this.value;
        switch (secilitemizleme) {
            case 'C':
                ekran.value = '';
                icekran.value = '';
                birinciDeger = '';
                ikinciDeger = '';
                oncekiSonuc = '';
                break;
            case 'CE':
                ekran.value = ekran.value.slice(0, -1);
                break;
        }
    })
});

// Sayılar butonlarına tıklanınca ekran değerine sayıları ekleme
sayilar.forEach(button => {
    button.addEventListener('click', function() {
        ekran.value += this.value;
    });
});


islemler.forEach(button => {
    button.addEventListener('click', function() {
        if (ekran.value === '') {
            birinciDeger = 0;
            icekran.value = birinciDeger;
            
        }else
            if (oncekiSonuc !== '') {
                ekran.value = '';
                // Önceki işlem sonucu varsa, onu birinci değer olarak kullan
                birinciDeger = oncekiSonuc;
                oncekiSonuc = '';
            } else {
                birinciDeger = ekran.value;
            }
        icekran.value = birinciDeger + " " + this.value;
        ekran.value = '';
        seciliIslem = this.value; // Seçili işlem türünü güncelle
    });
});

// Eşittir butonuna tıklanınca hesaplama yapma
document.getElementById('esittir').addEventListener('click', function() {
    ikinciDeger = ekran.value;
    birinciDeger = parseFloat(birinciDeger);
    ikinciDeger = parseFloat(ikinciDeger);
    if (isNaN(birinciDeger) || isNaN(ikinciDeger)) {
        return;
    }
     switch (seciliIslem) {
        case '+':
            oncekiSonuc = birinciDeger + ikinciDeger;
            break;
        case '-':
            oncekiSonuc = birinciDeger - ikinciDeger;
            break;
        case '*':
            oncekiSonuc = birinciDeger * ikinciDeger;
            break;
        case '/':
            oncekiSonuc = birinciDeger / ikinciDeger;
            break; 
        default:
            console.log('Geçersiz işlem');
            return; // Geçersiz işlem durumunda işlem yapmayı durdur
    }
    icekran.value = birinciDeger + seciliIslem + ikinciDeger + "=" + oncekiSonuc;
    ekran.value = oncekiSonuc;
});



