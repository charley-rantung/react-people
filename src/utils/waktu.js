//Untuk penamaan fungsi biasa (bukan komponen) bisa menggunakan metode camelCase saja

export const cekTahun = () => {
    return new Date().getFullYear();
  }
  
export const cekHari = () => {
    return new Date().getDate();
}