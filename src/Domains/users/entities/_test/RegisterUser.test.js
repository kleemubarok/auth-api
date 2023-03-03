/* eslint-disable no-undef */
const RegisterUser = require('../RegisterUser');

describe('a Register user entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type spechification', () => {
    // Arrange
    const payload = {
      username: 123,
      fullname: true,
      password: 'abc',
    };

    // Action adn Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when username contains more than 50 chars', () => {
    // Arrange
    const payload = {
      username: 'acabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacab',
      password: 'abc',
      fullname: 'acab indonesia',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });

  it('should throw error when username contains restricted chars', () => {
    // Arrange
    const payload = {
      username: 'acab*baru',
      password: 'acab',
      fullname: 'acab indonesia',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
  });

  it('should register user correctly', () => {
    // Arrange
    const payload = {
      username: 'abc',
      fullname: 'abc indonesia',
      password: 'abc',
    };

    // Action
    const registeredUser = new RegisterUser(payload);

    // Assert
    expect(registeredUser.username).toEqual(payload.username);
    expect(registeredUser.fullname).toEqual(payload.fullname);
    expect(registeredUser.password).toEqual(payload.password);
  });
});
