import type { ReactElement } from 'react';

declare global {
  type RenderableChild = string | number | ReactElement;
}
