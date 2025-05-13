const movements = [
  {
    "slug": "air-bike",
    "name": "Air Biking/Assault Biking",
    "krName": "에어 바이킹/어설트 바이크"
  },
  {
    "slug": "air-squat",
    "name": "Air Squat",
    "krName": "에어 스쿼트"
  },
  {
    "slug": "arch-up-superman-hold",
    "name": "Arch Up/Arch Hold (Superman)",
    "krName": "아치 업/슈퍼맨 자세"
  },
  {
    "slug": "back-extension",
    "name": "Back Extension/Hip Extension",
    "krName": "등 확장/엉덩이 확장"
  },
  {
    "slug": "back-scale",
    "name": "Back Scale",
    "krName": "백 스케일"
  },
  {
    "slug": "back-squat",
    "name": "Back Squat",
    "krName": "백 스쿼트"
  },
  {
    "slug": "back-tuck",
    "name": "Back Tuck",
    "krName": "백 턱"
  },
  {
    "slug": "backward-roll",
    "name": "Backward Roll",
    "krName": "뒤구르기"
  },
  {
    "slug": "ball-slams",
    "name": "Ball Slam",
    "krName": "볼 슬램"
  },
  {
    "slug": "bear-crawl",
    "name": "Bear Crawl",
    "krName": "베어 크롤"
  },
  {
    "slug": "bench-press",
    "name": "Bench Press",
    "krName": "벤치 프레스"
  },
  {
    "slug": "bent-over-row",
    "name": "Bent Over Row",
    "krName": "벤트오버 로우"
  },
  {
    "slug": "bike-bicycle",
    "name": "Biking (Cycling)",
    "krName": "바이크"
  },
  {
    "slug": "box-jump",
    "name": "Box Jump",
    "krName": "박스 점프"
  },
  {
    "slug": "box-step-up",
    "name": "Box Step-Up",
    "krName": "박스 스텝 업"
  },
  {
    "slug": "broad-jump",
    "name": "Broad Jump",
    "krName": "브로드 점프"
  },
  {
    "slug": "burpee",
    "name": "Burpee",
    "krName": "버피"
  },
  {
    "slug": "candlestick",
    "name": "Candlestick",
    "krName": "캔들스틱 자세"
  },
  {
    "slug": "clean",
    "name": "Clean",
    "krName": "클린"
  },
  {
    "slug": "crossover",
    "name": "Crossover",
    "krName": "크로스오버"
  },
  {
    "slug": "curl",
    "name": "Curl",
    "krName": "컬"
  },
  {
    "slug": "deadlift",
    "name": "Deadlift",
    "krName": "데드리프트"
  },
  {
    "slug": "devil-press",
    "name": "Devil Press",
    "krName": "데블 프레스"
  },
  {
    "slug": "dip",
    "name": "Dip/Ring Dip/Tricep Dip",
    "krName": "딥/링 딥/삼두 딥"
  },
  {
    "slug": "double-under",
    "name": "Double-Under",
    "krName": "더블 언더"
  },
  {
    "slug": "dumbbell-swing",
    "name": "Dumbbell Swing",
    "krName": "덤벨 스윙"
  },
  {
    "slug": "farmers-carry",
    "name": "Farmer's Carry",
    "krName": "파머스 캐리"
  },
  {
    "slug": "firemans-carry",
    "name": "Fireman's Carry",
    "krName": "파이어맨 캐리"
  },
  {
    "slug": "floor-wiper",
    "name": "Floor Wiper",
    "krName": "플로어 와이퍼"
  },
  {
    "slug": "flutterkick",
    "name": "Flutter Kick/Leg Raise",
    "krName": "플러터 킥/다리 들어올리기"
  },
  {
    "slug": "forward-roll",
    "name": "Forward Roll",
    "krName": "앞구르기"
  },
  {
    "slug": "front-scale",
    "name": "Front Scale",
    "krName": "프론트 스케일"
  },
  {
    "slug": "front-squat",
    "name": "Front Squat",
    "krName": "프론트 스쿼트"
  },
  {
    "slug": "ghd-sit-up",
    "name": "GHD Sit-Up",
    "krName": "GHD 싯업"
  },
  {
    "slug": "goblet-squat",
    "name": "Goblet Squat",
    "krName": "고블렛 스쿼트"
  },
  {
    "slug": "good-mornings",
    "name": "Good Morning",
    "krName": "굿모닝"
  },
  {
    "slug": "grasshopper",
    "name": "Grasshopper",
    "krName": "그라스호퍼"
  },
  {
    "slug": "ground-to-overhead",
    "name": "Ground-to-Overhead",
    "krName": "지면에서 머리 위로 들기"
  },
  {
    "slug": "hack-squat",
    "name": "Hack Squat",
    "krName": "핵 스쿼트"
  },
  {
    "slug": "hammer-strike",
    "name": "Hammer Strike",
    "krName": "해머 스트라이크"
  },
  {
    "slug": "handstand-hold",
    "name": "Handstand Hold",
    "krName": "핸드스탠드 유지"
  },
  {
    "slug": "handstand-push-up",
    "name": "Handstand Push-Up",
    "krName": "핸드스탠드 푸시업"
  },
  {
    "slug": "handstand-walk",
    "name": "Handstand Walk",
    "krName": "핸드스탠드 워크"
  },
  {
    "slug": "hang-hold",
    "name": "Hang Hold",
    "krName": "행 홀드"
  },
  {
    "slug": "heel-clap",
    "name": "Heel Clap",
    "krName": "힐 클랩"
  },
  {
    "slug": "hollow-hold",
    "name": "Hollow Hold",
    "krName": "할로우 홀드"
  },
  {
    "slug": "hollow-rock",
    "name": "Hollow Rock",
    "krName": "할로우 락"
  },
  {
    "slug": "inchworm",
    "name": "Inchworm",
    "krName": "인치웜"
  },
  {
    "slug": "inverted-burpee",
    "name": "Inverted Burpee",
    "krName": "인버티드 버피"
  },
  {
    "slug": "inverted-hang",
    "name": "Inverted Hang",
    "krName": "인버티드 행"
  },
  {
    "slug": "jerk",
    "name": "Jerk",
    "krName": "저크"
  },
  {
    "slug": "jumping-jack",
    "name": "Jumping Jack",
    "krName": "점핑 잭"
  },
  {
    "slug": "kettlebell-swing",
    "name": "Kettlebell Swing",
    "krName": "케틀벨 스윙"
  },
  {
    "slug": "kettlebell-tater",
    "name": "Kettlebell Tater",
    "krName": "케틀벨 테이터"
  },
  {
    "slug": "l-sit",
    "name": "L-Sit",
    "krName": "L-싯"
  },
  {
    "slug": "lateral-jump",
    "name": "Lateral Jump",
    "krName": "래터럴 점프"
  },
  {
    "slug": "lateral-raise",
    "name": "Lateral Raise",
    "krName": "래터럴 레이즈"
  },
  {
    "slug": "lunge",
    "name": "Lunge",
    "krName": "런지"
  },
  {
    "slug": "man-maker",
    "name": "Man Maker",
    "krName": "맨메이커"
  },
  {
    "slug": "monkey-bar-traverse",
    "name": "Monkey Bar Traverse",
    "krName": "몽키바 트래버스"
  },
  {
    "slug": "mountain-climber",
    "name": "Mountain Climber",
    "krName": "마운틴 클라이머"
  },
  {
    "slug": "muscle-up",
    "name": "Muscle-Up",
    "krName": "머슬업"
  },
  {
    "slug": "overhead-squat",
    "name": "Overhead Squat",
    "krName": "오버헤드 스쿼트"
  },
  {
    "slug": "paddleboard",
    "name": "Paddleboard",
    "krName": "패들보드"
  },
  {
    "slug": "parallette-pass-through",
    "name": "Parallette Pass-Through",
    "krName": "패러렛 패스스루"
  },
  {
    "slug": "pegboard-ascent",
    "name": "Pegboard Ascent",
    "krName": "페그보드 등반"
  },
  {
    "slug": "pistol",
    "name": "Pistol",
    "krName": "피스톨 스쿼트"
  },
  {
    "slug": "plank-hold",
    "name": "Plank Hold",
    "krName": "플랭크 홀드"
  },
  {
    "slug": "pull-up",
    "name": "Pull-Up",
    "krName": "풀업"
  },
  {
    "slug": "push-press",
    "name": "Push Press",
    "krName": "푸시 프레스"
  },
  {
    "slug": "push-up",
    "name": "Push-Up",
    "krName": "푸쉬업"
  },
  {
    "slug": "ring-row",
    "name": "Ring Row",
    "krName": "링 로우"
  },
  {
    "slug": "rope-climb",
    "name": "Rope Climb",
    "krName": "로프 클라임"
  },
  {
    "slug": "row",
    "name": "Row (Rowing)",
    "krName": "로잉"
  },
  {
    "slug": "run",
    "name": "Run (Running)",
    "krName": "달리기"
  },
  {
    "slug": "russian-twist",
    "name": "Russian Twist",
    "krName": "러시안 트위스트"
  },
  {
    "slug": "shoulder-to-overhead",
    "name": "Shoulder-to-Overhead",
    "krName": "숄더 투 오버헤드"
  },
  {
    "slug": "shuttle-run",
    "name": "Shuttle Run",
    "krName": "셔틀런"
  },
  {
    "slug": "jump-rope-singles",
    "name": "Single-Under",
    "krName": "싱글 언더"
  },
  {
    "slug": "sit-up",
    "name": "Sit-Up",
    "krName": "싯업"
  },
  {
    "slug": "ski",
    "name": "Ski (Skiing on Ski Erg)",
    "krName": "스키"
  },
  {
    "slug": "sled-pull",
    "name": "Sled Pull",
    "krName": "슬레드 풀"
  },
  {
    "slug": "sled-push-prowler-push",
    "name": "Sled Push (Prowler Push)",
    "krName": "슬레드 푸시"
  },
  {
    "slug": "snatch",
    "name": "Snatch",
    "krName": "스내치"
  },
  {
    "slug": "snatch-balance",
    "name": "Snatch Balance",
    "krName": "스내치 밸런스"
  },
  {
    "slug": "sots-press",
    "name": "Sots Press",
    "krName": "솟츠 프레스"
  },
  {
    "slug": "strict-press",
    "name": "Strict Press (Shoulder Press)",
    "krName": "스트릭트 프레스"
  },
  {
    "slug": "sumo-deadlift-high-pull",
    "name": "Sumo Deadlift High-Pull",
    "krName": "스모 데드리프트 하이풀"
  },
  {
    "slug": "swim",
    "name": "Swim/Swimming",
    "krName": "수영"
  },
  {
    "slug": "thruster",
    "name": "Thruster",
    "krName": "쓰러스터"
  },
  {
    "slug": "tip-touch",
    "name": "Tip Touch",
    "krName": "팁 터치"
  },
  {
    "slug": "tire-flip",
    "name": "Tire Flip",
    "krName": "타이어 플립"
  },
  {
    "slug": "toes-to-bar",
    "name": "Toes-to-Bar/Knees-to-Elbows",
    "krName": "토즈 투 바/니 투 엘보"
  },
  {
    "slug": "triple-under",
    "name": "Triple-Under",
    "krName": "트리플 언더"
  },
  {
    "slug": "tuck-jump",
    "name": "Tuck Jump",
    "krName": "턱 점프"
  },
  {
    "slug": "tuck-up",
    "name": "Tuck Up",
    "krName": "턱 업"
  },
  {
    "slug": "turkish-get-up",
    "name": "Turkish Get-Up",
    "krName": "터키시 겟업"
  },
  {
    "slug": "up-down",
    "name": "Up-Down",
    "krName": "업다운"
  },
  {
    "slug": "v-up",
    "name": "V-Up",
    "krName": "브이 업"
  },
  {
    "slug": "wall-ball-shot",
    "name": "Wall Ball Shot",
    "krName": "월볼 샷"
  },
  {
    "slug": "wall-climb",
    "name": "Wall Climb/Wall Walk",
    "krName": "월 클라임/월 워크"
  },
  {
    "slug": "wall-sit",
    "name": "Wall Sit",
    "krName": "월 싯"
  },
  {
    "slug": "weighted-walk-run",
    "name": "Weighted Walk/Run",
    "krName": "웨이트 워크/런"
  },
  {
    "slug": "yoke-carry",
    "name": "Yoke Carry",
    "krName": "요크 캐리"
  }
];

