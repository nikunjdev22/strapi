"use strict";(self.webpackChunkstrapiapilive=self.webpackChunkstrapiapilive||[]).push([[3964],{49280:a=>{a.exports=JSON.parse('{"attribute.boolean":"Boolean","attribute.boolean.description":"Ya atau tidak, 1 atau 0, benar atau salah","attribute.component":"Komponen","attribute.component.description":"Ruang yang boleh diulang atau digunakan semula","attribute.date":"Tarikh","attribute.date.description":"Pemilih tarikh dengan jam, minit dan saat","attribute.datetime":"Masa tarikh","attribute.dynamiczone":"Zon dinamik","attribute.dynamiczone.description":"Memilih komponen secara dinamik semasa mengedit kandungan","attribute.email":"E-mel","attribute.email.description":"Ruang e-mel dengan pengesahan format","attribute.enumeration":"Pilihan","attribute.enumeration.description":"Senarai untuk dipilih","attribute.json":"JSON","attribute.json.description":"Data dalam format JSON","attribute.media":"Media","attribute.media.description":"Fail seperti gambar, video, dll","attribute.number":"Nombor","attribute.number.description":"Nombor (nombor bulat, apungan, perpuluhan)","attribute.password":"Kata Laluan","attribute.password.description":"Ruang kata laluan dengan penyulitan","attribute.relation":"Perhubung","attribute.relation.description":"Menghubungkan Jenis Koleksi","attribute.richtext":"Teks beraneka","attribute.richtext.description":"Penyunting teks beraneka dengan pilihan format","attribute.text":"Teks","attribute.text.description":"Teks kecil atau panjang seperti tajuk atau penerangan","attribute.time":"Masa","attribute.timestamp":"Cap waktu","attribute.uid":"UID","attribute.uid.description":"Pengecam unik","button.attributes.add.another":"Tambah ruang baru","button.component.add":"Tambah komponen","button.component.create":"Tambah komponen","button.model.create":"Tambah jenis koleksi","button.single-types.create":"Tambah jenis tunggal","component.repeatable":"(boleh diulang)","components.componentSelect.no-component-available":"Anda telah tambah semua komponen anda","components.componentSelect.no-component-available.with-search":"Tidak ada komponen dijumpai dengan carian anda","components.componentSelect.value-component":"{number} komponen dipilih (taip untuk mencari komponen)","components.componentSelect.value-components":"{number} komponen dipilih","configurations":"konfigurasi","contentType.collectionName.description":"Berguna apabila nama Jenis Kandungan dan nama jadual anda berbeza","contentType.collectionName.label":"Nama koleksi","contentType.displayName.label":"Nama paparan","contentType.kind.change.warning":"Anda baru sahaja menukar sesuatu jenis kandungan: API akan diset semula (laluan, pengawal, dan perkhidmatan akan ditulis semula) .","error.attributeName.reserved-name":"Nama ini tidak boleh digunakan dalam jenis kandungan anda kerana ia boleh merosakkan fungsi lain","error.contentTypeName.reserved-name":"Nama ini tidak boleh digunakan dalam projek anda kerana ia boleh merosakkan fungsi lain","error.validation.enum-duplicate":"dua data yang sama tidak dibenarkan","error.validation.minSupMax":"Tidak boleh lebih dari maksimum","error.validation.regex":"Corak regex tidak sah","error.validation.relation.targetAttribute-taken":"Nama ini telah wujud dalam sasaran","form.attribute.component.option.add":"Tambah komponen","form.attribute.component.option.create":"Cip komponen baru","form.attribute.component.option.create.description":"Komponen dikongsi antara pelbagai jenis dan komponen, ia akan tersedia dan dapat diakses di mana sahaja .","form.attribute.component.option.repeatable":"Komponen yang boleh diulang","form.attribute.component.option.repeatable.description":"Sesuai untuk pelbagai pengganti (array) ramuan, tag meta, dan lain-lain ..","form.attribute.component.option.reuse-existing":"Gunakan komponen yang ada","form.attribute.component.option.reuse-existing.description":"Gunakan semula komponen yang telah dibuat untuk memastikan data anda tetap konsisten di semua jenis kandungan","form.attribute.component.option.single":"Komponen tunggal","form.attribute.component.option.single.description":"Sesuai untuk ruang kumpulan seperti alamat penuh, maklumat utama dan lain-lain ...","form.attribute.item.customColumnName":"Gubah nama lajur","form.attribute.item.customColumnName.description":"Ini berguna untuk menamakan semula nama lajur didalam pangkalan data dengan format yang lebih komprehensif untuk respons API","form.attribute.item.defineRelation.fieldName":"Nama ruang","form.attribute.item.enumeration.graphql":"Ganti nama untuk GraphQL","form.attribute.item.enumeration.graphql.description":"Membolehkan anda menggantikan nama yang dihasilkan secara lalai untuk GraphQL","form.attribute.item.enumeration.placeholder":"Cth: \\nmalam \\nnoon \\nevening","form.attribute.item.enumeration.rules":"Pilihan (satu baris setiap pilihan)","form.attribute.item.maximum":"Nilai maksimum","form.attribute.item.maximumLength":"Panjang maksimum","form.attribute.item.minimum":"Nilai minimum","form.attribute.item.minimumLength":"Panjang minimum","form.attribute.item.number.type":"Format nombor","form.attribute.item.number.type.biginteger":"nombor bulat besar (cth: 123456789)","form.attribute.item.number.type.decimal":"perpuluhan (cth: 2.22)","form.attribute.item.number.type.float":"apungan (cth: 3.33333333)","form.attribute.item.number.type.integer":"integer (cth: 10)","form.attribute.item.privateField":"Ruang bersifat persendirian","form.attribute.item.privateField.description":"Ruang ini tidak akan muncul dalam respons API","form.attribute.item.requiredField":"Ruang yang wajib","form.attribute.item.requiredField.description":"Anda tidak akan dapat membuat entri jika ruang ini kosong","form.attribute.item.text.regex":"Corak RegExp","form.attribute.item.text.regex.description":"Teks regular expression","form.attribute.item.uniqueField":"Ruang yang unik","form.attribute.item.uniqueField.description":"Anda tidak boleh buat entri jika ada entri yang sama dengan yang kandungan","form.attribute.media.allowed-types":"Pilih jenis media yang dibenarkan","form.attribute.media.allowed-types.option-files":"Fail","form.attribute.media.allowed-types.option-images":"Gambar","form.attribute.media.allowed-types.option-videos":"Video","form.attribute.media.option.multiple":"Pelbagai media","form.attribute.media.option.multiple.description":"Sesuai untuk slaid, karusel atau muat turun fail yang banyak","form.attribute.media.option.single":"Media tunggal","form.attribute.media.option.single.description":"Sesuai untuk avatar, gambar profil atau sampul","form.attribute.settings.default":"Isi yang asal","form.attribute.text.option.long-text":"Teks panjang","form.attribute.text.option.long-text.description":"Sesuai untuk penerangan, biografi. Pencarian yang tepat dinyahaktifkan.","form.attribute.text.option.short-text":"Teks pendek","form.attribute.text.option.short-text.description":"Sesuai untuk tajuk, nama, pautan (URL). Ia juga membenarkan carian yang tepat .","form.button.add-components-to-dynamiczone":"Tambah komponen ke zon","form.button.add-field":"Tambah ruang lain","form.button.add-first-field-to-created-component":"Tambah ruang pertama ke komponen","form.button.add.field.to.collectionType":"Tambah ruang lain ke jenis koleksi ini","form.button.add.field.to.component":"Tambah ruang lain ke komponen ini","form.button.add.field.to.contentType":"Tambah ruang lain ke jenis kandungan ini","form.button.add.field.to.singleType":"Tambah ruang lain untuk jenis tunggal ini","form.button.cancel":"Batal","form.button.collection-type.description":"Sesuai untuk data yang banyak seperti artikel, produk, komen dan lain-lain","form.button.configure-component":"Tetapkan komponen","form.button.configure-view":"Susun paparan","form.button.select-component":"Pilih komponen","form.button.single-type.description":"Sesuai untuk data tunggal seperti mengenai kami, laman utama dan lain-lain","from":"dari","modalForm.attribute.form.base.name.description":"Tidak boleh ada jarak dalam nama","modalForm.attribute.form.base.name.placeholder":"cth. Slug, URL SEO, URL Canonical","modalForm.attribute.target-field":"Ruang terpasang","modalForm.attributes.select-component":"Pilih komponen","modalForm.attributes.select-components":"Pilih komponen","modalForm.component.header-create":"Cipta komponen","modalForm.components.create-component.category.label":"Pilih kategori atau masukkan nama untuk buat yang baru","modalForm.components.icon.label":"Ikon","modalForm.editCategory.base.name.description":"Tidak boleh ada jarak dalam nama kategori","modalForm.header-edit":"Edit {name}","modalForm.header.categories":"Kategori","modalForm.singleType.header-create":"Cipta jenis tunggal","modalForm.sub-header.addComponentToDynamicZone":"Tambah komponen baru ke zon dinamik","modalForm.sub-header.attribute.create":"Tambah {type} baru","modalForm.sub-header.attribute.create.step":"Tambah komponen baru ({step} / 2)","modalForm.sub-header.attribute.edit":"Edit {name}","modalForm.sub-header.chooseAttribute.collectionType":"Pilih ruang untuk jenis koleksi anda","modalForm.sub-header.chooseAttribute.component":"Pilih ruang untuk komponen anda","modalForm.sub-header.chooseAttribute.singleType":"Pilih ruang untuk jenis tunggal anda","modelPage.attribute.relation-polymorphic":"Perhubung (polimorfik)","modelPage.attribute.relationWith":"Terhubung dengan","notification.info.autoreaload-disable":"Ciri autoReload diperlukan untuk menggunakan plugin ini. Mulakan pelayan anda dengan `strapi Develop`","notification.info.creating.notSaved":"Sila simpan kerja anda sebelum tambah jenis koleksi atau komponen baru","plugin.description.long":"Memodelkan struktur data API anda. Buat ruang dan hubungan baru hanya dalam satu minit. Fail dibuat dan dikemas kini secara automatik dalam projek anda .","plugin.description.short":"Memodelkan struktur data API anda .","popUpForm.navContainer.advanced":"Tetapan lanjut","popUpForm.navContainer.base":"Tetapan asas","popUpWarning.bodyMessage.cancel-modifications":"Adakah anda pasti mahu membatalkan pengubahsuaian anda ?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Adakah anda pasti mahu membatalkan pengubahsuaian anda? Beberapa komponen telah ditambah atau diubah suai ...","popUpWarning.bodyMessage.category.delete":"Adakah anda pasti mahu memadamkan kategori ini? Semua komponen juga akan dihapuskan .","popUpWarning.bodyMessage.component.delete":"Adakah anda pasti mahu memadamkan komponen ini ?","popUpWarning.bodyMessage.contentType.delete":"Adakah anda pasti mahu memadamkan jenis koleksi ini ?","prompt.unsaved":"Adakah anda pasti mahu keluar? Semua pengubahsuaian anda akan hilang .","relation.attributeName.placeholder":"Cth: pengarang, kategori, teg","relation.manyToMany":"mempunyai dan dimiliki oleh banyak","relation.manyToOne":"ada banyak","relation.manyWay":"ada banyak","relation.oneToMany":"dimiliki oleh banyak","relation.oneToOne":"mempunyai dan dimiliki oleh satu","relation.oneWay":"mempunyai satu"}')}}]);
