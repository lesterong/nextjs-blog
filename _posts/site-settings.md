---
title: 'Site settings'
date: '2023-05-01T00:00:00.000Z'
tag: 'features'
summary: 'Site settings that can be toggled'
---

You can set a title for your site in `lib/constants.ts`.

```typescript
// lib/constants.ts
export const SITE_TITLE = 'Your Blog';
```

You can alter the number of latest posts in `lib/api.ts`.

```typescript
// lib/api.ts
// ...
const POSTS_LATEST = 3;
// ...
```

You can alter the number of posts per page in archives and tags in `lib/api.ts`.

```typescript
// lib/api.ts
// ...
const POSTS_PER_PAGE = 8;
// ...
```
