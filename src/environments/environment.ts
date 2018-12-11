// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const serviceBaseURL = '[ENTER_YOUR_API_BASE_URL]';

export const environment = {
  production: false,
  config: {
    tenant: '[ENTER_YOUR_TENANT_ID]',
    clientId: '[ENTER_YOUR_CLIENT_ID]',
    endpoints: {
      'https://graph.microsoft.com': '[ENTER_YOUR_CLIENT_ID]'
    },
    notificationsAPI: serviceBaseURL + '/Notifications',
    graphProfileAPI: 'https://graph.microsoft.com/v1.0/me'
  }
};

