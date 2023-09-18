---
id: arcloud-integrations-sso
title: AR Cloud SSO Integration
sidebar_label: SSO
sidebar_position: 1
date: 01/09/2023
tags: [ARCloud, Cloud, Keycloak, SSO, IdP]
keywords: [ARCloud, Cloud, Keycloak, SSO, IdP]
description: "Add SSO support to your AR Cloud installation using an external IdP"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Keycloak instance bundled with an AR Cloud installation allows [integrating an external Identity Provider][idp] to
support [Single Sign-On][sso-protocols] for its users. This page contains short instructions of the configuration steps
needed to prepare such an integration. For details, please refer to the [Keycloak documentation][idp].

## SAML 2.0

SAML 2.0 is an XML-based protocol that uses security tokens containing assertions to pass information about a principal
(usually an end user) between a SAML authority, named an **Identity Provider**, and a SAML consumer, named a **Service
Provider**. Keycloak, in our scenario, acts as the latter.

Different identity solutions might have slightly different names for the fields that need to be copied from Keycloak. In
general the process requires to create an application / connection in the identity solution and link it with Keycloak
using the following fields:

* The **Redirect URI** / **Assertion Consumer Service (ACS) URL** / **Application Callback URL** / **Single Sign On
    URL** - used to send a HTTP POST request with the `SAMLResponse` after a successful user login using the Identity
    Provider
* The **Service Provider entity ID** / **SP entity ID** / **Audience URI** / **Audience Restriction** - restricts the
    audience to the specified Service Provider configuration (one Service Provider might have multiple Identity
    Providers configured)
* The **SAML entity descriptor** / **Metadata URL** / **SAML Metadata URL** / **Identity Provider Metadata** - a link to
    an XML document with all the information necessary to configure the Identity Provider, e.g. entity ID, signing
    certificate, URLs of the endpoints, supported attributes

### Configuration

To configure a [SAML-based identity provider][saml], follow the steps below:

1. Access Keycloak by appending `/auth/` to your **Enterprise Console** URL, or from within the **Enterprise Console**
   interface by clicking on **Users** in the top menu.
1. Log in using the generated credentials for the administrator account. The credentials are provided after a successful
   installation.
1. Select the `magicleap` realm from the top-left corner.
1. Click on **Identity providers** in the left menu.
1. Select **SAML v2.0** from the list of supported providers.
1. Enter an **Alias** for your Identity Provider. Changing this value causes the **Redirect URI** to change, which requires an
   update in the configuration of the identity solution.

<Tabs groupId="identity-provider">
  <TabItem value="okta" label="Okta" default>

:::note Okta documentation
Detailed instructions can be found in the Okta documentation:

[Create SAML app integrations][okta-saml]
:::

7. Open the admin panel for your Okta instance.
1. Expand **Applications** in the left menu and click on **Applications**.
1. Click on the **Create App Integration** button.
1. Select **SAML 2.0** as the **Sign-in method** and click on **Next**.
1. Enter an **App name** and click on **Next**.
1. Copy the **Redirect URI** value from Kecyloak and paste it in Okta as **Single sign-on URL**. The value should be in
   the following format:

   ```
   https://{your-domain}/auth/realms/magicleap/broker/{your-alias}/endpoint`
   ```

1. Copy the **Service provider entity ID** value from Keycloak and paste it in Okta as **Audience URI (SP Entity ID)**.
1. Complete the form with your custom configuration, if needed, and click on **Next**.
1. Select **I'm a software vendor. I'd like to integrate my app with Okta** and click on **Finish**.
1. Copy the generated **Metadata URL** for the application in Okta and paste it in Keycloak as **SAML entity
   descriptor**.
1. After a successful verification of the metadata, the Okta application can be added in Keycloak by clicking on
   **Add**.
1. [Assign the users][okta-assign] you want to have access to Keycloak using the created application in Okta.


  </TabItem>
  <TabItem value="auth0" label="Auth0">

:::note Auth0 documentation
Detailed instructions can be found in the Auth0 documentation:

[Configure Auth0 as SAML Identity Provider][auth0-saml]
:::

7. Open the admin panel for your Auth0 instance.
1. Expand **Applications** in the left menu and click on **Applications**.
1. Click on the **Create Application** button.
1. Enter a **Name**, select **Regular Web Applications** and click on **Create**.
1. Click on the **Settings** tab, scroll down and expand **Advanced Settings**, click on the **Endpoints** tab and copy
   the **SAML Metadata URL** value from the **SAML** section.
1. Paste the copied URL in Keycloak as **SAML entity descriptor**.
1. After a successful verification of the metadata, the Auth0 application can be added in Keycloak by clicking on
   **Add**.
1. Click on the **Addons** tab for your application in Auth0, click on **SAML2 WEB APP** and then on the **Settings**
   tab in the popup window.
1. Copy the **Redirect URI** value from Kecyloak and paste it in Auth0 as **Application Callback URL**.
1. Copy the **Service provider entity ID** value from Keycloak and include it in Auth0 under **Settings** as values for
   the `audience` and `logout.callback` fields in the following format:

   ```json
   {
     "audience": "https://{your-domain}/auth/realms/magicleap",
     "logout": {
       "callback": "http://{your-domain}/auth/realms/magicleap/broker/{your-alias}/endpoint"
     },
     "nameIdentifierProbes": [
       "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
     ],
     "nameIdentifierFormat": "urn:oasis:names:tc:SAML:2.0:nameid-format:email"
   }
   ```

   The two additional fields are responsible for using the email address as the username in Keycloak instead of the
   ID autogenerated by Auth0.

1. Click on **Enable** to save the configuration.


  </TabItem>
</Tabs>

## Verification

1. Log out of the **Enterprise Console**. Underneath the standard **Sign In** button should be a link to log in with
   your Identity Provider alias.
1. Use the credentials for one of the users from the Identity Provider.
1. Fill in the required user data in Keycloak to complete the process (this is required if the user does not yet exist
   in Keycloak and needs to be done only once).

## Troubleshooting

1. After providing credentials in the Identity Provider and a redirect back to Keycloak the "Login timeout. Please sign
   in again." error is shown:
    - The clock is not synchronized between Keycloak and the Identity Provider.
    - Edit your Identity Provided in Keycloak and set the "Allowed clock skew" to a couple of seconds.


[idp]: https://www.keycloak.org/docs/latest/server_admin/index.html#_identity_broker
[sso-protocols]: https://www.keycloak.org/docs/latest/server_admin/index.html#sso-protocols
[saml]: https://www.keycloak.org/docs/latest/server_admin/index.html#saml-v2-0-identity-providers
[okta-saml]: https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_saml.htm
[okta-assign]: https://help.okta.com/en-us/content/topics/provisioning/lcm/lcm-assign-app-user.htm
[auth0-saml]: https://auth0.com/docs/authenticate/protocols/saml/saml-sso-integrations/configure-auth0-saml-identity-provider#manually-configure-sso-integrations
