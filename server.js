const express=require('express')
const cors=require('cors')

const app=express()
app.use(cors())

const data = [{"id":1,"city":"Miami"},
{"id":2,"city":"Béziers"},
{"id":3,"city":"Miaoquan"},
{"id":4,"city":"Imbituba"},
{"id":5,"city":"Razan"},
{"id":6,"city":"Lewodoli"},
{"id":7,"city":"Marabahan"},
{"id":8,"city":"Lons-le-Saunier"},
{"id":9,"city":"Kembangkerang Satu"},
{"id":10,"city":"Nangxian"},
{"id":11,"city":"Sremska Mitrovica"},
{"id":12,"city":"Suibara"},
{"id":13,"city":"Saidpur"},
{"id":14,"city":"Cheyenne"},
{"id":15,"city":"Hubei"},
{"id":16,"city":"Lomba do Loução"},
{"id":17,"city":"Shaozhai"},
{"id":18,"city":"Além"},
{"id":19,"city":"Dakoutun"},
{"id":20,"city":"Fuyong"},
{"id":21,"city":"Békéscsaba"},
{"id":22,"city":"Karangpocok"},
{"id":23,"city":"Ad Dīs ash Sharqīyah"},
{"id":24,"city":"Kefang"},
{"id":25,"city":"Huai Yot"},
{"id":26,"city":"Muraloka"},
{"id":27,"city":"Heimahe"},
{"id":28,"city":"Rawaapu"},
{"id":29,"city":"Paringin"},
{"id":30,"city":"Qinghua"},
{"id":31,"city":"Stod"},
{"id":32,"city":"Lohayong"},
{"id":33,"city":"Gelang"},
{"id":34,"city":"Guamal"},
{"id":35,"city":"Nungwi"},
{"id":36,"city":"Norrköping"},
{"id":37,"city":"Mauraro"},
{"id":38,"city":"Sansanné-Mango"},
{"id":39,"city":"Jianfeng"},
{"id":40,"city":"Ibarra"},
{"id":41,"city":"Almere Stad"},
{"id":42,"city":"Qijing"},
{"id":43,"city":"Amangarh"},
{"id":44,"city":"Zhongfan"},
{"id":45,"city":"Gangtun"},
{"id":46,"city":"Moravský Písek"},
{"id":47,"city":"Kawangu"},
{"id":48,"city":"Jardim"},
{"id":49,"city":"Albina"},
{"id":50,"city":"Fovissste"},
{"id":51,"city":"Taiping"},
{"id":52,"city":"Le Teil"},
{"id":53,"city":"Puteaux"},
{"id":54,"city":"Tabuny"},
{"id":55,"city":"Sirājganj"},
{"id":56,"city":"Granja do Tedo"},
{"id":57,"city":"Artimet"},
{"id":58,"city":"La Dorada"},
{"id":59,"city":"Gashua"},
{"id":60,"city":"Jacareí"},
{"id":61,"city":"Metsamor"},
{"id":62,"city":"Yangshufang"},
{"id":63,"city":"Kara Suu"},
{"id":64,"city":"Varnsdorf"},
{"id":65,"city":"Moijabana"},
{"id":66,"city":"Kiuteta"},
{"id":67,"city":"Laocheng"},
{"id":68,"city":"Tanenofunan"},
{"id":69,"city":"Guan’e"},
{"id":70,"city":"Ḩakamā"},
{"id":71,"city":"Guay"},
{"id":72,"city":"Kokop"},
{"id":73,"city":"Ilebo"},
{"id":74,"city":"Baryshivka"},
{"id":75,"city":"Chum Phae"},
{"id":76,"city":"Hatava"},
{"id":77,"city":"Kanghe"},
{"id":78,"city":"Zbůch"},
{"id":79,"city":"Würzburg"},
{"id":80,"city":"Ksawerów"},
{"id":81,"city":"Zhangdian"},
{"id":82,"city":"Zgurovka"},
{"id":83,"city":"Gondang"},
{"id":84,"city":"Boca Raton"},
{"id":85,"city":"La Jagua de Ibirico"},
{"id":86,"city":"Ongabelen"},
{"id":87,"city":"Nevers"},
{"id":88,"city":"El Zapote"},
{"id":89,"city":"Bom Jesus do Itabapoana"},
{"id":90,"city":"Babasakhib"},
{"id":91,"city":"Xinghuo"},
{"id":92,"city":"Czarna"},
{"id":93,"city":"Huanuni"},
{"id":94,"city":"Tucdao"},
{"id":95,"city":"Laju Kidul"},
{"id":96,"city":"Phlapphla Chai"},
{"id":97,"city":"Aroeira"},
{"id":98,"city":"Shangjiangxu"},
{"id":99,"city":"Open Stage"},
{"id":100,"city":"El Potrero"},
{"id":101,"city":"Banisilan"},
{"id":102,"city":"Nancheng"},
{"id":103,"city":"Yeping"},
{"id":104,"city":"Karangmangu"},
{"id":105,"city":"Magok"},
{"id":106,"city":"Gulbene"},
{"id":107,"city":"Cikalong"},
{"id":108,"city":"Pianbai"},
{"id":109,"city":"Blendis"},
{"id":110,"city":"Ardirejo"},
{"id":111,"city":"Huomachong"},
{"id":112,"city":"Victoria Falls"},
{"id":113,"city":"T’aebaek"},
{"id":114,"city":"Toyama-shi"},
{"id":115,"city":"Depok"},
{"id":116,"city":"Kiten"},
{"id":117,"city":"Rancakuya"},
{"id":118,"city":"Guamal"},
{"id":119,"city":"Orlovskiy"},
{"id":120,"city":"Mayisyan"},
{"id":121,"city":"Grebnevo"},
{"id":122,"city":"Fengpo"},
{"id":123,"city":"Chigoré"},
{"id":124,"city":"Pul-e Sangī"},
{"id":125,"city":"Huazangsi"},
{"id":126,"city":"Yujia"},
{"id":127,"city":"Deir Ḥannā"},
{"id":128,"city":"Nelahozeves"},
{"id":129,"city":"Liudong"},
{"id":130,"city":"Lindavista"},
{"id":131,"city":"Kaffrine"},
{"id":132,"city":"Soriano"},
{"id":133,"city":"Dashahe"},
{"id":134,"city":"Edosaki"},
{"id":135,"city":"Landvetter"},
{"id":136,"city":"Fontana"},
{"id":137,"city":"Siraway"},
{"id":138,"city":"Xiaoguai"},
{"id":139,"city":"Pontian"},
{"id":140,"city":"Farranacoush"},
{"id":141,"city":"São Leopoldo"},
{"id":142,"city":"Postřelmov"},
{"id":143,"city":"Pueai Noi"},
{"id":144,"city":"Sacramento"},
{"id":145,"city":"Keboireng"},
{"id":146,"city":"Mainri"},
{"id":147,"city":"Alcáçovas"},
{"id":148,"city":"Digah"},
{"id":149,"city":"Velyki Sorochyntsi"},
{"id":150,"city":"Camachile"},
{"id":151,"city":"Bagombong"},
{"id":152,"city":"Waajid"},
{"id":153,"city":"Shanghe"},
{"id":154,"city":"Calubcub Dos"},
{"id":155,"city":"Scarborough"},
{"id":156,"city":"Xuebu"},
{"id":157,"city":"Melun"},
{"id":158,"city":"Gabahan"},
{"id":159,"city":"Potongan"},
{"id":160,"city":"Zmeyskaya"},
{"id":161,"city":"São Luís de Montes Belos"},
{"id":162,"city":"Nebug"},
{"id":163,"city":"Fangcun"},
{"id":164,"city":"Polo"},
{"id":165,"city":"Alcorriol"},
{"id":166,"city":"Gurgurnica"},
{"id":167,"city":"Tucupita"},
{"id":168,"city":"Stari Grad"},
{"id":169,"city":"Otyń"},
{"id":170,"city":"Lakbok"},
{"id":171,"city":"Petrovsk"},
{"id":172,"city":"Izvestkovyy"},
{"id":173,"city":"Yaring"},
{"id":174,"city":"Vakhrushi"},
{"id":175,"city":"Pinheiro"},
{"id":176,"city":"Busalangga"},
{"id":177,"city":"Krajanjugosari"},
{"id":178,"city":"Kafr Qūd"},
{"id":179,"city":"Pailou"},
{"id":180,"city":"Maying"},
{"id":181,"city":"Kara-Balta"},
{"id":182,"city":"Tembeling"},
{"id":183,"city":"Longlou"},
{"id":184,"city":"Fastiv"},
{"id":185,"city":"Pateros"},
{"id":186,"city":"Shaxi"},
{"id":187,"city":"Thung Yang Daeng"},
{"id":188,"city":"Aksu"},
{"id":189,"city":"Pashiya"},
{"id":190,"city":"Nässjö"},
{"id":191,"city":"Antalaha"},
{"id":192,"city":"Uarini"},
{"id":193,"city":"Junbu"},
{"id":194,"city":"Neftçala"},
{"id":195,"city":"Koani Ndogo"},
{"id":196,"city":"Tonoshō"},
{"id":197,"city":"Liping"},
{"id":198,"city":"Sadao"},
{"id":199,"city":"Marseille"},
{"id":200,"city":"Yuanqian"},
{"id":201,"city":"Agogo"},
{"id":202,"city":"Kista"},
{"id":203,"city":"Poteran"},
{"id":204,"city":"Kukuluk"},
{"id":205,"city":"Santa María Ixhuatán"},
{"id":206,"city":"Biwer"},
{"id":207,"city":"Thatta"},
{"id":208,"city":"Ban Muang"},
{"id":209,"city":"Pshada"},
{"id":210,"city":"Jaša Tomić"},
{"id":211,"city":"Lapai"},
{"id":212,"city":"Noenoni"},
{"id":213,"city":"Don Chedi"},
{"id":214,"city":"Kauniainen"},
{"id":215,"city":"Itinga"},
{"id":216,"city":"Xinjie"},
{"id":217,"city":"Rönninge"},
{"id":218,"city":"Pasauran"},
{"id":219,"city":"Orerokpe"},
{"id":220,"city":"Vila Nova"},
{"id":221,"city":"Połajewo"},
{"id":222,"city":"San Francisco"},
{"id":223,"city":"Castanhal"},
{"id":224,"city":"Soufrière"},
{"id":225,"city":"Tandahimba"},
{"id":226,"city":"Xinqiao"},
{"id":227,"city":"Mont-Saint-Aignan"},
{"id":228,"city":"Aganan"},
{"id":229,"city":"Ivot"},
{"id":230,"city":"Khairiahmandah"},
{"id":231,"city":"Mont-Tremblant"},
{"id":232,"city":"Bouna"},
{"id":233,"city":"Vila Nova de Milfontes"},
{"id":234,"city":"Xiwei"},
{"id":235,"city":"Firavitoba"},
{"id":236,"city":"Enköping"},
{"id":237,"city":"Allen"},
{"id":238,"city":"Hanfeng"},
{"id":239,"city":"La Palma"},
{"id":240,"city":"Bua Yai"},
{"id":241,"city":"Quilo-quilo"},
{"id":242,"city":"Bella Vista"},
{"id":243,"city":"Mizi"},
{"id":244,"city":"Houston"},
{"id":245,"city":"Wuyahe"},
{"id":246,"city":"Tinumpuk"},
{"id":247,"city":"Voznesenskaya"},
{"id":248,"city":"Xiachu"},
{"id":249,"city":"Jinglongqiao"},
{"id":250,"city":"Savski Venac"},
{"id":251,"city":"Dois Córregos"},
{"id":252,"city":"Opi"},
{"id":253,"city":"Vukojevci"},
{"id":254,"city":"San Vicente"},
{"id":255,"city":"Corbeil-Essonnes"},
{"id":256,"city":"Tha Maka"},
{"id":257,"city":"Wirral"},
{"id":258,"city":"Jinping"},
{"id":259,"city":"Horqueta"},
{"id":260,"city":"Ekpoma"},
{"id":261,"city":"Zharkent"},
{"id":262,"city":"Bogatynia"},
{"id":263,"city":"La Talaudière"},
{"id":264,"city":"Bulalacao"},
{"id":265,"city":"Grebenskaya"},
{"id":266,"city":"Taipingying"},
{"id":267,"city":"Dudchany"},
{"id":268,"city":"Bergen"},
{"id":269,"city":"Tulay na Lupa"},
{"id":270,"city":"Bolekhiv"},
{"id":271,"city":"Arias"},
{"id":272,"city":"Angers"},
{"id":273,"city":"Roboré"},
{"id":274,"city":"Aleksotas"},
{"id":275,"city":"Fucheng"},
{"id":276,"city":"Maniowy"},
{"id":277,"city":"Munjul"},
{"id":278,"city":"Kornyn"},
{"id":279,"city":"Tongjiaxi"},
{"id":280,"city":"Sedinginan"},
{"id":281,"city":"San Juan"},
{"id":282,"city":"Longjin"},
{"id":283,"city":"Kanbula"},
{"id":284,"city":"Megulung"},
{"id":285,"city":"Paombong"},
{"id":286,"city":"Marang"},
{"id":287,"city":"Río Gallegos"},
{"id":288,"city":"Vilca"},
{"id":289,"city":"Telagasari"},
{"id":290,"city":"Svilengrad"},
{"id":291,"city":"Majiao"},
{"id":292,"city":"Likhobory"},
{"id":293,"city":"Fontenay-sous-Bois"},
{"id":294,"city":"Hobart"},
{"id":295,"city":"Puente Nacional"},
{"id":296,"city":"Shangyu"},
{"id":297,"city":"Lazo"},
{"id":298,"city":"Carbajales"},
{"id":299,"city":"Esquina"},
{"id":300,"city":"Rudong"},
{"id":301,"city":"Svetlyy"},
{"id":302,"city":"Vol’sk"},
{"id":303,"city":"Memphis"},
{"id":304,"city":"Báguanos"},
{"id":305,"city":"Hlyboka"},
{"id":306,"city":"Ballinroad"},
{"id":307,"city":"Capela"},
{"id":308,"city":"Songkhla"},
{"id":309,"city":"Vacaria"},
{"id":310,"city":"Tobelo"},
{"id":311,"city":"Pedregal"},
{"id":312,"city":"Shixian"},
{"id":313,"city":"Probolinggo"},
{"id":314,"city":"Vizal San Pablo"},
{"id":315,"city":"Bang Kho Laem"},
{"id":316,"city":"Visaginas"},
{"id":317,"city":"Atolina"},
{"id":318,"city":"Biankouma"},
{"id":319,"city":"Quinarayan"},
{"id":320,"city":"Xiaheqing"},
{"id":321,"city":"Kristiansund N"},
{"id":322,"city":"Krzemieniewo"},
{"id":323,"city":"Suileng"},
{"id":324,"city":"Masjid"},
{"id":325,"city":"Sambong"},
{"id":326,"city":"Gabahan"},
{"id":327,"city":"Stockholm"},
{"id":328,"city":"Anxiang"},
{"id":329,"city":"Maroanging"},
{"id":330,"city":"Dejilin"},
{"id":331,"city":"Tuburan"},
{"id":332,"city":"Baro Kunda"},
{"id":333,"city":"Lemery"},
{"id":334,"city":"Tianya"},
{"id":335,"city":"Kasulu"},
{"id":336,"city":"Komga"},
{"id":337,"city":"Growong Lor"},
{"id":338,"city":"Kiangan"},
{"id":339,"city":"Urek-urek"},
{"id":340,"city":"Tarvasjoki"},
{"id":341,"city":"Mértola"},
{"id":342,"city":"Kamenjane"},
{"id":343,"city":"Bako"},
{"id":344,"city":"Taounza"},
{"id":345,"city":"Scranton"},
{"id":346,"city":"Baquero Norte"},
{"id":347,"city":"Sabugal"},
{"id":348,"city":"Porangatu"},
{"id":349,"city":"Pimenta Bueno"},
{"id":350,"city":"Byera Village"},
{"id":351,"city":"Masaran"},
{"id":352,"city":"Golubinci"},
{"id":353,"city":"Vân Tùng"},
{"id":354,"city":"Säter"},
{"id":355,"city":"Paobulan"},
{"id":356,"city":"Yashikera"},
{"id":357,"city":"København"},
{"id":358,"city":"Besançon"},
{"id":359,"city":"Pembuanghulu"},
{"id":360,"city":"Compiègne"},
{"id":361,"city":"Tianfen"},
{"id":362,"city":"Winseler"},
{"id":363,"city":"Kuragaki-kosugi"},
{"id":364,"city":"Provo"},
{"id":365,"city":"Chixi"},
{"id":366,"city":"San Isidro"},
{"id":367,"city":"Kamimaruko"},
{"id":368,"city":"Cabrela"},
{"id":369,"city":"Omsukchan"},
{"id":370,"city":"Colima"},
{"id":371,"city":"Hongtang"},
{"id":372,"city":"Waepana"},
{"id":373,"city":"Zouma"},
{"id":374,"city":"Satipo"},
{"id":375,"city":"Xinhua"},
{"id":376,"city":"Kaa-Khem"},
{"id":377,"city":"Aix-en-Provence"},
{"id":378,"city":"Tužno"},
{"id":379,"city":"Kletek"},
{"id":380,"city":"Cuauhtemoc"},
{"id":381,"city":"Taipingzhuang"},
{"id":382,"city":"Ciodeng"},
{"id":383,"city":"Zuwārah"},
{"id":384,"city":"Burirao"},
{"id":385,"city":"Oeleon"},
{"id":386,"city":"Veruela"},
{"id":387,"city":"Balad"},
{"id":388,"city":"Mönhbulag"},
{"id":389,"city":"Thị Trấn Mường Khến"},
{"id":390,"city":"Castlerea"},
{"id":391,"city":"Novomoskovsk"},
{"id":392,"city":"Putina"},
{"id":393,"city":"Ikedachō"},
{"id":394,"city":"Norakert"},
{"id":395,"city":"Idrija"},
{"id":396,"city":"Shchelkovo"},
{"id":397,"city":"Kalýves Polygýrou"},
{"id":398,"city":"Novi Slankamen"},
{"id":399,"city":"Soutelo"},
{"id":400,"city":"Karney Shomron"},
{"id":401,"city":"Chisong"},
{"id":402,"city":"Zagnitkiv"},
{"id":403,"city":"Asamboka"},
{"id":404,"city":"Uherské Hradiště"},
{"id":405,"city":"Dibba Al-Fujairah"},
{"id":406,"city":"Sudikampir"},
{"id":407,"city":"Mucumpiz"},
{"id":408,"city":"Port Antonio"},
{"id":409,"city":"Trzcinica"},
{"id":410,"city":"Rolândia"},
{"id":411,"city":"Colares"},
{"id":412,"city":"Lorica"},
{"id":413,"city":"Potosí"},
{"id":414,"city":"Ballymun"},
{"id":415,"city":"Enniskerry"},
{"id":416,"city":"Yongshan"},
{"id":417,"city":"Pokachi"},
{"id":418,"city":"Benjamín Aceval"},
{"id":419,"city":"Mansa"},
{"id":420,"city":"Fox Creek"},
{"id":421,"city":"Xinyang"},
{"id":422,"city":"San Antonio"},
{"id":423,"city":"Kosamphi Nakhon"},
{"id":424,"city":"Zhongxing"},
{"id":425,"city":"Koina"},
{"id":426,"city":"Kapyl’"},
{"id":427,"city":"Dziewin"},
{"id":428,"city":"Gorbunki"},
{"id":429,"city":"Phu Kradueng"},
{"id":430,"city":"Evansville"},
{"id":431,"city":"Winton"},
{"id":432,"city":"Hörby"},
{"id":433,"city":"Las Flores"},
{"id":434,"city":"Lian"},
{"id":435,"city":"Göteborg"},
{"id":436,"city":"Sōka"},
{"id":437,"city":"Santa Quitéria"},
{"id":438,"city":"Hisings Kärra"},
{"id":439,"city":"Motema"},
{"id":440,"city":"Mandesan"},
{"id":441,"city":"Hénin-Beaumont"},
{"id":442,"city":"Francistown"},
{"id":443,"city":"Ban Takhun"},
{"id":444,"city":"Pantukan"},
{"id":445,"city":"Brejo Santo"},
{"id":446,"city":"Odivelas"},
{"id":447,"city":"Pinar del Río"},
{"id":448,"city":"Bayan Qagan"},
{"id":449,"city":"Novi Beograd"},
{"id":450,"city":"Pásion"},
{"id":451,"city":"Mikumi"},
{"id":452,"city":"Shenzhengqiao"},
{"id":453,"city":"Tallkalakh"},
{"id":454,"city":"Wanfa"},
{"id":455,"city":"La Charité-sur-Loire"},
{"id":456,"city":"Kuala Terengganu"},
{"id":457,"city":"Kansas City"},
{"id":458,"city":"Jalaud"},
{"id":459,"city":"Hushi"},
{"id":460,"city":"Ameixoeira"},
{"id":461,"city":"Hancheng"},
{"id":462,"city":"Bestöbe"},
{"id":463,"city":"Dohār"},
{"id":464,"city":"Yuping"},
{"id":465,"city":"Manoel Urbano"},
{"id":466,"city":"Krasnosilka"},
{"id":467,"city":"Almere Haven"},
{"id":468,"city":"Okocim"},
{"id":469,"city":"Yazykovo"},
{"id":470,"city":"Iwo"},
{"id":471,"city":"Taiping"},
{"id":472,"city":"Snizhne"},
{"id":473,"city":"Rangpur"},
{"id":474,"city":"Dipayal"},
{"id":475,"city":"Fengping"},
{"id":476,"city":"Fort Wayne"},
{"id":477,"city":"Muikamachi"},
{"id":478,"city":"Floridablanca"},
{"id":479,"city":"Okpo"},
{"id":480,"city":"Glugu"},
{"id":481,"city":"Maqian"},
{"id":482,"city":"Waipawa"},
{"id":483,"city":"Zhonghualu"},
{"id":484,"city":"Wangmo"},
{"id":485,"city":"Atok"},
{"id":486,"city":"Karangpaningal"},
{"id":487,"city":"Utena"},
{"id":488,"city":"Kiryandongo"},
{"id":489,"city":"Santa Lucía"},
{"id":490,"city":"Concepcion"},
{"id":491,"city":"Santa Cruz"},
{"id":492,"city":"Banjar Batuaji Kaja"},
{"id":493,"city":"Tanakbeak Daye"},
{"id":494,"city":"Xiaojin"},
{"id":495,"city":"Honglong"},
{"id":496,"city":"Dayton"},
{"id":497,"city":"Xiasi"},
{"id":498,"city":"Xiugu"},
{"id":499,"city":"Magan"},
{"id":500,"city":"Ichupampa"},
{"id":501,"city":"Balakasap"},
{"id":502,"city":"Orange"},
{"id":503,"city":"Kimito"},
{"id":504,"city":"Glagahan"},
{"id":505,"city":"Machico"},
{"id":506,"city":"Xom Tan Long"},
{"id":507,"city":"Padang"},
{"id":508,"city":"Leonárisso"},
{"id":509,"city":"Safonovo"},
{"id":510,"city":"Sindangheula"},
{"id":511,"city":"Turgun"},
{"id":512,"city":"Trzcinica"},
{"id":513,"city":"Methven"},
{"id":514,"city":"Zuénoula"},
{"id":515,"city":"Senhor do Bonfim"},
{"id":516,"city":"La Palma"},
{"id":517,"city":"Laojiangjunjie"},
{"id":518,"city":"Hofors"},
{"id":519,"city":"Longping"},
{"id":520,"city":"Zhangaqorghan"},
{"id":521,"city":"Tualangcut"},
{"id":522,"city":"Tutul"},
{"id":523,"city":"Bulacan"},
{"id":524,"city":"Iralaya"},
{"id":525,"city":"Lidong"},
{"id":526,"city":"Luleå"},
{"id":527,"city":"Chongru"},
{"id":528,"city":"Newport News"},
{"id":529,"city":"Srunikrajan"},
{"id":530,"city":"Gaobu"},
{"id":531,"city":"Waxi"},
{"id":532,"city":"Huangguan"},
{"id":533,"city":"Jinpanling"},
{"id":534,"city":"Osekovo"},
{"id":535,"city":"Ḩawallī"},
{"id":536,"city":"Laranjal Paulista"},
{"id":537,"city":"Rio Novo do Sul"},
{"id":538,"city":"Zárate"},
{"id":539,"city":"Salām Khēl"},
{"id":540,"city":"Niort"},
{"id":541,"city":"Huoxian"},
{"id":542,"city":"Hejiaping"},
{"id":543,"city":"Gazanjyk"},
{"id":544,"city":"Durham"},
{"id":545,"city":"Laliki"},
{"id":546,"city":"Baton Rouge"},
{"id":547,"city":"Santa Cruz das Palmeiras"},
{"id":548,"city":"Barbosa"},
{"id":549,"city":"Khiwa"},
{"id":550,"city":"Santa Cecília"},
{"id":551,"city":"Potchefstroom"},
{"id":552,"city":"Mānānwāla"},
{"id":553,"city":"Kurovskoye"},
{"id":554,"city":"Basseterre"},
{"id":555,"city":"Paico"},
{"id":556,"city":"Muye"},
{"id":557,"city":"Dawwār Tīnjah"},
{"id":558,"city":"Peliyagoda"},
{"id":559,"city":"Saint-Claude"},
{"id":560,"city":"Jhingergācha"},
{"id":561,"city":"Fengyi"},
{"id":562,"city":"Trubchevsk"},
{"id":563,"city":"Mangochi"},
{"id":564,"city":"Taikang"},
{"id":565,"city":"Yangxi"},
{"id":566,"city":"Banayoyo"},
{"id":567,"city":"Češinovo"},
{"id":568,"city":"Sijunjung"},
{"id":569,"city":"Bordeaux"},
{"id":570,"city":"Áno Liósia"},
{"id":571,"city":"Kondangrege"},
{"id":572,"city":"Tianhe"},
{"id":573,"city":"Inabaan Sur"},
{"id":574,"city":"Niños Heroes"},
{"id":575,"city":"Baião"},
{"id":576,"city":"Dedza"},
{"id":577,"city":"Naranjal"},
{"id":578,"city":"Pegongan"},
{"id":579,"city":"Cabinda"},
{"id":580,"city":"Correntina"},
{"id":581,"city":"Nīca"},
{"id":582,"city":"Morro Agudo"},
{"id":583,"city":"Rogóźno"},
{"id":584,"city":"Genet"},
{"id":585,"city":"Estrada"},
{"id":586,"city":"Pelabuhanratu"},
{"id":587,"city":"Vaughan"},
{"id":588,"city":"Xiabao"},
{"id":589,"city":"Balad"},
{"id":590,"city":"Casal da Anja"},
{"id":591,"city":"Kota Kinabalu"},
{"id":592,"city":"Papelón"},
{"id":593,"city":"Standerton"},
{"id":594,"city":"Bandar-e Torkaman"},
{"id":595,"city":"Kochenëvo"},
{"id":596,"city":"Shchëkino"},
{"id":597,"city":"Salyan"},
{"id":598,"city":"San Miguel"},
{"id":599,"city":"Butwāl"},
{"id":600,"city":"Rača"},
{"id":601,"city":"Sannikovo"},
{"id":602,"city":"Pappádos"},
{"id":603,"city":"Torres Vedras"},
{"id":604,"city":"Rixinhe"},
{"id":605,"city":"Kandahār"},
{"id":606,"city":"Tonggu"},
{"id":607,"city":"Montelíbano"},
{"id":608,"city":"Nagahama"},
{"id":609,"city":"Xizhong"},
{"id":610,"city":"Izingolweni"},
{"id":611,"city":"Taouima"},
{"id":612,"city":"San Cristobal"},
{"id":613,"city":"Witihama"},
{"id":614,"city":"Sunfang"},
{"id":615,"city":"Aginskoye"},
{"id":616,"city":"Bogovinje"},
{"id":617,"city":"Thoeng"},
{"id":618,"city":"Susaki"},
{"id":619,"city":"‘Amrān"},
{"id":620,"city":"Yanshan"},
{"id":621,"city":"Gwanda"},
{"id":622,"city":"Katakwi"},
{"id":623,"city":"Pecoro"},
{"id":624,"city":"San Pedro Apartado"},
{"id":625,"city":"Aldeia"},
{"id":626,"city":"Sokol’niki"},
{"id":627,"city":"Cô Tô"},
{"id":628,"city":"Tanggeung Kolot"},
{"id":629,"city":"Miaoqian"},
{"id":630,"city":"Quebradas"},
{"id":631,"city":"Bonnyville"},
{"id":632,"city":"Sukhinichi"},
{"id":633,"city":"Manorom"},
{"id":634,"city":"Netvořice"},
{"id":635,"city":"Taquara"},
{"id":636,"city":"Jatirejo"},
{"id":637,"city":"Uppsala"},
{"id":638,"city":"Limoges"},
{"id":639,"city":"Songshan"},
{"id":640,"city":"Drahichyn"},
{"id":641,"city":"Mercedes"},
{"id":642,"city":"Puyang"},
{"id":643,"city":"Thị Trấn Tam Điệp"},
{"id":644,"city":"Yefremov"},
{"id":645,"city":"Gulariyā"},
{"id":646,"city":"Putou"},
{"id":647,"city":"Sumberejo"},
{"id":648,"city":"Joroinen"},
{"id":649,"city":"Daliyuan"},
{"id":650,"city":"Ciudad Barrios"},
{"id":651,"city":"Cox’s Bāzār"},
{"id":652,"city":"Le Kremlin-Bicêtre"},
{"id":653,"city":"Vaitogi"},
{"id":654,"city":"Kabare"},
{"id":655,"city":"Thị Trấn Phú Mỹ"},
{"id":656,"city":"Barranquilla"},
{"id":657,"city":"Puolanka"},
{"id":658,"city":"Santa Cruz de El Seibo"},
{"id":659,"city":"Czerwin"},
{"id":660,"city":"Cirompang"},
{"id":661,"city":"Thị Trấn Thọ Xuân"},
{"id":662,"city":"Bafoussam"},
{"id":663,"city":"Menampukrajan"},
{"id":664,"city":"Baitu"},
{"id":665,"city":"Capatárida"},
{"id":666,"city":"Dagestanskiye Ogni"},
{"id":667,"city":"Skore"},
{"id":668,"city":"Kaltan"},
{"id":669,"city":"Charleville-Mézières"},
{"id":670,"city":"Tianjiaba"},
{"id":671,"city":"Berlin"},
{"id":672,"city":"Zhangping"},
{"id":673,"city":"Shouxihu"},
{"id":674,"city":"Yantian"},
{"id":675,"city":"Kenscoff"},
{"id":676,"city":"Akademicheskoe"},
{"id":677,"city":"Kihancha"},
{"id":678,"city":"Mesopotam"},
{"id":679,"city":"Wotho"},
{"id":680,"city":"Kołbiel"},
{"id":681,"city":"Hatogaya-honchō"},
{"id":682,"city":"Vinces"},
{"id":683,"city":"Karangtengah Lor"},
{"id":684,"city":"Bolian"},
{"id":685,"city":"Árta"},
{"id":686,"city":"Krzynowłoga Mała"},
{"id":687,"city":"Lisiy Nos"},
{"id":688,"city":"Kobyzhcha"},
{"id":689,"city":"Kotlas"},
{"id":690,"city":"Sihe"},
{"id":691,"city":"Dorp Tera Kora"},
{"id":692,"city":"Náfplio"},
{"id":693,"city":"Sumurber"},
{"id":694,"city":"Chengdu"},
{"id":695,"city":"Traiguén"},
{"id":696,"city":"Dno"},
{"id":697,"city":"Maquanzhen"},
{"id":698,"city":"Reggada"},
{"id":699,"city":"Fukuechō"},
{"id":700,"city":"Putatbasiun"},
{"id":701,"city":"Malishka"},
{"id":702,"city":"Denver"},
{"id":703,"city":"Miskolc"},
{"id":704,"city":"Kirkuk"},
{"id":705,"city":"Huntington"},
{"id":706,"city":"Pak Phanang"},
{"id":707,"city":"Chiţcani"},
{"id":708,"city":"Chimichagua"},
{"id":709,"city":"Phúc Yên"},
{"id":710,"city":"Darłowo"},
{"id":711,"city":"Uhlove"},
{"id":712,"city":"Sri Jayewardenepura Kotte"},
{"id":713,"city":"Gyumri"},
{"id":714,"city":"Suban Jeriji"},
{"id":715,"city":"Qingyuan"},
{"id":716,"city":"Surin"},
{"id":717,"city":"Pandangan Kulon"},
{"id":718,"city":"Sangumata"},
{"id":719,"city":"Orlovka"},
{"id":720,"city":"Qiaolin"},
{"id":721,"city":"Matwaḩ"},
{"id":722,"city":"Yirga ‘Alem"},
{"id":723,"city":"Yanglang"},
{"id":724,"city":"Nîmes"},
{"id":725,"city":"Cahuanuyo"},
{"id":726,"city":"Thiers"},
{"id":727,"city":"Juupajoki"},
{"id":728,"city":"Santo Domingo"},
{"id":729,"city":"Kolodenka"},
{"id":730,"city":"Áyioi Apóstoloi"},
{"id":731,"city":"Şaḩam"},
{"id":732,"city":"Szlachta"},
{"id":733,"city":"Ximafang"},
{"id":734,"city":"Honkajoki"},
{"id":735,"city":"Dolní Bečva"},
{"id":736,"city":"Iguatu"},
{"id":737,"city":"Sukamantri Satu"},
{"id":738,"city":"Växjö"},
{"id":739,"city":"Camp Ithier"},
{"id":740,"city":"Fosses"},
{"id":741,"city":"Gaobeijie"},
{"id":742,"city":"Kafr Qūd"},
{"id":743,"city":"Limanowa"},
{"id":744,"city":"Agrela"},
{"id":745,"city":"Jiepai"},
{"id":746,"city":"Jiaotang"},
{"id":747,"city":"Jianling"},
{"id":748,"city":"Ning’an"},
{"id":749,"city":"Boshof"},
{"id":750,"city":"Satipo"},
{"id":751,"city":"Guotan"},
{"id":752,"city":"Zaječar"},
{"id":753,"city":"Yuxi"},
{"id":754,"city":"Tong’an"},
{"id":755,"city":"Takahashi"},
{"id":756,"city":"Żarki"},
{"id":757,"city":"Witkowo"},
{"id":758,"city":"Soloneshnoye"},
{"id":759,"city":"Aileu"},
{"id":760,"city":"Khadyzhensk"},
{"id":761,"city":"Dongchen"},
{"id":762,"city":"Korsze"},
{"id":763,"city":"Jiwei"},
{"id":764,"city":"Primorsk"},
{"id":765,"city":"Malusac"},
{"id":766,"city":"Bagani"},
{"id":767,"city":"Haiyang"},
{"id":768,"city":"Córdoba"},
{"id":769,"city":"Merkezköy"},
{"id":770,"city":"Sumbe"},
{"id":771,"city":"Markaz al Marīr"},
{"id":772,"city":"Sredno Konjare"},
{"id":773,"city":"Llazicë"},
{"id":774,"city":"Nanwai"},
{"id":775,"city":"Lingbei"},
{"id":776,"city":"Mogzon"},
{"id":777,"city":"Unión de Reyes"},
{"id":778,"city":"Shilovo"},
{"id":779,"city":"Sulūq"},
{"id":780,"city":"Patpata Segundo"},
{"id":781,"city":"Željezno Polje"},
{"id":782,"city":"Jianfeng"},
{"id":783,"city":"Naas"},
{"id":784,"city":"Maardu"},
{"id":785,"city":"Semikarakorsk"},
{"id":786,"city":"Cabreúva"},
{"id":787,"city":"San Fernando"},
{"id":788,"city":"Chengkan"},
{"id":789,"city":"Santa Cruz das Flores"},
{"id":790,"city":"Putatbasiun"},
{"id":791,"city":"Bojong"},
{"id":792,"city":"Caminauit"},
{"id":793,"city":"Quimperlé"},
{"id":794,"city":"Bergville"},
{"id":795,"city":"Jianguo"},
{"id":796,"city":"Saint-Étienne"},
{"id":797,"city":"Tagiura"},
{"id":798,"city":"Nakhon Sawan"},
{"id":799,"city":"Briteiros Santa Leocádia"},
{"id":800,"city":"Mauponggo"},
{"id":801,"city":"Vagos"},
{"id":802,"city":"Zhongfang"},
{"id":803,"city":"Beckerich"},
{"id":804,"city":"Paraguaçu Paulista"},
{"id":805,"city":"Gaoqiu"},
{"id":806,"city":"Крушопек"},
{"id":807,"city":"Thị Trấn Tà Lùng"},
{"id":808,"city":"Emmen"},
{"id":809,"city":"Tarbes"},
{"id":810,"city":"Santa Cruz do Capibaribe"},
{"id":811,"city":"Muslyumovo"},
{"id":812,"city":"Mandangoa"},
{"id":813,"city":"Alcanena"},
{"id":814,"city":"Baun"},
{"id":815,"city":"Bojong"},
{"id":816,"city":"Taoyuan"},
{"id":817,"city":"Iquique"},
{"id":818,"city":"Ūdalah"},
{"id":819,"city":"Narowlya"},
{"id":820,"city":"Oslo"},
{"id":821,"city":"Hikone"},
{"id":822,"city":"Solo"},
{"id":823,"city":"Nicola Town"},
{"id":824,"city":"Psygansu"},
{"id":825,"city":"Karangsari"},
{"id":826,"city":"El Zapote"},
{"id":827,"city":"Birmingham"},
{"id":828,"city":"Kakaek"},
{"id":829,"city":"Duzhou"},
{"id":830,"city":"Rokietnica"},
{"id":831,"city":"Brnaze"},
{"id":832,"city":"Helie"},
{"id":833,"city":"Xi’an"},
{"id":834,"city":"Xinghua"},
{"id":835,"city":"Cabo Frio"},
{"id":836,"city":"Detusoko"},
{"id":837,"city":"Rentian"},
{"id":838,"city":"Linjiang"},
{"id":839,"city":"Zhongcun"},
{"id":840,"city":"Xujiadian"},
{"id":841,"city":"Bone South"},
{"id":842,"city":"Ambanja"},
{"id":843,"city":"Huayuan"},
{"id":844,"city":"Zaki Biam"},
{"id":845,"city":"Székesfehérvár"},
{"id":846,"city":"Dhalie"},
{"id":847,"city":"Bor Ondor"},
{"id":848,"city":"Har Nur"},
{"id":849,"city":"Ilagan"},
{"id":850,"city":"Ros’"},
{"id":851,"city":"Jinnan"},
{"id":852,"city":"Stockholm"},
{"id":853,"city":"Belize City"},
{"id":854,"city":"Telde"},
{"id":855,"city":"Salogon"},
{"id":856,"city":"Carpenter"},
{"id":857,"city":"Arlöv"},
{"id":858,"city":"Ed"},
{"id":859,"city":"Beigucheng"},
{"id":860,"city":"Kekeri"},
{"id":861,"city":"Loum"},
{"id":862,"city":"Stanišić"},
{"id":863,"city":"‘Ayn an Nasr"},
{"id":864,"city":"Jiubao"},
{"id":865,"city":"Fundación"},
{"id":866,"city":"Höviyn Am"},
{"id":867,"city":"Yeoju"},
{"id":868,"city":"Al Jubayl"},
{"id":869,"city":"San Pablo"},
{"id":870,"city":"Santa Cruz"},
{"id":871,"city":"Patulul"},
{"id":872,"city":"Tidili Mesfioua"},
{"id":873,"city":"Yuankeng"},
{"id":874,"city":"Longonjo"},
{"id":875,"city":"Daru"},
{"id":876,"city":"Tebluru"},
{"id":877,"city":"Puerto Santander"},
{"id":878,"city":"Bolkhov"},
{"id":879,"city":"Wielka Wieś"},
{"id":880,"city":"Puńsk"},
{"id":881,"city":"Guancangping"},
{"id":882,"city":"Uglovoye"},
{"id":883,"city":"Richmond"},
{"id":884,"city":"Yvetot"},
{"id":885,"city":"Malusac"},
{"id":886,"city":"Macari"},
{"id":887,"city":"Krasnyye Barrikady"},
{"id":888,"city":"Xia Dawo"},
{"id":889,"city":"Nanmen"},
{"id":890,"city":"Zürich"},
{"id":891,"city":"Valkeakoski"},
{"id":892,"city":"Rammūn"},
{"id":893,"city":"Adir"},
{"id":894,"city":"Havana"},
{"id":895,"city":"Zavidovo"},
{"id":896,"city":"Strogino"},
{"id":897,"city":"Tagana-an"},
{"id":898,"city":"Al Hufūf"},
{"id":899,"city":"Erada"},
{"id":900,"city":"Židlochovice"},
{"id":901,"city":"Bachok"},
{"id":902,"city":"Mūsa Khel Bāzār"},
{"id":903,"city":"Zhaotong"},
{"id":904,"city":"Vasil’yevskiy Mokh"},
{"id":905,"city":"Honglu"},
{"id":906,"city":"Río Gallegos"},
{"id":907,"city":"Nahiyat Ghammas"},
{"id":908,"city":"Permas"},
{"id":909,"city":"Petit Raffray"},
{"id":910,"city":"Borås"},
{"id":911,"city":"Chokwé"},
{"id":912,"city":"Emiliano Zapata"},
{"id":913,"city":"Wola Uhruska"},
{"id":914,"city":"Calarcá"},
{"id":915,"city":"Pataruman"},
{"id":916,"city":"Tafeng"},
{"id":917,"city":"Stizhkivs’ke"},
{"id":918,"city":"Revolucion"},
{"id":919,"city":"Burlatskoye"},
{"id":920,"city":"Chicago"},
{"id":921,"city":"Ambanja"},
{"id":922,"city":"Kalapagenep"},
{"id":923,"city":"Beidaihehaibin"},
{"id":924,"city":"Patea"},
{"id":925,"city":"Kuytun"},
{"id":926,"city":"Marechal Cândido Rondon"},
{"id":927,"city":"Valença"},
{"id":928,"city":"Chengjiao"},
{"id":929,"city":"Carpiquet"},
{"id":930,"city":"São Luís"},
{"id":931,"city":"Kandahār"},
{"id":932,"city":"Alvito de São Pedro"},
{"id":933,"city":"Charleville-Mézières"},
{"id":934,"city":"Ayacucho"},
{"id":935,"city":"Oslo"},
{"id":936,"city":"San Antonio Aguas Calientes"},
{"id":937,"city":"Yacheng"},
{"id":938,"city":"Severka"},
{"id":939,"city":"Kasaoka"},
{"id":940,"city":"Montpellier"},
{"id":941,"city":"Cartagena"},
{"id":942,"city":"Silca"},
{"id":943,"city":"Aba"},
{"id":944,"city":"Chimbas"},
{"id":945,"city":"Kuala Terengganu"},
{"id":946,"city":"Skibbereen"},
{"id":947,"city":"Tanjungrejo Lor"},
{"id":948,"city":"Nortelândia"},
{"id":949,"city":"Jatobá"},
{"id":950,"city":"Shanghudi"},
{"id":951,"city":"Kabare"},
{"id":952,"city":"Lhabupu"},
{"id":953,"city":"Selikhino"},
{"id":954,"city":"Kiukasen"},
{"id":955,"city":"Buawan"},
{"id":956,"city":"Zlechov"},
{"id":957,"city":"Bizhbulyak"},
{"id":958,"city":"Goranboy"},
{"id":959,"city":"Longaví"},
{"id":960,"city":"Jiudian"},
{"id":961,"city":"Wādī Raḩḩāl"},
{"id":962,"city":"Bulembu"},
{"id":963,"city":"Kamwenge"},
{"id":964,"city":"Hujra"},
{"id":965,"city":"Rouen"},
{"id":966,"city":"Lianokládhion"},
{"id":967,"city":"Manlio Fabio Altamirano"},
{"id":968,"city":"Weitang"},
{"id":969,"city":"Xiangang"},
{"id":970,"city":"Kathmandu"},
{"id":971,"city":"Zhukovka"},
{"id":972,"city":"Igbor"},
{"id":973,"city":"Changnyeong"},
{"id":974,"city":"Drawno"},
{"id":975,"city":"Arfará"},
{"id":976,"city":"Arroyo Salado"},
{"id":977,"city":"Drochia"},
{"id":978,"city":"Chýnov"},
{"id":979,"city":"Denton"},
{"id":980,"city":"Beijie"},
{"id":981,"city":"Nicolet"},
{"id":982,"city":"Braunschweig"},
{"id":983,"city":"Vidovci"},
{"id":984,"city":"Radenković"},
{"id":985,"city":"Tembang"},
{"id":986,"city":"La Loma"},
{"id":987,"city":"Gardēz"},
{"id":988,"city":"Saint Helier"},
{"id":989,"city":"Barr"},
{"id":990,"city":"Purranque"},
{"id":991,"city":"Zhongzi"},
{"id":992,"city":"Jieshou"},
{"id":993,"city":"La Cruz de Taratara"},
{"id":994,"city":"Kastrat"},
{"id":995,"city":"Siedleczka"},
{"id":996,"city":"Kónitsa"},
{"id":997,"city":"Fenshui"},
{"id":998,"city":"Ladozhskaya"},
{"id":999,"city":"Xinhua"},
{"id":1000,"city":"Ashtarak"}]

app.get('/data/:value', (req, res) => {
    const searchTerm = req.params.value.toLowerCase();
  const filteredData = data.filter(item => item.city.toLowerCase().includes(searchTerm));
  res.json(filteredData);
})  

app.listen(8000, () => {
    console.log('App listening on port 8000');
})