const equipments = [
  {
    "slug": "abmat",
    "name": "AbMat",
    "krName": "앱매트"
  },
  {
    "slug": "air-bike",
    "name": "Air Bike (Assault Bike)",
    "krName": "에어바이크 (어설트 바이크)"
  },
  {
    "slug": "axle-bar",
    "name": "Axle Bar",
    "krName": "액슬 바"
  },
  {
    "slug": "barbell",
    "name": "Barbell",
    "krName": "바벨"
  },
  {
    "slug": "bench",
    "name": "Bench",
    "krName": "벤치"
  },
  {
    "slug": "bike",
    "name": "Bike (Bicycle)",
    "krName": "자전거"
  },
  {
    "slug": "bikeerg",
    "name": "BikeErg / Stationary Bike",
    "krName": "바이크에르그 / 스테이셔너리 바이크"
  },
  {
    "slug": "box",
    "name": "Box",
    "krName": "박스"
  },
  {
    "slug": "d-ball",
    "name": "Dead Ball (D-Ball)",
    "krName": "데드볼 (디볼)"
  },
  {
    "slug": "dip-bars",
    "name": "Dip Bars",
    "krName": "딥 바"
  },
  {
    "slug": "dumbbells",
    "name": "Dumbbell(s)",
    "krName": "덤벨"
  },
  {
    "slug": "ghd-machine",
    "name": "GHD Machine",
    "krName": "GHD 머신"
  },
  {
    "slug": "rings",
    "name": "Gymnastic Rings",
    "krName": "체조 링"
  },
  {
    "slug": "jump-rope",
    "name": "Jump Rope",
    "krName": "줄넘기"
  },
  {
    "slug": "keg",
    "name": "Keg",
    "krName": "케그통"
  },
  {
    "slug": "kettlebells",
    "name": "Kettlebell(s)",
    "krName": "케틀벨"
  },
  {
    "slug": "log",
    "name": "Log",
    "krName": "로그 바"
  },
  {
    "slug": "medicine-ball",
    "name": "Medicine Ball (Wall Ball)",
    "krName": "메디신볼 (월볼)"
  },
  {
    "slug": "monkey-bars",
    "name": "Monkey Bars",
    "krName": "몽키 바"
  },
  {
    "slug": "paddleboard",
    "name": "Paddleboard",
    "krName": "패들보드"
  },
  {
    "slug": "parallettes",
    "name": "Parallettes",
    "krName": "패러렛"
  },
  {
    "slug": "peg-board",
    "name": "Peg Board",
    "krName": "페그보드"
  },
  {
    "slug": "plate",
    "name": "Plate(s)",
    "krName": "중량판"
  },
  {
    "slug": "pool",
    "name": "Pool/Open Water",
    "krName": "수영장/개방수역"
  },
  {
    "slug": "pull-up-bar",
    "name": "Pull-Up Bar",
    "krName": "턱걸이 바"
  },
  {
    "slug": "pvc-pipe",
    "name": "PVC Pipe",
    "krName": "PVC 파이프"
  },
  {
    "slug": "ramp",
    "name": "Ramp",
    "krName": "경사로"
  },
  {
    "slug": "rope",
    "name": "Rope",
    "krName": "로프"
  },
  {
    "slug": "rower",
    "name": "Rower",
    "krName": "로잉 머신"
  },
  {
    "slug": "ruck",
    "name": "Ruck",
    "krName": "럭(군용 배낭)"
  },
  {
    "slug": "sandbag",
    "name": "Sandbag",
    "krName": "샌드백"
  },
  {
    "slug": "skierg",
    "name": "SkiErg",
    "krName": "스키에르그"
  },
  {
    "slug": "sled",
    "name": "Sled (Prowler)",
    "krName": "슬레드 (프롤러)"
  },
  {
    "slug": "sledgehammer",
    "name": "Sledgehammer",
    "krName": "슬레지해머"
  },
  {
    "slug": "stairs",
    "name": "Stairs",
    "krName": "계단"
  },
  {
    "slug": "tire",
    "name": "Tire",
    "krName": "타이어"
  },
  {
    "slug": "treadmill",
    "name": "Treadmill",
    "krName": "트레드밀"
  },
  {
    "slug": "wall",
    "name": "Wall (Obstacle)",
    "krName": "장애물 벽"
  },
  {
    "slug": "weight-rack",
    "name": "Weight Rack",
    "krName": "웨이트 랙"
  },
  {
    "slug": "weight-vest",
    "name": "Weight Vest",
    "krName": "중량 조끼"
  },
  {
    "slug": "wheel-barrow",
    "name": "Wheel Barrow",
    "krName": "손수레"
  },
  {
    "slug": "yoke",
    "name": "Yoke",
    "krName": "요크"
  }
]
