//! moment.js locale configuration
//! locale : Fulah [ff]
//! author : Ibrahima Malal Sarr : https://github.com/ibrahimasarr

hooks.defineLocale('ff', {
    months : 'Siilo_Colte_MBooy_See\u0257to_Duujal_Korse_Morso_Juko_Siilto_Yarkomaa_Jolal_Bowte'.split('_'),
    monthsShort : 'Sii_Col_Mbo_See_Duu_Kor_Mor_Juk_Sto_Yar_Jol_Bow'.split('_'),
    monthsParseExact : true,
    weekdays : 'Dewo_Aa\u0253nde_Mawbaare_Njeslaare_Naasaande_Mawnde_Hoore-Biir'.split('_'),
    weekdaysShort : 'Dew_Aa\u0253_Maw_Nje_Naa_Mde_Hoo'.split('_'),
    weekdaysMin : 'De_Aa_Ma_Nj_Na_Mw_Ho'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Hannde waktu] LT',
        nextDay : '[Janngo waktu] LT',
        nextWeek : 'dddd [waktu] LT',
        lastDay : '[Ha\u014Bki waktu] LT',
        lastWeek : 'dddd [\u0253ennunde waktu] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '\u0257oo e %s',
        past : 'wa\u0257ii %s',
        s : 'majaali see\u0257a',
        m : 'hojom',
        mm : 'kojome %d',
        h : 'waktu',
        hh : 'waktuuji %d',
        d : 'ñalawma',
        dd : 'bal\u0257e %d',
        M : 'lewru',
        MM : 'lebbi %d',
        y : 'hitaande',
        yy : 'duu\u0253i %d'
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});
