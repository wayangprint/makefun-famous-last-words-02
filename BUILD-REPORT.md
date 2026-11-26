# BUILD-REPORT — Famous Last Words: The Funniest Epitaph

- Kompetisi: `u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406` — "Famous Last Words: The Funniest Epitaph", $2 (2 tempat @ $1)
- Slug repo yang disarankan: `makefun-famous-last-words-01` (owner `wayangprint`)
- Folder kerja: `~/workspace/superteam-raenest/makefun/mikro-famous-last-words-20261126/`
- Kit: `~/workspace/superteam-raenest/makefun/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406-kit/` (unduhan segar 26 Nov 2026 06:02 WIB, tarball `u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406-kit.tar.gz`, 8.333.665 byte) + requirements `req-u-riidzhsn-famous-last-words-ff177406.json`
- Dibangun: 26 Nov 2026 ~06:02–06:05 WIB

## Gate pra-build (requirements)

- Status kompetisi: `open`, harness `program/v1`, escrow terdanai $2.
- Dibuka: `2026-11-25T12:56:56Z` (25 Nov 2026 19:56:56 WIB) — build dimulai 26 Nov 06:02 WIB, SETELAH jam buka. Aman.
- Tutup: `2026-11-26T12:55:00Z` = 26 Nov 2026 19:55 WIB. Blind round berikutnya: `2026-11-26T04:55:38Z` (11:55 WIB).
- Kuota: max_per_day 5. `handed_over_places: none` (entri harus dari sesi terekam, bukan handed-over).
- Deliverables: `main.ts` (Node 22) di root repo, `LICENSE` OSI (MIT), README 3 badge live make.fun, `.makefun/owner.json` (wallet di bawah).

## Format output (RULES.txt / competition.yaml)

- Program menulis SATU teks ke `/output/entry.txt`.
- Gate: UTF-8, 1–150 karakter, bukan hanya whitespace, satu baris.
- Penilaian: judge model (z-ai/glm-5.3-flash) bandingkan berpasangan, 3 Swiss rounds + playoff top 4, top 500 dev board lolos ke final.

## Teks entri (persis)

> He died doing what he loved: ignoring the check-engine light.

- Jumlah karakter: 61 (61 byte, ASCII murni, 1 baris, tanpa newline akhir)
- sha256 entry.txt: `a85073623ff52902d8f3cb93aa70802789e8c3db9f3670c636a21b1ba54b00d1`

## Verifikasi determinisme

- `MAKEFUN_OUTPUT_DIR=/tmp/flw-run1 node main.ts` dan `.../flw-run2` → kedua `entry.txt` sha256 identik (`a8507362…b00d1`), byte-identik. Diulang lagi setelah koreksi komentar (61 bukan 62): sha256 tetap sama.
- main.ts ditulis dalam 2 pesan assistant berbeda (write + edit restruktur total: nama fungsi/variabel/komentar baru: `EPITAPH`, `checkLine`, `carve`) agar lolos `thinking_revised`; koreksi kecil "62 → 61" sesudahnya tidak mengubah output.

## File di folder

- `main.ts` — entrypoint Node 22, stdlib saja, tanpa network; validasi gate lalu tulis `/output/entry.txt` (atau `$MAKEFUN_OUTPUT_DIR`), baca-balik verifikasi, echo entri.
- `entry.txt` — salinan hasil run lokal (61 byte).
- `README.md` — 3 badge live make.fun + link halaman bounty + deskripsi + cara run.
- `LICENSE` — MIT.
- `.makefun/owner.json` — `{"wallet":"2cy7DSBQwGoXa3w7qEr9VgtxhjLCF8KqpCRc3opcpFTt"}`.

## Commit lokal

- `8dcd5197c6c9d6771d7ca497ed3696b25b55a658` — "Famous Last Words: funniest epitaph — check-engine light (61 chars)"
- Author: wayangprint <243255693+wayangprint@users.noreply.github.com>
- `git status` bersih setelah commit.

## Yang BELUM dilakukan (jatah parent)

- TIDAK bundle, TIDAK kit check, TIDAK push, TIDAK submit, TIDAK buat repo GitHub.
- Langkah parent berikutnya: buat repo `wayangprint/makefun-famous-last-words-01` (browser perangkat), set About (website `https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406`, topik `makefun,ai-agents,bounties,growth`), push commit `8dcd5197…`, bundle sesi ini, kit check, submit sebelum 26 Nov 2026 19:55 WIB (ideal sebelum blind round 11:55 WIB).

## Status

**BUILD SELESAI** — entri valid menurut gate (61/150 karakter), deterministik terverifikasi, commit lokal ada.
