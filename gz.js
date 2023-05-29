let tokenData = genTokenData(215);

//For Specific
//let tokenId = 215001441;
//let tokenData = {"hash":"0x5f5064809bea2c0cd71e7ab0a9f367fe33f27be761b6dcd4c0d048a4b77196c9","tokenId":tokenId.toString()};

function setup() {
  createCanvas(windowWidth, windowHeight),
    pixelDensity(min(pixelDensity(), 2)),
    colorMode(HSB, 255, 255, 255, 255),
    noSmooth(),
    print(tokenData);
  print(mT);
    (seed = parseInt(tokenData.hash.slice(0, 16), 16)),
    (seedMem = seed),
    (document.getElementsByTagName("body")[0].style.background = "#000000");
}
function windowResized() {
  sR = 1;
}
function rE() {
  let e,
    r = [...eZ];
  for (
    uD.getFullYear() >= 2032 &&
      aR[5] &&
      aR[6] &&
      (r.push(pi(aR[5])), r.push(pi(aR[6]) % 3)),
      e = 0;
    e < r.length;
    e += 2
  )
    if (abs(uD.getTime() - 1e3 * r[e]) / 1e3 < aW)
      return [1e3 * r[e], r[e + 1]];
  return [];
}
function gE() {
  eE = [0, 0, 0];
  var e = rE();
  if (0 !== e.length) {
    var r = (uD.getTime() - e[0]) / 1e3;
    abs(r) < aW &&
      (eE[e[1]] = r <= 0 ? map(r, aW, 0, 0, 1) : map(r, 0, aW, 1, 2));
  }
}
function sMD(e) {
  e && pA >= 33 * (e - 1) && (yZ = e);
}
function draw() {
  let e, n, t, a, s;
  if (
    ((uD = new Date()),
    (hR = uD.getHours()),
    (mI = uD.getMinutes()),
    (sZ = uD.getSeconds()),
    (mH = uD.getMonth()),
    (dY = uD.getDate()),
    (gZ =
      Date.now() < 163860378e4 ? new Date(163606044e4) : new Date(163860378e4)),
    1 == sP && 0 == hR && 0 == mI && 0 == sZ && sDY(),
    (aR = window.location.hash.slice(1).split("|")),
    aR[4] && pi(aR[4]) > 0 && sMD(cn(pi(aR[4]), 1, 4)),
    aR[9] && pi(aR[9]) <= 1 && (mN = pi(aR[9])),
    aR[10] && pf(aR[10]) > 0 && (fR = min(pf(aR[10]), 1)),
    (nY = 11 == mH && 31 == dY && 23 == hR ? map(mI, 0, 60, 0, 0.2) : 0),
    nY > 0 &&
      (o(2 * nY) || (59 == mI && sZ > 50)) &&
      ((sI =
        59 == mI && sZ >= 58 ? 0 : pr(0, cn(map(mI, 0, 50, 0, pA), 0, pA))),
      (hM = 1)),
    gE(),
    (lX =
      aR[7] && pf(aR[7]) >= 0
        ? pf(aR[7])
        : map(abs(12 - (hR + mI / 60 + sZ / 3600)), 0, 12, 0, 1)),
    (lY =
      aR[8] && pf(aR[8]) >= 0
        ? pf(aR[8])
        : map(abs(30 - mI + sZ / 60), 0, 30, 1, 0)),
    1 == sH && (sMO(), (sH = 0), (hM = 1)),
    (pA = gNP()),
    iA > 0 && pA > 12 * iA && (iN = 1),
    aR[2] &&
      1 == iN &&
      pi(aR[2]) != sI &&
      pi(aR[2]) >= 0 &&
      ((t = pi(pA)), (sI = abs(t - cn(pi(aR[2]), 0, t))), (hM = 1)),
    1 == sR)
  ) {
    for (sSZ(), resizeCanvas(w, h), mZ = mF * mQ, e = 0; e < 5; e++) rMR(lA[e]);
    rMM(lA[5], 1, 4),
      rMM(lA[6], mV, -1),
      rMR(lA[7]),
      rMM(lA[8], 1, 4),
      rMM(lA[9], 1, 4),
      (sR = 0);
  }
  if (
    ((lP = gLP()),
    lL > lP && (hM = 1),
    (lL = lP),
    1 == hM && (cM(), (lA[9] = [])),
    (mK = mI / 60),
    (n = new Date(
      max(uD.getFullYear(), nM.getFullYear() + 1),
      nM.getUTCMonth(),
      nM.getUTCDate(),
      nM.getUTCHours(),
      nM.getUTCMinutes(),
      0
    )),
    (s = (n.getTime() - uD.getTime()) / 1e3),
    (aI = abs(s) >= 0 && abs(s) <= aW ? 1 : 0),
    (bM = 0 == aI && pA > 3 && pi(pA) % 33 == 0 ? 1 : 0),
    1 == aI && 0 == lA[8].length
      ? (rSD(),
        (lA[8] = []),
        aMO(pA, 0, 0, dM, lA[8], 1),
        (lA[8] = lA[8].reverse()))
      : 0 == aI && lA[8].length > 0 && ((lA[8] = []), (mC = 0)),
    0 == lA[9].length && eO())
  ) {
    rSD(), sRT(), (bE = eE[0] > 0 || eE[2] > 0 ? 1 : eE[1] > 0 ? 2 : 0);
    var c = 2 == bE ? 18 : 24,
      l = 2 == bE ? 24 : 18,
      i = cn(r(-1, eM), max(2, eM / 4), eM),
      p = pr(12, map(mQ, 0.05, 0.75, c, l)) * i;
    lA[9] = [];
    var g = abs(max(2, map(p, 18, 24 * i, 2, 10)));
    for (a = 0; a < p; a++)
      aMO(1, 2, null, dM, lA[9], 0),
        1 == bE &&
          ((lG += 0.25 / g),
          (hG += 0.5 / g),
          (lM += 0.25 / g),
          (hY += 0.5 / g));
    bE = 0;
  } else eE[0] <= 0 && eE[1] <= 0 && eE[2] <= 0 && lA[9].length > 0 && (hM = 1);
  (tP = nY > 0 ? mI + 1 + sZ / 60 : 0 == aI ? pA * (1 / speedRate) : 60),
    (tP = 1 == pD ? max(tP + 1, 1) : tP),
    frameRate(max(tP, 1) + 300 * nY),
    (gP = nY > 0 ? pA : cn(map(pA, 0, 12, -3, 1), 0, 1)),
    1 == aI && (sI = 0),
    gMN(lA[1 == aI ? 8 : 6], 0),
    0 == aI && gMN(lA[5], 1),
    eO() && gMN(lA[9], 2),
    noFill(),
    background(
      2 == yZ ? "#949BC8" : 3 == yZ ? "#2A1700" : 4 == yZ ? fZ[0] : bg
    ),
    dMS();
}
function gMN(e, o) {
  let n, t, a, s, c, l;
  for (
    n = aR[1] && pf(aR[1]) >= 0 ? 1 : 0,
      t =
        0 != mouseIsPressed || 1 != n || (1 != zC && 1 != aI)
          ? map(cn(mouseX, 0, width), 0, width, 0, 1)
          : cn(pf(aR[1]), 0, 1),
      mC = 0 == eO() && 0 == bM && ((1 == zC && 0 == n) || 1 == aI) ? 1 : 0,
      gW =
        1 != aI || 0 != eO() || (!mouseIsPressed && 1 != n)
          ? 0 != aI || 1 != zC || (!mouseIsPressed && 1 != n) || 0 != eO()
            ? 1 == mC
              ? gW
              : 1 == bM
              ? (mF / mZ) * 0.7
              : 1 == gT
              ? map(abs(12 - (hR + mK)), 0, 12, gL, gM)
              : 2 == gT
              ? map(abs(hR + mK - 12), 0, 12, gM, gL)
              : gT < 1
              ? cn(gW + r(-gT, gT), gL, gM)
              : gM
            : map(t, 0, 1, 0.1 * mQ, max(gM, (fs - 2 * bv) / mQ / (2 - mQ)))
          : map(t, 0, 1, 0.1 * mQ, (mF / mZ) * 2),
      0 == eO() &&
        ((mouseIsPressed && 1 == aI) || (mouseIsPressed && 1 == zC)) &&
        (mC = 1),
      i = 0;
    i < e.length;
    i++
  )
    2 == o &&
      (gW =
        eE[2] > 0 && eE[2] <= 1
          ? gW + map(eE[2], 0, 1, 0, r(0.01, 0.001) * (i + 1))
          : eE[2] > 1 && eE[2] <= 2
          ? gW + map(eE[2], 1, 2, r(0.01, 0.001), 0) * (i + 1)
          : eE[0] > 0 && eE[0] <= 1
          ? gW + map(eE[0], 0, 1, r(0.01, 0.001) * (i + 1), 0)
          : eE[0] > 1 && eE[0] <= 2
          ? gW + map(eE[0], 1, 2, 0, r(0.01, 0.001)) * (i + 1)
          : eE[1] > 0 && eE[1] <= 1
          ? cn(map(eE[1], 0, 1, 0, 1.005 * gW), 0, gW)
          : eE[1] > 1 && eE[1] <= 2
          ? cn(map(eE[1], 1, 2, 1.005 * gW, 0), 0, gW)
          : 0),
      (a = nY > 0 ? cn(map(nY, 0.15, 0.2, 0, 0.2), 0, 0.2) : 0),
      (s = e[i]),
      (s.of1 += r(-0.03, 0.05)),
      (c = 1 == aI || o > 0 ? 4 : gPH(i % (oK - 11))),
      (l = 1 == aI ? 0 : 2 == o && eO() ? 0 : mV),
      (s.shape = gMO(
        (mZ + mZ * s.ms) * gW,
        c,
        s.mnR,
        l + r(-a, a),
        s.fr,
        s.of1
      ));
}
function eO() {
  return eE[0] > 0 || eE[1] > 0 || eE[2] > 0;
}
function keyPressed() {
  for (
    1 == iN &&
      0 == aI &&
      (!aR[2] || pi(aR[2]) < 0) &&
      ((keyCode !== LEFT_ARROW && "5" != key) ||
        ((si = min(sI + 1, nS)), (hM = si != sI ? 1 : 0), (sI = si)),
      (keyCode !== RIGHT_ARROW && "6" != key) ||
        ((si = max(sI - 1, 0)), (hM = si != sI ? 1 : 0), (sI = si))),
      "8" === key && (mC = 0),
      keyCode === UP_ARROW && ((fR = min(fR + 0.01, 1)), (sR = 1)),
      keyCode === DOWN_ARROW && ((fR = max(fR - 0.01, 0.01)), (sR = 1)),
      "f" === key && ((fR = 1), (sR = 1)),
      "m" === key &&
        ((1 == mT && uD.getTime() > 16684056e5) ||
          (2 == mT && uD.getTime() > 16531776e5)) &&
        (mN = (mN + 1) % 2),
      i = 1;
    i < 5;
    i++
  )
    key == i && sMD(i);
  oK > 0 && 0 == key && (pD = (pD + 1) % 2),
    "7" === key && (lT -= qp / 6),
    "9" === key && (lT += qp / 6);
  return false;
}
function sCH(e, n) {
  let t, a, s, c, l, i, p, g, m;
  for (
    e.c = n,
      e.h = [],
      e.h[0] = [n],
      t = [15, 15, 15, 15, 15, 15, 15, 128, 200],
      a = sa(n),
      s = br(n),
      c = 1;
    c < 7;
    c++
  )
    for (e.h[c] = [], l = 0; l < 6; l++)
      (t =
        1 == kP
          ? [n]
          : 2 == kP
          ? [200, 200, 200, 200, 150, 40]
          : 5 == kP
          ? [15, 215, 210, 220, 15, 215, 210]
          : 6 == kP
          ? [30, 40, 46, 220]
          : 7 == kP
          ? [15, 128, 142, 154, 170, 185, 210]
          : 8 == kP
          ? [200, 210, 150, 180, 190, 40, 90, 120, 140, 160, 220]
          : 9 == kP
          ? [10, 20, 15, 15, 30, 40, 50, 235, 128, 200, 220]
          : t),
        (e.h[c][l] = o(sF)
          ? fZ[cZ]
          : color((rv(t) + r(-aVB, aVB)) % 256, a, s)),
        (e.h[c][l] =
          3 == kP || 5 == c || o(aVD)
            ? color(r(0, 255), a, s)
            : 4 == kP
            ? color(hue(n) + (r(-120, 120) % 255), a, s)
            : e.h[c][l]);
  for (
    e.h[8] = [color((hue(n) + r(111, 145)) % 255, a, s)],
      i = [21, 64, 64, 128],
      o(0.5) && i.push(9),
      p = e.h[9] = [],
      i.forEach(function (e) {
        p.push(color(hue(n) - e + r(-17, 17), a, s)),
          p.push(color(hue(n) + e + r(-17, 17), a, s));
      }),
      g = pr(0, fZ.length),
      m = pr(0, 0.5 * fZ.length),
      e.h[10] = [],
      c = 0;
    c < g;
    c++
  )
    e.h[10].push(fZ[(m + c) % fZ.length]);
  (e.h[10] = fZ), (e.h[7] = gV(n, 8, 0, 256));
}
function gNC(e) {
  let n, t;
  return 1 == bE
    ? color(fZ[cn(pr(-4, 9), 0, 8)])
    : 2 == bE && o(0.5)
    ? color(fZ[pr(0, fZ.length)])
    : ((n = o(pW) ? color(rv(fZ)) : color(fZ[cP])),
      o(0.5) && (oV = new CH(n)),
      o(cV) &&
        ((n = oV.getColor(tZ, cY)),
        o(0.5) &&
          (n = color(
            hue(n),
            max(cn(r(25, e), 25, 255), br(n)),
            max(cn(r(25, e), 25, 255), sa(n))
          ))),
      (t = r(30, 155)),
      (n = o(0.4)
        ? color(hue(n) + r(-t, t), sa(n) + r(-t, t), br(n) + r(-t, t))
        : n),
      (tZ += 1),
      o(tS[uC]) &&
        (n = lerpColor(n, color("#FCFBF6"), cn(r(-0.5, 1.2), 0.3, 0.95))),
      n);
}
function gV(e, r, o, n) {
  let t = [];
  for (let a = 3; a < r; a++)
    t.push(color(hue(e), sa(e), map(a, 3, r - 1, o + 3 * r, n)));
  return t;
}
function cM() {
  (bO = 1), rSD(), sRT();
  let e = gI,
    n = mB;
  (mB = 0 == mB ? nW[pr(0, 12)] : mB),
    (uC = 1),
    rPX(1),
    gER((lA[kL] = []), 0, 0, w, h, pr(1, kLM), fs - bv, fs - bv, rO, 1),
    (uC = 2);
  let t = o(oC) ? pr(1, 3) : 0;
  (gI = t > 0 ? 1 : gI), rPX(2), (lA[5] = []);
  let a = lA[kL][0];
  (dM = mB),
    aMO(cn(pr(1, 2 * mX), 1, mX), 1, a, dM, lA[5], 0),
    o(pV) && (cP = pr(0, fZ.length)),
    (oV = new CH(fZ[cP])),
    (lA[6] = []),
    (mW = pi(cn(r(1, 12), 2, 6))),
    (mW = o(0.237) ? min(mW, 4) : o(0.237) ? max(6, mW) : mW),
    13 == oK && (mW = max(mW, 2)),
    14 == oK && (mW = max(mW, 3)),
    rPS(t),
    rGG(t),
    aMO(mW, 0, a, mB, lA[6], 0),
    (hM = 0),
    (gI = e),
    (mB = n);
}
function rDM(e) {
  (e.sML = min(r(0.1, 1.9), 0.9)),
    (e.sMH = min(r(e.sML, 1.9), 1.9)),
    (e.swS = r(1e-5, 0.1));
}
function fp(e) {
  return !!(tM >= e && o(-1 == rF ? r(0.2, 0.8) : rF));
}
function stD(e, n, t) {
  fp(3) &&
    fp(4) &&
    (rAL(), rPT(), rPS(0), fp(5) && (rGG(0), gRR(), fp(6) && rOT())),
    (e.lines = []),
    (e.stripe = 0),
    (e.evolveDir = 1),
    (e.evolveIter = 0),
    (e.evolveLow = 0),
    (e.evolveHigh = 0),
    (e.gX = cn(r(lG, hG), lM, hY)),
    (e.oX = e.gX),
    rDM(e),
    e.gX > n.gXH && (n.gXH = e.gX),
    e.gX < n.gXL && (n.gXL = e.gX),
    (e.evolveDir = 1),
    o(0.5) && (e.evolveDir = -1),
    gXR(this),
    (e.ch = n.ch[t % n.ch.length]);
  let a = r(0, 1),
    s = a < 0.13 ? n.gXL : a < 0.23 ? n.gXH : a < 0.38 ? 99 : e.gX;
  (e.sw = cn(min(r(0.05, 0.8), 0.5), 0.05, hG)),
    e.sw > s && (e.sw = min(2, n.gXL * r(0.01, 0.5))),
    tF > 0 && (e.sw = tL),
    (e.osw = e.sw),
    (e.swDir = o(0.5) ? 1 : -1),
    (e.gR =
      0 == gI
        ? 0
        : 2 == gI
        ? cn(r(-0.1, 1.2), 0, 1)
        : r(0.4, min(1, 0.4 + gI))),
    (e.gS = pr(tI, 9)),
    (e.aL = r(aL, ah)),
    e.aL > 0.8 * ah && o(sM) && (e.aL = r(150, 255));
  let c = e.ch.c;
  (e.ch.c = color(hue(c), sa(c), br(c), map(e.aL, 0, 255, 0, 210))),
    (e.lC = e.ch.getColor(dS[uC] < 0 ? pr(1, 4) : dS[uC], e.gS % 12, e.gR)),
    (e.cm = [r(0, 0.5), r(0.5, 1), r(-2, -0.5), r(0.2, 3)]),
    (e.a = []),
    (e.b = []),
    (e.c = []),
    (e.bLow = []);
  for (let r = 0; r < 2; r++) e.a.push([]), e.b.push([]), e.c.push([]);
  dLY(e, 0), dLY(e, 1);
}
function gD(e) {
  return new Date(e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear());
}
function sDY() {
  var e = gD(nM),
    o = gD(uD),
    n = (o.getTime() - e.getTime()) / 864e5;
  for (let e = 0; e < 2; e++) {
    seed = seedMem;
    for (let o = 0; o < n + e; o += sC) r(0, 1);
    for (let r = 0; r < lA.length; r++)
      lA[r].forEach(function (r) {
        r.dsn.forEach(function (r) {
          dLY(r, e);
        });
      });
  }
  seed = seedMem;
}
function dLY(e, o) {
  (e.a[o] = [r(16, 20), r(20, 24), r(0, 0.3), r(0, 4), r(4, 9), gMT()]),
    (e.b[o] = [r(12, 15), r(16, 20), r(0, 0.2), r(4, 8), r(9, 12), gMT()]),
    (e.c[o] = [
      r(8, 12),
      r(12, 15),
      r(23, 24),
      r(0, 1),
      r(1, 6),
      r(0, 0.9),
      r(12, 14),
      r(14.1, 17),
      r(17.1, 22.9),
      r(6, 9),
      r(9, 10.9),
      gMT(),
    ]),
    (e.bLow[o] = r(0.1, 0.9));
}
function gMT() {
  return 1 + cn(r(-pA / 240, pA / 240), -1, 1);
}
function eQZ(e, r) {
  (e.aL = r.aL),
    (e.sw = r.sw),
    (e.osw = r.osw),
    (e.swS = r.swS),
    (e.gX = r.gX),
    (e.oX = r.oX),
    (e.evolveIter = r.evolveIter),
    (e.evolveDir = r.evolveDir),
    (e.evolveLow = r.evolveLow),
    (e.evolveHigh = r.evolveHigh),
    (e.gS = r.gS),
    (e.gR = r.gR);
}
function gXR(e) {
  (e.evolveLow = r(0.25, 0.9)),
    (e.evolveHigh = r(1.1, 1.75)),
    (e.evolveIter = rv(eI));
}
function gSI(e, r, o) {
  let n, t, a, s, c, l, i;
  for (n = [], t = 0; t < o.length - 1; t++)
    (a = gLI(e, r, o[t], o[t + 1])),
      null != a && n.push(createVector(a.x, a.y, dist(e.x, e.y, a.x, a.y)));
  if (n.length <= 2) return n;
  for (s = []; n.length > 0; ) {
    for (c = 9 * cW, l = 0, t = 0; t < n.length; t++)
      (i = n[t]), i.z < c && ((c = i.z), (l = t));
    s.push(n[l]), n.splice(l, 1);
  }
  return s;
}
function gLI(e, r, o, n) {
  let t, a, s, c, l, i;
  return (
    (t = r.x - e.x),
    (a = r.y - e.y),
    (s = n.x - o.x),
    (c = n.y - o.y),
    (l = (-a * (e.x - o.x) + t * (e.y - o.y)) / (-s * a + t * c)),
    (i = (s * (e.y - o.y) - c * (e.x - o.x)) / (-s * a + t * c)),
    l >= 0 && l <= 1 && i >= 0 && i <= 1
      ? new createVector(e.x + i * t, e.y + i * a)
      : null
  );
}
function rSM(e, r, o, n) {
  (e.cx = r), (e.cy = o), (e.shape = n);
}
function sAS(e) {
  (e.angleSpeed = null != e.bro ? e.bro.angleSpeed : r(5e-5, 0.005)),
    (e.angleSpeedDir =
      null != e.bro
        ? e.bro.angleSpeedDir
        : 0 == uA[e.code]
        ? 0
        : o(0.5)
        ? -1
        : 1),
    (e.grI = null != e.bro ? e.bro.grI : r(0.01 * gY[e.code], gY[e.code])),
    (e.angleSetup = 0),
    (e.angleResetMult = null != e.bro ? e.bro.angleResetMult : r(1, 21));
}
function sPM(e) {
  let n, t, a, s, c;
  for (
    o(aVBR) && (aVB = rv(aVBC)),
      o(kR) && (kP = cn(pr(aCL, aCH), 0, 9)),
      1 != bO && o(r(rQ, 0.8)) && rPT(),
      1 == rR && o(0.5) && (tM = pr(0, 7)),
      2 == tM && rMD(0, 3),
      1 == gN && gRR(),
      e.oOX = r(-1, 1),
      e.oOY = r(-1, 1),
      e.grS = 0,
      e.hD = o(hD) ? r(0, rv(hZ)) : 0,
      sAS(e),
      1 == pR && rPX(e.code),
      e.a =
        mM[e.code] <= 1
          ? r(0, TWO_PI)
          : 2 == mM[e.code]
          ? (rA += qp / rD + r(-qp / (2 * rD), qp / (2 * rD)))
          : 3 == mM[e.code]
          ? (rA += radians(45 + r(-15, 15)))
          : 5 == mM[e.code]
          ? (rA += radians(r(0, 5)))
          : 4 == mM[e.code]
          ? (rA += radians(r(-20.16, 30.76)))
          : 0,
      o(lF) && rAL(),
      rAL(),
      o(aF) && rPS(0),
      e.dsn = [],
      a = new CH(gNC(cH[e.code])),
      cY = rv(1 == bE ? cO : cS),
      e.ch = [],
      s = 5 == cA[e.code] ? cn(pr(-5, 6), 0, 5) : cA[e.code],
      c = pr(0, 99),
      cC = 1 == sD ? 1 : 2 == sD || o(0.5) ? 1 : o(0.03) ? 3 : 2,
      t =
        1 == nP[e.code] && o(nV)
          ? 1
          : 1 == bO && o(0.3)
          ? (pr(10, 40), (gI = 1))
          : o(pMC[e.code])
          ? pr(1, pM[e.code])
          : o(0.02)
          ? pr(pL, pH)
          : o(0.2)
          ? pr(1, 10)
          : o(0.35)
          ? cC
          : o(0.5)
          ? cC * pr(1, 4)
          : 1,
      n = 0;
    n < cC;
    n++
  ) {
    v =
      0 == s || o(0.1)
        ? pr(0, 99)
        : o(0.05)
        ? 0
        : 1 == s
        ? c + n
        : 2 == s
        ? c + 2 * n
        : 3 == s
        ? c + pr(0, 8)
        : 4 == s
        ? c
        : 0;
    let r = a.getColor(v, cY);
    e.ch.push(new CH(r));
  }
  (e.gXL = 999), (e.gXH = 0);
  let l = rv([4, 4, 4, 10]),
    i = o(2 == gC ? r(0, 1) : gC) ? 0 : 1,
    p = 0,
    g = [],
    m = o(0.3) ? 0 : o(0.3) ? 1 : pr(1, max(3, t / 3)),
    h = 2 == qY[e.code] ? r(0, 0.5) : qY[e.code],
    f = 0;
  for (n = 0; n < t; n++) {
    e.dsn[p] = new Ds(e, p);
    let a = o(wS[e.code]),
      s = o(uE[e.code]);
    f < m &&
      n > 1 &&
      o(h) &&
      o(0.8) &&
      (dEQ(e.dsn[p], e.dsn[g[pr(0, n - 2)]], a, s, 0, 1),
      (a = 1),
      (s = 1),
      (f += 1),
      (t += 1));
    let c = 1 == uC ? 0.8 : 0 == bO || 1 == bE ? 1 : 0.5,
      u = [1, 3, 2, 1.5, 1.5, 4, 4, 3, 1];
    1 == c && u.push(1, 2, 3, 1, 2, 5, 5, 7, 10, 20);
    let M =
        1 == nP[e.code] && o(nV)
          ? 1
          : o(0.5 * c)
          ? pr(l, 6)
          : o(0.15 * c)
          ? pr(12, 24)
          : o(0.1 * c ** 4)
          ? pr(24, 36)
          : o(0.5 * c)
          ? pr(l + 3, 12)
          : o(0.03 * c ** 8)
          ? pr(36, 54)
          : pr(l, 2 * l),
      d =
        (1 == nP[e.code] && o(nV)) || 0 == i
          ? 0
          : M >= 3 && M <= 6 && o(0.15)
          ? cn(M * r(rv(u), rv(u)), 0, 70)
          : M < 4
          ? 0
          : o(0.015)
          ? pr(max(2, M / 8), M / 2)
          : 0;
    for (let r = 1; r <= M + d; r++)
      (e.dsn[p + r] = new Ds(e, p + r)),
        dEQ(e.dsn[p + r], e.dsn[p], a, s, r, M);
    g.push(p), (e.dsn[p].k = p), (p = e.dsn.length);
  }
  (t = e.dsn.length), cTL(e), (e.oS = r(1e-4, 0.01));
}
function dEQ(e, r, n, t, a, s) {
  (e.ch = r.ch),
    (e.stripe = 1),
    o(t) && (e.gX = r.gX),
    (e.lC = r.lC),
    (e.gR = r.gR),
    (e.aL = 1 != n ? r.aL + a : r.aL),
    a > s && (e.aL = r.aL <= 20 ? 99 : 15);
}
function cTL(e) {
  e.tG = 0;
  for (let r = 0; r < e.dsn.length; r++) e.tG += e.dsn[r].gX;
}
function gER(e, o, n, t, a, s, c, l, i, p) {
  let g,
    m,
    h,
    f,
    u = 0,
    M = 0;
  for (
    g = [], 1 == i && ((u = r(-0.01, 0.01)), (M = r(-0.01, 0.01))), m = 0;
    m < s;
    m++
  ) {
    2 == i && ((u = r(-0.01, 0.01)), (M = r(-0.01, 0.01))),
      (h = r(c, l)),
      (g = dER(o, n, t, a, h, i, u, M));
    let s = gCO(p, 0);
    for (let r = 0; r < s; r++)
      (f = new MoR(o, n, g, 0, u, M, h, 0, 1 == wO ? 1 : 0, p)),
        cOV(e, r, f, s);
  }
  return g;
}

