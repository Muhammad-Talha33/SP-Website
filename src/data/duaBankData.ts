interface Dua {
  id: number;
  category: string;
  arabic: string;
  translation: string;
  reference?: string;
  repeat?: number;
}


export const duas: Dua[] = [
  {
    "id": 1,
    "category": "Forgiveness",
    "arabic": "اللَّهُمَّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    "translation": "O Allah, forgive me and accept my repentance. Indeed, You are the Accepter of repentance, the Merciful.",
    "reference": "Sunan Ibn Majah 3814"
  },
  {
    "id": 2,
    "category": "Forgiveness",
    "arabic": "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
    "translation": "My Lord, forgive me and my parents and whoever enters my house a believer, and the believing men and women.",
    "reference": "Qur'an 71:28"
  },
  {
    "id": 3,
    "category": "Forgiveness",
    "arabic": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي",
    "translation": "O Allah, You are Most Forgiving and You love forgiveness, so forgive me.",
    "reference": "Tirmidhi 3513"
  },

  {
    "id": 4,
    "category": "Rizq",
    "arabic": "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    "translation": "O Allah, suffice me with what You have made lawful against what You have made unlawful, and enrich me with Your grace over all besides You.",
    "reference": "Tirmidhi 3563"
  },
  {
    "id": 5,
    "category": "Rizq",
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا، وَعِلْمًا نَافِعًا، وَعَمَلًا مُتَقَبَّلًا",
    "translation": "O Allah, I ask You for good, lawful sustenance, beneficial knowledge, and accepted deeds.",
    "reference": "Ibn Majah 925"
  },

  {
    "id": 6,
    "category": "Anxiety",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    "translation": "O Allah, I seek refuge in You from anxiety and sorrow, and I seek refuge in You from weakness and laziness, and I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overwhelmed by debt and overpowered by men.",
    "reference": "Sahih al-Bukhari 6369"
  },

  {
    "id": 7,
    "category": "Anxiety",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    "translation": "O Allah, I seek refuge in You from incapacity and laziness, cowardice and miserliness, and from being overwhelmed by debt and overpowered by people.",
    "reference": "Sahih Muslim 2706"
  },

  {
    "id": 8,
    "category": "Patience",
    "arabic": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
    "translation": "Our Lord, pour upon us patience and cause us to die as Muslims.",
    "reference": "Qur'an 7:126"
  },
  {
    "id": 9,
    "category": "Patience",
    "arabic": "اللَّهُمَّ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    "translation": "O Allah, keep my heart firm upon Your religion.",
    "reference": "Tirmidhi 2140"
  },

  {
    "id": 10,
    "category": "Protection",
    "arabic": "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    "translation": "In the name of Allah, with whose name nothing can harm in the earth nor in the heaven, and He is the All-Hearing, All-Knowing.",
    "reference": "Abu Dawood 5088",
    "repeat": 3
  },

  {
    "id": 11,
    "category": "Protection",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
    "translation": "O Allah, I seek refuge in You from the loss of Your blessings, the change of the good health You granted, the suddenness of Your punishment, and all that displeases You.",
    "reference": "Sahih Muslim 2739"
  },

  {
    "id": 12,
    "category": "Parents",
    "arabic": "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    "translation": "My Lord, have mercy on them as they raised me when I was small.",
    "reference": "Qur'an 17:24"
  },

  {
    "id": 13,
    "category": "Travel",
    "arabic": "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى",
    "translation": "O Allah, we ask You in this journey for righteousness and piety and for deeds that please You.",
    "reference": "Sahih Muslim 1342"
  },

  {
    "id": 14,
    "category": "Gratitude",
    "arabic": "اللَّهُمَّ اجْعَلْنِي لَكَ شَكَّارًا، لَكَ ذَكَارًا",
    "translation": "O Allah, make me among those who are much grateful to You and who remember You often.",
    "reference": "Abu Dawood 1522"
  },

  {
    "id": 15,
    "category": "Sleep",
    "arabic": "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    "translation": "O Allah, in Your name I die and I live.",
    "reference": "Sahih al-Bukhari 6314"
  },
  {
    "id": 16,
    "category": "Sleep",
    "arabic": "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    "translation": "O Allah, protect me from Your punishment on the Day You resurrect Your servants.",
    "reference": "Sahih al-Bukhari 6313"
  },

  {
    "id": 17,
    "category": "Morning",
    "arabic": "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ وَخَيْرَ مَا فِيهِ، وَأَعُوذُ بِكَ مِنْ شَرِّ هَذَا الْيَوْمِ وَشَرِّ مَا فِيهِ. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ. رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
    "translation": "We have entered the morning and the dominion belongs to Allah, and all praise is for Allah. There is no deity except Allah alone, without partner. His is the dominion and His is the praise, and He is over all things competent. My Lord, I ask You for the good of this day and the good of what comes after it, and I seek refuge in You from the evil of this day and the evil of what comes after it. My Lord, I seek refuge in You from laziness and the evil of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment of the grave.",
    "reference": "Abu Dawood 5071"
  },
  {
    "id": 18,
    "category": "Morning",
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ، فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ",
    "translation": "O Allah, I ask You for the good of this day, its victory, its light, its blessings and its guidance.",
    "reference": "Abu Dawood 5084"
  },

  {
    "id": 19,
    "category": "Evening",
    "arabic": "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ هَذِهِ اللَّيْلَةِ وَشَرِّ مَا فِيهَا. رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ. رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
    "translation": "We have entered the evening and the dominion belongs to Allah, and all praise is for Allah. There is no deity except Allah alone, without partner. His is the dominion and His is the praise, and He is over all things competent. My Lord, I ask You for the good of this night and the good of what comes after it, and I seek refuge in You from the evil of this night and the evil of what comes after it. My Lord, I seek refuge in You from laziness and the evil of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment of the grave.",
    "reference": "Abu Dawood 5071"
  },

  {
    "id": 20,
    "category": "Illness",
    "arabic": "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    "translation": "O Allah, Lord of mankind! Remove the harm and cure, for You are the Healer. There is no cure but Your cure, a cure that leaves no sickness.",
    "reference": "Sahih al-Bukhari 5742"
  },

  {
    "id": 21,
    "category": "Illness",
    "arabic": "اللَّهُمَّ اشْفِنِي شِفَاءً لَا يُغَادِرُ سَقَمًا",
    "translation": "O Allah, grant me a cure that leaves no illness.",
    "reference": "Ibn Majah 3520"
  },

  {
    "id": 22,
    "category": "Rain",
    "arabic": "اللَّهُمَّ صَيِّبًا نَافِعًا",
    "translation": "O Allah, make it beneficial rain.",
    "reference": "Sahih al-Bukhari 1032"
  },

  {
    "id": 23,
    "category": "Fear",
    "arabic": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    "translation": "Sufficient for us is Allah, and He is the best disposer of affairs.",
    "reference": "Qur'an 3:173"
  },

  {
    "id": 24,
    "category": "Fear",
    "arabic": "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    "translation": "There is no deity except You; Glory be to You. Indeed, I have been of the wrongdoers.",
    "reference": "Qur'an 21:87"
  },

  {
    "id": 25,
    "category": "General",
    "arabic": "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
    "translation": "Our Lord, accept from us. Indeed, You are the Hearing, the Knowing.",
    "reference": "Qur'an 2:127"
  },

  {
    "id": 26,
    "category": "General",
    "arabic": "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ",
    "translation": "O Allah, help me to remember You, thank You, and worship You properly.",
    "reference": "Abu Dawood 1522"
  },

  {
    "id": 27,
    "category": "General",
    "arabic": "رَبِّ زِدْنِي عِلْمًا",
    "translation": "My Lord, increase me in knowledge.",
    "reference": "Qur'an 20:114"
  },

  {
    "id": 28,
    "category": "Repentance",
    "arabic": "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    "translation": "My Lord, forgive me and accept my repentance. Indeed, You are the Accepter of repentance, the Merciful.",
    "reference": "Tirmidhi 3551"
  },

  {
    "id": 29,
    "category": "Repentance",
    "arabic": "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    "translation": "I seek forgiveness from Allah and repent to Him.",
    "reference": "Sahih al-Bukhari 6307",
    "repeat": 100
  },

  {
    "id": 30,
    "category": "Guidance",
    "arabic": "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
    "translation": "O Allah, guide me and keep me steadfast.",
    "reference": "Sahih Muslim 2725"
  },

  {
    "id": 31,
    "category": "Protection",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْقِلَّةِ وَالذِّلَّةِ، وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ",
    "translation": "O Allah, I seek refuge in You from poverty, scarcity, and humiliation, and I seek refuge in You from wronging others or being wronged.",
    "reference": "Abu Dawood 1544"
  },

  {
    "id": 32,
    "category": "Hardship",
    "arabic": "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ",
    "translation": "O Allah, I hope for Your mercy. Do not leave me to myself even for the blink of an eye, and rectify all my affairs.",
    "reference": "Abu Dawood 5090"
  },

  {
    "id": 33,
    "category": "Fear",
    "arabic": "اللَّهُمَّ اكْفِنِيهِمْ بِمَا شِئْتَ",
    "translation": "O Allah, protect me from them however You will.",
    "reference": "Sahih Muslim 3005"
  },

  {
    "id": 34,
    "category": "Family",
    "arabic": "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    "translation": "My Lord, make me an establisher of prayer and from my descendants. Our Lord, accept my supplication.",
    "reference": "Qur'an 14:40"
  },

  {
    "id": 35,
    "category": "Rizq",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْقِلَّةِ وَالذِّلَّةِ، وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ",
    "translation": "O Allah, I seek refuge in You from poverty, shortage, and humiliation, and from wronging others or being wronged.",
    "reference": "Abu Dawood 1544"
  },

  {
    "id": 36,
    "category": "Gratitude",
    "arabic": "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
    "translation": "All praise is due to Allah in every circumstance.",
    "reference": "Ibn Majah 3803"
  },

  {
    "id": 37,
    "category": "Knowledge",
    "arabic": "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي، وَارْزُقْنِي عِلْمًا يَنْفَعُنِي",
    "translation": "O Allah, benefit me with what You have taught me, teach me what will benefit me, and provide me with beneficial knowledge.",
    "reference": "Tirmidhi 3599"
  },

  {
    "id": 38,
    "category": "Children",
    "arabic": "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    "translation": "My Lord, grant me from among the righteous.",
    "reference": "Qur'an 37:100"
  },

  {
    "id": 39,
    "category": "Sustenance",
    "arabic": "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    "translation": "My Lord, indeed I am, for whatever good You send down to me, in need.",
    "reference": "Qur'an 28:24"
  },

 {
    "id": 40,
    "category": "Anxiety",
    "arabic": "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَهَ إِلَّا أَنْتَ.",
    "translation": "O Allah, I hope for Your mercy. Do not leave me to myself even for the blink of an eye. Rectify for me all of my affairs. There is no deity except You.",
    "reference": "Abu Dawood 5090"
  },

  {
    "id": 41,
    "category": "Ease",
    "arabic": "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِنْ شِئْتَ سَهْلًا",
    "translation": "O Allah, nothing is easy except what You make easy, and You can make the difficult easy if You wish.",
    "reference": "Ibn Hibban 2427"
  },

  {
    "id": 42,
    "category": "Forgiveness",
    "arabic": "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    "translation": "My Lord, forgive me and my parents and the believers on the Day the account is established.",
    "reference": "Qur'an 14:41"
  },

  {
    "id": 43,
    "category": "Travel",
    "arabic": "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ",
    "translation": "Glory be to Him who has subjected this for us, and we could not have done so on our own. And surely, to our Lord we will return.",
    "reference": "Qur'an 43:13–14"
  },

  {
    "id": 44,
    "category": "Gratitude",
    "arabic": "اللَّهُمَّ مَا بِي مِنْ نِعْمَةٍ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    "translation": "O Allah, whatever blessing I have is from You alone, without partner. So for You is all praise and thanks.",
    "reference": "Abu Dawood 5073"
  },

  {
    "id": 45,
    "category": "Humility",
    "arabic": "اللَّهُمَّ اجْعَلْنِي فِي عَيْنِي صَغِيرًا وَفِي أَعْيُنِ النَّاسِ كَبِيرًا",
    "translation": "O Allah, make me small in my own eyes and great in the eyes of people.",
    "reference": "Ibn Hibban 361"
  },

  {
    "id": 46,
    "category": "Illness",
    "arabic": "اللَّهُمَّ اشْفِنِي شِفَاءً لَا يُغَادِرُ سَقَمًا",
    "translation": "O Allah, grant me healing that leaves no illness.",
    "reference": "Ibn Majah 3520"
  },

  {
    "id": 47,
    "category": "Rain",
    "arabic": "اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا، اللَّهُمَّ عَلَى الْآكَامِ وَالظِّرَابِ وَبُطُونِ الْأَوْدِيَةِ وَمَنَابِتِ الشَّجَرِ",
    "translation": "O Allah, around us and not upon us. O Allah, send it on the hills, small mountains, valleys and the places where trees grow.",
    "reference": "Sahih al-Bukhari 1014"
  },

  {
    "id": 48,
    "category": "Gratitude",
    "arabic": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ",
    "translation": "My Lord, enable me to be grateful for Your favor which You bestowed upon me and my parents, and to do righteous deeds that please You.",
    "reference": "Qur'an 46:15"
  },

  {
    "id": 49,
    "category": "Patience",
    "arabic": "اللَّهُمَّ أَجِرْنِي فِي مُصِيبَتِي وَاخْلُفْ لِي خَيْرًا مِنْهَا",
    "translation": "O Allah, reward me for my affliction and replace it for me with something better.",
    "reference": "Sahih Muslim 918"
  },

  {
    "id": 50,
    "category": "Protection",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ، وَدَرَكِ الشَّقَاءِ، وَسُوءِ الْقَضَاءِ، وَشَمَاتَةِ الْأَعْدَاءِ",
    "translation": "O Allah, I seek refuge in You from severe calamity, misery, bad destiny, and the gloating of enemies.",
    "reference": "Sahih al-Bukhari 6616"
  },

  {
    "id": 51,
    "category": "Mercy",
    "arabic": "اللَّهُمَّ ارْحَمْنِي رَحْمَةً تُغْنِينِي بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ",
    "translation": "O Allah, have mercy on me with a mercy that makes me independent of the mercy of anyone else.",
    "reference": "Tabarani 1025"
  },

  {
    "id": 52,
    "category": "Forgiveness",
    "arabic": "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    "translation": "O Allah, I have greatly wronged myself, and none forgives sins but You, so forgive me with a forgiveness from You and have mercy on me. Indeed, You are the Most Forgiving, Most Merciful.",
    "reference": "Sahih al-Bukhari 834"
  },

  {
    "id": 53,
    "category": "Death",
    "arabic": "اللَّهُمَّ اجْعَلْ آخِرَ كَلَامِنَا لَا إِلَهَ إِلَّا اللَّهُ",
    "translation": "O Allah, make our last words 'There is no deity but Allah'.",
    "reference": "Musnad Ahmad 12110"
  },

  {
    "id": 54,
    "category": "Gratitude",
    "arabic": "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَكَفَانَا وَآوَانَا",
    "translation": "All praise is for Allah who has fed us, given us drink, sufficed us, and sheltered us.",
    "reference": "Sahih Muslim 2734"
  },

  {
    "id": 55,
    "category": "Relief",
    "arabic": "اللَّهُمَّ فَرِّجْ هَمِّي وَنَفِّسْ كَرْبِي",
    "translation": "O Allah, relieve my distress and ease my hardship.",
    "reference": "Ibn Majah 3819"
  },

  {
    "id": 56,
    "category": "Hope",
    "arabic": "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ",
    "translation": "My Lord, do not leave me alone, for You are the best of inheritors.",
    "reference": "Qur'an 21:89"
  },

  {
    "id": 57,
    "category": "Faith",
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا لَا يَرْتَدُّ، وَنَعِيمًا لَا يَنْفَدُّ",
    "translation": "O Allah, I ask You for faith that does not fade and blessings that never cease.",
    "reference": "Musnad Ahmad 15371"
  },

  {
    "id": 58,
    "category": "Forgiveness",
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
    "translation": "O Allah, I ask You for pardon and well-being.",
    "reference": "Abu Dawood 5074"
  },

  {
    "id": 59,
    "category": "Protection",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
    "translation": "O Allah, I seek refuge in You from the loss of Your blessing, the change of Your well-being, the suddenness of Your punishment, and all that displeases You.",
    "reference": "Sahih Muslim 2739"
  },

  {
    "id": 60,
    "category": "Gratitude",
    "arabic": "رَبِّ اجْعَلْنِي لَكَ شَكَّارًا لَكَ ذَكَارًا",
    "translation": "My Lord, make me ever grateful to You and ever remembering of You.",
    "reference": "Abu Dawood 1522"
  },
  
  {
    "id": 61,
    "category": "Waking Up",
    "arabic": "الحمدُ للهِ الذي أحيانا بعد ما أماتَنا وإليهِ النُّشور",
    "translation": "All praise is for Allah who gave us life after causing us to die, and to Him is the resurrection.",
    "reference": "Sahih al-Bukhari 6312"
  },
]
