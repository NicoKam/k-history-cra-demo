import { createBrowserHistory, createHashHistory } from 'history';
import { createBrowserHistory as kBrowserHistory, createHashHistory as kHashHistory } from 'k-history';

export const HISTORY_MODE_BROWSER = 'browser';
export const HISTORY_MODE_HASH = 'hash';
export const HISTORY_MODE_K_BROWSER = 'k-history:browser';
export const HISTORY_MODE_K_HASH = 'k-history:hash';

export const historyOption = [
  { label: 'history:browser', value: HISTORY_MODE_BROWSER },
  { label: 'history:hash', value: HISTORY_MODE_HASH },
  { label: 'k-history:browser', value: HISTORY_MODE_K_BROWSER },
  { label: 'k-history:hash', value: HISTORY_MODE_K_HASH },
];

export const getHistoryMode = () => {
  const historyMode = window.sessionStorage.getItem('historyMode');
  return historyMode || HISTORY_MODE_BROWSER;
};

export const getHistory = () => {
  const historyMode = window.sessionStorage.getItem('historyMode');
  switch (historyMode) {
    case HISTORY_MODE_HASH:
      return createHashHistory();
    case HISTORY_MODE_K_BROWSER:
      return kBrowserHistory();
    case HISTORY_MODE_K_HASH:
      return kHashHistory();
    default:
      return createBrowserHistory();
  }
};

export const changeHistoryMode = (isKHistory, isBrowser) => {
  let mode = isBrowser ? 'browser' : 'hash';
  if (isKHistory) {
    mode = 'k-history:' + mode;
  }

};

export const setHistoryMode = (mode) => {
  window.sessionStorage.setItem('historyMode', mode);
  window.location.href = '/';
}
