export const Routes = {
  login: '/login',
  logout: '/logout',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
};

function routesFactory(endpoint: string) {
  return {
    list: `${endpoint}`,
    create: `${endpoint}/create`,

    edit: (slug: string) => {
      return `${endpoint}/${slug}/edit`;
    },

    details: (slug: string) => `${endpoint}/${slug}`,
  };
}
