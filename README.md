# Notification Manager 

This is a sample Angular appliction that connects to an Azure AD secured backend API and exposes a set of sample CRUD operations.  

## Setup instructions

* Copy the `environment.ts` file in the environments folder to `environment.local.ts` and replace the service base url and AAD placeholders with valid values (Do not check this file in!).

* Test the application locally 
  
```
ng serve -c=local
```