import { CookieUtility } from './utilities/cookieUtility.js';
export let user = {
  username: 'guest',
  load: function () {
    const loadingUser = CookieUtility.get('username');
    if (loadingUser !== null) user.username = loadingUser;
  },
  save: function () {
    CookieUtility.set('username', user.username, new Date('2021-11-30'));
  },
  set: function (username) {
    user.username = username;
  }
};
