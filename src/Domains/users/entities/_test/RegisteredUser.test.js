/* eslint-disable no-undef */
const RegisteredUser = require('../RegisteredUser');

describe('a RegisteredUser entities', () => {
  it('shouold throw error when payload did not contain neede property', () => {
    // Arrange
    const payload = {
      username: 'abacabac',
      fullname: 'abac indonesia',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      username: 'abacabac',
      fullname: 'abac Indonesia',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create registeredUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      username: 'abacabac',
      fullname: 'abac Indonesia',
    };

    // Action
    const registeredUser = new RegisteredUser(payload);

    // Assert
    expect(registeredUser.id).toEqual(payload.id);
    expect(registeredUser.username).toEqual(payload.username);
    expect(registeredUser.fullname).toEqual(payload.fullname);
  });
});
