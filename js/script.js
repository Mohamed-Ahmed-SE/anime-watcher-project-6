
let animeData = [];

async function fetchAnimeData() {
    try {
        const response = await fetch('data/animeData.json');
        const json = await response.json();

        // Optionally cache with expiry
        const now = new Date().getTime();
        const storageData = {
            data: json,
            expires: now + 3600000,
            timestamp: now
        };
        localStorage.setItem('animeDatabase', JSON.stringify(storageData));

        animeData = json;
        initializeAll();
    } catch (error) {
        console.error('Failed to fetch anime data:', error);
    }
}

fetchAnimeData(); // 🔁 start here instead of hardcoding

document.addEventListener('DOMContentLoaded', () => {


    const data = [
        {
            "name": "Solo Leveling",
            "land": 8.9,
            "watch": "https://anime3rb.com/episode/ore-dake-level-up-na-ken/1",
            "trailer": "https://www.youtube.com/watch?v=byJ7pxxhaDY&pp=ygUWc29sb21sZXZlbGluZyB0cmFpbGxlcg%3D%3D",
            "section": "popular",
            "nigga": "images/solo-leveling-featured-image.avif",
            "date": 2023,
            "postist": "images/e0b32-17061405508835-1920.avif",
            "genres": "Shonen, Action, Fantasy",
            "type": "series",
            "synopsis": "Weakest E-rank hunter Sung Jin-Woo gains a mysterious system allowing him to level up after surviving a deadly double dungeon. As he grows stronger through quests and battles, Jin-Woo uncovers secrets about the gates spawning monsters and his own unique abilities. Transforming from underdog to overpowered shadow monarch, he protects humanity while navigating political conspiracies and otherworldly threats.",
            "sposter": "images/download (11).jpeg",
            "description": "Weak hunter gains leveling system, becomes shadow monarch fighting monsters and uncovering dark secrets.",
            "video": "videos/Solo Leveling Season 2 -Arise from the Shadow- Opening _  ReawakeR  by LiSA feat Felix of Stray Kids.mp4"
        },
        {
            "name": "Oshi no Ko",
            "land": 8.8,
            "watch": "https://anime3rb.com/episode/oshi-no-ko/1",
            "trailer": "https://www.youtube.com/watch?v=zntY4A4GPU0&pp=ygUSb3NoaSBubyBrbyB0cmFpbGVy",
            "section": "popular",
            "nigga": "images/filters_quality(95)format(webp) (2).webp",
            "date": 2023,
            "postist": "images/filters_quality(95)format(webp) (6).webp",
            "genres": "Drama, Psychological, Supernatural",
            "type": "series",
            "synopsis": "A renowned obstetrician is reincarnated as Aquamarine Hoshino, the son of his former patient - a famous idol named Ai. When Ai is murdered, Aqua and his twin sister Ruby vow to uncover the truth behind her death. Navigating Japan's ruthless entertainment industry, they encounter dark secrets, twisted relationships, and the harsh realities of stardom, all while dealing with their own supernatural connections to past lives.",
            "description": "Reincarnated doctor investigates idol mother's murder in dark exploration of entertainment industry's underbelly.",
            "sposter": "images/Oshi no Ko Anime Cover.jpeg",
            "video": "videos/Oshi no Ko Opening 1 (4k 60FPS)┃Creditless.mp4"
        },
        {
            "name": "Kaiju No. 8",
            "land": 8.4,
            "watch": "https://anime3rb.com/episode/kaiju-no-8/1",
            "trailer": "https://www.youtube.com/watch?v=V0OZWzTAqHg&pp=ygUTa2FpanUgbm8gOCB0cmFpbGxlcg%3D%3D",
            "section": "popular",
            "nigga": "images/filters_quality(97)format(webp).webp",
            "date": 2024,
            "postist": "images/filters_quality(95)format(webp) (7).webp",
            "genres": "Action, Sci-Fi, Comedy, Monster",
            "type": "series",
            "synopsis": "In a world plagued by destructive kaiju (monsters), Kafka Hibino dreams of joining the Defense Force to protect humanity—but at 32, he's stuck cleaning up the aftermath of attacks. When a bizarre incident transforms him into a human-kaiju hybrid with monstrous strength (dubbed 'Kaiju No. 8'), he hides his condition while using his powers to fight other kaiju. As Kafka trains alongside elite recruits—including his childhood friend Mina, now a captain—he must conceal his secret from the very organization that exterminates creatures like him. The series blends explosive battles with workplace humor, exploring Kafka's struggle to prove himself despite being the enemy he swore to destroy.",
            "description": "Aging cleanup worker gains kaiju powers, secretly joining the monster-fighting force he idolizes.",
            "sposter": "images/VISUAL KEY-2.jpeg",
            "video": "videos/「Creditless」Kaiju No. 8 OP _ Opening「UHD 60FPS」.mp4"
        },
        {
            "name": "Attack on Titan",
            "land": 8.5,
            "watch": "https://anime3rb.com/episode/shingeki-no-kyojin/1",
            "trailer": "https://www.youtube.com/watch?v=LV-nazLVmgo&pp=ygUYYXR0YWNrIG9uIHRpdGFuIHRyYWlsbGVy",
            "section": "popular",
            "nigga": "images/GR751KNZY-backdrop_wide.avif",
            "date": 2013,
            "postist": "images/unnamed.webp",
            "genres": "Shonen, Action, Dark Fantasy",
            "type": "series",
            "description": "Eren fights man-eating Titans, discovers he can transform into one, uncovers world's brutal truths.",
            "synopsis": "In a world where humanity resides within massive walls to escape giant humanoid Titans, young Eren Yeager vows revenge after Titans destroy his home and kill his mother. Joining the Scout Regiment, Eren discovers he can transform into a Titan himself. As he fights alongside Mikasa and Armin, dark truths emerge about the Titans' origins and the world beyond the walls in this brutal tale of survival and freedom.",
            "sposter": "images/AOT poster.jpeg",
            "video": "videos/TVアニメ「進撃の巨人」The Final Season Part 2ノンクレジットOP ｜SiM「The Rumbling」 - ぽにきゃん-Anime PONY CANYON (1080p, h264).mp4"
        },
        {
            "name": "Jujutsu Kaisen",
            "land": 8.8,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=aybr_9MzKXI&pp=ygUXanVqdXRzdSBrYWlzZW4gdHJhaWxsZXI%3D",
            "section": "popular",
            "nigga": "images/filters_quality(95)format(webp) (1).webp",
            "date": 2020,
            "description": "Yuji hosts cursed king Sukuna, trains as sorcerer to collect cursed objects in deadly battles.",
            "postist": "images/jjk_vfilm_1734749525906_1734749539867.jpg",
            "genres": "Shonen, Action, Supernatural",
            "type": "series",
            "synopsis": "After swallowing a cursed finger to save friends, high schooler Yuji Itadori becomes host to Ryomen Sukuna, the King of Curses. Enrolled at Tokyo Jujutsu High, Yuji trains with sorcerers Megumi and Nobara to collect Sukuna's fragments. Through deadly exorcisms and shocking betrayals, they confront curse users like Mahito while uncovering corruption in the jujutsu world, culminating in the apocalyptic Shibuya Incident.",
            "sposter": "images/Jujutsu kaisen 2nd Season.jpeg",
            "video": "videos/TVアニメ『呪術廻戦』第2期「渋谷事変」ノンクレジットOPムービー／OPテーマ：King Gnu「SPECIALZ」｜毎週木曜夜11時56分～MBS_TBS系列全国28局にて放送中!! - TOHO animation チャンネル (1080p, h264).mp4"
        },
        {
            "name": "One Piece",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=3NUizzImhig&pp=ygUSb25lIHBpZWNlIHRyYWlsbGVy",
            "section": "upcoming",
            "nigga": "images/5265-SeriesHeaders_OP_2000x800_wm.jpg",
            "date": 1999,
            "genres": "Shonen, Adventure, Action",
            "type": "series",
            "synopsis": "Rubber-limbed pirate Monkey D. Luffy assembles a crew to find the legendary One Piece treasure and become King of the Pirates. From battling warlords to overthrowing corrupt kingdoms, the Straw Hats explore fantastical islands in the Grand Line. Their journey reveals ancient weapons, the Void Century's secrets, and the World Government's dark history in this decades-spanning epic about friendship and freedom.",
            "sposter": "images/one piece egghead island arc promotional poster.jpeg",
        },
        {
            "name": "Demon Slayer",
            "land": 8.6,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=wyiZWYMilgk&t=10s&pp=ygUVZGVtb24gc2xheWVyIHRyYWlsbGVy",
            "section": "popular",
            "nigga": "images/demon-slayer_-kimetsu-no-yaiba-to-the-hashira-training.png",
            "date": 2019,
            "description": "Tanjiro becomes demon slayer to cure sister, battles powerful demons with unique breathing techniques.",
            "postist": "images/demon-slayer-anime-vy37autfo82jvft7.jpg",
            "genres": "Shonen, Action, Supernatural",
            "type": "series",
            "synopsis": "After demons slaughter his family and transform sister Nezuko, Tanjiro Kamado joins the Demon Slayer Corps. Mastering water breathing techniques, he hunts demon progenitor Muzan Kibutsuji while seeking a cure. With fiery Inosuke and thunder-wielding Zenitsu, they battle Twelve Kizuki demons in visually stunning clashes, culminating in the final showdown at the Infinity Castle.",
            "sposter": "images/Kny _Infinity castle_.jpeg",
            "video": "videos/Demon Slayer - Opening 1 _ 4K _ 60FPS _ Creditless _.mp4"
        },


        {
            "name": "Black Clover",
            "land": 8.2,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=QwNWY6z93O4&pp=ygUVYmxhY2sgY2xvdmVyIHRyYWlsbGVy",
            "section": "popular",
            "nigga": "images/image5.jpg",
            "date": "2017",
            "description": "Magicless Asta wields anti-magic to become Wizard King, challenging magical society's prejudices.",
            "postist": "images/maxresdefault.jpg",
            "genres": "Action, Fantasy, Adventure",
            "type": "series",
            "synopsis": "In a magic-dominated world, orphan Asta receives a rare anti-magic grimoire despite having no mana. Joining the Black Bulls squad with rival Yuno, he aims to become Wizard King. Through royal knight exams and battles against the Spade Kingdom's Dark Triad, Asta's tenacity challenges magic society's prejudices while uncovering his demonic heritage and the truth about the Clover Kingdom's history.",
            "sposter": "images/Black clover.jpeg",
            "video": "videos/Black Clover Opening 10 _ Black Catcher.mp4"
        },
        {
            "name": "Your Lie in April",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=3aL0gDZtFbE&pp=ygUaeW91ciBsaWUgaW4gYXByaWwgdHJhaWxsZXI%3D",
            "section": "popular",
            "nigga": "images/G63V7KN9Y-backdrop_wide.avif",
            "date": "2014",
            "description": "Pianist Kousei rediscovers music through violinist Kaori in emotional story of love and loss.",
            "postist": "images/846f0e485f0a43c06300b3c60546556a.jpg",
            "genres": "Romance, Drama, Music",
            "type": "series",
            "synopsis": "Piano prodigy Kousei Arima quits playing after his mother's death until free-spirited violinist Kaori Miyazono reignites his passion. Through music competitions and heartfelt performances, Kousei confronts his trauma while Kaori hides her terminal illness. The final concert becomes a bittersweet farewell, celebrating life's fleeting beauty through Chopin's melodies in this tear-jerking ode to love, loss, and artistic expression.",
            "sposter": "images/Your Lie in April S1E18.jpeg",
            "video": "videos/Your Lie in April OP_Opening Theme - Hikaru Nara.mp4"
        },
        {
            "name": "Tokyo Ghoul",
            "land": 7.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=vGuQeQsoRgU&pp=ygUTdG9reW8gZ2hvdWwgdHJhaWxlcg%3D%3D",
            "section": "popular",
            "nigga": "images/G6NV7Z50Y-backdrop_wide.avif",
            "date": "2014",
            "description": "Kaneki becomes half-ghoul, struggles between human morals and ghoul instincts in dark world.",
            "postist": "images/K57STq.webp",
            "genres": "Horror, Psychological, Supernatural",
            "type": "series",
            "synopsis": "College student Kaneki becomes a half-ghoul after a date gone wrong, forced to consume human flesh while maintaining his humanity. Navigating the ghoul underground with cafe owner Yoshimura, he's torn between CCG investigators and radical ghoul factions. The Cochlea arc sees Kaneki's multiple personality fractures culminate in a devastating clash between his human morality and ghoul survival instincts.",
            "sposter": "images/Tokyo Ghoul 1.jpeg",
            "video": "videos/Tokyo Ghoul Opening _ Unravel.mp4"
        },


        {
            "name": "Chainsaw Man",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=d1n552v1ng0&pp=ygUUY2hhaW5zYXcgbWFuIHRyYWlsZXI%3D",
            "section": "popular",
            "nigga": "images/denji-and-power-are-goofy-together-in-chainsaw-man.avif",
            "date": "2022",
            "description": "Denji merges with Chainsaw Devil, hunts demons while uncovering dark government conspiracies.",
            "postist": "images/chainsaw-man-episode-05-.webp",
            "genres": "Seinen, Action, Dark Fantasy",
            "type": "series",
            "synopsis": "Poverty-stricken Denji merges with the Chainsaw Devil Pochita, becoming a lethal devil hunter for the Public Safety Bureau. Partnered with manipulative Makima, he battles gun-wielding assassins and primal fears like the Darkness Devil. The explosive finale reveals Makima's plan to erase death using Denji's power, leaving him rebuilding life with new companions in a world forever changed by devil-human dynamics.",
            "sposter": "images/71DOGFSR6bL._AC_SL1200_.jpg",
            "video": "videos/「Creditless」Chainsaw Man OP _ Opening「UHD 60FPS」.mp4"
        },


        {
            "name": "Sakamoto Days",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=fPopd3ZOGUY&pp=ygUVc2FrYW1vdG8gZGF5cyB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/AAAABZClJixOJ7pbXWNBv2VDAjxgW82JL0mGZj0zCu_cyw41C8ay306uajKgF2vOcylnHC19UDobva2UFPI_QnhZaJSfmJ6l1opU42fV.jpg",
            "date": 2025,
            "genres": "Shonen, Action, Fantasy",
            "type": "series",
            "synopsis": "Taro Sakamoto, once the most feared assassin in the underworld, has traded his bloodstained past for the quiet life of a convenience store owner. Now overweight and devoted to his family, Sakamoto’s lethal instincts lie dormant—until a shadowy organization drags him back into the chaos. Balancing dad jokes with deadly precision, he dispatches waves of killers using convenience store items as improvised weapons. But as old enemies resurface and new threats emerge, Sakamoto must protect his newfound peace without revealing his dark history to his wife and daughter. This high-octane blend of brutal martial arts, dark comedy, and heartwarming family drama redefines the hitman genre, pitting a retired legend against a world that refuses to let him retire. Will his rusty skills hold up against a new generation of assassins?",
            "sposter": "images/Sakamoto Days.jpeg",
        },
        {
            "name": "Solo Leveling",
            "land": 8.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=whx0WCtc9DQ&pp=ygUdc29sbyBsZXZlbGluZyB0cmFpbGxlciBtYW5od2E%3D",
            "section": "manhwa",
            "nigga": "images/thumb-1920-1054068.png",
            "date": 2023,
            "genres": "Shonen, Action, Fantasy",
            "type": "series",
            "synopsis": "Weakest E-rank hunter Sung Jin-Woo gains a mysterious system allowing him to level up after surviving a deadly double dungeon. As he grows stronger through quests and battles, Jin-Woo uncovers secrets about the gates spawning monsters and his own unique abilities. Transforming from underdog to overpowered shadow monarch, he protects humanity while navigating political conspiracies and otherworldly threats.",
            "sposter": "images/Solo Leveling.jpeg",
        },
        {
            "name": "Devil May Cry",
            "land": 7.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=OlEqHXRrcpc&pp=ygUVZGV2aWwgbWF5IGNyeSB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/AAAAQXlDd6OlJPtu2Ida7hH89I0ogpgpEUZsDjNNHLTLCfP3cw4zkf-7jJYZhOa-hgxeeh0RoUwpUMNrB01wubXye1jHZ8go_fYAj8F0VGZ5EKCPJG17Pvvow5jliErGuvCQOsULCrg59cnve60DYD3aeIuy.jpg",
            "date": 2025,
            "genres": "Fantasy, Drama",
            "type": "series",
            "synopsis": "In a world plagued by demonic forces, Dante, a half-human, half-demon warrior, runs Devil May Cry, a business specializing in hunting down supernatural threats. As dark entities threaten to tip the balance between the human and demon realms, Dante must face powerful foes, uncover hidden conspiracies, and confront his own past. With allies and enemies alike drawn into the chaos, his journey becomes a relentless battle for survival and redemption.",
            "sposter": "images/Devil May Cry (Netflix) Official Poster.jpeg"
        },
        {
            "name": "Shangri-La Frontier",
            "land": 7.5,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=0XmM7YZjPSc&pp=ygUbc2hhbmdyaS1sYSBmcm9udGllciB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/G79H23Z8P-backdrop_wide.avif",
            "date": 2025,
            "genres": "Action, Adventure, Fantasy, Sci-Fi",
            "type": "series",
            "synopsis": "In a world where advanced VR games dominate, a skilled player known as Sunraku takes on the ultimate challenge—Shangri-La Frontier. With no prior knowledge, he navigates this perilous world, battling monsters, uncovering hidden secrets, and pushing his skills to the limit. As he delves deeper, alliances form, rivalries ignite, and the game's mysteries begin to unfold. Can he conquer this world and carve his legacy in gaming history?",
            "sposter": "images/MV5BMjdlM2NmNDYtMjI2Ny00ZWM3LThhMzUtMTYxMWE1YThmNDUyXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "name": "The Apothecary Diaries",
            "land": 8.5,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=XYNGkSvFT8c&pp=ygUedGhlIGFwb3RoZWNhcnkgZGlhcmllcyB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/the-apothecary-diaries-s2-base-assets-16x9.png",
            "date": 2025,
            "genres": "Historical, Mystery, Drama",
            "type": "series",
            "synopsis": "Set in an imperial court, Maomao, a sharp-witted apothecary, is taken from her peaceful life and forced to serve in the palace. Using her vast medical knowledge, she unravels conspiracies, solves medical mysteries, and navigates the complex web of court intrigue. With her keen intellect and unyielding spirit, Maomao quickly gains the attention of powerful figures. But can she survive the dangerous secrets hidden within the palace walls?",
            "sposter": "images/MV5BNjAxMmFjZjgtYjM1ZS00NzdmLTliZDktZmIyMzU5YTBlNDBmXkEyXkFqcGc@._V1_.jpg"
        },
        {
            "name": "Takt Op. Destiny",
            "land": 7.8,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=0lNjes4la9U&pp=ygUYdGFrdCBvcC4gZGVzdGlueSB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/Takt-op-8.jpg",
            "date": 2024,
            "genres": "Action, Fantasy, Music",
            "type": "series",
            "sposter": "images/takt op destiny.jpeg",
            "synopsis": "In a world where music has been banned to prevent attacks by music-hating D2 creatures, conductors called 'Musicarts' fight using musical energy. Takt Asahina partners with Destiny, a humanoid Musicart, on a journey to restore music while battling monstrous forces. Their harmony holds the key to humanity's survival in this symphonic battle for existence."
        },
        {
            "name": "Blue Lock",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=QAlsuW5EXUg&pp=ygURYmx1ZSBsb2NrIHRyYWlsZXI%3D",
            "section": "upcoming",
            "nigga": "images/G4PH0WEKE-backdrop_wide.avif",
            "date": 2025,
            "genres": "Sports, Psychological, Drama",
            "type": "series",
            "sposter": "images/(ﾉ◕ヮ◕)ﾉ__･ﾟ✧ blue lock season 2.jpeg",
            "synopsis": "After Japan's World Cup failure, 300 young strikers are isolated in Blue Lock - a brutal training facility to create the ultimate egoist forward. Protagonist Yoichi Isagi must outplay rivals in high-stakes soccer matches where losers face permanent elimination. This revolutionary project challenges traditional teamwork concepts in sports."
        },
        {
            "name": "Spy x Family",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=ofXigq9aIpo&pp=ygUUc3B5IHggZmFtaWx5IHRyYWlsZXI%3D",
            "section": "upcoming",
            "nigga": "images/filters_quality(95)format(webp).webp",
            "date": 2025,
            "genres": "Action, Comedy, Slice of Life",
            "type": "series",
            "sposter": "images/Season 2 Key Visual 1 _ October 7 Premiere.jpeg",
            "synopsis": "Master spy Twilight creates a fake family to infiltrate an elite school, unknowingly adopting a telepathic daughter and marrying an assassin. This unconventional family maintains their secrets while navigating domestic life and dangerous missions, blending heartwarming moments with explosive action in Cold War-esque intrigue."
        },
        {
            "name": "Blue Exorcist",
            "land": 7.6,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=0HHNeeXrysA&pp=ygUVYmx1ZSBleG9yY2lzdCB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/G649PJ0JY-backdrop_wide.avif",
            "date": 2025,
            "genres": "Supernatural, Action, Drama",
            "type": "series",
            "sposter": "images/Blue Exorcist -Shimane Illuminati Saga.jpeg",
            "synopsis": "Rin Okumura discovers he's Satan's son and joins True Cross Academy to become an exorcist. Wielding demonic flames and his sacred sword, he battles supernatural threats while struggling with his heritage. The series explores identity and redemption through intense demon-hunting action and complex family dynamics."
        },
        {
            "name": "Frieren: Beyond Journey's End",
            "land": 9.1,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=Iwr1aLEDpe4&pp=ygUkZnJpZXJlbiBiZXlvbmQgam91cm5leSdzIGVuZCB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/GG5H5XQX4-backdrop_wide.avif",
            "date": 2025,
            "genres": "Fantasy, Drama, Slice of Life",
            "type": "series",
            "sposter": "images/download (12).jpeg",
            "synopsis": "Elven mage Frieren confronts mortality after her adventuring party's passing. Traveling with new companions, she retraces their epic journey, collecting spells and understanding human connections. This contemplative fantasy explores legacy and the passage of time through stunning magical landscapes and emotional character growth."
        },
        {
            "name": "Fire Force",
            "land": 7.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=fzM43HZ6oeg&pp=ygUSZmlyZSBmb3JjZSB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/GYQWNXPZY-backdrop_wide.avif",
            "date": 2025,
            "genres": "Action, Supernatural, Sci-Fi",
            "type": "series",
            "sposter": "images/Fire Force.jpeg",
            "synopsis": "In a world where spontaneous human combustion turns people into flaming monsters, pyrokinetic firefighters battle infernos and uncover dark conspiracies. Shinra Kusakabe joins Special Fire Force Company 8, using his 'Devil's Footprints' ability to investigate the phenomenon's origins while confronting his family's mysterious past."
        },
        {
            "name": "The Daily Life of the Immortal King",
            "land": 7.4,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=NYSbgtnXlQg&pp=ygUrdGhlIGRhaWx5IGxpZmUgb2YgdGhlIGltbW9ydGFsIGtpbmcgdHJhaWxlcg%3D%3D",
            "section": "upcoming",
            "nigga": "images/GZJH3DJ8E-backdrop_wide.avif",
            "date": 2025,
            "genres": "Comedy, Fantasy, School",
            "type": "series",
            "sposter": "images/The Daily Life of the Immortal King Season 3.jpeg",
            "synopsis": "Overpowered immortal cultivator Wang Ling tries blending into modern high school life while suppressing his god-like abilities. His attempts at normalcy constantly backfire through magical mishaps, leading to chaotic comedy. The series balances supernatural action with relatable teenage experiences and growing pains."
        },
        {
            "name": "Don't Toy With Me, Miss Nagatoro",
            "land": 7.2,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=4rQ1CJQZvzQ&pp=ygUwZG9uJ3QgdG95IHdpdGggbWUgbWlzcyBuYWdhdG9ybyBzZWFzb24gMSB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/GQWH0M455-backdrop_wide.avif",
            "date": 2025,
            "genres": "Romantic Comedy, Slice of Life",
            "type": "series",
            "sposter": "images/Hayase Nagatoro-Ijiranaide, Nagatoro-san.jpeg",
            "synopsis": "Art student Naoto's quiet life is disrupted when playful underclassman Nagatoro starts teasing him daily. What begins as merciless bullying gradually evolves into an unconventional relationship, blending humor with genuine emotional growth as both characters navigate their complex feelings."
        },
        {
            "name": "My Hero Academia",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=EPVkcwyLQQ8&pp=ygUYbXkgaGVybyBhY2FkZW1pYSB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/G6NQ5DWZ6-backdrop_wide.avif",
            "date": 2016,
            "postist": "images/MHUR-new-header-mobile.webp",
            "genres": "Shonen, Superhero, School",
            "type": "series",
            "synopsis": "Quirkless Izuku Midoriya inherits the One For All power from hero All Might, attending UA High to become the ultimate hero. Through intense training and villain battles like the Paranormal Liberation War, Deku struggles with his power's physical toll and dark legacy. The final arcs reveal shocking connections between One For All and villain All For One, culminating in a generational showdown redefining heroism.",
            "sposter": "images/download (13).jpeg",
        },
        {
            "name": "My Dress-Up Darling",
            "land": 8.0,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=8oveGY6h6T8&pp=ygUbbXkgZHJlc3MtdXAgZGFybGluZyB0cmFpbGVy0gcJCX4JAYcqIYzv",
            "section": "upcoming",
            "nigga": "images/GQWH0M9N8-backdrop_wide.avif",
            "date": 2025,
            "genres": "Romance, Slice of Life, Cosplay",
            "type": "series",
            "sposter": "images/Review Of Anime Dress Up App 2022.jpeg",
            "synopsis": "Traditional doll-maker Wakana partners with vivacious cosplayer Marin to create elaborate costumes. Their collaboration blossoms into mutual respect and budding romance, exploring craftsmanship passion and self-expression through detailed cosplay creation processes and heartfelt character interactions."
        },
        {
            "name": "Lycoris Recoil",
            "land": 8.5,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=F5DMjhg3A6c&pp=ygUWbHljb3JpcyByZWNvaWwgdHJhaWxlcg%3D%3D",
            "section": "upcoming",
            "nigga": "images/G1XHJV2X9-backdrop_wide.avif",
            "date": 2025,
            "genres": "Action, Crime, Drama",
            "type": "series",
            "sposter": "images/Lycoris Recoil, serie original del estudio A-1 Pictures, se alista para su estreno el 2 de julio con una nueva imagen promocional_.jpeg",
            "synopsis": "Elite teenage agents Chisato and Takina operate from a café front, undertaking dangerous missions while serving coffee. Balancing high-stakes counterterrorism with slice-of-life comedy, the series features spectacular gunplay and explores themes of justice through contrasting personalities of its dual protagonists."
        },
        {
            "name": "Dandadan",
            "land": 8.1,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=0XJxfbN36Uw&pp=ygUQZGFuZGFkYW4gdHJhaWxlcg%3D%3D",
            "section": "upcoming",
            "nigga": "images/GG5H5XQ0D-backdrop_wide.avif",
            "date": 2025,
            "genres": "Supernatural, Comedy, Action",
            "type": "series",
            "sposter": "images/Dandadan.jpeg",
            "synopsis": "Occult-obsessed Okarun and psychic Momo team up to battle bizarre supernatural entities, from aliens to ghosts. Their chaotic adventures blend outrageous humor with heartfelt character moments, creating a unique mix of paranormal action and coming-of-age romance."
        },
        {
            "name": "Mashle: Magic and Muscles",
            "land": 7.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=hxnl9nYl67k&pp=ygUgbWFzaGxlIG1hZ2ljIGFuZCBtdXNjbGVzIHRyYWlsZXI%3D",
            "section": "upcoming",
            "nigga": "images/GDKHZEP8W-backdrop_wide.avif",
            "date": 2025,
            "genres": "Comedy, Fantasy, Parody",
            "type": "series",
            "sposter": "images/Mashle Videos Added.jpeg",
            "synopsis": "In a magic-dominated world, muscle-bound Mash Burnedead enrolls in wizard school using sheer physical strength. This Harry Potter parody delivers absurd humor as Mash solves magical problems through bench presses and cream puff obsession, challenging society's power structures with every flex."
        },
        {
            "name": "Tokyo Revengers",
            "land": 8.1,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=idlLFNNpZiI&pp=ygUXdG9reW8gcmV2ZW5nZXJzIHRyYWlsZXI%3D",
            "section": "upcoming",
            "nigga": "images/tokyo-revengers.avif",
            "date": "2021",
            "genres": "Shonen, Action, Time Travel",
            "type": "series",
            "synopsis": "Loser Takemichi Hanagaki gains the power to leap 12 years back in time to prevent his ex-girlfriend's murder. Infiltrating the Tokyo Manji Gang, he navigates gang wars and multiple timelines to save friends from tragic fates. The Tenjiku arc reveals dark connections between leader Mikey's collapse and Takemichi's forgotten childhood, culminating in a final timeline where sacrifice reshapes everyone's destinies.",
            "sposter": "images/TOKYO REVENGERS SEASON 3.jpeg",
        },
        {
            "name": "Vinland Saga",
            "land": 8.6,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=f8JrZ7Q_p-8&pp=ygUUdmlubGFuZCBzYWdhIHRyYWlsZXI%3D",
            "section": "upcoming",
            "nigga": "images/GEXH3WKK0-backdrop_wide.avif",
            "date": "2019",
            "genres": "Seinen, Historical, Action",
            "type": "series",
            "synopsis": "Viking-era Thorfinn seeks vengeance against his father's killer Askeladd, only to become enslaved after his nemesis' death. The Farmland Saga arc transforms him from warrior to pacifist through Einar's influence. Later journeys to Vinland (North America) challenge his dream of a violence-free society, culminating in profound explorations of war trauma and the true meaning of strength in this historical epic.",
            "sposter": "images/download (5).jpeg",
        },
        {
            "name": "Steins;Gate",
            "land": 8.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=uMYhjVwp0Fk&pp=ygUTc3RlaW5zIGdhdGUgdHJhaWxlcg%3D%3D",
            "section": "upcoming",
            "nigga": "images/GYWE7W5GY-backdrop_wide.avif",
            "date": "2011",
            "genres": "Sci-Fi, Psychological, Thriller",
            "type": "series",
            "synopsis": "Eccentric scientist Rintaro Okabe accidentally invents time travel via microwave messages, triggering catastrophic worldline shifts. After witnessing friend Mayuri's repeated deaths, he embarks on a harrowing journey across timelines to undo his mistakes. The story masterfully intertwines quantum theory with emotional stakes, culminating in Okabe's choice between saving Makise Kurisu or preserving world stability in this mind-bending temporal thriller.",
            "sposter": "images/Steins;Gate 0.jpeg",
        },

        {
            "name": "Your Name",
            "land": 8.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=xU47nhruN-Q&pp=ygUReW91ciBuYW1lIHRyYWlsZXI%3D",
            "section": "romance",
            "nigga": "images/your-name_1.jpg",
            "date": "2016",
            "genres": "Romance, Fantasy, Drama",
            "type": "movie",
            "synopsis": "Country girl Mitsuha and Tokyo boy Taki begin mysteriously swapping bodies, developing feelings through journal entries. Their connection transcends time when Taki discovers Mitsuha's town was destroyed by a comet three years prior. A race against time ensues to rewrite history, blending body-swap comedy with cosmic tragedy. The emotional climax at twilight gorgeously explores memory, longing, and the red string of fate binding souls across time.",
            "sposter": "images/download (3).jpeg",
        },
        {
            "name": "Erased",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=DwmxEAWjTQQ&pp=ygUPZXJhc2VkIHRyYWlsbGVy",
            "section": "upcoming",
            "nigga": "images/09e46a3c3f53cb75e87af53393de7436.avif",
            "date": "2016",
            "genres": "Psychological, Mystery, Thriller",
            "type": "series",
            "synopsis": "Struggling manga artist Satoru Fujinuma gains the power to 'revive' moments before tragedies. When his mother is murdered, he's sent back 18 years to prevent childhood friend Kayo's abduction. Navigating 1988 as his child self, Satoru races to stop a serial killer while confronting his own trauma. The taut thriller examines cycles of abuse and the weight of second chances through its gripping time-loop mystery.",
            "sposter": "images/download (4).jpeg",
        },

        {
            "name": "Re:Zero",
            "land": 8.2,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=Slz_rahWp6Y&pp=ygUPcmUgemVybyB0cmFpbGVy",
            "section": "upcoming",
            "nigga": "images/GRGG9798R-backdrop_wide.avif",
            "date": "2016",
            "genres": "Fantasy, Psychological, Thriller",
            "type": "series",
            "synopsis": "Transported to a fantasy world, Subaru Natsuki discovers he can 'Return by Death' - resetting time upon dying. Obsessed with saving half-elf Emilia, he endures grueling loops of torture and loss. The Sanctuary arc breaks Subaru as he confronts his weaknesses without resetting, while later arcs reveal the Witch Cult's machinations and Emilia's connection to the frozen witch Satella in this harrowing study of love and despair.",
            "sposter": "images/Re_ Zero Kara Hajimeru Isekai Seikatsu _ Cercle d'Estudis Orientals.jpeg",
        },
        {
            "name": "Dr. Stone",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=7YZzYeBartM&pp=ygURZHIgc3RvbmUgdHJhaWxsZXI%3D",
            "section": "upcoming",
            "nigga": "images/GYEXQKJG6-backdrop_wide.avif",
            "date": "2019",
            "genres": "Adventure, Sci-Fi, Comedy",
            "type": "series",
            "synopsis": "After a global petrification event, science prodigy Senku Ishigami revives 3,700 years later to rebuild civilization from scratch. Battling against武力 brute Tsukasa's anti-science empire, Senku's Kingdom of Science rediscovers electricity, antibiotics, and more. The Stone Wars escalate into a global race to revive humanity and reach the moon, celebrating scientific progress through thrilling experiments and humorous invention montages.",
            "sposter": "images/Poster Dr Stone Group 38x52cm.jpeg",
        },
        {
            "name": "One Punch Man",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=C0M93res8Z0&pp=ygUWb25lIHB1bmNoIG1hbiB0cmFpbGxlcg%3D%3D",
            "section": "upcoming",
            "nigga": "images/G63K98PZ6-backdrop_wide.avif",
            "date": "2015",
            "genres": "Action, Comedy, Superhero",
            "type": "series",
            "synopsis": "Overpowered hero Saitama defeats any foe with one punch, leaving him bored and unrecognized. Teaming with cyborg Genos, he climbs hero rankings while facing existential boredom. The Monster Association arc parodies shonen tropes as Saitama casually obliterates god-level threats others struggle against, culminating in a multiversal showdown that questions the meaning of heroism in a world where victory comes too easily.",
            "sposter": "images/download (8).jpeg",
        },
        {
            "name": "Alya Sometimes Hides Her Feelings in Russian",
            "land": 7.0,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=drEyZG1zbS4&pp=ygU2YWx5YSBzb21ldGltZXMgaGlkZXMgaGVyIGZlZWxpbmdzIGluIHJ1c3NpYW4gZXBpc29kZSAx",
            "section": "upcoming",
            "nigga": "images/G1XHJV0XM-backdrop_wide.avif",
            "date": 2025,
            "genres": "Romantic Comedy, School",
            "type": "series",
            "sposter": "images/Tokidoki Bosotto Russia-go de Dereru.jpeg",
            "synopsis": "Half-Russian beauty Alya expresses hidden affection through Russian insults, unaware classmate Masachika understands the language. Their witty banter evolves into romantic tension, blending language barrier humor with genuine emotional development in this cross-cultural will-they-won't-they comedy."
        },
        {
            "name": "Wind Breaker",
            "land": 7.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=jp1bVUvYwYQ&pp=ygUUd2luZCBicmVha2VyIHRyYWlsZXI%3D",
            "section": "upcoming",
            "nigga": "images/G3KHEVDPE-backdrop_wide.avif",
            "date": 2025,
            "genres": "Action, Delinquent, School",
            "type": "series",
            "sposter": "images/Wind Breaker _ Key Visual.jpeg",
            "synopsis": "Transfer student Haruka joins Furin High's notorious delinquents, challenging gang hierarchies through intense physical brawls. Beyond the fights lies a story about found family and personal growth, featuring dynamic combat choreography and exploration of masculine vulnerability in tough environments."
        },
        {
            "name": "One Piece",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=LHTYpWI3S6Q&pp=ygUUb25lIHBpZWNlIHRyYWlsbGVyIDE%3D",
            "section": "2000s",
            "nigga": "images/one-piece-time-watch.avif",
            "date": 1999,
            "genres": "Shonen, Adventure, Action",
            "type": "series",
            "synopsis": "Rubber-limbed pirate Monkey D. Luffy assembles a crew to find the legendary One Piece treasure and become King of the Pirates. From battling warlords to overthrowing corrupt kingdoms, the Straw Hats explore fantastical islands in the Grand Line. Their journey reveals ancient weapons, the Void Century's secrets, and the World Government's dark history in this decades-spanning epic about friendship and freedom.",
            "sposter": "images/one pièce.jpeg",
        },
        {
            "name": "Naruto",
            "land": 8.4,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=-G9BqkgZXRA&pp=ygUObmFydXRvIHRyYWlsZXI%3D",
            "section": "2000s",
            "nigga": "images/NTOS_OG-main.png",
            "date": 2002,
            "genres": "Shonen, Action, Adventure",
            "type": "series",
            "synopsis": "Orphaned ninja Naruto Uzumaki, ostracized for housing the Nine-Tails fox spirit, dreams of becoming Hokage. Through Team 7 missions with Sasuke and Sakura, he masters shadow clones and Rasengan. The series escalates from Chunin Exam battles to confrontations with Akatsuki terrorists, culminating in the Fourth Shinobi War and Naruto's final showdown with Sasuke.",
            "sposter": "images/Naruto Shippuden Naruto Sakura Kakashi Poster.jpeg",
        },
        {
            "name": "Bleach",
            "land": 8.2,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=eA8-t-iyAV4&pp=ygUQYmxlYWNoIHRyYWlsZXIgMQ%3D%3D",
            "section": "2000s",
            "nigga": "images/BRS-header-mobile.jpg",
            "date": 2004,
            "genres": "Shonen, Action, Supernatural",
            "type": "series",
            "synopsis": "Teenager Ichigo Kurosaki becomes a substitute Soul Reaper after obtaining powers from Rukia Kuchiki. Wielding the massive Zanpakuto Zangetsu, he battles Hollows while navigating Soul Society politics. Major arcs include rescuing Rukia from execution, fighting Espada in Hueco Mundo, and confronting Quincy king Yhwach in the final war between realms.",
            "sposter": "images/BLEACH_ Thousand-Year Blood War.jpeg",
        },
        {
            "name": "Death Note",
            "land": 8.8,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=NlJZ-YgAt-c&pp=ygUSZGVhdGggbm90ZSB0cmFpbGVy",
            "section": "2000s",
            "nigga": "images/97129a46f2418ffe5a67ec64f49a3038.avif",
            "date": "2006",
            "genres": "Psychological, Thriller, Supernatural",
            "type": "series",
            "synopsis": "Genius student Light Yagami discovers a notebook that kills anyone whose name is written. As self-proclaimed god 'Kira', he purges criminals while detective L tracks him through psychological warfare. The cat-and-mouse game escalates with fake rules, memory gambits, and the introduction of Shinigami death gods. The final act sees Light's god complex unraveling as his enemies close in, questioning the morality of absolute justice.",
            "sposter": "images/Death Note Light Yagami Anime Merch Cool Wall Decor Art Print Poster 24x36.jpeg",
        },
        {
            "name": "Fullmetal Alchemist: Brotherhood",
            "land": 9.1,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=AYlksPeSXrs&pp=ygUnZnVsbG1ldGFsIGFsY2hlbWlzdCBicm90aGVyaG9vZCB0cmFpbGVy",
            "section": "2000s",
            "nigga": "images/GRGGPG93R-backdrop_wide.avif",
            "date": "2009",
            "genres": "Shonen, Adventure, Fantasy",
            "type": "series",
            "synopsis": "Alchemist brothers Edward and Alphonse Elric seek the Philosopher's Stone to restore their bodies after a failed resurrection ritual. Uncovering a military conspiracy involving homunculi and nationwide transmutation circles, they confront the sins of their father's past. The final battle against Father - a being seeking godhood - unites allies in a fight preserving humanity's right to struggle and grow beyond predetermined destinies.",
            "sposter": "images/download (6).jpeg",
        },
        {
            "name": "Hunter x Hunter",
            "land": 9.0,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=d6kBeJjTGnY&pp=ygUYaHVudGVyIHggaHVudGVyIHRyYWlsbGVy",
            "section": "2000s",
            "nigga": "images/GY3VKX1MR-backdrop_wide.avif",
            "date": "2011",
            "genres": "Shonen, Adventure, Action",
            "type": "series",
            "synopsis": "Young Gon Freecss becomes a Hunter to find his absentee father, encountering allies like Killua and Kurapika during grueling exams. The series escalates from trick tower challenges to the Chimera Ant arc's existential horror, where humanity's darkest traits manifest in insectoid creatures. The Dark Continent saga introduces Nen ability masterclasses and moral quandaries about unchecked ambition in this deceptively complex shonen masterpiece.",
            "sposter": "images/HXH.jpeg",
        },
        {
            "name": "Code Geass: Lelouch of the Rebellion",
            "land": 8.8,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=v-AGjx0N24U&pp=ygUrY29kZSBnZWFzcyBsZWxvdWNoIG9mIHRoZSByZWJlbGxpb24gdHJhaWxlcg%3D%3D",
            "section": "2000s",
            "nigga": "images/GY2P9ED0Y-backdrop_wide.avif",
            "date": "2006",
            "genres": "Mecha, Psychological, Drama",
            "type": "series",
            "synopsis": "Exiled prince Lelouch vi Britannia gains the mind-control Geass power and leads a rebellion as 'Zero' to create a better world for his sister. Manipulating both Britannian forces and Japanese resistance with strategic genius, his revolution spirals as personal relationships collapse. The Zero Requiem finale sees Lelouch orchestrating his own downfall to unite humanity through shared hatred, cementing this as a masterpiece of moral ambiguity and political intrigue.",
            "sposter": "images/コードギアス 反逆のルルーシュ R2 __ Code Geass ~ Lelouch of the Rebellion R2.jpeg",
        },
        {
            "name": "Parasyte: The Maxim",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=2ilVWE9uw88&pp=ygUacGFyYXN5dGUgdGhlIG1heGltIHRyYWlsZXI%3D",
            "section": "2000s",
            "nigga": "images/shinichi-using-his-hand-as-blades-in-parasyte.avif",
            "date": "2014",
            "genres": "Seinen, Horror, Psychological",
            "type": "series",
            "synopsis": "When alien parasites invade Earth, high schooler Shinichi Izumi's right hand becomes host to Migi - a rational parasite that failed to take over his brain. This uneasy symbiosis forces them to battle other parasites while questioning humanity's place in the food chain. As Migi develops emotions and Shinichi gains hybrid abilities, their bond challenges definitions of humanity in this visceral exploration of survival ethics.",
            "sposter": "images/download (9).jpeg",
        },
        {
            "name": "Monster",
            "land": 8.8,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "Final Season Part 2 Official Trailerhttps://www.youtube.com/watch?v=9aS-EgdAq6U&pp=ygUQbW9uc3RlciB0cmFpbGxlcg%3D%3D",
            "section": "2000s",
            "nigga": "images/filters_quality(95)format(webp) (3).webp",
            "date": "2004",
            "genres": "Psychological, Thriller, Drama",
            "type": "series",
            "synopsis": "Brilliant neurosurgeon Dr. Kenzo Tenma saves a young boy over the mayor, ruining his career. Years later, the boy - Johan Liebert - resurfaces as a manipulative serial killer. Tenma embarks on a harrowing journey across Germany to stop his creation, uncovering Johan's traumatic past in post-Cold War experiments. This psychological masterpiece explores morality, identity, and the nature of evil through its chilling cat-and-mouse narrative.",
            "sposter": "images/Monster.jpeg",
        },
        {
            "name": "Berserk",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=0MIw4xzxcTU&pp=ygUPYmVyc2VyayB0cmFpbGVy0gcJCX4JAYcqIYzv",
            "section": "2000s",
            "nigga": "images/yck5pgoudbuw_sjiz62z2u8nta-06bkv_66gcq_byom.jpeg",
            "date": 1997,
            "genres": "Action, Fantasy, Drama",
            "type": "series",
            "synopsis": "Guts, a lone mercenary with a tragic past, wields a massive sword in his quest for vengeance against his former friend Griffith, who betrayed him to gain demonic power. Set in a dark medieval world, Berserk explores themes of fate, betrayal, and survival in a brutal, unforgiving narrative.",
            "sposter": "images/download (14).jpeg",
        },
        {
            "name": "Dragon Ball Z",
            "land": 8.8,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=sxufB6DxXk0&pp=ygUVZHJhZ29uIGJhbGwgeiB0cmFpbGVy0gcJCX4JAYcqIYzv",
            "section": "2000s",
            "nigga": "images/G8DHV7W21-backdrop_wide.avif",
            "date": 1989,
            "genres": "Action, Adventure, Fantasy",
            "type": "series",
            "synopsis": "Goku and his friends defend Earth from powerful foes like Frieza, Cell, and Majin Buu. With epic battles, transformations like Super Saiyan, and themes of friendship and perseverance, Dragon Ball Z became a global phenomenon and a cornerstone of anime history.",
            "sposter": "images/Steam Community __  __ Dragon Ball Super.jpeg",
        },
        {
            "name": "Yu-Gi-Oh!",
            "land": 7.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=44ofw6GIbgU&pp=ygUQeXUtZ2ktb2ggdHJhaWxlcg%3D%3D",
            "section": "2000s",
            "nigga": "images/yugioh-best-duels.avif",
            "date": 2000,
            "genres": "Adventure, Fantasy, Strategy",
            "type": "series",
            "synopsis": "Teenager Yugi Muto solves the ancient Millennium Puzzle, awakening the spirit of a pharaoh who challenges foes to high-stakes games. Centered around the card game Duel Monsters, the series combines strategy, friendship, and supernatural elements in a thrilling adventure.",
            "sposter": "images/Yu-Gi-Oh! - The Dark Side Of Dimensions (First Press).jpeg",
        },
        {
            "name": "Pokémon",
            "land": 8.0,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=8PGsP59Io20&pp=ygUQcG9rw6ltb24gdHJhaWxlcg%3D%3D",
            "section": "2000s",
            "nigga": "images/6300-Header_PokemonGeneral_2000x800.jpg",
            "date": 1997,
            "genres": "Adventure, Fantasy, Comedy",
            "type": "series",
            "synopsis": "Ash Ketchum dreams of becoming a Pokémon Master, traveling the world with his loyal Pikachu and friends. Catching, training, and battling Pokémon, Ash faces rivals like Team Rocket while learning about friendship, perseverance, and the bond between humans and Pokémon.",
            "sposter": "images/アニポケ新無印「新キービジュアル」公開！ミュウツーの声優は市村正親さん！コハルもついに･･･！？_ぽけりん＠ポケモンまとめ.jpeg",
        },
        {
            "name": "Toradora!",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=ya570uUgQNc&pp=ygURdG9yYWRvcmEgdHJhaWxsZXI%3D",
            "section": "romance",
            "nigga": "images/G6P8PXJW6-backdrop_wide.avif",
            "date": "2008",
            "genres": "Romance, Comedy, School",
            "type": "series",
            "synopsis": "Fierce Taiga Aisaka and gentle Ryuuji Takasu form an unlikely pact to help each other pursue their crushes. Living next door, their fake relationship deepens through shared meals and school hijinks. The Christmas arc reveals Taiga's family struggles, culminating in a heartfelt confession during graduation. Toradora! masterfully balances comedy and drama, delivering a timeless story about love's unexpected forms.",
            "sposter": "images/download (10).jpeg",
        },
        {
            "name": "Love is War",
            "land": 8.4,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/GRJ0J828Y-backdrop_wide.avif",
            "trailer": "https://www.youtube.com/watch?v=rZ95aZmQu_8&pp=ygUTbG92ZSBpcyB3YXIgdHJhaWxlctIHCQl-CQGHKiGM7w%3D%3D",
            "section": "romance",
            "genres": "Romance, Comedy",
            "type": "series",
            "sposter": "images/Kaguya-sama_ Love Is War.jpeg",
            "synopsis": "Miyuki Shirogane and Kaguya Shinomiya, the brilliant president and vice-president of Shuchiin Academy's student council, conceal their mutual affection behind a high-stakes battle of wits. Through elaborate psychological ploys, fabricated confessions, and romantic ambushes, each schemes to trick the other into confessing first. As their rivalry escalates during cultural festivals and school trips, moments of vulnerability pierce their façades—Kaguya’s sheltered upbringing clashes with Miyuki’s insecurities about his modest background. This cerebral duel of pride and passion redefines love as a war where surrender becomes the ultimate victory."
        },
        {
            "name": "Clannad",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/filters_quality(95)format(webp) (4).webp",
            "trailer": "#https://www.youtube.com/watch?v=pTTsmwHxHns&pp=ygUPY2xhbm5hZCB0cmFpbGVy",
            "section": "romance",
            "genres": "Drama, Romance",
            "type": "series",
            "sposter": "images/Clannad.jpeg",
            "synopsis": "Tomoya Okazaki, a disillusioned delinquent haunted by his fractured family, crosses paths with Nagisa Furukawa, a gentle yet determined girl repeating her senior year due to illness. Together, they revive the school’s drama club, bonding with classmates carrying hidden scars—Kyō’s sisterly guilt, Kotomi’s isolation, and Fuko’s ethereal struggle. As Tomoya and Nagisa navigate her declining health and his estranged father, their journey through cherry-blossom-lit days and snowbound nights reveals the fragile beauty of fleeting moments. This tapestry of tears and laughter weaves a legacy of hope, showing how love can rebuild even the most broken of hearts."
        },
        {
            "name": "Your Lie in April",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=3aL0gDZtFbE&pp=ygUaeW91ciBsaWUgaW4gYXByaWwgdHJhaWxsZXI%3D",
            "section": "romance",
            "nigga": "images/G63V7KN9Y-backdrop_wide.avif",
            "date": "2014",
            "genres": "Romance, Drama, Music",
            "type": "series",
            "synopsis": "Piano prodigy Kousei Arima quits playing after his mother's death until free-spirited violinist Kaori Miyazono reignites his passion. Through music competitions and heartfelt performances, Kousei confronts his trauma while Kaori hides her terminal illness. The final concert becomes a bittersweet farewell, celebrating life's fleeting beauty through Chopin's melodies in this tear-jerking ode to love, loss, and artistic expression.",
            "sposter": "images/Your Lie in April S1E18.jpeg",
        },
        {
            "name": "The Quintessential Quintuplets",
            "land": 8.0,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/GY4PD7Z06-backdrop_wide.avif",
            "trailer": "https://www.youtube.com/watch?v=cj6NGP9nNwI&pp=ygUmdGhlIHF1aW50ZXNzZW50aWFsIHF1aW50dXBsZXRzIHRyYWlsZXLSBwkJfgkBhyohjO8%3D",
            "section": "romance",
            "backdrop": "images/quintuplets_backdrop.avif",
            "date": "2019",
            "genres": "Harem, Romantic Comedy, School",
            "type": "series",
            "synopsis": "Tutor Futaro Uesugi navigates relationships with five identical sisters - Ichika, Nino, Miku, Yotsuba, and Itsuki - while preparing them for exams. Through late-night study sessions and family trips, each sister develops unique feelings. The Kyoto school trip becomes pivotal as childhood memories resurface, leading to Futaro's dramatic wedding day revelation of his chosen bride.",
            "sposter": "images/download (7).jpeg"
        },
        {
            "name": "Relife",
            "land": 8.1,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/640x360.webp",
            "trailer": "https://www.youtube.com/watch?v=wqeNpvWIdDw&pp=ygUOcmVsaWZlIHRyYWlsZXI%3D",
            "section": "romance",
            "backdrop": "images/relife_backdrop.avif",
            "date": "2016",
            "genres": "Slice of Life, Drama, Romance",
            "type": "series",
            "synopsis": "27-year-old Arata Kaizaki gets a second chance at youth through an experimental drug, reliving high school while hiding his true age. His friendship with class rep Chizuru Hishiro evolves as they confront adult regrets through teenage experiences. The cultural festival climax reveals their shared secret, leading to bittersweet goodbyes and renewed purpose in their real lives.",
            "sposter": "images/ReLIFE.jpeg"
        },
        {
            "name": "Rascal Does Not Dream of a Dreaming Girl",
            "land": 8.5,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/298403eab66728ac995f64c7d92fd154.avif",
            "trailer": "https://www.youtube.com/watch?v=rl7zM1zi4Ew&pp=ygUwcmFzY2FsIGRvZXMgbm90IGRyZWFtIG9mIGEgZHJlYW1pbmcgZ2lybCB0cmFpbGVy",
            "section": "romance",
            "backdrop": "images/rascal_backdrop.avif",
            "date": "2019",
            "genres": "Supernatural, Drama, Romance",
            "type": "movie",
            "synopsis": "Sakuta Azusagawa's life unravels when Shoko Makinohara reappears - a girl from his past existing in conflicting timelines. As quantum paradoxes threaten reality, Sakuta and girlfriend Mai Sakurajima race to solve the temporal mystery. Their emotional journey peaks at Enoshima Aquarium where alternate futures collide, testing the limits of love across parallel existences.",
            "sposter": "images/download (15).jpeg"
        },
        {
            "name": "Nisekoi",
            "land": 7.8,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/GR19NK216-backdrop_wide.avif",
            "trailer": "https://www.youtube.com/watch?v=dPBBNxl_nKE&pp=ygUPbmlzZWtvaSB0cmFpbGVy",
            "section": "romance",
            "backdrop": "images/nisekoi_backdrop.avif",
            "date": "2014",
            "genres": "Harem, Comedy, Romance",
            "type": "series",
            "synopsis": "Yakuza heir Raku Ichijo fake-dates gang rival Chitoge Kirisaki to prevent a mob war, while secretly searching for his childhood promise girl. Their forced cohabitation sparks comedic clashes that slowly turn genuine. The locked pendant's eventual opening during a festival fireworks display resolves years of romantic misunderstandings in true Shakespearean fashion.",
            "sposter": "images/download (16).jpeg"
        },
        {
            "name": "More Than a Married Couple, But Not Lovers",
            "land": 7.9,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/GJ0H7Q5N3-backdrop_wide.avif",
            "trailer": "https://www.youtube.com/watch?v=SvJTrP2sGeE&pp=ygUxbW9yZSB0aGFuIGEgbWFycmllZCBjb3VwbGUgYnV0IG5vdCBsb3ZlcnMgdHJhaWxlctIHCQl-CQGHKiGM7w%3D%3D",
            "section": "romance",
            "backdrop": "images/married_couples_backdrop.avif",
            "date": "2022",
            "genres": "Romantic Comedy, School, Drama",
            "type": "series",
            "synopsis": "High schoolers Jirō Yakuin and Akari Watanabe enter a marriage simulation program for credits, reluctantly partnering despite liking others. Their fake domestic life of shared meals and chore wars slowly kindles real feelings. The cultural festival's couple competition becomes their turning point, with a near-kiss under fireworks challenging their denial. A story of love emerging from practiced affection.",
            "sposter": "images/More Than a Married Couple, But Not Lovers ger dub.jpeg"
        },
        {
            "name": "Masamune-kun's Revenge",
            "land": 7.5,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/6871fe02810b43cbf9a37845a17ca4d0.avif",
            "trailer": "https://www.youtube.com/watch?v=eXS9b9IAaB4&pp=ygUebWFzYW11bmUta3VuJ3MgcmV2ZW5nZSB0cmFpbGVy",
            "section": "romance",
            "backdrop": "images/masamune_backdrop.avif",
            "date": "2017",
            "genres": "Romantic Comedy, Drama, School",
            "type": "series",
            "synopsis": "Once-chubby Masamune Makabe transforms into a handsome teen to exact revenge on cruel heiress Aki Adagaki, only to fall for her again. Their battle of wits during the school festival preparation reveals hidden letters from their past. The explosive rooftop confrontation unravels childhood misunderstandings, leaving Masamune torn between vengeance and rekindled love.",
            "sposter": "images/download (17).jpeg"
        },
        {
            "name": "Maid Sama!",
            "land": 8.2,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/5c714eb375fed4b232c93f940da79dc0.jpe",
            "trailer": "https://www.youtube.com/watch?v=jW7quAVPKOg&pp=ygURbWFpZCBzYW1hIHRyYWlsZXI%3D",
            "section": "romance",
            "backdrop": "images/maid_sama_backdrop.avif",
            "date": "2010",
            "genres": "Romantic Comedy, Slice of Life",
            "type": "series",
            "synopsis": "Student council president Misaki Ayuzawa secretly works at a maid café, until popular Takumi Usui discovers her double life. Their cat-and-mouse dynamic evolves through karaoke duets and cultural festival collaborations. The Christmas Eve shift brings confession through a ruined cake and matching couple accessories, redefining their master-maid relationship.",
            "sposter": "images/Kaichou wa Maid-Sama.jpeg"
        },
        {
            "name": "I Want to Eat Your Pancreas",
            "land": 9.0,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/x1080.jpeg",
            "trailer": "https://www.youtube.com/watch?v=MmoBvmJA9XI&pp=ygUjaSB3YW50IHRvIGVhdCB5b3VyIHBhbmNyZWFzIHRyYWlsZXI%3D",
            "section": "romance",
            "backdrop": "images/pancreas_backdrop.avif",
            "date": "2018",
            "genres": "Drama, Tragedy, Romance",
            "type": "movie",
            "synopsis": "An introvert bookworm bonds with vibrant Sakura Yamauchi after finding her terminal illness diary. Their bucket list journey through fireworks festivals and spontaneous trips hides looming heartbreak. The final diary entries read posthumously at her wake reveal her true gratitude, transforming his worldview through shared cherry blossom memories.",
            "sposter": "images/Kimi no Suizo wo Tabetai.jpeg"
        },
        {
            "name": "I'm Getting Married to a Girl I Hate in My Class",
            "land": 7.2,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/b4f8ea935ad8608ec9f75c7c4a43f096.avif",
            "trailer": "https://www.youtube.com/watch?v=VmWZgswV5zo&pp=ygU4aSdtIGdldHRpbmcgbWFycmllZCB0byBhIGdpcmwgaSBoYXRlIGluIG15IGNsYXNzIHRyYWlsZXI%3D",
            "section": "romance",
            "backdrop": "images/married_hate_backdrop.avif",
            "date": "2023",
            "genres": "Romantic Comedy, School",
            "type": "series",
            "synopsis": "Enemies Akira Shida and Saki Natsume fake marriage for a school assignment, documenting their 'married life' through chore charts and pretend dates. Their heated debates over laundry duties and cooking battles slowly reveal hidden compatibility. The final project presentation unexpectedly becomes a real wedding photo shoot, blurring lines between act and reality.",
            "sposter": "images/I'm Getting Married to a Girl I Hate in My Class.jpeg"
        },
        {
            "name": "Horimiya",
            "land": 8.2,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=b7ZYm_LEJ6Y&pp=ygURaG9yaW1peWEgdHJhaWxsZXI%3D",
            "section": "romance",
            "nigga": "images/solo-leveling-featured-image.avif",
            "date": "2021",
            "postist": "images/Horimiya.jpeg",
            "genres": "Romance, Comedy, Slice of Life",
            "type": "series",
            "synopsis": "Popular girl Kyouko Hori and gloomy Izumi Miyamura hide their true selves - she's a homebody caring for her brother, he's a tattooed piercings enthusiast. Their chance meeting blossoms into a heartwarming romance as they embrace each other's vulnerabilities. Through school festivals and friend drama, Horimiya celebrates love's quiet moments and the courage to be authentic in this tender slice-of-life gem.",
            "sposter": "images/Horimiya.jpeg",

        },
        {
            "name": "Doom Breaker",
            "land": 8.9,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/doom-breaker-webtoon.avif",
            "trailer": "https://www.youtube.com/watch?v=lStC_qXuoNI&pp=ygUbZG9vbSBicmVha2VyIG1hbmh3YSB0cmFpbGVy",
            "section": "manhwa",
            "genres": "Action, Fantasy, Reincarnation",
            "type": "manhwa",
            "sposter": "images/Doom Breake.jpeg",
            "synopsis": "Zephyr, the last human warrior, is betrayed and executed by the gods he once served. Reborn through time, he vows vengeance against the divine pantheon that slaughtered his beloved Luna. Armed with forbidden necromancy and fractured memories of his past life, Zephyr carves a bloody path through celestial armies and demonic legions. Yet as his power grows, so does the haunting question: Can he rewrite fate, or will his wrath doom humanity anew?"
        },
        {
            "name": "Eleceed",
            "land": 9.0,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/eleceed-promo.avif",
            "trailer": "#https://www.youtube.com/watch?v=euA1hKBmz9Q&pp=ygUWZWxlY2VlZCBtYW5od2EgdHJhaWxlcg%3D%3D",
            "section": "manhwa",
            "genres": "Action, Comedy, Superhero",
            "type": "manhwa",
            "sposter": "images/download (18).jpeg",
            "synopsis": "Jiwoo, a kind-hearted teen with a secret lightning-powered alter ego, accidentally adopts a fat cat—who is actually Kayden, a legendary energy-wielder hiding from assassins. Their unlikely bond sparks chaos: Jiwoo trains under Kayden’s grueling mentorship while dodging rogue awakeners and corrupt guilds. Between electrifying battles and absurd catnip mishaps, their partnership blurs the line between mentor and family, proving even superheroes need a purring companion."
        },
        {
            "name": "Lookism",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/MV5BMzZiZjVlNDUtMDQ2Yi00MDJiLThkMzctZTFhNzA1MzE3YWJlXkEyXkFqcGc@._V1_.jpg",
            "trailer": "https://www.youtube.com/watch?v=3K6OPPeAZH4&pp=ygUWbG9va2lzbSBtYW5od2EgdHJhaWxlcg%3D%3D",
            "section": "manhwa",
            "genres": "Drama, Thriller, Social Commentary",
            "type": "manhwa",
            "sposter": "images/Lookism.jpeg",
            "synopsis": "Bullied for his weight, Daniel Park wakes up in a chiseled new body—a gift cursed with duality. By day, he navigates Seoul’s cutthroat fashion scene as a charismatic idol; by night, he returns to his ostracized original self. As gangs, corporate conspiracies, and a shadowy organization called ‘The Workers’ hunt him, Daniel learns that true power lies not in appearance but in the scars beneath the skin."
        },
        {
            "name": "Nano Machine",
            "land": 9.1,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/67472100e6fdc-poster-manhwa-nano-machine_banyuwangi.webp",
            "trailer": "https://www.youtube.com/watch?v=XAB0YKAOHNk&pp=ygUbbmFubyBtYWNoaW5lIG1hbmh3YSB0cmFpbGVy0gcJCX4JAYcqIYzv",
            "section": "manhwa",
            "genres": "Martial Arts, Sci-Fi, Revenge",
            "type": "manhwa",
            "sposter": "images/Nano machine.jpeg",
            "synopsis": "Cheon Yeo-Woon, the disgraced heir of the Heavenly Demon Sect, is left for dead until a nano-machine injection from his futuristic descendant transforms him into a living weapon. With each upgrade, he masters ancient techniques at inhuman speed, toppling martial clans and avenging his mother’s murder. But as the machines whisper of a world beyond swords and qi, Yeo-Woon faces a choice: Become a god of war or reclaim his fading humanity."
        },
        {
            "name": "The Legend of the Northern Blade",
            "land": 9.3,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/Legend-of-the-Northern-Blade-1-1024x512.webp",
            "trailer": "#https://www.youtube.com/watch?v=bRVwRu5Rfns&pp=ygUodGhlIGxlZ2VuZCBvZiB0aGUgbm9ydGhlcm4gYmxhZGUgdHJhaWxlcg%3D%3D",
            "section": "manhwa",
            "genres": "Martial Arts, Tragedy, Revenge",
            "type": "manhwa",
            "sposter": "images/LOTNB.jpeg",
            "synopsis": "Jin Mu-Won, the sole survivor of the Northern Heavenly Sect, inherits a frozen legacy of betrayal. Clutching his father’s sword, he wanders a world where the once-noble martial arts alliance now drowns in corruption. With glacial precision, Mu-Won dismantles tyrants and unearths the truth behind his clan’s massacre. Each strike of his blade echoes a vow: To carve justice into a realm where ice and blood are one."
        },
        {
            "name": "Omniscient Reader",
            "land": 9.5,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/filters_quality(95)format(webp) (5).webp",
            "trailer": "https://www.youtube.com/watch?v=8OHzcTtoLo4&pp=ygUgb21uaXNjaWVudCByZWFkZXIgdHJhaWxlciBtYW5od2E%3D",
            "section": "manhwa",
            "genres": "Apocalypse, Fantasy, Mystery",
            "type": "manhwa",
            "sposter": "images/Omniscient reader’s viewpoint.jpeg",
            "synopsis": "Kim Dokja, a debt-ridden office worker, survives the apocalypse by clinging to his encyclopedic knowledge of a web novel—*Three Ways to Survive the Apocalypse*. But when the story’s protagonist, Yoo Joonghyuk, defies the plot, Dokja realizes he’s no longer just a reader. Armed with spoilers and an unstable ‘Fourth Wall’ skill, he walks a razor’s edge between guiding humanity and becoming the author of its demise."
        },
        {
            "name": "The Beginning After the End",
            "land": 9.2,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/G24H1NWKE-backdrop_wide.avif",
            "trailer": "https://www.youtube.com/watch?v=02E6ZQLwsPI&pp=ygUrVGhlIEJlZ2lubmluZyBBZnRlciB0aGUgRW5kICB0cmFpbGVyIG1hbmh3YQ%3D%3D",
            "section": "manhwa",
            "genres": "Reincarnation, Fantasy, Royalty",
            "type": "manhwa",
            "sposter": "images/Beginning After the End🔥✨.jpeg",
            "synopsis": "King Grey of Earth dies with regrets—of a loveless reign and a hollow heart. Reborn as Arthur Leywin in a magic-steeped world, he vows to live fully: mastering mana, bonding with a dragon, and cherishing his newfound family. But as war drums beat and ancient deities stir, Arthur’s past and present collide. Can a once-lonely monarch outrun destiny, or will history repeat its cruel symphony?"
        },
        {
            "name": "Player",
            "land": 8.8,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/sddefault.jpg",
            "trailer": "https://www.youtube.com/watch?v=sNPFmbUFTSY&pp=ygUVcGxheWVyIHRyYWlsZXIgbWFuaHdh",
            "section": "manhwa",
            "genres": "Action, Fantasy, Progression",
            "type": "manhwa",
            "sposter": "images/player-thoughts-on-this-series-v0-y3op5g0yerbc1.webp",
            "synopsis": "Lee Hamin, dubbed 'The Eternal Level 1,' has spent years trapped in a dungeon, mocked for his inability to grow stronger. When he stumbles upon a hidden system that converts pain into power, Hamin embraces agony as his weapon. Each shattered bone and bleeding wound fuels his meteoric rise, but as guilds and gods take notice, he must decide: Will he become a hero for the weak or a monster mirroring the very system that broke him?"
        },
        {
            "name": "Return of the Blossoming Blade",
            "land": 9.0,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/cheongmyeong-return-of-the-blossoming-blade-2.avif",
            "trailer": "https://www.youtube.com/watch?v=fQpBr_YoTHs&pp=ygUtcmV0dXJuIG9mIHRoZSBibG9zc29taW5nIGJsYWRlIHRyYWlsZXIgbWFuaHdh",
            "section": "manhwa",
            "genres": "Martial Arts, Comedy, Revenge",
            "type": "manhwa",
            "sposter": "images/download (19).jpeg",
            "synopsis": "Chung Myung, the legendary 'Plum Blossom Sword Saint,' awakens centuries after his death to find the Mount Hua Sect reduced to laughingstocks. Swinging between outrage and absurdity, he drags his bumbling disciples through hellish training—balancing slapstick antics with lethal swordplay. Yet beneath his fiery temper lies grief for the golden age he lost. Can a single blade rebloom a withered legacy, or will the past’s weight crush his newfound kin?"
        },
        {
            "name": "Second Life Ranker",
            "land": 8.9,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/Collage-Maker-19-Sep-2022-1005-AM.avif",
            "trailer": "https://www.youtube.com/watch?v=iujvvDqkFug&pp=ygUiIlNlY29uZCBMaWZlIFJhbmtlciB0cmFpbGVyIG1hbmh3YQ%3D%3D",
            "section": "manhwa",
            "genres": "Fantasy, Revenge, Adventure",
            "type": "manhwa",
            "sposter": "images/Second Life Ranker Season 3 Cover.jpeg",
            "synopsis": "After his brother’s cryptic death in the Tower of the Sun God, Yeon-woo infiltrates the climb disguised as him, wielding dual identities and the artifact ‘Black King’s Heart.’ Each floor unravels darker truths: about his brother’s betrayal, the Tower’s godly puppeteers, and his own fracturing sanity. As alliances shatter and myths come alive, Yeon-woo’s vengeance blurs into obsession—will he conquer the Tower or become its next sacrificial king?"
        },
        {
            "name": "Magic Emperor",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/maxresdefault (1).jpg",
            "trailer": "https://www.youtube.com/watch?v=JRdjy7nJEes&pp=ygUcbWFnaWMgZW1wZXJvciBtYW5od2EgdHJhaWxlcg%3D%3D#",
            "section": "manhwa",
            "genres": "Fantasy, Reincarnation, Political Intrigue",
            "type": "manhwa",
            "sposter": "images/Mo Huang Da Guan Jia __Magic Emperor_.jpeg",
            "synopsis": "Zhurong, the tyrannical demonic sovereign, is reborn as Leo—a disgraced noble in a magic-starved era. Torn between his ruthless past and Leo’s lingering affection for his sister, he manipulates empires with demonic spells and cunning diplomacy. But as old enemies reemerge and his new family’s warmth melts his icy heart, Zhurong faces a paradox: Can a devil rewrite his story, or is redemption just another illusion?"
        },
        {
            "name": "Night of the Goblin",
            "land": 8.5,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/maxresdefault (2).jpg",
            "trailer": "https://www.youtube.com/watch?v=wmzh8XVzEME&list=PLiBwkSZtfaYzPFPGY2QKmxeGF1B-FTJyu",
            "section": "manhwa",
            "genres": "Horror, Survival, Dark Fantasy",
            "type": "manhwa",
            "sposter": "images/goblin’s night.jpeg",
            "synopsis": "When part-time worker Kim Yoonsung accepts a shady job to pay his sister’s hospital bills, he’s thrust into a cursed convenience store haunted by spectral goblins. Each night, he battles grotesque creatures and confronts customers’ darkest regrets to survive until dawn. But as the line between human and monster fades, Yoonsung discovers the true price of moonlight—and whether his soul is worth saving."
        },
        {
            "name": "The Art of Reincarnation",
            "land": 8.6,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/c428ee9b-5b48-4106-a506-c1797ae578ec.jpg",
            "trailer": "https://www.youtube.com/shorts/4fHFCAS7rK0#",
            "section": "manhwa",
            "genres": "Drama, Fantasy, Reincarnation",
            "type": "manhwa",
            "sposter": "images/The Art of Reincarnation_ Action Manhwa Recommendation.jpeg",
            "synopsis": "Aria, an immortal painter, cycles through lives—each death resurrecting her with blank canvases and fragmented memories. In her 13th life, she meets Liam, a blind musician who senses the ghosts in her brushstrokes. Together, they unravel her cursed eternity: a divine punishment for a sin she can’t recall. As their bond deepens, Aria must choose: Erase her past to escape the cycle or embrace immortality to keep their fleeting harmony alive."
        },
        {
            "name": "Pick Me Up",
            "land": 8.4,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/BB1ocGJs.jpeg",
            "trailer": "https://www.youtube.com/shorts/Iqx91IqStWs",
            "section": "manhwa",
            "genres": "Survival, Psychological, Action",
            "type": "manhwa",
            "sposter": "images/Pick Me Up!.jpeg",
            "synopsis": "Lee Haneul, a broke streamer, is forced into *Valhalla*—a VR survival game where viewers vote to eliminate players. Desperate to survive, he manipulates his audience with fake tears and staged heroics. But when a mute orphan, Yuri, becomes his teammate, Haneul’s calculated persona cracks. Each broadcast blurs into a moral gamble: Entertain the masses or protect the girl who reminds him of his forsaken humanity."
        },
        {
            "name": "The Player Who Can’t Level Up",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/mixcollage-29-may-2024-05-10-pm-847.avif",
            "trailer": "https://www.youtube.com/shorts/zTw0IOQWawk",
            "section": "manhwa",
            "genres": "Fantasy, Progression, Drama",
            "type": "manhwa",
            "sposter": "images/레벨업 못하는 플레이어 _ Player That Can't Level Up.jpeg",
            "synopsis": "Kim Yushin, stuck at Level 1 in a dungeon-infested world, discovers his *Combat Log* skill absorbs slain monsters’ memories. With each kill, he gains their instincts—a wolf’s agility, a golem’s resilience—but risks losing his mind to their primal urges. As guilds hunt him for this forbidden power, Yushin races to level up before the beast within devours his crumbling sanity."
        },
        {
            "name": "The Swordsmaster's Son",
            "land": 8.5,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/smys_banner.avif",
            "trailer": "https://www.youtube.com/shorts/Oip2jWs6kYY",
            "section": "manhwa",
            "genres": "Martial Arts, Drama, Coming-of-Age",
            "type": "manhwa",
            "sposter": "images/download (20).jpeg",
            "synopsis": "Jin Seol, heir to the legendary *Frost Blade* technique, wields a wooden sword in defiance of his father’s icy legacy. Mocked as the “Snow Without Bite,” he crafts a new style blending fire dance and swordsmanship. But when assassins burn his village, Seol must choose: Embrace his bloodline’s frozen wrath or let flames of vengeance consume the father he never understood."
        },
        {
            "name": "The God of High School",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/GRVD0ZDQR-backdrop_wide.avif",
            "trailer": "https://www.youtube.com/shorts/MV8brEOsAMc",
            "section": "manhwa",
            "genres": "Action, Martial Arts, Supernatural",
            "type": "manhwa",
            "sposter": "images/download (21).jpeg",
            "synopsis": "Jin Mori, a hotheaded taekwondo prodigy, enters a tournament promising any wish to the victor. But the *God of High School* battles hide a celestial war—contestants wield godly relics, and Mori’s signature kick awakens a primordial power within him. As friends become pawns of warring deities, Mori’s fists must answer: Is he humanity’s savior or a god’s vessel?"
        },
        {
            "name": "The World After the Fall",
            "land": 9.0,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/jaehwan-and-the-ten-lords-from-world-after-the-fall.avif",
            "trailer": "https://www.youtube.com/watch?v=hc72xltCnW4&pp=ygUoVGhlIFdvcmxkIEFmdGVyIHRoZSBGYWxsIG1hbmh3YSB0cmFpbGxlcg%3D%3D",
            "section": "manhwa",
            "genres": "Apocalyptic, Psychological, Adventure",
            "type": "manhwa",
            "sposter": "images/download (22).jpeg",
            "synopsis": "Jaehwan, the sole survivor of a fallen tower climb, wanders a ruined world where gravity reverses and skyscrapers float. Clutching his dead wife’s necklace, he battles畸变体 (mutants) that wear familiar faces. With each kill, he absorbs their memories, inching closer to the truth behind the tower’s collapse. But the final revelation forces a choice: Avenge the past or rebuild from ashes."
        },
        {
            "name": "Your Talent is Mine",
            "land": 8.6,
            "watch": "https://example.com/watch/solo-leveling",
            "nigga": "images/Your-Talent-is-Mine-2-1.jpg",
            "trailer": "https://www.youtube.com/shorts/0tIckE3f0sU",
            "section": "manhwa",
            "genres": "Supernatural, Thriller, Revenge",
            "type": "manhwa",
            "sposter": "images/download (23).jpeg",
            "synopsis": "Rin, a talentless orphan, discovers a parasitic ability: Stealing powers by touching others’ skin. She infiltrates elite academies as a “talent vampire,” draining bullies and corrupt prodigies. But when she absorbs a pyrokinetic’s rage and an empath’s guilt, Rin’s identity fractures. The ultimate theft awaits—a godlike skill locked within her missing brother—if she dares confront the family that abandoned her."
        },
        {
            "name": "Black Clover",
            "land": 8.1,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=FMKtL5-slbY&pp=ygUdIkJsYWNrIENsb3ZlciBtYW5nYSAgdHJhaWxsZXI%3D",
            "section": "manga",
            "nigga": "images/8332ffd3-3c4f-4808-87e7-74efa7bd919e.webp",
            "date": "2015",
            "postist": "images/BlackClover.jpeg",
            "genres": "Action, Fantasy, Shounen",
            "type": "series",
            "synopsis": "In a world where magic is everything, Asta - a rare magicless boy - dreams of becoming Wizard King. With his rival Yuno and the Black Bulls squad, he battles corrupt nobles and demons using sheer determination and anti-magic swords. Black Clover delivers thrilling battles, heartfelt camaraderie, and relentless ambition in this magical underdog story.",
            "sposter": "images/Black Clover (2).jpeg"
        },

        {
            "name": "Blue Box",
            "land": 8.4,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=9fXlN2uHOso&pp=ygUaIkJsdWUgQm94ICBtYW5nYSAgdHJhaWxsZXI%3D",
            "section": "manga",
            "nigga": "images/757-WSJ2021_issue19_PageHeader_2000x800_wm.jpg",
            "date": "2021",
            "postist": "images/BlueBox.jpeg",
            "genres": "Romance, Sports, School Life",
            "type": "series",
            "synopsis": "Badminton star Taiki Inomata falls for basketball prodigy Chinatsu Kano when she moves into his home. Balancing sports ambitions with growing feelings, Blue Box captures the sweet tension of young love across courts. This heartfelt manga blends competitive spirit with tender romantic moments in a beautifully drawn coming-of-age story.",
            "sposter": "images/Blue box tome 1.jpeg"
        },

        {
            "name": "Chainsaw Man",
            "land": 9.0,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=VPB_J6Egi28&pp=ygUaY2hhaW5zYXcgbWFuIG1hbmdhIHRyYWlsZXI%3D",
            "section": "manga",
            "nigga": "images/chainsaw-man-manga-1642711018060.webp",
            "date": "2018",
            "postist": "images/ChainsawMan.jpeg",
            "genres": "Action, Horror, Dark Comedy",
            "type": "series",
            "synopsis": "Denji merges with Chainsaw Devil Pochita to become Chainsaw Man, hunting demons for the government. Tatsuki Fujimoto's genre-defying work blends visceral action with absurd humor and existential themes. From bloody battles to bizarre fast food cravings, Chainsaw Man delivers an unpredictable, emotionally raw shounen experience unlike any other.",
            "sposter": "images/CHAINSAW MAN.jpeg"
        },

        {
            "name": "One Punch Man",
            "land": 8.8,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=FxuLExy6sm8&pp=ygUcIk9uZSBQdW5jaCBNYW4gbWFuZ2EgdHJhaWxlcg%3D%3D",
            "section": "manga",
            "nigga": "images/Saitama-Punches-Garou-in-One-Punch-Man.avif",
            "date": "2012",
            "postist": "images/OnePunchMan.jpeg",
            "genres": "Action, Comedy, Superhero",
            "type": "series",
            "synopsis": "Saitama's unmatched strength lets him defeat any foe with one punch, leaving him bored in a world of flashy heroes and monstrous threats. ONE and Yusuke Murata's masterpiece satirizes superhero tropes through stunningly animated battles and deadpan humor. One Punch Man explores purpose and power in a society obsessed with rankings and appearances.",
            "sposter": "images/One-Punch Man Cover Volume 1      _      One-Punch Man Portada Tomo 1.jpeg"
        },

        {
            "name": "Jujutsu Kaisen",
            "land": 8.9,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=2pJXDic6Sp8&pp=ygUdSnVqdXRzdSBLYWlzZW4gIG1hbmdhIHRyYWlsZXI%3D",
            "section": "manga",
            "nigga": "images/Sukuna_vs._Jogo.jpg",
            "date": "2018",
            "postist": "images/JujutsuKaisen.jpeg",
            "genres": "Action, Supernatural, Horror",
            "type": "series",
            "synopsis": "Yuji Itadori swallows Sukuna's cursed finger to save friends, becoming the vessel for the King of Curses. At Jujutsu High, he trains with sorcerers Megumi and Nobara to collect Sukuna's fragments. Gege Akutami's dark fantasy blends brutal exorcisms with deep lore about cursed energy, delivering emotionally charged battles against terrifying supernatural forces.",
            "sposter": "images/Jujutsu Kaisen.jpeg"
        },

        {
            "name": "Bleach",
            "land": 8.5,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=uXw5cCh1DaQ&pp=ygUVYmxlYWNoICBtYW5nYSB0cmFpbGVy",
            "section": "manga",
            "nigga": "images/bb721b3e-9c41-4b6d-ab6f-4a2bf6e1f2e6.webp",
            "date": "2001",
            "postist": "images/Bleach.jpeg",
            "genres": "Action, Supernatural, Adventure",
            "type": "series",
            "synopsis": "Ichigo Kurosaki gains Soul Reaper powers from Rukia to protect his town from Hollows. Tite Kubo's iconic series follows his journey through Soul Society's conflicts with stunning swordplay and evolving zanpakuto abilities. From Substitute Shinigami to war against Quincy, Bleach delivers stylish supernatural battles with timeless character designs and dramatic reveals.",
            "sposter": "images/꒰ ・ichigo icon.jpeg"
        },

        {
            "name": "Demon Slayer",
            "land": 9.1,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=PV1xN55K1Vo&pp=ygUcIkRlbW9uIFNsYXllciAgbWFuZ2EgdHJhaWxlcg%3D%3D",
            "section": "manga",
            "nigga": "images/5945-SeriesHeaders_DemonSlayer_2000x800_wm.jpg",
            "date": "2016",
            "postist": "images/DemonSlayer.jpeg",
            "genres": "Action, Historical, Supernatural",
            "type": "series",
            "synopsis": "After demons slaughter his family, Tanjiro Kamado joins the Demon Slayer Corps to cure his sister Nezuko's transformation. Koyoharu Gotouge's hit follows their journey through breathtaking sword styles and emotional battles against the Twelve Kizuki. Demon Slayer's blend of visceral combat and heartfelt character moments created a cultural phenomenon.",
            "sposter": "images/download (24).jpeg"
        },

        {
            "name": "Hell's Paradise",
            "land": 8.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=oC0hINhFICM&pp=ygUeSGVsbCdzIFBhcmFkaXNlICBtYW5nYSB0cmFpbGVy",
            "section": "manga",
            "nigga": "images/2023-04-19-7-1191659802-e1681898211384.webp",
            "date": "2018",
            "postist": "images/HellsParadise.jpeg",
            "genres": "Action, Dark Fantasy, Psychological",
            "type": "series",
            "synopsis": "Condemned ninja Gabimaru and executioner Yamada Asaemon seek the elixir of life on a monstrous island. Yuji Kaku's visceral tale explores redemption amidst surreal horrors and twisted immortality seekers. Hell's Paradise merges Edo-period aesthetics with body horror and philosophical depth, creating a uniquely unsettling battle for survival.",
            "sposter": "images/☆.jpeg"
        },

        {
            "name": "My Hero Academia",
            "land": 8.7,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=DvkjZMoCGQY&pp=ygUfTXkgSGVybyBBY2FkZW1pYSAgbWFuZ2EgdHJhaWxlcg%3D%3D",
            "section": "manga",
            "nigga": "images/5344-SeriesHeaders_MHA_v2_2000x800_wm.jpg",
            "date": "2014",
            "postist": "images/MyHeroAcademia.jpeg",
            "genres": "Action, Superhero, School",
            "type": "series",
            "synopsis": "Quirkless Deku inherits All Might's One For All to attend UA High and become the world's greatest hero. Kohei Horikoshi's vibrant series balances superhero training with escalating villain threats. From Sports Festivals to Shigaraki's war, My Hero Academia delivers inspirational underdog growth and spectacular Quirk-powered battles.",
            "sposter": "images/MHA VOL_ 37!!!!!!!!!!!! BAKUGOU & DEKU!!!!!!!.jpeg"
        },

        {
            "name": "Tokyo Ghoul",
            "land": 8.6,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=wiL63YN5aZo&pp=ygUZVG9reW8gR2hvdWwgbWFuZ2EgdHJhaWxlcg%3D%3D",
            "section": "manga",
            "nigga": "images/kaneki-arima-tokyo-ghoul-manga-ptlmugz0onxdvgl2.jpg",
            "date": "2011",
            "postist": "images/TokyoGhoul.jpeg",
            "genres": "Horror, Psychological, Dark Fantasy",
            "type": "series",
            "synopsis": "College student Ken Kaneki becomes a half-ghoul after an accident, torn between human morals and ghoul instincts. Sui Ishida's haunting work explores identity and persecution through visceral Kagune battles and CCG investigations. Tokyo Ghoul's intricate symbolism and tragic character arcs create a deeply unsettling examination of societal otherness.",
            "sposter": "images/Volume №14.jpeg"
        },

        {
            "name": "Berserk",
            "land": 9.5,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=kRCe1_WkwWg&pp=ygUWIkJlcnNlcmsgbWFuZ2EgdHJhaWxlcg%3D%3D",
            "section": "manga",
            "nigga": "images/wp9200831.jpg",
            "date": "1989",
            "postist": "images/Berserk.jpeg",
            "genres": "Dark Fantasy, Horror, Epic",
            "type": "series",
            "synopsis": "Branded warrior Guts wields the Dragonslayer sword against demonic Apostles in Kentaro Miura's unparalleled dark fantasy. From the Golden Age to Falconia, Berserk's intricate storytelling explores causality and human resilience amidst grotesque horrors. The manga's breathtaking artwork and profound themes cement its legacy as a masterpiece of graphic storytelling.",
            "sposter": "images/Berserk White Guts Berserker Armor Poster.jpeg"
        },

        {
            "name": "Vagabond",
            "land": 9.3,
            "watch": "https://example.com/watch/solo-leveling",
            "trailer": "https://www.youtube.com/watch?v=kZhw6gclUhw&pp=ygUYVmFnYWJvbmQiICBtYW5nYSB0cmFpbGVy",
            "section": "manga",
            "nigga": "images/Featured-Manga-Like-Vagabond-Musashi-Guts.avif",
            "date": "1998",
            "postist": "images/Vagabond.jpeg",
            "genres": "Historical, Martial Arts, Philosophical",
            "type": "series",
            "synopsis": "Takehiko Inoue adapts Miyamoto Musashi's life into a visually stunning exploration of swordsmanship and enlightenment. From wild killer to refined warrior, Vagabond's ink-washed pages meditate on the nature of strength and purpose. This epic reimagining of Japan's legendary swordsman blends intense duels with profound spiritual growth.",
            "sposter": "images/Vagabond Volume 22.jpeg"
        }
    ];



    data.forEach((anime, index) => {
        anime.id = `anime-${index}-${anime.name.toLowerCase().replace(/\s+/g, '-')}`;
    });

    // Store data with expiration
    const now = new Date().getTime();
    const storageData = {
        data: data,
        expires: now + 3600000,
        timestamp: now
    };

    localStorage.setItem('animeDatabase', JSON.stringify(storageData));

    localStorage.setItem('animeDatabase', JSON.stringify(data));

    // DOM Elements
    const cardsContainer = document.querySelector('.cards');
    const searchContainer = document.querySelector('.search');
    const searchInput = document.querySelector('#search_input');
    const upcomingAnimeCards = document.getElementById('upcoming-anime-cards');
    const classicAnimeCards = document.getElementById('classic-anime-cards'); // Changed ID          
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const headerTitle = document.getElementById('title');
    const headerDescription = document.getElementById('description');
    const headerGen = document.getElementById('gen');
    const headerDate = document.getElementById('date');
    const headerLand = document.getElementById('land');
    const watchNowButton = document.getElementById('watch-now-button');

    // Navigation Buttons for Popular Anime
    const popularLeftBtn = document.querySelector('.popular-anime .left-button');
    const popularRightBtn = document.querySelector('.popular-anime .right-button');
    const upcomingLeftBtn = document.querySelector('.upcoming-anime .left-button');
    const upcomingRightBtn = document.querySelector('.upcoming-anime .right-button');
    const classicLeftBtn = document.querySelector('.classic-left'); // Added classic navigation
    const classicRightBtn = document.querySelector('.classic-right');
    const romanceLeftBtn = document.querySelector('.romance-left');
    const romanceRightBtn = document.querySelector('.romance-right');
    const twoLeftBtn = document.querySelector('.manhwa-left');
    const twoRightBtn = document.querySelector('.manhwa-right');
    const mangaLeftBtn = document.querySelector('.manga-left');
    const mangaRightBtn = document.querySelector('.manga-right');


    // Initialize Data
    let animeData = JSON.parse(localStorage.getItem('animeDatabase'))?.data || data;

    // Function to update header content
    function updateHeaderContent(anime) {
        if (videoPlayer && videoSource) {
            videoSource.src = anime.video;
            videoPlayer.load();
            videoPlayer.play().catch(error => {
                console.error('Video play error:', error);
            });
        }

        if (headerTitle) headerTitle.textContent = anime.name;
        if (headerDescription) headerDescription.textContent = anime.description;
        if (headerGen) headerGen.textContent = anime.genres;
        if (headerDate) headerDate.textContent = anime.date;
        if (headerLand) headerLand.innerHTML = `<span>IMDB</span><i class="bi bi-star-fill"></i> ${anime.land}`;
    }

    // Function to create cards for a specific section
    function createSectionCards(sectionId, container, cardTemplate) {
        const filteredData = animeData.filter(anime => anime.section === sectionId);
        container.innerHTML = '';

        filteredData.forEach(anime => {
            const card = document.createElement('div');
            card.innerHTML = cardTemplate(anime);

            if (sectionId === 'popular') {
                card.addEventListener('click', () => {
                    updateHeaderContent(anime);
                    localStorage.setItem('selectedAnime', JSON.stringify(anime));
                });
            }

            if (['upcoming', '2000s', 'romance', 'manhwa', 'manga'].includes(sectionId)) {
                card.addEventListener('click', () => {
                    localStorage.setItem('selectedAnime', JSON.stringify(anime));
                    window.location.href = `index2.html?anime=${encodeURIComponent(anime.name)}`;
                });
            }

            container.appendChild(card);
        });
    }

    // Initialize Sections

    function createCardElement(anime) {
        const card = document.createElement('div');
        card.classList.add('upcoming-card');
        card.innerHTML = `
            <div class="poster-container">
                <img src="${anime.sposter}">
                <div class="image-overlay"></div>
            </div>
            <div class="details-container">
                <h3 class="title">${anime.name}</h3>
                <div class="genre-list">
                    ${anime.genres.split(", ").map(genre => `<span>${genre}</span>`).join('')}
                </div>
                <div class="rating-section">
                    <div class="rating-badge">
                        <i class="fas fa-star"></i>
                        <span class="score">${anime.land}</span>
                        <img src="images/channels4_profile.jpg" class="imdb-logo">
                    </div>
                </div>
            </div>
        `;
        return card;
    }


    // Card Templates
    const cardTemplates = {
        popular: (anime) => `
            <div class="card">
                <img src="${anime.sposter}" class="poster">
                <div class="rest_card">
                    <img src="${anime.postist}">
                    <div class="cont">
                        <h4>${anime.name}</h4>
                        <div class="sub">
                            <p>${anime.genres}, ${anime.date}</p>
                            <h3><span>IMDB</span><i class="bi bi-star-fill"></i> ${anime.land}</h3>
                        </div>
                    </div>
                </div>
            </div>
        `,
        upcoming: (anime) => `
        <div class="upcoming-card">
            <div class="poster-container">
                <img src="${anime.sposter}">
                <div class="image-overlay"></div>
                <div class="details-container">
                    <h3 class="title">${anime.name}</h3>
                    <div class="genre-list">
                        ${anime.genres.split(", ").map(genre => `<span>${genre}</span>`).join('')}
                    </div>
                    <div class="rating-section">
                        <div class="rating-badge">
                            <i class="fas fa-star"></i>
                            <span class="score">${anime.land}</span>
                        </div>
                    </div>
                    <p class="synopsis">${anime.synopsis}</p>
                </div>
            </div>
            <div class="title-container">
                <h3 class="title">${anime.name}</h3>
                <div class="subtitle">Subtitled</div>
            </div>
        </div>
    `
    };

    if (watchNowButton) {
        watchNowButton.addEventListener('click', () => {
            const selectedAnime = JSON.parse(localStorage.getItem('selectedAnime'));
            // Ensure the selected anime is from the "popular" section
            if (selectedAnime && selectedAnime.section === 'popular') {
                window.location.href = `index2.html?anime=${encodeURIComponent(selectedAnime.name)}`;
            } else {
                alert('Please select a popular anime from the list first.');
            }
        });
    }

    // Initialize Sections
    function initializeSections() {
        // Popular anime cards
        createSectionCards('popular', cardsContainer, cardTemplates.popular);

        // Upcoming anime cards
        createSectionCards('upcoming', upcomingAnimeCards, cardTemplates.upcoming);

        createSectionCards('2000s', document.getElementById('classic-anime-cards'), cardTemplates.upcoming);

        createSectionCards('romance', document.getElementById('romance-anime-cards'), cardTemplates.upcoming);

        createSectionCards('manhwa', document.getElementById('manhwa-anime-cards'), cardTemplates.upcoming);

        createSectionCards('manga', document.getElementById('manga-anime-cards'), cardTemplates.upcoming);
        // Set the first popular anime as default in the header
        const firstPopularAnime = animeData.find(anime => anime.section === 'popular');
        if (firstPopularAnime) {
            updateHeaderContent(firstPopularAnime);
            localStorage.setItem('selectedAnime', JSON.stringify(firstPopularAnime));
        }
    }


    // Search Functionality
    function initializeSearch() {
        searchContainer.innerHTML = '';
        animeData.forEach(anime => {
            const card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${anime.sposter}">
                <div class="cont">
                    <h3>${anime.name}</h3>
                    <p>${anime.genres}, ${anime.date}, <span>IMDB</span><i class="bi bi-star-fill"></i>${anime.land}</p>
                </div>
            `;
            card.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('selectedAnime', JSON.stringify(anime));
                window.location.href = `index2.html?anime=${encodeURIComponent(anime.name)}`;
            });
            searchContainer.appendChild(card);
        });

        // Search input handler
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const cards = searchContainer.querySelectorAll('.card');

            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? 'flex' : 'none';
            });

            searchContainer.classList.toggle('visible', searchTerm.length > 0);
        });
    }

    if (popularLeftBtn && popularRightBtn) {
        popularLeftBtn.addEventListener('click', () => {
            cardsContainer.scrollBy({ left: -200, behavior: 'smooth' });
            checkScrollButtons();
        });

        popularRightBtn.addEventListener('click', () => {
            cardsContainer.scrollBy({ left: 200, behavior: 'smooth' });
            checkScrollButtons();
        });
    }

    // Upcoming Anime Navigation Fix
    function setupSlider(leftBtn, rightBtn, containerId) {
        const container = document.getElementById(containerId);
        if (!container || !leftBtn || !rightBtn) return;

        const scrollAmount = () => window.innerWidth * 0.95; // scroll 80% of the screen width

        leftBtn.addEventListener('click', () => {
            container.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            container.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });
    }

    // Setup all sliders
    setupSlider(upcomingLeftBtn, upcomingRightBtn, 'upcoming-anime-cards');
    setupSlider(classicLeftBtn, classicRightBtn, 'classic-anime-cards');
    setupSlider(romanceLeftBtn, romanceRightBtn, 'romance-anime-cards');
    setupSlider(twoLeftBtn, twoRightBtn, 'manhwa-anime-cards');
    setupSlider(mangaLeftBtn, mangaRightBtn, 'manga-anime-cards');


    upcomingAnimeCards.addEventListener('scroll', () => {
        const scrollLeft = upcomingAnimeCards.scrollLeft;
        const maxScroll = upcomingAnimeCards.scrollWidth - upcomingAnimeCards.clientWidth;

        if (scrollLeft <= 0) {
            upcomingLeftBtn.classList.add('disabled');
        } else {
            upcomingLeftBtn.classList.remove('disabled');
        }

        if (scrollLeft >= maxScroll) {
            upcomingRightBtn.classList.add('disabled');
        } else {
            upcomingRightBtn.classList.remove('disabled');
        }
    });

    // Initial Setup
    function initializeAll() {
        initializeSections();
        initializeSearch();
        setupPopularNavigation();
        setupUpcomingNavigation();
        generateCards()
    }

    // Start the application
    initializeAll();



});