function dER(e, r, o, n, t, a, s, c) {
  let l, i, p, g;
  return (
    (l = min(o, n)),
    (i = l - l * t),
    (p = i),
    1 == a && ((e += mF * s), (r += mF * c)),
    (g = []),
    g.push(createVector(e + i, r + i)),
    g.push(createVector(e + o - i, r + i)),
    g.push(createVector(e + o - i, r + n - p)),
    g.push(createVector(e + i, r + n - p)),
    g.push(createVector(e + i, r + i)),
    g
  );
}
function gMO(e, r, o, n, t, a) {
  let s, c, l, i, p, g, m, h, f, u, M, d, R, C, S;
  return (
    t > 20 && 33 == o && (o = 2 * t),
    (C = cos(a) * e * t * n),
    (S = sin(a) * e * t * n),
    (s = e / 2),
    (c = []),
    (l = 6 * qp),
    (i = l + 4 * qp),
    (p = (8 * qp) / o),
    r <= 0.01
      ? []
      : ((g = map(r, 0, 4, 0, 2)),
        (m = s - s * g),
        (h = 0),
        (f = 1),
        (u = m),
        (M = s),
        (d = i),
        (R = l),
        r > 4 &&
          ((l = 2 * qp),
          (i = 6 * qp),
          (g = map(r, 4, 8, 2, 0)),
          (m = s - s * g),
          (h = 1),
          (f = 0),
          (u = s),
          (M = m),
          (d = l),
          (R = i)),
        eAD(h, c, C, S, d, R, p, u, s),
        eAD(f, c, C, S, R, d, p, M, s),
        c.push(c[0]),
        c)
  );
}
function eAD(e, r, o, n, t, a, s, c, l) {
  if (1 == e)
    for (let e = t; e <= a; e += s)
      r.push(createVector(o + cos(e) * c, n + sin(e) * l));
  else
    for (let e = t; e >= a; e -= s)
      r.push(createVector(o + cos(e) * c, n + sin(e) * l));
}
function rCT() {
  if (
    (o(0.08)
      ? (gPS([15, 5, 5, 20, 25, 25, 5]), (cT = 6))
      : o(0.4)
      ? ((cS = [0, 0, 0, 1, 1, 6, 7, 8, 9, 10, 10, 10]),
        (cT = 9),
        o(0.5) && cS.push(1, 6, 6))
      : o(0.1)
      ? (cT = 17)
      : o(0.3)
      ? (gPS([10, 15, 15, 5, 20, 0, 30]), (cT = 0))
      : o(0.1)
      ? (gPS([100, 10, -1, 5, -1, -1, -1]), (cT = 4))
      : o(0.15)
      ? (gPS([30, 1, 0, 1, 30, 90, 1]), (cT = 2))
      : o(0.05)
      ? (gPS([10, 50, 50, 5, -1, -1, 0]), (cT = 1))
      : o(0.2)
      ? (gPS([35, 2, 3, 0, 25, 10, 20]), (cT = 7))
      : o(0.1)
      ? (gPS([0, 0, 0, 0, 0, 0, 2]), (cT = 5))
      : o(0.1)
      ? (gPS([15, 12, 13, 15, 15, 10, 20]), (cT = 8))
      : o(0.5)
      ? (gPS([-1, -1, 0, -1, -1, -1, -1]), (cT = 18))
      : (cT = 17),
    17 == cT)
  )
    for (cS = [], i = 0; i < cE.length; i++) {
      let e = pr(0, 100);
      for (let r = 0; r < e; r++) cS.push(cE[i]);
    }
  0 == cS.length && (cS = [1]);
}
function gRR() {
  gI = o(0.5) ? min(r(0.25, 1.5), 1) : o(0.4) ? 2 : 0;
}
function rPT() {
  (1 == tM || (tM > 1 && 1 == rS)) && rMD(0, 3);
}
function rMD(e, n) {
  let t = rv([0, 0.1, 0.3, 0.5, 0.7, 0.8, 0.9, 0.9, 0.9, 1]),
    a = 0 != cP && o(0.13) ? 1 : 0,
    s = o(0.7) ? 1 : 0;
  for (i = e; i < n; i++) {
    (mM[i] = i > 0 && o(0.25) ? mM[i - 1] : cn(pr(-3, 9), 0, 5)),
      (uP[i] = o(0.8) ? 1 : 0),
      (dS[i] = o(0.5) ? pr(0, 10) : -1),
      (uA[i] =
        mM[i] >= 4
          ? 1
          : i > 0 && o(0.25)
          ? uA[i - 1]
          : o(0.8) || 0 == uP[i]
          ? 1
          : 0),
      (cA[i] =
        i > 0 && o(0.5)
          ? cA[i - 1] > 0 && cA[i - 1] < 5
            ? rv([0, 0, 5])
            : cA[i - 1]
          : cn(pr(-8, 9), 0, 5)),
      (cH[i] = o(0.5) ? r(205, 255 + 10 * i) : 225),
      (pM[i] = o(0.3) ? pr(1, 3) : pr(2, 6)),
      (pMC[i] =
        0 == i && o(0.2) ? pMC[0] : rv([0, 0.5, 0.2, 0.5, 0.5, 1, 0.8, 0.5]));
    let e = [0, 1, 1, 1, 1, 0.75, 0.5];
    (wS[i] = 1 == s ? 1 : rv(e)),
      (uE[i] = 1 == s ? 1 : rv(e)),
      (tS[i] = (1 == a && o(0.5)) || 0 == a ? 0 : r(0.2, 0.8)),
      (cF[i] = i > 0 && o(0.8) ? cF[0] : cn(r(0.1, 2), 0.1, 0.6)),
      (nQ[i] = r(-1 * (i + 1), 0.2)),
      (nQ[i + 3] = r(-2 * (i + 1), 0.2)),
      (nP[i] = i > 0 && o(0.2) ? nP[pr(0, i)] : o(t) ? 0 : 1),
      (nV[i] = cn(r(0.6, 1.2), 0.5, 1)),
      (tH[i] =
        i > 0 && o(0.2)
          ? tH[0]
          : rv([0, 1, 1, 1, 1, 1, 2, 3, 1, 1, 4, 5, 10, 1])),
      (pF[i] = i > 0 && o(0.2) ? pF[0] : o(0.3) ? 2 : rv(pY)),
      (pK[i] = cn(r(-0.5, r(1, 3.1)), 0, 1)),
      (pT[i] = o(0.2) && i > 0 ? pT[0] : rv([2, 0, 1, 0, 3, 2, 2, 1, 3, 4, 1])),
      (pQ[i] = cn(r(-2, 1), 0, 0.75)),
      (qY[i] = 1 == pZ ? 0 : o(0.3) && i > 0 ? qY[0] : o(0.3) ? 2 : r(-1, 0.6)),
      (sL[i] = i > 0 && o(0.2) ? sL[0] : o(0.5) ? 2 : r(0.1, 0.9));
  }
}
function rPS(e) {
  if (((pL = rv(pG)), (pH = rv(pS)), (1 == e && o(0.7)) || (2 != bE && o(rC))))
    return (pL = 10), void (pH = 40);
  1 == pN && (pH = pL), 2 == pN && (pL = pH);
}
function rAL() {
  (aL = rv(hK)), (ah = rv(hC)), o(dH) ? (aL = ah) : o(dL) && (ah = aL);
}
function rPX(e) {
  gY[e] = 0 == uP[e] ? 0 : r(0.01, 1);
}
function rGG(e) {
  0 == bE &&
    ((lG = r(0.2, 2)),
    (hG = max(r(lG, 2), 1.5 * lG)),
    (lM = r(0.4, 1)),
    (hY = r(1.5, 3)),
    1 == e && ((lM = r(1, 4)), (hY = r(4, 8))));
}
function gPS(e) {
  let r,
    o = [0, 1, 6, 7, 8, 9, 10],
    n = 0,
    t = 0;
  for (cS = [], r = 0; r < e.length; r++) {
    let a = -1 == e[r] ? pr(0, 2) : e[r];
    for (t = 0; t < a; t++) cS.push(o[r]), (n += 1);
  }
  if (n <= 1) for (t = 0; t < 5; t++) cS.push(7);
}
function sSZ() {
  (w = windowWidth * fR),
    (h = windowHeight * fR),
    (mF = min(w, h)),
    (cW = 2 * dist(0, 0, w, h));
}
function sMO() {
  let e, n;
  for (lA = [], e = 0; e < 10; e++) (lA[e] = []), (rA = qp * pr(1, 4));
  sSZ(),
    (nM = o(0.008162001)
      ? theDream
      : o(0.005)
      ? firstSale
      : o(0.0775)
      ? firstRecordSale
      : o(0.03)
      ? stolenPaintings
      : o(0.03172006)
      ? firstOnePersonShow
      : o(0.03092014)
      ? beginCustomSoftware
      : o(0.06102017)
      ? firstSearch
      : o(0.2142)
      ? noSale
      : o(0.262)
      ? lastRecordSale
      : o(0.1)
      ? secondarySale
      : o(0.07312004)
      ? firstRepresentation
      : gZ),
    (aVB = rv(aVBC)),
    (aVBR = rv([0, 1, 0.5, 0.2, 0, 1])),
    o(0.25)
      ? ((aVB = cn(r(-3, 10), 0, 10)), (aVBR = 0))
      : o(0.3) && ((aVB = 99), (aVBR = 0)),
    (mT = o(0.1337) ? 1 : o(0.1337) ? 2 : 0),
    (hD = r(0.5, 0.8)),
    o(0.5) && hZ.push(0.5),
    o(0.2) && hZ.push(1),
    (rR = o(0.1337) ? 1 : 0),
    (rF = rv([-1, 0.2, 0.5, 0.5, 0.5, 0.8, 1])),
    (ss = rv([0, 0, 0.1, 0.2, 0.5, 0.8, 0.9, 0.9, 1, 1])),
    (pA = gNP()),
    (rS = o(0.5) ? 1 : 0),
    (lP = gLP()),
    (mP = gLP()),
    (oK = o(0.2) ? rv(cK) : 0),
    (pD = 0 == oK ? 0 : 1),
    o(0.61) && (tK = 1),
    oK > 0 && o(0.33) && (fU = 1),
    (sC = rv([0.01, 0.05, 0.1, 0.2])),
    (sF = rv([0, 0.1, 0.3, 0.3, 0.3, 0.6, 1])),
    rOT(),
    (oC = r(0.1, 1)),
    (eX = o(0.5) ? 1 : 0),
    (aS = o(0.5) ? 1 : 0),
    (nL = r(0.001, 0.1)),
    (nH = r(nL, 0.1)),
    (aW = (cn(pr(-7, 7), 1, 7) / 2) * 24 * 60 * 60),
    (zC = o(0.01337) ? 1 : 0),
    rCT(),
    (bg2 = fZ[rv([4, 6, 8, 11, 15, 20, 22, 23, 25, 26, 32, 36, 42, 45])]),
    (aH = pr(0, 2)),
    (eM = pr(1, 10)),
    (rA = (qp / pr(1, 3)) * pr(-8, 8));
  let t = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  for (speedRate = 1728, e = 0; e < 11; )
    o(0.5) && ((speedRate = 12 * t[e]), (e = 11)), e++;
  (lT = o(0.01) ? 2 * qp : o(0.87) ? 0 : PI),
    (mX = pr(3, 8)),
    (iN = o(0.01337) ? 1 : 0),
    (iA = 0 == iN && o(0.1337) ? rv(rW) : -1),
    (oA = r(0, 5) / 100),
    (wO = o(0.1) ? 1 : 0),
    (fO = cn(r(-0.3, 0.05), 0, 0.05)),
    rPS(0),
    (aF = r(-0.5, 1.5)),
    (pN = o(0.5) ? 2 : o(0.5) ? 1 : 0),
    rPS(0),
    o(0.5) && ((kL = 3), (bL = 4)),
    (kR = o(0.5) ? rv([0.3, 0.5, 0.8, 1, 0.5, 0.7, 0.4]) : 0),
    (aCL = rv([-7, -1, -2, 0, 0, 5])),
    (aCH = rv([8, 10, 10, 10, 10])),
    (aVD = rv([0.5, 0.4, 0, 0, 0, 0, 0, 0, 0, 1])),
    (kP = cn(pr(aCL, aCH), 0, 9)),
    (tI = pr(2, 10)),
    (kLM = cn(pr(-20, 10), 1, 10)),
    (dL = r(0, 1)),
    (dH = r(0, 1)),
    rAL(),
    (cV = r(0.1, 0.9)),
    (pW = r(0.1, 0.9)),
    (pV = r(-0.1, 0.5)),
    (cP = pr(0, fZ.length)),
    (cZ = cP),
    (oV = new CH(fZ[cP])),
    (tZ = pr(0, 8)),
    (rD = radians(pr(3, 45))),
    (lF = o(0.5) ? cn(r(0.1, 1.2), 0.1, 0.7) : 0),
    (mV = o(0.33) ? r(0.019, 0.069) : 0),
    (rO = o(0.380174) ? 2 : o(0.17044) ? 1 : 0),
    (gT = o(0.3) ? r(1e-4, 0.001) : o(0.1609) ? 1 : 2),
    (fs = cn(r(0.65, 0.9), 0.75, 0.9)),
    (n = min(r(0.08, 0.75), 0.55)),
    (mY = min(fs + r(0.02, 0.05), 0.95)),
    (mQ = max(fs * n, 0.02)),
    1 == eX && (mQ -= 0.05),
    (gM = map(n, 0.25, 0.5, 1.25, 1)),
    (bv = max(map(mQ, 0.25 * fs, 0.55 * fs, 0.1, 0.03), 0.03)),
    o(0.2) &&
      ((fs = r(0.88, 0.93)),
      (mQ = max(0.52 - bv, 0.02)),
      1 == eX && (mQ -= 0.03),
      (mY = r(0.85, 0.9)),
      (rO = 1)),
    (mZ = mF * mQ),
    (pZ = o(0.5) ? 1 : 0),
    (rP = o(0.2) ? -1 : o(0.5) ? 0 : cn(r(0, 1.2), 0, 1)),
    (rQ = o(0.5) ? 0 : rv([-8, -3, -1.2, -1.8, -0.8, -0.2, -1.8, -0.8, -0.2])),
    (tM = pr(0, 7)),
    rMD(0, 3),
    rPT(),
    rPX(0),
    o(0.5) && (pR = 1),
    (mB = rv(nW)),
    (sT = o(0.2) ? 2 : r(-1, 1)),
    (tH[3] = rv([1, 1, 1, 1, 100, 1, 1, 1, 1, 1])),
    (bN = pr(1, 8)),
    (bV = pr(2, 5)),
    (mG = rv([10, 15, 10, 20, 15, 30])),
    gRR(),
    (gN = o(0.4) ? 1 : 0),
    rGG(0),
    o(0.1) &&
      ((tF = o(0.5) ? 2 : 1),
      (bg = 2 == tF ? "#343538" : tB[(cn(r(-2, 5)), 3)]),
      (tL = o(0.01) ? r(0.013, 0.03) : r(0.1, 0.16)),
      (lM = 0.4),
      (hY = 2.5),
      (dL = 0),
      (aL = r(10, 15))),
    (hK = [80, 99, 150]),
    (hC = [99, 99, 99, 150]),
    o(0.5)
      ? (lZ = 0)
      : o(0.1) && 0 == tF
      ? ((lZ = 1), (hC = [45]), (hK = [15]))
      : o(0.08) && 0 == tF
      ? ((lZ = 2), (hC = [30]), (hK = [30]))
      : o(0.15)
      ? ((lZ = 3), (hC = [99]), (hK = [99]))
      : o(0.15)
      ? ((lZ = 4), (hK = [15, 30, 30, 45]), (hC = [150, 170, 190, 210]))
      : (lZ = 0),
    (eP = o(0.5) ? 1 : 0);
  for (let e = 0; e < 5; e++) lA[e] = [];
  gER(lA[0], 0, 0, w, h, bN, 1, 1, 0, 0),
    gER(lA[1], 0, 0, w, h, mG, mY, 1, rO, 0),
    gER(lA[2], 0, 0, w, h, bV, fs - bv, fs, rO, 1),
    gER(lA[bL], 0, 0, w, h, pr(1, 6), fs, fs, 0, 1);
  let a = lM,
    s = hY;
  (lM = 5),
    (hY = 8),
    (overlayChance = 0.3),
    o(0.3) && ((overlayChance = 0.1), gER(lA[7], 0, 0, w, h, 1, fs, fs, rO, 1)),
    o(overlayChance) && gER(lA[7], 0, 0, w, h, 1, 1, 1, rO, 1),
    (lM = a),
    (hY = s),
    (dC = cn(r(-5, 1), 0.05, 0.25)),
    (nC = cn(r(-1, 1), 0.05, 0.25)),
    (vS = tL),
    (cN = cY),
    (gapChanceSave = gC),
    (shimmerSave = sM),
    (solidSave = sD),
    (pearlChanceSave = rC),
    (rZ = rA),
    (cQ = tZ),
    o(r(rQ, 0.8)) && rPT(),
    sDY(),
    (mS = tM),
    (sP = 1),
    (cZ = cP),
    (kS = kP);
}
function gNP() {
  return (uD.getTime() - nM.getTime()) / 1e3 / lc;
}
function rOT() {
  (gC = o(0.3) ? 2 : o(0.3) ? 0.5 : o(0.2) ? 1 : cn(r(-0.2, 1))),
    (sM = r(0.05, 0.15)),
    (sD = o(0.3) ? 2 : o(0.15) ? 1 : 0),
    (rC = o(0.33) ? 0 : o(0.005) ? 1 : rv(pC));
}
function sRT() {
  for (let e = 0; e < nS - sI; e += sC) r(0, 1);
}
function aMO(e, n, t, a, s, c) {
  let l = 0;
  for (let i = 0; i < e; i++) {
    let p = 1 == c ? 1 : r(0, TWO_PI),
      g = 1 == c ? 1 : r(0.5, 1),
      m = 0 == a ? nW[pr(6, 12)] : a,
      f = 1 == c ? 0 : r(-mV, mV),
      u = 2 == n ? 4 : 0 == n && 0 == c ? gPH(i % (oK - 11)) : 4,
      M = r(nL, nH),
      d =
        1 == c && 1 == aH
          ? M + l
          : 1 == c && 0 == aH
          ? r(nL, nH) * (i + 1)
          : 0 == n && 1 == eX
          ? r(0.005, 0.03) * r(0, e)
          : 1 == n && 1 == eX
          ? r(0.005, 0.06) * r(0, e)
          : 0;
    l = M * (i + 1);
    let R = gMO(mZ + mZ * d, u, m, f, g, p),
      C = gCO(2, 3);
    for (let r = 0; r < C; r++) {
      let a = new MoR(
        w / 2,
        h / 2,
        R,
        1,
        p,
        0,
        g,
        d,
        1 == c && o(0.1)
          ? 1
          : 0 == c && 0 == n && o(nC)
          ? 1
          : 1 == n && o(dC)
          ? 1
          : 0,
        2
      );
      (a.mnR = m),
        1 == c && ((a.oOX = 0), (a.oOY = 0)),
        1 == n && i == e - 1 && (a.dsn = t.dsn),
        cOV(s, r, a, C);
    }
  }
}
function gCO(e, r) {
  return o(cF[e])
    ? 2
    : o(1 - cF[e])
    ? 1
    : o(nQ[r])
    ? 3
    : o(nQ[r + 1])
    ? 4
    : o(nQ[r + 2])
    ? 5
    : 2;
}
function cOV(e, n, t, a) {
  if (n > 0) {
    let a = e[e.length - 1];
    (t.dsn = a.dsn),
      (t.bro = o(ss) ? a : null),
      sAS(t),
      (t.a =
        1 == n && o(0.1)
          ? a.a + qp / r(1, 8)
          : 1 == n && o(0.8)
          ? a.a + 2 * qp + r(-0.2, 0.2)
          : o(0.5 + 0.1 * n)
          ? a.a + qp * rv([1, 3, 0.5, 0.25, 0.125, -0.5, -0.25, -0.125])
          : o(0.75 + 0.1 * n)
          ? a.a + qp * rv([1, 3])
          : a.a + radians(pr(-6, 6)));
  }
  e.push(t);
}
function dSH(e, r) {
  beginShape();
  for (let o = 0; o < e.shape.length; o++) {
    let n = e.shape[o],
      t = min(0.5, mQ) * r;
    vertex(n.x + e.oOX * (mF * t), n.y + e.oOY * (mF * t));
  }
  endShape();
}
function dMS() {
  for (let e = 0; e < 9; e++) {
    let r = lA[e];
    ((5 != e && 6 != e) || !((3 == mH && 1 == dY) || (0 == mH && 8 == dY))) &&
      dMO(r, e),
      ((4 == e && (eE[0] > 0 || eE[2] > 0)) ||
        (6 == e && eE[1] > 0) ||
        (1 == aI && 8 == e)) &&
        dMO(lA[9], 9);
  }
}
function dMO(e, o) {
  for (let n = 0; n < e.length; n++) {
    let t = e[n],
      a =
        (10 == mH && 14 == dY) || (1 == mT && 1 == mN)
          ? 1
          : (4 == mH && 22 == dY) || (2 == mT && 1 == mN)
          ? 2
          : 0;
    if ((1 == aI && (o >= 8 || 0 == o)) || (0 == aI && (o < 8 || 9 == o))) {
      let s = 0;
      cTL(t);
      let c = t.a + 2 * qp,
        l = w / 2 + cos(t.a) * cW,
        i = h / 2 + sin(t.a) * cW,
        p = (cos(t.a), sin(t.a), o < 8 && 0 == mH && 8 == dY ? cW : 2 * cW);
      for (let e = -t.grS; e < p; e += 0) {
        let r = l - cos(t.a) * e,
          o = i - sin(t.a) * e;
        t.dsn[s].lines.push(createVector(r - cos(c) * cW, o - sin(c) * cW)),
          t.dsn[s].lines.push(createVector(r + cos(c) * cW, o + sin(c) * cW)),
          (e += t.dsn[s].gX),
          (s = (s + 1) % t.dsn.length);
      }
      (t.grS = (t.grS + t.grI) % t.tG),
        (t.growShape =
          1 != bM || (o != kL && o != bL) ? t.shape : lA[0][0].shape);
      for (let e = 0; e < t.dsn.length; e++) {
        let r = [],
          o = t.dsn[e];
        for (let e = 0; e < o.lines.length - 1; e += 2) {
          let n = gSI(o.lines[e], o.lines[e + 1], t.growShape);
          null != n && n.length >= 2 && n.forEach((e) => r.push(e));
        }
        o.lines = r;
      }
      if (
        ((t.a += (t.angleSpeed * gP * t.angleSpeedDir) % TWO_PI),
        (5 == o || 6 == o || o >= 8) &&
          (push(),
          translate(w / 2, h / 2),
          (mD =
            0 == aI && aR[3] && "a" != aR[3]
              ? radians(pf(aR[3]))
              : 1 == aI && aR[3] && "a" != aR[3]
              ? radians(n * frameCount * pf(aR[3]) * 0.01)
              : lT),
          rotate(mD)),
        1 == t.mOutline)
      ) {
        if (cDR(o, 1)) {
          let r = cn(t.dsn.length, 0, 3);
          for (let a = 0; a < r; a++) {
            let s = 1 == t.mn ? oA : fO,
              c = gMS(t.dsn[a], t.dsn[a].ch.c, n, o, e);
            stroke(c),
              strokeWeight(
                t.dsn[a].sw *
                  map(a, 0, r - 1, 5 == o || 6 == o || 9 == o ? 3 : 1.5, 0.5)
              ),
              dSH(t, s);
          }
        }
        (t.outlineMult += t.oS),
          (t.outlineMult >= 1.2 || t.outlineMult <= 0.25) && (t.oS *= -1);
      }
      for (let s = 0; s < t.dsn.length; s++) {
        let c = t.dsn[s];
        if (null != c.lines) {
          let s = c.sw;
          strokeWeight(s);
          let l = c.lines.length,
            i = gMS(c, c.ch.c, n, o, e);
          if (
            (stroke(i),
            0 != c.gR && (i = lerpColor(c.ch.c, c.lC, c.gR)),
            cDR(o, 0))
          )
            for (let s = 0; s < l - 1; s += 2) {
              if (0 != c.gR && 1 == yZ) {
                let r = s / l,
                  t = lerpColor(c.ch.c, i, r);
                stroke(hue(t), sa(t), br(t), gAL(c, o, c.aL, n, e.length));
              }
              let p = c.lines[s],
                g = c.lines[s + 1],
                m = [];
              if (a > 0) {
                let e = 2 == a ? t.hD : pA / 90;
                (m[0] = 0 - e),
                  (m[1] = 2 == a ? e : c.cm[0]),
                  (m[2] = 2 == a ? 1 - e : c.cm[1]),
                  (m[3] = 1 + e),
                  (p.x = lerp(p.x, g.x, r(m[0], m[1]))),
                  (g.x = lerp(p.x, g.x, r(m[2], m[3]))),
                  (p.y = lerp(p.y, g.y, r(m[0], m[1]))),
                  (g.y = lerp(p.y, g.y, r(m[2], m[3])));
              }
              line(p.x, p.y, g.x, g.y);
            }
          c.lines = [];
          let p = c.osw * c.sML,
            g = c.osw * c.sMH;
          c.sw = cn(c.sw + c.swS * gP * c.swDir, p, g);
          let m = c.swDir;
          if (
            ((c.swDir = c.sw <= p ? 1 : c.sw >= g ? -1 : c.swDir),
            m != c.swDir &&
              (rDM(c),
              (t.angleSetup += 1),
              t.angleSetup >= t.dsn.length * t.angleResetMult && sAS(t)),
            1 == eP)
          ) {
            let e = c.oX * c.evolveLow,
              o = c.oX * c.evolveHigh;
            (c.gX = cn(
              c.gX + r(0, c.evolveIter) * c.evolveDir,
              0.24 * c.oX,
              2 * c.oX
            )),
              (m = c.evolveDir),
              (c.evolveDir = c.gX >= o ? -1 : c.gX <= e ? 1 : c.evolveDir),
              m != c.evolveDir && gXR(c);
          }
        }
      }
      (5 == o || 6 == o || o >= 8) && pop();
    }
  }
}
function gAL(e, o, n, t, a) {
  7 == o && (o = bL);
  let s = n,
    c = 6 == mH && 30 == dY ? 255 : 9,
    l = hR + mI / 60 + sZ / 3600,
    i = 6 == o ? 1.5 : 2,
    p = hR < 12 ? 0 : 1,
    g =
      l > e.a[p][0] && l < e.a[p][1]
        ? map(l, e.a[p][0], e.a[p][1], e.a[p][2], 1)
        : l >= e.a[p][3 + 1 * p] && l < e.a[p][4 + 1 * p]
        ? map(l, e.a[p][3 + 1 * p], e.a[p][4 + 1 * p], 1, e.a[p][2])
        : l >= e.a[p][1] || l < e.a[p][3 + 1 * p]
        ? 1
        : e.a[p][2];
  g *= map(abs(l - 12), 0, 12, 1, e.a[p][5]);
  let m =
    l >= e.b[p][0] && l <= e.b[p][1]
      ? map(l, e.b[p][0], e.b[p][1], 1, e.b[p][2])
      : l >= e.b[p][3] && l <= e.b[p][4]
      ? map(l, e.b[p][3], e.b[p][4], e.b[p][2], 1)
      : l >= e.b[p][4] && l <= e.b[p][0]
      ? 1
      : e.b[p][2];
  m *= map(abs(l - 12), 0, 12, 1, e.b[p][5]);
  let h =
    l >= e.c[p][0] && l <= e.c[p][1]
      ? 1
      : l >= e.c[p][2] || l <= e.c[p][3]
      ? 1
      : l > e.c[p][3] && l <= e.c[p][4]
      ? map(l, e.c[p][3], e.c[p][4], 1, e.c[p][5])
      : l > e.c[p][6] && l <= e.c[p][7]
      ? map(l, e.c[p][6], e.c[p][7], 1, e.c[p][5])
      : l > e.c[p][8] && l <= e.c[p][2]
      ? map(l, e.c[p][8], e.c[p][2], e.c[p][5], 1)
      : l >= e.c[p][9] && l < e.c[p][10]
      ? map(l, e.c[p][9], e.c[p][10], e.c[p][5], 1)
      : e.c[p][5];
  h *= map(abs(l - 12), 0, 12, 1, e.c[p][11]);
  let f = map(o, 0, 6, m * n, n - g * abs(128 - n));
  return (
    (s = f),
    5 == o && (s = n + g * ((255 - n) / i)),
    6 == o && (s = n + g * ((255 - n) / i)),
    (o != bL && 7 != o) || (s = n * map(h, e.bLow[p], 1, 1, e.bLow[p])),
    o == kL && (s = f * h),
    8 == o && (s = 0 == aS ? n : n * map(t, 0, a, 0.01, h)),
    9 == o && (s = n * map(t, 0, a, 1, 0)),
    eO() &&
      5 != o &&
      6 != o &&
      9 != o &&
      (s = map(abs(max(eE[0], eE[1], eE[2]) - 1), 0, 1, 0.1 * s, s)),
    eO() &&
      9 == o &&
      (s = cn(
        map(abs(max(eE[0], eE[1], eE[2]) - 1), 0, 1, 2 * s, 0.1 * s),
        0,
        s
      )),
    min(s + r(-c, c), 230)
  );
}

