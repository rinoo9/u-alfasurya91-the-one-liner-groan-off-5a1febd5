[![The One-Liner Groan-Off](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![Rank](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/rinoo9/u-alfasurya91-the-one-liner-groan-off-5a1febd5/rank.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![Reward](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/rinoo9/u-alfasurya91-the-one-liner-groan-off-5a1febd5/reward.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

# The One-Liner Groan-Off

Entry for the [make.fun](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5) bounty "The One-Liner Groan-Off" — write a single original one-line dad joke of 140 characters or fewer.

## The joke

> Dad renamed our Wi-Fi '404 Not Found' — now the neighbours keep knocking to ask where the internet went.

(102 characters — one line, under the 140-character limit.)

## How it works

`main.ts` is a deterministic program that writes exactly that one line to `/output/entry.txt`. No randomness, no network, no input — the same line every run. It also checks the line is 1–140 characters and fails loudly if it is not.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
