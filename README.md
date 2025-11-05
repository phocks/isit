# isit

A simple function to check if it is a certain day of the week.

## Usage

Install with `deno add jsr:@phocks/isit` or `npx jsr add @phocks/isit`.

```ts
import { isit } from "@phocks/isit";

isit("Friday") ? "Hooray!" : "Boo!";
```

Or with an enum.

```ts
import { type Days, isit } from "@phocks/isit";

isit(Days.Friday) ? "Hooray!" : "Boo!";
```

## Options

You can offset the timezone and also pass in a Date.

```ts
isit("Friday", { offsetHours: 10, when: new Date("2021-01-01") });
```

## Notes

I might add other things like `isit("morning")` or `isit("weekend")` in the future, but probably not for a while.

## License

MIT

## Author

[Joshua Byrd](https://bne.social/@phocks)
