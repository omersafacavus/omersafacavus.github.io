---
title: "Tarama stratejileri: ada, şerit ve dikiş bölgeleri"
description: "Toz yataklı lazer füzyonda her katman, lazerin izlediği yollarla eritilir. Bu yolların düzeni parçanın sıcaklık geçmişini, dolayısıyla artık gerilmeyi, gözenekliliği ve mikroyapıyı doğrudan belirler."
date: 2026-09-28
lastmod: 2026-09-28
translationKey: atlas-scan-strategies
weight: 30                   # kenar çubuğundaki sıra
params:
  guidetype: main            # main = ana rehber, short = kısa yazı
  level: orta                # başlangıç | orta | ileri
  processes: [additive]
  topics: [process]
  terms: [stitch-zone]       # data/glossary.yaml içindeki terim kimlikleri
draft: true                  # ÖRNEK REHBER: içerik hazır olunca false yapın
---

## Ada stratejisi

Katman küçük karelere, yani adalara bölünür ve her ada kısa vektörlerle taranır. Kısa vektörler yerel ısı birikimini sınırlar; komşu adalarda tarama yönünün değiştirilmesi artık gerilmelerin yönlülüğünü azaltır.

Adaların birleştiği çizgiler bir dikiş bölgesi oluşturur: burada enerji ya iki kez verilir ya da eksik kalır.

## Katmanlar arası döndürme

Pek çok makinede tarama yönü her katmanda belirli bir açıyla döndürülür. Böylece aynı yön art arda tekrar etmez ve katmanlar arası özellik farkları dağılır.

> **Pratik not.** Döndürme açısı ve ada boyutu makineye göre değişir; yeni bir parametre setine geçerken bu iki değeri birlikte kaydedin.

## Dikiş bölgeleri

Dikiş bölgeleri; adalar, şeritler ve çoklu lazer sistemlerinde lazerlerin çalışma alanları arasında oluşur. Kusurları azaltmanın bir yolu, tarama yolunu bu birleşimleri en aza indirecek biçimde sürekli kurmaktır.
