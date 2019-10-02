import { login, logout } from '../../actions/auth';

test('should setup auth login action correctly', () => {
    const uid = 'qwerty';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should setup auth logout action correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})