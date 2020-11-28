import { useTypedSelector } from '../../redux/store';

export const useUserAuthentication = () => {
  const email = useTypedSelector((state) => state.user.email);

  const isLogged = !!email;

  return {
    isLogged,
    email,
  };
};
