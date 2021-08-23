import {useMemo} from 'react';

export default function useId() {
  return useMemo(() => `deskpass-${Math.round(Math.random() * 1e9)}`, []);
}
