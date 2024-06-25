<template>
  <div id="timeline-wrapper">
    <svg
      id="timeline-container"
      :height="`${(484 * this.playerCount) / 10}px`"
    ></svg>
    <div class="legend">
      <div class="legend-entry">
        <div class="legend-symbols">
          <img
            src="@/assets/auge.svg"
            :height="this.calcSize(1)"
            :width="this.calcSize(1)"
          />
          <span class="legend-fontsize">1</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/auge.svg"
            :height="this.calcSize(2)"
            :width="this.calcSize(2)"
          />
          <span class="legend-fontsize">2</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/auge.svg"
            :height="this.calcSize(3)"
            :width="this.calcSize(3)"
          />
          <span class="legend-fontsize">3</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/auge.svg"
            :height="this.calcSize(4)"
            :width="this.calcSize(4)"
          />
          <span class="legend-fontsize">4</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/auge.svg"
            :height="this.calcSize(5)"
            :width="this.calcSize(5)"
          />
          <span class="legend-fontsize">5+</span>
        </div>
        <span class="legend-fontsize">Ward(s) placed*</span>
      </div>
      <div class="legend-entry">
        <div class="legend-symbols">
          <img
            src="@/assets/dollar-symbol.svg"
            :height="this.calcSize(1)"
            :width="this.calcSize(1)"
          />
          <span class="legend-fontsize">1</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/dollar-symbol.svg"
            :height="this.calcSize(2)"
            :width="this.calcSize(2)"
          />
          <span class="legend-fontsize">2</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/dollar-symbol.svg"
            :height="this.calcSize(3)"
            :width="this.calcSize(3)"
          />
          <span class="legend-fontsize">3</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/dollar-symbol.svg"
            :height="this.calcSize(4)"
            :width="this.calcSize(4)"
          />
          <span class="legend-fontsize">4</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/dollar-symbol.svg"
            :height="this.calcSize(5)"
            :width="this.calcSize(5)"
          />
          <span class="legend-fontsize">5+</span>
        </div>
        <span class="legend-fontsize">Item(s) bought*</span>
      </div>
      <div class="legend-entry">
        <img
          src="@/assets/human-skull.svg"
          :height="this.calcSize(1)"
          :width="this.calcSize(1)"
        />
        <span class="legend-fontsize">Player died</span>
      </div>
      <div class="legend-entry">
        <div>
          <img
            src="@/assets/monster_baron.svg"
            :height="this.calcSize(1.5)"
            :width="this.calcSize(1.5)"
          />
          <span class="legend-fontsize"> / </span>
          <img
            src="@/assets/monster_drake.svg"
            :height="this.calcSize(1.5)"
            :width="this.calcSize(1.5)"
          />
        </div>
        <span class="legend-fontsize">Baron Nashor / Drake slain</span>
      </div>
    </div>
    <div class="legend">
      <div class="legend-entry">
        <div class="legend-symbols">
          <img
            src="@/assets/sword.svg"
            :height="this.calcSize(1)"
            :width="this.calcSize(1)"
          />
          <span class="legend-fontsize">1</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/sword.svg"
            :height="this.calcSize(2)"
            :width="this.calcSize(2)"
          />
          <span class="legend-fontsize">2</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/sword.svg"
            :height="this.calcSize(3)"
            :width="this.calcSize(3)"
          />
          <span class="legend-fontsize">3</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/sword.svg"
            :height="this.calcSize(4)"
            :width="this.calcSize(4)"
          />
          <span class="legend-fontsize">4</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/sword.svg"
            :height="this.calcSize(5)"
            :width="this.calcSize(5)"
          />
          <span class="legend-fontsize">5</span>
        </div>
        <span class="legend-fontsize">Enemies killed*</span>
      </div>
      <div class="legend-entry">
        <div class="legend-symbols">
          <img
            src="@/assets/medieval-tower.svg"
            :height="this.calcSize(1)"
            :width="this.calcSize(1)"
          />
          <span class="legend-fontsize">1</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/medieval-tower.svg"
            :height="this.calcSize(2)"
            :width="this.calcSize(2)"
          />
          <span class="legend-fontsize">2</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/medieval-tower.svg"
            :height="this.calcSize(3)"
            :width="this.calcSize(3)"
          />
          <span class="legend-fontsize">3</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/medieval-tower.svg"
            :height="this.calcSize(4)"
            :width="this.calcSize(4)"
          />
          <span class="legend-fontsize">4</span>
        </div>
        <div class="legend-symbols">
          <img
            src="@/assets/medieval-tower.svg"
            :height="this.calcSize(5)"
            :width="this.calcSize(5)"
          />
          <span class="legend-fontsize">5+</span>
        </div>
        <span class="legend-fontsize">Objectives destroyed*</span>
      </div>
      <div class="legend-entry">
        <svg
          id="legend-sentiment"
          width="50px"
          height="20px"
          viewBox="0 0 50 20"
        ></svg>
        <span class="legend-fontsize"
          >Sentiment of what was said at the time</span
        >
      </div>
    </div>
    <span id="notice">*within 30 seconds</span>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "Timeline",
  components: {},
  props: {
    selectedPlayers: Array,
  },
  data() {
    return {
      allEvents: [[], [], [], [], [], [], [], [], [], []],
      eventGraph: [[], [], [], [], [], [], [], [], [], []],
      playerCount: 0,
      eventTypes: [],
      selectedTimerangeCount: 12,
    };
  },
  methods: {
    calcTimelineHeight() {
      let auxNumber = 0;
      for (let player in this.eventGraph) {
        if (!this.selectedPlayers[player]) continue;
        auxNumber += 1;
      }
      if (auxNumber == this.playerCount) return;
      this.playerCount = auxNumber;
    },
    calcSize(frequency) {
      return 80 / (1 + Math.pow(5 / 3, 0 - parseFloat(frequency))) - 40;
    },
    fillEventGraph() {
      for (let y = 0; y < this.allEvents.length; y++) {
        for (let i of this.$store.state.matchDataTimeline.frames) {
          for (let x of i.events) {
            if (
              x.participantId == y + 1 ||
              x.killerId == y + 1 ||
              x.creatorId == y + 1 ||
              x.victimId == y + 1
            ) {
              this.allEvents[y].push(x);
              if (!this.eventTypes.includes(x.type)) {
                this.eventTypes.push(x.type);
              }
              if (
                this.eventGraph[y].length > 0 &&
                this.eventGraph[y][this.eventGraph[y].length - 1][0].includes(
                  x.type
                ) &&
                x.timestamp -
                  this.eventGraph[y][this.eventGraph[y].length - 1][2] <
                  30000
              ) {
                if (x.type == "CHAMPION_KILL") {
                  if (
                    x.victimId == y + 1 &&
                    this.eventGraph[y][this.eventGraph[y].length - 1][0] ==
                      "CHAMPION_KILL_DEATH"
                  ) {
                    this.eventGraph[y][this.eventGraph[y].length - 1][1] += 1;
                    this.eventGraph[y][this.eventGraph[y].length - 1][3].push(
                      x
                    );
                  } else if (
                    x.killerId == y + 1 &&
                    this.eventGraph[y][this.eventGraph[y].length - 1][0] ==
                      "CHAMPION_KILL_KILL"
                  ) {
                    this.eventGraph[y][this.eventGraph[y].length - 1][1] += 1;
                    this.eventGraph[y][this.eventGraph[y].length - 1][3].push(
                      x
                    );
                  } else if (x.victimId == y + 1) {
                    this.eventGraph[y].push([
                      `CHAMPION_KILL_DEATH`,
                      1,
                      x.timestamp,
                      [x],
                    ]);
                  } else {
                    this.eventGraph[y].push([
                      `CHAMPION_KILL_KILL`,
                      1,
                      x.timestamp,
                      [x],
                    ]);
                  }
                } else {
                  this.eventGraph[y][this.eventGraph[y].length - 1][1] += 1;
                  this.eventGraph[y][this.eventGraph[y].length - 1][3].push(x);
                }
              } else {
                switch (x.type) {
                  case "WARD_PLACED":
                    this.eventGraph[y].push([x.type, 1, x.timestamp, [x]]);
                    break;
                  case "ITEM_PURCHASED":
                    this.eventGraph[y].push([x.type, 1, x.timestamp, [x]]);
                    break;
                  case "CHAMPION_KILL":
                    if (x.victimId == y + 1) {
                      this.eventGraph[y].push([
                        `CHAMPION_KILL_DEATH`,
                        1,
                        x.timestamp,
                        [x],
                      ]);
                    } else {
                      this.eventGraph[y].push([
                        `CHAMPION_KILL_KILL`,
                        1,
                        x.timestamp,
                        [x],
                      ]);
                    }
                    break;
                  case "BUILDING_KILL":
                    this.eventGraph[y].push([x.type, 1, x.timestamp, [x]]);
                    break;
                  case "ELITE_MONSTER_KILL":
                    this.eventGraph[y].push([
                      x.type,
                      1,
                      x.timestamp,
                      [x],
                      x.monsterType,
                    ]);
                    break;
                  default:
                    break;
                }
              }
            }
          }
        }
      }
    },
    hoverOverTimeline(event) {
      document.getElementById("xPos").innerHTML = event.clientX;
    },
    renderChart() {
      this.calcTimelineHeight();

      /**
       * SVG Objekt zur Bestimmung der Breite und Höhe
       */
      const timeline_container = document.getElementById("timeline-container");

      /**
       * D3 Selektion zur Befüllung
       */
      let container = d3.select("#timeline-container");

      /**
       * Höhe des SVG Objekts
       */
      const height = timeline_container.getBoundingClientRect().height;

      /**
       * Breite des SVG Objekts
       */
      const width = timeline_container.getBoundingClientRect().width;

      /**
       * D3 X-Achse
       */
      let xScale = d3
        .scaleLinear()
        .domain([
          0,
          Math.floor((this.$store.state.matchData.gameDuration / 60.0) * 6),
        ])
        .range([1, width]);

        // SVG Objekt erhält X-Achse
      container
        .append("g")
        .classed("x-axis", true)
        .attr("transform", "translate(0," + height + ")")
        .call(
          d3
            .axisBottom(xScale)
            .ticks(
              Math.ceil((this.$store.state.matchData.gameDuration / 60.0) * 6) +
                1
            )
            .tickFormat(function (d, i) {
              return i > 0 && i % 30 === 0 ? `${d / 6} min` : null;
            })
        )
        .selectAll("text")
        .style("text-anchor", "middle");

        /**
         * Array mit Namen und Championbildern aller Spieler der Runde
         */
      let playerNamesYLabelfull = [];
      
      /**
       * Array mit Namen und Championbildern der selektierten Spieler der Runde
       */
      let playerNamesYLabel = [];

      // playerNamesYLabel & playerNamesYLabelfull werden befüllt
      for (let index in this.$store.state.selectedPlayer) {
        let champImg = "";
        if (this.$store.state.matchData.participants[index].championName.includes("'")) {
          let auxArray = this.$store.state.matchData.participants[index].championName.split("'");
          for (let index in auxArray) {
            if (index == 0) {
              champImg += auxArray[index];
              continue;
            }
            champImg += auxArray[index].toLowerCase();
          }
        } else if (this.$store.state.matchData.participants[index].championName.includes(".")) {
          let auxArray = this.$store.state.matchData.participants[index].championName.split(".");
          champImg = auxArray.join("");
          if (champImg.includes(" ")) {
            let auxName = champImg.split(" ");
            champImg = auxName.join("");
          }
        } else if (this.$store.state.matchData.participants[index].championName.includes(" ")) {
          let auxArray = this.$store.state.matchData.participants[index].championName.split(" ");
          champImg = auxArray.join("");
        } else {
          let auxName = this.$store.state.matchData.participants[index].championName.toLowerCase();
          champImg = this.$store.state.matchData.participants[index].championName
              .charAt(0)
              .toUpperCase() + auxName.slice(1);
        }
        playerNamesYLabelfull.push([/* this.$store.state.matchData.participants[index].summonerName */ index<5?`B${parseInt(index)+1}`:`R${parseInt(index)%5 + 1}`,champImg]);
        if (!this.selectedPlayers[index]) continue;
        playerNamesYLabel.push([/* this.$store.state.matchData.participants[index].summonerName */ index<5?`B${parseInt(index)+1}`:`R${parseInt(index)%5 + 1}`,champImg]);
      }

      /**
       * D3 Y-Achse
       */
      let yScale = d3
        .scaleBand()
        .range([0, height])
        .domain(playerNamesYLabel.map((x) => x[0]));

      container.append("g").classed("y-axis", true).call(d3.axisLeft(yScale));

      // SVG Paths
      let eyePath = `M2404 4080 c-846 -49 -1644 -502 -2280 -1294 -166 -207 -166 -244 1
-453 635 -793 1436 -1245 2286 -1292 961 -52 1870 402 2585 1293 166 207 166
244 -1 453 -464 579 -1016 977 -1626 1172 -190 61 -419 105 -599 116 -196 11
-238 12 -366 5z m368 -466 c287 -54 563 -250 713 -505 180 -308 199 -680 51
-995 -58 -123 -114 -203 -209 -301 -535 -551 -1446 -383 -1756 324 -112 255
-114 567 -5 833 105 259 334 485 595 588 198 78 396 96 611 56z M2455 3130 c-163 -35 -307 -136 -389 -274 -61 -101 -81 -176 -80
-296 0 -116 11 -163 57 -260 43 -89 167 -213 258 -257 321 -155 694 3 810 342
33 97 34 249 2 350 -73 231 -285 392 -528 401 -49 2 -108 -1 -130 -6z`;
      let dollarPath = `M2320 4690 l0 -170 -27 0 c-50 0 -236 -47 -338 -85 -367 -136 -630 -406 -730 -750 -63 -219 -52 -486 29 -687 108 -267 363 -460 794 -601 92 -30 191 -61 220 -68 l52 -13 0 -539 0 -539 -32 7 c-80 16 -282 90 -383 139 -129 63 -288 168 -397 260 l-77 65 -191 -236 c-106 -129 -194 -241 -197 -248 -6
-16 149 -144 282 -233 265 -178 624 -313 948 -358 l47 -6 0 -184 0 -184 255 0
255 0 0 174 0 175 48 6 c394 49 667 160 876 355 239 224 356 549 325 904 -20
235 -102 410 -266 567 -177 171 -439 293 -855 399 l-128 33 0 519 0 519 23 -6
c262 -74 462 -174 664 -332 53 -41 96 -73 98 -71 48 60 365 498 365 504 -1 5
-36 36 -78 70 -307 243 -616 374 -1034 439 l-38 6 0 169 0 170 -255 0 -255 0
0 -170z m0 -1226 l0 -455 -22 6 c-57 17 -181 76 -231 109 -71 47 -132 114
-159 174 -18 38 -22 67 -22 148 -1 97 0 103 38 178 48 97 127 178 225 230 72
38 136 64 159 65 9 1 12 -96 12 -455z m679 -1335 c194 -72 307 -154 358 -256
35 -73 44 -209 19 -295 -53 -182 -226 -313 -478 -362 l-68 -14 0 490 0 490 33
-7 c17 -4 79 -24 136 -46z`;
      let swordPath = `M0 5066 c0 -17 79 -272 113 -366 55 -152 198 -438 287 -575 172 -263
264 -366 844 -945 l456 -455 323 323 322 322 -505 503 c-278 277 -554 543
-613 592 -314 255 -702 457 -1095 570 -131 37 -132 37 -132 31z M5021 5045 c-421 -120 -780 -303 -1116 -571 -75 -60 -497 -474 -1338
-1313 l-1227 -1226 -161 160 -160 160 -45 -49 c-176 -192 -195 -490 -45 -702
61 -86 578 -599 648 -643 184 -115 430 -112 610 9 32 21 71 52 88 69 l29 32
-159 159 -160 160 1211 1213 c666 666 1237 1244 1271 1282 166 193 296 392
413 630 105 213 189 438 234 628 8 32 13 32 -93 2z M3095 1970 l-320 -320 180 -180 180 -180 -160 -161 -160 -160 53 -49
c61 -54 152 -104 232 -125 71 -19 219 -19 290 0 133 35 166 61 469 360 160
158 305 310 332 349 68 96 99 197 99 319 0 150 -47 275 -140 379 l-49 53 -160
-160 -161 -160 -178 178 c-97 97 -179 177 -182 177 -3 0 -149 -144 -325 -320z M452 827 l-352 -352 213 -213 212 -212 353 353 353 353 -211 212
c-117 117 -213 212 -214 212 0 0 -160 -159 -354 -353z M4097 967 l-208 -211 353 -353 353 -353 212 212 213 213 -352 352
c-194 194 -355 352 -358 352 -3 -1 -99 -96 -213 -212z`;
      let skullPath = `M2330 5108 c-355 -33 -753 -175 -1045 -371 -186 -125 -386 -307 -520
-471 -277 -342 -450 -751 -507 -1200 -9 -73 -13 -278 -13 -751 0 -617 1 -652
19 -688 15 -31 118 -113 532 -428 l513 -389 3 -338 c3 -379 2 -372 81 -436
l39 -31 137 0 c128 0 140 2 172 24 19 13 46 40 59 60 23 34 25 46 30 211 3
109 10 183 17 196 41 72 155 72 195 1 9 -14 15 -82 18 -192 6 -191 12 -211 83
-269 35 -28 46 -31 107 -31 61 0 72 3 107 31 72 58 77 77 83 277 l5 179 33 29
c26 24 41 29 82 29 41 0 56 -5 82 -29 l33 -29 5 -179 c6 -200 11 -219 83 -277
35 -28 46 -31 107 -31 61 0 72 3 107 31 72 58 77 77 83 277 l5 179 33 29 c53
48 141 35 175 -25 7 -13 14 -88 17 -197 5 -165 6 -178 29 -211 13 -19 40 -46
59 -59 33 -22 44 -24 173 -24 l137 0 39 31 c79 64 77 58 83 438 l5 340 505
382 c408 310 510 391 530 426 l25 43 0 665 c0 590 -2 678 -18 780 -54 341
-156 629 -321 900 -166 272 -423 540 -688 718 -442 296 -981 431 -1518 380z
m-605 -2153 c179 -37 350 -170 433 -335 70 -139 87 -268 56 -417 -47 -230
-201 -401 -429 -479 -100 -34 -252 -38 -354 -10 -222 61 -397 235 -457 456
-28 103 -24 255 10 355 108 317 419 497 741 430z m1932 -1 c239 -49 425 -226
489 -465 22 -84 22 -233 -1 -319 -57 -218 -235 -396 -455 -456 -103 -28 -255
-24 -355 10 -258 88 -427 306 -442 570 -10 187 54 354 186 487 157 156 363
218 578 173z m-1028 -1211 c40 -37 221 -370 221 -406 0 -15 -7 -42 -16 -58
-26 -52 -61 -59 -276 -59 -211 0 -249 8 -275 60 -25 50 -15 81 82 260 108 198
136 230 195 230 29 0 47 -7 69 -27z`;
      let towerPath = `M615 5101 c-49 -22 -91 -69 -105 -119 -8 -24 -10 -139 -8 -337 3
-284 4 -302 24 -340 12 -22 127 -209 256 -415 129 -206 243 -391 254 -410 18
-34 19 -75 22 -1140 2 -781 -1 -1120 -9 -1158 -15 -76 -51 -107 -281 -244
-203 -122 -240 -153 -258 -216 -5 -21 -10 -150 -10 -300 0 -215 3 -269 15
-300 21 -49 52 -81 100 -103 38 -18 114 -19 1945 -19 1831 0 1907 1 1945 19
48 22 79 54 100 103 12 31 15 85 15 300 0 279 -5 319 -46 368 -14 16 -120 86
-235 155 -130 79 -218 138 -234 159 -13 17 -29 54 -35 82 -7 33 -10 405 -8
1154 3 1065 4 1106 22 1140 11 19 125 204 254 410 129 206 244 393 256 415 20
38 21 56 24 340 4 322 0 352 -45 406 -55 65 -75 69 -399 69 -289 0 -290 0
-340 -25 -28 -14 -60 -40 -74 -62 -24 -35 -25 -44 -30 -229 -5 -185 -6 -195
-28 -216 -22 -23 -24 -23 -307 -23 -283 0 -285 0 -307 23 -22 21 -23 31 -28
216 l-5 194 -31 39 c-16 21 -50 48 -74 61 -43 22 -51 22 -387 22 -374 0 -387
-2 -446 -58 -49 -47 -52 -57 -57 -259 -5 -184 -6 -194 -28 -215 -22 -23 -24
-23 -307 -23 -283 0 -285 0 -307 23 -22 21 -23 31 -28 216 -5 185 -6 194 -30
229 -14 22 -46 48 -74 62 -50 25 -51 25 -340 25 -261 0 -295 -2 -331 -19z
m2107 -1650 c116 -40 230 -137 281 -238 53 -103 57 -142 57 -525 0 -404 0
-404 -80 -445 -44 -23 -50 -23 -420 -23 -370 0 -376 0 -420 23 -80 41 -80 41
-80 445 0 389 4 425 61 533 67 124 207 223 359 253 49 9 186 -3 242 -23z`;
      let eliteMonster_DrakePath = `M824 4652 c-67 -49 -179 -176 -233 -263 -104 -169 -145 -320 -144
-534 0 -119 4 -155 27 -240 24 -91 75 -216 112 -273 15 -23 15 -22 61 40 70
95 317 335 415 403 48 33 87 64 87 68 1 5 -15 29 -35 55 -51 67 -111 194 -135
287 -23 89 -29 233 -15 357 8 74 7 77 -17 102 -34 34 -74 33 -123 -2z M4175 4654 c-27 -25 -27 -27 -19 -97 16 -133 8 -282 -20 -380 -30
-102 -79 -203 -132 -272 l-37 -49 29 -23 c214 -163 368 -309 471 -445 57 -77
53 -78 106 27 194 388 115 856 -197 1165 -109 108 -149 123 -201 74z M2395 4094 c-252 -25 -415 -57 -605 -120 -467 -155 -876 -466 -1112
-846 -102 -164 -177 -349 -220 -545 -30 -133 -33 -471 -5 -606 24 -117 77
-277 127 -384 l40 -86 128 124 c138 135 224 208 372 314 52 37 98 70 102 74 4
3 0 31 -8 61 -65 250 109 507 373 552 178 30 360 -55 461 -215 37 -58 42 -63
93 -74 145 -34 296 -145 401 -294 l17 -24 23 30 c131 171 262 260 439 299 18
4 31 18 45 48 10 23 44 68 74 99 132 134 338 174 509 98 198 -87 311 -319 258
-526 l-14 -52 75 -52 c136 -95 276 -211 404 -337 l128 -125 44 94 c218 469
192 1018 -70 1473 -107 185 -279 386 -448 523 -313 251 -703 417 -1131 479
-99 14 -422 26 -500 18z M2110 2136 c0 -54 -34 -148 -75 -211 -147 -222 -468 -265 -672 -91
-22 20 -44 36 -48 36 -11 0 -125 -83 -238 -173 -108 -86 -357 -323 -357 -340
0 -19 112 -161 194 -246 435 -451 1063 -693 1736 -668 481 19 903 159 1282
427 119 84 312 270 404 390 l74 95 -98 98 c-53 54 -137 134 -187 176 -90 78
-288 229 -312 238 -7 3 -32 -12 -54 -32 -54 -49 -148 -92 -229 -104 -170 -27
-357 59 -452 208 -32 51 -68 157 -68 202 0 36 -15 37 -79 4 -100 -50 -209
-171 -279 -311 -32 -64 -71 -91 -110 -77 -23 8 -62 44 -62 58 0 6 -22 47 -49
90 -58 94 -165 202 -238 239 -71 35 -83 34 -83 -8z`;
      let eliteMonster_BaronPath = `M2405 5114 c-190 -21 -387 -78 -560 -164 -456 -225 -777 -639 -887
-1144 -19 -87 -22 -131 -22 -321 0 -190 3 -234 22 -321 56 -259 181 -523 333
-705 l39 -47 0 -264 0 -264 63 -62 63 -62 1105 0 1105 0 62 63 62 63 0 263 0
263 39 47 c151 181 278 449 332 699 30 140 37 409 15 558 -103 703 -635 1253
-1333 1379 -86 16 -359 27 -438 19z m-332 -2395 c105 -67 216 -137 244 -155
l53 -34 -79 -122 c-43 -68 -84 -122 -90 -120 -18 4 -480 296 -481 303 0 8 151
249 157 249 2 0 90 -55 196 -121z m1251 0 c42 -67 76 -124 76 -128 0 -7 -460
-298 -479 -303 -8 -2 -45 46 -92 120 l-79 122 48 30 c26 16 135 85 242 154
107 68 198 125 201 125 4 1 41 -53 83 -120z M0 2293 l0 -100 39 -11 c55 -17 124 -82 152 -144 24 -53 24 -53 30
-553 7 -535 7 -539 63 -702 157 -459 611 -782 1101 -783 163 0 380 50 515 119
50 25 55 30 52 57 -2 16 -6 219 -9 452 l-4 422 150 0 150 0 3 -408 3 -407 34
-63 c38 -70 70 -101 145 -140 43 -22 64 -26 136 -26 78 -1 90 2 148 33 73 39
105 74 141 151 l26 55 3 403 3 402 150 0 150 0 -4 -422 c-2 -233 -7 -435 -12
-450 -7 -25 -3 -29 61 -61 141 -71 342 -117 509 -117 489 1 933 316 1099 780
58 160 58 166 65 710 l6 505 27 51 c32 61 97 120 150 136 l38 11 0 100 0 100
-162 -6 c-105 -3 -184 -11 -223 -21 -175 -49 -321 -169 -403 -332 -61 -122
-64 -143 -69 -554 -5 -431 -6 -439 -84 -524 -67 -74 -129 -100 -234 -101 -61
0 -91 5 -126 22 -64 29 -125 87 -157 147 -26 49 -27 60 -32 241 l-5 190 -1065
0 -1065 0 -5 -190 c-5 -173 -7 -194 -28 -233 -35 -66 -88 -119 -150 -149 -48
-24 -69 -28 -137 -28 -105 1 -167 27 -234 101 -78 85 -79 93 -84 524 -5 411
-8 432 -69 554 -82 163 -229 284 -403 331 -38 11 -120 19 -222 22 l-163 6 0
-100z`;
      let startingCount = -1;
      let defs = container.append("defs");

      /**
       * Farbverlauf für negative Stimmung, wird als Hintergrund hinter Stimmungslinie angezeigt
       */
      let gradientNeg = defs
        .append("linearGradient")
        .attr("id", `negative`)
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", 0)
        .attr("y2", "100%");

      gradientNeg
        .append("stop")
        .classed("start", true)
        .attr("offset", `0%`)
        .attr("stop-color", "rgb(255, 64, 64)")
        .attr("stop-opacity", 0);

      gradientNeg
        .append("stop")
        .classed("end", true)
        .attr("offset", `100%`)
        .attr("stop-color", "rgb(255, 64, 64)")
        .attr("stop-opacity", 0.1);

        /**
         * Farbverlauf für positive Stimmung, wird als Hintergrund hinter Stimmungslinie angezeigt
         */
      let gradientPos = defs
        .append("linearGradient")
        .attr("id", `positive`)
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", "100%")
        .attr("y2", 0);

      gradientPos
        .append("stop")
        .classed("start", true)
        .attr("offset", `0%`)
        .attr("stop-color", "rgb(64, 255, 64)")
        .attr("stop-opacity", 0);

      gradientPos
        .append("stop")
        .classed("end", true)
        .attr("offset", `100%`)
        .attr("stop-color", "rgb(64, 255, 64)")
        .attr("stop-opacity", 0.1);

      // Events
      for (let player in this.eventGraph) {
        if (!this.selectedPlayers[player]) continue;
        startingCount++;

        container
          .append("rect")
          .classed("borders", true)
          .attr("fill", "url(#negative)")
          .attr("width", width)
          .attr("height", yScale.bandwidth() / 2.5)
          .attr("x", 0)
          .attr(
            "y",
            yScale(playerNamesYLabel[startingCount][0]) + yScale.bandwidth() / 2
          );

        container
          .append("rect")
          .classed("borders", true)
          .attr("fill", "url(#positive)")
          .attr("width", width)
          .attr("height", yScale.bandwidth() / 2.5)
          .attr("x", 0)
          .attr(
            "y",
            yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 10
          );

        container
          .append("path")
          .classed("sentiments", true)
          .datum(this.$store.state.sentiments[player])
          .attr("fill", "rgba(255,255,255,0)")
          .attr("stroke", "rgba(255,255,255,0.3)")
          .attr("stroke-width", 1.5)
          .attr(
            "d",
            d3
              .line()
              .x((d) => xScale(d.x))
              .y(
                (d) =>
                  yScale(playerNamesYLabel[startingCount][0]) +
                  yScale.bandwidth() / 2 -
                  this.calcSize(d.y) * 4
              )
          );

        /* container.append("path")
            .classed('borders',true)
            .datum(this.$store.state.sentiments[player])
            .attr("fill", "rgba(255,255,255,0)")
            .attr("stroke","rgba(0,255,0,0.3)")
            .attr("stroke-width", 1)
            .attr("d", d3.line().x(d => xScale(d.x)).y(d => yScale(playerNamesYLabel[startingCount][0]) + yScale.bandwidth()/4)) */

        let group = container
          .append("g")
          .classed(`player${parseInt(player) + 1}`, true);
        let KillEvents = this.eventGraph[player].filter(
          (entry) => entry[0] == "CHAMPION_KILL_KILL"
        );
        let DeathEvents = this.eventGraph[player].filter(
          (entry) => entry[0] == "CHAMPION_KILL_DEATH"
        );
        let ItemEvents = this.eventGraph[player].filter(
          (entry) => entry[0] == "ITEM_PURCHASED"
        );
        let WardEvents = this.eventGraph[player].filter(
          (entry) => entry[0] == "WARD_PLACED"
        );
        let TowerEvents = this.eventGraph[player].filter(
          (entry) => entry[0] == "BUILDING_KILL"
        );
        let EliteMonsterEvents_Drake = this.eventGraph[player].filter(
          (entry) => entry[0] == "ELITE_MONSTER_KILL" && entry[4] == "DRAGON"
        );
        let EliteMonsterEvents_Baron = this.eventGraph[player].filter(
          (entry) =>
            entry[0] == "ELITE_MONSTER_KILL" && entry[4] == "BARON_NASHOR"
        );

        group
          .append("g")
          .classed("svg-wards", true)
          .selectAll("g")
          .data(WardEvents)
          .enter()
          .append("svg")
          .attr("width", (d) => `${this.calcSize(d[1])}px`)
          .attr("height", (d) => `${this.calcSize(d[1])}px`)
          .attr("x", (d) => {
            return xScale(d[2] / 10000) - this.calcSize(d[1]) / 2;
          })
          .attr(
            "y",
            (d) =>
              yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 2 -
              this.calcSize(d[1]) / 2
          )
          .attr("viewBox", "0 0 512 512")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform", "translate(0.0,512.0) scale(0.1,-0.1)")
          .attr("fill", player < 5 ? "rgb(57, 144, 225)" : "rgb(225, 57, 57)")
          .attr("stroke", "#000")
          .attr("stroke-width", "100")
          .append("path")
          .attr("d", eyePath);

        group
          .append("g")
          .classed("svg-items", true)
          .selectAll("g")
          .data(ItemEvents)
          .enter()
          .append("svg")
          .attr("width", (d) => `${this.calcSize(d[1])}px`)
          .attr("height", (d) => `${this.calcSize(d[1])}px`)
          .attr("x", (d) => {
            return xScale(d[2] / 10000) - this.calcSize(d[1]) / 2;
          })
          .attr(
            "y",
            (d) =>
              yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 2 -
              this.calcSize(d[1]) / 2
          )
          .attr("viewBox", "0 0 512 512")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform", "translate(0.0,512.0) scale(0.1,-0.1)")
          .attr("fill", player < 5 ? "rgb(57, 144, 225)" : "rgb(225, 57, 57)")
          .attr("stroke", "#000")
          .attr("stroke-width", "100")
          .append("path")
          .attr("d", dollarPath);

        group
          .append("g")
          .classed("svg-deaths", true)
          .selectAll("g")
          .data(DeathEvents)
          .enter()
          .append("svg")
          .attr("width", (d) => `${this.calcSize(d[1])}px`)
          .attr("height", (d) => `${this.calcSize(d[1])}px`)
          .attr("x", (d) => {
            return xScale(d[2] / 10000) - this.calcSize(d[1]) / 2;
          })
          .attr(
            "y",
            (d) =>
              yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 2 -
              this.calcSize(d[1]) / 2
          )
          .attr("viewBox", "0 0 512 512")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform", "translate(0.0,512.0) scale(0.1,-0.1)")
          .attr("fill", player < 5 ? "rgb(57, 144, 225)" : "rgb(225, 57, 57)")
          .attr("stroke", "#000")
          .attr("stroke-width", "100")
          .append("path")
          .attr("d", skullPath);

        group
          .append("g")
          .classed("svg-kills", true)
          .selectAll("g")
          .data(KillEvents)
          .enter()
          .append("svg")
          .attr("width", (d) => `${this.calcSize(d[1])}px`)
          .attr("height", (d) => `${this.calcSize(d[1])}px`)
          .attr("x", (d) => {
            return xScale(d[2] / 10000) - this.calcSize(d[1]) / 2;
          })
          .attr(
            "y",
            (d) =>
              yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 2 -
              this.calcSize(d[1]) / 2
          )
          .attr("viewBox", "0 0 512 512")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform", "translate(0.0,512.0) scale(0.1,-0.1)")
          .attr("fill", player < 5 ? "rgb(57, 144, 225)" : "rgb(225, 57, 57)")
          .attr("stroke", "#000")
          .attr("stroke-width", "100")
          .append("path")
          .attr("d", swordPath);

        group
          .append("g")
          .classed("svg-towers", true)
          .selectAll("g")
          .data(TowerEvents)
          .enter()
          .append("svg")
          .attr("width", (d) => `${this.calcSize(d[1])}px`)
          .attr("height", (d) => `${this.calcSize(d[1])}px`)
          .attr("x", (d) => {
            return xScale(d[2] / 10000) - this.calcSize(d[1]) / 2;
          })
          .attr(
            "y",
            (d) =>
              yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 2 -
              this.calcSize(d[1]) / 2
          )
          .attr("viewBox", "0 0 512 512")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform", "translate(0.0,512.0) scale(0.1,-0.1)")
          .attr("fill", player < 5 ? "rgb(57, 144, 225)" : "rgb(225, 57, 57)")
          .attr("stroke", "#000")
          .attr("stroke-width", "100")
          .append("path")
          .attr("d", towerPath);

        group
          .append("g")
          .classed("svg-epic-monsters-drake", true)
          .selectAll("g")
          .data(EliteMonsterEvents_Drake)
          .enter()
          .append("svg")
          .attr("width", (d) => `${this.calcSize(d[1] + 0.4)}px`)
          .attr("height", (d) => `${this.calcSize(d[1] + 0.4)}px`)
          .attr("x", (d) => {
            return xScale(d[2] / 10000) - this.calcSize(d[1]) / 2;
          })
          .attr(
            "y",
            (d) =>
              yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 2 -
              this.calcSize(d[1] + 0.4) / 2
          )
          .attr("viewBox", "0 0 512 512")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform", "translate(0.0,512.0) scale(0.1,-0.1)")
          .attr("fill", player < 5 ? "rgb(57, 144, 225)" : "rgb(225, 57, 57)")
          .attr("stroke", "#000")
          .attr("stroke-width", "100")
          .append("path")
          .attr("d", eliteMonster_DrakePath);

        group
          .append("g")
          .classed("svg-epic-monsters-baron", true)
          .selectAll("g")
          .data(EliteMonsterEvents_Baron)
          .enter()
          .append("svg")
          .attr("width", (d) => `${this.calcSize(d[1] + 0.4)}px`)
          .attr("height", (d) => `${this.calcSize(d[1] + 0.4)}px`)
          .attr("x", (d) => {
            return xScale(d[2] / 10000) - this.calcSize(d[1]) / 2;
          })
          .attr(
            "y",
            (d) =>
              yScale(playerNamesYLabel[startingCount][0]) +
              yScale.bandwidth() / 2 -
              this.calcSize(d[1] + 0.4) / 2
          )
          .attr("viewBox", "0 0 512 512")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform", "translate(0.0,512.0) scale(0.1,-0.1)")
          .attr("fill", player < 5 ? "rgb(57, 144, 225)" : "rgb(225, 57, 57)")
          .attr("stroke", "#000")
          .attr("stroke-width", "100")
          .append("path")
          .attr("d", eliteMonster_BaronPath);
      }

      // Cursor zur Auswahl des jeweiligen Moments der Runde
      container
        .append("rect")
        .attr("id", "timelineSelect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", "2px")
        .attr("height", yScale.bandwidth())
        .attr("fill", "white");

      let yBandwidthMult = yScale.bandwidth() * 4;
      let yBandwidthFrac = yScale.bandwidth() / 3;
      let halfLensWidth = width / 6;
      let selectedTimerangeCount = this.selectedTimerangeCount;
      let selectedTimerange = (xScale(1) - xScale(0)) * selectedTimerangeCount;
      let border_radius = 10;
      let font_size_in_lens = "0.75rem";
      let eventGraph = this.eventGraph;
      let itemInfo = this.$store.state.itemData;
      let currentPatch = this.$store.state.currentPatchVersion;
      let intervalsCount = Math.ceil(
        (this.$store.state.matchData.gameDuration / 60.0) * 6
      );
      let voiceData = this.$store.state.voiceData;

      // Trick um Auswahl zu ermöglichen
      // 
      // Ein transparentes Rechteck liegt über der eigentlichen Timeline, damit über dieses Rechteck die Mausposition sowie -klicks erfragt werden können.
      container
        .append("rect")
        .classed("hover-div", true)
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#0000")
        .on("mousemove", function (evt) {
            /**
             * x-Position, y-Position, Breite und Höhe des transparenten Rechtecks und damit der Timeline ohne die Achsen
             */
          let hoverDivBounds = document.getElementsByClassName("hover-div")[0].getBoundingClientRect();
            // x-Position des Cursors wird angepasst
            document.getElementById("timelineSelect").attributes.x.nodeValue = evt.clientX - hoverDivBounds.x;
            // y-Position des Cursors wird angepasst
          document.getElementById("timelineSelect").attributes.y.nodeValue = Math.floor((evt.clientY - hoverDivBounds.y) / yScale.bandwidth()) * yScale.bandwidth();
        })
        .on("mousedown", function (evt) {
          if (document.getElementById("eventsTextInLens")) {document.getElementById("eventsTextInLens").remove();}
          let hoverDivBounds = document.getElementsByClassName("hover-div")[0].getBoundingClientRect();
          let eventGraphBounds = document.getElementById("event-graph-panel").getBoundingClientRect();
          let translateX_LensGroup = Math.max(Math.min(evt.clientX - hoverDivBounds.x - halfLensWidth,eventGraphBounds.width - (hoverDivBounds.x - eventGraphBounds.x) - halfLensWidth * 2),0 - (hoverDivBounds.x - eventGraphBounds.x));
          let translateY_LensGroup = Math.floor((evt.clientY - hoverDivBounds.y) / yScale.bandwidth()) * yScale.bandwidth() - yBandwidthMult - border_radius;
          document.getElementById("timelineLensRect").attributes.fill.nodeValue = "#15171Eea";
          document.getElementById("timelineLensPath").attributes.fill.nodeValue = "#15171Eea";
          document.getElementById("timelineLensPath").attributes.transform.nodeValue = `translate( ${width / 6 > evt.clientX - eventGraphBounds.x ? evt.clientX - eventGraphBounds.x - width / 6 : Math.max(evt.clientX - hoverDivBounds.x - (eventGraphBounds.width - (hoverDivBounds.x - eventGraphBounds.x) - halfLensWidth),0)}, 0 )`;
          document.getElementById("timelineLensGroup").attributes.transform.nodeValue = `translate( ${translateX_LensGroup} , ${translateY_LensGroup} )`;
          document.getElementById("selectedTimerange").attributes.fill.nodeValue = "#f005";
          document.getElementById("selectedTimerange").attributes.transform.nodeValue = `translate( ${evt.clientX + halfLensWidth - (eventGraphBounds.width + eventGraphBounds.x) > 0 ? Math.floor((evt.clientX + halfLensWidth - (eventGraphBounds.width + eventGraphBounds.x)) / (hoverDivBounds.width / intervalsCount)) * (hoverDivBounds.width / intervalsCount) : evt.clientX - halfLensWidth - eventGraphBounds.x < 0 ? Math.max( evt.clientX - eventGraphBounds.x - halfLensWidth, hoverDivBounds.x - eventGraphBounds.x - halfLensWidth + selectedTimerange / 2) : (hoverDivBounds.width / intervalsCount) * Math.floor(xScale.invert(evt.clientX - hoverDivBounds.x)) + hoverDivBounds.x - evt.clientX} , 0)`;
          document.getElementById("selectedTimerange").attributes.width.nodeValue = Math.min( selectedTimerange, hoverDivBounds.x + hoverDivBounds.width - document.getElementById("selectedTimerange").getBoundingClientRect().x, evt.clientX - hoverDivBounds.x + selectedTimerange / 2);
          document.getElementById("closeArea").attributes.fill.nodeValue = "#f005";
          document.getElementById("closeX").attributes.stroke.nodeValue = "white";
          document.getElementById("textArea").attributes.fill.nodeValue = "#15171Eea";
          document.getElementById("words").style.display = "block";
          document.getElementById("spokenWords").style.display = "inherit";
          let eventGroup = lensGroup
            .append("g")
            .attr("y", 0)
            .attr("x", 0)
            .attr("id", "eventsTextInLens")
            .attr("transform", "");
          let eventGraphindex = playerNamesYLabelfull
            .map((x) => x[0])
            .indexOf(
              playerNamesYLabel[
                Math.floor(
                  (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                )
              ][0]
            );
          let selectedEvents = eventGraph[eventGraphindex].filter(
            (x) =>
              Math.floor(x[2] / 10000) <
                (Math.floor(xScale.invert(evt.clientX - hoverDivBounds.x)) < 0
                  ? 0
                  : Math.floor(xScale.invert(evt.clientX - hoverDivBounds.x))) +
                  selectedTimerangeCount / 2 &&
              Math.floor(x[2] / 10000) >=
                (Math.floor(xScale.invert(evt.clientX - hoverDivBounds.x)) < 0
                  ? 0
                  : Math.floor(xScale.invert(evt.clientX - hoverDivBounds.x))) -
                  selectedTimerangeCount / 2
          );
          for (let event in selectedEvents) {
            let classname_of_eventgroup = `p${Math.floor(
              (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
            )}-eventgroup`;
            let info_group = eventGroup
              .append("g")
              .classed(classname_of_eventgroup, true);
            switch (selectedEvents[event][0]) {
              case "CHAMPION_KILL_DEATH":
                info_group
                  .append("image")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}-img`
                  )
                  .attr("x", 10)
                  .attr(
                    "y",
                    (document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20) - 15.5
                  )
                  .attr("height", 22)
                  .attr("width", 22)
                  .attr(
                    "href",
                    `http://ddragon.leagueoflegends.com/cdn/${currentPatch}/img/champion/${(() => {
                      if(playerNamesYLabelfull[
                        selectedEvents[event][3][0].victimId - 1
                      ][1] == "Jarvaniv"){return "JarvanIV"}
                      return playerNamesYLabelfull[
                        selectedEvents[event][3][0].victimId - 1
                      ][1]
                    })()
                    }.png`
                  );
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}`
                  )
                  .attr("x", 10 + 6 + 20)
                  .attr(
                    "y",
                    document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${
                      playerNamesYLabel[
                        Math.floor(
                          (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                        )
                      ][0]
                    } von `
                  );
                info_group
                  .append("image")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}-img`
                  )
                  .attr(
                    "x",
                    10 +
                      document
                        .getElementById(
                          `p${Math.floor(
                            (evt.clientY - hoverDivBounds.y) /
                              yScale.bandwidth()
                          )}-event-${event}`
                        )
                        .getBoundingClientRect().width +
                      6 +
                      20
                  )
                  .attr(
                    "y",
                    (document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20) - 15.5
                  )
                  .attr("height", 22)
                  .attr("width", 22)
                  .attr(
                    "href",
                    `http://ddragon.leagueoflegends.com/cdn/${currentPatch}/img/champion/${(() => {
                      if(playerNamesYLabelfull[
                        selectedEvents[event][3][0].killerId - 1
                      ][1] == "Jarvaniv"){return "JarvanIV"}
                      return playerNamesYLabelfull[
                        selectedEvents[event][3][0].killerId - 1
                      ][1]
                    })()
                    }.png`
                  );
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}-desc`
                  )
                  .attr(
                    "x",
                    10 +
                      document
                        .getElementById(
                          `p${Math.floor(
                            (evt.clientY - hoverDivBounds.y) /
                              yScale.bandwidth()
                          )}-event-${event}`
                        )
                        .getBoundingClientRect().width +
                      6 +
                      20 +
                      6 +
                      20
                  )
                  .attr(
                    "y",
                    document.getElementById(
                      `p${Math.floor(
                        (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                      )}-event-${event}`
                    ).attributes.y.nodeValue
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${
                      playerNamesYLabelfull[
                        selectedEvents[event][3][0].killerId - 1
                      ][0]
                    } getötet`
                  );
                break;
              case "CHAMPION_KILL_KILL":
                info_group
                  .append("image")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}-img`
                  )
                  .attr("x", 10)
                  .attr(
                    "y",
                    (document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20) - 15.5
                  )
                  .attr("height", 22)
                  .attr("width", 22)
                  .attr(
                    "href",
                    `http://ddragon.leagueoflegends.com/cdn/${currentPatch}/img/champion/${(() => {
                      if(playerNamesYLabelfull[
                        selectedEvents[event][3][0].killerId - 1
                      ][1] == "Jarvaniv"){return "JarvanIV"}
                      return playerNamesYLabelfull[
                        selectedEvents[event][3][0].killerId - 1
                      ][1]
                    })()
                      
                    }.png`
                  );
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}`
                  )
                  .attr("x", 10 + 6 + 20)
                  .attr(
                    "y",
                    document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${
                      playerNamesYLabel[
                        Math.floor(
                          (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                        )
                      ][0]
                    } hat `
                  );
                info_group
                  .append("image")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}-img`
                  )
                  .attr(
                    "x",
                    10 +
                      document
                        .getElementById(
                          `p${Math.floor(
                            (evt.clientY - hoverDivBounds.y) /
                              yScale.bandwidth()
                          )}-event-${event}`
                        )
                        .getBoundingClientRect().width +
                      6 +
                      20
                  )
                  .attr(
                    "y",
                    (document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20) - 15.5
                  )
                  .attr("height", 22)
                  .attr("width", 22)
                  .attr(
                    "href",
                    `http://ddragon.leagueoflegends.com/cdn/${currentPatch}/img/champion/${(() => {
                      if(playerNamesYLabelfull[
                        selectedEvents[event][3][0].victimId - 1
                      ][1] == "Jarvaniv"){return "JarvanIV"}
                      return playerNamesYLabelfull[
                        selectedEvents[event][3][0].victimId - 1
                      ][1]
                    })()
                    }.png`
                  );
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}-desc`
                  )
                  .attr(
                    "x",
                    10 +
                      document
                        .getElementById(
                          `p${Math.floor(
                            (evt.clientY - hoverDivBounds.y) /
                              yScale.bandwidth()
                          )}-event-${event}`
                        )
                        .getBoundingClientRect().width +
                      6 +
                      20 +
                      6 +
                      20
                  )
                  .attr(
                    "y",
                    document.getElementById(
                      `p${Math.floor(
                        (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                      )}-event-${event}`
                    ).attributes.y.nodeValue
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${(() => {
                      if (selectedEvents[event][3].length == 1)
                        return playerNamesYLabelfull[
                          selectedEvents[event][3][0].victimId - 1
                        ][0];
                      let targets = "";
                      for (let index in selectedEvents[event][3]) {
                        if (index == selectedEvents[event][3].length - 1) {
                          targets +=
                            playerNamesYLabelfull[
                              selectedEvents[event][3][index].victimId - 1
                            ][0];
                          break;
                        }
                        targets +=
                          playerNamesYLabelfull[
                            selectedEvents[event][3][index].victimId - 1
                          ][0] + " & ";
                      }
                      return targets;
                    })()} getötet`
                  );
                break;
              case "ITEM_PURCHASED":
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}`
                  )
                  .attr("x", 10)
                  .attr(
                    "y",
                    document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${
                      selectedEvents[event][1] == 1
                        ? "Ein"
                        : selectedEvents[event][1] == 2
                        ? "Zwei"
                        : selectedEvents[event][1] == 3
                        ? "Drei"
                        : selectedEvents[event][1] == 4
                        ? "Vier"
                        : selectedEvents[event][1] > 4
                        ? "Mehr als vier"
                        : ""
                    } Item${selectedEvents[event][1] == 1 ? "" : "s"} gekauft:`
                  );
                for (let index in selectedEvents[event][3]) {
                  let image = info_group
                    .append("image")
                    .attr("width", 22)
                    .attr("height", 22)
                    .attr(
                      "x",
                      10 +
                        document
                          .getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${event}`
                          )
                          .getBoundingClientRect().width +
                        8 * (parseInt(index) + 1) +
                        17 * parseInt(index)
                    )
                    .attr(
                      "y",
                      (document.getElementsByClassName(classname_of_eventgroup)
                        .length > 1
                        ? parseInt(
                            document.getElementById(
                              `p${Math.floor(
                                (evt.clientY - hoverDivBounds.y) /
                                  yScale.bandwidth()
                              )}-event-${
                                document.getElementsByClassName(
                                  classname_of_eventgroup
                                ).length - 2
                              }`
                            ).attributes.y.nodeValue
                          ) + 20
                        : 20) - 15.5
                    )
                    .attr(
                      "href",
                      `http://ddragon.leagueoflegends.com/cdn/${currentPatch}/img/item/${selectedEvents[event][3][index].itemId}.png`
                    );
                  image
                    .append("title")
                    .text(
                      itemInfo.data[selectedEvents[event][3][index].itemId].name
                    );
                }
                break;
              case "WARD_PLACED":
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}`
                  )
                  .attr("x", 10)
                  .attr(
                    "y",
                    document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${
                      selectedEvents[event][1] == 1
                        ? "Einen Ward"
                        : selectedEvents[event][1] == 2
                        ? "Zwei Wards"
                        : selectedEvents[event][1] == 3
                        ? "Drei Wards"
                        : selectedEvents[event][1] == 4
                        ? "Vier Wards"
                        : selectedEvents[event][1] > 4
                        ? "Mehr als vier Wards"
                        : ""
                    } platziert`
                  );
                break;
              case "ELITE_MONSTER_KILL":
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}`
                  )
                  .attr("x", 10)
                  .attr(
                    "y",
                    document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${
                      selectedEvents[event][4] == "BARON_NASHOR"
                        ? "Baron Nashor"
                        : selectedEvents[event][3][0].monsterSubType ==
                          "HEXTECH_DRAGON"
                        ? "Hextech Drache"
                        : selectedEvents[event][3][0].monsterSubType ==
                          "AIR_DRAGON"
                        ? "Luft Drache"
                        : selectedEvents[event][3][0].monsterSubType ==
                          "WATER_DRAGON"
                        ? "Wasser Drache"
                        : "Monster"
                    } getötet`
                  );
                break;
              case "BUILDING_KILL":
                info_group
                  .append("text")
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}`
                  )
                  .attr("x", 10)
                  .attr(
                    "y",
                    document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(
                    `${
                      selectedEvents[event][1] == 1
                        ? "Ein"
                        : selectedEvents[event][1] == 2
                        ? "Zwei"
                        : selectedEvents[event][1] == 3
                        ? "Drei"
                        : selectedEvents[event][1] == 4
                        ? "Vier"
                        : selectedEvents[event][1] > 4
                        ? "Mehr als vier"
                        : ""
                    } Gebäude zerstört`
                  );
                break;
              default:
                info_group
                  .append("text")
                  .classed("eventsInLens", true)
                  .attr(
                    "id",
                    `p${Math.floor(
                      (evt.clientY - hoverDivBounds.y) / yScale.bandwidth()
                    )}-event-${event}`
                  )
                  .attr("x", 10)
                  .attr(
                    "y",
                    document.getElementsByClassName(classname_of_eventgroup)
                      .length > 1
                      ? parseInt(
                          document.getElementById(
                            `p${Math.floor(
                              (evt.clientY - hoverDivBounds.y) /
                                yScale.bandwidth()
                            )}-event-${
                              document.getElementsByClassName(
                                classname_of_eventgroup
                              ).length - 2
                            }`
                          ).attributes.y.nodeValue
                        ) + 20
                      : 20
                  )
                  .attr("font-size", font_size_in_lens)
                  .attr("fill", "white")
                  .text(selectedEvents[event][0]);
                break;
            }
          }
          let timestampTime = Math.floor(
            (evt.clientX - hoverDivBounds.x) /
              (hoverDivBounds.width / intervalsCount)
          );
          let textArray = voiceData[eventGraphindex];
          let auxArray = [];
          for (let i = 0; i < textArray.length; i++) {
            if (!textArray[i].alternatives[0].result) continue;
            for (
              let j = 0;
              j < textArray[i].alternatives[0].result.length;
              j++
            ) {
              let timestampAverage =
                (textArray[i].alternatives[0].result[j].start +
                  textArray[i].alternatives[0].result[j].end) /
                2;
              if (
                timestampAverage >=
                  (timestampTime - selectedTimerangeCount / 2) * 10 &&
                timestampAverage <=
                  (timestampTime + selectedTimerangeCount / 2) * 10
              ) {
                if (
                  auxArray.length > 0 &&
                  timestampAverage -
                    (auxArray[auxArray.length - 1].start +
                      auxArray[auxArray.length - 1].end) /
                      2 >
                    2
                ) {
                  let string = "";
                  for (
                    let dashes = 0;
                    dashes <
                    Math.floor(
                      (timestampAverage -
                        (auxArray[auxArray.length - 1].start +
                          auxArray[auxArray.length - 1].end) /
                          2) /
                        2
                    );
                    dashes++
                  ) {
                    string += "-";
                  }
                  auxArray.push(string);
                }
                auxArray.push(textArray[i].alternatives[0].result[j]);
              }
            }
          }
          for (let i = 0; i < auxArray.length; i++) {
            if (auxArray[i].word) {
              auxArray[i] = auxArray[i].word;
            }
          }
          document.getElementById("words").innerText = auxArray.join(" ");
          document.getElementById(
            "timelineLensRect"
          ).attributes.height.nodeValue = Math.max(
            document.getElementById("eventsTextInLens").getBoundingClientRect()
              .height + 10,
            30
          );
          document.getElementById(
            "timelineLensRect"
          ).attributes.transform.nodeValue = `translate( 0, ${
            yBandwidthMult -
            document.getElementById("timelineLensRect").attributes.height
              .nodeValue
          })`;
          document.getElementById(
            "eventsTextInLens"
          ).attributes.transform.nodeValue = `translate( 0, ${
            yBandwidthMult -
            document.getElementById("timelineLensRect").attributes.height
              .nodeValue
          })`;
          document.getElementById(
            "closeArea"
          ).attributes.transform.nodeValue = `translate( 0, ${
            yBandwidthMult -
            document.getElementById("timelineLensRect").attributes.height
              .nodeValue
          })`;
          document.getElementById(
            "closeX"
          ).attributes.transform.nodeValue = `translate( ${width / 3 - 50}, ${
            yBandwidthMult -
            document.getElementById("timelineLensRect").attributes.height
              .nodeValue
          })`;
          document.getElementById("spokenWords").attributes.height.nodeValue =
            document.getElementById("words").getBoundingClientRect().height;
          document.getElementById(
            "spokenWords"
          ).attributes.transform.nodeValue = `translate( 0, ${
            yBandwidthMult -
            5 -
            document.getElementById("timelineLensRect").attributes.height
              .nodeValue -
            document.getElementById("words").getBoundingClientRect().height
          })`;
          document.getElementById("textArea").attributes.height.nodeValue =
            document.getElementById("words").getBoundingClientRect().height;
          document.getElementById(
            "textArea"
          ).attributes.transform.nodeValue = `translate( 0, ${
            yBandwidthMult -
            5 -
            document.getElementById("timelineLensRect").attributes.height
              .nodeValue -
            document.getElementById("words").getBoundingClientRect().height
          })`;
        });
      let lensGroup = container
        .append("g")
        .attr("id", "timelineLensGroup")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width / 3)
        .attr("height", yBandwidthMult)
        .attr("transform", "")
        .attr("style", "cursor: default;");

      lensGroup
        .append("rect")
        .attr("id", "selectedTimerange")
        .attr("x", halfLensWidth - selectedTimerange / 2)
        .attr("y", yBandwidthMult + border_radius - yBandwidthFrac + 23)
        .attr("width", selectedTimerange)
        .attr("height", 30)
        .attr("fill", "none")
        .attr("transform", "");

      lensGroup
        .append("path")
        .attr("id", "timelineLensPath")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", yBandwidthFrac * 2)
        .attr("height", yBandwidthFrac)
        .attr("fill", "none")
        .attr(
          "d",
          `m ${-yBandwidthFrac + width / 6} ${
            yBandwidthMult - 1
          } l ${yBandwidthFrac} ${yBandwidthFrac} l ${yBandwidthFrac} -${yBandwidthFrac} z`
        )
        .attr("transform", "");

      lensGroup
        .append("rect")
        .attr("id", "timelineLensRect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width / 3)
        .attr("height", yBandwidthMult)
        .attr("fill", "none")
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("transform", "");

      lensGroup
        .append("path")
        .attr("id", "closeX")
        .attr("x", width / 3 - 50)
        .attr("y", 0)
        .attr("width", 30)
        .attr("height", 30)
        .attr("stroke", "none")
        .attr("stroke-width", "2")
        .attr("stroke-linecap", "butt")
        .attr("d", `m 20 10 l 10 10 m 0 -10 l -10 10`)
        .attr("transform", "");

      lensGroup
        .append("rect")
        .attr("id", "closeArea")
        .attr("x", width / 3 - 50)
        .attr("y", 0)
        .attr("rx", 10)
        .attr("width", 50)
        .attr("height", 30)
        .attr("fill", "none")
        .attr("style", "cursor: pointer;")
        .attr("transform", "")
        .on("mousedown", function (evt) {
          document.getElementById(
            "timelineLensRect"
          ).attributes.fill.nodeValue = "none";
          // pointer-events: none;
          // makes things clickable behind fill: none objects
          document.getElementById(
            "timelineLensPath"
          ).attributes.fill.nodeValue = "none";
          document.getElementById(
            "selectedTimerange"
          ).attributes.fill.nodeValue = "none";
          document.getElementById("closeArea").attributes.fill.nodeValue =
            "none";
          document.getElementById("closeX").attributes.stroke.nodeValue =
            "none";
          document.getElementById("textArea").attributes.fill.nodeValue =
            "none";
          document.getElementById("spokenWords").style.display = "none";
          document.getElementById("words").style.display = "none";
          document.getElementById("eventsTextInLens").remove();
        });

      lensGroup
        .append("rect")
        .attr("id", "textArea")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 10)
        .attr("width", width / 3)
        .attr("height", 30)
        .attr("fill", "none")
        .attr("transform", "");

      let paragraphPanel = lensGroup
        .append("foreignObject")
        .attr("id", "spokenWords")
        .attr("x", 10)
        .attr("y", 0)
        .attr("width", width / 3 - 20)
        .attr("height", 30)
        .attr("transform", "")
        .attr("style", "display:inherit;");
      let paragraph = paragraphPanel.append("xhtml:span");

      paragraph
        .attr(
          "style",
          `font-size: ${font_size_in_lens}; color: white; text-align: justify; display: block; padding-top:5px; padding-bottom: 5px`
        )
        .attr("xmlns", "http://www.w3.org/1999/xhtml")
        .attr("id", "words");
    },
  },
  mounted() {
    this.fillEventGraph();
    document.getElementById("timeline-container").innerHTML = "";
    this.renderChart();
    d3.select("#legend-sentiment")
      .append("path")
      .attr("fill", "rgba(255,255,255,0.1)")
      .attr("stroke", "rgba(255,255,255,0.3)")
      .attr("stroke-width", 1.5)
      .attr("d", "M0 10l10 0l10 10l20 -20l10 10");
  },
  updated() {
    this.renderChart();
  },
  beforeUpdate() {
    document.getElementById("timeline-container").innerHTML = "";
  },
};
</script>

<style scoped>
#timeline-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  gap: 25px;
}
#timeline-container {
  width: 90%;
  margin-left: 50px;
  overflow: visible;
  cursor: pointer;
  position: relative;
}
.legend {
  display: flex;
  width: 90%;
  margin-left: 50px;
  gap: 10px;
  justify-content: space-evenly;
}
.legend-entry {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
#size-explaination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
}
.legend-symbols {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#notice {
  width: 100%;
  text-align: end;
  font-size: 10px;
}
.legend-fontsize {
  font-size: 0.9rem;
}
.hover-div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: black;
}
</style>
