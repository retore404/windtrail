# コンテナ起動・ページ起動方法のメモ

```
docker compose up -d
docker exec -it windtrail /bin/bash
npm run dev
```

# 色定義の生成方法

https://colors.muz.li/ai-color-combination-generator/
上記で生成．

https://goodpalette.io/536b94-e3246a-a9aeb8
その後，上記でセカンダリカラーを生成．

# ポスト表示のコンポーネント構成

```plantuml
@startuml
left to right direction
rectangle "FeedPost" as FeedPost {
  top to bottom direction
  rectangle "ReplyParent (if exists)" as ReplyParent #line.dashed {
    rectangle "Post" as ReplyParentPost #line.dashed
  }
  rectangle "RepostLabel (if reposted post)" as RepostLabel #line.dashed
  rectangle "Post" as Post {
    rectangle "AvatarIcon"
    rectangle "HandleName"
    rectangle "EmbededContent" {
      rectangle "EmbededImages" as EmbededImages
      rectangle "EmbededRecord" as EmbededRecord {
        rectangle "EmbededViewRecordParts" as EmbededRecordEmbededViewRecordParts #line.dashed
      }
      rectangle "EmbededRecordWithMedia" as EmbededRecordWithMedia {
        rectangle "EmbededImages" as EmbededRecordWithMediaEmbededImages  #line.dashed
        rectangle "EmbededViewRecordParts" as EmbededRecordWithMediaEmbededViewRecordParts  #line.dashed

      }
      EmbededRecordWithMediaEmbededImages --> EmbededImages
    }
  }

  ReplyParentPost --> Post


}

rectangle "EmbededViewRecordParts"  as EmbededViewRecordParts {

}

EmbededRecordEmbededViewRecordParts --> EmbededViewRecordParts
EmbededRecordWithMediaEmbededViewRecordParts --> EmbededViewRecordParts
@enduml

```
