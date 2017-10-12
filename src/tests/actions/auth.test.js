import { login, logout } from '../../actions/auth';

test('should return an action obj with uid and type login', () => {
    const uid = '123'
    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should return an action obj with type logout', () => {
    const action = logout();
    
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});