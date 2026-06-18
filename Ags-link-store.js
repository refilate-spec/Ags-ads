// --- AUTH SYSTEM (FIXED) ---
const AGS_AUTH = {
    email: "webiyox@gmail.com",
    pass: "@G$5//RN3",
    checkLogin() {
        const u = document.getElementById("login-email").value.trim();
        const p = document.getElementById("login-pass").value.trim();
        if(u === this.email && p === this.pass) {
            document.getElementById("ags-login-screen").style.display = "none";
            document.getElementById("ags-main-dashboard").style.display = "block";
            AGS_SYSTEM.init();
        } else {
            alert("Galat Login Details!");
        }
    }
};

const AGS_SYSTEM = {
    config: {
        storageKey: "AGS_LINKS_v3.5",
        adminPassword: "6356",
        defaults: {
            "offers": {},
            "ads": {
                "Adsterra": "https://beta.publishers.adsterra.com/referral/4S5tsysDfw",
                "Adsterra-link": "https://www.profitablecpmratenetwork.com/ax00jfk5dn?key=aeb3685d3cd4b4dfc26a216e3235cef4",
                "Adsterra-link-adult": "https://www.profitablecpmratenetwork.com/pk7md4hn?key=f56546b34637ecd72a51708cbbf116c6"
            },
            "apps": {
                "Coinday": "https://play.google.com/store/apps/details?id=com.coinday.app&referrer=8781412",
                "Golden Surveys": "https://app.goldensurveys.com/en/join/QME47373",
                "Tap4coin": "https://invite.tap4coin.com/invite_in.html?u=22814254549&app_ver=2.7.6",
                "True Pay": "https://play.google.com/store/apps/details?id=com.truepay&referrer=8081198566",
                "Bachatt": "https://open.bachatt.app/EztW/qonvqhib?deep_link_sub1=B525946295S",
                "True Balance": "https://truebalance.onelink.me/bMoN/azpw3enj",
                "mReward": "https://mrewards.app/?uid=5uWAgQ68er",
                "Frizza": "https://play.google.com/store/apps/details?id=com.rocketcharge&referrer=utm_source%3Dreferral%26used_code%3DPC8C5C01%26utm_campaign%3Dkeepnotes",
                "Solve Earn": "https://play.google.com/store/apps/details?id=com.rayolesoftware.solve.earn&referrer=fvqfcI",
                "TaptoEarn": "https://play.google.com/store/apps/details?id=com.rayolesoftware.tapnearn&referrer=jaR8Zx",
                "Gpay link": "https://g.co/payinvite/8092r1d",
                "Paytm": "https://p.paytm.me/xCTH/2vhzd5lo?utmt=031910",
                "Phonepe": "https://phon.pe/maf1tgq2",
                "Airtel": "https://i.airtel.in/refandearnP88PDCCKYC",
                "Jar Gold": "https://jar.onelink.me/6H9Q/k3l486ei",
                "Innopay": "https://mkt2.in/innopay/SsfJNLSE",
                "Taurus App": "https://th1.my/BJTRM1/5g5eoma"
            },
            "games": {
                "Game3f": "https://www.skillerbet.com/kqVg",
                "Teenpatti Master B": "https://www.earntp.com/m/q1go0k",
                "Teenpatti Master A": "https://www.earntp.com/m/k0q4u",
                "Taurus Game 2": "https://tg2.my/BYJ3Y0/5g5eoma",
                "Taurus Game 1": "https://tg3.my/BYJ3Y0/5g5eoma"
            },


  "yonogames": {
    "Rummy Ludo": "https://www.rummyludo1.com/?code=UWPXCMUM8G6&t=1780553615",
    "Games Rummy": "https://gamesrummy.club/?code=Q6WA7QSCF8S&t=1780553756",
    "Yes Spin": "https://www.yesspiniii.com/?code=47TTVQFBVQU&t=1780566195",
    "Rummy 91": "https://www.rummy91n.bet/?code=4KT9EB3JWVV&t=1780575442",
    "777 Game": "https://www.777game0.com/?code=H53SWTT7STB&t=1780566856www.777game7.com",
    "Top Rummy": "https://www.toprummy.cc/?code=7K9MME8Q1SU&t=1780553683",
    "Jaiho Rummy": "https://jaihorummy.co/?code=E745LZT41HH&t=1780575159",
    "Good Slots": "https://sharegoodslots.cc?pid=280626466&channel=2010001&pkg=com.goodslots.app",
    "IND Club": "https://indclub36.com/?code=34UT22M7EPU&t=1780567066",
    "Rumble Rummy": "https://www.rumblerummy444.vip/?code=UC0RPCFZKXU&t=1780565809",
    "Club INR": "https://clubinrvip2.one/?code=9VCKA47PAJX&t=1780550347",
    "Ok Rummy": "https://www.okrummy15.com/?code=H2G1CTNG2YU&t=1780566649",
    "Neta VIP": "https://www.neta1.vip/?code=DR0RP23LQNT&t=1780566701",
    "Jaiho 777": "https://jaiho777agent7.com/?code=GC28ESNXBWF&t=1780567585",
    "Jaiho Slots": "https://www.jaihoslots16.com/?code=EGP5UC4ETF3&t=1780575242",
    "Jaiho Spin": "https://tyjaihospin.com/?code=7TAURLBGPQ3&t=1780553359",
    "Yono Games": "https://yonogames8.com/?code=ZLW9SUY1&t=1780718164",
    "Jaiho Win": "https://www.jaihowin16.com/?code=1XNPURXLKZP&t=1780553265",
    "ABC Rummy": "https://www.66abcrummy.com/?code=75CRV7J85B2&t=1780549919",
    "Love Rummy": "https://www.9loverummy.com/?code=AFC8CUCU474&t=1780553472",
    "Share Slots": "https://share977.com/?code=A1LMPL2DWUH&t=1780717781",
    "Gogo Rummy": "https://www.gospin.bet/?code=8FW2KXQUYL5&t=1780566345",
    "Spin Crush": "https://bkfadsegtgs.safelyearnmillionsbysharingonepersonaqfxzqyj8.com/?code=ADEU9D432N3&t=1780718016",
    "Yono Arcade": "https://yonoarcadeapk8.com/?code=F55HLB47V9R&t=1780718095",
    "567 Slots": "https://join567slots0.cc/?code=9UX32ZKLW6S&t=1780566770",
    "Maha Games": "https://best-mahagames.com/?code=J24CP35HPP5&t=1780553519",
    "Hi Rummy": "https://hirummyrefer07.cc/?code=RX3GS39M14J&t=1780566513",
    "Yono Slots": "https://www.uonoslots.club/?code=PJB24AQ1EEN&t=1780565908",
    "101z Game": "https://101zvip4.com/?code=M3XAUA7WGJ3&t=1780566259",
    "Slots Spin": "https://www.slotsspinc.com/?code=XJB6LF8CPD7&t=1780717822",
    "IND Slots": "https://www.indslotsbonus.com/?code=EYMC4F74A14&t=1780567751",
    "Saga Slots": "https://www.sagaslots1.com/?code=0QH1FPVMSZR&t=1780717741",
    "YN 777": "https://www.y754.com/?code=4SWH3DR89GQ&t=1780573442",
    "Yono VIP": "https://uonovipga.com/?code=3CRWYULK1N3&t=1780565968",
    "Spin 777": "https://spin777ff.com/?code=W7CC2YTKB4A&t=1780717549",
    "IND Rummy": "https://indrummyo.com/?code=JQ7RFUYE8NT&t=1780575087",
    "Hindi 777": "https://www.hindi777agent5.com/?code=7LFU4PR3A4D&t=1780566558",
    "Bet 213": "https://www.bet213app.com/?code=2QT1L4GRLGJ&t=1780550055",
    "Rummy 77": "https://rummy77dd.com/?code=F3VA96HHLWT&t=1780575512",
    "Spin Winner": "https://spinwinner-w.com/?code=E1DDK3SCDMJ&t=1780717456",
    "Spin Gold": "https://spingoldappsagent.com/?code=HLTD3K9NFJ9&t=1780573574",
    "Spin 101": "https://spin101-k.net/?code=3512N9EQVZ7&t=1780717924",
    "789 Jackpots": "https://join789jackpots1.cc/?code=J7ZJVACAQXS&t=1780566068",
    "Slots Winner": "https://slotswinnerr.com/?code=9KQZ66SWKLU&t=1780717872",
    "MBM Bet": "https://www.mbmbet7.com/?code=UPHQLK2BAAK&t=1780575398",
    "Jaiho Arcade": "https://www.jaihogambling.com.com/?code=AZD7N7YK1BH&t=1780567630",
    "Ever 777": "https://www.ever777a.com/?code=ARHF6TLBQWQ&t=1774156568",
    "Yono Rummy": "https://yonorummy042.com/?code=VIPJ6SHM8GV&t=1780718190",
    "MQM Bet": "https://1mqmshare.vip?pid=346519275&channel=2010001&pkg=com.mqm.bet",
    "Bingo 101": "https://bingo101.life/?code=6YF8GYNG6TN&t=1780550112",
    "Joy Rummy": "https://www.joyrummy.me/?code=J5KLWKKCBDS&t=1780575309",
    "Boss Rummy": "https://bossrummyyy.com/?code=0T8Y8BSL24N",
    "Rummy 888": "https://rummy888vip34.com/?code=TPUAYRH7Z1X&t=1780717684",
    "Svip 777": "https://www.svip777.life?pid=444355080&channel=2010001&pkg=com.svip777.app"
  }, 
            "hosting": {
                "Hostinger": "https://www.hostinger.com/in?REFERRALCODE=Hostiyox"
            },
"my_social": {
    "Refilate TG": "https://t.me/refilate",
    "Refilate WA": "https://whatsapp.com/channel/0029VaCI8wU4CrfgOyJ1ex3f"
  },
            "cpalink": {
                "Link-1": "https://1buv.com/link?z=10737352&var={SOURCE_ID}&ymid={CLICK_ID}"
            }
        }
    },

    init() {
        this.loadData();
        this.applyLinksToButtons();
        if (document.getElementById("ags-main-dashboard")) {
            this.initAdmin();
        }
    },

    loadData() {
        const saved = localStorage.getItem(this.config.storageKey);
        this.links = saved ? JSON.parse(saved) : this.config.defaults;
    },

    save() {
        localStorage.setItem(this.config.storageKey, JSON.stringify(this.links));
        this.applyLinksToButtons();
    },

    applyLinksToButtons() {
        const buttons = document.querySelectorAll("a[data-link]");
        buttons.forEach(btn => {
            const key = btn.getAttribute("data-link").trim();
            let finalUrl = null;
            for (let cat in this.links) {
                if (this.links[cat][key]) {
                    finalUrl = this.links[cat][key];
                    break;
                }
            }
            if (finalUrl) {
                btn.href = finalUrl;
                btn.target = "_blank";
                btn.setAttribute("rel", "noopener noreferrer");
            }
        });
    },

    verifyAction() {
        return prompt("Enter Master PIN (6356):") === this.config.adminPassword;
    },

    initAdmin() {
        const tableBody = document.querySelector("#ags-link-table tbody");
        const dropdown = document.getElementById("existing-link-select");
        const form = document.getElementById("ags-link-form");

        const refreshAdminUI = (filter = "") => {
            if (tableBody) tableBody.innerHTML = "";
            if (dropdown) dropdown.innerHTML = '<option value="">-- Quick Edit --</option>';

            for (let cat in this.links) {
                for (let key in this.links[cat]) {
                    if (filter && !key.toLowerCase().includes(filter) && !cat.toLowerCase().includes(filter)) continue;

                    // Table Row Build
                    if (tableBody) {
                        const tr = document.createElement("tr");
                        const safeKey = key.replace(/'/g, "\\'");
                        tr.innerHTML = `<td><b>${cat}</b></td><td>${key}</td><td style="color:#60a5fa">${this.links[cat][key]}</td>
                        <td style="text-align:center;"><button class="del-btn" onclick="AGS_SYSTEM.deleteItem('${cat}','${safeKey}')">Delete</button></td>`;
                        tableBody.appendChild(tr);
                    }

                    // Dropdown Build (JSON Safe for spaces)
                    if (dropdown) {
                        const opt = document.createElement("option");
                        opt.value = JSON.stringify({ c: cat, k: key });
                        opt.textContent = `[${cat}] ${key}`;
                        dropdown.appendChild(opt);
                    }
                }
            }
        };

        // Form Submit
        form.onsubmit = (e) => {
            e.preventDefault();
            const cat = document.getElementById("link-category").value;
            const key = document.getElementById("link-key").value.trim();
            const url = document.getElementById("link-url").value.trim();
            if (!this.links[cat]) this.links[cat] = {};
            this.links[cat][key] = url;
            this.save();
            alert("Saved Successfully!");
            refreshAdminUI();
            form.reset();
        };

        // Dropdown Selection
        dropdown.onchange = (e) => {
            if (!e.target.value) return;
            const data = JSON.parse(e.target.value);
            document.getElementById("link-category").value = data.c;
            document.getElementById("link-key").value = data.k;
            document.getElementById("link-url").value = this.links[data.c][data.k];
        };

        // Search
        document.getElementById("ags-search-input").oninput = (e) => refreshAdminUI(e.target.value.toLowerCase());

        // Export/Import Setup
        this.setupTools(refreshAdminUI);

        refreshAdminUI();
    },

    deleteItem(cat, key) {
        if (confirm(`Delete ${key}?`) && this.verifyAction()) {
            delete this.links[cat][key];
            this.save();
            location.reload(); // Refresh to update UI
        }
    },

    setupTools(refreshCallback) {
        // Copy Table
        document.getElementById("copy-table").onclick = () => {
            let t = ""; document.querySelectorAll("#ags-link-table tr").forEach(row => {
                let r = []; row.querySelectorAll("th, td").forEach(c => r.push(c.innerText)); t += r.join("\t") + "\n";
            });
            navigator.clipboard.writeText(t).then(() => alert("Copied!"));
        };

        // Export JSON
        document.getElementById("download-json").onclick = () => {
            const blob = new Blob([JSON.stringify(this.links, null, 2)], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "ags-links-export.json";
            a.click();
        };

        // Import JSON
        document.getElementById("load-json-file").onclick = () => document.getElementById("json-file-input").click();
        document.getElementById("json-file-input").onchange = (e) => {
            const reader = new FileReader();
            reader.onload = (evt) => {
                if (this.verifyAction()) {
                    try {
                        this.links = JSON.parse(evt.target.result);
                        this.save();
                        alert("Import Successful!");
                        refreshCallback();
                    } catch (err) { alert("Invalid File!"); }
                }
            };
            reader.readAsText(e.target.files[0]);
        };
    }
};

// Start
window.addEventListener("DOMContentLoaded", () => AGS_SYSTEM.init());
