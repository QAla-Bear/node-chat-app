const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Matthias',
      room: 'Bars & Beers'
    }, {
      id: '2',
      name: 'Squirrel',
      room: 'Hiking Maniacs'
    }, {
      id: '3',
      name: 'Tiger',
      room: 'Bars & Beers'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'Room A'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });
  it('should return names for node course', () => {
    var userList = users.getUserList('Bars & Beers');
    expect(userList).toEqual(['Matthias', 'Tiger']);
  });
});
