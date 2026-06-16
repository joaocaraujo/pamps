# Galeria de Eventos Realizados

Fotos de eventos que já aconteceram na Pamps. Cada evento tem sua própria pasta e nome livre.

## Estrutura de Pastas

```
gallery/
  aniversario-sofia-2024/
    01.webp
    02.webp
    03.webp
  confraternizacao-empresa-x/
    01.webp
    02.webp
```

## Como Adicionar um Evento

1. Crie a pasta `public/images/gallery/meu-evento/` (use um slug descritivo, ex.: `aniversario-joao-2025`)
2. Adicione as fotos com nomes sequenciais: `01.webp`, `02.webp`, `03.webp`, …
3. Edite `config/gallery.ts` e inclua um novo item em `galleryEvents`:

```ts
{
  slug: 'aniversario-joao-2025',
  title: 'Aniversário do João',
  images: [
    '/images/gallery/aniversario-joao-2025/01.webp',
    '/images/gallery/aniversario-joao-2025/02.webp',
  ],
}
```

## Recomendações

- Formatos: WebP (preferido), JPG ou PNG
- Tamanho sugerido: 1200×800px ou proporção similar
- O `slug` da pasta deve ser igual ao campo `slug` no config
