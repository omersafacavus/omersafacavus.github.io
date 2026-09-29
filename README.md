# Ömer Safa Çavuş — kişisel site ve İmalat Atlası

İki dilli (İngilizce `/`, Türkçe `/tr/`) statik site. [Hugo](https://gohugo.io) ile üretilir ve GitHub Pages'te yayımlanır. İçeriğin tamamı `data/` klasöründeki YAML dosyalarında ve `content/` klasöründeki Markdown dosyalarında durur. Kod bilmeden güncellenebilir.

## İlk yayın (bir kez yapılır)

1. GitHub'da **`omersafacavus.github.io`** adında **herkese açık** yeni bir depo oluşturun. README eklemeyin.
2. Bu klasördeki dosyaların tamamını depoya yükleyin. İki yol var:
   - **Tarayıcıdan:** Depo sayfasında *Add file → Upload files* adımını izleyin ve klasörün içeriğini sürükleyip bırakın. `.github` klasörünün de yüklendiğinden emin olun. Görünmüyorsa "gizli dosyaları göster" seçeneğini açın.
   - **Komut satırından:**
     ```bash
     git init && git add . && git commit -m "İlk sürüm"
     git branch -M main
     git remote add origin https://github.com/omersafacavus/omersafacavus.github.io.git
     git push -u origin main
     ```
3. Depoda **Settings → Pages → Build and deployment → Source** alanını **GitHub Actions** olarak ayarlayın.
4. **Actions** sekmesinde "Siteyi yayımla" iş akışının bitmesini bekleyin (1–2 dakika). Site `https://omersafacavus.github.io/` adresinde yayında olur.

Bundan sonra `main` dalına yaptığınız her değişiklik siteyi otomatik olarak yeniden yayımlar.

## İçerik nerede?

| Ne | Dosya |
|---|---|
| Ad, unvan, giriş metni, hakkımda, bağlantılar | `data/profile.yaml` |
| Araştırma alanları | `data/research.yaml` |
| Yayınlar (durum, DOI) | `data/publications.yaml` |
| Projeler (durum, GitHub) | `data/projects.yaml` |
| Deneyim, eğitim, yetkinlikler | `data/experience.yaml`, `data/education.yaml`, `data/skills.yaml` |
| Ödüller ve aldığınız eğitimler | `data/awards.yaml` |
| Kaynaklar (awesome list) | `data/resources.yaml` |
| Verdiğiniz eğitim ve atölyeler | `data/training.yaml` |
| Sözlük terimleri | `data/glossary.yaml` |
| Atlas yapısı, öğrenme yolları | `data/atlas.yaml` |
| Yazılar | `content/en/blog/`, `content/tr/yazilar/` |
| Atlas rehberleri | `content/en/atlas/`, `content/tr/atlas/` |
| Arayüz metinleri (menü, düğme vb.) | `i18n/en.yaml`, `i18n/tr.yaml` |
| CV | `static/cv/Omer-Safa-Cavus-CV.pdf` |
| Ayarlar (Buttondown, Tally, Search Console) | `hugo.toml` → `[params]` |

İki dilli alanlar şu biçimde yazılır:

```yaml
title: { en: "Beam shaping", tr: "Işın şekillendirme" }
```

GitHub'da bir dosyayı düzenlemek için dosyayı açın, kalem simgesine tıklayın, değişikliği yapın ve **Commit changes** deyin. Site birkaç dakika içinde güncellenir.

> YAML'da girinti önemlidir; boşluk kullanın, sekme kullanmayın. Bir hata yaparsanız Actions sekmesinde iş akışı kırmızıya döner ve site eski haliyle kalır. Hatayı düzeltip yeniden kaydetmeniz yeterlidir.

## Yeni yazı ekleme

1. `content/tr/yazilar/ornek-yazi.md` dosyasını kopyalayın ve adını değiştirin (ör. `ilk-yazim.md`). Dosya adı adres olur: `/tr/yazilar/ilk-yazim/`.
2. Başlığı, açıklamayı ve tarihi düzenleyin, metni Markdown ile yazın.
3. `draft: true` satırını silin ya da `false` yapın.
4. İngilizce çevirisi varsa `content/en/blog/` altına koyun ve **aynı `translationKey`** değerini verin. Böylece iki sayfa birbirine bağlanır ve dil düğmesi doğru sayfaya gider.

Atlas rehberleri de aynı şekilde çalışır. Örnek bir taslak `content/tr/atlas/tarama-stratejileri.md` dosyasındadır.

## Sözlük terimi ekleme

`data/glossary.yaml` dosyasındaki örneği kopyalayın. Her terim için Türkçe ve İngilizce sayfalar otomatik oluşur, birbirine bağlanır ve sözlük listesinde aranabilir.

## Kaynaklar listesini GitHub'da "awesome list" olarak yayımlama

Site her derlendiğinde şu iki dosya üretilir:

- `https://omersafacavus.github.io/resources/readme.md` (İngilizce)
- `https://omersafacavus.github.io/tr/kaynaklar/readme.md` (Türkçe)

Ayrı bir `awesome-metal-am` deposu açıp bu içerikleri `README.md` ve `README.tr.md` olarak koyabilirsiniz.

## Bülten ve formlar

- **Bülten (Buttondown):** buttondown.com'da hesap açın ve `hugo.toml` içinde `buttondownUser = "kullanici-adiniz"` satırını doldurun. Boş kaldığı sürece "Abone ol" düğmesi e-posta bağlantısı olarak çalışır.
- **Kurumsal eğitim ve bekleme listesi (Tally):** tally.so'da iki form oluşturun ve paylaşım bağlantılarını `tallyTrainingForm` ile `tallyWaitlistForm` alanlarına yazın. Boş kaldığı sürece bu düğmeler de e-posta bağlantısıdır.

## Google Search Console

1. search.google.com/search-console adresinde **URL öneki** olarak `https://omersafacavus.github.io/` ekleyin.
2. Doğrulama yöntemi olarak **HTML etiketi**ni seçin. Etiketteki `content="..."` değerini `hugo.toml` içindeki `googleSiteVerification` alanına yazın ve kaydedin.
3. Site yeniden yayımlandıktan sonra **Doğrula**'ya basın.
4. **Site haritaları** bölümüne `sitemap.xml` ekleyin. Türkçe ve İngilizce sayfalar ve aralarındaki hreflang bağlantıları otomatik bildirilir.

## Kendi alan adına geçiş

1. `hugo.toml` dosyasındaki `baseURL` değerini yeni adresle değiştirin.
2. `static/CNAME` adlı bir dosya oluşturun ve içine yalnızca alan adını yazın (ör. `omersafacavus.com`).
3. Alan adı sağlayıcınızda GitHub Pages DNS kayıtlarını tanımlayın, ardından *Settings → Pages → Custom domain* alanını doldurun.
4. Search Console'a yeni adresi ayrıca ekleyin.

## Bilgisayarda önizleme (isteğe bağlı)

[Hugo](https://gohugo.io/installation/) 0.150 veya üstünü kurun ve şu komutu çalıştırın:

```bash
hugo server        # http://localhost:1313
hugo server -D     # taslakları da gösterir
```

## Doldurulması gerekenler

- [ ] `data/publications.yaml`: DOI'ler (yayımlanan 6 dergi makalesi). DOI eklenince başlık ve DOI bağlantısı otomatik oluşur.
- [ ] `data/publications.yaml`: 1 numaralı makale (IJEM) hâlâ "submitted" durumunda. 2026 AMCTURKEY bildirileri "to-present" durumunda, sunulduysa `presented` yapın.
- [ ] `data/profile.yaml`: Google Scholar, ORCID ve ResearchGate bağlantıları.
- [ ] `data/projects.yaml`: projelerin GitHub adresleri ve gerçek durumları (şu an üçü de "developing").
- [ ] `data/training.yaml`: eğitim başlıkları taslaktır. Süreleri (`[süre]`) ve içerikleri düzenleyin.
- [ ] `data/education.yaml`: tez başlığının Türkçe çevirisini kontrol edin.
- [ ] `hugo.toml`: `buttondownUser`, `tallyTrainingForm`, `tallyWaitlistForm`, `googleSiteVerification`.
- [ ] `static/cv/`: sitedeki CV'de referansların e-posta adresleri çıkarılmıştır. Güncel CV'nizi aynı adla koyun.

## Tasarım sistemi

Renkler, yazı ölçeği ve boşluklar `assets/css/main.css` dosyasının başındaki değişkenlerde tanımlıdır. Açık ve koyu tema değerleri de oradadır. Yazı tipleri (Archivo ve IBM Plex Mono, SIL Open Font License) sitenin kendi sunucusunda, `static/fonts/` klasöründe barındırılır.
