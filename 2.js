const fn = (friends) => {
  let arr = [];
  for (const friend of friends) {
    console.log(friend);
    if (friend.length % 2 === 0) {
      arr.push(friend);
    }
  }
  return arr;
};

const friendsName = ["qwwr", "sdfer", "dfcxsa", "cvbx", "cvdfe"];
console.log(fn(friendsName));
