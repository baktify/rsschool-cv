# Bakytzhan Kozhabayev

## Contacts

- **Address:** Zhanaozen, Kazakhstan
- **Telegram:** @baktify
- **Phone:** +7775 485 02 64
- **Email:** bakosyy@gmail.com
- **Github:** [baktify](https://github.com/baktify)

## About me

Hey, I am Bakytzhan Kozhabayev (Bako), 26 years old. I am self-learned web developer familiar with frontend and backend, always excited to learn new things.

## Skills

| Frontend   | Backend | Other  |
| ---------- | ------- | ------ |
| Javascript | Php     | Linux  |
| Typescript | Laravel | Git    |
| React      | Nginx   | Docker |
| HTML/CSS   | MySQL   | Figma  |
| Tailwind   |

## Code example

```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

```
function createPhoneNumber(numbers) {
  let res = '(';

  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];

    if (i < 3) {
      i !== 2 ? (res += el) : (res += `${el}) `);
    } else if (2 < i && i < 6) {
      i !== 5 ? (res += el) : (res += `${el}-`);
    } else {
      res += el;
    }
  }

  return res;
}
```

## Experience in web

- [Simple beautiful blog](https://github.com/baktify/simple-beautiful-blog)
- [File converter](https://github.com/baktify/file-converter)

## Education

- Bachelor in Vistula University (Warsaw, Poland)

## Languages

- English (C1)
- Russian (C1)
- Kazakh (Native)
- Turkish (B2)
