function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];

  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };

  this.printFriendList = function () {
    for (let i = 0; i < this.friendList.length; i++) {
      console.log(`Friend${i + 1}: ${this.friendList[i]}`);
    }
  };

  this.findMutualsWith = function (newUser) {
    let newUserFriends = newUser.friendList;
    let currentUserFriends = this.friendList;
    let commonFriends = [];

    for (let i = 0; i < currentUserFriends.length; i++) {
      if (newUserFriends.includes(currentUserFriends[i])) {
        commonFriends.push(currentUserFriends[i]);
      }
    }
    return commonFriends;
  };
}

const user1 = new User("Deepak");
user1.addFriend("myself");
user1.addFriend("someone");

const user2 = new User("Prem");
user2.addFriend("Akash");
user2.addFriend("loki");
user2.addFriend("myself");

user2.printFriendList();

console.log(user1.findMutualsWith(user2));
