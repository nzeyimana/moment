// moment.js locale configuration
// locale : kinyarwanda (rw)
// author : NZEYIMANA Emery Fabrice : https://github.com/nzeyimana

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('rw', {
        months : 'Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza'.split('_'),
        monthsShort : 'mut._gas._wer._mata_gic._kam._nya._kan._nze._ukw._ugu._uku.'.split('_'),
        weekdays : 'Ku cyumweru_Kuwa mbere_Kuwa kabiri_Kuwa gatatu_Kuwa kane_Kuwa gatanu_Kuwa gatandatu'.split('_'),
        weekdaysShort : 'cyu._mbe._kab._gtu._kan._gnu._gnd.'.split('_'),
        weekdaysMin : 'Cy_Mb_Kb_Gt_Kn_Gn_Gd'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Uyu munsi saa] LT',
            nextDay: '[Ejo saa] LT',
            nextWeek: 'dddd [saa] LT',
            lastDay: '[Ejo hashize saa] LT',
            lastWeek: 'dddd [gishize saa] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'mu %s',
            past : 'hashize %s',
            s : 'amasegonda macye',
            m : 'umunota umwe',
            mm : 'iminota %d',
            h : 'isaha imwe',
            hh : 'amasaha %d',
            d : 'umunsi umwe',
            dd : 'iminsi %d',
            M : 'ukwezi kumwe',
            MM : 'amezi %d',
            y : 'uwmaka umwe',
            yy : 'imyaka %d'
        },
        ordinalParse : /\d{1,2}/,
        ordinal : '%d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
