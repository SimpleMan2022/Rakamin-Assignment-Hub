function kondisiAir(suhu) {
  switch (true) {
    case suhu >= -100 && suhu <= 0:
      return 'Beku'
    case suhu >= 1 && suhu <= 100:
      return 'Cair'
    case suhu >= 101 && suhu <= 500:
      return 'Uap'
    default:
      return 'tidak terdefinisi'
  }
}

function jenisBBM(jenisKendaraan, platKuning, besarCC) {
  if (platKuning || jenisKendaraan === 'motor') {
    return 'BBM subsidi'
  } else if (besarCC < 1500) {
    return 'PERTAMAX'
  } else if (besarCC >= 1500) {
    return 'PERTAMAX TURBO'
  }
}

console.log(kondisiAir(-50)) // Output: Beku
console.log(kondisiAir(25)) // Output: Cair
console.log(kondisiAir(150)) // Output: Uap
console.log(kondisiAir(600)) // Output: Tidak terdefinisi

console.log(jenisBBM('motor', false, 0)) // Output: BBM subsidi
console.log(jenisBBM('mobil', true, 2000)) // Output: BBM subsidi
console.log(jenisBBM('mobil', false, 1200)) // Output: PERTAMAX
console.log(jenisBBM('mobil', false, 1800)) // Output: PERTAMAX TURBO