function gMS(e, r, o, n, t) {
  return 2 == yZ
    ? color(
        70 + ((o + 1) % 2) * 112,
        25 + ((o + 1) % 2) * 230,
        64 + (o % 2) * 178,
        map(br(r), 0, 255, 30, 210)
      )
    : 3 == yZ
    ? lerpColor(
        color(65, 184, 33, map(lY, 0, 1, 0, 255)),
        color(24, 25, 225, alpha(r) / 2),
        map(br(r), 0, 255, 0, 1) - map(lX, 0, 1, -0.3, 0.7)
      )
    : 4 != yZ || (5 != n && 6 != n && 9 != n)
    ? 4 == yZ
      ? color(177, 242, 20, map(lY, 0, 1, 5, 255))
      : color(hue(r), sa(r), br(r), gAL(e, n, alpha(r), o, t.length))
    : color(46, 20, 230, map(lX, 0, 1, 5, 200));
}
function cDR(e, r) {
  return (
    (!(eE[0] > 0 || eE[2] > 0) || 7 != e) &&
    (1 != r || 0 != mH || 8 != dY) &&
    (0 == bM ||
      (1 == bM && 0 == r && (0 == e || e == bL || e == kL || 9 == e)) ||
      (1 == bM && e >= 5 && e < 7))
  );
}
function gLP() {
  var e =
    aR[0] && pf(aR[0]) >= 0
      ? pf(aR[0]) % 8
      : map(
          ((abs(uD.getTime() - nM.getTime()) / 1e3) % lc) / 86400,
          0,
          29,
          0,
          8
        ) % 8;
  return e;
}
function gMV(e, r, o, n, t) {
  return 0 == fU
    ? map(e, r, o, n, t)
    : e <= o / 2
    ? map(e, 0, o / 2, t / 2, t)
    : map(e, o / 2, o, 0, t / 2);
}
function gPH(e) {
  let r = (Date.now() % 6e4) / 1e3,
    o = 1 == tK ? r : sZ,
    n =
      lA[9].length > 0
        ? 4
        : 0 == pD
        ? gLP()
        : 10 == oK || (14 == oK && 2 == e)
        ? gMV(o, 0, 60, 0, 8)
        : (13 != oK && 14 != oK) || 0 != tK || 0 != e
        ? 12 == oK || ((13 == oK || 14 == oK) && 0 == e && 1 == tK)
          ? gMV(60 * hR * 60 + 60 * mI + o, 0, 86400, 0, 8)
          : (13 != oK && 14 != oK) || 1 != tK || 1 != e
          ? (13 != oK && 14 != oK) || 0 != tK || 1 != e
            ? 0
            : gMV(mI, 0, 60, 0, 8)
          : gMV(60 * mI + r, 0, 3600, 0, 8)
        : gMV(hR, 0, 24, 0, 8);
  return n;
}
function o(e) {
  return r(0, 1) < e;
}
function rnd() {
  return (
    (seed ^= seed << 13),
    (seed ^= seed >> 17),
    (seed ^= seed << 5),
    ((seed < 0 ? 1 + ~seed : seed) % 1e4) / 1e4
  );
}
function r(e, r) {
  return map(rnd(), 0, 1, min(e, r), max(e, r));
}
function pf(e) {
  return parseFloat(e);
}
function rv(e) {
  return e[pr(0, e.length)];
}
function pi(e) {
  return parseInt(e);
}
function pr(e, o) {
  let n = pi(r(e, o));
  return n;
}
function sa(e) {
  return saturation(e);
}
function br(e) {
  return brightness(e);
}
function cn(e, r, o) {
  return constrain(e, r, o);
}
function rSD() {
  (seed = seedMem),
    tF > 0 && (tL = max(vS, 0.2)),
    (kP = kS),
    (gC = gapChanceSave),
    (sM = shimmerSave),
    (sD = solidSave),
    (rC = pearlChanceSave),
    (cP = cZ),
    (cY = cN),
    (nS = pi(gNP())),
    (rA = rZ),
    (tM = mS),
    (tZ = cQ),
    (oV = new CH(fZ[cP])),
    rPT(),
    rMD(0, 3);
  for (let e = 0; e < 3; e++) rPX(e), rPS(e), rPX(e), rGG(e);
  rAL();
}
function rMM(e, r, o) {
  let n = 0;
  e.forEach(function (e) {
    -1 == o && (o = gPH(n++ % (oK - 11))),
      rSM(e, w / 2, h / 2, gMO(mF * mQ * gW, o, mB, r, e.fr, e.of1));
  });
}
function rMR(e) {
  e.forEach(function (e) {
    rSM(e, w / 2, h / 2, dER(0, 0, w, h, e.fr, e.offset, e.of1, e.of2));
  });
}
class CH {
  constructor(e) {
    sCH(this, e);
  }
  getColor(e, r) {
    return color(this.h[r][e % this.h[r].length]);
  }
}
class Ds {
  constructor(e, r) {
    stD(this, e, r);
  }
}
class MoR {
  constructor(e, r, o, n, t, a, s, c, l, i) {
    rSM(this, e, r, o),
      (this.mn = n),
      (this.bro = null),
      (this.of1 = t),
      (this.of2 = a),
      (this.fr = s),
      (this.ms = c),
      (this.mOutline = l),
      (this.code = i),
      sPM(this);
  }
}
let fs,
  mH,
  dY,
  mI,
  sZ,
  bv,
  mY,
  bN,
  mG,
  bV,
  mZ,
  dM,
  mW,
  pW,
  lG,
  hG,
  lM,
  hY,
  w,
  h,
  mF,
  hR,
  mK,
  aL,
  ah,
  mX,
  tP,
  rD,
  vS,
  cW,
  cV,
  mB,
  ss,
  mQ,
  tI,
  oV,
  cS,
  nM,
  pA,
  nL,
  nH,
  uD,
  rZ,
  cQ,
  cN,
  dC,
  nC,
  cZ,
  cP,
  lP,
  aR,
  sD,
  rC,
  aCL,
  aCH,
  aVD,
  fZ = [
    "#FCFBF6",
    "#FFFF6E",
    "#FFEC15",
    "#FF9E00",
    "#FF7B00",
    "#FFC515",
    "#ED4B24",
    "#FF7559",
    "#E30022",
    "#A16F15",
    "#CD3F0D",
    "#A60611",
    "#FF539C",
    "#FF91C0",
    "#F4007E",
    "#6E0024",
    "#FF69F3",
    "#FFA1F7",
    "#D600BF",
    "#FF7DBA",
    "#C00050",
    "#CF3F7B",
    "#1E0D4B",
    "#370CC4",
    "#754EF4",
    "#2A2161",
    "#3C27B9",
    "#7051C9",
    "#6563C8",
    "#9B93DC",
    "#9D9DFF",
    "#297FFF",
    "#1F69FF",
    "#007FE0",
    "#49C5FF",
    "#00A0EA",
    "#00234B",
    "#1366C3",
    "#3FC8B0",
    "#68AD0F",
    "#8DC14B",
    "#B3D687",
    "#00B04F",
    "#66E09E",
    "#009C54",
    "#16632D",
    "#86A93B",
    "#3FC8A3",
  ],
  eZ = [
    1638603206,
    0,
    1681964209,
    0,
    1712600236,
    0,
    1786556761,
    0,
    1817201196,
    0,
    1847847322,
    0,
    1921819819,
    0,
    1952456771,
    0,
    1652674288,
    1,
    1667905151,
    1,
    1741935524,
    1,
    1757268701,
    1,
    1772537619,
    1,
    1861894317,
    1,
    1877138528,
    1,
    1892500914,
    1,
    1697306367,
    2,
    1727894700,
    2,
    1771330317,
    2,
    1801929573,
    2,
    1832512064,
    2,
    1906525675,
    2,
    1937114089,
    2,
    1637312575,
    1,
    1787890368,
    1,
    1863105150,
    2,
    2552067053,
    2,
    3388877021,
    0,
    3988488840,
    0,
    4047220763,
    2,
    4197722451,
    0,
    4204876887,
    0,
    1995818475,
    0,
    2026462645,
    0,
    2072310930,
    0,
    2131065553,
    0,
    2176937926,
    0,
    2207578942,
    0,
    2250935463,
    0,
    2281572964,
    0,
    2312218584,
    0,
    2355527745,
    0,
    2386172472,
    0,
    2416817983,
    0,
    2490795234,
    0,
    2521431134,
    0,
    2536692082,
    0,
    2595436216,
    0,
    2641282354,
    0,
    2700035766,
    0,
    2745913567,
    0,
    2776554766,
    0,
    2819906429,
    0,
    2850545286,
    0,
    2881191296,
    0,
    2955144011,
    0,
    2985788645,
    0,
    3059770893,
    0,
    3090405694,
    0,
    3105662072,
    0,
    3164409234,
    0,
    3210254295,
    0,
    3240896228,
    0,
    3269005980,
    0,
    3314889220,
    0,
    3345530699,
    0,
    3388877021,
    0,
    3419517262,
    0,
    3450163663,
    0,
    1966518810,
    1,
    1982602942,
    1,
    1997118751,
    1,
    2012381702,
    1,
    2086380705,
    1,
    2101690271,
    1,
    2117023215,
    1,
    2221645496,
    1,
    2236878198,
    1,
    2310906637,
    1,
    2326240221,
    1,
    2341510627,
    1,
    2356859956,
    1,
    2430869083,
    1,
    2446108458,
    1,
    2461474341,
    1,
    2535489028,
    1,
    2550712813,
    1,
    2566088091,
    1,
    2581355413,
    1,
    2655355787,
    1,
    2670657888,
    1,
    2685998673,
    1,
    2790616438,
    1,
    2805851671,
    1,
    2879877130,
    1,
    2895212174,
    1,
    2910483115,
    1,
    2925829923,
    1,
    2999843812,
    1,
    3015078398,
    1,
    3030447759,
    1,
    3119687088,
    1,
    3135056863,
    1,
    3150329571,
    1,
    3224330448,
    1,
    3239625803,
    1,
    3254973750,
    1,
    3270217220,
    1,
    3359587038,
    1,
    3374825539,
    1,
    3464184472,
    1,
    3479455264,
    1,
    3494800202,
    1,
    5770685771,
    1,
    1983072776,
    2,
    2102952270,
    2,
    2235668865,
    2,
    2432079107,
    2,
    2460152924,
    2,
    2552045359,
    2,
    2564791749,
    2,
    2671924079,
    2,
    2804642484,
    2,
    2909276667,
    2,
    2924499161,
    2,
    3001053022,
    2,
    3029128675,
    2,
    3121018217,
    2,
    3133764542,
    2,
    3373616436,
    2,
    3478249068,
    2,
    3493470944,
    2,
  ],
  gZ = new Date(163097586e4),
  noSale = new Date(162332232e4),
  lastRecordSale = new Date(16003404e5),
  secondarySale = new Date(158247192e4),
  firstRecordSale = new Date(157223388e4),
  firstSale = new Date(15570099e5),
  firstSearch = new Date(149575944e4),
  beginCustomSoftware = new Date(139368234e4),
  firstOnePersonShow = new Date(11411082e5),
  firstRepresentation = new Date(109008138e4),
  stolenPaintings = new Date(10135212e5),
  theDream = new Date(99567624e4),
  bO = 0,
  mM = [0, 0, 0],
  nP = [0, 0, 0],
  nV = [0.9, 0.9, 0.9],
  uA = [0, 0, 0],
  uP = [0, 0, 0],
  gY = [1, 1, 1],
  cA = [0, 0, 0],
  pF = [0, 0, 0],
  pY = [0, 0.1, 0.2, 0.25, 0.25, 0.25, 0.33, 0.5],
  qY = [0, 0, 0],
  sL = [0, 0, 0],
  pT = [0, 0, 0],
  gC = 0,
  pQ = [0, 0, 0],
  cH = [0, 0, 0],
  lA = [],
  cC = 1,
  eE = [0, 0, 0],
  pK = [0, 0, 0],
  cO = [0],
  pC = [
    0.05,
    0.1,
    0.1,
    0.2,
    0.2,
    0.2,
    0.3,
    0.4,
    0.5,
    0.05,
    0.1,
    0.1,
    0.2,
    0.2,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.7,
    0.7,
    0.8,
    0.9,
  ],
  rW = [
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    6,
    12,
    24,
    48,
    59,
    96,
    192,
    384,
    768,
    979,
    1e3,
    5e3,
    7e3,
    12e3,
  ],
  pG = [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 10],
  pS = [
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    20,
    20,
    50,
  ],
  hK = [15, 15, 30, 30, 50, 50, 75, 75, 75],
  hC = [100, 120, 180, 135, 160, 160, 190, 210],
  cK = [12, 12, 12, 12, 13, 13, 14, 10, 10, 10],
  nW = [6, 6, 33, 4, 4, 33, 33, 33, 33, 8, 33, 12, 0],
  eI = [0.01, 0.001, 0.001, 0.001, 0.005, 1e-4, 1e-4, 5e-4],
  tV = [0.06, 0.1, 0.15, 0.2, 0.25],
  nQ = [0, 0, 0, 0, 0, 0],
  sM = 0.1,
  tB = ["#343538", "#f2f2f2", "#f8f7f3", "#cbcfd4"],
  rM = [1, 1, 1, 2, 2, 3, 3, 5, 5, 10, 20],
  rV = [0.1, 0.2, 0.5, 0.45, 0.7, 0.2, 0.7, 0.2, 0.1, 0.6, 0.2, 0.5],
  cE = [0, 6, 7, 8, 9, 10],
  bL = 3,
  kL = 4,
  kS = 0,
  kR = 0,
  aS = 0,
  kLM = 5,
  cT = 17,
  pH = 5,
  rP = 0,
  rQ = 0,
  pZ = 0,
  sC = 1,
  rS = 0,
  tS = [0, 0, 0],
  lZ = 0,
  uC = 0,
  wS = [1, 1, 1],
  uE = [1, 1, 1],
  sP = 0,
  qp = 0.7853982,
  rA = qp,
  pMC = [1, 1, 1],
  pM = [1, 1, 1],
  mP = 4,
  gL = 0.75,
  gM = 1.15,
  lL = -1,
  aW = 1,
  bg = "#000000",
  gW = 1,
  pL = 1,
  gP = 1,
  tL = 1,
  sH = 1,
  rO = 0,
  yZ = 1,
  gI = 0,
  gN = 0,
  cF = [0, 0, 0],
  wO = 0,
  mV = 0,
  fU = 0,
  oK = 0,
  pD = 0,
  tF = 0,
  cY = 0,
  pR = 0,
  aF = 0,
  lF = 0,
  pN = 0,
  dL = 0,
  dH = 0,
  gT = 0,
  eP = 0,
  oA = 0,
  fO = 0,
  mC = 0,
  aH = 0,
  bg2 = 0,
  zC = 0,
  kP = 0,
  sR = 0,
  hZ = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5],
  tZ = 0,
  iN = 0,
  nS = 0,
  sI = 0,
  eX = 0,
  aI = 0,
  hM = 0,
  tM = 0,
  rR = 0,
  mS = 0,
  tK = 0,
  bM = 0,
  hD = -1,
  oC = 0,
  pV = 0,
  dS = [0, 0, 0],
  iA = -1,
  lW = [1, 1, 1, 1],
  mT = 0,
  mN = 0,
  lc = 2551443,
  bE = 0,
  eS = 0,
  eM = 1,
  lT = 0,
  mD = 0,
  lX = 0.25,
  lY = 0.25,
  sF = 1,
  nY = 0,
  sT = 0,
  tH = [0, 0, 0],
  aVB = 0,
  aVBR = 0,
  aVBC = [0, 3, 5, 7, 9, 12, 15, 20, 30, 50, 70, 90, 99],
  fR = 1;

function genTokenData(projectNum) {
  let data = {};
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;
  data.tokenId = (
    projectNum * 1000000 +
    Math.floor(Math.random() * 1000) + 999
  ).toString();
  return data;
}
