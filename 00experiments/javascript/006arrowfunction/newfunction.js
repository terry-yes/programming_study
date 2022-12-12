var relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends () {
    this.friends.forEach(friend => {
      console.log(this.name, friend); //여기에서 새로운 function이 생겼으므로 여기에서의this와 한줄 위에서의 this가 가르키는 부분이 다르다
    });
  },
};
relationship2.logFriends();