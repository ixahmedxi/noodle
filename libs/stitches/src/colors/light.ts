import {
  amber,
  blue,
  bronze,
  brown,
  crimson,
  cyan,
  gold,
  grass,
  gray,
  indigo,
  lime,
  mauve,
  mint,
  olive,
  orange,
  pink,
  plum,
  purple,
  red,
  sage,
  sand,
  sky,
  slate,
  teal,
  tomato,
  violet,
  yellow,
} from '@radix-ui/colors';

export const light = {
  ...gray,
  ...mauve,
  ...slate,
  ...sage,
  ...olive,
  ...sand,
  ...tomato,
  ...red,
  ...crimson,
  ...pink,
  ...plum,
  ...purple,
  ...violet,
  ...indigo,
  ...blue,
  ...cyan,
  ...teal,
  ...grass,
  ...brown,
  ...orange,
  ...sky,
  ...mint,
  ...lime,
  ...yellow,
  ...amber,
  ...gold,
  ...bronze,
};

export const lightGroups = [
  ...new Set(Object.keys(light).map((key) => key.replace(/[0-9]/g, ''))),
];
