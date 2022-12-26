export const isLogin = () => {
  const stateUser = useState('user')
  return stateUser.value ? true : false;
};