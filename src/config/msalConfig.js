export const msalConfig = {
  auth: {
    clientId: 'f74e0fe0-cb51-4f56-9c51-113448078d3f', // This is the ONLY mandatory field that you need to supply.
    authority: 'https://b2ceducaiami.b2clogin.com/b2ceducaiami.onmicrosoft.com/B2C_1_sonasid', // Choose SUSI as your default authority.
    knownAuthorities: ['b2ceducaiami.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
    redirectUri: 'http://localhost:3000', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: 'http://localhost:3000', // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If 'true', will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: 'sessionStorage', // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to 'true' if you are having issues on IE11 or Edge
  }
}