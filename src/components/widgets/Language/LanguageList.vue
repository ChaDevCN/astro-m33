<template>
    <div class="language-box" :class="{ 'language-box_isshow': isShow }">
        <ul class="language-list">
            <li :class="item.class" v-for="(item, index) in language" :key="index">
                <a :href="getHref(item)" :title="item.language" target="_blank">
                    <b class="country-flag"></b>
                    <div class="language-list-item__text text-black">{{ item.language }}</div>
                </a>
            </li>
            <div class="btn_close language-box_close flex-ct-x" @click="$emit('updataShow')">
                <div class="i-la:times"></div>
            </div>
        </ul>
    </div>
</template>
<script>
import language from "./language.json"
export default {
    props: ['isShow', 'updataShow', 'headerData'],
    data() {
        return {
            language
        }
    },
    methods: {
        getHref(item) {
            // try {
            //     const protocol = this.headerData.origin?.split('//')[0];
            //     const domain = this.headerData.origin?.split('//')[1];
            //     const path = this.headerData.pathPage === '/' ? '' : this.headerData.pathPage;
            //     return `${protocol}//${item.href}.${domain}${path}`;
            // } catch (error) {

            // }
        }
    }
}
</script>

<style lang="less">
@country-codes: af, sq, ar, hy, az, eu, be, bg, ca, zh, zh-TW, hr, cs, da, cc, nl, en, et, tl, fi, fr, gl, ka, de, el, ht, iw, hi, hu, is, id, ga, it, ja, ko, la, lv, lt, mk, ms, mt, no, fa, pl, pt, ro, ru, sr, sk, sl, es, sw, sv, th, tr, uk, ur, vi, cy, yi, bn, eo, bs, ceb, ny, ha, hmn, ig, jw, kk, km, lo, la, mg, ml, mi, mr, mn, my, ne, pa, st, si, so, su, tg, uz, yo, zu;

.language-box {
    position: absolute;
    top: 12px;
    left: 0;
    width: 390px;
    background: #FFF;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 80vh;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    z-index: 9999;
    transform: scale3d(0.9, 0.9, 1);

    &_isshow {
        display: none;
        height: 0;
    }

    .language-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
        padding: 20px;
        list-style: none;
        margin-bottom: 0;

        .language-flag {
            text-align: center;

            a {
                display: flex;
                align-items: center;

                &-item__text {
                    flex: 1;
                    word-break: auto-phrase;
                    white-space: nowrap;
                    font-size: 10pt;
                }
            }

        }

        .btn_close {
            grid-column: span 3;
            color: #686868;
            font-size: 20px;
            text-align: center;
            background-color: #F8F8F8;
            cursor: pointer;
            padding: 8px 0;

            &:hover {
                color: #88b226;
            }
        }
    }



    .country-flag {
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
        margin-top: -1px;
        background-repeat: no-repeat;
        background-image: url('~assets/img/all-m.gif');
        width: 20px;
        height: 16px;
    }
}


.generate-flags();

.generate-flags() {
    .flag(@index) when (@index > 0) {
        @flag-name: extract(@country-codes, @index);
        @class-selector: ~".language-flag-@{flag-name} .country-flag";
        // 一个16
        @base-position: -((@index - 1) * 16px);

        // 992 开始 需要跳过 27个 
        @{class-selector} {
            // 国旗 请勿修改 
            background-position: 0 if(@base-position <=-992, @base-position - 432px, @base-position) !important;
        }

        .flag(@index - 1);
    }

    .flag(length(@country-codes));
}


.language-flag-hi .country-flag,
.language-flag-te .country-flag,
.language-flag-kn .country-flag,
.language-flag-ta .country-flag,
.language-flag-gu .country-flag {
    // 国旗 请勿修改 
    background-position: 0 -432px !important;
}

@media screen and (max-width: 767px) {
    .language-box {
        width: 90vw;
        right: 0;
        top: 25px;
        position: absolute;
        top: 0;
        left: auto;
        width: 90vw;
        background: #FFF;
        padding: 0 20px;
        transform: scale3d(0.9, 0.9, 1);
        z-index: 9999;
        transition: all 0.3s ease-in-out;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow-y: scroll;
        max-height: 80vh;
        right: 0;
        margin-top: 20px;

        .language-list {
            display: flex;
            flex-direction: column;
            gap: 10px;

            &-item__text {
                text-align: left;
                margin-left: 12px;
                color: var(--title-color);
            }
        }

        .btn-close {
            grid-column: span 1;
        }
    }
}

@media screen and (min-width: 768px) {
    .mobile_language {
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .mobile_language {
        display: block;
    }

    .mobile_language_btn {
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

}
</style>
