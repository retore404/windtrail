Copyright Copyright (c) 2022-2024 Bluesky PBC, and Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---

These files under this directory was originally derived from:
https://github.com/bluesky-social/atproto/tree/58f719cc1c8d0ebd5ad7cf11221372b671cd7857/packages/api/src/client/types

---

改変箇所
- functionを削除(app/bsky配下)
- 未使用のimportを削除
- /app/src/app/_common/_types/_external/_atproto/app/bsky/feed/defs.ts
  - PostViewのrecordが{}と定義されていたところに実態に合わせて型を追加
