{{- $lang := site.Language.Lang -}}
{{- $r := site.Data.resources -}}
{{- $other := index (partial "alternates.html" .) 0 -}}
# {{ if eq $lang "tr" }}Metal Eklemeli İmalat Kaynakları{{ else }}Awesome Metal Additive Manufacturing{{ end }}

{{ i18n "resources_intro" }}

{{ if eq $lang "tr" }}Bu liste [{{ site.Params.author }}]({{ site.Home.Permalink }}) tarafından hazırlanır ve [sitedeki Kaynaklar sayfası]({{ .Permalink }}) ile aynı veri dosyasından otomatik üretilir.{{ else }}Curated by [{{ site.Params.author }}]({{ site.Home.Permalink }}). Generated automatically from the same data file as the [Resources page]({{ .Permalink }}).{{ end }}{{ with $other }} {{ if eq $lang "tr" }}[English version]{{ else }}[Türkçe sürüm]{{ end }}({{ .Permalink }}readme.md){{ end }}

## {{ if eq $lang "tr" }}İçindekiler{{ else }}Contents{{ end }}
{{ range $r.categories }}{{ $cat := . }}{{ if where $r.items "category" $cat.id }}
- [{{ partial "t.html" (dict "v" $cat.title "lang" $lang) }}](#{{ partial "t.html" (dict "v" $cat.title "lang" $lang) | anchorize }}){{ end }}{{ end }}
{{ range $r.categories }}{{ $cat := . }}{{ with where $r.items "category" $cat.id }}
## {{ partial "t.html" (dict "v" $cat.title "lang" $lang) }}
{{ range sort . "name" }}
- [{{ .name }}]({{ .url }}) · {{ partial "t.html" (dict "v" .description "lang" $lang) }} `{{ partial "t.html" (dict "v" .platform "lang" $lang) }}` `{{ partial "t.html" (dict "v" .license "lang" $lang) }}`{{ end }}
{{ end }}{{ end }}
## {{ if eq $lang "tr" }}Katkı{{ else }}Contributing{{ end }}

{{ if eq $lang "tr" }}Öneriler için bir issue açın veya {{ site.Data.profile.email }} adresine yazın.{{ else }}Open an issue or email {{ site.Data.profile.email }} with suggestions.{{ end }}
