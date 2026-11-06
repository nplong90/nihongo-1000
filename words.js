const WORDS = [
  {
    "id": 1,
    "page": 2,
    "word": "日本",
    "reading": "にほん",
    "meaning": "Nhật Bản",
    "han": "nhật bổn ｜ 日:ニチ・ジツ 本:ホン",
    "example": "日本の夏は暑いです。",
    "translation": "Mùa hè ở Nhật Bản nóng."
  },
  {
    "id": 2,
    "page": 2,
    "word": "自分",
    "reading": "じぶん",
    "meaning": "bản thân, mình",
    "han": "tự phân ｜ 自:ジ・シ 分:ブン・フン",
    "example": "自分で決めました。",
    "translation": "Tôi đã tự quyết định."
  },
  {
    "id": 3,
    "page": 2,
    "word": "時間",
    "reading": "じかん",
    "meaning": "thời gian, giờ",
    "han": "thì gian ｜ 時:ジ 間:カン・ケン",
    "example": "時間がありません。",
    "translation": "Tôi không có thời gian."
  },
  {
    "id": 4,
    "page": 2,
    "word": "好き",
    "reading": "すき",
    "meaning": "thích",
    "han": "hảo ｜ 好:コウ",
    "example": "音楽が好きです。",
    "translation": "Tôi thích âm nhạc."
  },
  {
    "id": 5,
    "page": 2,
    "word": "良い",
    "reading": "よい",
    "meaning": "tốt",
    "han": "lương ｜ 良:リョウ",
    "example": "良い天気ですね。",
    "translation": "Thời tiết đẹp nhỉ."
  },
  {
    "id": 6,
    "page": 2,
    "word": "必要",
    "reading": "ひつよう",
    "meaning": "cần thiết",
    "han": "tất yếu ｜ 必:ヒツ 要:ヨウ",
    "example": "資料が必要です。",
    "translation": "Cần tài liệu."
  },
  {
    "id": 7,
    "page": 2,
    "word": "世界",
    "reading": "せかい",
    "meaning": "thế giới",
    "han": "thế giới ｜ 世:セイ・セ 界:カイ",
    "example": "世界中の人が見ています。",
    "translation": "Mọi người trên thế giới đang xem."
  },
  {
    "id": 8,
    "page": 2,
    "word": "仕事",
    "reading": "しごと",
    "meaning": "công việc",
    "han": "sĩ sự ｜ 仕:シ・ジ 事:ジ・ズ",
    "example": "仕事が忙しいです。",
    "translation": "Công việc bận rộn."
  },
  {
    "id": 9,
    "page": 2,
    "word": "同じ",
    "reading": "おなじ",
    "meaning": "giống nhau",
    "han": "đồng ｜ 同:ドウ",
    "example": "同じ意見です。",
    "translation": "Tôi có cùng ý kiến."
  },
  {
    "id": 10,
    "page": 2,
    "word": "問題",
    "reading": "もんだい",
    "meaning": "vấn đề, câu hỏi",
    "han": "vấn đề ｜ 問:モン 題:ダイ",
    "example": "問題はありません。",
    "translation": "Không có vấn đề gì."
  },
  {
    "id": 11,
    "page": 2,
    "word": "情報",
    "reading": "じょうほう",
    "meaning": "thông tin",
    "han": "tình báo ｜ 情:ジョウ・セイ 報:ホウ",
    "example": "新しい情報を共有します。",
    "translation": "Tôi chia sẻ thông tin mới."
  },
  {
    "id": 12,
    "page": 2,
    "word": "関係",
    "reading": "かんけい",
    "meaning": "quan hệ, liên quan",
    "han": "quan hệ ｜ 関:カン 係:ケイ",
    "example": "仕事に関係があります。",
    "translation": "Có liên quan đến công việc."
  },
  {
    "id": 13,
    "page": 2,
    "word": "今日",
    "reading": "きょう",
    "meaning": "hôm nay",
    "han": "kim nhật ｜ 今:コン・キン 日:ニチ・ジツ",
    "example": "今日は晴れです。",
    "translation": "Hôm nay trời nắng."
  },
  {
    "id": 14,
    "page": 2,
    "word": "本当に",
    "reading": "ほんとうに",
    "meaning": "thật sự",
    "han": "bổn đang ｜ 本:ホン 当:トウ",
    "example": "本当にありがとうございます。",
    "translation": "Thật sự cảm ơn."
  },
  {
    "id": 15,
    "page": 2,
    "word": "以上",
    "reading": "いじょう",
    "meaning": "trở lên, nói trên",
    "han": "dĩ thượng ｜ 以:イ 上:ジョウ・ショウ",
    "example": "以上で終わりです。",
    "translation": "Đến đây là hết."
  },
  {
    "id": 16,
    "page": 2,
    "word": "可能",
    "reading": "かのう",
    "meaning": "có thể, khả thi",
    "han": "khả năng ｜ 可:カ・コク 能:ノウ",
    "example": "明日なら可能です。",
    "translation": "Nếu là ngày mai thì có thể."
  },
  {
    "id": 17,
    "page": 2,
    "word": "場合",
    "reading": "ばあい",
    "meaning": "trường hợp",
    "han": "tràng hợp ｜ 場:ジョウ・チョウ 合:ゴウ・ガッ",
    "example": "遅れる場合は連絡します。",
    "translation": "Nếu bị trễ tôi sẽ liên lạc."
  },
  {
    "id": 18,
    "page": 2,
    "word": "多い",
    "reading": "おおい",
    "meaning": "nhiều",
    "han": "đa ｜ 多:タ",
    "example": "今日は人が多いです。",
    "translation": "Hôm nay đông người."
  },
  {
    "id": 19,
    "page": 3,
    "word": "出来",
    "reading": "でき",
    "meaning": "việc xảy ra, thành quả",
    "han": "xuất lai ｜ 出:シュツ・スイ 来:ライ・タイ",
    "example": "よく出来ました。",
    "translation": "Làm tốt lắm."
  },
  {
    "id": 20,
    "page": 3,
    "word": "人間",
    "reading": "にんげん",
    "meaning": "con người",
    "han": "nhân gian ｜ 人:ジン・ニン 間:カン・ケン",
    "example": "人間は考える動物です。",
    "translation": "Con người là động vật biết suy nghĩ."
  },
  {
    "id": 21,
    "page": 3,
    "word": "欲しい",
    "reading": "ほしい",
    "meaning": "muốn có",
    "han": "dục ｜ 欲:ヨク",
    "example": "新しいパソコンが欲しいです。",
    "translation": "Tôi muốn có máy tính mới."
  },
  {
    "id": 22,
    "page": 3,
    "word": "無い",
    "reading": "ない",
    "meaning": "không có",
    "han": "vô ｜ 無:ム・ブ",
    "example": "時間が無い。",
    "translation": "Không có thời gian."
  },
  {
    "id": 23,
    "page": 3,
    "word": "女性",
    "reading": "じょせい",
    "meaning": "phụ nữ",
    "han": "nữ tính ｜ 女:ジョ・ニョ 性:セイ・ショウ",
    "example": "女性の社員が増えました。",
    "translation": "Nhân viên nữ đã tăng."
  },
  {
    "id": 24,
    "page": 3,
    "word": "意味",
    "reading": "いみ",
    "meaning": "ý nghĩa",
    "han": "ý vị ｜ 意:イ 味:ミ",
    "example": "この言葉の意味を教えてください。",
    "translation": "Xin cho biết nghĩa của từ này."
  },
  {
    "id": 25,
    "page": 3,
    "word": "一緒",
    "reading": "いっしょ",
    "meaning": "cùng nhau",
    "han": "nhất tự ｜ 一:イチ・イツ 緒:ショ・チョ",
    "example": "一緒に行きましょう。",
    "translation": "Cùng đi nhé."
  },
  {
    "id": 26,
    "page": 3,
    "word": "多く",
    "reading": "おおく",
    "meaning": "nhiều, phần lớn",
    "han": "đa ｜ 多:タ",
    "example": "多くの人が参加しました。",
    "translation": "Nhiều người đã tham gia."
  },
  {
    "id": 27,
    "page": 3,
    "word": "使用",
    "reading": "しよう",
    "meaning": "sử dụng",
    "han": "sử dụng ｜ 使:シ 用:ヨウ",
    "example": "会議室を使用します。",
    "translation": "Tôi sử dụng phòng họp."
  },
  {
    "id": 28,
    "page": 3,
    "word": "悪い",
    "reading": "わるい",
    "meaning": "xấu, tồi",
    "han": "ác ｜ 悪:アク・オ",
    "example": "天気が悪いです。",
    "translation": "Thời tiết xấu."
  },
  {
    "id": 29,
    "page": 3,
    "word": "結果",
    "reading": "けっか",
    "meaning": "kết quả",
    "han": "kết quả ｜ 結:ケツ・ケチ 果:カ",
    "example": "結果を報告します。",
    "translation": "Tôi báo cáo kết quả."
  },
  {
    "id": 30,
    "page": 3,
    "word": "写真",
    "reading": "しゃしん",
    "meaning": "bức ảnh",
    "han": "tả chân ｜ 写:シャ・ジャ 真:シン",
    "example": "写真を撮ります。",
    "translation": "Tôi chụp ảnh."
  },
  {
    "id": 31,
    "page": 3,
    "word": "参加",
    "reading": "さんか",
    "meaning": "tham gia",
    "han": "sâm gia ｜ 参:サン・シン 加:カ",
    "example": "会議に参加します。",
    "translation": "Tôi tham gia cuộc họp."
  },
  {
    "id": 32,
    "page": 3,
    "word": "会社",
    "reading": "かいしゃ",
    "meaning": "công ty",
    "han": "cối xã ｜ 会:カイ・エ 社:シャ",
    "example": "会社に行きます。",
    "translation": "Tôi đi đến công ty."
  },
  {
    "id": 33,
    "page": 3,
    "word": "最近",
    "reading": "さいきん",
    "meaning": "gần đây",
    "han": "tối cận ｜ 最:サイ・シュ 近:キン・コン",
    "example": "最近忙しいです。",
    "translation": "Dạo này tôi bận."
  },
  {
    "id": 34,
    "page": 3,
    "word": "違う",
    "reading": "ちがう",
    "meaning": "khác, sai",
    "han": "vi ｜ 違:イ",
    "example": "考えが違います。",
    "translation": "Cách nghĩ khác nhau."
  },
  {
    "id": 35,
    "page": 3,
    "word": "少し",
    "reading": "すこし",
    "meaning": "một chút",
    "han": "thiểu ｜ 少:ショウ",
    "example": "少し待ってください。",
    "translation": "Xin chờ một chút."
  },
  {
    "id": 36,
    "page": 3,
    "word": "時代",
    "reading": "じだい",
    "meaning": "thời đại",
    "han": "thì đại ｜ 時:ジ 代:ダイ・タイ",
    "example": "新しい時代が始まります。",
    "translation": "Một thời đại mới bắt đầu."
  },
  {
    "id": 37,
    "page": 4,
    "word": "お前",
    "reading": "おまえ",
    "meaning": "mày, cậu (thô)",
    "han": "tiền ｜ 前:ゼン",
    "example": "お前は誰だ。",
    "translation": "Mày là ai?"
  },
  {
    "id": 38,
    "page": 4,
    "word": "子供",
    "reading": "こども",
    "meaning": "trẻ em",
    "han": "tử cung ｜ 子:シ・ス 供:キョウ・ク",
    "example": "子供が公園で遊んでいます。",
    "translation": "Trẻ em đang chơi ở công viên."
  },
  {
    "id": 39,
    "page": 4,
    "word": "名前",
    "reading": "なまえ",
    "meaning": "tên",
    "han": "danh tiền ｜ 名:メイ・ミョウ 前:ゼン",
    "example": "名前を教えてください。",
    "translation": "Xin cho biết tên."
  },
  {
    "id": 40,
    "page": 4,
    "word": "無料",
    "reading": "むりょう",
    "meaning": "miễn phí",
    "han": "vô liêu ｜ 無:ム・ブ 料:リョウ",
    "example": "無料で利用できます。",
    "translation": "Có thể dùng miễn phí."
  },
  {
    "id": 41,
    "page": 4,
    "word": "場所",
    "reading": "ばしょ",
    "meaning": "địa điểm",
    "han": "tràng sở ｜ 場:ジョウ・チョウ 所:ショ",
    "example": "場所を確認します。",
    "translation": "Tôi xác nhận địa điểm."
  },
  {
    "id": 42,
    "page": 4,
    "word": "最後",
    "reading": "さいご",
    "meaning": "cuối cùng",
    "han": "tối hậu ｜ 最:サイ・シュ 後:ゴ・コウ",
    "example": "最後まで頑張ります。",
    "translation": "Tôi sẽ cố gắng đến cuối."
  },
  {
    "id": 43,
    "page": 4,
    "word": "高い",
    "reading": "たかい",
    "meaning": "cao; đắt",
    "han": "cao ｜ 高:コウ",
    "example": "このバッグは高いです。",
    "translation": "Cái túi này đắt."
  },
  {
    "id": 44,
    "page": 4,
    "word": "一番",
    "reading": "いちばん",
    "meaning": "nhất, số một",
    "han": "nhất phiên ｜ 一:イチ・イツ 番:バン",
    "example": "一番好きな食べ物は何ですか。",
    "translation": "Món bạn thích nhất là gì?"
  },
  {
    "id": 45,
    "page": 4,
    "word": "受け",
    "reading": "うけ",
    "meaning": "nhận, tiếp nhận",
    "han": "thụ ｜ 受:ジュ",
    "example": "電話を受けました。",
    "translation": "Tôi đã nhận điện thoại."
  },
  {
    "id": 46,
    "page": 4,
    "word": "大丈夫",
    "reading": "だいじょうぶ",
    "meaning": "không sao, ổn",
    "han": "đại trượng phu ｜ 大:ダイ・タイ 丈:ジョウ 夫:フ・フウ",
    "example": "大丈夫ですか。",
    "translation": "Bạn có ổn không?"
  },
  {
    "id": 47,
    "page": 4,
    "word": "言葉",
    "reading": "ことば",
    "meaning": "từ ngữ, lời nói",
    "han": "ngôn diệp ｜ 言:ゲン・ゴン 葉:ヨウ",
    "example": "言葉を選びます。",
    "translation": "Tôi chọn lời nói."
  },
  {
    "id": 48,
    "page": 4,
    "word": "映画",
    "reading": "えいが",
    "meaning": "phim",
    "han": "ánh hoạch ｜ 映:エイ 画:ガ・カク",
    "example": "映画を見に行きます。",
    "translation": "Tôi đi xem phim."
  },
  {
    "id": 49,
    "page": 4,
    "word": "社会",
    "reading": "しゃかい",
    "meaning": "xã hội",
    "han": "xã cối ｜ 社:シャ 会:カイ・エ",
    "example": "社会は変化しています。",
    "translation": "Xã hội đang thay đổi."
  },
  {
    "id": 50,
    "page": 4,
    "word": "方法",
    "reading": "ほうほう",
    "meaning": "phương pháp",
    "han": "phương pháp ｜ 方:ホウ 法:ホウ・ハッ",
    "example": "別の方法を試します。",
    "translation": "Tôi thử cách khác."
  },
  {
    "id": 51,
    "page": 4,
    "word": "最初",
    "reading": "さいしょ",
    "meaning": "đầu tiên",
    "han": "tối sơ ｜ 最:サイ・シュ 初:ショ",
    "example": "最初に説明します。",
    "translation": "Trước tiên tôi giải thích."
  },
  {
    "id": 52,
    "page": 4,
    "word": "理由",
    "reading": "りゆう",
    "meaning": "lý do",
    "han": "lý do ｜ 理:リ 由:ユ・ユウ",
    "example": "理由を教えてください。",
    "translation": "Xin cho biết lý do."
  },
  {
    "id": 53,
    "page": 4,
    "word": "相手",
    "reading": "あいて",
    "meaning": "đối phương, đối tác",
    "han": "tương thủ ｜ 相:ソウ・ショウ 手:シュ・ズ",
    "example": "相手の意見を聞きます。",
    "translation": "Tôi nghe ý kiến của đối phương."
  },
  {
    "id": 54,
    "page": 4,
    "word": "作品",
    "reading": "さくひん",
    "meaning": "tác phẩm",
    "han": "tác phẩm ｜ 作:サク・サ 品:ヒン・ホン",
    "example": "彼の作品が好きです。",
    "translation": "Tôi thích tác phẩm của anh ấy."
  },
  {
    "id": 55,
    "page": 5,
    "word": "動画",
    "reading": "どうが",
    "meaning": "video",
    "han": "động hoạch ｜ 動:ドウ 画:ガ・カク",
    "example": "動画を見ます。",
    "translation": "Tôi xem video."
  },
  {
    "id": 56,
    "page": 5,
    "word": "始め",
    "reading": "はじめ",
    "meaning": "bắt đầu",
    "han": "thủy ｜ 始:シ",
    "example": "仕事を始めます。",
    "translation": "Tôi bắt đầu công việc."
  },
  {
    "id": 57,
    "page": 5,
    "word": "彼女",
    "reading": "かのじょ",
    "meaning": "cô ấy; bạn gái",
    "han": "bỉ nữ ｜ 彼:ヒ 女:ジョ・ニョ",
    "example": "彼女は先生です。",
    "translation": "Cô ấy là giáo viên."
  },
  {
    "id": 58,
    "page": 5,
    "word": "企業",
    "reading": "きぎょう",
    "meaning": "doanh nghiệp",
    "han": "xí nghiệp ｜ 企:キ 業:ギョウ・ゴウ",
    "example": "大きな企業で働いています。",
    "translation": "Tôi làm ở một doanh nghiệp lớn."
  },
  {
    "id": 59,
    "page": 5,
    "word": "利用",
    "reading": "りよう",
    "meaning": "sử dụng",
    "han": "lợi dụng ｜ 利:リ 用:ヨウ",
    "example": "システムを利用します。",
    "translation": "Tôi sử dụng hệ thống."
  },
  {
    "id": 60,
    "page": 5,
    "word": "存在",
    "reading": "そんざい",
    "meaning": "sự tồn tại",
    "han": "tồn tại ｜ 存:ソン・ゾン 在:ザイ",
    "example": "その存在を知りませんでした。",
    "translation": "Tôi không biết sự tồn tại đó."
  },
  {
    "id": 61,
    "page": 5,
    "word": "漫画",
    "reading": "まんが",
    "meaning": "truyện tranh",
    "han": "mạn hoạch ｜ 漫:マン 画:ガ・カク",
    "example": "漫画を読みます。",
    "translation": "Tôi đọc truyện tranh."
  },
  {
    "id": 62,
    "page": 5,
    "word": "無理",
    "reading": "むり",
    "meaning": "vô lý, quá sức",
    "han": "vô lý ｜ 無:ム・ブ 理:リ",
    "example": "無理をしないでください。",
    "translation": "Xin đừng quá sức."
  },
  {
    "id": 63,
    "page": 5,
    "word": "現在",
    "reading": "げんざい",
    "meaning": "hiện tại",
    "han": "hiện tại ｜ 現:ゲン 在:ザイ",
    "example": "現在の状況を説明します。",
    "translation": "Tôi giải thích tình hình hiện tại."
  },
  {
    "id": 64,
    "page": 5,
    "word": "以外",
    "reading": "いがい",
    "meaning": "ngoài ra",
    "han": "dĩ ngoại ｜ 以:イ 外:ガイ・ゲ",
    "example": "彼以外は来ました。",
    "translation": "Ngoài anh ấy ra mọi người đã đến."
  },
  {
    "id": 65,
    "page": 5,
    "word": "事件",
    "reading": "じけん",
    "meaning": "vụ việc",
    "han": "sự kiện ｜ 事:ジ・ズ 件:ケン",
    "example": "事件が起きました。",
    "translation": "Đã xảy ra vụ việc."
  },
  {
    "id": 66,
    "page": 5,
    "word": "普通",
    "reading": "ふつう",
    "meaning": "bình thường",
    "han": "phổ thông ｜ 普:フ 通:ツウ・ツ",
    "example": "普通の日です。",
    "translation": "Là một ngày bình thường."
  },
  {
    "id": 67,
    "page": 5,
    "word": "通り",
    "reading": "とおり",
    "meaning": "con đường; như",
    "han": "thông ｜ 通:ツウ・ツ",
    "example": "説明の通りです。",
    "translation": "Đúng như giải thích."
  },
  {
    "id": 68,
    "page": 5,
    "word": "女子",
    "reading": "じょし",
    "meaning": "nữ, con gái",
    "han": "nữ tử ｜ 女:ジョ・ニョ 子:シ・ス",
    "example": "女子学生が多いです。",
    "translation": "Có nhiều nữ sinh viên."
  },
  {
    "id": 69,
    "page": 5,
    "word": "学校",
    "reading": "がっこう",
    "meaning": "trường học",
    "han": "học giáo ｜ 学:ガク 校:コウ・キョウ",
    "example": "学校に行きます。",
    "translation": "Tôi đi học."
  },
  {
    "id": 70,
    "page": 5,
    "word": "最高",
    "reading": "さいこう",
    "meaning": "tuyệt nhất, cao nhất",
    "han": "tối cao ｜ 最:サイ・シュ 高:コウ",
    "example": "最高の結果でした。",
    "translation": "Kết quả tuyệt nhất."
  },
  {
    "id": 71,
    "page": 5,
    "word": "状態",
    "reading": "じょうたい",
    "meaning": "trạng thái",
    "han": "trạng thái ｜ 状:ジョウ 態:タイ",
    "example": "機械の状態を確認します。",
    "translation": "Tôi kiểm tra tình trạng máy."
  },
  {
    "id": 72,
    "page": 5,
    "word": "画像",
    "reading": "がぞう",
    "meaning": "hình ảnh",
    "han": "hoạch tượng ｜ 画:ガ・カク 像:ゾウ",
    "example": "画像を送ります。",
    "translation": "Tôi gửi hình ảnh."
  },
  {
    "id": 73,
    "page": 6,
    "word": "発売",
    "reading": "はつばい",
    "meaning": "phát hành, bán ra",
    "han": "bát mại ｜ 発:ハツ・ホツ 売:バイ",
    "example": "新商品が発売されました。",
    "translation": "Sản phẩm mới đã được bán ra."
  },
  {
    "id": 74,
    "page": 6,
    "word": "簡単",
    "reading": "かんたん",
    "meaning": "đơn giản",
    "han": "giản đan ｜ 簡:カン・ケン 単:タン",
    "example": "簡単な作業です。",
    "translation": "Là công việc đơn giản."
  },
  {
    "id": 75,
    "page": 6,
    "word": "絶対",
    "reading": "ぜったい",
    "meaning": "tuyệt đối",
    "han": "tuyệt đối ｜ 絶:ゼツ 対:タイ・ツイ",
    "example": "絶対に行きます。",
    "translation": "Tôi nhất định sẽ đi."
  },
  {
    "id": 76,
    "page": 6,
    "word": "先生",
    "reading": "せんせい",
    "meaning": "thầy cô, bác sĩ",
    "han": "tiên sanh ｜ 先:セン 生:セイ・ショウ",
    "example": "先生に質問します。",
    "translation": "Tôi hỏi thầy cô."
  },
  {
    "id": 77,
    "page": 6,
    "word": "実際",
    "reading": "じっさい",
    "meaning": "thực tế",
    "han": "thực tế ｜ 実:ジツ・シツ 際:サイ",
    "example": "実際に見てみましょう。",
    "translation": "Hãy thử xem thực tế."
  },
  {
    "id": 78,
    "page": 6,
    "word": "気持ち",
    "reading": "きもち",
    "meaning": "cảm giác, tâm trạng",
    "han": "khí trì ｜ 気:キ・ケ 持:ジ",
    "example": "気持ちが分かります。",
    "translation": "Tôi hiểu cảm giác đó."
  },
  {
    "id": 79,
    "page": 6,
    "word": "確認",
    "reading": "かくにん",
    "meaning": "xác nhận, kiểm tra",
    "han": "xác nhận ｜ 確:カク・コウ 認:ニン",
    "example": "内容を確認してください。",
    "translation": "Xin hãy kiểm tra nội dung."
  },
  {
    "id": 80,
    "page": 6,
    "word": "開催",
    "reading": "かいさい",
    "meaning": "tổ chức (sự kiện)",
    "han": "khai thôi ｜ 開:カイ 催:サイ",
    "example": "イベントを開催します。",
    "translation": "Chúng tôi tổ chức sự kiện."
  },
  {
    "id": 81,
    "page": 6,
    "word": "今回",
    "reading": "こんかい",
    "meaning": "lần này",
    "han": "kim hồi ｜ 今:コン・キン 回:カイ・エ",
    "example": "今回はよろしくお願いします。",
    "translation": "Lần này xin nhờ anh/chị."
  },
  {
    "id": 82,
    "page": 6,
    "word": "全部",
    "reading": "ぜんぶ",
    "meaning": "toàn bộ",
    "han": "toàn bộ ｜ 全:ゼン 部:ブ",
    "example": "全部終わりました。",
    "translation": "Đã xong hết."
  },
  {
    "id": 83,
    "page": 6,
    "word": "個人",
    "reading": "こじん",
    "meaning": "cá nhân",
    "han": "cá nhân ｜ 個:コ・カ 人:ジン・ニン",
    "example": "個人の意見です。",
    "translation": "Là ý kiến cá nhân."
  },
  {
    "id": 84,
    "page": 6,
    "word": "早く",
    "reading": "はやく",
    "meaning": "sớm, nhanh",
    "han": "tảo ｜ 早:ソウ・サッ",
    "example": "早く来てください。",
    "translation": "Hãy đến sớm."
  },
  {
    "id": 85,
    "page": 6,
    "word": "結婚",
    "reading": "けっこん",
    "meaning": "kết hôn",
    "han": "kết hôn ｜ 結:ケツ・ケチ 婚:コン",
    "example": "来年結婚します。",
    "translation": "Năm sau tôi kết hôn."
  },
  {
    "id": 86,
    "page": 6,
    "word": "一つ",
    "reading": "ひとつ",
    "meaning": "một cái",
    "han": "nhất ｜ 一:イチ・イツ",
    "example": "一つ質問があります。",
    "translation": "Tôi có một câu hỏi."
  },
  {
    "id": 87,
    "page": 6,
    "word": "初めて",
    "reading": "はじめて",
    "meaning": "lần đầu tiên",
    "han": "sơ ｜ 初:ショ",
    "example": "初めて日本に来ました。",
    "translation": "Lần đầu tôi đến Nhật."
  },
  {
    "id": 88,
    "page": 6,
    "word": "友達",
    "reading": "ともだち",
    "meaning": "bạn bè",
    "han": "hữu đạt ｜ 友:ユウ 達:タツ・ダ",
    "example": "友達と会います。",
    "translation": "Tôi gặp bạn."
  },
  {
    "id": 89,
    "page": 6,
    "word": "生活",
    "reading": "せいかつ",
    "meaning": "cuộc sống, sinh hoạt",
    "han": "sanh hoạt ｜ 生:セイ・ショウ 活:カツ",
    "example": "生活が変わりました。",
    "translation": "Cuộc sống đã thay đổi."
  },
  {
    "id": 90,
    "page": 6,
    "word": "人気",
    "reading": "にんき",
    "meaning": "được ưa chuộng",
    "han": "nhân khí ｜ 人:ジン・ニン 気:キ・ケ",
    "example": "人気のある商品です。",
    "translation": "Là sản phẩm được ưa chuộng."
  },
  {
    "id": 91,
    "page": 7,
    "word": "公開",
    "reading": "こうかい",
    "meaning": "công khai",
    "han": "công khai ｜ 公:コウ・ク 開:カイ",
    "example": "資料を公開します。",
    "translation": "Tôi công khai tài liệu."
  },
  {
    "id": 92,
    "page": 7,
    "word": "新しい",
    "reading": "あたらしい",
    "meaning": "mới",
    "han": "tân ｜ 新:シン",
    "example": "新しい靴を買いました。",
    "translation": "Tôi đã mua giày mới."
  },
  {
    "id": 93,
    "page": 7,
    "word": "理解",
    "reading": "りかい",
    "meaning": "hiểu, thấu hiểu",
    "han": "lý giải ｜ 理:リ 解:カイ・ゲ",
    "example": "内容を理解しました。",
    "translation": "Tôi đã hiểu nội dung."
  },
  {
    "id": 94,
    "page": 7,
    "word": "全て",
    "reading": "すべて",
    "meaning": "tất cả",
    "han": "toàn ｜ 全:ゼン",
    "example": "全てうまくいきました。",
    "translation": "Mọi thứ đều suôn sẻ."
  },
  {
    "id": 95,
    "page": 7,
    "word": "内容",
    "reading": "ないよう",
    "meaning": "nội dung",
    "han": "nạp dong ｜ 内:ナイ・ダイ 容:ヨウ",
    "example": "メールの内容を確認します。",
    "translation": "Tôi xác nhận nội dung email."
  },
  {
    "id": 96,
    "page": 7,
    "word": "女の子",
    "reading": "おんなのこ",
    "meaning": "bé gái",
    "han": "nữ tử ｜ 女:ジョ・ニョ 子:シ・ス",
    "example": "女の子が歌っています。",
    "translation": "Bé gái đang hát."
  },
  {
    "id": 97,
    "page": 7,
    "word": "対応",
    "reading": "たいおう",
    "meaning": "xử lý, ứng phó",
    "han": "đối ứng ｜ 対:タイ・ツイ 応:オウ・ヨウ",
    "example": "問い合わせに対応します。",
    "translation": "Tôi xử lý yêu cầu hỏi."
  },
  {
    "id": 98,
    "page": 7,
    "word": "放送",
    "reading": "ほうそう",
    "meaning": "phát sóng",
    "han": "phóng tống ｜ 放:ホウ 送:ソウ",
    "example": "明日放送されます。",
    "translation": "Ngày mai sẽ được phát sóng."
  },
  {
    "id": 99,
    "page": 7,
    "word": "活動",
    "reading": "かつどう",
    "meaning": "hoạt động",
    "han": "hoạt động ｜ 活:カツ 動:ドウ",
    "example": "地域で活動しています。",
    "translation": "Tôi hoạt động ở địa phương."
  },
  {
    "id": 100,
    "page": 7,
    "word": "状況",
    "reading": "じょうきょう",
    "meaning": "tình hình",
    "han": "trạng huống ｜ 状:ジョウ 況:キョウ",
    "example": "状況を教えてください。",
    "translation": "Xin cho biết tình hình."
  },
  {
    "id": 101,
    "page": 8,
    "word": "登場",
    "reading": "とうじょう",
    "meaning": "xuất hiện",
    "han": "đăng tràng ｜ 登:トウ・ト 場:ジョウ・チョウ",
    "example": "新しい機種が登場しました。",
    "translation": "Mẫu mới đã xuất hiện."
  },
  {
    "id": 102,
    "page": 8,
    "word": "販売",
    "reading": "はんばい",
    "meaning": "bán hàng",
    "han": "phiến mại ｜ 販:ハン 売:バイ",
    "example": "商品を販売します。",
    "translation": "Tôi bán sản phẩm."
  },
  {
    "id": 103,
    "page": 8,
    "word": "大変",
    "reading": "たいへん",
    "meaning": "vất vả; rất",
    "han": "đại biến ｜ 大:ダイ・タイ 変:ヘン",
    "example": "大変ですね。",
    "translation": "Vất vả nhỉ."
  },
  {
    "id": 104,
    "page": 8,
    "word": "完全",
    "reading": "かんぜん",
    "meaning": "hoàn toàn",
    "han": "hoàn toàn ｜ 完:カン 全:ゼン",
    "example": "完全に終わりました。",
    "translation": "Đã hoàn toàn kết thúc."
  },
  {
    "id": 105,
    "page": 8,
    "word": "技術",
    "reading": "ぎじゅつ",
    "meaning": "kỹ thuật",
    "han": "kĩ thuật ｜ 技:ギ 術:ジュツ",
    "example": "新しい技術を学びます。",
    "translation": "Tôi học kỹ thuật mới."
  },
  {
    "id": 106,
    "page": 8,
    "word": "特に",
    "reading": "とくに",
    "meaning": "đặc biệt",
    "han": "đặc ｜ 特:トク",
    "example": "特に問題はありません。",
    "translation": "Đặc biệt không có vấn đề."
  },
  {
    "id": 107,
    "page": 8,
    "word": "研究",
    "reading": "けんきゅう",
    "meaning": "nghiên cứu",
    "han": "nghiên cứu ｜ 研:ケン 究:キュウ・ク",
    "example": "大学で研究しています。",
    "translation": "Tôi nghiên cứu ở đại học."
  },
  {
    "id": 108,
    "page": 8,
    "word": "説明",
    "reading": "せつめい",
    "meaning": "giải thích",
    "han": "duyệt minh ｜ 説:セツ・ゼイ 明:メイ・ミョウ",
    "example": "詳しく説明します。",
    "translation": "Tôi giải thích chi tiết."
  },
  {
    "id": 109,
    "page": 8,
    "word": "発表",
    "reading": "はっぴょう",
    "meaning": "công bố, phát biểu",
    "han": "bát biểu ｜ 発:ハツ・ホツ 表:ヒョウ",
    "example": "結果を発表します。",
    "translation": "Tôi công bố kết quả."
  },
  {
    "id": 110,
    "page": 8,
    "word": "お金",
    "reading": "おかね",
    "meaning": "tiền",
    "han": "kim ｜ 金:キン・コン",
    "example": "お金がありません。",
    "translation": "Tôi không có tiền."
  },
  {
    "id": 111,
    "page": 8,
    "word": "一般",
    "reading": "いっぱん",
    "meaning": "chung, phổ thông",
    "han": "nhất bàn ｜ 一:イチ・イツ 般:ハン",
    "example": "一般の人も入れます。",
    "translation": "Người dân thường cũng vào được."
  },
  {
    "id": 112,
    "page": 8,
    "word": "攻撃",
    "reading": "こうげき",
    "meaning": "tấn công",
    "han": "công kích ｜ 攻:コウ 撃:ゲキ",
    "example": "相手チームの攻撃が強いです。",
    "translation": "Đợt tấn công của đội bạn mạnh."
  },
  {
    "id": 113,
    "page": 8,
    "word": "自身",
    "reading": "じしん",
    "meaning": "bản thân",
    "han": "tự thân ｜ 自:ジ・シ 身:シン",
    "example": "自分自身で確認します。",
    "translation": "Tôi tự mình xác nhận."
  },
  {
    "id": 114,
    "page": 8,
    "word": "部分",
    "reading": "ぶぶん",
    "meaning": "bộ phận, phần",
    "han": "bộ phân ｜ 部:ブ 分:ブン・フン",
    "example": "この部分を直します。",
    "translation": "Tôi sửa phần này."
  },
  {
    "id": 115,
    "page": 8,
    "word": "電話",
    "reading": "でんわ",
    "meaning": "điện thoại",
    "han": "điện thoại ｜ 電:デン 話:ワ",
    "example": "電話をかけます。",
    "translation": "Tôi gọi điện."
  },
  {
    "id": 116,
    "page": 8,
    "word": "予定",
    "reading": "よてい",
    "meaning": "dự định, lịch",
    "han": "dư định ｜ 予:ヨ・シャ 定:テイ・ジョウ",
    "example": "明日の予定を教えてください。",
    "translation": "Cho tôi biết lịch ngày mai."
  },
  {
    "id": 117,
    "page": 8,
    "word": "全員",
    "reading": "ぜんいん",
    "meaning": "toàn thể mọi người",
    "han": "toàn viên ｜ 全:ゼン 員:イン",
    "example": "全員そろいました。",
    "translation": "Mọi người đã đủ."
  },
  {
    "id": 118,
    "page": 8,
    "word": "戦争",
    "reading": "せんそう",
    "meaning": "chiến tranh",
    "han": "khuyết tranh ｜ 戦:セン 争:ソウ",
    "example": "戦争のない世界を願います。",
    "translation": "Tôi mong một thế giới không có chiến tranh."
  },
  {
    "id": 119,
    "page": 9,
    "word": "明日",
    "reading": "あした",
    "meaning": "ngày mai",
    "han": "minh nhật ｜ 明:メイ・ミョウ 日:ニチ・ジツ",
    "example": "明日会いましょう。",
    "translation": "Ngày mai gặp nhau nhé."
  },
  {
    "id": 120,
    "page": 9,
    "word": "登録",
    "reading": "とうろく",
    "meaning": "đăng ký",
    "han": "đăng lục ｜ 登:トウ・ト 録:ロク",
    "example": "アカウントを登録します。",
    "translation": "Tôi đăng ký tài khoản."
  },
  {
    "id": 121,
    "page": 9,
    "word": "確か",
    "reading": "たしか",
    "meaning": "chắc là, đúng là",
    "han": "xác ｜ 確:カク・コウ",
    "example": "確か会議は三時でした。",
    "translation": "Nếu tôi nhớ đúng, họp lúc ba giờ."
  },
  {
    "id": 122,
    "page": 9,
    "word": "紹介",
    "reading": "しょうかい",
    "meaning": "giới thiệu",
    "han": "thiệu giới ｜ 紹:ショウ 介:カイ",
    "example": "友達を紹介します。",
    "translation": "Tôi giới thiệu bạn tôi."
  },
  {
    "id": 123,
    "page": 9,
    "word": "良く",
    "reading": "よく",
    "meaning": "tốt, thường xuyên",
    "han": "lương ｜ 良:リョウ",
    "example": "良く考えます。",
    "translation": "Tôi suy nghĩ kỹ."
  },
  {
    "id": 124,
    "page": 9,
    "word": "機能",
    "reading": "きのう",
    "meaning": "chức năng",
    "han": "ky năng ｜ 機:キ 能:ノウ",
    "example": "新しい機能を追加します。",
    "translation": "Tôi thêm chức năng mới."
  },
  {
    "id": 125,
    "page": 9,
    "word": "計画",
    "reading": "けいかく",
    "meaning": "kế hoạch",
    "han": "kế hoạch ｜ 計:ケイ 画:ガ・カク",
    "example": "計画を立てます。",
    "translation": "Tôi lập kế hoạch."
  },
  {
    "id": 126,
    "page": 9,
    "word": "設定",
    "reading": "せってい",
    "meaning": "cài đặt, thiết lập",
    "han": "thiết định ｜ 設:セツ 定:テイ・ジョウ",
    "example": "設定を変更します。",
    "translation": "Tôi thay đổi cài đặt."
  },
  {
    "id": 127,
    "page": 9,
    "word": "調査",
    "reading": "ちょうさ",
    "meaning": "điều tra, khảo sát",
    "han": "điều tra ｜ 調:チョウ 査:サ",
    "example": "市場を調査します。",
    "translation": "Tôi khảo sát thị trường."
  },
  {
    "id": 128,
    "page": 9,
    "word": "重要",
    "reading": "じゅうよう",
    "meaning": "quan trọng",
    "han": "trọng yếu ｜ 重:ジュウ・チョウ 要:ヨウ",
    "example": "重要なお知らせです。",
    "translation": "Là thông báo quan trọng."
  },
  {
    "id": 129,
    "page": 9,
    "word": "に対して",
    "reading": "にたいして",
    "meaning": "đối với",
    "han": "đối ｜ 対:タイ・ツイ",
    "example": "質問に対して答えます。",
    "translation": "Tôi trả lời câu hỏi."
  },
  {
    "id": 130,
    "page": 9,
    "word": "人生",
    "reading": "じんせい",
    "meaning": "cuộc đời",
    "han": "nhân sanh ｜ 人:ジン・ニン 生:セイ・ショウ",
    "example": "人生は一度だけです。",
    "translation": "Cuộc đời chỉ có một lần."
  },
  {
    "id": 131,
    "page": 9,
    "word": "目的",
    "reading": "もくてき",
    "meaning": "mục đích",
    "han": "mục đích ｜ 目:モク・ボク 的:テキ",
    "example": "目的を確認します。",
    "translation": "Tôi xác nhận mục đích."
  },
  {
    "id": 132,
    "page": 9,
    "word": "自由",
    "reading": "じゆう",
    "meaning": "tự do",
    "han": "tự do ｜ 自:ジ・シ 由:ユ・ユウ",
    "example": "自由に使ってください。",
    "translation": "Hãy dùng tự do."
  },
  {
    "id": 133,
    "page": 9,
    "word": "記事",
    "reading": "きじ",
    "meaning": "bài báo",
    "han": "kí sự ｜ 記:キ 事:ジ・ズ",
    "example": "新聞の記事を読みます。",
    "translation": "Tôi đọc bài báo."
  },
  {
    "id": 134,
    "page": 9,
    "word": "過ぎ",
    "reading": "すぎ",
    "meaning": "quá, qua",
    "han": "quá ｜ 過:カ",
    "example": "もう十時過ぎです。",
    "translation": "Đã quá mười giờ rồi."
  },
  {
    "id": 135,
    "page": 9,
    "word": "開始",
    "reading": "かいし",
    "meaning": "bắt đầu",
    "han": "khai thủy ｜ 開:カイ 始:シ",
    "example": "会議を開始します。",
    "translation": "Tôi bắt đầu cuộc họp."
  },
  {
    "id": 136,
    "page": 9,
    "word": "開発",
    "reading": "かいはつ",
    "meaning": "phát triển",
    "han": "khai bát ｜ 開:カイ 発:ハツ・ホツ",
    "example": "新しい製品を開発します。",
    "translation": "Tôi phát triển sản phẩm mới."
  },
  {
    "id": 137,
    "page": 10,
    "word": "家族",
    "reading": "かぞく",
    "meaning": "gia đình",
    "han": "gia tộc ｜ 家:カ・ケ 族:ゾク",
    "example": "家族と住んでいます。",
    "translation": "Tôi sống cùng gia đình."
  },
  {
    "id": 138,
    "page": 10,
    "word": "影響",
    "reading": "えいきょう",
    "meaning": "ảnh hưởng",
    "han": "ảnh hưởng ｜ 影:エイ 響:キョウ",
    "example": "大きな影響があります。",
    "translation": "Có ảnh hưởng lớn."
  },
  {
    "id": 139,
    "page": 10,
    "word": "政府",
    "reading": "せいふ",
    "meaning": "chính phủ",
    "han": "chánh phủ ｜ 政:セイ・ショウ 府:フ",
    "example": "政府が発表しました。",
    "translation": "Chính phủ đã công bố."
  },
  {
    "id": 140,
    "page": 10,
    "word": "男性",
    "reading": "だんせい",
    "meaning": "nam giới",
    "han": "nam tính ｜ 男:ダン・ナン 性:セイ・ショウ",
    "example": "男性の社員です。",
    "translation": "Là nhân viên nam."
  },
  {
    "id": 141,
    "page": 10,
    "word": "部屋",
    "reading": "へや",
    "meaning": "căn phòng",
    "han": "bộ ốc ｜ 部:ブ 屋:オク",
    "example": "部屋を掃除します。",
    "translation": "Tôi dọn phòng."
  },
  {
    "id": 142,
    "page": 10,
    "word": "限定",
    "reading": "げんてい",
    "meaning": "giới hạn, có hạn",
    "han": "hạn định ｜ 限:ゲン 定:テイ・ジョウ",
    "example": "数量限定です。",
    "translation": "Số lượng có hạn."
  },
  {
    "id": 143,
    "page": 10,
    "word": "地域",
    "reading": "ちいき",
    "meaning": "khu vực",
    "han": "địa vực ｜ 地:チ・ジ 域:イキ",
    "example": "地域の人と話します。",
    "translation": "Tôi nói chuyện với người địa phương."
  },
  {
    "id": 144,
    "page": 10,
    "word": "基本",
    "reading": "きほん",
    "meaning": "cơ bản",
    "han": "cơ bổn ｜ 基:キ 本:ホン",
    "example": "基本を大切にします。",
    "translation": "Tôi coi trọng điều cơ bản."
  },
  {
    "id": 145,
    "page": 10,
    "word": "期間",
    "reading": "きかん",
    "meaning": "thời gian, kỳ hạn",
    "han": "kỳ gian ｜ 期:キ・ゴ 間:カン・ケン",
    "example": "期間は一週間です。",
    "translation": "Thời gian là một tuần."
  },
  {
    "id": 146,
    "page": 10,
    "word": "注意",
    "reading": "ちゅうい",
    "meaning": "chú ý, lưu ý",
    "han": "chú ý ｜ 注:チュウ 意:イ",
    "example": "足元に注意してください。",
    "translation": "Xin chú ý bước chân."
  },
  {
    "id": 147,
    "page": 10,
    "word": "管理",
    "reading": "かんり",
    "meaning": "quản lý",
    "han": "quản lý ｜ 管:カン 理:リ",
    "example": "データを管理します。",
    "translation": "Tôi quản lý dữ liệu."
  },
  {
    "id": 148,
    "page": 10,
    "word": "英語",
    "reading": "えいご",
    "meaning": "tiếng Anh",
    "han": "anh ngữ ｜ 英:エイ 語:ゴ",
    "example": "英語を話せます。",
    "translation": "Tôi nói được tiếng Anh."
  },
  {
    "id": 149,
    "page": 10,
    "word": "大学",
    "reading": "だいがく",
    "meaning": "đại học",
    "han": "đại học ｜ 大:ダイ・タイ 学:ガク",
    "example": "大学を卒業しました。",
    "translation": "Tôi đã tốt nghiệp đại học."
  },
  {
    "id": 150,
    "page": 10,
    "word": "強い",
    "reading": "つよい",
    "meaning": "mạnh",
    "han": "cường ｜ 強:キョウ・ゴウ",
    "example": "風が強いです。",
    "translation": "Gió mạnh."
  },
  {
    "id": 151,
    "page": 10,
    "word": "撮影",
    "reading": "さつえい",
    "meaning": "chụp, quay",
    "han": "toát ảnh ｜ 撮:サツ 影:エイ",
    "example": "写真を撮影します。",
    "translation": "Tôi chụp ảnh."
  },
  {
    "id": 152,
    "page": 10,
    "word": "質問",
    "reading": "しつもん",
    "meaning": "câu hỏi",
    "han": "chất vấn ｜ 質:シツ・シチ 問:モン",
    "example": "質問があります。",
    "translation": "Tôi có câu hỏi."
  },
  {
    "id": 153,
    "page": 10,
    "word": "以前",
    "reading": "いぜん",
    "meaning": "trước đây",
    "han": "dĩ tiền ｜ 以:イ 前:ゼン",
    "example": "以前も来たことがあります。",
    "translation": "Trước đây tôi cũng từng đến."
  },
  {
    "id": 154,
    "page": 10,
    "word": "安全",
    "reading": "あんぜん",
    "meaning": "an toàn",
    "han": "an toàn ｜ 安:アン 全:ゼン",
    "example": "安全を確認します。",
    "translation": "Tôi xác nhận an toàn."
  },
  {
    "id": 155,
    "page": 11,
    "word": "決定",
    "reading": "けってい",
    "meaning": "quyết định",
    "han": "quyết định ｜ 決:ケツ 定:テイ・ジョウ",
    "example": "日程が決定しました。",
    "translation": "Lịch đã được quyết định."
  },
  {
    "id": 156,
    "page": 11,
    "word": "記念",
    "reading": "きねん",
    "meaning": "kỷ niệm",
    "han": "kí niệm ｜ 記:キ 念:ネン",
    "example": "記念に写真を撮ります。",
    "translation": "Chụp ảnh làm kỷ niệm."
  },
  {
    "id": 157,
    "page": 11,
    "word": "連絡",
    "reading": "れんらく",
    "meaning": "liên lạc",
    "han": "liên lạc ｜ 連:レン 絡:ラク",
    "example": "後で連絡します。",
    "translation": "Lát nữa tôi liên lạc."
  },
  {
    "id": 158,
    "page": 11,
    "word": "以下",
    "reading": "いか",
    "meaning": "dưới đây, trở xuống",
    "han": "dĩ hạ ｜ 以:イ 下:カ・ゲ",
    "example": "以下の通りです。",
    "translation": "Như dưới đây."
  },
  {
    "id": 159,
    "page": 11,
    "word": "公式",
    "reading": "こうしき",
    "meaning": "chính thức",
    "han": "công thức ｜ 公:コウ・ク 式:シキ",
    "example": "公式サイトを確認します。",
    "translation": "Tôi kiểm tra trang chính thức."
  },
  {
    "id": 160,
    "page": 11,
    "word": "大事",
    "reading": "だいじ",
    "meaning": "quan trọng",
    "han": "đại sự ｜ 大:ダイ・タイ 事:ジ・ズ",
    "example": "大事な話があります。",
    "translation": "Tôi có chuyện quan trọng."
  },
  {
    "id": 161,
    "page": 11,
    "word": "毎日",
    "reading": "まいにち",
    "meaning": "mỗi ngày",
    "han": "mỗi nhật ｜ 毎:マイ 日:ニチ・ジツ",
    "example": "毎日勉強します。",
    "translation": "Tôi học mỗi ngày."
  },
  {
    "id": 162,
    "page": 11,
    "word": "終了",
    "reading": "しゅうりょう",
    "meaning": "kết thúc",
    "han": "chung liễu ｜ 終:シュウ 了:リョウ",
    "example": "作業を終了します。",
    "translation": "Tôi kết thúc công việc."
  },
  {
    "id": 163,
    "page": 11,
    "word": "音楽",
    "reading": "おんがく",
    "meaning": "âm nhạc",
    "han": "âm lạc ｜ 音:オン・イン 楽:ガク・ラク",
    "example": "音楽を聞きます。",
    "translation": "Tôi nghe nhạc."
  },
  {
    "id": 164,
    "page": 11,
    "word": "効果",
    "reading": "こうか",
    "meaning": "hiệu quả",
    "han": "hiệu quả ｜ 効:コウ 果:カ",
    "example": "効果があります。",
    "translation": "Có hiệu quả."
  },
  {
    "id": 165,
    "page": 11,
    "word": "政治",
    "reading": "せいじ",
    "meaning": "chính trị",
    "han": "chánh trì ｜ 政:セイ・ショウ 治:ジ・チ",
    "example": "政治に関心があります。",
    "translation": "Tôi quan tâm chính trị."
  },
  {
    "id": 166,
    "page": 11,
    "word": "期待",
    "reading": "きたい",
    "meaning": "kỳ vọng",
    "han": "kỳ đãi ｜ 期:キ・ゴ 待:タイ",
    "example": "期待しています。",
    "translation": "Tôi mong đợi."
  },
  {
    "id": 167,
    "page": 11,
    "word": "病院",
    "reading": "びょういん",
    "meaning": "bệnh viện",
    "han": "bệnh viện ｜ 病:ビョウ・ヘイ 院:イン",
    "example": "病院に行きます。",
    "translation": "Tôi đến bệnh viện."
  },
  {
    "id": 168,
    "page": 11,
    "word": "結構",
    "reading": "けっこう",
    "meaning": "khá, được rồi",
    "han": "kết cấu ｜ 結:ケツ・ケチ 構:コウ",
    "example": "結構です。",
    "translation": "Không cần đâu, được rồi."
  },
  {
    "id": 169,
    "page": 11,
    "word": "行動",
    "reading": "こうどう",
    "meaning": "hành động",
    "han": "hành động ｜ 行:コウ・ギョウ 動:ドウ",
    "example": "すぐに行動します。",
    "translation": "Tôi hành động ngay."
  },
  {
    "id": 170,
    "page": 11,
    "word": "過去",
    "reading": "かこ",
    "meaning": "quá khứ",
    "han": "quá khứ ｜ 過:カ 去:キョ・コ",
    "example": "過去のデータを見ます。",
    "translation": "Tôi xem dữ liệu quá khứ."
  },
  {
    "id": 171,
    "page": 11,
    "word": "歴史",
    "reading": "れきし",
    "meaning": "lịch sử",
    "han": "lịch sử ｜ 歴:レキ・レッキ 史:シ",
    "example": "日本の歴史を学びます。",
    "translation": "Tôi học lịch sử Nhật Bản."
  },
  {
    "id": 172,
    "page": 11,
    "word": "一部",
    "reading": "いちぶ",
    "meaning": "một phần",
    "han": "nhất bộ ｜ 一:イチ・イツ 部:ブ",
    "example": "一部修正します。",
    "translation": "Tôi sửa một phần."
  },
  {
    "id": 173,
    "page": 12,
    "word": "実は",
    "reading": "じつは",
    "meaning": "thật ra",
    "han": "thực ｜ 実:ジツ・シツ",
    "example": "実は相談があります。",
    "translation": "Thật ra tôi có việc muốn bàn."
  },
  {
    "id": 174,
    "page": 12,
    "word": "最終",
    "reading": "さいしゅう",
    "meaning": "cuối cùng",
    "han": "tối chung ｜ 最:サイ・シュ 終:シュウ",
    "example": "最終確認をします。",
    "translation": "Tôi kiểm tra lần cuối."
  },
  {
    "id": 175,
    "page": 12,
    "word": "楽しみ",
    "reading": "たのしみ",
    "meaning": "niềm vui, mong đợi",
    "han": "lạc ｜ 楽:ガク・ラク",
    "example": "会えるのを楽しみにしています。",
    "translation": "Tôi mong được gặp."
  },
  {
    "id": 176,
    "page": 12,
    "word": "海外",
    "reading": "かいがい",
    "meaning": "nước ngoài",
    "han": "hải ngoại ｜ 海:カイ 外:ガイ・ゲ",
    "example": "海外に出張します。",
    "translation": "Tôi đi công tác nước ngoài."
  },
  {
    "id": 177,
    "page": 12,
    "word": "評価",
    "reading": "ひょうか",
    "meaning": "đánh giá",
    "han": "bình giá ｜ 評:ヒョウ 価:カ・ケ",
    "example": "成果を評価します。",
    "translation": "Tôi đánh giá thành quả."
  },
  {
    "id": 178,
    "page": 12,
    "word": "警察",
    "reading": "けいさつ",
    "meaning": "cảnh sát",
    "han": "cảnh sát ｜ 警:ケイ 察:サツ",
    "example": "警察に連絡します。",
    "translation": "Tôi liên lạc cảnh sát."
  },
  {
    "id": 179,
    "page": 12,
    "word": "追加",
    "reading": "ついか",
    "meaning": "thêm vào",
    "han": "truy gia ｜ 追:ツイ 加:カ",
    "example": "項目を追加します。",
    "translation": "Tôi thêm hạng mục."
  },
  {
    "id": 180,
    "page": 12,
    "word": "選手",
    "reading": "せんしゅ",
    "meaning": "vận động viên",
    "han": "tuyển thủ ｜ 選:セン 手:シュ・ズ",
    "example": "有名な選手です。",
    "translation": "Là vận động viên nổi tiếng."
  },
  {
    "id": 181,
    "page": 12,
    "word": "関連",
    "reading": "かんれん",
    "meaning": "liên quan",
    "han": "quan liên ｜ 関:カン 連:レン",
    "example": "関連する資料を送ります。",
    "translation": "Tôi gửi tài liệu liên quan."
  },
  {
    "id": 182,
    "page": 12,
    "word": "全く",
    "reading": "まったく",
    "meaning": "hoàn toàn",
    "han": "toàn ｜ 全:ゼン",
    "example": "全く分かりません。",
    "translation": "Tôi hoàn toàn không hiểu."
  },
  {
    "id": 183,
    "page": 12,
    "word": "全国",
    "reading": "ぜんこく",
    "meaning": "toàn quốc",
    "han": "toàn quốc ｜ 全:ゼン 国:コク",
    "example": "全国に店があります。",
    "translation": "Có cửa hàng khắp cả nước."
  },
  {
    "id": 184,
    "page": 12,
    "word": "希望",
    "reading": "きぼう",
    "meaning": "hy vọng, nguyện vọng",
    "han": "hy vọng ｜ 希:キ・ケ 望:ボウ・モウ",
    "example": "希望を聞きます。",
    "translation": "Tôi nghe nguyện vọng."
  },
  {
    "id": 185,
    "page": 12,
    "word": "怖い",
    "reading": "こわい",
    "meaning": "đáng sợ",
    "han": "phố ｜ 怖:フ・ホ",
    "example": "暗い道は怖いです。",
    "translation": "Đường tối thì đáng sợ."
  },
  {
    "id": 186,
    "page": 12,
    "word": "教育",
    "reading": "きょういく",
    "meaning": "giáo dục",
    "han": "giáo dục ｜ 教:キョウ 育:イク",
    "example": "教育に力を入れます。",
    "translation": "Chú trọng giáo dục."
  },
  {
    "id": 187,
    "page": 12,
    "word": "特別",
    "reading": "とくべつ",
    "meaning": "đặc biệt",
    "han": "đặc biệt ｜ 特:トク 別:ベツ",
    "example": "特別な日です。",
    "translation": "Là ngày đặc biệt."
  },
  {
    "id": 188,
    "page": 12,
    "word": "番組",
    "reading": "ばんぐみ",
    "meaning": "chương trình (TV)",
    "han": "phiên tổ ｜ 番:バン 組:ソ",
    "example": "好きな番組を見ます。",
    "translation": "Tôi xem chương trình yêu thích."
  },
  {
    "id": 189,
    "page": 12,
    "word": "週間",
    "reading": "しゅうかん",
    "meaning": "tuần (khoảng thời gian)",
    "han": "chu gian ｜ 週:シュウ 間:カン・ケン",
    "example": "二週間かかります。",
    "translation": "Mất hai tuần."
  },
  {
    "id": 190,
    "page": 12,
    "word": "面白い",
    "reading": "おもしろい",
    "meaning": "thú vị",
    "han": "diện bạch ｜ 面:メン・ベン 白:ハク・ビャク",
    "example": "この本は面白いです。",
    "translation": "Cuốn sách này thú vị."
  },
  {
    "id": 191,
    "page": 13,
    "word": "事故",
    "reading": "じこ",
    "meaning": "tai nạn, sự cố",
    "han": "sự cố ｜ 事:ジ・ズ 故:コ",
    "example": "事故が起きました。",
    "translation": "Đã xảy ra tai nạn."
  },
  {
    "id": 192,
    "page": 13,
    "word": "事業",
    "reading": "じぎょう",
    "meaning": "dự án, kinh doanh",
    "han": "sự nghiệp ｜ 事:ジ・ズ 業:ギョウ・ゴウ",
    "example": "新しい事業を始めます。",
    "translation": "Tôi bắt đầu kinh doanh mới."
  },
  {
    "id": 193,
    "page": 13,
    "word": "付け",
    "reading": "つけ",
    "meaning": "gắn, kèm",
    "han": "phó ｜ 付:フ",
    "example": "名前を付けます。",
    "translation": "Tôi đặt tên."
  },
  {
    "id": 194,
    "page": 13,
    "word": "全然",
    "reading": "ぜんぜん",
    "meaning": "hoàn toàn (không)",
    "han": "toàn nhiên ｜ 全:ゼン 然:ゼン・ネン",
    "example": "全然問題ありません。",
    "translation": "Hoàn toàn không có vấn đề."
  },
  {
    "id": 195,
    "page": 13,
    "word": "環境",
    "reading": "かんきょう",
    "meaning": "môi trường",
    "han": "hoàn cảnh ｜ 環:カン 境:キョウ・ケイ",
    "example": "環境を守ります。",
    "translation": "Bảo vệ môi trường."
  },
  {
    "id": 196,
    "page": 13,
    "word": "経済",
    "reading": "けいざい",
    "meaning": "kinh tế",
    "han": "kinh tế ｜ 経:ケイ・キョウ 済:サイ・セイ",
    "example": "経済が成長しています。",
    "translation": "Kinh tế đang tăng trưởng."
  },
  {
    "id": 197,
    "page": 13,
    "word": "議員",
    "reading": "ぎいん",
    "meaning": "nghị sĩ",
    "han": "nghị viên ｜ 議:ギ 員:イン",
    "example": "議員が発言しました。",
    "translation": "Nghị sĩ đã phát biểu."
  },
  {
    "id": 198,
    "page": 13,
    "word": "近く",
    "reading": "ちかく",
    "meaning": "gần",
    "han": "cận ｜ 近:キン・コン",
    "example": "駅の近くに住んでいます。",
    "translation": "Tôi sống gần ga."
  },
  {
    "id": 199,
    "page": 13,
    "word": "専門",
    "reading": "せんもん",
    "meaning": "chuyên môn",
    "han": "chuyên môn ｜ 専:セン 門:モン",
    "example": "専門は経済です。",
    "translation": "Chuyên môn của tôi là kinh tế."
  },
  {
    "id": 200,
    "page": 13,
    "word": "成功",
    "reading": "せいこう",
    "meaning": "thành công",
    "han": "thành công ｜ 成:セイ・ジョウ 功:コウ・ク",
    "example": "計画が成功しました。",
    "translation": "Kế hoạch đã thành công."
  },
  {
    "id": 201,
    "page": 14,
    "word": "文化",
    "reading": "ぶんか",
    "meaning": "văn hóa",
    "han": "văn hóa ｜ 文:ブン・モン 化:カ・ケ",
    "example": "日本の文化が好きです。",
    "translation": "Tôi thích văn hóa Nhật."
  },
  {
    "id": 202,
    "page": 14,
    "word": "映像",
    "reading": "えいぞう",
    "meaning": "hình ảnh, video",
    "han": "ánh tượng ｜ 映:エイ 像:ゾウ",
    "example": "映像を確認します。",
    "translation": "Tôi kiểm tra hình ảnh."
  },
  {
    "id": 203,
    "page": 14,
    "word": "検索",
    "reading": "けんさく",
    "meaning": "tìm kiếm",
    "han": "kiểm tác ｜ 検:ケン 索:サク",
    "example": "情報を検索します。",
    "translation": "Tôi tìm kiếm thông tin."
  },
  {
    "id": 204,
    "page": 14,
    "word": "発見",
    "reading": "はっけん",
    "meaning": "phát hiện",
    "han": "bát kiến ｜ 発:ハツ・ホツ 見:ケン",
    "example": "新しい発見がありました。",
    "translation": "Có phát hiện mới."
  },
  {
    "id": 205,
    "page": 14,
    "word": "主義",
    "reading": "しゅぎ",
    "meaning": "chủ nghĩa",
    "han": "chủ nghĩa ｜ 主:シュ・ス 義:ギ",
    "example": "個人主義の国です。",
    "translation": "Là nước theo chủ nghĩa cá nhân."
  },
  {
    "id": 206,
    "page": 14,
    "word": "出演",
    "reading": "しゅつえん",
    "meaning": "xuất hiện (diễn)",
    "han": "xuất diễn ｜ 出:シュツ・スイ 演:エン",
    "example": "ドラマに出演します。",
    "translation": "Tôi diễn trong phim truyền hình."
  },
  {
    "id": 207,
    "page": 14,
    "word": "協力",
    "reading": "きょうりょく",
    "meaning": "hợp tác",
    "han": "hiệp lực ｜ 協:キョウ 力:リョク・リキ",
    "example": "協力してください。",
    "translation": "Xin hãy hợp tác."
  },
  {
    "id": 208,
    "page": 14,
    "word": "最大",
    "reading": "さいだい",
    "meaning": "lớn nhất",
    "han": "tối đại ｜ 最:サイ・シュ 大:ダイ・タイ",
    "example": "最大の問題です。",
    "translation": "Là vấn đề lớn nhất."
  },
  {
    "id": 209,
    "page": 14,
    "word": "本当",
    "reading": "ほんとう",
    "meaning": "thật",
    "han": "bổn đang ｜ 本:ホン 当:トウ",
    "example": "それは本当ですか。",
    "translation": "Điều đó có thật không?"
  },
  {
    "id": 210,
    "page": 14,
    "word": "程度",
    "reading": "ていど",
    "meaning": "mức độ",
    "han": "trình độ ｜ 程:テイ 度:ド・ト",
    "example": "どの程度かかりますか。",
    "translation": "Mất khoảng bao lâu?"
  },
  {
    "id": 211,
    "page": 14,
    "word": "色々",
    "reading": "いろいろ",
    "meaning": "nhiều loại, đủ thứ",
    "han": "sắc ? ｜ 色:ショク・シキ 々:-",
    "example": "色々な意見があります。",
    "translation": "Có nhiều ý kiến khác nhau."
  },
  {
    "id": 212,
    "page": 14,
    "word": "今年",
    "reading": "ことし",
    "meaning": "năm nay",
    "han": "kim niên ｜ 今:コン・キン 年:ネン",
    "example": "今年も頑張ります。",
    "translation": "Năm nay tôi cũng cố gắng."
  },
  {
    "id": 213,
    "page": 14,
    "word": "代表",
    "reading": "だいひょう",
    "meaning": "đại diện",
    "han": "đại biểu ｜ 代:ダイ・タイ 表:ヒョウ",
    "example": "代表として参加します。",
    "translation": "Tôi tham gia với tư cách đại diện."
  },
  {
    "id": 214,
    "page": 14,
    "word": "変更",
    "reading": "へんこう",
    "meaning": "thay đổi",
    "han": "biến canh ｜ 変:ヘン 更:コウ",
    "example": "予定を変更します。",
    "translation": "Tôi thay đổi lịch."
  },
  {
    "id": 215,
    "page": 14,
    "word": "多分",
    "reading": "たぶん",
    "meaning": "có lẽ",
    "han": "đa phân ｜ 多:タ 分:ブン・フン",
    "example": "多分大丈夫です。",
    "translation": "Có lẽ ổn."
  },
  {
    "id": 216,
    "page": 14,
    "word": "契約",
    "reading": "けいやく",
    "meaning": "hợp đồng",
    "han": "khế ước ｜ 契:ケイ 約:ヤク",
    "example": "契約を結びます。",
    "translation": "Tôi ký hợp đồng."
  },
  {
    "id": 217,
    "page": 14,
    "word": "心配",
    "reading": "しんぱい",
    "meaning": "lo lắng",
    "han": "tâm phối ｜ 心:シン 配:ハイ",
    "example": "心配しないでください。",
    "translation": "Xin đừng lo."
  },
  {
    "id": 218,
    "page": 14,
    "word": "昨日",
    "reading": "きのう",
    "meaning": "hôm qua",
    "han": "tạc nhật ｜ 昨:サク 日:ニチ・ジツ",
    "example": "昨日は休みでした。",
    "translation": "Hôm qua tôi nghỉ."
  },
  {
    "id": 219,
    "page": 15,
    "word": "生まれ",
    "reading": "うまれ",
    "meaning": "sinh ra",
    "han": "sanh ｜ 生:セイ・ショウ",
    "example": "東京生まれです。",
    "translation": "Tôi sinh ra ở Tokyo."
  },
  {
    "id": 220,
    "page": 15,
    "word": "発生",
    "reading": "はっせい",
    "meaning": "phát sinh",
    "han": "bát sanh ｜ 発:ハツ・ホツ 生:セイ・ショウ",
    "example": "問題が発生しました。",
    "translation": "Đã phát sinh vấn đề."
  },
  {
    "id": 221,
    "page": 15,
    "word": "経験",
    "reading": "けいけん",
    "meaning": "kinh nghiệm",
    "han": "kinh nghiệm ｜ 経:ケイ・キョウ 験:ケン・ゲン",
    "example": "経験を積みます。",
    "translation": "Tôi tích lũy kinh nghiệm."
  },
  {
    "id": 222,
    "page": 15,
    "word": "興味",
    "reading": "きょうみ",
    "meaning": "hứng thú",
    "han": "hưng vị ｜ 興:コウ・キョウ 味:ミ",
    "example": "その話に興味があります。",
    "translation": "Tôi hứng thú với chuyện đó."
  },
  {
    "id": 223,
    "page": 15,
    "word": "話題",
    "reading": "わだい",
    "meaning": "chủ đề",
    "han": "thoại đề ｜ 話:ワ 題:ダイ",
    "example": "新しい話題です。",
    "translation": "Là chủ đề mới."
  },
  {
    "id": 224,
    "page": 15,
    "word": "責任",
    "reading": "せきにん",
    "meaning": "trách nhiệm",
    "han": "trách nhâm ｜ 責:セキ 任:ニン",
    "example": "責任を持ちます。",
    "translation": "Tôi chịu trách nhiệm."
  },
  {
    "id": 225,
    "page": 15,
    "word": "限り",
    "reading": "かぎり",
    "meaning": "giới hạn",
    "han": "hạn ｜ 限:ゲン",
    "example": "できる限りやります。",
    "translation": "Tôi sẽ làm hết sức có thể."
  },
  {
    "id": 226,
    "page": 15,
    "word": "難しい",
    "reading": "むずかしい",
    "meaning": "khó",
    "han": "nan ｜ 難:ナン",
    "example": "問題が難しいです。",
    "translation": "Câu hỏi khó."
  },
  {
    "id": 227,
    "page": 15,
    "word": "元気",
    "reading": "げんき",
    "meaning": "khỏe, năng động",
    "han": "nguyên khí ｜ 元:ゲン・ガン 気:キ・ケ",
    "example": "元気ですか。",
    "translation": "Bạn khỏe không?"
  },
  {
    "id": 228,
    "page": 15,
    "word": "可愛い",
    "reading": "かわいい",
    "meaning": "dễ thương",
    "han": "khả ái ｜ 可:カ・コク 愛:アイ",
    "example": "可愛い猫ですね。",
    "translation": "Con mèo dễ thương nhỉ."
  },
  {
    "id": 229,
    "page": 15,
    "word": "商品",
    "reading": "しょうひん",
    "meaning": "hàng hóa",
    "han": "thương phẩm ｜ 商:ショウ 品:ヒン・ホン",
    "example": "商品を注文します。",
    "translation": "Tôi đặt hàng."
  },
  {
    "id": 230,
    "page": 15,
    "word": "対象",
    "reading": "たいしょう",
    "meaning": "đối tượng",
    "han": "đối tượng ｜ 対:タイ・ツイ 象:ショウ・ゾウ",
    "example": "対象は学生です。",
    "translation": "Đối tượng là học sinh."
  },
  {
    "id": 231,
    "page": 15,
    "word": "年間",
    "reading": "ねんかん",
    "meaning": "trong năm",
    "han": "niên gian ｜ 年:ネン 間:カン・ケン",
    "example": "年間の予定です。",
    "translation": "Là lịch cả năm."
  },
  {
    "id": 232,
    "page": 15,
    "word": "支援",
    "reading": "しえん",
    "meaning": "hỗ trợ",
    "han": "chi viên ｜ 支:シ 援:エン",
    "example": "支援をお願いします。",
    "translation": "Xin hỗ trợ."
  },
  {
    "id": 233,
    "page": 15,
    "word": "残念",
    "reading": "ざんねん",
    "meaning": "đáng tiếc",
    "han": "tàn niệm ｜ 残:ザン・サン 念:ネン",
    "example": "残念な結果でした。",
    "translation": "Kết quả đáng tiếc."
  },
  {
    "id": 234,
    "page": 15,
    "word": "決め",
    "reading": "きめ",
    "meaning": "quyết định",
    "han": "quyết ｜ 決:ケツ",
    "example": "日にちを決めます。",
    "translation": "Tôi chọn ngày."
  },
  {
    "id": 235,
    "page": 15,
    "word": "被害",
    "reading": "ひがい",
    "meaning": "thiệt hại",
    "han": "bị hại ｜ 被:ヒ 害:ガイ",
    "example": "被害はありませんでした。",
    "translation": "Không có thiệt hại."
  },
  {
    "id": 236,
    "page": 15,
    "word": "運転",
    "reading": "うんてん",
    "meaning": "lái xe, vận hành",
    "han": "vận chuyển ｜ 運:ウン 転:テン",
    "example": "車を運転します。",
    "translation": "Tôi lái xe."
  },
  {
    "id": 237,
    "page": 16,
    "word": "選挙",
    "reading": "せんきょ",
    "meaning": "bầu cử",
    "han": "tuyển cử ｜ 選:セン 挙:キョ",
    "example": "選挙があります。",
    "translation": "Có bầu cử."
  },
  {
    "id": 238,
    "page": 16,
    "word": "非常",
    "reading": "ひじょう",
    "meaning": "rất, khẩn cấp",
    "han": "phi thường ｜ 非:ヒ 常:ジョウ",
    "example": "非常に重要です。",
    "translation": "Cực kỳ quan trọng."
  },
  {
    "id": 239,
    "page": 16,
    "word": "に対する",
    "reading": "にたいする",
    "meaning": "đối với",
    "han": "đối ｜ 対:タイ・ツイ",
    "example": "質問に対する答えです。",
    "translation": "Là câu trả lời cho câu hỏi."
  },
  {
    "id": 240,
    "page": 16,
    "word": "企画",
    "reading": "きかく",
    "meaning": "lập kế hoạch",
    "han": "xí hoạch ｜ 企:キ 画:ガ・カク",
    "example": "新しい企画を考えます。",
    "translation": "Tôi nghĩ kế hoạch mới."
  },
  {
    "id": 241,
    "page": 16,
    "word": "勉強",
    "reading": "べんきょう",
    "meaning": "học tập",
    "han": "miễn cường ｜ 勉:ベン 強:キョウ・ゴウ",
    "example": "日本語を勉強します。",
    "translation": "Tôi học tiếng Nhật."
  },
  {
    "id": 242,
    "page": 16,
    "word": "報告",
    "reading": "ほうこく",
    "meaning": "báo cáo",
    "han": "báo cáo ｜ 報:ホウ 告:コク",
    "example": "上司に報告します。",
    "translation": "Tôi báo cáo cấp trên."
  },
  {
    "id": 243,
    "page": 16,
    "word": "彼ら",
    "reading": "かれら",
    "meaning": "họ",
    "han": "bỉ ｜ 彼:ヒ",
    "example": "彼らは仲がいいです。",
    "translation": "Họ thân nhau."
  },
  {
    "id": 244,
    "page": 16,
    "word": "流れ",
    "reading": "ながれ",
    "meaning": "dòng chảy, diễn biến",
    "han": "lưu ｜ 流:リュウ・ル",
    "example": "仕事の流れを説明します。",
    "translation": "Tôi giải thích quy trình công việc."
  },
  {
    "id": 245,
    "page": 16,
    "word": "移動",
    "reading": "いどう",
    "meaning": "di chuyển",
    "han": "di động ｜ 移:イ 動:ドウ",
    "example": "電車で移動します。",
    "translation": "Tôi di chuyển bằng tàu điện."
  },
  {
    "id": 246,
    "page": 16,
    "word": "表示",
    "reading": "ひょうじ",
    "meaning": "hiển thị",
    "han": "biểu kì ｜ 表:ヒョウ 示:ジ・シ",
    "example": "画面に表示されます。",
    "translation": "Được hiển thị trên màn hình."
  },
  {
    "id": 247,
    "page": 16,
    "word": "記録",
    "reading": "きろく",
    "meaning": "ghi chép, kỷ lục",
    "han": "kí lục ｜ 記:キ 録:ロク",
    "example": "結果を記録します。",
    "translation": "Tôi ghi lại kết quả."
  },
  {
    "id": 248,
    "page": 16,
    "word": "間違い",
    "reading": "まちがい",
    "meaning": "sai sót",
    "han": "gian vi ｜ 間:カン・ケン 違:イ",
    "example": "間違いを直します。",
    "translation": "Tôi sửa lỗi sai."
  },
  {
    "id": 249,
    "page": 16,
    "word": "全体",
    "reading": "ぜんたい",
    "meaning": "toàn thể",
    "han": "toàn thể ｜ 全:ゼン 体:タイ・テイ",
    "example": "全体を確認します。",
    "translation": "Tôi kiểm tra toàn thể."
  },
  {
    "id": 250,
    "page": 16,
    "word": "嫌い",
    "reading": "きらい",
    "meaning": "ghét",
    "han": "hiềm ｜ 嫌:ケン・ゲン",
    "example": "野菜が嫌いです。",
    "translation": "Tôi ghét rau."
  },
  {
    "id": 251,
    "page": 16,
    "word": "文字",
    "reading": "もじ",
    "meaning": "chữ, ký tự",
    "han": "văn tự ｜ 文:ブン・モン 字:ジ",
    "example": "文字を入力します。",
    "translation": "Tôi nhập ký tự."
  },
  {
    "id": 252,
    "page": 16,
    "word": "施設",
    "reading": "しせつ",
    "meaning": "cơ sở, thiết bị",
    "han": "thi thiết ｜ 施:シ・セ 設:セツ",
    "example": "公共の施設です。",
    "translation": "Là cơ sở công cộng."
  },
  {
    "id": 253,
    "page": 16,
    "word": "最も",
    "reading": "もっとも",
    "meaning": "nhất",
    "han": "tối ｜ 最:サイ・シュ",
    "example": "最も大切なことです。",
    "translation": "Là điều quan trọng nhất."
  },
  {
    "id": 254,
    "page": 16,
    "word": "楽しい",
    "reading": "たのしい",
    "meaning": "vui",
    "han": "lạc ｜ 楽:ガク・ラク",
    "example": "楽しい時間でした。",
    "translation": "Đã có khoảng thời gian vui."
  },
  {
    "id": 255,
    "page": 17,
    "word": "能力",
    "reading": "のうりょく",
    "meaning": "năng lực",
    "han": "năng lực ｜ 能:ノウ 力:リョク・リキ",
    "example": "能力を高めます。",
    "translation": "Nâng cao năng lực."
  },
  {
    "id": 256,
    "page": 17,
    "word": "誕生",
    "reading": "たんじょう",
    "meaning": "ra đời",
    "han": "đản sanh ｜ 誕:タン 生:セイ・ショウ",
    "example": "新しい製品が誕生しました。",
    "translation": "Sản phẩm mới đã ra đời."
  },
  {
    "id": 257,
    "page": 17,
    "word": "運動",
    "reading": "うんどう",
    "meaning": "vận động, thể thao",
    "han": "vận động ｜ 運:ウン 動:ドウ",
    "example": "毎日運動します。",
    "translation": "Tôi tập thể dục mỗi ngày."
  },
  {
    "id": 258,
    "page": 17,
    "word": "配信",
    "reading": "はいしん",
    "meaning": "phân phối, phát trực tuyến",
    "han": "phối tín ｜ 配:ハイ 信:シン",
    "example": "動画を配信します。",
    "translation": "Tôi phát video trực tuyến."
  },
  {
    "id": 259,
    "page": 17,
    "word": "その他",
    "reading": "そのほか",
    "meaning": "ngoài ra",
    "han": "tha ｜ 他:タ",
    "example": "その他の質問はありますか。",
    "translation": "Còn câu hỏi nào khác không?"
  },
  {
    "id": 260,
    "page": 17,
    "word": "一方",
    "reading": "いっぽう",
    "meaning": "một mặt khác",
    "han": "nhất phương ｜ 一:イチ・イツ 方:ホウ",
    "example": "一方で問題もあります。",
    "translation": "Mặt khác cũng có vấn đề."
  },
  {
    "id": 261,
    "page": 17,
    "word": "価値",
    "reading": "かち",
    "meaning": "giá trị",
    "han": "giá trị ｜ 価:カ・ケ 値:チ",
    "example": "価値のある経験です。",
    "translation": "Là trải nghiệm có giá trị."
  },
  {
    "id": 262,
    "page": 17,
    "word": "保護",
    "reading": "ほご",
    "meaning": "bảo vệ",
    "han": "bảo hộ ｜ 保:ホ・ホウ 護:ゴ",
    "example": "個人情報を保護します。",
    "translation": "Bảo vệ thông tin cá nhân."
  },
  {
    "id": 263,
    "page": 17,
    "word": "意識",
    "reading": "いしき",
    "meaning": "ý thức",
    "han": "ý thức ｜ 意:イ 識:シキ",
    "example": "安全を意識します。",
    "translation": "Tôi ý thức về an toàn."
  },
  {
    "id": 264,
    "page": 17,
    "word": "詳細",
    "reading": "しょうさい",
    "meaning": "chi tiết",
    "han": "tường tế ｜ 詳:ショウ 細:サイ",
    "example": "詳細は後で連絡します。",
    "translation": "Chi tiết tôi sẽ liên lạc sau."
  },
  {
    "id": 265,
    "page": 17,
    "word": "認め",
    "reading": "みとめ",
    "meaning": "công nhận",
    "han": "nhận ｜ 認:ニン",
    "example": "ミスを認めます。",
    "translation": "Tôi thừa nhận lỗi."
  },
  {
    "id": 266,
    "page": 17,
    "word": "調べ",
    "reading": "しらべ",
    "meaning": "tra cứu, điều tra",
    "han": "điều ｜ 調:チョウ",
    "example": "資料を調べます。",
    "translation": "Tôi tra cứu tài liệu."
  },
  {
    "id": 267,
    "page": 17,
    "word": "失敗",
    "reading": "しっぱい",
    "meaning": "thất bại",
    "han": "thất bại ｜ 失:シツ 敗:ハイ",
    "example": "失敗から学びます。",
    "translation": "Học từ thất bại."
  },
  {
    "id": 268,
    "page": 17,
    "word": "展開",
    "reading": "てんかい",
    "meaning": "triển khai, diễn biến",
    "han": "triển khai ｜ 展:テン 開:カイ",
    "example": "話が展開します。",
    "translation": "Câu chuyện diễn biến."
  },
  {
    "id": 269,
    "page": 17,
    "word": "担当",
    "reading": "たんとう",
    "meaning": "phụ trách",
    "han": "đam đang ｜ 担:タン 当:トウ",
    "example": "私が担当します。",
    "translation": "Tôi sẽ phụ trách."
  },
  {
    "id": 270,
    "page": 17,
    "word": "提供",
    "reading": "ていきょう",
    "meaning": "cung cấp",
    "han": "đề cung ｜ 提:テイ・チョウ 供:キョウ・ク",
    "example": "情報を提供します。",
    "translation": "Tôi cung cấp thông tin."
  },
  {
    "id": 271,
    "page": 17,
    "word": "時期",
    "reading": "じき",
    "meaning": "thời kỳ",
    "han": "thì kỳ ｜ 時:ジ 期:キ・ゴ",
    "example": "忙しい時期です。",
    "translation": "Là thời kỳ bận rộn."
  },
  {
    "id": 272,
    "page": 17,
    "word": "気分",
    "reading": "きぶん",
    "meaning": "tâm trạng",
    "han": "khí phân ｜ 気:キ・ケ 分:ブン・フン",
    "example": "気分が悪いです。",
    "translation": "Tôi thấy khó chịu."
  },
  {
    "id": 273,
    "page": 18,
    "word": "精神",
    "reading": "せいしん",
    "meaning": "tinh thần",
    "han": "tinh thần ｜ 精:セイ・ショウ 神:シン・ジン",
    "example": "精神的に疲れました。",
    "translation": "Tôi mệt mỏi về tinh thần."
  },
  {
    "id": 274,
    "page": 18,
    "word": "組織",
    "reading": "そしき",
    "meaning": "tổ chức",
    "han": "tổ chức ｜ 組:ソ 織:ショク・シキ",
    "example": "組織を作ります。",
    "translation": "Tôi lập tổ chức."
  },
  {
    "id": 275,
    "page": 18,
    "word": "高校",
    "reading": "こうこう",
    "meaning": "trung học phổ thông",
    "han": "cao giáo ｜ 高:コウ 校:コウ・キョウ",
    "example": "高校で勉強しています。",
    "translation": "Tôi học ở trường cấp ba."
  },
  {
    "id": 276,
    "page": 18,
    "word": "中心",
    "reading": "ちゅうしん",
    "meaning": "trung tâm",
    "han": "trung tâm ｜ 中:チュウ 心:シン",
    "example": "町の中心にあります。",
    "translation": "Nằm ở trung tâm thị trấn."
  },
  {
    "id": 277,
    "page": 18,
    "word": "交換",
    "reading": "こうかん",
    "meaning": "trao đổi",
    "han": "giao hoán ｜ 交:コウ 換:カン",
    "example": "商品を交換します。",
    "translation": "Tôi đổi hàng."
  },
  {
    "id": 278,
    "page": 18,
    "word": "原因",
    "reading": "げんいん",
    "meaning": "nguyên nhân",
    "han": "nguyên nhân ｜ 原:ゲン 因:イン",
    "example": "原因を調べます。",
    "translation": "Tôi tìm nguyên nhân."
  },
  {
    "id": 279,
    "page": 18,
    "word": "大人",
    "reading": "おとな",
    "meaning": "người lớn",
    "han": "đại nhân ｜ 大:ダイ・タイ 人:ジン・ニン",
    "example": "大人になりました。",
    "translation": "Tôi đã trưởng thành."
  },
  {
    "id": 280,
    "page": 18,
    "word": "嬉しい",
    "reading": "うれしい",
    "meaning": "vui mừng",
    "han": "hi ｜ 嬉:キ",
    "example": "会えて嬉しいです。",
    "translation": "Tôi vui vì được gặp."
  },
  {
    "id": 281,
    "page": 18,
    "word": "学生",
    "reading": "がくせい",
    "meaning": "học sinh, sinh viên",
    "han": "học sanh ｜ 学:ガク 生:セイ・ショウ",
    "example": "大学の学生です。",
    "translation": "Là sinh viên đại học."
  },
  {
    "id": 282,
    "page": 18,
    "word": "安心",
    "reading": "あんしん",
    "meaning": "yên tâm",
    "han": "an tâm ｜ 安:アン 心:シン",
    "example": "安心しました。",
    "translation": "Tôi đã yên tâm."
  },
  {
    "id": 283,
    "page": 18,
    "word": "幸せ",
    "reading": "しあわせ",
    "meaning": "hạnh phúc",
    "han": "hạnh ｜ 幸:コウ",
    "example": "幸せな時間でした。",
    "translation": "Đã có khoảng thời gian hạnh phúc."
  },
  {
    "id": 284,
    "page": 18,
    "word": "投稿",
    "reading": "とうこう",
    "meaning": "đăng bài",
    "han": "đầu cảo ｜ 投:トウ 稿:コウ",
    "example": "写真を投稿します。",
    "translation": "Tôi đăng ảnh."
  },
  {
    "id": 285,
    "page": 18,
    "word": "表現",
    "reading": "ひょうげん",
    "meaning": "biểu hiện, diễn đạt",
    "han": "biểu hiện ｜ 表:ヒョウ 現:ゲン",
    "example": "気持ちを表現します。",
    "translation": "Tôi diễn đạt cảm xúc."
  },
  {
    "id": 286,
    "page": 18,
    "word": "解決",
    "reading": "かいけつ",
    "meaning": "giải quyết",
    "han": "giải quyết ｜ 解:カイ・ゲ 決:ケツ",
    "example": "問題を解決します。",
    "translation": "Tôi giải quyết vấn đề."
  },
  {
    "id": 287,
    "page": 18,
    "word": "運営",
    "reading": "うんえい",
    "meaning": "vận hành, điều hành",
    "han": "vận dinh ｜ 運:ウン 営:エイ",
    "example": "店を運営します。",
    "translation": "Tôi điều hành cửa hàng."
  },
  {
    "id": 288,
    "page": 18,
    "word": "危険",
    "reading": "きけん",
    "meaning": "nguy hiểm",
    "han": "nguy hiểm ｜ 危:キ 険:ケン",
    "example": "危険な場所です。",
    "translation": "Là nơi nguy hiểm."
  },
  {
    "id": 289,
    "page": 18,
    "word": "営業",
    "reading": "えいぎょう",
    "meaning": "kinh doanh, bán hàng",
    "han": "dinh nghiệp ｜ 営:エイ 業:ギョウ・ゴウ",
    "example": "営業の仕事をしています。",
    "translation": "Tôi làm công việc kinh doanh."
  },
  {
    "id": 290,
    "page": 18,
    "word": "当時",
    "reading": "とうじ",
    "meaning": "lúc đó",
    "han": "đang thì ｜ 当:トウ 時:ジ",
    "example": "当時は若かったです。",
    "translation": "Lúc đó tôi còn trẻ."
  },
  {
    "id": 291,
    "page": 19,
    "word": "感謝",
    "reading": "かんしゃ",
    "meaning": "cảm ơn",
    "han": "cảm tạ ｜ 感:カン 謝:シャ",
    "example": "感謝しています。",
    "translation": "Tôi biết ơn."
  },
  {
    "id": 292,
    "page": 19,
    "word": "料理",
    "reading": "りょうり",
    "meaning": "món ăn, nấu ăn",
    "han": "liêu lý ｜ 料:リョウ 理:リ",
    "example": "料理が上手です。",
    "translation": "Cô ấy nấu ăn giỏi."
  },
  {
    "id": 293,
    "page": 19,
    "word": "日本人",
    "reading": "にほんじん",
    "meaning": "người Nhật",
    "han": "nhật bổn nhân ｜ 日:ニチ・ジツ 本:ホン 人:ジン・ニン",
    "example": "日本人の友達がいます。",
    "translation": "Tôi có bạn người Nhật."
  },
  {
    "id": 294,
    "page": 19,
    "word": "自然",
    "reading": "しぜん",
    "meaning": "thiên nhiên, tự nhiên",
    "han": "tự nhiên ｜ 自:ジ・シ 然:ゼン・ネン",
    "example": "自然が好きです。",
    "translation": "Tôi thích thiên nhiên."
  },
  {
    "id": 295,
    "page": 19,
    "word": "事実",
    "reading": "じじつ",
    "meaning": "sự thật",
    "han": "sự thực ｜ 事:ジ・ズ 実:ジツ・シツ",
    "example": "事実を確認します。",
    "translation": "Tôi xác nhận sự thật."
  },
  {
    "id": 296,
    "page": 19,
    "word": "判断",
    "reading": "はんだん",
    "meaning": "phán đoán",
    "han": "phán đoán ｜ 判:ハン・バン 断:ダン",
    "example": "状況を判断します。",
    "translation": "Tôi đánh giá tình hình."
  },
  {
    "id": 297,
    "page": 19,
    "word": "動物",
    "reading": "どうぶつ",
    "meaning": "động vật",
    "han": "động vật ｜ 動:ドウ 物:ブツ・モツ",
    "example": "動物が好きです。",
    "translation": "Tôi thích động vật."
  },
  {
    "id": 298,
    "page": 19,
    "word": "国内",
    "reading": "こくない",
    "meaning": "trong nước",
    "han": "quốc nạp ｜ 国:コク 内:ナイ・ダイ",
    "example": "国内で販売します。",
    "translation": "Bán trong nước."
  },
  {
    "id": 299,
    "page": 19,
    "word": "大会",
    "reading": "たいかい",
    "meaning": "đại hội, giải đấu",
    "han": "đại cối ｜ 大:ダイ・タイ 会:カイ・エ",
    "example": "大会に参加します。",
    "translation": "Tôi tham gia giải đấu."
  },
  {
    "id": 300,
    "page": 19,
    "word": "大好き",
    "reading": "だいすき",
    "meaning": "rất thích",
    "han": "đại hảo ｜ 大:ダイ・タイ 好:コウ",
    "example": "犬が大好きです。",
    "translation": "Tôi rất thích chó."
  },
  {
    "id": 301,
    "page": 20,
    "word": "想像",
    "reading": "そうぞう",
    "meaning": "tưởng tượng",
    "han": "tưởng tượng ｜ 想:ソウ・ソ 像:ゾウ",
    "example": "想像できません。",
    "translation": "Tôi không thể tưởng tượng."
  },
  {
    "id": 302,
    "page": 20,
    "word": "準備",
    "reading": "じゅんび",
    "meaning": "chuẩn bị",
    "han": "chuẩn bị ｜ 準:ジュン 備:ビ",
    "example": "会議の準備をします。",
    "translation": "Tôi chuẩn bị cuộc họp."
  },
  {
    "id": 303,
    "page": 20,
    "word": "自動",
    "reading": "じどう",
    "meaning": "tự động",
    "han": "tự động ｜ 自:ジ・シ 動:ドウ",
    "example": "自動で更新されます。",
    "translation": "Được cập nhật tự động."
  },
  {
    "id": 304,
    "page": 20,
    "word": "記憶",
    "reading": "きおく",
    "meaning": "ký ức",
    "han": "kí ức ｜ 記:キ 憶:オク",
    "example": "記憶にありません。",
    "translation": "Tôi không nhớ."
  },
  {
    "id": 305,
    "page": 20,
    "word": "試合",
    "reading": "しあい",
    "meaning": "trận đấu",
    "han": "thí hợp ｜ 試:シ 合:ゴウ・ガッ",
    "example": "試合に勝ちました。",
    "translation": "Đã thắng trận."
  },
  {
    "id": 306,
    "page": 20,
    "word": "今度",
    "reading": "こんど",
    "meaning": "lần tới, lần này",
    "han": "kim độ ｜ 今:コン・キン 度:ド・ト",
    "example": "今度会いましょう。",
    "translation": "Lần tới gặp nhau nhé."
  },
  {
    "id": 307,
    "page": 20,
    "word": "労働",
    "reading": "ろうどう",
    "meaning": "lao động",
    "han": "lao động ｜ 労:ロウ 働:ドウ",
    "example": "労働時間を管理します。",
    "translation": "Quản lý thời gian lao động."
  },
  {
    "id": 308,
    "page": 20,
    "word": "大切",
    "reading": "たいせつ",
    "meaning": "quan trọng, quý giá",
    "han": "đại thiết ｜ 大:ダイ・タイ 切:セツ・サイ",
    "example": "大切にします。",
    "translation": "Tôi sẽ trân trọng."
  },
  {
    "id": 309,
    "page": 20,
    "word": "未来",
    "reading": "みらい",
    "meaning": "tương lai",
    "han": "vị lai ｜ 未:ミ・ビ 来:ライ・タイ",
    "example": "未来を考えます。",
    "translation": "Tôi nghĩ về tương lai."
  },
  {
    "id": 310,
    "page": 20,
    "word": "現実",
    "reading": "げんじつ",
    "meaning": "hiện thực",
    "han": "hiện thực ｜ 現:ゲン 実:ジツ・シツ",
    "example": "現実を見ます。",
    "translation": "Tôi nhìn vào thực tế."
  },
  {
    "id": 311,
    "page": 20,
    "word": "用意",
    "reading": "ようい",
    "meaning": "chuẩn bị",
    "han": "dụng ý ｜ 用:ヨウ 意:イ",
    "example": "資料を用意します。",
    "translation": "Tôi chuẩn bị tài liệu."
  },
  {
    "id": 312,
    "page": 20,
    "word": "科学",
    "reading": "かがく",
    "meaning": "khoa học",
    "han": "khoa học ｜ 科:カ 学:ガク",
    "example": "科学が好きです。",
    "translation": "Tôi thích khoa học."
  },
  {
    "id": 313,
    "page": 20,
    "word": "結局",
    "reading": "けっきょく",
    "meaning": "rốt cuộc",
    "han": "kết cục ｜ 結:ケツ・ケチ 局:キョク",
    "example": "結局やめました。",
    "translation": "Rốt cuộc tôi đã bỏ."
  },
  {
    "id": 314,
    "page": 20,
    "word": "上げ",
    "reading": "あげ",
    "meaning": "nâng lên",
    "han": "thượng ｜ 上:ジョウ・ショウ",
    "example": "価格を上げます。",
    "translation": "Tôi tăng giá."
  },
  {
    "id": 315,
    "page": 20,
    "word": "予約",
    "reading": "よやく",
    "meaning": "đặt trước",
    "han": "dư ước ｜ 予:ヨ・シャ 約:ヤク",
    "example": "席を予約します。",
    "translation": "Tôi đặt chỗ."
  },
  {
    "id": 316,
    "page": 20,
    "word": "仲間",
    "reading": "なかま",
    "meaning": "đồng đội, bạn",
    "han": "trọng gian ｜ 仲:チュウ 間:カン・ケン",
    "example": "仲間と働きます。",
    "translation": "Tôi làm việc cùng đồng đội."
  },
  {
    "id": 317,
    "page": 20,
    "word": "位置",
    "reading": "いち",
    "meaning": "vị trí",
    "han": "vị trí ｜ 位:イ 置:チ",
    "example": "位置を確認します。",
    "translation": "Tôi kiểm tra vị trí."
  },
  {
    "id": 318,
    "page": 20,
    "word": "印象",
    "reading": "いんしょう",
    "meaning": "ấn tượng",
    "han": "ấn tượng ｜ 印:イン 象:ショウ・ゾウ",
    "example": "いい印象でした。",
    "translation": "Ấn tượng tốt."
  },
  {
    "id": 319,
    "page": 21,
    "word": "反応",
    "reading": "はんのう",
    "meaning": "phản ứng",
    "han": "phản ứng ｜ 反:ハン・ホン 応:オウ・ヨウ",
    "example": "反応を見ます。",
    "translation": "Tôi xem phản ứng."
  },
  {
    "id": 320,
    "page": 21,
    "word": "少ない",
    "reading": "すくない",
    "meaning": "ít",
    "han": "thiểu ｜ 少:ショウ",
    "example": "人が少ないです。",
    "translation": "Ít người."
  },
  {
    "id": 321,
    "page": 21,
    "word": "日本語",
    "reading": "にほんご",
    "meaning": "tiếng Nhật",
    "han": "nhật bổn ngữ ｜ 日:ニチ・ジツ 本:ホン 語:ゴ",
    "example": "日本語を話します。",
    "translation": "Tôi nói tiếng Nhật."
  },
  {
    "id": 322,
    "page": 21,
    "word": "本人",
    "reading": "ほんにん",
    "meaning": "đương sự, chính người đó",
    "han": "bổn nhân ｜ 本:ホン 人:ジン・ニン",
    "example": "本人に確認します。",
    "translation": "Tôi xác nhận với đương sự."
  },
  {
    "id": 323,
    "page": 21,
    "word": "番号",
    "reading": "ばんごう",
    "meaning": "số",
    "han": "phiên hiệu ｜ 番:バン 号:ゴウ",
    "example": "番号を教えてください。",
    "translation": "Xin cho biết số."
  },
  {
    "id": 324,
    "page": 21,
    "word": "綺麗",
    "reading": "きれい",
    "meaning": "đẹp, sạch",
    "han": "khỉ lệ ｜ 綺:キ 麗:レイ",
    "example": "綺麗な部屋です。",
    "translation": "Là căn phòng sạch đẹp."
  },
  {
    "id": 325,
    "page": 21,
    "word": "近い",
    "reading": "ちかい",
    "meaning": "gần",
    "han": "cận ｜ 近:キン・コン",
    "example": "駅から近いです。",
    "translation": "Gần ga."
  },
  {
    "id": 326,
    "page": 21,
    "word": "銀行",
    "reading": "ぎんこう",
    "meaning": "ngân hàng",
    "han": "ngân hành ｜ 銀:ギン 行:コウ・ギョウ",
    "example": "銀行に行きます。",
    "translation": "Tôi đến ngân hàng."
  },
  {
    "id": 327,
    "page": 21,
    "word": "長い",
    "reading": "ながい",
    "meaning": "dài",
    "han": "trường ｜ 長:チョウ",
    "example": "長い時間がかかります。",
    "translation": "Mất thời gian dài."
  },
  {
    "id": 328,
    "page": 21,
    "word": "不明",
    "reading": "ふめい",
    "meaning": "không rõ",
    "han": "bất minh ｜ 不:フ・ブ 明:メイ・ミョウ",
    "example": "原因は不明です。",
    "translation": "Nguyên nhân chưa rõ."
  },
  {
    "id": 329,
    "page": 21,
    "word": "出会い",
    "reading": "であい",
    "meaning": "cuộc gặp gỡ",
    "han": "xuất cối ｜ 出:シュツ・スイ 会:カイ・エ",
    "example": "いい出会いがありました。",
    "translation": "Đã có cuộc gặp gỡ tốt."
  },
  {
    "id": 330,
    "page": 21,
    "word": "参考",
    "reading": "さんこう",
    "meaning": "tham khảo",
    "han": "sâm khảo ｜ 参:サン・シン 考:コウ",
    "example": "参考にします。",
    "translation": "Tôi sẽ tham khảo."
  },
  {
    "id": 331,
    "page": 21,
    "word": "友人",
    "reading": "ゆうじん",
    "meaning": "bạn bè",
    "han": "hữu nhân ｜ 友:ユウ 人:ジン・ニン",
    "example": "友人に会います。",
    "translation": "Tôi gặp bạn."
  },
  {
    "id": 332,
    "page": 21,
    "word": "地球",
    "reading": "ちきゅう",
    "meaning": "trái đất",
    "han": "địa cầu ｜ 地:チ・ジ 球:キュウ",
    "example": "地球は丸いです。",
    "translation": "Trái đất tròn."
  },
  {
    "id": 333,
    "page": 21,
    "word": "実施",
    "reading": "じっし",
    "meaning": "thực hiện",
    "han": "thực thi ｜ 実:ジツ・シツ 施:シ・セ",
    "example": "調査を実施します。",
    "translation": "Tôi tiến hành khảo sát."
  },
  {
    "id": 334,
    "page": 21,
    "word": "必ず",
    "reading": "かならず",
    "meaning": "nhất định",
    "han": "tất ｜ 必:ヒツ",
    "example": "必ず連絡します。",
    "translation": "Nhất định tôi sẽ liên lạc."
  },
  {
    "id": 335,
    "page": 21,
    "word": "更新",
    "reading": "こうしん",
    "meaning": "cập nhật, gia hạn",
    "han": "canh tân ｜ 更:コウ 新:シン",
    "example": "情報を更新します。",
    "translation": "Tôi cập nhật thông tin."
  },
  {
    "id": 336,
    "page": 21,
    "word": "購入",
    "reading": "こうにゅう",
    "meaning": "mua",
    "han": "cấu nhập ｜ 購:コウ 入:ニュウ・ジュ",
    "example": "商品を購入します。",
    "translation": "Tôi mua sản phẩm."
  },
  {
    "id": 337,
    "page": 22,
    "word": "人々",
    "reading": "ひとびと",
    "meaning": "mọi người",
    "han": "nhân ? ｜ 人:ジン・ニン 々:-",
    "example": "多くの人々が集まりました。",
    "translation": "Nhiều người đã tập trung."
  },
  {
    "id": 338,
    "page": 22,
    "word": "卒業",
    "reading": "そつぎょう",
    "meaning": "tốt nghiệp",
    "han": "tốt nghiệp ｜ 卒:ソツ・シュツ 業:ギョウ・ゴウ",
    "example": "来月卒業します。",
    "translation": "Tháng sau tôi tốt nghiệp."
  },
  {
    "id": 339,
    "page": 22,
    "word": "国民",
    "reading": "こくみん",
    "meaning": "người dân",
    "han": "quốc dân ｜ 国:コク 民:ミン",
    "example": "国民の意見を聞きます。",
    "translation": "Lắng nghe ý kiến người dân."
  },
  {
    "id": 340,
    "page": 22,
    "word": "大統領",
    "reading": "だいとうりょう",
    "meaning": "tổng thống",
    "han": "đại thống lĩnh ｜ 大:ダイ・タイ 統:トウ 領:リョウ",
    "example": "大統領が発表しました。",
    "translation": "Tổng thống đã công bố."
  },
  {
    "id": 341,
    "page": 22,
    "word": "宇宙",
    "reading": "うちゅう",
    "meaning": "vũ trụ",
    "han": "vũ trụ ｜ 宇:ウ 宙:チュウ",
    "example": "宇宙に興味があります。",
    "translation": "Tôi hứng thú với vũ trụ."
  },
  {
    "id": 342,
    "page": 22,
    "word": "対策",
    "reading": "たいさく",
    "meaning": "đối sách, biện pháp",
    "han": "đối sách ｜ 対:タイ・ツイ 策:サク",
    "example": "対策を考えます。",
    "translation": "Tôi nghĩ biện pháp đối phó."
  },
  {
    "id": 343,
    "page": 22,
    "word": "少女",
    "reading": "しょうじょ",
    "meaning": "thiếu nữ",
    "han": "thiểu nữ ｜ 少:ショウ 女:ジョ・ニョ",
    "example": "少女が笑っています。",
    "translation": "Cô bé đang cười."
  },
  {
    "id": 344,
    "page": 22,
    "word": "携帯",
    "reading": "けいたい",
    "meaning": "di động",
    "han": "huề đái ｜ 携:ケイ 帯:タイ",
    "example": "携帯を忘れました。",
    "translation": "Tôi quên điện thoại."
  },
  {
    "id": 345,
    "page": 22,
    "word": "時点",
    "reading": "じてん",
    "meaning": "thời điểm",
    "han": "thì điểm ｜ 時:ジ 点:テン",
    "example": "現時点では未定です。",
    "translation": "Hiện tại chưa quyết định."
  },
  {
    "id": 346,
    "page": 22,
    "word": "正直",
    "reading": "しょうじき",
    "meaning": "thành thật",
    "han": "chánh trực ｜ 正:セイ・ショウ 直:チョク・ジキ",
    "example": "正直に話します。",
    "translation": "Tôi nói thật lòng."
  },
  {
    "id": 347,
    "page": 22,
    "word": "皆さん",
    "reading": "みなさん",
    "meaning": "mọi người (kính)",
    "han": "giai ｜ 皆:カイ",
    "example": "皆さん、こんにちは。",
    "translation": "Chào mọi người."
  },
  {
    "id": 348,
    "page": 22,
    "word": "以降",
    "reading": "いこう",
    "meaning": "từ đó trở đi",
    "han": "dĩ hàng ｜ 以:イ 降:コウ・ゴ",
    "example": "三時以降は空いています。",
    "translation": "Sau ba giờ tôi rảnh."
  },
  {
    "id": 349,
    "page": 22,
    "word": "価格",
    "reading": "かかく",
    "meaning": "giá cả",
    "han": "giá cách ｜ 価:カ・ケ 格:カク・コウ",
    "example": "価格を確認します。",
    "translation": "Tôi kiểm tra giá."
  },
  {
    "id": 350,
    "page": 22,
    "word": "息子",
    "reading": "むすこ",
    "meaning": "con trai",
    "han": "tức tử ｜ 息:ソク 子:シ・ス",
    "example": "息子は十歳です。",
    "translation": "Con trai tôi mười tuổi."
  },
  {
    "id": 351,
    "page": 22,
    "word": "明らか",
    "reading": "あきらか",
    "meaning": "rõ ràng",
    "han": "minh ｜ 明:メイ・ミョウ",
    "example": "明らかな間違いです。",
    "translation": "Là lỗi sai rõ ràng."
  },
  {
    "id": 352,
    "page": 22,
    "word": "止め",
    "reading": "とめ",
    "meaning": "dừng lại",
    "han": "chỉ ｜ 止:シ",
    "example": "作業を止めます。",
    "translation": "Tôi dừng công việc."
  },
  {
    "id": 353,
    "page": 22,
    "word": "消費",
    "reading": "しょうひ",
    "meaning": "tiêu dùng",
    "han": "tiêu phí ｜ 消:ショウ 費:ヒ",
    "example": "エネルギーを消費します。",
    "translation": "Tiêu thụ năng lượng."
  },
  {
    "id": 354,
    "page": 22,
    "word": "犯罪",
    "reading": "はんざい",
    "meaning": "tội phạm",
    "han": "phạm tội ｜ 犯:ハン・ボン 罪:ザイ",
    "example": "犯罪を防ぎます。",
    "translation": "Phòng ngừa tội phạm."
  },
  {
    "id": 355,
    "page": 23,
    "word": "監督",
    "reading": "かんとく",
    "meaning": "giám sát, đạo diễn",
    "han": "giam đốc ｜ 監:カン 督:トク",
    "example": "監督が指示しました。",
    "translation": "Huấn luyện viên đã chỉ đạo."
  },
  {
    "id": 356,
    "page": 23,
    "word": "素晴らしい",
    "reading": "すばらしい",
    "meaning": "tuyệt vời",
    "han": "tố tình ｜ 素:ソ・ス 晴:セイ",
    "example": "素晴らしい結果です。",
    "translation": "Kết quả tuyệt vời."
  },
  {
    "id": 357,
    "page": 23,
    "word": "経営",
    "reading": "けいえい",
    "meaning": "kinh doanh, quản lý",
    "han": "kinh dinh ｜ 経:ケイ・キョウ 営:エイ",
    "example": "会社を経営します。",
    "translation": "Tôi điều hành công ty."
  },
  {
    "id": 358,
    "page": 23,
    "word": "負け",
    "reading": "まけ",
    "meaning": "thua",
    "han": "phụ ｜ 負:フ",
    "example": "試合に負けました。",
    "translation": "Đã thua trận."
  },
  {
    "id": 359,
    "page": 23,
    "word": "通常",
    "reading": "つうじょう",
    "meaning": "thông thường",
    "han": "thông thường ｜ 通:ツウ・ツ 常:ジョウ",
    "example": "通常は九時に始まります。",
    "translation": "Thông thường bắt đầu lúc chín giờ."
  },
  {
    "id": 360,
    "page": 23,
    "word": "障害",
    "reading": "しょうがい",
    "meaning": "trở ngại, khuyết tật",
    "han": "chướng hại ｜ 障:ショウ 害:ガイ",
    "example": "障害を取り除きます。",
    "translation": "Loại bỏ trở ngại."
  },
  {
    "id": 361,
    "page": 23,
    "word": "電車",
    "reading": "でんしゃ",
    "meaning": "tàu điện",
    "han": "điện xa ｜ 電:デン 車:シャ",
    "example": "電車で通勤します。",
    "translation": "Tôi đi làm bằng tàu điện."
  },
  {
    "id": 362,
    "page": 23,
    "word": "作業",
    "reading": "さぎょう",
    "meaning": "thao tác, công việc",
    "han": "tác nghiệp ｜ 作:サク・サ 業:ギョウ・ゴウ",
    "example": "作業を続けます。",
    "translation": "Tôi tiếp tục công việc."
  },
  {
    "id": 363,
    "page": 23,
    "word": "国家",
    "reading": "こっか",
    "meaning": "quốc gia",
    "han": "quốc gia ｜ 国:コク 家:カ・ケ",
    "example": "国家の問題です。",
    "translation": "Là vấn đề quốc gia."
  },
  {
    "id": 364,
    "page": 23,
    "word": "多数",
    "reading": "たすう",
    "meaning": "đa số",
    "han": "đa sác ｜ 多:タ 数:スウ・ス",
    "example": "多数の意見です。",
    "translation": "Là ý kiến số đông."
  },
  {
    "id": 365,
    "page": 23,
    "word": "疲れ",
    "reading": "つかれ",
    "meaning": "mệt mỏi",
    "han": "bì ｜ 疲:ヒ",
    "example": "疲れが取れません。",
    "translation": "Tôi không hết mệt."
  },
  {
    "id": 366,
    "page": 23,
    "word": "素敵",
    "reading": "すてき",
    "meaning": "tuyệt, đẹp",
    "han": "tố địch ｜ 素:ソ・ス 敵:テキ",
    "example": "素敵な場所ですね。",
    "translation": "Nơi đẹp nhỉ."
  },
  {
    "id": 367,
    "page": 23,
    "word": "行為",
    "reading": "こうい",
    "meaning": "hành vi",
    "han": "hành vi ｜ 行:コウ・ギョウ 為:イ",
    "example": "その行為は禁止です。",
    "translation": "Hành vi đó bị cấm."
  },
  {
    "id": 368,
    "page": 23,
    "word": "途中",
    "reading": "とちゅう",
    "meaning": "giữa chừng",
    "han": "đồ trung ｜ 途:ト 中:チュウ",
    "example": "途中で連絡します。",
    "translation": "Giữa đường tôi sẽ liên lạc."
  },
  {
    "id": 369,
    "page": 23,
    "word": "仕方",
    "reading": "しかた",
    "meaning": "cách làm",
    "han": "sĩ phương ｜ 仕:シ・ジ 方:ホウ",
    "example": "仕方がありません。",
    "translation": "Không còn cách nào."
  },
  {
    "id": 370,
    "page": 23,
    "word": "制度",
    "reading": "せいど",
    "meaning": "chế độ, hệ thống",
    "han": "chế độ ｜ 制:セイ 度:ド・ト",
    "example": "新しい制度を導入します。",
    "translation": "Đưa vào chế độ mới."
  },
  {
    "id": 371,
    "page": 23,
    "word": "制限",
    "reading": "せいげん",
    "meaning": "hạn chế",
    "han": "chế hạn ｜ 制:セイ 限:ゲン",
    "example": "時間を制限します。",
    "translation": "Giới hạn thời gian."
  },
  {
    "id": 372,
    "page": 23,
    "word": "取引",
    "reading": "とりひき",
    "meaning": "giao dịch",
    "han": "thủ dẫn ｜ 取:シュ 引:イン",
    "example": "取引先と会います。",
    "translation": "Tôi gặp đối tác giao dịch."
  },
  {
    "id": 373,
    "page": 24,
    "word": "国際",
    "reading": "こくさい",
    "meaning": "quốc tế",
    "han": "quốc tế ｜ 国:コク 際:サイ",
    "example": "国際会議に出席します。",
    "translation": "Tôi dự hội nghị quốc tế."
  },
  {
    "id": 374,
    "page": 24,
    "word": "地方",
    "reading": "ちほう",
    "meaning": "địa phương, vùng",
    "han": "địa phương ｜ 地:チ・ジ 方:ホウ",
    "example": "地方に住んでいます。",
    "translation": "Tôi sống ở vùng quê."
  },
  {
    "id": 375,
    "page": 24,
    "word": "完成",
    "reading": "かんせい",
    "meaning": "hoàn thành",
    "han": "hoàn thành ｜ 完:カン 成:セイ・ジョウ",
    "example": "作品が完成しました。",
    "translation": "Tác phẩm đã hoàn thành."
  },
  {
    "id": 376,
    "page": 24,
    "word": "少年",
    "reading": "しょうねん",
    "meaning": "thiếu niên",
    "han": "thiểu niên ｜ 少:ショウ 年:ネン",
    "example": "少年が走っています。",
    "translation": "Cậu bé đang chạy."
  },
  {
    "id": 377,
    "page": 24,
    "word": "方向",
    "reading": "ほうこう",
    "meaning": "phương hướng",
    "han": "phương hướng ｜ 方:ホウ 向:コウ",
    "example": "方向を確認します。",
    "translation": "Tôi xác nhận phương hướng."
  },
  {
    "id": 378,
    "page": 24,
    "word": "有名",
    "reading": "ゆうめい",
    "meaning": "nổi tiếng",
    "han": "hữu danh ｜ 有:ユウ・ウ 名:メイ・ミョウ",
    "example": "有名な店です。",
    "translation": "Là cửa hàng nổi tiếng."
  },
  {
    "id": 379,
    "page": 24,
    "word": "本気",
    "reading": "ほんき",
    "meaning": "nghiêm túc",
    "han": "bổn khí ｜ 本:ホン 気:キ・ケ",
    "example": "本気で頑張ります。",
    "translation": "Tôi sẽ cố gắng nghiêm túc."
  },
  {
    "id": 380,
    "page": 24,
    "word": "生産",
    "reading": "せいさん",
    "meaning": "sản xuất",
    "han": "sanh sản ｜ 生:セイ・ショウ 産:サン",
    "example": "商品を生産します。",
    "translation": "Sản xuất hàng hóa."
  },
  {
    "id": 381,
    "page": 24,
    "word": "自己",
    "reading": "じこ",
    "meaning": "bản thân",
    "han": "tự kỷ ｜ 自:ジ・シ 己:コ・キ",
    "example": "自己紹介をします。",
    "translation": "Tôi tự giới thiệu."
  },
  {
    "id": 382,
    "page": 24,
    "word": "会議",
    "reading": "かいぎ",
    "meaning": "cuộc họp",
    "han": "cối nghị ｜ 会:カイ・エ 議:ギ",
    "example": "会議に出ます。",
    "translation": "Tôi dự họp."
  },
  {
    "id": 383,
    "page": 24,
    "word": "健康",
    "reading": "けんこう",
    "meaning": "sức khỏe",
    "han": "kiện khang ｜ 健:ケン 康:コウ",
    "example": "健康に気をつけます。",
    "translation": "Tôi giữ gìn sức khỏe."
  },
  {
    "id": 384,
    "page": 24,
    "word": "勝手",
    "reading": "かって",
    "meaning": "tùy tiện, tự ý",
    "han": "thắng thủ ｜ 勝:ショウ 手:シュ・ズ",
    "example": "勝手に決めないでください。",
    "translation": "Xin đừng tự ý quyết định."
  },
  {
    "id": 385,
    "page": 24,
    "word": "外国",
    "reading": "がいこく",
    "meaning": "nước ngoài",
    "han": "ngoại quốc ｜ 外:ガイ・ゲ 国:コク",
    "example": "外国に住んでいます。",
    "translation": "Tôi sống ở nước ngoài."
  },
  {
    "id": 386,
    "page": 24,
    "word": "大量",
    "reading": "たいりょう",
    "meaning": "số lượng lớn",
    "han": "đại lượng ｜ 大:ダイ・タイ 量:リョウ",
    "example": "大量のデータです。",
    "translation": "Là lượng dữ liệu lớn."
  },
  {
    "id": 387,
    "page": 24,
    "word": "委員",
    "reading": "いいん",
    "meaning": "ủy viên",
    "han": "ủy viên ｜ 委:イ 員:イン",
    "example": "委員が集まります。",
    "translation": "Các ủy viên tập hợp."
  },
  {
    "id": 388,
    "page": 24,
    "word": "当然",
    "reading": "とうぜん",
    "meaning": "đương nhiên",
    "han": "đang nhiên ｜ 当:トウ 然:ゼン・ネン",
    "example": "当然のことです。",
    "translation": "Là điều đương nhiên."
  },
  {
    "id": 389,
    "page": 24,
    "word": "特徴",
    "reading": "とくちょう",
    "meaning": "đặc trưng",
    "han": "đặc chủy ｜ 特:トク 徴:チョウ・チ",
    "example": "特徴を説明します。",
    "translation": "Tôi giải thích đặc trưng."
  },
  {
    "id": 390,
    "page": 24,
    "word": "選択",
    "reading": "せんたく",
    "meaning": "lựa chọn",
    "han": "tuyển mân ｜ 選:セン 択:タク",
    "example": "選択肢が多いです。",
    "translation": "Có nhiều lựa chọn."
  },
  {
    "id": 391,
    "page": 25,
    "word": "野球",
    "reading": "やきゅう",
    "meaning": "bóng chày",
    "han": "dã cầu ｜ 野:ヤ・ショ 球:キュウ",
    "example": "野球が好きです。",
    "translation": "Tôi thích bóng chày."
  },
  {
    "id": 392,
    "page": 25,
    "word": "食事",
    "reading": "しょくじ",
    "meaning": "bữa ăn",
    "han": "thực sự ｜ 食:ショク・ジキ 事:ジ・ズ",
    "example": "食事に行きましょう。",
    "translation": "Đi ăn nhé."
  },
  {
    "id": 393,
    "page": 25,
    "word": "魔法",
    "reading": "まほう",
    "meaning": "ma thuật",
    "han": "ma pháp ｜ 魔:マ 法:ホウ・ハッ",
    "example": "魔法の話を読みます。",
    "translation": "Tôi đọc truyện ma thuật."
  },
  {
    "id": 394,
    "page": 25,
    "word": "に関して",
    "reading": "にかんして",
    "meaning": "liên quan đến",
    "han": "quan ｜ 関:カン",
    "example": "その件に関して話します。",
    "translation": "Tôi nói về việc đó."
  },
  {
    "id": 395,
    "page": 25,
    "word": "人物",
    "reading": "じんぶつ",
    "meaning": "nhân vật",
    "han": "nhân vật ｜ 人:ジン・ニン 物:ブツ・モツ",
    "example": "重要な人物です。",
    "translation": "Là nhân vật quan trọng."
  },
  {
    "id": 396,
    "page": 25,
    "word": "反対",
    "reading": "はんたい",
    "meaning": "phản đối, ngược lại",
    "han": "phản đối ｜ 反:ハン・ホン 対:タイ・ツイ",
    "example": "反対の意見です。",
    "translation": "Là ý kiến phản đối."
  },
  {
    "id": 397,
    "page": 25,
    "word": "専用",
    "reading": "せんよう",
    "meaning": "chuyên dụng",
    "han": "chuyên dụng ｜ 専:セン 用:ヨウ",
    "example": "専用の道具です。",
    "translation": "Là dụng cụ chuyên dụng."
  },
  {
    "id": 398,
    "page": 25,
    "word": "弁護士",
    "reading": "べんごし",
    "meaning": "luật sư",
    "han": "biện hộ sĩ ｜ 弁:ベン・ヘン 護:ゴ 士:シ",
    "example": "弁護士に相談します。",
    "translation": "Tôi tham vấn luật sư."
  },
  {
    "id": 399,
    "page": 25,
    "word": "意見",
    "reading": "いけん",
    "meaning": "ý kiến",
    "han": "ý kiến ｜ 意:イ 見:ケン",
    "example": "意見を聞きます。",
    "translation": "Tôi nghe ý kiến."
  },
  {
    "id": 400,
    "page": 25,
    "word": "成長",
    "reading": "せいちょう",
    "meaning": "trưởng thành, tăng trưởng",
    "han": "thành trường ｜ 成:セイ・ジョウ 長:チョウ",
    "example": "会社が成長しました。",
    "translation": "Công ty đã tăng trưởng."
  },
  {
    "id": 401,
    "page": 26,
    "word": "指定",
    "reading": "してい",
    "meaning": "chỉ định",
    "han": "chỉ định ｜ 指:シ 定:テイ・ジョウ",
    "example": "日時を指定します。",
    "translation": "Chỉ định ngày giờ."
  },
  {
    "id": 402,
    "page": 26,
    "word": "採用",
    "reading": "さいよう",
    "meaning": "tuyển dụng, áp dụng",
    "han": "thải dụng ｜ 採:サイ 用:ヨウ",
    "example": "新人を採用します。",
    "translation": "Tuyển nhân viên mới."
  },
  {
    "id": 403,
    "page": 26,
    "word": "機関",
    "reading": "きかん",
    "meaning": "cơ quan",
    "han": "ky quan ｜ 機:キ 関:カン",
    "example": "公的な機関です。",
    "translation": "Là cơ quan công."
  },
  {
    "id": 404,
    "page": 26,
    "word": "無駄",
    "reading": "むだ",
    "meaning": "lãng phí",
    "han": "vô đà ｜ 無:ム・ブ 駄:ダ・タ",
    "example": "無駄を減らします。",
    "translation": "Giảm lãng phí."
  },
  {
    "id": 405,
    "page": 26,
    "word": "若い",
    "reading": "わかい",
    "meaning": "trẻ",
    "han": "nhược ｜ 若:ジャク・ニャク",
    "example": "若い社員です。",
    "translation": "Là nhân viên trẻ."
  },
  {
    "id": 406,
    "page": 26,
    "word": "逮捕",
    "reading": "たいほ",
    "meaning": "bắt giữ",
    "han": "đãi bộ ｜ 逮:タイ 捕:ホ",
    "example": "ニュースで逮捕の話を聞きました。",
    "translation": "Tôi nghe tin bắt giữ trên thời sự."
  },
  {
    "id": 407,
    "page": 26,
    "word": "予想",
    "reading": "よそう",
    "meaning": "dự đoán",
    "han": "dư tưởng ｜ 予:ヨ・シャ 想:ソウ・ソ",
    "example": "予想より早いです。",
    "translation": "Nhanh hơn dự đoán."
  },
  {
    "id": 408,
    "page": 26,
    "word": "今後",
    "reading": "こんご",
    "meaning": "từ nay về sau",
    "han": "kim hậu ｜ 今:コン・キン 後:ゴ・コウ",
    "example": "今後もよろしくお願いします。",
    "translation": "Từ nay về sau cũng xin giúp đỡ."
  },
  {
    "id": 409,
    "page": 26,
    "word": "医療",
    "reading": "いりょう",
    "meaning": "y tế",
    "han": "ế liệu ｜ 医:イ 療:リョウ",
    "example": "医療を学びます。",
    "translation": "Tôi học y tế."
  },
  {
    "id": 410,
    "page": 26,
    "word": "変化",
    "reading": "へんか",
    "meaning": "biến đổi",
    "han": "biến hóa ｜ 変:ヘン 化:カ・ケ",
    "example": "変化が見られます。",
    "translation": "Thấy có sự thay đổi."
  },
  {
    "id": 411,
    "page": 26,
    "word": "新聞",
    "reading": "しんぶん",
    "meaning": "báo",
    "han": "tân văn ｜ 新:シン 聞:ブン・モン",
    "example": "新聞を読みます。",
    "translation": "Tôi đọc báo."
  },
  {
    "id": 412,
    "page": 26,
    "word": "特定",
    "reading": "とくてい",
    "meaning": "đặc định, cụ thể",
    "han": "đặc định ｜ 特:トク 定:テイ・ジョウ",
    "example": "特定の人に送ります。",
    "translation": "Gửi cho người cụ thể."
  },
  {
    "id": 413,
    "page": 26,
    "word": "男子",
    "reading": "だんし",
    "meaning": "nam, con trai",
    "han": "nam tử ｜ 男:ダン・ナン 子:シ・ス",
    "example": "男子学生です。",
    "translation": "Là nam sinh viên."
  },
  {
    "id": 414,
    "page": 26,
    "word": "編集",
    "reading": "へんしゅう",
    "meaning": "biên tập",
    "han": "biên tập ｜ 編:ヘン 集:シュウ",
    "example": "動画を編集します。",
    "translation": "Tôi biên tập video."
  },
  {
    "id": 415,
    "page": 26,
    "word": "通信",
    "reading": "つうしん",
    "meaning": "truyền thông, liên lạc",
    "han": "thông tín ｜ 通:ツウ・ツ 信:シン",
    "example": "通信が遅いです。",
    "translation": "Kết nối chậm."
  },
  {
    "id": 416,
    "page": 26,
    "word": "制作",
    "reading": "せいさく",
    "meaning": "sản xuất (phim, tác phẩm)",
    "han": "chế tác ｜ 制:セイ 作:サク・サ",
    "example": "番組を制作します。",
    "translation": "Sản xuất chương trình."
  },
  {
    "id": 417,
    "page": 26,
    "word": "大きい",
    "reading": "おおきい",
    "meaning": "to",
    "han": "đại ｜ 大:ダイ・タイ",
    "example": "大きい声で話します。",
    "translation": "Nói giọng lớn."
  },
  {
    "id": 418,
    "page": 26,
    "word": "掲載",
    "reading": "けいさい",
    "meaning": "đăng tải",
    "han": "yết tái ｜ 掲:ケイ 載:サイ",
    "example": "記事を掲載します。",
    "translation": "Đăng bài báo."
  },
  {
    "id": 419,
    "page": 27,
    "word": "新た",
    "reading": "あらた",
    "meaning": "mới",
    "han": "tân ｜ 新:シン",
    "example": "新たな課題です。",
    "translation": "Là vấn đề mới."
  },
  {
    "id": 420,
    "page": 27,
    "word": "条件",
    "reading": "じょうけん",
    "meaning": "điều kiện",
    "han": "điêu kiện ｜ 条:ジョウ・チョウ 件:ケン",
    "example": "条件を確認します。",
    "translation": "Tôi xác nhận điều kiện."
  },
  {
    "id": 421,
    "page": 27,
    "word": "現場",
    "reading": "げんば",
    "meaning": "hiện trường",
    "han": "hiện tràng ｜ 現:ゲン 場:ジョウ・チョウ",
    "example": "現場に行きます。",
    "translation": "Tôi đến hiện trường."
  },
  {
    "id": 422,
    "page": 27,
    "word": "直接",
    "reading": "ちょくせつ",
    "meaning": "trực tiếp",
    "han": "trực tiếp ｜ 直:チョク・ジキ 接:セツ・ショウ",
    "example": "直接話します。",
    "translation": "Tôi nói trực tiếp."
  },
  {
    "id": 423,
    "page": 27,
    "word": "観光",
    "reading": "かんこう",
    "meaning": "du lịch tham quan",
    "han": "quan quang ｜ 観:カン 光:コウ",
    "example": "京都を観光します。",
    "translation": "Tôi tham quan Kyoto."
  },
  {
    "id": 424,
    "page": 27,
    "word": "凄い",
    "reading": "すごい",
    "meaning": "ghê gớm",
    "han": "thê ｜ 凄:セイ・サイ",
    "example": "凄い人ですね。",
    "translation": "Người ghê gớm nhỉ."
  },
  {
    "id": 425,
    "page": 27,
    "word": "応援",
    "reading": "おうえん",
    "meaning": "cổ vũ, hỗ trợ",
    "han": "ứng viên ｜ 応:オウ・ヨウ 援:エン",
    "example": "応援しています。",
    "translation": "Tôi cổ vũ."
  },
  {
    "id": 426,
    "page": 27,
    "word": "治療",
    "reading": "ちりょう",
    "meaning": "điều trị",
    "han": "trì liệu ｜ 治:ジ・チ 療:リョウ",
    "example": "病気を治療します。",
    "translation": "Điều trị bệnh."
  },
  {
    "id": 427,
    "page": 27,
    "word": "法律",
    "reading": "ほうりつ",
    "meaning": "pháp luật",
    "han": "pháp luật ｜ 法:ホウ・ハッ 律:リツ・リチ",
    "example": "法律を守ります。",
    "translation": "Tuân thủ pháp luật."
  },
  {
    "id": 428,
    "page": 27,
    "word": "破壊",
    "reading": "はかい",
    "meaning": "phá hủy",
    "han": "phá hoại ｜ 破:ハ 壊:カイ・エ",
    "example": "環境を破壊します。",
    "translation": "Phá hủy môi trường."
  },
  {
    "id": 429,
    "page": 27,
    "word": "種類",
    "reading": "しゅるい",
    "meaning": "chủng loại",
    "han": "chủng loại ｜ 種:シュ 類:ルイ",
    "example": "種類が多いです。",
    "translation": "Có nhiều loại."
  },
  {
    "id": 430,
    "page": 27,
    "word": "不安",
    "reading": "ふあん",
    "meaning": "bất an",
    "han": "bất an ｜ 不:フ・ブ 安:アン",
    "example": "不安があります。",
    "translation": "Tôi có bất an."
  },
  {
    "id": 431,
    "page": 27,
    "word": "事務所",
    "reading": "じむしょ",
    "meaning": "văn phòng",
    "han": "sự vụ sở ｜ 事:ジ・ズ 務:ム 所:ショ",
    "example": "事務所で働いています。",
    "translation": "Tôi làm ở văn phòng."
  },
  {
    "id": 432,
    "page": 27,
    "word": "小説",
    "reading": "しょうせつ",
    "meaning": "tiểu thuyết",
    "han": "tiểu duyệt ｜ 小:ショウ 説:セツ・ゼイ",
    "example": "小説を書きます。",
    "translation": "Tôi viết tiểu thuyết."
  },
  {
    "id": 433,
    "page": 27,
    "word": "年齢",
    "reading": "ねんれい",
    "meaning": "tuổi tác",
    "han": "niên linh ｜ 年:ネン 齢:レイ",
    "example": "年齢を聞きます。",
    "translation": "Hỏi tuổi."
  },
  {
    "id": 434,
    "page": 27,
    "word": "投票",
    "reading": "とうひょう",
    "meaning": "bỏ phiếu",
    "han": "đầu phiếu ｜ 投:トウ 票:ヒョウ",
    "example": "投票に行きます。",
    "translation": "Tôi đi bỏ phiếu."
  },
  {
    "id": 435,
    "page": 27,
    "word": "旅行",
    "reading": "りょこう",
    "meaning": "du lịch",
    "han": "lữ hành ｜ 旅:リョ 行:コウ・ギョウ",
    "example": "旅行に行きます。",
    "translation": "Tôi đi du lịch."
  },
  {
    "id": 436,
    "page": 27,
    "word": "機会",
    "reading": "きかい",
    "meaning": "cơ hội",
    "han": "ky cối ｜ 機:キ 会:カイ・エ",
    "example": "いい機会です。",
    "translation": "Là cơ hội tốt."
  },
  {
    "id": 437,
    "page": 28,
    "word": "活躍",
    "reading": "かつやく",
    "meaning": "hoạt động tích cực",
    "han": "hoạt dược ｜ 活:カツ 躍:ヤク",
    "example": "大きく活躍しました。",
    "translation": "Đã hoạt động rất tích cực."
  },
  {
    "id": 438,
    "page": 28,
    "word": "美しい",
    "reading": "うつくしい",
    "meaning": "đẹp",
    "han": "mỹ ｜ 美:ビ・ミ",
    "example": "美しい景色です。",
    "translation": "Là cảnh đẹp."
  },
  {
    "id": 439,
    "page": 28,
    "word": "趣味",
    "reading": "しゅみ",
    "meaning": "sở thích",
    "han": "thú vị ｜ 趣:シュ 味:ミ",
    "example": "趣味は読書です。",
    "translation": "Sở thích là đọc sách."
  },
  {
    "id": 440,
    "page": 28,
    "word": "勝利",
    "reading": "しょうり",
    "meaning": "chiến thắng",
    "han": "thắng lợi ｜ 勝:ショウ 利:リ",
    "example": "勝利を喜びます。",
    "translation": "Vui mừng chiến thắng."
  },
  {
    "id": 441,
    "page": 28,
    "word": "地震",
    "reading": "じしん",
    "meaning": "động đất",
    "han": "địa chấn ｜ 地:チ・ジ 震:シン",
    "example": "地震がありました。",
    "translation": "Đã có động đất."
  },
  {
    "id": 442,
    "page": 28,
    "word": "失礼",
    "reading": "しつれい",
    "meaning": "thất lễ, xin lỗi",
    "han": "thất lễ ｜ 失:シツ 礼:レイ・ライ",
    "example": "失礼します。",
    "translation": "Xin phép (tôi xin thất lễ)."
  },
  {
    "id": 443,
    "page": 28,
    "word": "安定",
    "reading": "あんてい",
    "meaning": "ổn định",
    "han": "an định ｜ 安:アン 定:テイ・ジョウ",
    "example": "安定しています。",
    "translation": "Đang ổn định."
  },
  {
    "id": 444,
    "page": 28,
    "word": "広告",
    "reading": "こうこく",
    "meaning": "quảng cáo",
    "han": "quảng cáo ｜ 広:コウ 告:コク",
    "example": "広告を出します。",
    "translation": "Tôi đăng quảng cáo."
  },
  {
    "id": 445,
    "page": 28,
    "word": "早い",
    "reading": "はやい",
    "meaning": "sớm, nhanh",
    "han": "tảo ｜ 早:ソウ・サッ",
    "example": "朝は早いです。",
    "translation": "Buổi sáng dậy sớm."
  },
  {
    "id": 446,
    "page": 28,
    "word": "武器",
    "reading": "ぶき",
    "meaning": "vũ khí",
    "han": "vũ khí ｜ 武:ブ・ム 器:キ",
    "example": "武器の歴史を学びます。",
    "translation": "Tôi học lịch sử vũ khí."
  },
  {
    "id": 447,
    "page": 28,
    "word": "画面",
    "reading": "がめん",
    "meaning": "màn hình",
    "han": "hoạch diện ｜ 画:ガ・カク 面:メン・ベン",
    "example": "画面を見てください。",
    "translation": "Hãy nhìn màn hình."
  },
  {
    "id": 448,
    "page": 28,
    "word": "社長",
    "reading": "しゃちょう",
    "meaning": "giám đốc, chủ tịch",
    "han": "xã trường ｜ 社:シャ 長:チョウ",
    "example": "社長に報告します。",
    "translation": "Tôi báo cáo giám đốc."
  },
  {
    "id": 449,
    "page": 28,
    "word": "秘密",
    "reading": "ひみつ",
    "meaning": "bí mật",
    "han": "bí mật ｜ 秘:ヒ 密:ミツ",
    "example": "秘密を守ります。",
    "translation": "Giữ bí mật."
  },
  {
    "id": 450,
    "page": 28,
    "word": "装置",
    "reading": "そうち",
    "meaning": "thiết bị",
    "han": "trang trí ｜ 装:ソウ・ショウ 置:チ",
    "example": "装置を設置します。",
    "translation": "Lắp đặt thiết bị."
  },
  {
    "id": 451,
    "page": 28,
    "word": "複数",
    "reading": "ふくすう",
    "meaning": "nhiều, số nhiều",
    "han": "phức sác ｜ 複:フク 数:スウ・ス",
    "example": "複数の案があります。",
    "translation": "Có nhiều phương án."
  },
  {
    "id": 452,
    "page": 28,
    "word": "連続",
    "reading": "れんぞく",
    "meaning": "liên tục",
    "han": "liên tục ｜ 連:レン 続:ゾク・ショク",
    "example": "三日連続で雨です。",
    "translation": "Mưa ba ngày liên tiếp."
  },
  {
    "id": 453,
    "page": 28,
    "word": "都市",
    "reading": "とし",
    "meaning": "đô thị",
    "han": "đô thị ｜ 都:ト・ツ 市:シ",
    "example": "大きな都市です。",
    "translation": "Là thành phố lớn."
  },
  {
    "id": 454,
    "page": 28,
    "word": "馬鹿",
    "reading": "ばか",
    "meaning": "ngốc",
    "han": "mã lộc ｜ 馬:バ 鹿:ロク",
    "example": "馬鹿な間違いをしました。",
    "translation": "Tôi đã mắc lỗi ngớ ngẩn."
  },
  {
    "id": 455,
    "page": 29,
    "word": "例えば",
    "reading": "たとえば",
    "meaning": "ví dụ",
    "han": "lệ ｜ 例:レイ",
    "example": "例えば、これです。",
    "translation": "Ví dụ như cái này."
  },
  {
    "id": 456,
    "page": 29,
    "word": "処理",
    "reading": "しょり",
    "meaning": "xử lý",
    "han": "xứ lý ｜ 処:ショ 理:リ",
    "example": "データを処理します。",
    "translation": "Tôi xử lý dữ liệu."
  },
  {
    "id": 457,
    "page": 29,
    "word": "常に",
    "reading": "つねに",
    "meaning": "luôn luôn",
    "han": "thường ｜ 常:ジョウ",
    "example": "常に注意します。",
    "translation": "Luôn luôn chú ý."
  },
  {
    "id": 458,
    "page": 29,
    "word": "株式会社",
    "reading": "かぶしきがいしゃ",
    "meaning": "công ty cổ phần",
    "han": "chu thức cối xã ｜ 株:シュ 式:シキ 会:カイ・エ",
    "example": "株式会社を設立します。",
    "translation": "Thành lập công ty cổ phần."
  },
  {
    "id": 459,
    "page": 29,
    "word": "正しい",
    "reading": "ただしい",
    "meaning": "đúng",
    "han": "chánh ｜ 正:セイ・ショウ",
    "example": "正しい答えです。",
    "translation": "Là đáp án đúng."
  },
  {
    "id": 460,
    "page": 29,
    "word": "満足",
    "reading": "まんぞく",
    "meaning": "hài lòng",
    "han": "mãn túc ｜ 満:マン・バン 足:ソク",
    "example": "満足しています。",
    "translation": "Tôi hài lòng."
  },
  {
    "id": 461,
    "page": 29,
    "word": "生徒",
    "reading": "せいと",
    "meaning": "học sinh",
    "han": "sanh đồ ｜ 生:セイ・ショウ 徒:ト",
    "example": "生徒が教室にいます。",
    "translation": "Học sinh đang ở lớp."
  },
  {
    "id": 462,
    "page": 29,
    "word": "練習",
    "reading": "れんしゅう",
    "meaning": "luyện tập",
    "han": "luyện tập ｜ 練:レン 習:シュウ・ジュ",
    "example": "毎日練習します。",
    "translation": "Luyện tập mỗi ngày."
  },
  {
    "id": 463,
    "page": 29,
    "word": "主張",
    "reading": "しゅちょう",
    "meaning": "chủ trương, khẳng định",
    "han": "chủ trương ｜ 主:シュ・ス 張:チョウ",
    "example": "意見を主張します。",
    "translation": "Tôi khẳng định ý kiến."
  },
  {
    "id": 464,
    "page": 29,
    "word": "会場",
    "reading": "かいじょう",
    "meaning": "địa điểm tổ chức",
    "han": "cối tràng ｜ 会:カイ・エ 場:ジョウ・チョウ",
    "example": "会場に着きました。",
    "translation": "Tôi đã đến địa điểm tổ chức."
  },
  {
    "id": 465,
    "page": 29,
    "word": "会話",
    "reading": "かいわ",
    "meaning": "hội thoại",
    "han": "cối thoại ｜ 会:カイ・エ 話:ワ",
    "example": "日本語で会話します。",
    "translation": "Tôi trò chuyện bằng tiếng Nhật."
  },
  {
    "id": 466,
    "page": 29,
    "word": "作戦",
    "reading": "さくせん",
    "meaning": "chiến thuật",
    "han": "tác khuyết ｜ 作:サク・サ 戦:セン",
    "example": "作戦を考えます。",
    "translation": "Tôi nghĩ chiến thuật."
  },
  {
    "id": 467,
    "page": 29,
    "word": "同様",
    "reading": "どうよう",
    "meaning": "tương tự",
    "han": "đồng dạng ｜ 同:ドウ 様:ヨウ・ショウ",
    "example": "同様の問題です。",
    "translation": "Là vấn đề tương tự."
  },
  {
    "id": 468,
    "page": 29,
    "word": "団体",
    "reading": "だんたい",
    "meaning": "đoàn thể",
    "han": "đoàn thể ｜ 団:ダン・トン 体:タイ・テイ",
    "example": "団体で行動します。",
    "translation": "Hành động theo đoàn."
  },
  {
    "id": 469,
    "page": 29,
    "word": "定期",
    "reading": "ていき",
    "meaning": "định kỳ",
    "han": "định kỳ ｜ 定:テイ・ジョウ 期:キ・ゴ",
    "example": "定期的に連絡します。",
    "translation": "Liên lạc định kỳ."
  },
  {
    "id": 470,
    "page": 29,
    "word": "導入",
    "reading": "どうにゅう",
    "meaning": "đưa vào, triển khai",
    "han": "đạo nhập ｜ 導:ドウ 入:ニュウ・ジュ",
    "example": "新しいシステムを導入します。",
    "translation": "Đưa vào hệ thống mới."
  },
  {
    "id": 471,
    "page": 29,
    "word": "市場",
    "reading": "いちば",
    "meaning": "thị trường",
    "han": "thị tràng ｜ 市:シ 場:ジョウ・チョウ",
    "example": "市場を調査します。",
    "translation": "Khảo sát thị trường."
  },
  {
    "id": 472,
    "page": 29,
    "word": "様々",
    "reading": "さまざま",
    "meaning": "đa dạng",
    "han": "dạng ? ｜ 様:ヨウ・ショウ 々:-",
    "example": "様々な意見があります。",
    "translation": "Có nhiều ý kiến khác nhau."
  },
  {
    "id": 473,
    "page": 30,
    "word": "物語",
    "reading": "ものがたり",
    "meaning": "câu chuyện",
    "han": "vật ngữ ｜ 物:ブツ・モツ 語:ゴ",
    "example": "物語を読みます。",
    "translation": "Tôi đọc câu chuyện."
  },
  {
    "id": 474,
    "page": 30,
    "word": "申し訳",
    "reading": "もうしわけ",
    "meaning": "lời xin lỗi",
    "han": "thân dịch ｜ 申:シン 訳:ヤク",
    "example": "申し訳ありません。",
    "translation": "Tôi xin lỗi."
  },
  {
    "id": 475,
    "page": 30,
    "word": "瞬間",
    "reading": "しゅんかん",
    "meaning": "khoảnh khắc",
    "han": "thuấn gian ｜ 瞬:シュン 間:カン・ケン",
    "example": "その瞬間を忘れません。",
    "translation": "Tôi không quên khoảnh khắc đó."
  },
  {
    "id": 476,
    "page": 30,
    "word": "電子",
    "reading": "でんし",
    "meaning": "điện tử",
    "han": "điện tử ｜ 電:デン 子:シ・ス",
    "example": "電子メールを送ります。",
    "translation": "Tôi gửi thư điện tử."
  },
  {
    "id": 477,
    "page": 30,
    "word": "電気",
    "reading": "でんき",
    "meaning": "điện",
    "han": "điện khí ｜ 電:デン 気:キ・ケ",
    "example": "電気をつけます。",
    "translation": "Tôi bật điện."
  },
  {
    "id": 478,
    "page": 30,
    "word": "公演",
    "reading": "こうえん",
    "meaning": "buổi biểu diễn",
    "han": "công diễn ｜ 公:コウ・ク 演:エン",
    "example": "公演が始まります。",
    "translation": "Buổi biểu diễn bắt đầu."
  },
  {
    "id": 479,
    "page": 30,
    "word": "地元",
    "reading": "じもと",
    "meaning": "địa phương mình",
    "han": "địa nguyên ｜ 地:チ・ジ 元:ゲン・ガン",
    "example": "地元の店に行きます。",
    "translation": "Tôi đến cửa hàng địa phương."
  },
  {
    "id": 480,
    "page": 30,
    "word": "報道",
    "reading": "ほうどう",
    "meaning": "đưa tin",
    "han": "báo đạo ｜ 報:ホウ 道:ドウ・トウ",
    "example": "ニュースの報道を見ます。",
    "translation": "Tôi xem tin tức."
  },
  {
    "id": 481,
    "page": 30,
    "word": "小さい",
    "reading": "ちいさい",
    "meaning": "nhỏ",
    "han": "tiểu ｜ 小:ショウ",
    "example": "小さい字です。",
    "translation": "Là chữ nhỏ."
  },
  {
    "id": 482,
    "page": 30,
    "word": "市民",
    "reading": "しみん",
    "meaning": "người dân thành phố",
    "han": "thị dân ｜ 市:シ 民:ミン",
    "example": "市民が集まりました。",
    "translation": "Người dân thành phố tập trung."
  },
  {
    "id": 483,
    "page": 30,
    "word": "感覚",
    "reading": "かんかく",
    "meaning": "cảm giác",
    "han": "cảm giác ｜ 感:カン 覚:カク",
    "example": "感覚をつかみます。",
    "translation": "Tôi nắm được cảm giác."
  },
  {
    "id": 484,
    "page": 30,
    "word": "指導",
    "reading": "しどう",
    "meaning": "chỉ đạo, hướng dẫn",
    "han": "chỉ đạo ｜ 指:シ 導:ドウ",
    "example": "新人を指導します。",
    "translation": "Hướng dẫn nhân viên mới."
  },
  {
    "id": 485,
    "page": 30,
    "word": "操作",
    "reading": "そうさ",
    "meaning": "thao tác",
    "han": "thao tác ｜ 操:ソウ・サン 作:サク・サ",
    "example": "機械を操作します。",
    "translation": "Tôi vận hành máy."
  },
  {
    "id": 486,
    "page": 30,
    "word": "普段",
    "reading": "ふだん",
    "meaning": "thường ngày",
    "han": "phổ đoạn ｜ 普:フ 段:ダン・タン",
    "example": "普段は家にいます。",
    "translation": "Thường ngày tôi ở nhà."
  },
  {
    "id": 487,
    "page": 30,
    "word": "現代",
    "reading": "げんだい",
    "meaning": "hiện đại",
    "han": "hiện đại ｜ 現:ゲン 代:ダイ・タイ",
    "example": "現代の社会です。",
    "translation": "Là xã hội hiện đại."
  },
  {
    "id": 488,
    "page": 30,
    "word": "禁止",
    "reading": "きんし",
    "meaning": "cấm",
    "han": "cấm chỉ ｜ 禁:キン 止:シ",
    "example": "撮影は禁止です。",
    "translation": "Cấm chụp ảnh."
  },
  {
    "id": 489,
    "page": 30,
    "word": "自体",
    "reading": "じたい",
    "meaning": "bản thân nó",
    "han": "tự thể ｜ 自:ジ・シ 体:タイ・テイ",
    "example": "それ自体は問題ありません。",
    "translation": "Bản thân điều đó không có vấn đề."
  },
  {
    "id": 490,
    "page": 30,
    "word": "体験",
    "reading": "たいけん",
    "meaning": "trải nghiệm",
    "han": "thể nghiệm ｜ 体:タイ・テイ 験:ケン・ゲン",
    "example": "体験してみます。",
    "translation": "Tôi thử trải nghiệm."
  },
  {
    "id": 491,
    "page": 31,
    "word": "安い",
    "reading": "やすい",
    "meaning": "rẻ",
    "han": "an ｜ 安:アン",
    "example": "この店は安いです。",
    "translation": "Cửa hàng này rẻ."
  },
  {
    "id": 492,
    "page": 31,
    "word": "平和",
    "reading": "へいわ",
    "meaning": "hòa bình",
    "han": "bình hòa ｜ 平:ヘイ・ビョウ 和:ワ・オ",
    "example": "平和を願います。",
    "translation": "Mong hòa bình."
  },
  {
    "id": 493,
    "page": 31,
    "word": "機械",
    "reading": "きかい",
    "meaning": "máy móc",
    "han": "ky giới ｜ 機:キ 械:カイ",
    "example": "機械が動きません。",
    "translation": "Máy không chạy."
  },
  {
    "id": 494,
    "page": 31,
    "word": "舞台",
    "reading": "ぶたい",
    "meaning": "sân khấu",
    "han": "vũ thai ｜ 舞:ブ 台:ダイ・タイ",
    "example": "舞台を見に行きます。",
    "translation": "Tôi đi xem sân khấu."
  },
  {
    "id": 495,
    "page": 31,
    "word": "設置",
    "reading": "せっち",
    "meaning": "lắp đặt",
    "han": "thiết trí ｜ 設:セツ 置:チ",
    "example": "機械を設置します。",
    "translation": "Lắp đặt máy."
  },
  {
    "id": 496,
    "page": 31,
    "word": "雰囲気",
    "reading": "ふんいき",
    "meaning": "bầu không khí",
    "han": "phân vi khí ｜ 雰:フン 囲:イ 気:キ・ケ",
    "example": "いい雰囲気の店です。",
    "translation": "Là quán có không khí tốt."
  },
  {
    "id": 497,
    "page": 31,
    "word": "信頼",
    "reading": "しんらい",
    "meaning": "tin cậy",
    "han": "tín lại ｜ 信:シン 頼:ライ",
    "example": "信頼できる人です。",
    "translation": "Là người đáng tin."
  },
  {
    "id": 498,
    "page": 31,
    "word": "切れ",
    "reading": "きれ",
    "meaning": "cắt, hết",
    "han": "thiết ｜ 切:セツ・サイ",
    "example": "電池が切れました。",
    "translation": "Hết pin rồi."
  },
  {
    "id": 499,
    "page": 31,
    "word": "募集",
    "reading": "ぼしゅう",
    "meaning": "tuyển, kêu gọi",
    "han": "mộ tập ｜ 募:ボ 集:シュウ",
    "example": "参加者を募集します。",
    "translation": "Tuyển người tham gia."
  },
  {
    "id": 500,
    "page": 31,
    "word": "半分",
    "reading": "はんぶん",
    "meaning": "một nửa",
    "han": "bán phân ｜ 半:ハン 分:ブン・フン",
    "example": "半分に分けます。",
    "translation": "Chia đôi."
  },
  {
    "id": 501,
    "page": 32,
    "word": "店舗",
    "reading": "てんぽ",
    "meaning": "cửa hàng",
    "han": "điếm phổ ｜ 店:テン 舗:ホ",
    "example": "店舗が増えました。",
    "translation": "Cửa hàng đã tăng."
  },
  {
    "id": 502,
    "page": 32,
    "word": "感情",
    "reading": "かんじょう",
    "meaning": "cảm xúc",
    "han": "cảm tình ｜ 感:カン 情:ジョウ・セイ",
    "example": "感情を表します。",
    "translation": "Thể hiện cảm xúc."
  },
  {
    "id": 503,
    "page": 32,
    "word": "批判",
    "reading": "ひはん",
    "meaning": "phê phán",
    "han": "phê phán ｜ 批:ヒ 判:ハン・バン",
    "example": "意見を批判します。",
    "translation": "Phê phán ý kiến."
  },
  {
    "id": 504,
    "page": 32,
    "word": "既に",
    "reading": "すでに",
    "meaning": "đã",
    "han": "kí ｜ 既:キ",
    "example": "既に終わりました。",
    "translation": "Đã xong rồi."
  },
  {
    "id": 505,
    "page": 32,
    "word": "業務",
    "reading": "ぎょうむ",
    "meaning": "nghiệp vụ, công việc",
    "han": "nghiệp vụ ｜ 業:ギョウ・ゴウ 務:ム",
    "example": "業務を行います。",
    "translation": "Tiến hành nghiệp vụ."
  },
  {
    "id": 506,
    "page": 32,
    "word": "業界",
    "reading": "ぎょうかい",
    "meaning": "ngành, giới",
    "han": "nghiệp giới ｜ 業:ギョウ・ゴウ 界:カイ",
    "example": "業界の動きを見ます。",
    "translation": "Xem động thái của ngành."
  },
  {
    "id": 507,
    "page": 32,
    "word": "発言",
    "reading": "はつげん",
    "meaning": "phát ngôn",
    "han": "bát ngôn ｜ 発:ハツ・ホツ 言:ゲン・ゴン",
    "example": "会議で発言します。",
    "translation": "Tôi phát biểu trong họp."
  },
  {
    "id": 508,
    "page": 32,
    "word": "相当",
    "reading": "そうとう",
    "meaning": "tương đương, khá",
    "han": "tương đang ｜ 相:ソウ・ショウ 当:トウ",
    "example": "相当時間がかかります。",
    "translation": "Mất khá nhiều thời gian."
  },
  {
    "id": 509,
    "page": 32,
    "word": "相談",
    "reading": "そうだん",
    "meaning": "bàn bạc",
    "han": "tương đàm ｜ 相:ソウ・ショウ 談:ダン",
    "example": "先輩に相談します。",
    "translation": "Tôi xin ý kiến đàn anh."
  },
  {
    "id": 510,
    "page": 32,
    "word": "維持",
    "reading": "いじ",
    "meaning": "duy trì",
    "han": "duy trì ｜ 維:イ 持:ジ",
    "example": "品質を維持します。",
    "translation": "Duy trì chất lượng."
  },
  {
    "id": 511,
    "page": 32,
    "word": "要素",
    "reading": "ようそ",
    "meaning": "yếu tố",
    "han": "yếu tố ｜ 要:ヨウ 素:ソ・ス",
    "example": "大切な要素です。",
    "translation": "Là yếu tố quan trọng."
  },
  {
    "id": 512,
    "page": 32,
    "word": "視聴",
    "reading": "しちょう",
    "meaning": "xem, nghe",
    "han": "thị thính ｜ 視:シ 聴:チョウ・テイ",
    "example": "番組を視聴します。",
    "translation": "Xem chương trình."
  },
  {
    "id": 513,
    "page": 32,
    "word": "解説",
    "reading": "かいせつ",
    "meaning": "giải thích",
    "han": "giải duyệt ｜ 解:カイ・ゲ 説:セツ・ゼイ",
    "example": "ニュースを解説します。",
    "translation": "Giải thích tin tức."
  },
  {
    "id": 514,
    "page": 32,
    "word": "設計",
    "reading": "せっけい",
    "meaning": "thiết kế",
    "han": "thiết kế ｜ 設:セツ 計:ケイ",
    "example": "建物を設計します。",
    "translation": "Thiết kế tòa nhà."
  },
  {
    "id": 515,
    "page": 32,
    "word": "試験",
    "reading": "しけん",
    "meaning": "kỳ thi, thử nghiệm",
    "han": "thí nghiệm ｜ 試:シ 験:ケン・ゲン",
    "example": "試験を受けます。",
    "translation": "Tôi thi."
  },
  {
    "id": 516,
    "page": 32,
    "word": "距離",
    "reading": "きょり",
    "meaning": "khoảng cách",
    "han": "cự ly ｜ 距:キョ 離:リ",
    "example": "距離が近いです。",
    "translation": "Khoảng cách gần."
  },
  {
    "id": 517,
    "page": 32,
    "word": "身体",
    "reading": "からだ",
    "meaning": "cơ thể",
    "han": "thân thể ｜ 身:シン 体:タイ・テイ",
    "example": "身体を動かします。",
    "translation": "Tôi vận động cơ thể."
  },
  {
    "id": 518,
    "page": 32,
    "word": "雑誌",
    "reading": "ざっし",
    "meaning": "tạp chí",
    "han": "tạp chí ｜ 雑:ザツ・ゾウ 誌:シ",
    "example": "雑誌を読みます。",
    "translation": "Tôi đọc tạp chí."
  },
  {
    "id": 519,
    "page": 33,
    "word": "仕様",
    "reading": "しよう",
    "meaning": "thông số kỹ thuật",
    "han": "sĩ dạng ｜ 仕:シ・ジ 様:ヨウ・ショウ",
    "example": "仕様を確認します。",
    "translation": "Tôi xác nhận thông số."
  },
  {
    "id": 520,
    "page": 33,
    "word": "公園",
    "reading": "こうえん",
    "meaning": "công viên",
    "han": "công viên ｜ 公:コウ・ク 園:エン",
    "example": "公園を歩きます。",
    "translation": "Tôi đi dạo công viên."
  },
  {
    "id": 521,
    "page": 33,
    "word": "努力",
    "reading": "どりょく",
    "meaning": "nỗ lực",
    "han": "nỗ lực ｜ 努:ド 力:リョク・リキ",
    "example": "努力を続けます。",
    "translation": "Tôi tiếp tục nỗ lực."
  },
  {
    "id": 522,
    "page": 33,
    "word": "同時に",
    "reading": "どうじに",
    "meaning": "đồng thời",
    "han": "đồng thì ｜ 同:ドウ 時:ジ",
    "example": "同時に行います。",
    "translation": "Làm đồng thời."
  },
  {
    "id": 523,
    "page": 33,
    "word": "唯一",
    "reading": "ゆいいつ",
    "meaning": "duy nhất",
    "han": "duy nhất ｜ 唯:ユイ・イ 一:イチ・イツ",
    "example": "唯一の方法です。",
    "translation": "Là cách duy nhất."
  },
  {
    "id": 524,
    "page": 33,
    "word": "基準",
    "reading": "きじゅん",
    "meaning": "tiêu chuẩn",
    "han": "cơ chuẩn ｜ 基:キ 準:ジュン",
    "example": "基準を決めます。",
    "translation": "Đặt tiêu chuẩn."
  },
  {
    "id": 525,
    "page": 33,
    "word": "得る",
    "reading": "うる",
    "meaning": "đạt được",
    "han": "đắc ｜ 得:トク",
    "example": "経験を得ます。",
    "translation": "Có được kinh nghiệm."
  },
  {
    "id": 526,
    "page": 33,
    "word": "復活",
    "reading": "ふっかつ",
    "meaning": "hồi sinh",
    "han": "phục hoạt ｜ 復:フク 活:カツ",
    "example": "人気が復活しました。",
    "translation": "Sự nổi tiếng đã hồi sinh."
  },
  {
    "id": 527,
    "page": 33,
    "word": "性格",
    "reading": "せいかく",
    "meaning": "tính cách",
    "han": "tính cách ｜ 性:セイ・ショウ 格:カク・コウ",
    "example": "明るい性格です。",
    "translation": "Tính cách vui vẻ."
  },
  {
    "id": 528,
    "page": 33,
    "word": "提案",
    "reading": "ていあん",
    "meaning": "đề xuất",
    "han": "đề án ｜ 提:テイ・チョウ 案:アン",
    "example": "新しい案を提案します。",
    "translation": "Tôi đề xuất phương án mới."
  },
  {
    "id": 529,
    "page": 33,
    "word": "最新",
    "reading": "さいしん",
    "meaning": "mới nhất",
    "han": "tối tân ｜ 最:サイ・シュ 新:シン",
    "example": "最新の情報です。",
    "translation": "Là thông tin mới nhất."
  },
  {
    "id": 530,
    "page": 33,
    "word": "検査",
    "reading": "けんさ",
    "meaning": "kiểm tra",
    "han": "kiểm tra ｜ 検:ケン 査:サ",
    "example": "品質を検査します。",
    "translation": "Kiểm tra chất lượng."
  },
  {
    "id": 531,
    "page": 33,
    "word": "比べ",
    "reading": "くらべ",
    "meaning": "so sánh",
    "han": "bỉ ｜ 比:ヒ",
    "example": "去年と比べます。",
    "translation": "So với năm ngoái."
  },
  {
    "id": 532,
    "page": 33,
    "word": "沢山",
    "reading": "たくさん",
    "meaning": "nhiều",
    "han": "trạch san ｜ 沢:タク 山:サン・セン",
    "example": "沢山食べます。",
    "translation": "Tôi ăn nhiều."
  },
  {
    "id": 533,
    "page": 33,
    "word": "確実",
    "reading": "かくじつ",
    "meaning": "chắc chắn",
    "han": "xác thực ｜ 確:カク・コウ 実:ジツ・シツ",
    "example": "確実に届きます。",
    "translation": "Chắc chắn sẽ đến."
  },
  {
    "id": 534,
    "page": 33,
    "word": "自ら",
    "reading": "みずから",
    "meaning": "tự mình",
    "han": "tự ｜ 自:ジ・シ",
    "example": "自ら行動します。",
    "translation": "Tự mình hành động."
  },
  {
    "id": 535,
    "page": 33,
    "word": "製品",
    "reading": "せいひん",
    "meaning": "sản phẩm",
    "han": "chế phẩm ｜ 製:セイ 品:ヒン・ホン",
    "example": "製品を紹介します。",
    "translation": "Giới thiệu sản phẩm."
  },
  {
    "id": 536,
    "page": 33,
    "word": "連れ",
    "reading": "つれ",
    "meaning": "đi cùng, người đi cùng",
    "han": "liên ｜ 連:レン",
    "example": "友達を連れて行きます。",
    "translation": "Tôi dẫn bạn đi."
  },
  {
    "id": 537,
    "page": 34,
    "word": "世代",
    "reading": "せだい",
    "meaning": "thế hệ",
    "han": "thế đại ｜ 世:セイ・セ 代:ダイ・タイ",
    "example": "若い世代です。",
    "translation": "Là thế hệ trẻ."
  },
  {
    "id": 538,
    "page": 34,
    "word": "以来",
    "reading": "いらい",
    "meaning": "kể từ",
    "han": "dĩ lai ｜ 以:イ 来:ライ・タイ",
    "example": "入社以来働いています。",
    "translation": "Từ khi vào công ty tôi vẫn làm việc."
  },
  {
    "id": 539,
    "page": 34,
    "word": "余裕",
    "reading": "よゆう",
    "meaning": "dư dả, thong thả",
    "han": "dư dụ ｜ 余:ヨ 裕:ユウ",
    "example": "時間に余裕があります。",
    "translation": "Thời gian còn dư dả."
  },
  {
    "id": 540,
    "page": 34,
    "word": "停止",
    "reading": "ていし",
    "meaning": "dừng",
    "han": "đình chỉ ｜ 停:テイ 止:シ",
    "example": "機械が停止しました。",
    "translation": "Máy đã dừng."
  },
  {
    "id": 541,
    "page": 34,
    "word": "古い",
    "reading": "ふるい",
    "meaning": "cũ",
    "han": "cổ ｜ 古:コ",
    "example": "古い建物です。",
    "translation": "Là tòa nhà cũ."
  },
  {
    "id": 542,
    "page": 34,
    "word": "同士",
    "reading": "どうし",
    "meaning": "cùng nhau (hậu tố)",
    "han": "đồng sĩ ｜ 同:ドウ 士:シ",
    "example": "仲間同士で話します。",
    "translation": "Nói chuyện giữa bạn bè với nhau."
  },
  {
    "id": 543,
    "page": 34,
    "word": "家庭",
    "reading": "かてい",
    "meaning": "gia đình",
    "han": "gia đình ｜ 家:カ・ケ 庭:テイ",
    "example": "家庭を大切にします。",
    "translation": "Coi trọng gia đình."
  },
  {
    "id": 544,
    "page": 34,
    "word": "平均",
    "reading": "へいきん",
    "meaning": "trung bình",
    "han": "bình quân ｜ 平:ヘイ・ビョウ 均:キン",
    "example": "平均を計算します。",
    "translation": "Tính trung bình."
  },
  {
    "id": 545,
    "page": 34,
    "word": "年代",
    "reading": "ねんだい",
    "meaning": "thời kỳ, thập niên",
    "han": "niên đại ｜ 年:ネン 代:ダイ・タイ",
    "example": "年代別に分けます。",
    "translation": "Chia theo độ tuổi."
  },
  {
    "id": 546,
    "page": 34,
    "word": "後ろ",
    "reading": "うしろ",
    "meaning": "phía sau",
    "han": "hậu ｜ 後:ゴ・コウ",
    "example": "後ろを見てください。",
    "translation": "Hãy nhìn phía sau."
  },
  {
    "id": 547,
    "page": 34,
    "word": "挑戦",
    "reading": "ちょうせん",
    "meaning": "thử thách",
    "han": "thiêu khuyết ｜ 挑:チョウ 戦:セン",
    "example": "新しいことに挑戦します。",
    "translation": "Tôi thử thách việc mới."
  },
  {
    "id": 548,
    "page": 34,
    "word": "構造",
    "reading": "こうぞう",
    "meaning": "cấu trúc",
    "han": "cấu tạo ｜ 構:コウ 造:ゾウ",
    "example": "構造を説明します。",
    "translation": "Giải thích cấu trúc."
  },
  {
    "id": 549,
    "page": 34,
    "word": "権利",
    "reading": "けんり",
    "meaning": "quyền lợi",
    "han": "quyền lợi ｜ 権:ケン・ゴン 利:リ",
    "example": "権利を守ります。",
    "translation": "Bảo vệ quyền lợi."
  },
  {
    "id": 550,
    "page": 34,
    "word": "目標",
    "reading": "もくひょう",
    "meaning": "mục tiêu",
    "han": "mục tiêu ｜ 目:モク・ボク 標:ヒョウ",
    "example": "目標を決めます。",
    "translation": "Đặt mục tiêu."
  },
  {
    "id": 551,
    "page": 34,
    "word": "知識",
    "reading": "ちしき",
    "meaning": "kiến thức",
    "han": "tri thức ｜ 知:チ 識:シキ",
    "example": "知識を増やします。",
    "translation": "Tăng kiến thức."
  },
  {
    "id": 552,
    "page": 34,
    "word": "逃げ",
    "reading": "にげ",
    "meaning": "chạy trốn",
    "han": "đào ｜ 逃:トウ",
    "example": "逃げ道を確認します。",
    "translation": "Tôi xác nhận lối thoát."
  },
  {
    "id": 553,
    "page": 34,
    "word": "不思議",
    "reading": "ふしぎ",
    "meaning": "kỳ lạ",
    "han": "bất tư nghị ｜ 不:フ・ブ 思:シ 議:ギ",
    "example": "不思議な話です。",
    "translation": "Là chuyện kỳ lạ."
  },
  {
    "id": 554,
    "page": 34,
    "word": "中央",
    "reading": "ちゅうおう",
    "meaning": "trung tâm",
    "han": "trung ương ｜ 中:チュウ 央:オウ",
    "example": "町の中央です。",
    "translation": "Là trung tâm thị trấn."
  },
  {
    "id": 555,
    "page": 35,
    "word": "主人公",
    "reading": "しゅじんこう",
    "meaning": "nhân vật chính",
    "han": "chủ nhân công ｜ 主:シュ・ス 人:ジン・ニン 公:コウ・ク",
    "example": "主人公は少年です。",
    "translation": "Nhân vật chính là một cậu bé."
  },
  {
    "id": 556,
    "page": 35,
    "word": "保存",
    "reading": "ほぞん",
    "meaning": "lưu trữ, bảo quản",
    "han": "bảo tồn ｜ 保:ホ・ホウ 存:ソン・ゾン",
    "example": "ファイルを保存します。",
    "translation": "Tôi lưu file."
  },
  {
    "id": 557,
    "page": 35,
    "word": "保険",
    "reading": "ほけん",
    "meaning": "bảo hiểm",
    "han": "bảo hiểm ｜ 保:ホ・ホウ 険:ケン",
    "example": "保険に入ります。",
    "translation": "Tôi mua bảo hiểm."
  },
  {
    "id": 558,
    "page": 35,
    "word": "優勝",
    "reading": "ゆうしょう",
    "meaning": "vô địch",
    "han": "ưu thắng ｜ 優:ユウ・ウ 勝:ショウ",
    "example": "チームが優勝しました。",
    "translation": "Đội đã vô địch."
  },
  {
    "id": 559,
    "page": 35,
    "word": "助け",
    "reading": "たすけ",
    "meaning": "giúp đỡ",
    "han": "trợ ｜ 助:ジョ",
    "example": "助けてください。",
    "translation": "Xin hãy giúp."
  },
  {
    "id": 560,
    "page": 35,
    "word": "周辺",
    "reading": "しゅうへん",
    "meaning": "xung quanh",
    "han": "chu biên ｜ 周:シュウ 辺:ヘン",
    "example": "駅の周辺です。",
    "translation": "Là quanh khu ga."
  },
  {
    "id": 561,
    "page": 35,
    "word": "土地",
    "reading": "とち",
    "meaning": "đất đai",
    "han": "thổ địa ｜ 土:ド・ト 地:チ・ジ",
    "example": "土地を買います。",
    "translation": "Tôi mua đất."
  },
  {
    "id": 562,
    "page": 35,
    "word": "実験",
    "reading": "じっけん",
    "meaning": "thí nghiệm",
    "han": "thực nghiệm ｜ 実:ジツ・シツ 験:ケン・ゲン",
    "example": "実験を行います。",
    "translation": "Tiến hành thí nghiệm."
  },
  {
    "id": 563,
    "page": 35,
    "word": "建物",
    "reading": "たてもの",
    "meaning": "tòa nhà",
    "han": "kiến vật ｜ 建:ケン・コン 物:ブツ・モツ",
    "example": "高い建物です。",
    "translation": "Là tòa nhà cao."
  },
  {
    "id": 564,
    "page": 35,
    "word": "患者",
    "reading": "かんじゃ",
    "meaning": "bệnh nhân",
    "han": "hoạn giả ｜ 患:カン 者:シャ",
    "example": "患者を診ます。",
    "translation": "Khám bệnh nhân."
  },
  {
    "id": 565,
    "page": 35,
    "word": "支配",
    "reading": "しはい",
    "meaning": "chi phối",
    "han": "chi phối ｜ 支:シ 配:ハイ",
    "example": "会社を支配しています。",
    "translation": "Đang chi phối công ty."
  },
  {
    "id": 566,
    "page": 35,
    "word": "規模",
    "reading": "きぼ",
    "meaning": "quy mô",
    "han": "quy mô ｜ 規:キ 模:モ・ボ",
    "example": "規模が大きいです。",
    "translation": "Quy mô lớn."
  },
  {
    "id": 567,
    "page": 35,
    "word": "交通",
    "reading": "こうつう",
    "meaning": "giao thông",
    "han": "giao thông ｜ 交:コウ 通:ツウ・ツ",
    "example": "交通が便利です。",
    "translation": "Giao thông thuận tiện."
  },
  {
    "id": 568,
    "page": 35,
    "word": "他人",
    "reading": "たにん",
    "meaning": "người khác",
    "han": "tha nhân ｜ 他:タ 人:ジン・ニン",
    "example": "他人に迷惑をかけません。",
    "translation": "Không làm phiền người khác."
  },
  {
    "id": 569,
    "page": 35,
    "word": "低い",
    "reading": "ひくい",
    "meaning": "thấp",
    "han": "đê ｜ 低:テイ",
    "example": "価格が低いです。",
    "translation": "Giá thấp."
  },
  {
    "id": 570,
    "page": 35,
    "word": "再生",
    "reading": "さいせい",
    "meaning": "tái sinh, phát lại",
    "han": "tái sanh ｜ 再:サイ・サ 生:セイ・ショウ",
    "example": "動画を再生します。",
    "translation": "Phát video."
  },
  {
    "id": 571,
    "page": 35,
    "word": "博士",
    "reading": "はかせ",
    "meaning": "tiến sĩ",
    "han": "bác sĩ ｜ 博:ハク・バク 士:シ",
    "example": "博士号を取りました。",
    "translation": "Tôi đã lấy bằng tiến sĩ."
  },
  {
    "id": 572,
    "page": 35,
    "word": "取得",
    "reading": "しゅとく",
    "meaning": "lấy được, đạt",
    "han": "thủ đắc ｜ 取:シュ 得:トク",
    "example": "資格を取得します。",
    "translation": "Lấy chứng chỉ."
  },
  {
    "id": 573,
    "page": 36,
    "word": "回復",
    "reading": "かいふく",
    "meaning": "hồi phục",
    "han": "hồi phục ｜ 回:カイ・エ 復:フク",
    "example": "体調が回復しました。",
    "translation": "Sức khỏe đã hồi phục."
  },
  {
    "id": 574,
    "page": 36,
    "word": "子ども",
    "reading": "こども",
    "meaning": "trẻ em",
    "han": "tử ｜ 子:シ・ス",
    "example": "子どもが遊んでいます。",
    "translation": "Trẻ em đang chơi."
  },
  {
    "id": 575,
    "page": 36,
    "word": "実行",
    "reading": "じっこう",
    "meaning": "thực hiện",
    "han": "thực hành ｜ 実:ジツ・シツ 行:コウ・ギョウ",
    "example": "計画を実行します。",
    "translation": "Thực hiện kế hoạch."
  },
  {
    "id": 576,
    "page": 36,
    "word": "恋愛",
    "reading": "れんあい",
    "meaning": "tình yêu",
    "han": "luyến ái ｜ 恋:レン 愛:アイ",
    "example": "恋愛小説を読みます。",
    "translation": "Tôi đọc tiểu thuyết tình yêu."
  },
  {
    "id": 577,
    "page": 36,
    "word": "戦闘",
    "reading": "せんとう",
    "meaning": "chiến đấu",
    "han": "khuyết đấu ｜ 戦:セン 闘:トウ",
    "example": "戦闘の場面です。",
    "translation": "Là cảnh chiến đấu."
  },
  {
    "id": 578,
    "page": 36,
    "word": "政策",
    "reading": "せいさく",
    "meaning": "chính sách",
    "han": "chánh sách ｜ 政:セイ・ショウ 策:サク",
    "example": "新しい政策です。",
    "translation": "Là chính sách mới."
  },
  {
    "id": 579,
    "page": 36,
    "word": "様子",
    "reading": "ようす",
    "meaning": "tình hình, dáng vẻ",
    "han": "dạng tử ｜ 様:ヨウ・ショウ 子:シ・ス",
    "example": "様子を見ます。",
    "translation": "Tôi xem tình hình."
  },
  {
    "id": 580,
    "page": 36,
    "word": "次第",
    "reading": "しだい",
    "meaning": "tùy theo; ngay khi",
    "han": "thứ đệ ｜ 次:ジ・シ 第:ダイ・テイ",
    "example": "状況次第です。",
    "translation": "Tùy tình hình."
  },
  {
    "id": 581,
    "page": 36,
    "word": "殺人",
    "reading": "さつじん",
    "meaning": "giết người",
    "han": "sát nhân ｜ 殺:サツ・サイ 人:ジン・ニン",
    "example": "ニュースで殺人事件を知りました。",
    "translation": "Tôi biết vụ án mạng qua thời sự."
  },
  {
    "id": 582,
    "page": 36,
    "word": "爆発",
    "reading": "ばくはつ",
    "meaning": "nổ",
    "han": "bạo bát ｜ 爆:バク 発:ハツ・ホツ",
    "example": "爆発の音が聞こえました。",
    "translation": "Nghe thấy tiếng nổ."
  },
  {
    "id": 583,
    "page": 36,
    "word": "病気",
    "reading": "びょうき",
    "meaning": "bệnh",
    "han": "bệnh khí ｜ 病:ビョウ・ヘイ 気:キ・ケ",
    "example": "病気が治りました。",
    "translation": "Bệnh đã khỏi."
  },
  {
    "id": 584,
    "page": 36,
    "word": "痛い",
    "reading": "いたい",
    "meaning": "đau",
    "han": "thống ｜ 痛:ツウ",
    "example": "頭が痛いです。",
    "translation": "Tôi đau đầu."
  },
  {
    "id": 585,
    "page": 36,
    "word": "総合",
    "reading": "そうごう",
    "meaning": "tổng hợp",
    "han": "tổng hợp ｜ 総:ソウ 合:ゴウ・ガッ",
    "example": "総合的に判断します。",
    "translation": "Phán đoán tổng hợp."
  },
  {
    "id": 586,
    "page": 36,
    "word": "面倒",
    "reading": "めんどう",
    "meaning": "phiền phức",
    "han": "diện đảo ｜ 面:メン・ベン 倒:トウ",
    "example": "面倒な作業です。",
    "translation": "Là công việc phiền phức."
  },
  {
    "id": 587,
    "page": 36,
    "word": "値段",
    "reading": "ねだん",
    "meaning": "giá",
    "han": "trị đoạn ｜ 値:チ 段:ダン・タン",
    "example": "値段を聞きます。",
    "translation": "Hỏi giá."
  },
  {
    "id": 588,
    "page": 36,
    "word": "別に",
    "reading": "べつに",
    "meaning": "không đặc biệt",
    "han": "biệt ｜ 別:ベツ",
    "example": "別に問題ありません。",
    "translation": "Không có vấn đề gì đặc biệt."
  },
  {
    "id": 589,
    "page": 36,
    "word": "工事",
    "reading": "こうじ",
    "meaning": "công trình",
    "han": "công sự ｜ 工:コウ・ク 事:ジ・ズ",
    "example": "道路の工事です。",
    "translation": "Là thi công đường."
  },
  {
    "id": 590,
    "page": 36,
    "word": "工場",
    "reading": "こうじょう",
    "meaning": "nhà máy",
    "han": "công tràng ｜ 工:コウ・ク 場:ジョウ・チョウ",
    "example": "工場で働いています。",
    "translation": "Tôi làm ở nhà máy."
  },
  {
    "id": 591,
    "page": 37,
    "word": "我慢",
    "reading": "がまん",
    "meaning": "chịu đựng",
    "han": "ngã mạn ｜ 我:ガ 慢:マン",
    "example": "我慢してください。",
    "translation": "Xin hãy chịu đựng."
  },
  {
    "id": 592,
    "page": 37,
    "word": "段階",
    "reading": "だんかい",
    "meaning": "giai đoạn",
    "han": "đoạn giai ｜ 段:ダン・タン 階:カイ",
    "example": "次の段階に進みます。",
    "translation": "Chuyển sang giai đoạn tiếp theo."
  },
  {
    "id": 593,
    "page": 37,
    "word": "突然",
    "reading": "とつぜん",
    "meaning": "đột nhiên",
    "han": "đột nhiên ｜ 突:トツ・カ 然:ゼン・ネン",
    "example": "突然雨が降りました。",
    "translation": "Đột nhiên trời mưa."
  },
  {
    "id": 594,
    "page": 37,
    "word": "美味しい",
    "reading": "おいしい",
    "meaning": "ngon",
    "han": "mỹ vị ｜ 美:ビ・ミ 味:ミ",
    "example": "この料理は美味しいです。",
    "translation": "Món này ngon."
  },
  {
    "id": 595,
    "page": 37,
    "word": "お話",
    "reading": "おはなし",
    "meaning": "câu chuyện (kính)",
    "han": "thoại ｜ 話:ワ",
    "example": "お話を伺います。",
    "translation": "Tôi xin nghe chuyện."
  },
  {
    "id": 596,
    "page": 37,
    "word": "一体",
    "reading": "いったい",
    "meaning": "rốt cuộc",
    "han": "nhất thể ｜ 一:イチ・イツ 体:タイ・テイ",
    "example": "一体何ですか。",
    "translation": "Rốt cuộc là gì vậy?"
  },
  {
    "id": 597,
    "page": 37,
    "word": "午後",
    "reading": "ごご",
    "meaning": "buổi chiều",
    "han": "ngọ hậu ｜ 午:ゴ 後:ゴ・コウ",
    "example": "午後に会議があります。",
    "translation": "Buổi chiều có họp."
  },
  {
    "id": 598,
    "page": 37,
    "word": "基地",
    "reading": "きち",
    "meaning": "căn cứ",
    "han": "cơ địa ｜ 基:キ 地:チ・ジ",
    "example": "基地を建設します。",
    "translation": "Xây dựng căn cứ."
  },
  {
    "id": 599,
    "page": 37,
    "word": "声優",
    "reading": "せいゆう",
    "meaning": "diễn viên lồng tiếng",
    "han": "thanh ưu ｜ 声:セイ・ショウ 優:ユウ・ウ",
    "example": "声優の仕事です。",
    "translation": "Là công việc lồng tiếng."
  },
  {
    "id": 600,
    "page": 37,
    "word": "女優",
    "reading": "じょゆう",
    "meaning": "nữ diễn viên",
    "han": "nữ ưu ｜ 女:ジョ・ニョ 優:ユウ・ウ",
    "example": "有名な女優です。",
    "translation": "Là nữ diễn viên nổi tiếng."
  },
  {
    "id": 601,
    "page": 38,
    "word": "支持",
    "reading": "しじ",
    "meaning": "ủng hộ",
    "han": "chi trì ｜ 支:シ 持:ジ",
    "example": "多くの支持を得ました。",
    "translation": "Đã nhận nhiều sự ủng hộ."
  },
  {
    "id": 602,
    "page": 38,
    "word": "教授",
    "reading": "きょうじゅ",
    "meaning": "giáo sư",
    "han": "giáo thụ ｜ 教:キョウ 授:ジュ",
    "example": "教授に会います。",
    "translation": "Tôi gặp giáo sư."
  },
  {
    "id": 603,
    "page": 38,
    "word": "本来",
    "reading": "ほんらい",
    "meaning": "vốn dĩ",
    "han": "bổn lai ｜ 本:ホン 来:ライ・タイ",
    "example": "本来の目的です。",
    "translation": "Là mục đích vốn có."
  },
  {
    "id": 604,
    "page": 38,
    "word": "注目",
    "reading": "ちゅうもく",
    "meaning": "chú ý",
    "han": "chú mục ｜ 注:チュウ 目:モク・ボク",
    "example": "注目されています。",
    "translation": "Đang được chú ý."
  },
  {
    "id": 605,
    "page": 38,
    "word": "無事",
    "reading": "ぶじ",
    "meaning": "bình an",
    "han": "vô sự ｜ 無:ム・ブ 事:ジ・ズ",
    "example": "無事に着きました。",
    "translation": "Đã đến nơi bình an."
  },
  {
    "id": 606,
    "page": 38,
    "word": "異常",
    "reading": "いじょう",
    "meaning": "bất thường",
    "han": "dị thường ｜ 異:イ 常:ジョウ",
    "example": "異常はありません。",
    "translation": "Không có bất thường."
  },
  {
    "id": 607,
    "page": 38,
    "word": "要求",
    "reading": "ようきゅう",
    "meaning": "yêu cầu",
    "han": "yếu cầu ｜ 要:ヨウ 求:キュウ・グ",
    "example": "要求を伝えます。",
    "translation": "Truyền đạt yêu cầu."
  },
  {
    "id": 608,
    "page": 38,
    "word": "証明",
    "reading": "しょうめい",
    "meaning": "chứng minh",
    "han": "chứng minh ｜ 証:ショウ 明:メイ・ミョウ",
    "example": "証明書が必要です。",
    "translation": "Cần giấy chứng nhận."
  },
  {
    "id": 609,
    "page": 38,
    "word": "認識",
    "reading": "にんしき",
    "meaning": "nhận thức",
    "han": "nhận thức ｜ 認:ニン 識:シキ",
    "example": "認識が違います。",
    "translation": "Nhận thức khác nhau."
  },
  {
    "id": 610,
    "page": 38,
    "word": "集中",
    "reading": "しゅうちゅう",
    "meaning": "tập trung",
    "han": "tập trung ｜ 集:シュウ 中:チュウ",
    "example": "集中して仕事をします。",
    "translation": "Tập trung làm việc."
  },
  {
    "id": 611,
    "page": 38,
    "word": "魅力",
    "reading": "みりょく",
    "meaning": "sức hấp dẫn",
    "han": "mị lực ｜ 魅:ミ 力:リョク・リキ",
    "example": "魅力的な人です。",
    "translation": "Là người hấp dẫn."
  },
  {
    "id": 612,
    "page": 38,
    "word": "人達",
    "reading": "ひとたち",
    "meaning": "mọi người",
    "han": "nhân đạt ｜ 人:ジン・ニン 達:タツ・ダ",
    "example": "友人達と会います。",
    "translation": "Tôi gặp những người bạn."
  },
  {
    "id": 613,
    "page": 38,
    "word": "依頼",
    "reading": "いらい",
    "meaning": "nhờ vả",
    "han": "y lại ｜ 依:イ・エ 頼:ライ",
    "example": "仕事を依頼します。",
    "translation": "Tôi nhờ công việc."
  },
  {
    "id": 614,
    "page": 38,
    "word": "兄弟",
    "reading": "きょうだい",
    "meaning": "anh em",
    "han": "huynh đệ ｜ 兄:ケイ・キョウ 弟:テイ・ダイ",
    "example": "兄弟が二人います。",
    "translation": "Tôi có hai anh em."
  },
  {
    "id": 615,
    "page": 38,
    "word": "刑事",
    "reading": "けいじ",
    "meaning": "hình sự, thám tử",
    "han": "hình sự ｜ 刑:ケイ 事:ジ・ズ",
    "example": "刑事ドラマを見ます。",
    "translation": "Tôi xem phim hình sự."
  },
  {
    "id": 616,
    "page": 38,
    "word": "完了",
    "reading": "かんりょう",
    "meaning": "hoàn tất",
    "han": "hoàn liễu ｜ 完:カン 了:リョウ",
    "example": "作業が完了しました。",
    "translation": "Công việc đã hoàn tất."
  },
  {
    "id": 617,
    "page": 38,
    "word": "実現",
    "reading": "じつげん",
    "meaning": "thực hiện được",
    "han": "thực hiện ｜ 実:ジツ・シツ 現:ゲン",
    "example": "夢を実現します。",
    "translation": "Thực hiện ước mơ."
  },
  {
    "id": 618,
    "page": 38,
    "word": "政権",
    "reading": "せいけん",
    "meaning": "chính quyền",
    "han": "chánh quyền ｜ 政:セイ・ショウ 権:ケン・ゴン",
    "example": "政権が変わりました。",
    "translation": "Chính quyền đã thay đổi."
  },
  {
    "id": 619,
    "page": 39,
    "word": "是非",
    "reading": "ぜひ",
    "meaning": "nhất định",
    "han": "thị phi ｜ 是:ゼ・シ 非:ヒ",
    "example": "是非来てください。",
    "translation": "Nhất định hãy đến."
  },
  {
    "id": 620,
    "page": 39,
    "word": "更に",
    "reading": "さらに",
    "meaning": "hơn nữa",
    "han": "canh ｜ 更:コウ",
    "example": "更に頑張ります。",
    "translation": "Tôi sẽ cố gắng hơn nữa."
  },
  {
    "id": 621,
    "page": 39,
    "word": "本物",
    "reading": "ほんもの",
    "meaning": "hàng thật",
    "han": "bổn vật ｜ 本:ホン 物:ブツ・モツ",
    "example": "本物のダイヤです。",
    "translation": "Là kim cương thật."
  },
  {
    "id": 622,
    "page": 39,
    "word": "案内",
    "reading": "あんない",
    "meaning": "hướng dẫn",
    "han": "án nạp ｜ 案:アン 内:ナイ・ダイ",
    "example": "会場を案内します。",
    "translation": "Tôi dẫn đường đến địa điểm."
  },
  {
    "id": 623,
    "page": 39,
    "word": "検討",
    "reading": "けんとう",
    "meaning": "xem xét",
    "han": "kiểm thảo ｜ 検:ケン 討:トウ",
    "example": "前向きに検討します。",
    "translation": "Tôi sẽ xem xét tích cực."
  },
  {
    "id": 624,
    "page": 39,
    "word": "構成",
    "reading": "こうせい",
    "meaning": "cấu thành",
    "han": "cấu thành ｜ 構:コウ 成:セイ・ジョウ",
    "example": "チームの構成です。",
    "translation": "Là cơ cấu của đội."
  },
  {
    "id": 625,
    "page": 39,
    "word": "死亡",
    "reading": "しぼう",
    "meaning": "tử vong",
    "han": "tử vong ｜ 死:シ 亡:ボウ・モウ",
    "example": "死亡事故が減りました。",
    "translation": "Tai nạn tử vong đã giảm."
  },
  {
    "id": 626,
    "page": 39,
    "word": "母親",
    "reading": "ははおや",
    "meaning": "người mẹ",
    "han": "mẫu thân ｜ 母:ボ 親:シン",
    "example": "母親に電話します。",
    "translation": "Tôi gọi điện cho mẹ."
  },
  {
    "id": 627,
    "page": 39,
    "word": "空気",
    "reading": "くうき",
    "meaning": "không khí",
    "han": "không khí ｜ 空:クウ 気:キ・ケ",
    "example": "空気がきれいです。",
    "translation": "Không khí trong lành."
  },
  {
    "id": 628,
    "page": 39,
    "word": "立場",
    "reading": "たちば",
    "meaning": "lập trường, vị thế",
    "han": "lập tràng ｜ 立:リツ・リュウ 場:ジョウ・チョウ",
    "example": "立場を理解します。",
    "translation": "Tôi hiểu vị thế."
  },
  {
    "id": 629,
    "page": 39,
    "word": "納得",
    "reading": "なっとく",
    "meaning": "đồng ý, thuyết phục",
    "han": "nạp đắc ｜ 納:ノウ・ナッ 得:トク",
    "example": "納得しました。",
    "translation": "Tôi đã đồng ý."
  },
  {
    "id": 630,
    "page": 39,
    "word": "製造",
    "reading": "せいぞう",
    "meaning": "sản xuất",
    "han": "chế tạo ｜ 製:セイ 造:ゾウ",
    "example": "部品を製造します。",
    "translation": "Sản xuất linh kiện."
  },
  {
    "id": 631,
    "page": 39,
    "word": "詐欺",
    "reading": "さぎ",
    "meaning": "lừa đảo",
    "han": "trá khi ｜ 詐:サ 欺:ギ",
    "example": "詐欺に注意してください。",
    "translation": "Hãy cẩn thận lừa đảo."
  },
  {
    "id": 632,
    "page": 39,
    "word": "人類",
    "reading": "じんるい",
    "meaning": "nhân loại",
    "han": "nhân loại ｜ 人:ジン・ニン 類:ルイ",
    "example": "人類の歴史です。",
    "translation": "Là lịch sử nhân loại."
  },
  {
    "id": 633,
    "page": 39,
    "word": "作成",
    "reading": "さくせい",
    "meaning": "soạn, tạo",
    "han": "tác thành ｜ 作:サク・サ 成:セイ・ジョウ",
    "example": "資料を作成します。",
    "translation": "Tôi soạn tài liệu."
  },
  {
    "id": 634,
    "page": 39,
    "word": "内部",
    "reading": "ないぶ",
    "meaning": "bên trong",
    "han": "nạp bộ ｜ 内:ナイ・ダイ 部:ブ",
    "example": "内部を確認します。",
    "translation": "Tôi kiểm tra bên trong."
  },
  {
    "id": 635,
    "page": 39,
    "word": "到着",
    "reading": "とうちゃく",
    "meaning": "đến nơi",
    "han": "đáo khán ｜ 到:トウ 着:チャク・ジャク",
    "example": "駅に到着しました。",
    "translation": "Đã đến ga."
  },
  {
    "id": 636,
    "page": 39,
    "word": "収録",
    "reading": "しゅうろく",
    "meaning": "thu âm, ghi hình",
    "han": "thâu lục ｜ 収:シュウ 録:ロク",
    "example": "番組を収録します。",
    "translation": "Ghi hình chương trình."
  },
  {
    "id": 637,
    "page": 40,
    "word": "固定",
    "reading": "こてい",
    "meaning": "cố định",
    "han": "cố định ｜ 固:コ 定:テイ・ジョウ",
    "example": "位置を固定します。",
    "translation": "Cố định vị trí."
  },
  {
    "id": 638,
    "page": 40,
    "word": "学園",
    "reading": "がくえん",
    "meaning": "học viện",
    "han": "học viên ｜ 学:ガク 園:エン",
    "example": "学園祭があります。",
    "translation": "Có lễ hội trường."
  },
  {
    "id": 639,
    "page": 40,
    "word": "将来",
    "reading": "しょうらい",
    "meaning": "tương lai",
    "han": "thương lai ｜ 将:ショウ・ソウ 来:ライ・タイ",
    "example": "将来の夢です。",
    "translation": "Là ước mơ tương lai."
  },
  {
    "id": 640,
    "page": 40,
    "word": "手段",
    "reading": "しゅだん",
    "meaning": "phương tiện",
    "han": "thủ đoạn ｜ 手:シュ・ズ 段:ダン・タン",
    "example": "手段を選びます。",
    "translation": "Chọn phương tiện."
  },
  {
    "id": 641,
    "page": 40,
    "word": "指摘",
    "reading": "してき",
    "meaning": "chỉ ra",
    "han": "chỉ trích ｜ 指:シ 摘:テキ",
    "example": "間違いを指摘します。",
    "translation": "Chỉ ra chỗ sai."
  },
  {
    "id": 642,
    "page": 40,
    "word": "授業",
    "reading": "じゅぎょう",
    "meaning": "giờ học",
    "han": "thụ nghiệp ｜ 授:ジュ 業:ギョウ・ゴウ",
    "example": "授業を受けます。",
    "translation": "Tôi học tiết học."
  },
  {
    "id": 643,
    "page": 40,
    "word": "楽天",
    "reading": "らくてん",
    "meaning": "lạc quan",
    "han": "lạc thiên ｜ 楽:ガク・ラク 天:テン",
    "example": "楽天的な性格です。",
    "translation": "Tính cách lạc quan."
  },
  {
    "id": 644,
    "page": 40,
    "word": "確保",
    "reading": "かくほ",
    "meaning": "đảm bảo",
    "han": "xác bảo ｜ 確:カク・コウ 保:ホ・ホウ",
    "example": "席を確保します。",
    "translation": "Giữ chỗ."
  },
  {
    "id": 645,
    "page": 40,
    "word": "連中",
    "reading": "れんちゅう",
    "meaning": "bọn, nhóm người",
    "han": "liên trung ｜ 連:レン 中:チュウ",
    "example": "仕事の連中と会います。",
    "translation": "Tôi gặp nhóm đồng nghiệp."
  },
  {
    "id": 646,
    "page": 40,
    "word": "集団",
    "reading": "しゅうだん",
    "meaning": "tập thể",
    "han": "tập đoàn ｜ 集:シュウ 団:ダン・トン",
    "example": "集団で行動します。",
    "translation": "Hành động theo nhóm."
  },
  {
    "id": 647,
    "page": 40,
    "word": "一覧",
    "reading": "いちらん",
    "meaning": "danh sách",
    "han": "nhất lãm ｜ 一:イチ・イツ 覧:ラン",
    "example": "一覧を作ります。",
    "translation": "Tôi lập danh sách."
  },
  {
    "id": 648,
    "page": 40,
    "word": "会員",
    "reading": "かいいん",
    "meaning": "hội viên",
    "han": "cối viên ｜ 会:カイ・エ 員:イン",
    "example": "会員になります。",
    "translation": "Tôi trở thành hội viên."
  },
  {
    "id": 649,
    "page": 40,
    "word": "便利",
    "reading": "べんり",
    "meaning": "tiện lợi",
    "han": "tiện lợi ｜ 便:ベン・ビン 利:リ",
    "example": "便利な道具です。",
    "translation": "Là dụng cụ tiện lợi."
  },
  {
    "id": 650,
    "page": 40,
    "word": "信用",
    "reading": "しんよう",
    "meaning": "tín nhiệm, tín dụng",
    "han": "tín dụng ｜ 信:シン 用:ヨウ",
    "example": "信用できる人です。",
    "translation": "Là người đáng tin."
  },
  {
    "id": 651,
    "page": 40,
    "word": "地獄",
    "reading": "じごく",
    "meaning": "địa ngục",
    "han": "địa ngục ｜ 地:チ・ジ 獄:ゴク",
    "example": "地獄の絵を見ました。",
    "translation": "Tôi đã xem tranh địa ngục."
  },
  {
    "id": 652,
    "page": 40,
    "word": "恋人",
    "reading": "こいびと",
    "meaning": "người yêu",
    "han": "luyến nhân ｜ 恋:レン 人:ジン・ニン",
    "example": "恋人と旅行します。",
    "translation": "Tôi đi du lịch với người yêu."
  },
  {
    "id": 653,
    "page": 40,
    "word": "捜査",
    "reading": "そうさ",
    "meaning": "điều tra (hình sự)",
    "han": "sưu tra ｜ 捜:ソウ・シュ 査:サ",
    "example": "警察が捜査しています。",
    "translation": "Cảnh sát đang điều tra."
  },
  {
    "id": 654,
    "page": 40,
    "word": "比較",
    "reading": "ひかく",
    "meaning": "so sánh",
    "han": "bỉ giác ｜ 比:ヒ 較:カク・コウ",
    "example": "二つを比較します。",
    "translation": "So sánh hai cái."
  },
  {
    "id": 655,
    "page": 41,
    "word": "派遣",
    "reading": "はけん",
    "meaning": "cử đi, phái cử",
    "han": "phái khiển ｜ 派:ハ 遣:ケン",
    "example": "社員を派遣します。",
    "translation": "Cử nhân viên đi."
  },
  {
    "id": 656,
    "page": 41,
    "word": "演奏",
    "reading": "えんそう",
    "meaning": "biểu diễn nhạc",
    "han": "diễn tấu ｜ 演:エン 奏:ソウ",
    "example": "ピアノを演奏します。",
    "translation": "Tôi chơi piano."
  },
  {
    "id": 657,
    "page": 41,
    "word": "父親",
    "reading": "ちちおや",
    "meaning": "người cha",
    "han": "phụ thân ｜ 父:フ 親:シン",
    "example": "父親は医者です。",
    "translation": "Bố tôi là bác sĩ."
  },
  {
    "id": 658,
    "page": 41,
    "word": "社員",
    "reading": "しゃいん",
    "meaning": "nhân viên công ty",
    "han": "xã viên ｜ 社:シャ 員:イン",
    "example": "社員が集まりました。",
    "translation": "Nhân viên đã tập trung."
  },
  {
    "id": 659,
    "page": 41,
    "word": "裁判",
    "reading": "さいばん",
    "meaning": "xét xử, tòa án",
    "han": "tài phán ｜ 裁:サイ 判:ハン・バン",
    "example": "裁判が始まります。",
    "translation": "Phiên tòa bắt đầu."
  },
  {
    "id": 660,
    "page": 41,
    "word": "証拠",
    "reading": "しょうこ",
    "meaning": "bằng chứng",
    "han": "chứng cứ ｜ 証:ショウ 拠:キョ・コ",
    "example": "証拠を集めます。",
    "translation": "Thu thập bằng chứng."
  },
  {
    "id": 661,
    "page": 41,
    "word": "調子",
    "reading": "ちょうし",
    "meaning": "tình trạng, phong độ",
    "han": "điều tử ｜ 調:チョウ 子:シ・ス",
    "example": "調子はどうですか。",
    "translation": "Tình trạng thế nào?"
  },
  {
    "id": 662,
    "page": 41,
    "word": "資金",
    "reading": "しきん",
    "meaning": "vốn, nguồn tiền",
    "han": "tư kim ｜ 資:シ 金:キン・コン",
    "example": "資金が足りません。",
    "translation": "Không đủ vốn."
  },
  {
    "id": 663,
    "page": 41,
    "word": "風呂",
    "reading": "ふろ",
    "meaning": "bồn tắm",
    "han": "phong lữ ｜ 風:フウ・フ 呂:ロ・リョ",
    "example": "お風呂に入ります。",
    "translation": "Tôi tắm."
  },
  {
    "id": 664,
    "page": 41,
    "word": "伝説",
    "reading": "でんせつ",
    "meaning": "truyền thuyết",
    "han": "vân duyệt ｜ 伝:デン・テン 説:セツ・ゼイ",
    "example": "古い伝説です。",
    "translation": "Là truyền thuyết cổ."
  },
  {
    "id": 665,
    "page": 41,
    "word": "修正",
    "reading": "しゅうせい",
    "meaning": "chỉnh sửa",
    "han": "tu chánh ｜ 修:シュウ・シュ 正:セイ・ショウ",
    "example": "誤りを修正します。",
    "translation": "Tôi sửa lỗi sai."
  },
  {
    "id": 666,
    "page": 41,
    "word": "分析",
    "reading": "ぶんせき",
    "meaning": "phân tích",
    "han": "phân tích ｜ 分:ブン・フン 析:セキ",
    "example": "データを分析します。",
    "translation": "Phân tích dữ liệu."
  },
  {
    "id": 667,
    "page": 41,
    "word": "初期",
    "reading": "しょき",
    "meaning": "giai đoạn đầu",
    "han": "sơ kỳ ｜ 初:ショ 期:キ・ゴ",
    "example": "初期の設定です。",
    "translation": "Là cài đặt ban đầu."
  },
  {
    "id": 668,
    "page": 41,
    "word": "千葉",
    "reading": "ちば",
    "meaning": "Chiba (tỉnh)",
    "han": "thiên diệp ｜ 千:セン 葉:ヨウ",
    "example": "千葉に住んでいます。",
    "translation": "Tôi sống ở Chiba."
  },
  {
    "id": 669,
    "page": 41,
    "word": "年度",
    "reading": "ねんど",
    "meaning": "năm tài chính",
    "han": "niên độ ｜ 年:ネン 度:ド・ト",
    "example": "新年度が始まります。",
    "translation": "Năm tài chính mới bắt đầu."
  },
  {
    "id": 670,
    "page": 41,
    "word": "強化",
    "reading": "きょうか",
    "meaning": "tăng cường",
    "han": "cường hóa ｜ 強:キョウ・ゴウ 化:カ・ケ",
    "example": "対策を強化します。",
    "translation": "Tăng cường biện pháp."
  },
  {
    "id": 671,
    "page": 41,
    "word": "感想",
    "reading": "かんそう",
    "meaning": "cảm tưởng",
    "han": "cảm tưởng ｜ 感:カン 想:ソウ・ソ",
    "example": "感想を聞かせてください。",
    "translation": "Cho tôi nghe cảm tưởng."
  },
  {
    "id": 672,
    "page": 41,
    "word": "感染",
    "reading": "かんせん",
    "meaning": "lây nhiễm",
    "han": "cảm nhiễm ｜ 感:カン 染:セン",
    "example": "感染を防ぎます。",
    "translation": "Phòng ngừa lây nhiễm."
  },
  {
    "id": 673,
    "page": 42,
    "word": "我々",
    "reading": "われわれ",
    "meaning": "chúng tôi, chúng ta",
    "han": "ngã ? ｜ 我:ガ 々:-",
    "example": "我々は協力します。",
    "translation": "Chúng tôi hợp tác."
  },
  {
    "id": 674,
    "page": 42,
    "word": "掛け",
    "reading": "かけ",
    "meaning": "treo, móc; nhân (phép nhân)",
    "han": "quải ｜ 掛:カイ・ケイ",
    "example": "鍵を掛けます。",
    "translation": "Tôi khóa cửa."
  },
  {
    "id": 675,
    "page": 42,
    "word": "法人",
    "reading": "ほうじん",
    "meaning": "pháp nhân",
    "han": "pháp nhân ｜ 法:ホウ・ハッ 人:ジン・ニン",
    "example": "法人として登録します。",
    "translation": "Đăng ký làm pháp nhân."
  },
  {
    "id": 676,
    "page": 42,
    "word": "深夜",
    "reading": "しんや",
    "meaning": "đêm khuya",
    "han": "thâm dạ ｜ 深:シン 夜:ヤ",
    "example": "深夜に帰りました。",
    "translation": "Tôi về lúc đêm khuya."
  },
  {
    "id": 677,
    "page": 42,
    "word": "温泉",
    "reading": "おんせん",
    "meaning": "suối nước nóng",
    "han": "ôn tuyền ｜ 温:オン 泉:セン",
    "example": "温泉に行きたいです。",
    "translation": "Tôi muốn đi suối nước nóng."
  },
  {
    "id": 678,
    "page": 42,
    "word": "皆様",
    "reading": "みなさま",
    "meaning": "quý vị",
    "han": "giai dạng ｜ 皆:カイ 様:ヨウ・ショウ",
    "example": "皆様、ありがとうございます。",
    "translation": "Cảm ơn quý vị."
  },
  {
    "id": 679,
    "page": 42,
    "word": "範囲",
    "reading": "はんい",
    "meaning": "phạm vi",
    "han": "phạm vi ｜ 範:ハン 囲:イ",
    "example": "範囲を決めます。",
    "translation": "Xác định phạm vi."
  },
  {
    "id": 680,
    "page": 42,
    "word": "自信",
    "reading": "じしん",
    "meaning": "tự tin",
    "han": "tự tín ｜ 自:ジ・シ 信:シン",
    "example": "自信があります。",
    "translation": "Tôi có tự tin."
  },
  {
    "id": 681,
    "page": 42,
    "word": "自動車",
    "reading": "じどうしゃ",
    "meaning": "ô tô",
    "han": "tự động xa ｜ 自:ジ・シ 動:ドウ 車:シャ",
    "example": "自動車を運転します。",
    "translation": "Tôi lái ô tô."
  },
  {
    "id": 682,
    "page": 42,
    "word": "自殺",
    "reading": "じさつ",
    "meaning": "tự tử",
    "han": "tự sát ｜ 自:ジ・シ 殺:サツ・サイ",
    "example": "自殺予防の相談窓口があります。",
    "translation": "Có đường dây tư vấn phòng ngừa tự tử."
  },
  {
    "id": 683,
    "page": 42,
    "word": "迷惑",
    "reading": "めいわく",
    "meaning": "phiền toái",
    "han": "mê hoặc ｜ 迷:メイ 惑:ワク",
    "example": "ご迷惑をおかけします。",
    "translation": "Xin lỗi đã làm phiền."
  },
  {
    "id": 684,
    "page": 42,
    "word": "道路",
    "reading": "どうろ",
    "meaning": "đường sá",
    "han": "đạo lộ ｜ 道:ドウ・トウ 路:ロ・ル",
    "example": "道路が混んでいます。",
    "translation": "Đường đông."
  },
  {
    "id": 685,
    "page": 42,
    "word": "達成",
    "reading": "たっせい",
    "meaning": "đạt được",
    "han": "đạt thành ｜ 達:タツ・ダ 成:セイ・ジョウ",
    "example": "目標を達成しました。",
    "translation": "Đã đạt mục tiêu."
  },
  {
    "id": 686,
    "page": 42,
    "word": "関西",
    "reading": "かんさい",
    "meaning": "vùng Kansai",
    "han": "quan tây ｜ 関:カン 西:セイ・サイ",
    "example": "関西に行きます。",
    "translation": "Tôi đi vùng Kansai."
  },
  {
    "id": 687,
    "page": 42,
    "word": "出身",
    "reading": "しゅっしん",
    "meaning": "xuất thân, quê quán",
    "han": "xuất thân ｜ 出:シュツ・スイ 身:シン",
    "example": "出身はどこですか。",
    "translation": "Quê bạn ở đâu?"
  },
  {
    "id": 688,
    "page": 42,
    "word": "前回",
    "reading": "ぜんかい",
    "meaning": "lần trước",
    "han": "tiền hồi ｜ 前:ゼン 回:カイ・エ",
    "example": "前回の続きです。",
    "translation": "Là phần tiếp của lần trước."
  },
  {
    "id": 689,
    "page": 42,
    "word": "劇場",
    "reading": "げきじょう",
    "meaning": "nhà hát",
    "han": "kịch tràng ｜ 劇:ゲキ 場:ジョウ・チョウ",
    "example": "劇場で見ます。",
    "translation": "Xem ở nhà hát."
  },
  {
    "id": 690,
    "page": 42,
    "word": "収入",
    "reading": "しゅうにゅう",
    "meaning": "thu nhập",
    "han": "thâu nhập ｜ 収:シュウ 入:ニュウ・ジュ",
    "example": "収入が増えました。",
    "translation": "Thu nhập đã tăng."
  },
  {
    "id": 691,
    "page": 43,
    "word": "慣れ",
    "reading": "なれ",
    "meaning": "sự quen, thói quen",
    "han": "quán ｜ 慣:カン",
    "example": "慣れが大切です。",
    "translation": "Sự quen thuộc rất quan trọng."
  },
  {
    "id": 692,
    "page": 43,
    "word": "投資",
    "reading": "とうし",
    "meaning": "đầu tư",
    "han": "đầu tư ｜ 投:トウ 資:シ",
    "example": "投資を始めます。",
    "translation": "Bắt đầu đầu tư."
  },
  {
    "id": 693,
    "page": 43,
    "word": "拡大",
    "reading": "かくだい",
    "meaning": "mở rộng",
    "han": "khuếch đại ｜ 拡:カク・コウ 大:ダイ・タイ",
    "example": "事業を拡大します。",
    "translation": "Mở rộng kinh doanh."
  },
  {
    "id": 694,
    "page": 43,
    "word": "改善",
    "reading": "かいぜん",
    "meaning": "cải thiện",
    "han": "cải thiện ｜ 改:カイ 善:ゼン",
    "example": "サービスを改善します。",
    "translation": "Cải thiện dịch vụ."
  },
  {
    "id": 695,
    "page": 43,
    "word": "最低",
    "reading": "さいてい",
    "meaning": "thấp nhất, tệ nhất",
    "han": "tối đê ｜ 最:サイ・シュ 低:テイ",
    "example": "最低限の準備です。",
    "translation": "Là chuẩn bị tối thiểu."
  },
  {
    "id": 696,
    "page": 43,
    "word": "歓迎",
    "reading": "かんげい",
    "meaning": "hoan nghênh",
    "han": "hoan nghênh ｜ 歓:カン 迎:ゲイ",
    "example": "歓迎会を開きます。",
    "translation": "Tổ chức tiệc chào mừng."
  },
  {
    "id": 697,
    "page": 43,
    "word": "気軽",
    "reading": "きがる",
    "meaning": "thoải mái, không câu nệ",
    "han": "khí khinh ｜ 気:キ・ケ 軽:ケイ・キョウ",
    "example": "気軽に相談してください。",
    "translation": "Hãy thoải mái hỏi."
  },
  {
    "id": 698,
    "page": 43,
    "word": "現れ",
    "reading": "あらわれ",
    "meaning": "xuất hiện, biểu hiện",
    "han": "hiện ｜ 現:ゲン",
    "example": "姿が現れました。",
    "translation": "Bóng dáng đã xuất hiện."
  },
  {
    "id": 699,
    "page": 43,
    "word": "約束",
    "reading": "やくそく",
    "meaning": "lời hứa, cuộc hẹn",
    "han": "ước thúc ｜ 約:ヤク 束:ソク",
    "example": "約束を守ります。",
    "translation": "Giữ lời hứa."
  },
  {
    "id": 700,
    "page": 43,
    "word": "自転車",
    "reading": "じてんしゃ",
    "meaning": "xe đạp",
    "han": "tự chuyển xa ｜ 自:ジ・シ 転:テン 車:シャ",
    "example": "自転車で通勤します。",
    "translation": "Đi làm bằng xe đạp."
  },
  {
    "id": 701,
    "page": 44,
    "word": "計算",
    "reading": "けいさん",
    "meaning": "tính toán",
    "han": "kế toán ｜ 計:ケイ 算:サン",
    "example": "費用を計算します。",
    "translation": "Tính chi phí."
  },
  {
    "id": 702,
    "page": 44,
    "word": "訓練",
    "reading": "くんれん",
    "meaning": "huấn luyện",
    "han": "huấn luyện ｜ 訓:クン・キン 練:レン",
    "example": "訓練を行います。",
    "translation": "Tiến hành huấn luyện."
  },
  {
    "id": 703,
    "page": 44,
    "word": "資料",
    "reading": "しりょう",
    "meaning": "tài liệu",
    "han": "tư liêu ｜ 資:シ 料:リョウ",
    "example": "資料を送ります。",
    "translation": "Tôi gửi tài liệu."
  },
  {
    "id": 704,
    "page": 44,
    "word": "連載",
    "reading": "れんさい",
    "meaning": "đăng nhiều kỳ",
    "han": "liên tái ｜ 連:レン 載:サイ",
    "example": "記事を連載します。",
    "translation": "Đăng bài nhiều kỳ."
  },
  {
    "id": 705,
    "page": 44,
    "word": "進化",
    "reading": "しんか",
    "meaning": "tiến hóa",
    "han": "tiến hóa ｜ 進:シン 化:カ・ケ",
    "example": "技術が進化しました。",
    "translation": "Công nghệ đã tiến hóa."
  },
  {
    "id": 706,
    "page": 44,
    "word": "首相",
    "reading": "しゅしょう",
    "meaning": "thủ tướng",
    "han": "thủ tương ｜ 首:シュ 相:ソウ・ショウ",
    "example": "首相が会見しました。",
    "translation": "Thủ tướng đã họp báo."
  },
  {
    "id": 707,
    "page": 44,
    "word": "一切",
    "reading": "いっさい",
    "meaning": "hoàn toàn, tất cả",
    "han": "nhất thiết ｜ 一:イチ・イツ 切:セツ・サイ",
    "example": "一切関係ありません。",
    "translation": "Hoàn toàn không liên quan."
  },
  {
    "id": 708,
    "page": 44,
    "word": "不足",
    "reading": "ふそく",
    "meaning": "thiếu",
    "han": "bất túc ｜ 不:フ・ブ 足:ソク",
    "example": "人手が不足しています。",
    "translation": "Thiếu nhân lực."
  },
  {
    "id": 709,
    "page": 44,
    "word": "世紀",
    "reading": "せいき",
    "meaning": "thế kỷ",
    "han": "thế kỉ ｜ 世:セイ・セ 紀:キ",
    "example": "二十一世紀です。",
    "translation": "Là thế kỷ hai mươi mốt."
  },
  {
    "id": 710,
    "page": 44,
    "word": "久しぶり",
    "reading": "ひさしぶり",
    "meaning": "lâu rồi mới",
    "han": "cửu ｜ 久:キュウ・ク",
    "example": "久しぶりですね。",
    "translation": "Lâu rồi không gặp nhỉ."
  },
  {
    "id": 711,
    "page": 44,
    "word": "事態",
    "reading": "じたい",
    "meaning": "tình hình, sự thể",
    "han": "sự thái ｜ 事:ジ・ズ 態:タイ",
    "example": "事態を把握します。",
    "translation": "Nắm tình hình."
  },
  {
    "id": 712,
    "page": 44,
    "word": "以内",
    "reading": "いない",
    "meaning": "trong vòng",
    "han": "dĩ nạp ｜ 以:イ 内:ナイ・ダイ",
    "example": "三日以内に返信します。",
    "translation": "Tôi trả lời trong vòng ba ngày."
  },
  {
    "id": 713,
    "page": 44,
    "word": "何で",
    "reading": "なんで",
    "meaning": "tại sao",
    "han": "hà ｜ 何:カ",
    "example": "何で遅れたのですか。",
    "translation": "Tại sao bạn đến muộn?"
  },
  {
    "id": 714,
    "page": 44,
    "word": "候補",
    "reading": "こうほ",
    "meaning": "ứng viên",
    "han": "hậu bổ ｜ 候:コウ 補:ホ",
    "example": "候補を挙げます。",
    "translation": "Nêu các ứng viên."
  },
  {
    "id": 715,
    "page": 44,
    "word": "原作",
    "reading": "げんさく",
    "meaning": "tác phẩm gốc",
    "han": "nguyên tác ｜ 原:ゲン 作:サク・サ",
    "example": "原作を読みます。",
    "translation": "Đọc tác phẩm gốc."
  },
  {
    "id": 716,
    "page": 44,
    "word": "掃除",
    "reading": "そうじ",
    "meaning": "dọn dẹp",
    "han": "tảo trừ ｜ 掃:ソウ・シュ 除:ジョ・ジ",
    "example": "部屋を掃除します。",
    "translation": "Dọn phòng."
  },
  {
    "id": 717,
    "page": 44,
    "word": "接続",
    "reading": "せつぞく",
    "meaning": "kết nối",
    "han": "tiếp tục ｜ 接:セツ・ショウ 続:ゾク・ショク",
    "example": "ネットに接続します。",
    "translation": "Kết nối mạng."
  },
  {
    "id": 718,
    "page": 44,
    "word": "教師",
    "reading": "きょうし",
    "meaning": "giáo viên",
    "han": "giáo sư ｜ 教:キョウ 師:シ",
    "example": "教師になりたいです。",
    "translation": "Tôi muốn làm giáo viên."
  },
  {
    "id": 719,
    "page": 45,
    "word": "日常",
    "reading": "にちじょう",
    "meaning": "đời thường",
    "han": "nhật thường ｜ 日:ニチ・ジツ 常:ジョウ",
    "example": "日常の仕事です。",
    "translation": "Là công việc thường ngày."
  },
  {
    "id": 720,
    "page": 45,
    "word": "確定",
    "reading": "かくてい",
    "meaning": "xác định",
    "han": "xác định ｜ 確:カク・コウ 定:テイ・ジョウ",
    "example": "日程が確定しました。",
    "translation": "Lịch đã được chốt."
  },
  {
    "id": 721,
    "page": 45,
    "word": "空間",
    "reading": "くうかん",
    "meaning": "không gian",
    "han": "không gian ｜ 空:クウ 間:カン・ケン",
    "example": "広い空間です。",
    "translation": "Là không gian rộng."
  },
  {
    "id": 722,
    "page": 45,
    "word": "職場",
    "reading": "しょくば",
    "meaning": "nơi làm việc",
    "han": "chức tràng ｜ 職:ショク・ソク 場:ジョウ・チョウ",
    "example": "職場の雰囲気がいいです。",
    "translation": "Không khí nơi làm việc tốt."
  },
  {
    "id": 723,
    "page": 45,
    "word": "興奮",
    "reading": "こうふん",
    "meaning": "phấn khích",
    "han": "hưng phấn ｜ 興:コウ・キョウ 奮:フン",
    "example": "興奮しています。",
    "translation": "Tôi đang phấn khích."
  },
  {
    "id": 724,
    "page": 45,
    "word": "規制",
    "reading": "きせい",
    "meaning": "quy định, hạn chế",
    "han": "quy chế ｜ 規:キ 制:セイ",
    "example": "規制が強まりました。",
    "translation": "Quy định đã siết chặt."
  },
  {
    "id": 725,
    "page": 45,
    "word": "辛い",
    "reading": "からい",
    "meaning": "cay; vất vả",
    "han": "tân ｜ 辛:シン",
    "example": "このカレーは辛いです。",
    "translation": "Món cà ri này cay."
  },
  {
    "id": 726,
    "page": 45,
    "word": "遅れ",
    "reading": "おくれ",
    "meaning": "chậm trễ",
    "han": "trì ｜ 遅:チ",
    "example": "電車が遅れています。",
    "translation": "Tàu bị trễ."
  },
  {
    "id": 727,
    "page": 45,
    "word": "交渉",
    "reading": "こうしょう",
    "meaning": "đàm phán",
    "han": "giao thiệp ｜ 交:コウ 渉:ショウ",
    "example": "価格を交渉します。",
    "translation": "Đàm phán giá."
  },
  {
    "id": 728,
    "page": 45,
    "word": "住民",
    "reading": "じゅうみん",
    "meaning": "cư dân",
    "han": "trụ dân ｜ 住:ジュウ・ヂュウ 民:ミン",
    "example": "住民に知らせます。",
    "translation": "Thông báo cho cư dân."
  },
  {
    "id": 729,
    "page": 45,
    "word": "再び",
    "reading": "ふたたび",
    "meaning": "lần nữa",
    "han": "tái ｜ 再:サイ・サ",
    "example": "再びお会いしましょう。",
    "translation": "Hẹn gặp lại."
  },
  {
    "id": 730,
    "page": 45,
    "word": "天使",
    "reading": "てんし",
    "meaning": "thiên thần",
    "han": "thiên sử ｜ 天:テン 使:シ",
    "example": "天使の絵です。",
    "translation": "Là tranh thiên thần."
  },
  {
    "id": 731,
    "page": 45,
    "word": "小学校",
    "reading": "しょうがっこう",
    "meaning": "trường tiểu học",
    "han": "tiểu học giáo ｜ 小:ショウ 学:ガク 校:コウ・キョウ",
    "example": "小学校に通っています。",
    "translation": "Tôi học tiểu học."
  },
  {
    "id": 732,
    "page": 45,
    "word": "展示",
    "reading": "てんじ",
    "meaning": "trưng bày",
    "han": "triển kì ｜ 展:テン 示:ジ・シ",
    "example": "作品を展示します。",
    "translation": "Trưng bày tác phẩm."
  },
  {
    "id": 733,
    "page": 45,
    "word": "後半",
    "reading": "こうはん",
    "meaning": "nửa sau",
    "han": "hậu bán ｜ 後:ゴ・コウ 半:ハン",
    "example": "後半が始まります。",
    "translation": "Nửa sau bắt đầu."
  },
  {
    "id": 734,
    "page": 45,
    "word": "所有",
    "reading": "しょゆう",
    "meaning": "sở hữu",
    "han": "sở hữu ｜ 所:ショ 有:ユウ・ウ",
    "example": "土地を所有しています。",
    "translation": "Sở hữu đất."
  },
  {
    "id": 735,
    "page": 45,
    "word": "搭載",
    "reading": "とうさい",
    "meaning": "trang bị, tích hợp",
    "han": "đáp tái ｜ 搭:トウ 載:サイ",
    "example": "新機能を搭載しました。",
    "translation": "Đã tích hợp chức năng mới."
  },
  {
    "id": 736,
    "page": 45,
    "word": "新作",
    "reading": "しんさく",
    "meaning": "tác phẩm mới",
    "han": "tân tác ｜ 新:シン 作:サク・サ",
    "example": "新作が出ました。",
    "translation": "Tác phẩm mới đã ra."
  },
  {
    "id": 737,
    "page": 46,
    "word": "最悪",
    "reading": "さいあく",
    "meaning": "tệ nhất",
    "han": "tối ác ｜ 最:サイ・シュ 悪:アク・オ",
    "example": "最悪の場合に備えます。",
    "translation": "Chuẩn bị cho trường hợp xấu nhất."
  },
  {
    "id": 738,
    "page": 46,
    "word": "模様",
    "reading": "もよう",
    "meaning": "họa tiết; tình hình",
    "han": "mô dạng ｜ 模:モ・ボ 様:ヨウ・ショウ",
    "example": "模様が美しいです。",
    "translation": "Họa tiết đẹp."
  },
  {
    "id": 739,
    "page": 46,
    "word": "産業",
    "reading": "さんぎょう",
    "meaning": "công nghiệp, ngành",
    "han": "sản nghiệp ｜ 産:サン 業:ギョウ・ゴウ",
    "example": "産業が発展しました。",
    "translation": "Công nghiệp đã phát triển."
  },
  {
    "id": 740,
    "page": 46,
    "word": "細胞",
    "reading": "さいぼう",
    "meaning": "tế bào",
    "han": "tế bào ｜ 細:サイ 胞:ホウ",
    "example": "細胞を調べます。",
    "translation": "Nghiên cứu tế bào."
  },
  {
    "id": 741,
    "page": 46,
    "word": "背景",
    "reading": "はいけい",
    "meaning": "bối cảnh, nền",
    "han": "bối cảnh ｜ 背:ハイ 景:ケイ",
    "example": "背景を説明します。",
    "translation": "Giải thích bối cảnh."
  },
  {
    "id": 742,
    "page": 46,
    "word": "言語",
    "reading": "げんご",
    "meaning": "ngôn ngữ",
    "han": "ngôn ngữ ｜ 言:ゲン・ゴン 語:ゴ",
    "example": "言語を学びます。",
    "translation": "Học ngôn ngữ."
  },
  {
    "id": 743,
    "page": 46,
    "word": "近所",
    "reading": "きんじょ",
    "meaning": "hàng xóm",
    "han": "cận sở ｜ 近:キン・コン 所:ショ",
    "example": "近所に住んでいます。",
    "translation": "Tôi sống gần đây."
  },
  {
    "id": 744,
    "page": 46,
    "word": "閲覧",
    "reading": "えつらん",
    "meaning": "xem, đọc",
    "han": "duyệt lãm ｜ 閲:エツ 覧:ラン",
    "example": "資料を閲覧します。",
    "translation": "Xem tài liệu."
  },
  {
    "id": 745,
    "page": 46,
    "word": "伝統",
    "reading": "でんとう",
    "meaning": "truyền thống",
    "han": "vân thống ｜ 伝:デン・テン 統:トウ",
    "example": "伝統を守ります。",
    "translation": "Giữ gìn truyền thống."
  },
  {
    "id": 746,
    "page": 46,
    "word": "優先",
    "reading": "ゆうせん",
    "meaning": "ưu tiên",
    "han": "ưu tiên ｜ 優:ユウ・ウ 先:セン",
    "example": "安全を優先します。",
    "translation": "Ưu tiên an toàn."
  },
  {
    "id": 747,
    "page": 46,
    "word": "先輩",
    "reading": "せんぱい",
    "meaning": "đàn anh, tiền bối",
    "han": "tiên bối ｜ 先:セン 輩:ハイ",
    "example": "先輩に聞きます。",
    "translation": "Tôi hỏi đàn anh."
  },
  {
    "id": 748,
    "page": 46,
    "word": "処分",
    "reading": "しょぶん",
    "meaning": "xử lý, xử phạt",
    "han": "xứ phân ｜ 処:ショ 分:ブン・フン",
    "example": "古い物を処分します。",
    "translation": "Xử lý đồ cũ."
  },
  {
    "id": 749,
    "page": 46,
    "word": "分野",
    "reading": "ぶんや",
    "meaning": "lĩnh vực",
    "han": "phân dã ｜ 分:ブン・フン 野:ヤ・ショ",
    "example": "専門の分野です。",
    "translation": "Là lĩnh vực chuyên môn."
  },
  {
    "id": 750,
    "page": 46,
    "word": "医師",
    "reading": "いし",
    "meaning": "bác sĩ",
    "han": "ế sư ｜ 医:イ 師:シ",
    "example": "医師に相談します。",
    "translation": "Tôi hỏi bác sĩ."
  },
  {
    "id": 751,
    "page": 46,
    "word": "宗教",
    "reading": "しゅうきょう",
    "meaning": "tôn giáo",
    "han": "tông giáo ｜ 宗:シュウ・ソウ 教:キョウ",
    "example": "宗教について学びます。",
    "translation": "Học về tôn giáo."
  },
  {
    "id": 752,
    "page": 46,
    "word": "巨大",
    "reading": "きょだい",
    "meaning": "khổng lồ",
    "han": "cự đại ｜ 巨:キョ 大:ダイ・タイ",
    "example": "巨大な建物です。",
    "translation": "Là tòa nhà khổng lồ."
  },
  {
    "id": 753,
    "page": 46,
    "word": "投げ",
    "reading": "なげ",
    "meaning": "ném",
    "han": "đầu ｜ 投:トウ",
    "example": "ボールを投げます。",
    "translation": "Ném bóng."
  },
  {
    "id": 754,
    "page": 46,
    "word": "最強",
    "reading": "さいきょう",
    "meaning": "mạnh nhất",
    "han": "tối cường ｜ 最:サイ・シュ 強:キョウ・ゴウ",
    "example": "最強のチームです。",
    "translation": "Là đội mạnh nhất."
  },
  {
    "id": 755,
    "page": 47,
    "word": "生命",
    "reading": "せいめい",
    "meaning": "sinh mệnh",
    "han": "sanh mệnh ｜ 生:セイ・ショウ 命:メイ・ミョウ",
    "example": "生命を守ります。",
    "translation": "Bảo vệ sinh mệnh."
  },
  {
    "id": 756,
    "page": 47,
    "word": "男女",
    "reading": "だんじょ",
    "meaning": "nam nữ",
    "han": "nam nữ ｜ 男:ダン・ナン 女:ジョ・ニョ",
    "example": "男女の差をなくします。",
    "translation": "Xóa bỏ khác biệt nam nữ."
  },
  {
    "id": 757,
    "page": 47,
    "word": "緊急",
    "reading": "きんきゅう",
    "meaning": "khẩn cấp",
    "han": "khẩn cấp ｜ 緊:キン 急:キュウ",
    "example": "緊急の連絡です。",
    "translation": "Là liên lạc khẩn cấp."
  },
  {
    "id": 758,
    "page": 47,
    "word": "許可",
    "reading": "きょか",
    "meaning": "cho phép",
    "han": "hứa khả ｜ 許:キョ 可:カ・コク",
    "example": "許可を取ります。",
    "translation": "Xin phép."
  },
  {
    "id": 759,
    "page": 47,
    "word": "高速",
    "reading": "こうそく",
    "meaning": "tốc độ cao",
    "han": "cao tốc ｜ 高:コウ 速:ソク",
    "example": "高速道路を使います。",
    "translation": "Dùng đường cao tốc."
  },
  {
    "id": 760,
    "page": 47,
    "word": "ご覧",
    "reading": "ごらん",
    "meaning": "xem (kính ngữ)",
    "han": "lãm ｜ 覧:ラン",
    "example": "ご覧ください。",
    "translation": "Xin hãy xem."
  },
  {
    "id": 761,
    "page": 47,
    "word": "中身",
    "reading": "なかみ",
    "meaning": "bên trong, nội dung",
    "han": "trung thân ｜ 中:チュウ 身:シン",
    "example": "中身を確認します。",
    "translation": "Kiểm tra bên trong."
  },
  {
    "id": 762,
    "page": 47,
    "word": "事情",
    "reading": "じじょう",
    "meaning": "hoàn cảnh, lý do",
    "han": "sự tình ｜ 事:ジ・ズ 情:ジョウ・セイ",
    "example": "事情を説明します。",
    "translation": "Giải thích hoàn cảnh."
  },
  {
    "id": 763,
    "page": 47,
    "word": "交流",
    "reading": "こうりゅう",
    "meaning": "giao lưu",
    "han": "giao lưu ｜ 交:コウ 流:リュウ・ル",
    "example": "文化交流を行います。",
    "translation": "Giao lưu văn hóa."
  },
  {
    "id": 764,
    "page": 47,
    "word": "人口",
    "reading": "じんこう",
    "meaning": "dân số",
    "han": "nhân khẩu ｜ 人:ジン・ニン 口:コウ・ク",
    "example": "人口が増えました。",
    "translation": "Dân số đã tăng."
  },
  {
    "id": 765,
    "page": 47,
    "word": "利益",
    "reading": "りえき",
    "meaning": "lợi nhuận, lợi ích",
    "han": "lợi ích ｜ 利:リ 益:エキ・ヤク",
    "example": "利益が出ました。",
    "translation": "Đã có lợi nhuận."
  },
  {
    "id": 766,
    "page": 47,
    "word": "受け入れ",
    "reading": "うけいれ",
    "meaning": "tiếp nhận",
    "han": "thụ nhập ｜ 受:ジュ 入:ニュウ・ジュ",
    "example": "新人を受け入れます。",
    "translation": "Tiếp nhận người mới."
  },
  {
    "id": 767,
    "page": 47,
    "word": "地下",
    "reading": "ちか",
    "meaning": "dưới lòng đất",
    "han": "địa hạ ｜ 地:チ・ジ 下:カ・ゲ",
    "example": "地下鉄で行きます。",
    "translation": "Đi bằng tàu điện ngầm."
  },
  {
    "id": 768,
    "page": 47,
    "word": "大臣",
    "reading": "だいじん",
    "meaning": "bộ trưởng",
    "han": "đại thần ｜ 大:ダイ・タイ 臣:シン・ジン",
    "example": "大臣が発表しました。",
    "translation": "Bộ trưởng đã công bố."
  },
  {
    "id": 769,
    "page": 47,
    "word": "宣伝",
    "reading": "せんでん",
    "meaning": "quảng bá",
    "han": "tuyên vân ｜ 宣:セン 伝:デン・テン",
    "example": "商品を宣伝します。",
    "translation": "Quảng bá sản phẩm."
  },
  {
    "id": 770,
    "page": 47,
    "word": "小学生",
    "reading": "しょうがくせい",
    "meaning": "học sinh tiểu học",
    "han": "tiểu học sanh ｜ 小:ショウ 学:ガク 生:セイ・ショウ",
    "example": "小学生が歩いています。",
    "translation": "Học sinh tiểu học đang đi bộ."
  },
  {
    "id": 771,
    "page": 47,
    "word": "建設",
    "reading": "けんせつ",
    "meaning": "xây dựng",
    "han": "kiến thiết ｜ 建:ケン・コン 設:セツ",
    "example": "ビルを建設します。",
    "translation": "Xây dựng tòa nhà."
  },
  {
    "id": 772,
    "page": 47,
    "word": "当たり前",
    "reading": "あたりまえ",
    "meaning": "đương nhiên",
    "han": "đang tiền ｜ 当:トウ 前:ゼン",
    "example": "当たり前のことです。",
    "translation": "Là điều đương nhiên."
  },
  {
    "id": 773,
    "page": 48,
    "word": "本日",
    "reading": "ほんじつ",
    "meaning": "hôm nay (trang trọng)",
    "han": "bổn nhật ｜ 本:ホン 日:ニチ・ジツ",
    "example": "本日はありがとうございます。",
    "translation": "Cảm ơn quý vị hôm nay."
  },
  {
    "id": 774,
    "page": 48,
    "word": "正確",
    "reading": "せいかく",
    "meaning": "chính xác",
    "han": "chánh xác ｜ 正:セイ・ショウ 確:カク・コウ",
    "example": "正確に答えます。",
    "translation": "Trả lời chính xác."
  },
  {
    "id": 775,
    "page": 48,
    "word": "物質",
    "reading": "ぶっしつ",
    "meaning": "vật chất",
    "han": "vật chất ｜ 物:ブツ・モツ 質:シツ・シチ",
    "example": "物質を調べます。",
    "translation": "Nghiên cứu vật chất."
  },
  {
    "id": 776,
    "page": 48,
    "word": "獲得",
    "reading": "かくとく",
    "meaning": "giành được",
    "han": "hoạch đắc ｜ 獲:カク 得:トク",
    "example": "賞を獲得しました。",
    "translation": "Đã giành giải."
  },
  {
    "id": 777,
    "page": 48,
    "word": "記者",
    "reading": "きしゃ",
    "meaning": "phóng viên",
    "han": "kí giả ｜ 記:キ 者:シャ",
    "example": "記者が質問しました。",
    "translation": "Phóng viên đã hỏi."
  },
  {
    "id": 778,
    "page": 48,
    "word": "認定",
    "reading": "にんてい",
    "meaning": "công nhận",
    "han": "nhận định ｜ 認:ニン 定:テイ・ジョウ",
    "example": "資格を認定します。",
    "translation": "Công nhận chứng chỉ."
  },
  {
    "id": 779,
    "page": 48,
    "word": "調整",
    "reading": "ちょうせい",
    "meaning": "điều chỉnh",
    "han": "điều chỉnh ｜ 調:チョウ 整:セイ",
    "example": "日程を調整します。",
    "translation": "Tôi điều chỉnh lịch."
  },
  {
    "id": 780,
    "page": 48,
    "word": "お腹",
    "reading": "おなか",
    "meaning": "bụng",
    "han": "phúc ｜ 腹:フク",
    "example": "お腹がすきました。",
    "translation": "Tôi đói bụng."
  },
  {
    "id": 781,
    "page": 48,
    "word": "住宅",
    "reading": "じゅうたく",
    "meaning": "nhà ở",
    "han": "trụ trạch ｜ 住:ジュウ・ヂュウ 宅:タク",
    "example": "住宅を買います。",
    "translation": "Tôi mua nhà."
  },
  {
    "id": 782,
    "page": 48,
    "word": "優しい",
    "reading": "やさしい",
    "meaning": "hiền, tử tế",
    "han": "ưu ｜ 優:ユウ・ウ",
    "example": "優しい人です。",
    "translation": "Là người hiền."
  },
  {
    "id": 783,
    "page": 48,
    "word": "単位",
    "reading": "たんい",
    "meaning": "đơn vị; tín chỉ",
    "han": "đan vị ｜ 単:タン 位:イ",
    "example": "単位を取ります。",
    "translation": "Lấy tín chỉ."
  },
  {
    "id": 784,
    "page": 48,
    "word": "増加",
    "reading": "ぞうか",
    "meaning": "tăng",
    "han": "tăng gia ｜ 増:ゾウ 加:カ",
    "example": "人口が増加しました。",
    "translation": "Dân số đã tăng."
  },
  {
    "id": 785,
    "page": 48,
    "word": "少なくとも",
    "reading": "すくなくとも",
    "meaning": "ít nhất",
    "han": "thiểu ｜ 少:ショウ",
    "example": "少なくとも十人は必要です。",
    "translation": "Cần ít nhất mười người."
  },
  {
    "id": 786,
    "page": 48,
    "word": "届け",
    "reading": "とどけ",
    "meaning": "giao, thông báo",
    "han": "giới ｜ 届:カイ",
    "example": "荷物を届けます。",
    "translation": "Giao hành lý."
  },
  {
    "id": 787,
    "page": 48,
    "word": "建築",
    "reading": "けんちく",
    "meaning": "kiến trúc",
    "han": "kiến trúc ｜ 建:ケン・コン 築:チク",
    "example": "建築を学びます。",
    "translation": "Học kiến trúc."
  },
  {
    "id": 788,
    "page": 48,
    "word": "心理",
    "reading": "しんり",
    "meaning": "tâm lý",
    "han": "tâm lý ｜ 心:シン 理:リ",
    "example": "心理を研究します。",
    "translation": "Nghiên cứu tâm lý."
  },
  {
    "id": 789,
    "page": 48,
    "word": "手術",
    "reading": "しゅじゅつ",
    "meaning": "phẫu thuật",
    "han": "thủ thuật ｜ 手:シュ・ズ 術:ジュツ",
    "example": "手術が成功しました。",
    "translation": "Ca phẫu thuật đã thành công."
  },
  {
    "id": 790,
    "page": 48,
    "word": "書籍",
    "reading": "しょせき",
    "meaning": "sách",
    "han": "thư tịch ｜ 書:ショ 籍:セキ",
    "example": "書籍を購入します。",
    "translation": "Mua sách."
  },
  {
    "id": 791,
    "page": 49,
    "word": "次元",
    "reading": "じげん",
    "meaning": "chiều, chiều không gian",
    "han": "thứ nguyên ｜ 次:ジ・シ 元:ゲン・ガン",
    "example": "次元が違います。",
    "translation": "Khác chiều."
  },
  {
    "id": 792,
    "page": 49,
    "word": "深い",
    "reading": "ふかい",
    "meaning": "sâu",
    "han": "thâm ｜ 深:シン",
    "example": "深い川です。",
    "translation": "Là con sông sâu."
  },
  {
    "id": 793,
    "page": 49,
    "word": "無視",
    "reading": "むし",
    "meaning": "phớt lờ",
    "han": "vô thị ｜ 無:ム・ブ 視:シ",
    "example": "連絡を無視しないでください。",
    "translation": "Xin đừng phớt lờ liên lạc."
  },
  {
    "id": 794,
    "page": 49,
    "word": "笑顔",
    "reading": "えがお",
    "meaning": "nụ cười",
    "han": "tiếu nhan ｜ 笑:ショウ 顔:ガン",
    "example": "笑顔で挨拶します。",
    "translation": "Chào bằng nụ cười."
  },
  {
    "id": 795,
    "page": 49,
    "word": "継続",
    "reading": "けいぞく",
    "meaning": "tiếp tục, duy trì",
    "han": "bối tục ｜ 継:ケイ 続:ゾク・ショク",
    "example": "活動を継続します。",
    "translation": "Tiếp tục hoạt động."
  },
  {
    "id": 796,
    "page": 49,
    "word": "美人",
    "reading": "びじん",
    "meaning": "người đẹp",
    "han": "mỹ nhân ｜ 美:ビ・ミ 人:ジン・ニン",
    "example": "美人の先生です。",
    "translation": "Là cô giáo xinh đẹp."
  },
  {
    "id": 797,
    "page": 49,
    "word": "議論",
    "reading": "ぎろん",
    "meaning": "tranh luận",
    "han": "nghị luận ｜ 議:ギ 論:ロン",
    "example": "議論を行います。",
    "translation": "Tiến hành tranh luận."
  },
  {
    "id": 798,
    "page": 49,
    "word": "資格",
    "reading": "しかく",
    "meaning": "tư cách, chứng chỉ",
    "han": "tư cách ｜ 資:シ 格:カク・コウ",
    "example": "資格を取ります。",
    "translation": "Lấy chứng chỉ."
  },
  {
    "id": 799,
    "page": 49,
    "word": "運用",
    "reading": "うんよう",
    "meaning": "vận dụng, quản lý",
    "han": "vận dụng ｜ 運:ウン 用:ヨウ",
    "example": "システムを運用します。",
    "translation": "Vận hành hệ thống."
  },
  {
    "id": 800,
    "page": 49,
    "word": "邪魔",
    "reading": "じゃま",
    "meaning": "cản trở, làm phiền",
    "han": "tà ma ｜ 邪:ジャ 魔:マ",
    "example": "邪魔をしないでください。",
    "translation": "Xin đừng cản trở."
  },
  {
    "id": 801,
    "page": 50,
    "word": "部隊",
    "reading": "ぶたい",
    "meaning": "đơn vị quân đội",
    "han": "bộ đội ｜ 部:ブ 隊:タイ",
    "example": "部隊が到着しました。",
    "translation": "Đơn vị đã đến."
  },
  {
    "id": 802,
    "page": 50,
    "word": "駄目",
    "reading": "だめ",
    "meaning": "không được",
    "han": "đà mục ｜ 駄:ダ・タ 目:モク・ボク",
    "example": "それは駄目です。",
    "translation": "Cái đó không được."
  },
  {
    "id": 803,
    "page": 50,
    "word": "両方",
    "reading": "りょうほう",
    "meaning": "cả hai",
    "han": "lạng phương ｜ 両:リョウ 方:ホウ",
    "example": "両方が必要です。",
    "translation": "Cần cả hai."
  },
  {
    "id": 804,
    "page": 50,
    "word": "中止",
    "reading": "ちゅうし",
    "meaning": "đình chỉ, hủy",
    "han": "trung chỉ ｜ 中:チュウ 止:シ",
    "example": "イベントを中止します。",
    "translation": "Hủy sự kiện."
  },
  {
    "id": 805,
    "page": 50,
    "word": "優秀",
    "reading": "ゆうしゅう",
    "meaning": "xuất sắc",
    "han": "ưu tú ｜ 優:ユウ・ウ 秀:シュウ",
    "example": "優秀な社員です。",
    "translation": "Là nhân viên xuất sắc."
  },
  {
    "id": 806,
    "page": 50,
    "word": "出版",
    "reading": "しゅっぱん",
    "meaning": "xuất bản",
    "han": "xuất bản ｜ 出:シュツ・スイ 版:ハン",
    "example": "本を出版します。",
    "translation": "Xuất bản sách."
  },
  {
    "id": 807,
    "page": 50,
    "word": "分け",
    "reading": "わけ",
    "meaning": "chia",
    "han": "phân ｜ 分:ブン・フン",
    "example": "二つに分けます。",
    "translation": "Chia làm hai."
  },
  {
    "id": 808,
    "page": 50,
    "word": "厳しい",
    "reading": "きびしい",
    "meaning": "nghiêm khắc",
    "han": "nghiêm ｜ 厳:ゲン・ゴン",
    "example": "厳しい先生です。",
    "translation": "Là thầy nghiêm khắc."
  },
  {
    "id": 809,
    "page": 50,
    "word": "台湾",
    "reading": "たいわん",
    "meaning": "Đài Loan",
    "han": "thai loan ｜ 台:ダイ・タイ 湾:ワン",
    "example": "台湾に行きました。",
    "translation": "Tôi đã đến Đài Loan."
  },
  {
    "id": 810,
    "page": 50,
    "word": "埼玉",
    "reading": "さいたま",
    "meaning": "Saitama (tỉnh)",
    "han": "kì ngọc ｜ 埼:キ 玉:ギョク",
    "example": "埼玉に住んでいます。",
    "translation": "Tôi sống ở Saitama."
  },
  {
    "id": 811,
    "page": 50,
    "word": "太陽",
    "reading": "たいよう",
    "meaning": "mặt trời",
    "han": "thái dương ｜ 太:タイ・タ 陽:ヨウ",
    "example": "太陽が昇ります。",
    "translation": "Mặt trời mọc."
  },
  {
    "id": 812,
    "page": 50,
    "word": "弱い",
    "reading": "よわい",
    "meaning": "yếu",
    "han": "nhược ｜ 弱:ジャク",
    "example": "体が弱いです。",
    "translation": "Cơ thể yếu."
  },
  {
    "id": 813,
    "page": 50,
    "word": "得意",
    "reading": "とくい",
    "meaning": "giỏi, sở trường",
    "han": "đắc ý ｜ 得:トク 意:イ",
    "example": "料理が得意です。",
    "translation": "Tôi giỏi nấu ăn."
  },
  {
    "id": 814,
    "page": 50,
    "word": "思い出",
    "reading": "おもいで",
    "meaning": "kỷ niệm",
    "han": "tư xuất ｜ 思:シ 出:シュツ・スイ",
    "example": "いい思い出です。",
    "translation": "Là kỷ niệm đẹp."
  },
  {
    "id": 815,
    "page": 50,
    "word": "悪魔",
    "reading": "あくま",
    "meaning": "ác quỷ",
    "han": "ác ma ｜ 悪:アク・オ 魔:マ",
    "example": "悪魔の話です。",
    "translation": "Là chuyện ác quỷ."
  },
  {
    "id": 816,
    "page": 50,
    "word": "新規",
    "reading": "しんき",
    "meaning": "mới",
    "han": "tân quy ｜ 新:シン 規:キ",
    "example": "新規の顧客です。",
    "translation": "Là khách hàng mới."
  },
  {
    "id": 817,
    "page": 50,
    "word": "業者",
    "reading": "ぎょうしゃ",
    "meaning": "nhà cung cấp, doanh nghiệp",
    "han": "nghiệp giả ｜ 業:ギョウ・ゴウ 者:シャ",
    "example": "業者に頼みます。",
    "translation": "Nhờ nhà cung cấp."
  },
  {
    "id": 818,
    "page": 50,
    "word": "演出",
    "reading": "えんしゅつ",
    "meaning": "dàn dựng",
    "han": "diễn xuất ｜ 演:エン 出:シュツ・スイ",
    "example": "舞台の演出です。",
    "translation": "Là dàn dựng sân khấu."
  },
  {
    "id": 819,
    "page": 51,
    "word": "発展",
    "reading": "はってん",
    "meaning": "phát triển",
    "han": "bát triển ｜ 発:ハツ・ホツ 展:テン",
    "example": "地域が発展しました。",
    "translation": "Địa phương đã phát triển."
  },
  {
    "id": 820,
    "page": 51,
    "word": "翻訳",
    "reading": "ほんやく",
    "meaning": "dịch",
    "han": "phiên dịch ｜ 翻:ホン・ハン 訳:ヤク",
    "example": "文章を翻訳します。",
    "translation": "Dịch văn bản."
  },
  {
    "id": 821,
    "page": 51,
    "word": "記載",
    "reading": "きさい",
    "meaning": "ghi chép",
    "han": "kí tái ｜ 記:キ 載:サイ",
    "example": "名前を記載します。",
    "translation": "Ghi tên."
  },
  {
    "id": 822,
    "page": 51,
    "word": "送料",
    "reading": "そうりょう",
    "meaning": "phí vận chuyển",
    "han": "tống liêu ｜ 送:ソウ 料:リョウ",
    "example": "送料は無料です。",
    "translation": "Phí vận chuyển miễn phí."
  },
  {
    "id": 823,
    "page": 51,
    "word": "速度",
    "reading": "そくど",
    "meaning": "tốc độ",
    "han": "tốc độ ｜ 速:ソク 度:ド・ト",
    "example": "速度を上げます。",
    "translation": "Tăng tốc độ."
  },
  {
    "id": 824,
    "page": 51,
    "word": "何故",
    "reading": "なぜ",
    "meaning": "tại sao",
    "han": "hà cố ｜ 何:カ 故:コ",
    "example": "何故ですか。",
    "translation": "Tại sao vậy?"
  },
  {
    "id": 825,
    "page": 51,
    "word": "使い方",
    "reading": "つかいかた",
    "meaning": "cách dùng",
    "han": "sử phương ｜ 使:シ 方:ホウ",
    "example": "使い方を教えます。",
    "translation": "Tôi chỉ cách dùng."
  },
  {
    "id": 826,
    "page": 51,
    "word": "傾向",
    "reading": "けいこう",
    "meaning": "xu hướng",
    "han": "khuynh hướng ｜ 傾:ケイ 向:コウ",
    "example": "増加の傾向です。",
    "translation": "Có xu hướng tăng."
  },
  {
    "id": 827,
    "page": 51,
    "word": "初め",
    "reading": "はじめ",
    "meaning": "đầu tiên",
    "han": "sơ ｜ 初:ショ",
    "example": "初めまして。",
    "translation": "Rất hân hạnh làm quen."
  },
  {
    "id": 828,
    "page": 51,
    "word": "制御",
    "reading": "せいぎょ",
    "meaning": "điều khiển",
    "han": "chế ngự ｜ 制:セイ 御:ギョ・ゴ",
    "example": "機械を制御します。",
    "translation": "Điều khiển máy."
  },
  {
    "id": 829,
    "page": 51,
    "word": "前後",
    "reading": "ぜんご",
    "meaning": "trước sau",
    "han": "tiền hậu ｜ 前:ゼン 後:ゴ・コウ",
    "example": "三時前後に来ます。",
    "translation": "Tôi đến khoảng ba giờ."
  },
  {
    "id": 830,
    "page": 51,
    "word": "午前",
    "reading": "ごぜん",
    "meaning": "buổi sáng",
    "han": "ngọ tiền ｜ 午:ゴ 前:ゼン",
    "example": "午前に会議があります。",
    "translation": "Buổi sáng có họp."
  },
  {
    "id": 831,
    "page": 51,
    "word": "大型",
    "reading": "おおがた",
    "meaning": "cỡ lớn",
    "han": "đại hình ｜ 大:ダイ・タイ 型:ケイ",
    "example": "大型の機械です。",
    "translation": "Là máy cỡ lớn."
  },
  {
    "id": 832,
    "page": 51,
    "word": "巨人",
    "reading": "きょじん",
    "meaning": "người khổng lồ",
    "han": "cự nhân ｜ 巨:キョ 人:ジン・ニン",
    "example": "巨人の話です。",
    "translation": "Là chuyện người khổng lồ."
  },
  {
    "id": 833,
    "page": 51,
    "word": "抵抗",
    "reading": "ていこう",
    "meaning": "kháng cự",
    "han": "để kháng ｜ 抵:テイ 抗:コウ",
    "example": "抵抗を感じます。",
    "translation": "Cảm thấy kháng cự."
  },
  {
    "id": 834,
    "page": 51,
    "word": "毎年",
    "reading": "まいとし",
    "meaning": "mỗi năm",
    "han": "mỗi niên ｜ 毎:マイ 年:ネン",
    "example": "毎年旅行します。",
    "translation": "Hằng năm tôi đi du lịch."
  },
  {
    "id": 835,
    "page": 51,
    "word": "王子",
    "reading": "おうじ",
    "meaning": "hoàng tử",
    "han": "vương tử ｜ 王:オウ・-ノウ 子:シ・ス",
    "example": "王子が登場します。",
    "translation": "Hoàng tử xuất hiện."
  },
  {
    "id": 836,
    "page": 51,
    "word": "疑問",
    "reading": "ぎもん",
    "meaning": "nghi vấn",
    "han": "nghi vấn ｜ 疑:ギ 問:モン",
    "example": "疑問があります。",
    "translation": "Tôi có thắc mắc."
  },
  {
    "id": 837,
    "page": 52,
    "word": "繰り返し",
    "reading": "くりかえし",
    "meaning": "lặp lại",
    "han": "sào phản ｜ 繰:ソウ 返:ヘン",
    "example": "繰り返し練習します。",
    "translation": "Luyện tập lặp đi lặp lại."
  },
  {
    "id": 838,
    "page": 52,
    "word": "自宅",
    "reading": "じたく",
    "meaning": "nhà riêng",
    "han": "tự trạch ｜ 自:ジ・シ 宅:タク",
    "example": "自宅で働きます。",
    "translation": "Làm việc tại nhà."
  },
  {
    "id": 839,
    "page": 52,
    "word": "臭い",
    "reading": "くさい",
    "meaning": "hôi",
    "han": "xú ｜ 臭:シュウ",
    "example": "臭いがします。",
    "translation": "Có mùi hôi."
  },
  {
    "id": 840,
    "page": 52,
    "word": "苦手",
    "reading": "にがて",
    "meaning": "không giỏi, ngại",
    "han": "khổ thủ ｜ 苦:ク 手:シュ・ズ",
    "example": "数学が苦手です。",
    "translation": "Tôi kém môn toán."
  },
  {
    "id": 841,
    "page": 52,
    "word": "やり方",
    "reading": "やりかた",
    "meaning": "cách làm",
    "han": "phương ｜ 方:ホウ",
    "example": "やり方を教えてください。",
    "translation": "Xin chỉ cách làm."
  },
  {
    "id": 842,
    "page": 52,
    "word": "体制",
    "reading": "たいせい",
    "meaning": "thể chế, cơ cấu",
    "han": "thể chế ｜ 体:タイ・テイ 制:セイ",
    "example": "新しい体制です。",
    "translation": "Là cơ cấu mới."
  },
  {
    "id": 843,
    "page": 52,
    "word": "兵器",
    "reading": "へいき",
    "meaning": "vũ khí",
    "han": "binh khí ｜ 兵:ヘイ・ヒョウ 器:キ",
    "example": "兵器の歴史です。",
    "translation": "Là lịch sử vũ khí."
  },
  {
    "id": 844,
    "page": 52,
    "word": "危機",
    "reading": "きき",
    "meaning": "khủng hoảng",
    "han": "nguy ky ｜ 危:キ 機:キ",
    "example": "危機を乗り越えます。",
    "translation": "Vượt qua khủng hoảng."
  },
  {
    "id": 845,
    "page": 52,
    "word": "妄想",
    "reading": "もうそう",
    "meaning": "ảo tưởng",
    "han": "vọng tưởng ｜ 妄:モウ・ボウ 想:ソウ・ソ",
    "example": "それは妄想です。",
    "translation": "Đó chỉ là ảo tưởng."
  },
  {
    "id": 846,
    "page": 52,
    "word": "悲しい",
    "reading": "かなしい",
    "meaning": "buồn",
    "han": "bi ｜ 悲:ヒ",
    "example": "悲しい話です。",
    "translation": "Là chuyện buồn."
  },
  {
    "id": 847,
    "page": 52,
    "word": "注文",
    "reading": "ちゅうもん",
    "meaning": "đặt hàng",
    "han": "chú văn ｜ 注:チュウ 文:ブン・モン",
    "example": "料理を注文します。",
    "translation": "Gọi món."
  },
  {
    "id": 848,
    "page": 52,
    "word": "独自",
    "reading": "どくじ",
    "meaning": "riêng biệt",
    "han": "độc tự ｜ 独:ドク・トク 自:ジ・シ",
    "example": "独自の方法です。",
    "translation": "Là phương pháp riêng."
  },
  {
    "id": 849,
    "page": 52,
    "word": "生物",
    "reading": "せいぶつ",
    "meaning": "sinh vật",
    "han": "sanh vật ｜ 生:セイ・ショウ 物:ブツ・モツ",
    "example": "生物を学びます。",
    "translation": "Học sinh vật."
  },
  {
    "id": 850,
    "page": 52,
    "word": "発行",
    "reading": "はっこう",
    "meaning": "phát hành",
    "han": "bát hành ｜ 発:ハツ・ホツ 行:コウ・ギョウ",
    "example": "書類を発行します。",
    "translation": "Phát hành giấy tờ."
  },
  {
    "id": 851,
    "page": 52,
    "word": "監視",
    "reading": "かんし",
    "meaning": "giám sát",
    "han": "giam thị ｜ 監:カン 視:シ",
    "example": "状況を監視します。",
    "translation": "Giám sát tình hình."
  },
  {
    "id": 852,
    "page": 52,
    "word": "確率",
    "reading": "かくりつ",
    "meaning": "xác suất",
    "han": "xác suất ｜ 確:カク・コウ 率:ソツ・リツ",
    "example": "確率が高いです。",
    "translation": "Xác suất cao."
  },
  {
    "id": 853,
    "page": 52,
    "word": "神経",
    "reading": "しんけい",
    "meaning": "thần kinh",
    "han": "thần kinh ｜ 神:シン・ジン 経:ケイ・キョウ",
    "example": "神経を使います。",
    "translation": "Phải căng thẳng thần kinh."
  },
  {
    "id": 854,
    "page": 52,
    "word": "診断",
    "reading": "しんだん",
    "meaning": "chẩn đoán",
    "han": "chẩn đoán ｜ 診:シン 断:ダン",
    "example": "診断を受けます。",
    "translation": "Được chẩn đoán."
  },
  {
    "id": 855,
    "page": 53,
    "word": "身長",
    "reading": "しんちょう",
    "meaning": "chiều cao",
    "han": "thân trường ｜ 身:シン 長:チョウ",
    "example": "身長を測ります。",
    "translation": "Đo chiều cao."
  },
  {
    "id": 856,
    "page": 53,
    "word": "野菜",
    "reading": "やさい",
    "meaning": "rau",
    "han": "dã thái ｜ 野:ヤ・ショ 菜:サイ",
    "example": "野菜を食べます。",
    "translation": "Ăn rau."
  },
  {
    "id": 857,
    "page": 53,
    "word": "防衛",
    "reading": "ぼうえい",
    "meaning": "phòng vệ",
    "han": "phòng vệ ｜ 防:ボウ 衛:エイ・エ",
    "example": "防衛について学びます。",
    "translation": "Học về phòng vệ."
  },
  {
    "id": 858,
    "page": 53,
    "word": "お母さん",
    "reading": "おかあさん",
    "meaning": "mẹ",
    "han": "mẫu ｜ 母:ボ",
    "example": "お母さんに電話します。",
    "translation": "Tôi gọi cho mẹ."
  },
  {
    "id": 859,
    "page": 53,
    "word": "上手",
    "reading": "じょうず",
    "meaning": "giỏi",
    "han": "thượng thủ ｜ 上:ジョウ・ショウ 手:シュ・ズ",
    "example": "日本語が上手です。",
    "translation": "Giỏi tiếng Nhật."
  },
  {
    "id": 860,
    "page": 53,
    "word": "共通",
    "reading": "きょうつう",
    "meaning": "chung",
    "han": "cộng thông ｜ 共:キョウ 通:ツウ・ツ",
    "example": "共通の趣味があります。",
    "translation": "Có sở thích chung."
  },
  {
    "id": 861,
    "page": 53,
    "word": "具体",
    "reading": "ぐたい",
    "meaning": "cụ thể",
    "han": "cụ thể ｜ 具:グ 体:タイ・テイ",
    "example": "具体的に説明します。",
    "translation": "Giải thích cụ thể."
  },
  {
    "id": 862,
    "page": 53,
    "word": "別れ",
    "reading": "わかれ",
    "meaning": "chia tay",
    "han": "biệt ｜ 別:ベツ",
    "example": "別れの挨拶です。",
    "translation": "Là lời chào tạm biệt."
  },
  {
    "id": 863,
    "page": 53,
    "word": "台風",
    "reading": "たいふう",
    "meaning": "bão",
    "han": "thai phong ｜ 台:ダイ・タイ 風:フウ・フ",
    "example": "台風が来ます。",
    "translation": "Bão đang đến."
  },
  {
    "id": 864,
    "page": 53,
    "word": "否定",
    "reading": "ひてい",
    "meaning": "phủ định",
    "han": "phủ định ｜ 否:ヒ 定:テイ・ジョウ",
    "example": "意見を否定しません。",
    "translation": "Không phủ định ý kiến."
  },
  {
    "id": 865,
    "page": 53,
    "word": "回転",
    "reading": "かいてん",
    "meaning": "quay",
    "han": "hồi chuyển ｜ 回:カイ・エ 転:テン",
    "example": "タイヤが回転します。",
    "translation": "Bánh xe quay."
  },
  {
    "id": 866,
    "page": 53,
    "word": "将軍",
    "reading": "しょうぐん",
    "meaning": "tướng quân",
    "han": "thương quân ｜ 将:ショウ・ソウ 軍:グン",
    "example": "将軍の話です。",
    "translation": "Là chuyện tướng quân."
  },
  {
    "id": 867,
    "page": 53,
    "word": "崩壊",
    "reading": "ほうかい",
    "meaning": "sụp đổ",
    "han": "băng hoại ｜ 崩:ホウ 壊:カイ・エ",
    "example": "建物が崩壊しました。",
    "translation": "Tòa nhà đã sập."
  },
  {
    "id": 868,
    "page": 53,
    "word": "強制",
    "reading": "きょうせい",
    "meaning": "cưỡng chế",
    "han": "cường chế ｜ 強:キョウ・ゴウ 制:セイ",
    "example": "強制はしません。",
    "translation": "Không cưỡng ép."
  },
  {
    "id": 869,
    "page": 53,
    "word": "当選",
    "reading": "とうせん",
    "meaning": "trúng cử, trúng thưởng",
    "han": "đang tuyển ｜ 当:トウ 選:セン",
    "example": "抽選に当選しました。",
    "translation": "Tôi trúng thưởng."
  },
  {
    "id": 870,
    "page": 53,
    "word": "感動",
    "reading": "かんどう",
    "meaning": "cảm động",
    "han": "cảm động ｜ 感:カン 動:ドウ",
    "example": "感動しました。",
    "translation": "Tôi cảm động."
  },
  {
    "id": 871,
    "page": 53,
    "word": "憲法",
    "reading": "けんぽう",
    "meaning": "hiến pháp",
    "han": "hiến pháp ｜ 憲:ケン 法:ホウ・ハッ",
    "example": "憲法を学びます。",
    "translation": "Học hiến pháp."
  },
  {
    "id": 872,
    "page": 53,
    "word": "指示",
    "reading": "しじ",
    "meaning": "chỉ thị",
    "han": "chỉ kì ｜ 指:シ 示:ジ・シ",
    "example": "指示に従います。",
    "translation": "Làm theo chỉ thị."
  },
  {
    "id": 873,
    "page": 54,
    "word": "教会",
    "reading": "きょうかい",
    "meaning": "nhà thờ",
    "han": "giáo cối ｜ 教:キョウ 会:カイ・エ",
    "example": "教会に行きます。",
    "translation": "Tôi đi nhà thờ."
  },
  {
    "id": 874,
    "page": 54,
    "word": "本格",
    "reading": "ほんかく",
    "meaning": "chính thống",
    "han": "bổn cách ｜ 本:ホン 格:カク・コウ",
    "example": "本格的に始めます。",
    "translation": "Bắt đầu nghiêm túc."
  },
  {
    "id": 875,
    "page": 54,
    "word": "特殊",
    "reading": "とくしゅ",
    "meaning": "đặc biệt",
    "han": "đặc thù ｜ 特:トク 殊:シュ",
    "example": "特殊な技術です。",
    "translation": "Là kỹ thuật đặc biệt."
  },
  {
    "id": 876,
    "page": 54,
    "word": "現地",
    "reading": "げんち",
    "meaning": "tại chỗ, địa phương",
    "han": "hiện địa ｜ 現:ゲン 地:チ・ジ",
    "example": "現地に行きます。",
    "translation": "Tôi đến tại chỗ."
  },
  {
    "id": 877,
    "page": 54,
    "word": "神戸",
    "reading": "こうべ",
    "meaning": "Kobe",
    "han": "thần hộ ｜ 神:シン・ジン 戸:コ",
    "example": "神戸に行きます。",
    "translation": "Tôi đi Kobe."
  },
  {
    "id": 878,
    "page": 54,
    "word": "職員",
    "reading": "しょくいん",
    "meaning": "nhân viên",
    "han": "chức viên ｜ 職:ショク・ソク 員:イン",
    "example": "職員が対応します。",
    "translation": "Nhân viên sẽ xử lý."
  },
  {
    "id": 879,
    "page": 54,
    "word": "装備",
    "reading": "そうび",
    "meaning": "trang bị",
    "han": "trang bị ｜ 装:ソウ・ショウ 備:ビ",
    "example": "装備を確認します。",
    "translation": "Kiểm tra trang bị."
  },
  {
    "id": 880,
    "page": 54,
    "word": "負担",
    "reading": "ふたん",
    "meaning": "gánh nặng",
    "han": "phụ đam ｜ 負:フ 担:タン",
    "example": "負担を減らします。",
    "translation": "Giảm gánh nặng."
  },
  {
    "id": 881,
    "page": 54,
    "word": "貴方",
    "reading": "あなた",
    "meaning": "bạn, anh/chị",
    "han": "quý phương ｜ 貴:キ 方:ホウ",
    "example": "貴方に会いたいです。",
    "translation": "Tôi muốn gặp bạn."
  },
  {
    "id": 882,
    "page": 54,
    "word": "酷い",
    "reading": "ひどい",
    "meaning": "tồi tệ",
    "han": "khốc ｜ 酷:コク",
    "example": "酷い天気です。",
    "translation": "Thời tiết tồi tệ."
  },
  {
    "id": 883,
    "page": 54,
    "word": "ご飯",
    "reading": "ごはん",
    "meaning": "cơm, bữa ăn",
    "han": "phạn ｜ 飯:ハン",
    "example": "ご飯を食べます。",
    "translation": "Tôi ăn cơm."
  },
  {
    "id": 884,
    "page": 54,
    "word": "一生",
    "reading": "いっしょう",
    "meaning": "cả đời",
    "han": "nhất sanh ｜ 一:イチ・イツ 生:セイ・ショウ",
    "example": "一生の思い出です。",
    "translation": "Là kỷ niệm cả đời."
  },
  {
    "id": 885,
    "page": 54,
    "word": "上司",
    "reading": "じょうし",
    "meaning": "cấp trên",
    "han": "thượng ti ｜ 上:ジョウ・ショウ 司:シ",
    "example": "上司に報告します。",
    "translation": "Tôi báo cáo cấp trên."
  },
  {
    "id": 886,
    "page": 54,
    "word": "今夜",
    "reading": "こんや",
    "meaning": "tối nay",
    "han": "kim dạ ｜ 今:コン・キン 夜:ヤ",
    "example": "今夜会いましょう。",
    "translation": "Tối nay gặp nhau nhé."
  },
  {
    "id": 887,
    "page": 54,
    "word": "体重",
    "reading": "たいじゅう",
    "meaning": "cân nặng",
    "han": "thể trọng ｜ 体:タイ・テイ 重:ジュウ・チョウ",
    "example": "体重を測ります。",
    "translation": "Đo cân nặng."
  },
  {
    "id": 888,
    "page": 54,
    "word": "共同",
    "reading": "きょうどう",
    "meaning": "cùng, chung",
    "han": "cộng đồng ｜ 共:キョウ 同:ドウ",
    "example": "共同で作業します。",
    "translation": "Làm việc chung."
  },
  {
    "id": 889,
    "page": 54,
    "word": "去年",
    "reading": "きょねん",
    "meaning": "năm ngoái",
    "han": "khứ niên ｜ 去:キョ・コ 年:ネン",
    "example": "去年入社しました。",
    "translation": "Năm ngoái tôi vào công ty."
  },
  {
    "id": 890,
    "page": 54,
    "word": "命令",
    "reading": "めいれい",
    "meaning": "mệnh lệnh",
    "han": "mệnh lệnh ｜ 命:メイ・ミョウ 令:レイ",
    "example": "命令に従います。",
    "translation": "Làm theo mệnh lệnh."
  },
  {
    "id": 891,
    "page": 55,
    "word": "奴隷",
    "reading": "どれい",
    "meaning": "nô lệ",
    "han": "nô lệ ｜ 奴:ド 隷:レイ",
    "example": "奴隷の歴史です。",
    "translation": "Là lịch sử chế độ nô lệ."
  },
  {
    "id": 892,
    "page": 55,
    "word": "当日",
    "reading": "とうじつ",
    "meaning": "ngày hôm đó",
    "han": "đang nhật ｜ 当:トウ 日:ニチ・ジツ",
    "example": "当日は雨でした。",
    "translation": "Hôm đó trời mưa."
  },
  {
    "id": 893,
    "page": 55,
    "word": "戦略",
    "reading": "せんりゃく",
    "meaning": "chiến lược",
    "han": "khuyết lược ｜ 戦:セン 略:リャク",
    "example": "戦略を立てます。",
    "translation": "Lập chiến lược."
  },
  {
    "id": 894,
    "page": 55,
    "word": "理想",
    "reading": "りそう",
    "meaning": "lý tưởng",
    "han": "lý tưởng ｜ 理:リ 想:ソウ・ソ",
    "example": "理想を持ちます。",
    "translation": "Có lý tưởng."
  },
  {
    "id": 895,
    "page": 55,
    "word": "甘い",
    "reading": "あまい",
    "meaning": "ngọt",
    "han": "cam ｜ 甘:カン",
    "example": "このお菓子は甘いです。",
    "translation": "Cái bánh này ngọt."
  },
  {
    "id": 896,
    "page": 55,
    "word": "空港",
    "reading": "くうこう",
    "meaning": "sân bay",
    "han": "không cảng ｜ 空:クウ 港:コウ",
    "example": "空港に着きました。",
    "translation": "Tôi đã đến sân bay."
  },
  {
    "id": 897,
    "page": 55,
    "word": "見た目",
    "reading": "みため",
    "meaning": "vẻ ngoài",
    "han": "kiến mục ｜ 見:ケン 目:モク・ボク",
    "example": "見た目が大切です。",
    "translation": "Vẻ ngoài quan trọng."
  },
  {
    "id": 898,
    "page": 55,
    "word": "違反",
    "reading": "いはん",
    "meaning": "vi phạm",
    "han": "vi phản ｜ 違:イ 反:ハン・ホン",
    "example": "規則に違反します。",
    "translation": "Vi phạm quy tắc."
  },
  {
    "id": 899,
    "page": 55,
    "word": "都合",
    "reading": "つごう",
    "meaning": "sự thuận tiện",
    "han": "đô hợp ｜ 都:ト・ツ 合:ゴウ・ガッ",
    "example": "ご都合はいかがですか。",
    "translation": "Anh/chị có tiện không?"
  },
  {
    "id": 900,
    "page": 55,
    "word": "食品",
    "reading": "しょくひん",
    "meaning": "thực phẩm",
    "han": "thực phẩm ｜ 食:ショク・ジキ 品:ヒン・ホン",
    "example": "食品を売ります。",
    "translation": "Bán thực phẩm."
  },
  {
    "id": 901,
    "page": 56,
    "word": "人数",
    "reading": "にんずう",
    "meaning": "số người",
    "han": "nhân sác ｜ 人:ジン・ニン 数:スウ・ス",
    "example": "人数を確認します。",
    "translation": "Kiểm tra số người."
  },
  {
    "id": 902,
    "page": 56,
    "word": "協会",
    "reading": "きょうかい",
    "meaning": "hiệp hội",
    "han": "hiệp cối ｜ 協:キョウ 会:カイ・エ",
    "example": "協会に入ります。",
    "translation": "Gia nhập hiệp hội."
  },
  {
    "id": 903,
    "page": 56,
    "word": "単純",
    "reading": "たんじゅん",
    "meaning": "đơn giản",
    "han": "đan thuần ｜ 単:タン 純:ジュン",
    "example": "単純な問題です。",
    "translation": "Là vấn đề đơn giản."
  },
  {
    "id": 904,
    "page": 56,
    "word": "困難",
    "reading": "こんなん",
    "meaning": "khó khăn",
    "han": "khốn nan ｜ 困:コン 難:ナン",
    "example": "困難を乗り越えます。",
    "translation": "Vượt qua khó khăn."
  },
  {
    "id": 905,
    "page": 56,
    "word": "性能",
    "reading": "せいのう",
    "meaning": "tính năng, hiệu suất",
    "han": "tính năng ｜ 性:セイ・ショウ 能:ノウ",
    "example": "性能が高いです。",
    "translation": "Hiệu suất cao."
  },
  {
    "id": 906,
    "page": 56,
    "word": "拒否",
    "reading": "きょひ",
    "meaning": "từ chối",
    "han": "cự phủ ｜ 拒:キョ・ゴ 否:ヒ",
    "example": "要求を拒否します。",
    "translation": "Từ chối yêu cầu."
  },
  {
    "id": 907,
    "page": 56,
    "word": "新潟",
    "reading": "にいがた",
    "meaning": "Niigata",
    "han": "tân tích ｜ 新:シン 潟:セキ",
    "example": "新潟に行きます。",
    "translation": "Tôi đi Niigata."
  },
  {
    "id": 908,
    "page": 56,
    "word": "札幌",
    "reading": "さっぽろ",
    "meaning": "Sapporo",
    "han": "trát hoảng ｜ 札:サツ 幌:コウ",
    "example": "札幌は寒いです。",
    "translation": "Sapporo lạnh."
  },
  {
    "id": 909,
    "page": 56,
    "word": "独立",
    "reading": "どくりつ",
    "meaning": "độc lập",
    "han": "độc lập ｜ 独:ドク・トク 立:リツ・リュウ",
    "example": "独立して働きます。",
    "translation": "Làm việc độc lập."
  },
  {
    "id": 910,
    "page": 56,
    "word": "理論",
    "reading": "りろん",
    "meaning": "lý thuyết",
    "han": "lý luận ｜ 理:リ 論:ロン",
    "example": "理論を学びます。",
    "translation": "Học lý thuyết."
  },
  {
    "id": 911,
    "page": 56,
    "word": "真実",
    "reading": "しんじつ",
    "meaning": "sự thật",
    "han": "chân thực ｜ 真:シン 実:ジツ・シツ",
    "example": "真実を話します。",
    "translation": "Nói sự thật."
  },
  {
    "id": 912,
    "page": 56,
    "word": "積極",
    "reading": "せっきょく",
    "meaning": "tích cực, chủ động",
    "han": "tích cực ｜ 積:セキ 極:キョク・ゴク",
    "example": "積極的に参加します。",
    "translation": "Tích cực tham gia."
  },
  {
    "id": 913,
    "page": 56,
    "word": "素材",
    "reading": "そざい",
    "meaning": "nguyên liệu, chất liệu",
    "han": "tố tài ｜ 素:ソ・ス 材:ザイ",
    "example": "素材を選びます。",
    "translation": "Chọn nguyên liệu."
  },
  {
    "id": 914,
    "page": 56,
    "word": "見かけ",
    "reading": "みかけ",
    "meaning": "vẻ bề ngoài",
    "han": "kiến ｜ 見:ケン",
    "example": "見かけによりません。",
    "translation": "Không thể đánh giá qua vẻ ngoài."
  },
  {
    "id": 915,
    "page": 56,
    "word": "解放",
    "reading": "かいほう",
    "meaning": "giải phóng",
    "han": "giải phóng ｜ 解:カイ・ゲ 放:ホウ",
    "example": "窓を解放します。",
    "translation": "Mở rộng cửa sổ."
  },
  {
    "id": 916,
    "page": 56,
    "word": "赤ちゃん",
    "reading": "あかちゃん",
    "meaning": "em bé",
    "han": "xích ｜ 赤:セキ・シャク",
    "example": "赤ちゃんが泣いています。",
    "translation": "Em bé đang khóc."
  },
  {
    "id": 917,
    "page": 56,
    "word": "適当",
    "reading": "てきとう",
    "meaning": "thích hợp; qua loa",
    "han": "thích đang ｜ 適:テキ 当:トウ",
    "example": "適当な時間です。",
    "translation": "Là thời gian thích hợp."
  },
  {
    "id": 918,
    "page": 56,
    "word": "金融",
    "reading": "きんゆう",
    "meaning": "tài chính",
    "han": "kim dung ｜ 金:キン・コン 融:ユウ",
    "example": "金融の仕事です。",
    "translation": "Là công việc tài chính."
  },
  {
    "id": 919,
    "page": 57,
    "word": "関心",
    "reading": "かんしん",
    "meaning": "quan tâm",
    "han": "quan tâm ｜ 関:カン 心:シン",
    "example": "関心があります。",
    "translation": "Tôi quan tâm."
  },
  {
    "id": 920,
    "page": 57,
    "word": "上位",
    "reading": "じょうい",
    "meaning": "thứ hạng cao",
    "han": "thượng vị ｜ 上:ジョウ・ショウ 位:イ",
    "example": "上位に入りました。",
    "translation": "Đã lọt top đầu."
  },
  {
    "id": 921,
    "page": 57,
    "word": "不可能",
    "reading": "ふかのう",
    "meaning": "không thể",
    "han": "bất khả năng ｜ 不:フ・ブ 可:カ・コク 能:ノウ",
    "example": "それは不可能です。",
    "translation": "Điều đó là không thể."
  },
  {
    "id": 922,
    "page": 57,
    "word": "予算",
    "reading": "よさん",
    "meaning": "ngân sách",
    "han": "dư toán ｜ 予:ヨ・シャ 算:サン",
    "example": "予算を決めます。",
    "translation": "Quyết định ngân sách."
  },
  {
    "id": 923,
    "page": 57,
    "word": "会長",
    "reading": "かいちょう",
    "meaning": "chủ tịch hội",
    "han": "cối trường ｜ 会:カイ・エ 長:チョウ",
    "example": "会長が挨拶します。",
    "translation": "Chủ tịch phát biểu."
  },
  {
    "id": 924,
    "page": 57,
    "word": "作家",
    "reading": "さっか",
    "meaning": "nhà văn",
    "han": "tác gia ｜ 作:サク・サ 家:カ・ケ",
    "example": "有名な作家です。",
    "translation": "Là nhà văn nổi tiếng."
  },
  {
    "id": 925,
    "page": 57,
    "word": "保証",
    "reading": "ほしょう",
    "meaning": "bảo đảm",
    "han": "bảo chứng ｜ 保:ホ・ホウ 証:ショウ",
    "example": "品質を保証します。",
    "translation": "Bảo đảm chất lượng."
  },
  {
    "id": 926,
    "page": 57,
    "word": "取材",
    "reading": "しゅざい",
    "meaning": "lấy tin, phỏng vấn",
    "han": "thủ tài ｜ 取:シュ 材:ザイ",
    "example": "取材を受けます。",
    "translation": "Được phỏng vấn."
  },
  {
    "id": 927,
    "page": 57,
    "word": "学習",
    "reading": "がくしゅう",
    "meaning": "học tập",
    "han": "học tập ｜ 学:ガク 習:シュウ・ジュ",
    "example": "日本語を学習します。",
    "translation": "Học tiếng Nhật."
  },
  {
    "id": 928,
    "page": 57,
    "word": "完璧",
    "reading": "かんぺき",
    "meaning": "hoàn hảo",
    "han": "hoàn bích ｜ 完:カン 璧:ヘキ",
    "example": "完璧な準備です。",
    "translation": "Là chuẩn bị hoàn hảo."
  },
  {
    "id": 929,
    "page": 57,
    "word": "容疑",
    "reading": "ようぎ",
    "meaning": "tình nghi",
    "han": "dong nghi ｜ 容:ヨウ 疑:ギ",
    "example": "容疑を否定しました。",
    "translation": "Đã phủ nhận nghi vấn."
  },
  {
    "id": 930,
    "page": 57,
    "word": "役割",
    "reading": "やくわり",
    "meaning": "vai trò",
    "han": "dịch cát ｜ 役:ヤク・エキ 割:カツ",
    "example": "役割を決めます。",
    "translation": "Phân vai trò."
  },
  {
    "id": 931,
    "page": 57,
    "word": "後悔",
    "reading": "こうかい",
    "meaning": "hối hận",
    "han": "hậu hối ｜ 後:ゴ・コウ 悔:カイ",
    "example": "後悔していません。",
    "translation": "Tôi không hối hận."
  },
  {
    "id": 932,
    "page": 57,
    "word": "挨拶",
    "reading": "あいさつ",
    "meaning": "chào hỏi",
    "han": "ai tạt ｜ 挨:アイ 拶:サツ",
    "example": "丁寧に挨拶します。",
    "translation": "Chào hỏi lịch sự."
  },
  {
    "id": 933,
    "page": 57,
    "word": "正義",
    "reading": "せいぎ",
    "meaning": "chính nghĩa",
    "han": "chánh nghĩa ｜ 正:セイ・ショウ 義:ギ",
    "example": "正義を信じます。",
    "translation": "Tin vào chính nghĩa."
  },
  {
    "id": 934,
    "page": 57,
    "word": "決して",
    "reading": "けっして",
    "meaning": "tuyệt đối không",
    "han": "quyết ｜ 決:ケツ",
    "example": "決して忘れません。",
    "translation": "Tuyệt đối không quên."
  },
  {
    "id": 935,
    "page": 57,
    "word": "災害",
    "reading": "さいがい",
    "meaning": "thiên tai",
    "han": "tai hại ｜ 災:サイ 害:ガイ",
    "example": "災害に備えます。",
    "translation": "Chuẩn bị cho thiên tai."
  },
  {
    "id": 936,
    "page": 57,
    "word": "真面目",
    "reading": "まじめ",
    "meaning": "nghiêm túc, chăm chỉ",
    "han": "chân diện mục ｜ 真:シン 面:メン・ベン 目:モク・ボク",
    "example": "真面目に働きます。",
    "translation": "Làm việc nghiêm túc."
  },
  {
    "id": 937,
    "page": 58,
    "word": "衝撃",
    "reading": "しょうげき",
    "meaning": "cú sốc",
    "han": "xung kích ｜ 衝:ショウ 撃:ゲキ",
    "example": "衝撃を受けました。",
    "translation": "Tôi bị sốc."
  },
  {
    "id": 938,
    "page": 58,
    "word": "課題",
    "reading": "かだい",
    "meaning": "bài tập, vấn đề cần giải quyết",
    "han": "khóa đề ｜ 課:カ 題:ダイ",
    "example": "課題を提出します。",
    "translation": "Nộp bài tập."
  },
  {
    "id": 939,
    "page": 58,
    "word": "避難",
    "reading": "ひなん",
    "meaning": "sơ tán",
    "han": "tị nan ｜ 避:ヒ 難:ナン",
    "example": "安全な場所に避難します。",
    "translation": "Sơ tán đến nơi an toàn."
  },
  {
    "id": 940,
    "page": 58,
    "word": "野郎",
    "reading": "やろう",
    "meaning": "thằng (thô)",
    "han": "dã lang ｜ 野:ヤ・ショ 郎:ロウ・リョウ",
    "example": "あの野郎は誰だ。",
    "translation": "Thằng đó là ai?"
  },
  {
    "id": 941,
    "page": 58,
    "word": "面白",
    "reading": "おもしろ",
    "meaning": "thú vị (gốc từ)",
    "han": "diện bạch ｜ 面:メン・ベン 白:ハク・ビャク",
    "example": "面白がります。",
    "translation": "Thấy thú vị."
  },
  {
    "id": 942,
    "page": 58,
    "word": "革命",
    "reading": "かくめい",
    "meaning": "cách mạng",
    "han": "cách mệnh ｜ 革:カク 命:メイ・ミョウ",
    "example": "革命が起きました。",
    "translation": "Cách mạng đã xảy ra."
  },
  {
    "id": 943,
    "page": 58,
    "word": "何とか",
    "reading": "なんとか",
    "meaning": "bằng cách nào đó",
    "han": "hà ｜ 何:カ",
    "example": "何とかなります。",
    "translation": "Rồi sẽ ổn."
  },
  {
    "id": 944,
    "page": 58,
    "word": "勤務",
    "reading": "きんむ",
    "meaning": "làm việc",
    "han": "cần vụ ｜ 勤:キン・ゴン 務:ム",
    "example": "九時から勤務します。",
    "translation": "Làm việc từ chín giờ."
  },
  {
    "id": 945,
    "page": 58,
    "word": "同意",
    "reading": "どうい",
    "meaning": "đồng ý",
    "han": "đồng ý ｜ 同:ドウ 意:イ",
    "example": "同意します。",
    "translation": "Tôi đồng ý."
  },
  {
    "id": 946,
    "page": 58,
    "word": "向こう",
    "reading": "むこう",
    "meaning": "phía bên kia",
    "han": "hướng ｜ 向:コウ",
    "example": "向こうに見えます。",
    "translation": "Nhìn thấy ở phía bên kia."
  },
  {
    "id": 947,
    "page": 58,
    "word": "地区",
    "reading": "ちく",
    "meaning": "khu vực",
    "han": "địa âu ｜ 地:チ・ジ 区:ク・オウ",
    "example": "この地区に住んでいます。",
    "translation": "Tôi sống ở khu vực này."
  },
  {
    "id": 948,
    "page": 58,
    "word": "天才",
    "reading": "てんさい",
    "meaning": "thiên tài",
    "han": "thiên tài ｜ 天:テン 才:サイ",
    "example": "天才と呼ばれます。",
    "translation": "Được gọi là thiên tài."
  },
  {
    "id": 949,
    "page": 58,
    "word": "天気",
    "reading": "てんき",
    "meaning": "thời tiết",
    "han": "thiên khí ｜ 天:テン 気:キ・ケ",
    "example": "今日の天気はいいです。",
    "translation": "Hôm nay thời tiết đẹp."
  },
  {
    "id": 950,
    "page": 58,
    "word": "奴ら",
    "reading": "やつら",
    "meaning": "bọn chúng",
    "han": "nô ｜ 奴:ド",
    "example": "奴らが来ました。",
    "translation": "Bọn chúng đã đến."
  },
  {
    "id": 951,
    "page": 58,
    "word": "実況",
    "reading": "じっきょう",
    "meaning": "tường thuật trực tiếp",
    "han": "thực huống ｜ 実:ジツ・シツ 況:キョウ",
    "example": "試合を実況します。",
    "translation": "Tường thuật trận đấu."
  },
  {
    "id": 952,
    "page": 58,
    "word": "寒い",
    "reading": "さむい",
    "meaning": "lạnh",
    "han": "hàn ｜ 寒:カン",
    "example": "今日は寒いです。",
    "translation": "Hôm nay lạnh."
  },
  {
    "id": 953,
    "page": 58,
    "word": "彼氏",
    "reading": "かれし",
    "meaning": "bạn trai",
    "han": "bỉ thị ｜ 彼:ヒ 氏:シ",
    "example": "彼氏がいます。",
    "translation": "Tôi có bạn trai."
  },
  {
    "id": 954,
    "page": 58,
    "word": "恐怖",
    "reading": "きょうふ",
    "meaning": "nỗi sợ",
    "han": "khủng phố ｜ 恐:キョウ 怖:フ・ホ",
    "example": "恐怖を感じます。",
    "translation": "Cảm thấy sợ hãi."
  },
  {
    "id": 955,
    "page": 59,
    "word": "整備",
    "reading": "せいび",
    "meaning": "bảo trì, chuẩn bị",
    "han": "chỉnh bị ｜ 整:セイ 備:ビ",
    "example": "道路を整備します。",
    "translation": "Bảo trì đường."
  },
  {
    "id": 956,
    "page": 59,
    "word": "有効",
    "reading": "ゆうこう",
    "meaning": "có hiệu lực",
    "han": "hữu hiệu ｜ 有:ユウ・ウ 効:コウ",
    "example": "有効期限です。",
    "translation": "Là thời hạn hiệu lực."
  },
  {
    "id": 957,
    "page": 59,
    "word": "標準",
    "reading": "ひょうじゅん",
    "meaning": "tiêu chuẩn",
    "han": "tiêu chuẩn ｜ 標:ヒョウ 準:ジュン",
    "example": "標準の設定です。",
    "translation": "Là cài đặt tiêu chuẩn."
  },
  {
    "id": 958,
    "page": 59,
    "word": "特集",
    "reading": "とくしゅう",
    "meaning": "chuyên đề",
    "han": "đặc tập ｜ 特:トク 集:シュウ",
    "example": "雑誌の特集です。",
    "translation": "Là chuyên đề tạp chí."
  },
  {
    "id": 959,
    "page": 59,
    "word": "白い",
    "reading": "しろい",
    "meaning": "trắng",
    "han": "bạch ｜ 白:ハク・ビャク",
    "example": "白い服を着ます。",
    "translation": "Mặc đồ trắng."
  },
  {
    "id": 960,
    "page": 59,
    "word": "育成",
    "reading": "いくせい",
    "meaning": "nuôi dưỡng, đào tạo",
    "han": "dục thành ｜ 育:イク 成:セイ・ジョウ",
    "example": "人材を育成します。",
    "translation": "Đào tạo nhân tài."
  },
  {
    "id": 961,
    "page": 59,
    "word": "芸術",
    "reading": "げいじゅつ",
    "meaning": "nghệ thuật",
    "han": "vân thuật ｜ 芸:ゲイ・ウン 術:ジュツ",
    "example": "芸術を学びます。",
    "translation": "Học nghệ thuật."
  },
  {
    "id": 962,
    "page": 59,
    "word": "解散",
    "reading": "かいさん",
    "meaning": "giải tán",
    "han": "giải tán ｜ 解:カイ・ゲ 散:サン",
    "example": "会議が解散しました。",
    "translation": "Cuộc họp đã giải tán."
  },
  {
    "id": 963,
    "page": 59,
    "word": "車両",
    "reading": "しゃりょう",
    "meaning": "phương tiện",
    "han": "xa lạng ｜ 車:シャ 両:リョウ",
    "example": "車両を点検します。",
    "translation": "Kiểm tra phương tiện."
  },
  {
    "id": 964,
    "page": 59,
    "word": "高校生",
    "reading": "こうこうせい",
    "meaning": "học sinh cấp ba",
    "han": "cao giáo sanh ｜ 高:コウ 校:コウ・キョウ 生:セイ・ショウ",
    "example": "高校生が勉強しています。",
    "translation": "Học sinh cấp ba đang học."
  },
  {
    "id": 965,
    "page": 59,
    "word": "一時",
    "reading": "いちじ",
    "meaning": "một lúc, tạm thời",
    "han": "nhất thì ｜ 一:イチ・イツ 時:ジ",
    "example": "一時中止します。",
    "translation": "Tạm dừng."
  },
  {
    "id": 966,
    "page": 59,
    "word": "一瞬",
    "reading": "いっしゅん",
    "meaning": "một khoảnh khắc",
    "han": "nhất thuấn ｜ 一:イチ・イツ 瞬:シュン",
    "example": "一瞬で終わりました。",
    "translation": "Kết thúc trong khoảnh khắc."
  },
  {
    "id": 967,
    "page": 59,
    "word": "世の中",
    "reading": "よのなか",
    "meaning": "xã hội, thế gian",
    "han": "thế trung ｜ 世:セイ・セ 中:チュウ",
    "example": "世の中は変わります。",
    "translation": "Xã hội thay đổi."
  },
  {
    "id": 968,
    "page": 59,
    "word": "世界中",
    "reading": "せかいじゅう",
    "meaning": "khắp thế giới",
    "han": "thế giới trung ｜ 世:セイ・セ 界:カイ 中:チュウ",
    "example": "世界中を旅します。",
    "translation": "Du lịch khắp thế giới."
  },
  {
    "id": 969,
    "page": 59,
    "word": "両親",
    "reading": "りょうしん",
    "meaning": "bố mẹ",
    "han": "lạng thân ｜ 両:リョウ 親:シン",
    "example": "両親は元気です。",
    "translation": "Bố mẹ tôi khỏe."
  },
  {
    "id": 970,
    "page": 59,
    "word": "今週",
    "reading": "こんしゅう",
    "meaning": "tuần này",
    "han": "kim chu ｜ 今:コン・キン 週:シュウ",
    "example": "今週は忙しいです。",
    "translation": "Tuần này bận."
  },
  {
    "id": 971,
    "page": 59,
    "word": "元々",
    "reading": "もともと",
    "meaning": "vốn dĩ",
    "han": "nguyên ? ｜ 元:ゲン・ガン 々:-",
    "example": "元々は小さい店でした。",
    "translation": "Vốn dĩ là cửa hàng nhỏ."
  },
  {
    "id": 972,
    "page": 59,
    "word": "加工",
    "reading": "かこう",
    "meaning": "gia công, chế biến",
    "han": "gia công ｜ 加:カ 工:コウ・ク",
    "example": "食品を加工します。",
    "translation": "Chế biến thực phẩm."
  },
  {
    "id": 973,
    "page": 60,
    "word": "参戦",
    "reading": "さんせん",
    "meaning": "tham chiến",
    "han": "sâm khuyết ｜ 参:サン・シン 戦:セン",
    "example": "大会に参戦します。",
    "translation": "Tham gia giải đấu."
  },
  {
    "id": 974,
    "page": 60,
    "word": "妊娠",
    "reading": "にんしん",
    "meaning": "mang thai",
    "han": "nhâm thần ｜ 妊:ニン・ジン 娠:シン",
    "example": "妊娠しました。",
    "translation": "Tôi đã có thai."
  },
  {
    "id": 975,
    "page": 60,
    "word": "審査",
    "reading": "しんさ",
    "meaning": "thẩm tra",
    "han": "thẩm tra ｜ 審:シン 査:サ",
    "example": "審査を受けます。",
    "translation": "Được thẩm tra."
  },
  {
    "id": 976,
    "page": 60,
    "word": "招待",
    "reading": "しょうたい",
    "meaning": "mời",
    "han": "chiêu đãi ｜ 招:ショウ 待:タイ",
    "example": "友達を招待します。",
    "translation": "Mời bạn."
  },
  {
    "id": 977,
    "page": 60,
    "word": "教室",
    "reading": "きょうしつ",
    "meaning": "lớp học",
    "han": "giáo thất ｜ 教:キョウ 室:シツ",
    "example": "教室で勉強します。",
    "translation": "Học trong lớp."
  },
  {
    "id": 978,
    "page": 60,
    "word": "植物",
    "reading": "しょくぶつ",
    "meaning": "thực vật",
    "han": "thực vật ｜ 植:ショク 物:ブツ・モツ",
    "example": "植物を育てます。",
    "translation": "Trồng thực vật."
  },
  {
    "id": 979,
    "page": 60,
    "word": "殺害",
    "reading": "さつがい",
    "meaning": "sát hại",
    "han": "sát hại ｜ 殺:サツ・サイ 害:ガイ",
    "example": "殺害事件のニュースです。",
    "translation": "Là tin về vụ án mạng."
  },
  {
    "id": 980,
    "page": 60,
    "word": "毎回",
    "reading": "まいかい",
    "meaning": "mỗi lần",
    "han": "mỗi hồi ｜ 毎:マイ 回:カイ・エ",
    "example": "毎回参加します。",
    "translation": "Lần nào cũng tham gia."
  },
  {
    "id": 981,
    "page": 60,
    "word": "特典",
    "reading": "とくてん",
    "meaning": "ưu đãi",
    "han": "đặc điển ｜ 特:トク 典:テン・デン",
    "example": "特典があります。",
    "translation": "Có ưu đãi."
  },
  {
    "id": 982,
    "page": 60,
    "word": "看護",
    "reading": "かんご",
    "meaning": "điều dưỡng",
    "han": "khán hộ ｜ 看:カン 護:ゴ",
    "example": "看護の仕事です。",
    "translation": "Là công việc điều dưỡng."
  },
  {
    "id": 983,
    "page": 60,
    "word": "義務",
    "reading": "ぎむ",
    "meaning": "nghĩa vụ",
    "han": "nghĩa vụ ｜ 義:ギ 務:ム",
    "example": "義務があります。",
    "translation": "Có nghĩa vụ."
  },
  {
    "id": 984,
    "page": 60,
    "word": "職業",
    "reading": "しょくぎょう",
    "meaning": "nghề nghiệp",
    "han": "chức nghiệp ｜ 職:ショク・ソク 業:ギョウ・ゴウ",
    "example": "職業は何ですか。",
    "translation": "Nghề nghiệp của bạn là gì?"
  },
  {
    "id": 985,
    "page": 60,
    "word": "複雑",
    "reading": "ふくざつ",
    "meaning": "phức tạp",
    "han": "phức tạp ｜ 複:フク 雑:ザツ・ゾウ",
    "example": "複雑な問題です。",
    "translation": "Là vấn đề phức tạp."
  },
  {
    "id": 986,
    "page": 60,
    "word": "赤い",
    "reading": "あかい",
    "meaning": "đỏ",
    "han": "xích ｜ 赤:セキ・シャク",
    "example": "赤い花です。",
    "translation": "Là bông hoa đỏ."
  },
  {
    "id": 987,
    "page": 60,
    "word": "運命",
    "reading": "うんめい",
    "meaning": "vận mệnh",
    "han": "vận mệnh ｜ 運:ウン 命:メイ・ミョウ",
    "example": "運命を信じます。",
    "translation": "Tin vào vận mệnh."
  },
  {
    "id": 988,
    "page": 60,
    "word": "食べ物",
    "reading": "たべもの",
    "meaning": "đồ ăn",
    "han": "thực vật ｜ 食:ショク・ジキ 物:ブツ・モツ",
    "example": "好きな食べ物です。",
    "translation": "Là đồ ăn yêu thích."
  },
  {
    "id": 989,
    "page": 60,
    "word": "上昇",
    "reading": "じょうしょう",
    "meaning": "tăng lên",
    "han": "thượng thăng ｜ 上:ジョウ・ショウ 昇:ショウ",
    "example": "価格が上昇しました。",
    "translation": "Giá đã tăng."
  },
  {
    "id": 990,
    "page": 60,
    "word": "不満",
    "reading": "ふまん",
    "meaning": "bất mãn",
    "han": "bất mãn ｜ 不:フ・ブ 満:マン・バン",
    "example": "不満があります。",
    "translation": "Tôi có bất mãn."
  },
  {
    "id": 991,
    "page": 61,
    "word": "保障",
    "reading": "ほしょう",
    "meaning": "bảo đảm (xã hội)",
    "han": "bảo chướng ｜ 保:ホ・ホウ 障:ショウ",
    "example": "生活を保障します。",
    "translation": "Bảo đảm cuộc sống."
  },
  {
    "id": 992,
    "page": 61,
    "word": "入手",
    "reading": "にゅうしゅ",
    "meaning": "có được",
    "han": "nhập thủ ｜ 入:ニュウ・ジュ 手:シュ・ズ",
    "example": "情報を入手します。",
    "translation": "Có được thông tin."
  },
  {
    "id": 993,
    "page": 61,
    "word": "列車",
    "reading": "れっしゃ",
    "meaning": "đoàn tàu",
    "han": "liệt xa ｜ 列:レツ・レ 車:シャ",
    "example": "列車に乗ります。",
    "translation": "Lên tàu."
  },
  {
    "id": 994,
    "page": 61,
    "word": "勝負",
    "reading": "しょうぶ",
    "meaning": "thắng thua",
    "han": "thắng phụ ｜ 勝:ショウ 負:フ",
    "example": "勝負に勝ちます。",
    "translation": "Thắng cuộc."
  },
  {
    "id": 995,
    "page": 61,
    "word": "司令",
    "reading": "しれい",
    "meaning": "chỉ huy",
    "han": "ti lệnh ｜ 司:シ 令:レイ",
    "example": "司令が出ました。",
    "translation": "Đã có lệnh chỉ huy."
  },
  {
    "id": 996,
    "page": 61,
    "word": "周囲",
    "reading": "しゅうい",
    "meaning": "xung quanh",
    "han": "chu vi ｜ 周:シュウ 囲:イ",
    "example": "周囲を見ます。",
    "translation": "Nhìn xung quanh."
  },
  {
    "id": 997,
    "page": 61,
    "word": "国会",
    "reading": "こっかい",
    "meaning": "quốc hội",
    "han": "quốc cối ｜ 国:コク 会:カイ・エ",
    "example": "国会で話し合います。",
    "translation": "Thảo luận ở quốc hội."
  },
  {
    "id": 998,
    "page": 61,
    "word": "基礎",
    "reading": "きそ",
    "meaning": "nền tảng",
    "han": "cơ sở ｜ 基:キ 礎:ソ",
    "example": "基礎を学びます。",
    "translation": "Học nền tảng."
  },
  {
    "id": 999,
    "page": 61,
    "word": "姿勢",
    "reading": "しせい",
    "meaning": "tư thế, thái độ",
    "han": "tư thế ｜ 姿:シ 勢:セイ・ゼイ",
    "example": "姿勢を正します。",
    "translation": "Chỉnh tư thế."
  },
  {
    "id": 1000,
    "page": 61,
    "word": "宣言",
    "reading": "せんげん",
    "meaning": "tuyên bố",
    "han": "tuyên ngôn ｜ 宣:セン 言:ゲン・ゴン",
    "example": "目標を宣言します。",
    "translation": "Tuyên bố mục tiêu."
  }
];
