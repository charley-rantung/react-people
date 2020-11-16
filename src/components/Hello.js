import React from 'react';
//jika yg dipanggil tidak export default, maka gunakan kurung kurawal.
import {cekTahun, cekHari} from '../utils/waktu.js'

const Hello = () => {
    return (
      <>
        <p> Hello, selamat datang di kelas web programming </p>
        <p> Tahun sekarang adalah {cekTahun()} </p>
        <p> Tanggal sekarang adalah {cekHari()} </p>
      </>
    );
}

export default Hello;