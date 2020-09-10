var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    var that = this; //relationship1을 가르키는 this를 that에 저장
    this.friends.forEach(function (friend) {
      console.log(that.name, friend); //여기에서 새로운 function이 생겼으므로 여기에서의this와 한줄 위에서의 this가 가르키는 부분이 다르다
    });
  },
};
relationship1.logFriends();