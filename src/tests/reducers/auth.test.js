import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = '123';
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer(undefined, action);

    expect(state).toEqual({ uid })
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
});