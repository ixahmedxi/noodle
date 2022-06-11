import { PrismaClient } from '@prisma/client';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
