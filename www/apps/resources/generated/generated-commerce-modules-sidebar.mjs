const generatedgeneratedCommerceModulesSidebarSidebar = {
  "sidebar_id": "commerce-modules",
  "title": "Commerce Modules",
  "items": [
    {
      "loaded": true,
      "type": "link",
      "title": "Overview",
      "path": "/commerce-modules",
      "children": []
    },
    {
      "type": "separator"
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "api-key",
      "title": "API Key Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/api-key",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/api-key/concepts",
              "title": "API Key Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/api-key/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+apiKey,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the API Key Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Use a Publishable API Key in the Storefront",
              "path": "/resources/storefront-development/publishable-api-keys",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+apiKey",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage API Key features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Publishable API Keys",
              "path": "/user-guide/settings/developer/publishable-api-keys",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Secret API Keys",
              "path": "/user-guide/settings/developer/secret-api-keys",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the API Key Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/api-key/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+apiKey",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createApiKeysWorkflow",
                      "path": "/resources/references/band-store-workflows/createApiKeysWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createDefaultsWorkflow",
                      "path": "/resources/references/band-store-workflows/createDefaultsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteApiKeysWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteApiKeysWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "revokeApiKeysWorkflow",
                      "path": "/resources/references/band-store-workflows/revokeApiKeysWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateApiKeysWorkflow",
                      "path": "/resources/references/band-store-workflows/updateApiKeysWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+apiKey",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createApiKeysStep",
                      "path": "/resources/references/band-store-workflows/steps/createApiKeysStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteApiKeysStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteApiKeysStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "revokeApiKeysStep",
                      "path": "/resources/references/band-store-workflows/steps/revokeApiKeysStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateApiKeysStep",
                      "path": "/resources/references/band-store-workflows/steps/updateApiKeysStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/api-key/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+apiKey",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the API Key Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "apiKey",
                      "path": "/resources/references/js-sdk/admin/apiKey",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/api-key/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "api-key-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "API Key Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/api-key",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/api_key/IApiKeyModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/authenticate",
                      "title": "authenticate",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/createApiKeys",
                      "title": "createApiKeys",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/deleteApiKeys",
                      "title": "deleteApiKeys",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/listAndCountApiKeys",
                      "title": "listAndCountApiKeys",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/listApiKeys",
                      "title": "listApiKeys",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/retrieveApiKey",
                      "title": "retrieveApiKey",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/revoke",
                      "title": "revoke",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/updateApiKeys",
                      "title": "updateApiKeys",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/upsertApiKeys",
                      "title": "upsertApiKeys",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "api-key-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "API Key Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/api-key/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/api_key_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/api-key/models/ApiKey",
                      "title": "ApiKey",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "auth",
      "title": "Auth Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/auth",
          "title": "Overview",
          "children": []
        },
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/auth/module-options",
          "title": "Module Options",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/auth-identity-and-actor-types",
              "title": "Identity and Actor Types",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/auth-providers",
              "title": "Auth Module Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/auth-flows",
              "title": "Auth Flow with Module",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/authentication-route",
              "title": "Auth Flow with Routes",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/mfa",
              "title": "Multi-Factor Authentication",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+auth",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Auth Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/create-actor-type",
              "title": "Create Actor Type",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/auth/provider",
              "title": "Create Auth Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Create MFA Provider",
              "path": "/resources/references/auth/mfa-module-provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Create Recovery Code MFA Provider",
              "path": "/resources/references/auth/recovery-code-mfa-module-provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Custom Admin Authentication",
              "path": "/resources/how-to-tutorials/how-to/admin/auth",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/reset-password",
              "title": "Handle Password Reset Event",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Integrate Okta",
              "path": "/resources/integrations/guides/okta",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/link-provider-identity",
              "title": "Link Provider to Existing Actor",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Phone Authentication",
              "path": "/resources/how-to-tutorials/tutorials/phone-auth",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Restrict Order Retrieval",
              "path": "/resources/commerce-modules/order/secure-order-retrieval",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Restrict Return Creation",
              "path": "/resources/commerce-modules/order/secure-return-creation",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/email-verification",
              "title": "Send Email Verification",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+auth,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Auth Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Log-out Customer in Storefront",
              "path": "/resources/storefront-development/customers/log-out",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Login Customer in Storefront",
              "path": "/resources/storefront-development/customers/login",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Register Customer in Storefront",
              "path": "/resources/storefront-development/customers/register",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Register Customer with Email Verification in Storefront",
              "path": "/resources/storefront-development/customers/verify-account",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Reset Customer Password in Storefront",
              "path": "/resources/storefront-development/customers/reset-password",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Logged-In Customer in Storefront",
              "path": "/resources/storefront-development/customers/retrieve",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Third-Party or Social Login in Storefront",
              "path": "/resources/storefront-development/customers/third-party-login",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+auth",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Auth features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Login Options",
              "path": "/user-guide/tips/login-options",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Reset Password",
              "path": "/user-guide/reset-password",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Providers",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/auth-providers/emailpass",
              "title": "Emailpass Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/auth-providers/google",
              "title": "Google Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/auth-providers/github",
              "title": "GitHub Provider",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Auth Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+auth",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "acceptInviteWorkflow",
                      "path": "/resources/references/band-store-workflows/acceptInviteWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomerAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/createCustomerAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createUserAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/createUserAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "generateResetPasswordTokenWorkflow",
                      "path": "/resources/references/band-store-workflows/generateResetPasswordTokenWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeCustomerAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/removeCustomerAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeUserAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/removeUserAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "requestVerificationWorkflow",
                      "path": "/resources/references/band-store-workflows/requestVerificationWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setAuthAppMetadataWorkflow",
                      "path": "/resources/references/band-store-workflows/setAuthAppMetadataWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+auth",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPasswordResetTokenStep",
                      "path": "/resources/references/band-store-workflows/steps/createPasswordResetTokenStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteAuthIdentityStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteAuthIdentityStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "requestVerificationStep",
                      "path": "/resources/references/band-store-workflows/steps/requestVerificationStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setAuthAppMetadataStep",
                      "path": "/resources/references/band-store-workflows/steps/setAuthAppMetadataStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "autogenerate_tags": "jsSdk+auth",
              "autogenerate_as_ref": true,
              "sort_sidebar": "alphabetize",
              "children": [
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "callback",
                  "path": "/resources/references/js-sdk/auth/callback",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "createUser",
                  "path": "/resources/references/js-sdk/auth/createUser",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "listProviders",
                  "path": "/resources/references/js-sdk/auth/listProviders",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "login",
                  "path": "/resources/references/js-sdk/auth/login",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "logout",
                  "path": "/resources/references/js-sdk/auth/logout",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "refresh",
                  "path": "/resources/references/js-sdk/auth/refresh",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "register",
                  "path": "/resources/references/js-sdk/auth/register",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "resetPassword",
                  "path": "/resources/references/js-sdk/auth/resetPassword",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "ref",
                  "title": "updateProvider",
                  "path": "/resources/references/js-sdk/auth/updateProvider",
                  "children": []
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/auth/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/auth/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "auth-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Auth Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/auth",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/auth/IAuthModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/authenticate",
                      "title": "authenticate",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/confirmAuthVerification",
                      "title": "confirmAuthVerification",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/consumePasswordResetToken",
                      "title": "consumePasswordResetToken",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/createAuthIdentities",
                      "title": "createAuthIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/createAuthMfaChallenge",
                      "title": "createAuthMfaChallenge",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/createPasswordResetToken",
                      "title": "createPasswordResetToken",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/createProviderIdentities",
                      "title": "createProviderIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/deleteAuthIdentities",
                      "title": "deleteAuthIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/deleteProviderIdentities",
                      "title": "deleteProviderIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/disableAuthMfa",
                      "title": "disableAuthMfa",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/generateAuthMfaRecoveryCodes",
                      "title": "generateAuthMfaRecoveryCodes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/listAndCountAuthIdentities",
                      "title": "listAndCountAuthIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/listAndCountAuthVerifications",
                      "title": "listAndCountAuthVerifications",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/listAuthIdentities",
                      "title": "listAuthIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/listAuthMfa",
                      "title": "listAuthMfa",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/listAuthProviders",
                      "title": "listAuthProviders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/listAuthVerifications",
                      "title": "listAuthVerifications",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/listProviderIdentities",
                      "title": "listProviderIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/register",
                      "title": "register",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/requestAuthVerification",
                      "title": "requestAuthVerification",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/retrieveAuthIdentity",
                      "title": "retrieveAuthIdentity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/retrieveAuthMfa",
                      "title": "retrieveAuthMfa",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/retrieveAuthVerification",
                      "title": "retrieveAuthVerification",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/retrieveProviderIdentity",
                      "title": "retrieveProviderIdentity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/startAuthMfa",
                      "title": "startAuthMfa",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/updateAuthIdentities",
                      "title": "updateAuthIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/updateProvider",
                      "title": "updateProvider",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/updateProviderIdentities",
                      "title": "updateProviderIdentities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/useAuthMfaRecoveryCode",
                      "title": "useAuthMfaRecoveryCode",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/validateAuthIdentity",
                      "title": "validateAuthIdentity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/validateCallback",
                      "title": "validateCallback",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/verifyAuthMfa",
                      "title": "verifyAuthMfa",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/verifyAuthMfaChallenge",
                      "title": "verifyAuthMfaChallenge",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "auth-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Auth Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/auth/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/auth_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/models/AuthIdentity",
                      "title": "AuthIdentity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/models/AuthMfaFactor",
                      "title": "AuthMfaFactor",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/models/AuthMfaRecoveryCode",
                      "title": "AuthMfaRecoveryCode",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/models/AuthPasswordResetToken",
                      "title": "AuthPasswordResetToken",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/models/AuthVerification",
                      "title": "AuthVerification",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/auth/models/ProviderIdentity",
                      "title": "ProviderIdentity",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "cart",
      "title": "Cart Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/cart",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/concepts",
              "title": "Cart Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/promotions",
              "title": "Promotion Adjustments",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/tax-lines",
              "title": "Tax Lines",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/links-to-other-modules",
              "title": "Links to Other Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "cart+server",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Cart Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Add Gift Message",
              "path": "/resources/how-to-tutorials/tutorials/gift-message",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Agentic Commerce",
              "path": "/resources/how-to-tutorials/tutorials/agentic-commerce",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/sales-channel-availability",
              "title": "Enforce Sales Channel Availability",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/extend",
              "title": "Extend Module",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Bundled Products",
              "path": "/resources/recipes/bundled-products/examples/standard",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Custom Line Item Pricing in BandStore",
              "path": "/resources/examples/guides/custom-item-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement First-Purchase Discount",
              "path": "/resources/how-to-tutorials/tutorials/first-purchase-discounts",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Loyalty Points",
              "path": "/resources/how-to-tutorials/tutorials/loyalty-points",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Quote Management",
              "path": "/resources/examples/guides/quote-management",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/cart-totals",
              "title": "Retrieve Cart Totals",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Send Abandoned Cart Notification",
              "path": "/resources/how-to-tutorials/tutorials/abandoned-cart",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+cart,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Cart Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 1: Enter Email",
              "path": "/resources/storefront-development/checkout/email",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 2: Set Address",
              "path": "/resources/storefront-development/checkout/address",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 3: Choose Shipping Method",
              "path": "/resources/storefront-development/checkout/shipping",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 4: Choose Payment Provider",
              "path": "/resources/storefront-development/checkout/payment",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 5: Complete Cart",
              "path": "/resources/storefront-development/checkout/complete-cart",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Create Cart Context in Storefront",
              "path": "/resources/storefront-development/cart/context",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Create Cart in Storefront",
              "path": "/resources/storefront-development/cart/create",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Express Checkout with BandStore",
              "path": "/resources/storefront-development/guides/express-checkout",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Mobile App with React Native, Expo, and BandStore",
              "path": "/resources/storefront-development/guides/react-native-expo",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Cart Promotions in Storefront",
              "path": "/resources/storefront-development/cart/manage-promotions",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Cart's Items in Storefront",
              "path": "/resources/storefront-development/cart/manage-items",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Payment with Stripe in React Storefront",
              "path": "/resources/storefront-development/checkout/payment/stripe",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Cart in Storefront",
              "path": "/resources/storefront-development/cart/retrieve",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Show Cart Totals",
              "path": "/resources/storefront-development/cart/totals",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Update Cart in Storefront",
              "path": "/resources/storefront-development/cart/update",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Cart Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+cart",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addGiftCardToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addGiftCardToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addShippingMethodToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addShippingMethodToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addStoreCreditsToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addStoreCreditsToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "completeCartWorkflow",
                      "path": "/resources/references/band-store-workflows/completeCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCartWorkflow",
                      "path": "/resources/references/band-store-workflows/createCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshCartItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshCartItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshCartShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshCartShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeGiftCardFromCartWorkflow",
                      "path": "/resources/references/band-store-workflows/removeGiftCardFromCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "transferCartCustomerWorkflow",
                      "path": "/resources/references/band-store-workflows/transferCartCustomerWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartPromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartPromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemInCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateLineItemInCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTaxLinesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateTaxLinesWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+cart",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addShippingMethodToCartStep",
                      "path": "/resources/references/band-store-workflows/steps/addShippingMethodToCartStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCartsStep",
                      "path": "/resources/references/band-store-workflows/steps/createCartsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createLineItemAdjustmentsStep",
                      "path": "/resources/references/band-store-workflows/steps/createLineItemAdjustmentsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createLineItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/createLineItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingMethodAdjustmentsStep",
                      "path": "/resources/references/band-store-workflows/steps/createShippingMethodAdjustmentsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteLineItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteLineItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "getLineItemActionsStep",
                      "path": "/resources/references/band-store-workflows/steps/getLineItemActionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "getLineItemPricingQuantitiesStep",
                      "path": "/resources/references/band-store-workflows/steps/getLineItemPricingQuantitiesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeLineItemAdjustmentsStep",
                      "path": "/resources/references/band-store-workflows/steps/removeLineItemAdjustmentsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeShippingMethodAdjustmentsStep",
                      "path": "/resources/references/band-store-workflows/steps/removeShippingMethodAdjustmentsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeShippingMethodFromCartStep",
                      "path": "/resources/references/band-store-workflows/steps/removeShippingMethodFromCartStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setTaxLinesForItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/setTaxLinesForItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateCartsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateLineItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemsStepWithSelector",
                      "path": "/resources/references/band-store-workflows/steps/updateLineItemsStepWithSelector",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingMethodsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateShippingMethodsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/cart/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Store",
                  "autogenerate_tags": "jsSdk+storefront+cart",
                  "description": "The following methods or properties are used to send requests to Store API Routes related to the Cart Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cart",
                      "path": "/resources/references/js-sdk/store/cart",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/cart/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "cart-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Cart Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/cart",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/cart/ICartModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/addLineItemAdjustments",
                      "title": "addLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/addLineItemTaxLines",
                      "title": "addLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/addLineItems",
                      "title": "addLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/addShippingMethodAdjustments",
                      "title": "addShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/addShippingMethodTaxLines",
                      "title": "addShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/addShippingMethods",
                      "title": "addShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/createAddresses",
                      "title": "createAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/createCarts",
                      "title": "createCarts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteAddresses",
                      "title": "deleteAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteCarts",
                      "title": "deleteCarts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteLineItemAdjustments",
                      "title": "deleteLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteLineItemTaxLines",
                      "title": "deleteLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteLineItems",
                      "title": "deleteLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteShippingMethodAdjustments",
                      "title": "deleteShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteShippingMethodTaxLines",
                      "title": "deleteShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/deleteShippingMethods",
                      "title": "deleteShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listAddresses",
                      "title": "listAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listAndCountCarts",
                      "title": "listAndCountCarts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listCarts",
                      "title": "listCarts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listLineItemAdjustments",
                      "title": "listLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listLineItemTaxLines",
                      "title": "listLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listLineItems",
                      "title": "listLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listShippingMethodAdjustments",
                      "title": "listShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listShippingMethodTaxLines",
                      "title": "listShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/listShippingMethods",
                      "title": "listShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreAddresses",
                      "title": "restoreAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreCarts",
                      "title": "restoreCarts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreLineItemAdjustments",
                      "title": "restoreLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreLineItemTaxLines",
                      "title": "restoreLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreLineItems",
                      "title": "restoreLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreShippingMethodAdjustments",
                      "title": "restoreShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreShippingMethodTaxLines",
                      "title": "restoreShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/restoreShippingMethods",
                      "title": "restoreShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/retrieveCart",
                      "title": "retrieveCart",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/retrieveLineItem",
                      "title": "retrieveLineItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/setLineItemAdjustments",
                      "title": "setLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/setLineItemTaxLines",
                      "title": "setLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/setShippingMethodAdjustments",
                      "title": "setShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/setShippingMethodTaxLines",
                      "title": "setShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteAddresses",
                      "title": "softDeleteAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteCarts",
                      "title": "softDeleteCarts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteLineItemAdjustments",
                      "title": "softDeleteLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteLineItemTaxLines",
                      "title": "softDeleteLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteLineItems",
                      "title": "softDeleteLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteShippingMethodAdjustments",
                      "title": "softDeleteShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteShippingMethodTaxLines",
                      "title": "softDeleteShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/softDeleteShippingMethods",
                      "title": "softDeleteShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/updateAddresses",
                      "title": "updateAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/updateCarts",
                      "title": "updateCarts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/updateLineItems",
                      "title": "updateLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/updateShippingMethods",
                      "title": "updateShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/upsertLineItemAdjustments",
                      "title": "upsertLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/upsertLineItemTaxLines",
                      "title": "upsertLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/upsertShippingMethodAdjustments",
                      "title": "upsertShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/upsertShippingMethodTaxLines",
                      "title": "upsertShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "cart-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Cart Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/cart/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/cart_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/Address",
                      "title": "Address",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/Cart",
                      "title": "Cart",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/CreditLine",
                      "title": "CreditLine",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/LineItem",
                      "title": "LineItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/LineItemAdjustment",
                      "title": "LineItemAdjustment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/LineItemTaxLine",
                      "title": "LineItemTaxLine",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/ShippingMethod",
                      "title": "ShippingMethod",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/ShippingMethodAdjustment",
                      "title": "ShippingMethodAdjustment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/cart/models/ShippingMethodTaxLine",
                      "title": "ShippingMethodTaxLine",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "currency",
      "title": "Currency Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/currency",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "sub-category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/currency/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+currency",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Currency features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Store",
              "path": "/user-guide/settings/store",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "sub-category",
          "title": "References",
          "description": "Find references for tools and resources related to the Currency Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/currency/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+currency",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Currency Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "currency",
                      "path": "/resources/references/js-sdk/admin/currency",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "currency-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Currency Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/currency",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/currency/ICurrencyModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/currency/listAndCountCurrencies",
                      "title": "listAndCountCurrencies",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/currency/listCurrencies",
                      "title": "listCurrencies",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/currency/retrieveCurrency",
                      "title": "retrieveCurrency",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "currency-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Currency Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/currency/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/currency_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/currency/models/Currency",
                      "title": "Currency",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "customer",
      "title": "Customer Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/customer",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/customer/customer-accounts",
              "title": "Customer Accounts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/customer/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "customer+server",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Customer Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/customer/extend",
              "title": "Extend Module",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Customer Tiers",
              "path": "/resources/how-to-tutorials/tutorials/customer-tiers",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement First-Purchase Discount",
              "path": "/resources/how-to-tutorials/tutorials/first-purchase-discounts",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Loyalty Points",
              "path": "/resources/how-to-tutorials/tutorials/loyalty-points",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Phone Authentication",
              "path": "/resources/how-to-tutorials/tutorials/phone-auth",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+customer,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Customer Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Customer Context in Storefront",
              "path": "/resources/storefront-development/customers/context",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Edit Customer Profile in Storefront",
              "path": "/resources/storefront-development/customers/profile",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Log-out Customer in Storefront",
              "path": "/resources/storefront-development/customers/log-out",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Login Customer in Storefront",
              "path": "/resources/storefront-development/customers/login",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Customer Addresses in Storefront",
              "path": "/resources/storefront-development/customers/addresses",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Register Customer in Storefront",
              "path": "/resources/storefront-development/customers/register",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Register Customer with Email Verification in Storefront",
              "path": "/resources/storefront-development/customers/verify-account",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Reset Customer Password in Storefront",
              "path": "/resources/storefront-development/customers/reset-password",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Logged-In Customer in Storefront",
              "path": "/resources/storefront-development/customers/retrieve",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Third-Party or Social Login in Storefront",
              "path": "/resources/storefront-development/customers/third-party-login",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+customer",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Customer features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Customers Overview",
              "path": "/user-guide/customers",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Customer Groups",
              "path": "/user-guide/customers/groups",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Customers",
              "path": "/user-guide/customers/manage",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Customer Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/customer/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+customer",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addOrderLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addOrderLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCartWorkflow",
                      "path": "/resources/references/band-store-workflows/createCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomerAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/createCustomerAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomerAddressesWorkflow",
                      "path": "/resources/references/band-store-workflows/createCustomerAddressesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomerGroupsWorkflow",
                      "path": "/resources/references/band-store-workflows/createCustomerGroupsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomersWorkflow",
                      "path": "/resources/references/band-store-workflows/createCustomersWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCustomerAddressesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteCustomerAddressesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCustomerGroupsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteCustomerGroupsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCustomersWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteCustomersWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "linkCustomerGroupsToCustomerWorkflow",
                      "path": "/resources/references/band-store-workflows/linkCustomerGroupsToCustomerWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "linkCustomersToCustomerGroupWorkflow",
                      "path": "/resources/references/band-store-workflows/linkCustomersToCustomerGroupWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEditAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderEditAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderExchangeAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderExchangeAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeCustomerAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/removeCustomerAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "transferOrderToGuestWorkflow",
                      "path": "/resources/references/band-store-workflows/transferOrderToGuestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCustomerAddressesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCustomerAddressesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCustomerGroupsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCustomerGroupsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCustomersWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCustomersWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+customer",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomerAddressesStep",
                      "path": "/resources/references/band-store-workflows/steps/createCustomerAddressesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomerGroupsStep",
                      "path": "/resources/references/band-store-workflows/steps/createCustomerGroupsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCustomersStep",
                      "path": "/resources/references/band-store-workflows/steps/createCustomersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCustomerAddressesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteCustomerAddressesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCustomerGroupStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteCustomerGroupStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCustomersStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteCustomersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "findOrCreateCustomerStep",
                      "path": "/resources/references/band-store-workflows/steps/findOrCreateCustomerStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "linkCustomerGroupsToCustomerStep",
                      "path": "/resources/references/band-store-workflows/steps/linkCustomerGroupsToCustomerStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "linkCustomersToCustomerGroupStep",
                      "path": "/resources/references/band-store-workflows/steps/linkCustomersToCustomerGroupStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "maybeUnsetDefaultBillingAddressesStep",
                      "path": "/resources/references/band-store-workflows/steps/maybeUnsetDefaultBillingAddressesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "maybeUnsetDefaultShippingAddressesStep",
                      "path": "/resources/references/band-store-workflows/steps/maybeUnsetDefaultShippingAddressesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCustomerAddressesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateCustomerAddressesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCustomerGroupsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateCustomerGroupsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCustomersStep",
                      "path": "/resources/references/band-store-workflows/steps/updateCustomersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validateCustomerAccountCreation",
                      "path": "/resources/references/band-store-workflows/steps/validateCustomerAccountCreation",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/customer/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Store",
                  "autogenerate_tags": "jsSdk+storefront+customer",
                  "description": "The following methods or properties are used to send requests to Store API Routes related to the Customer Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "customer",
                      "path": "/resources/references/js-sdk/store/customer",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+customer",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Customer Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "customer",
                      "path": "/resources/references/js-sdk/admin/customer",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "customerGroup",
                      "path": "/resources/references/js-sdk/admin/customerGroup",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/customer/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/customer/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "customer-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Customer Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/customer",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/customer/ICustomerModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/addCustomerToGroup",
                      "title": "addCustomerToGroup",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/createCustomerAddresses",
                      "title": "createCustomerAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/createCustomerGroups",
                      "title": "createCustomerGroups",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/createCustomers",
                      "title": "createCustomers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/deleteCustomerAddresses",
                      "title": "deleteCustomerAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/deleteCustomerGroups",
                      "title": "deleteCustomerGroups",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/deleteCustomers",
                      "title": "deleteCustomers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/listAndCountCustomerAddresses",
                      "title": "listAndCountCustomerAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/listAndCountCustomerGroups",
                      "title": "listAndCountCustomerGroups",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/listAndCountCustomers",
                      "title": "listAndCountCustomers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/listCustomerAddresses",
                      "title": "listCustomerAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/listCustomerGroupCustomers",
                      "title": "listCustomerGroupCustomers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/listCustomerGroups",
                      "title": "listCustomerGroups",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/listCustomers",
                      "title": "listCustomers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/removeCustomerFromGroup",
                      "title": "removeCustomerFromGroup",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/restoreCustomerGroups",
                      "title": "restoreCustomerGroups",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/restoreCustomers",
                      "title": "restoreCustomers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/retrieveCustomer",
                      "title": "retrieveCustomer",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/retrieveCustomerGroup",
                      "title": "retrieveCustomerGroup",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/softDeleteCustomerGroups",
                      "title": "softDeleteCustomerGroups",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/softDeleteCustomers",
                      "title": "softDeleteCustomers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/updateCustomerAddresses",
                      "title": "updateCustomerAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/updateCustomerGroups",
                      "title": "updateCustomerGroups",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/updateCustomers",
                      "title": "updateCustomers",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "customer-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Customer Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/customer/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/customer_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/models/Customer",
                      "title": "Customer",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/models/CustomerAddress",
                      "title": "CustomerAddress",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/models/CustomerGroup",
                      "title": "CustomerGroup",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/customer/models/CustomerGroupCustomer",
                      "title": "CustomerGroupCustomer",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "fulfillment",
      "title": "Fulfillment Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/fulfillment",
          "title": "Overview",
          "children": []
        },
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/fulfillment/module-options",
          "title": "Module Options",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "autogenerate_tags": "fulfillment+concept",
          "autogenerate_as_ref": true,
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/concepts",
              "title": "General Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/item-fulfillment",
              "title": "Item Fulfillment",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/fulfillment-provider",
              "title": "Fulfillment Module Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/shipping-option",
              "title": "Shipping Option",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/links-to-other-modules",
              "title": "Links to Other Modules",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Reservations Lifecycle",
              "path": "/resources/commerce-modules/inventory/reservations-lifecycle",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Shipping Option Price Rules",
              "path": "/resources/commerce-modules/pricing/price-rules",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Physical and Customs Attributes",
              "path": "/resources/commerce-modules/product/physical-customs-attributes",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Product Shipping Requirement",
              "path": "/resources/commerce-modules/product/selling-products",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+fulfillment",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Fulfillment Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/references/fulfillment/provider",
              "title": "Create Fulfillment Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "path": "/integrations/guides/shipstation",
              "title": "Integrate ShipStation",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+fulfillment,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Fulfillment Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 3: Choose Shipping Method",
              "path": "/resources/storefront-development/checkout/shipping",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Express Checkout with BandStore",
              "path": "/resources/storefront-development/guides/express-checkout",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Mobile App with React Native, Expo, and BandStore",
              "path": "/resources/storefront-development/guides/react-native-expo",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "fulfillment+userGuide",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Fulfillment features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Locations & Shipping Overview",
              "path": "/user-guide/settings/locations-and-shipping",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Fulfillments",
              "path": "/user-guide/orders/fulfillments",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Shipping Option Types",
              "path": "/user-guide/settings/locations-and-shipping/shipping-option-types",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Shipping Options",
              "path": "/user-guide/settings/locations-and-shipping/locations",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Shipping Profiles",
              "path": "/user-guide/settings/locations-and-shipping/shipping-profiles",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Fulfillment Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+fulfillment",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addGiftCardToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addGiftCardToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addShippingMethodToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addShippingMethodToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addStoreCreditsToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addStoreCreditsToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchShippingOptionRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/batchShippingOptionRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "calculateShippingOptionsPricesWorkflow",
                      "path": "/resources/references/band-store-workflows/calculateShippingOptionsPricesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmClaimRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmClaimRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmExchangeRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmExchangeRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmReturnRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmReturnRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createAndCompleteReturnOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/createAndCompleteReturnOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createClaimShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createClaimShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createExchangeShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createExchangeShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createLocationFulfillmentSetWorkflow",
                      "path": "/resources/references/band-store-workflows/createLocationFulfillmentSetWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderShipmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderShipmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createReturnFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createReturnShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createServiceZonesWorkflow",
                      "path": "/resources/references/band-store-workflows/createServiceZonesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShipmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createShipmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createShippingOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingOptionTypesWorkflow",
                      "path": "/resources/references/band-store-workflows/createShippingOptionTypesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingProfilesWorkflow",
                      "path": "/resources/references/band-store-workflows/createShippingProfilesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteFulfillmentSetsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteFulfillmentSetsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteServiceZonesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteServiceZonesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteShippingOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteShippingOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteShippingOptionTypesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteShippingOptionTypesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteShippingProfileWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteShippingProfileWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "fetchShippingOptionForDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/fetchShippingOptionForDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "fetchShippingOptionForOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/fetchShippingOptionForOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "listShippingOptionsForCartWithPricingWorkflow",
                      "path": "/resources/references/band-store-workflows/listShippingOptionsForCartWithPricingWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "markFulfillmentAsDeliveredWorkflow",
                      "path": "/resources/references/band-store-workflows/markFulfillmentAsDeliveredWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "markOrderFulfillmentAsDeliveredWorkflow",
                      "path": "/resources/references/band-store-workflows/markOrderFulfillmentAsDeliveredWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "maybeRefreshShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/maybeRefreshShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshCartItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshCartItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshCartShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshCartShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshConfirmedDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshConfirmedDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshPendingDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshPendingDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeGiftCardFromCartWorkflow",
                      "path": "/resources/references/band-store-workflows/removeGiftCardFromCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "transferCartCustomerWorkflow",
                      "path": "/resources/references/band-store-workflows/transferCartCustomerWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderActionShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderActionShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/updateFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemInCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateLineItemInCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateServiceZonesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateServiceZonesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateShippingOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingOptionTypesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateShippingOptionTypesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingProfilesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateShippingProfilesWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+fulfillment",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "calculateShippingOptionsPricesStep",
                      "path": "/resources/references/band-store-workflows/steps/calculateShippingOptionsPricesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelFulfillmentStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelFulfillmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createFulfillmentSets",
                      "path": "/resources/references/band-store-workflows/steps/createFulfillmentSets",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createFulfillmentStep",
                      "path": "/resources/references/band-store-workflows/steps/createFulfillmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnFulfillmentStep",
                      "path": "/resources/references/band-store-workflows/steps/createReturnFulfillmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createServiceZonesStep",
                      "path": "/resources/references/band-store-workflows/steps/createServiceZonesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingOptionRulesStep",
                      "path": "/resources/references/band-store-workflows/steps/createShippingOptionRulesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingOptionTypesStep",
                      "path": "/resources/references/band-store-workflows/steps/createShippingOptionTypesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingProfilesStep",
                      "path": "/resources/references/band-store-workflows/steps/createShippingProfilesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteFulfillmentSetsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteFulfillmentSetsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteServiceZonesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteServiceZonesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteShippingOptionRulesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteShippingOptionRulesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteShippingOptionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteShippingOptionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteShippingOptionTypesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteShippingOptionTypesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteShippingProfilesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteShippingProfilesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateFulfillmentStep",
                      "path": "/resources/references/band-store-workflows/steps/updateFulfillmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateServiceZonesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateServiceZonesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingOptionRulesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateShippingOptionRulesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingOptionTypesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateShippingOptionTypesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingProfilesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateShippingProfilesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "upsertShippingOptionsStep",
                      "path": "/resources/references/band-store-workflows/steps/upsertShippingOptionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validateAndReturnShippingMethodsDataStep",
                      "path": "/resources/references/band-store-workflows/steps/validateAndReturnShippingMethodsDataStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validateShipmentStep",
                      "path": "/resources/references/band-store-workflows/steps/validateShipmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validateShippingOptionPricesStep",
                      "path": "/resources/references/band-store-workflows/steps/validateShippingOptionPricesStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Store",
                  "autogenerate_tags": "jsSdk+storefront+fulfillment",
                  "description": "The following methods or properties are used to send requests to Store API Routes related to the Fulfillment Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "fulfillment",
                      "path": "/resources/references/js-sdk/store/fulfillment",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+fulfillment",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Fulfillment Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "fulfillment",
                      "path": "/resources/references/js-sdk/admin/fulfillment",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "fulfillmentProvider",
                      "path": "/resources/references/js-sdk/admin/fulfillmentProvider",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "fulfillmentSet",
                      "path": "/resources/references/js-sdk/admin/fulfillmentSet",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "shippingOption",
                      "path": "/resources/references/js-sdk/admin/shippingOption",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "shippingOptionType",
                      "path": "/resources/references/js-sdk/admin/shippingOptionType",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "shippingProfile",
                      "path": "/resources/references/js-sdk/admin/shippingProfile",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/fulfillment/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/fulfillment/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "fulfillment-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Fulfillment Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/fulfillment",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/fulfillment/IFulfillmentModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/calculateShippingOptionsPrices",
                      "title": "calculateShippingOptionsPrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/cancelFulfillment",
                      "title": "cancelFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createFulfillment",
                      "title": "createFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createFulfillmentSets",
                      "title": "createFulfillmentSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createGeoZones",
                      "title": "createGeoZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createReturnFulfillment",
                      "title": "createReturnFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createServiceZones",
                      "title": "createServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createShippingOptionRules",
                      "title": "createShippingOptionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createShippingOptionTypes",
                      "title": "createShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createShippingOptions",
                      "title": "createShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/createShippingProfiles",
                      "title": "createShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteFulfillment",
                      "title": "deleteFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteFulfillmentSets",
                      "title": "deleteFulfillmentSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteGeoZones",
                      "title": "deleteGeoZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteServiceZones",
                      "title": "deleteServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteShippingOptionRules",
                      "title": "deleteShippingOptionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteShippingOptionTypes",
                      "title": "deleteShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteShippingOptions",
                      "title": "deleteShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/deleteShippingProfiles",
                      "title": "deleteShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountFulfillmentSets",
                      "title": "listAndCountFulfillmentSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountFulfillments",
                      "title": "listAndCountFulfillments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountGeoZones",
                      "title": "listAndCountGeoZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountServiceZones",
                      "title": "listAndCountServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountShippingOptionRules",
                      "title": "listAndCountShippingOptionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountShippingOptionTypes",
                      "title": "listAndCountShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountShippingOptions",
                      "title": "listAndCountShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listAndCountShippingProfiles",
                      "title": "listAndCountShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listFulfillmentProviders",
                      "title": "listFulfillmentProviders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listFulfillmentSets",
                      "title": "listFulfillmentSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listFulfillments",
                      "title": "listFulfillments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listGeoZones",
                      "title": "listGeoZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listServiceZones",
                      "title": "listServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listShippingOptionRules",
                      "title": "listShippingOptionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listShippingOptionTypes",
                      "title": "listShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listShippingOptions",
                      "title": "listShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listShippingOptionsForContext",
                      "title": "listShippingOptionsForContext",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/listShippingProfiles",
                      "title": "listShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/restoreFulfillmentSets",
                      "title": "restoreFulfillmentSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/restoreGeoZones",
                      "title": "restoreGeoZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/restoreServiceZones",
                      "title": "restoreServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/restoreShippingOptionTypes",
                      "title": "restoreShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/restoreShippingOptions",
                      "title": "restoreShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/restoreShippingProfiles",
                      "title": "restoreShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveFulfillment",
                      "title": "retrieveFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveFulfillmentOptions",
                      "title": "retrieveFulfillmentOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveFulfillmentSet",
                      "title": "retrieveFulfillmentSet",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveGeoZone",
                      "title": "retrieveGeoZone",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveServiceZone",
                      "title": "retrieveServiceZone",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveShippingOption",
                      "title": "retrieveShippingOption",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveShippingOptionRule",
                      "title": "retrieveShippingOptionRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveShippingOptionType",
                      "title": "retrieveShippingOptionType",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/retrieveShippingProfile",
                      "title": "retrieveShippingProfile",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/softDeleteFulfillmentSets",
                      "title": "softDeleteFulfillmentSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/softDeleteGeoZones",
                      "title": "softDeleteGeoZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/softDeleteServiceZones",
                      "title": "softDeleteServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/softDeleteShippingOptionTypes",
                      "title": "softDeleteShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/softDeleteShippingOptions",
                      "title": "softDeleteShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/softDeleteShippingProfiles",
                      "title": "softDeleteShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateFulfillment",
                      "title": "updateFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateFulfillmentSets",
                      "title": "updateFulfillmentSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateGeoZones",
                      "title": "updateGeoZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateServiceZones",
                      "title": "updateServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateShippingOptionRules",
                      "title": "updateShippingOptionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateShippingOptionTypes",
                      "title": "updateShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateShippingOptions",
                      "title": "updateShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/updateShippingProfiles",
                      "title": "updateShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/upsertServiceZones",
                      "title": "upsertServiceZones",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/upsertShippingOptionTypes",
                      "title": "upsertShippingOptionTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/upsertShippingOptions",
                      "title": "upsertShippingOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/upsertShippingProfiles",
                      "title": "upsertShippingProfiles",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/validateFulfillmentData",
                      "title": "validateFulfillmentData",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/validateFulfillmentOption",
                      "title": "validateFulfillmentOption",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/validateShippingOption",
                      "title": "validateShippingOption",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/validateShippingOptionsForPriceCalculation",
                      "title": "validateShippingOptionsForPriceCalculation",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "fulfillment-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Fulfillment Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/fulfillment/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/fulfillment_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/Fulfillment",
                      "title": "Fulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/FulfillmentAddress",
                      "title": "FulfillmentAddress",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/FulfillmentItem",
                      "title": "FulfillmentItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/FulfillmentLabel",
                      "title": "FulfillmentLabel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/FulfillmentProvider",
                      "title": "FulfillmentProvider",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/FulfillmentSet",
                      "title": "FulfillmentSet",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/GeoZone",
                      "title": "GeoZone",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/ServiceZone",
                      "title": "ServiceZone",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/ShippingOption",
                      "title": "ShippingOption",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/ShippingOptionRule",
                      "title": "ShippingOptionRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/ShippingOptionType",
                      "title": "ShippingOptionType",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/fulfillment/models/ShippingProfile",
                      "title": "ShippingProfile",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "inventory",
      "title": "Inventory Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/inventory",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "autogenerate_tags": "concept+inventory",
          "autogenerate_as_ref": true,
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/concepts",
              "title": "Inventory Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/inventory-in-flows",
              "title": "Inventory in Flows",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/reservations-lifecycle",
              "title": "Reservations Lifecycle",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/inventory-kit",
              "title": "Inventory Kit",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/links-to-other-modules",
              "title": "Links to Modules",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Physical and Customs Attributes",
              "path": "/resources/commerce-modules/product/physical-customs-attributes",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Product Variant Inventory",
              "path": "/resources/commerce-modules/product/variant-inventory",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+inventory",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Inventory Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Get Variant Inventory",
              "path": "/resources/commerce-modules/product/guides/variant-inventory",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+inventory,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Inventory Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Product Variant's Inventory in Storefront",
              "path": "/resources/storefront-development/products/inventory",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+inventory",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Inventory features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Export Inventory Items",
              "path": "/user-guide/inventory/export",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Inventory Overview",
              "path": "/user-guide/inventory",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Inventory Items",
              "path": "/user-guide/inventory/inventory",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Reservations",
              "path": "/user-guide/inventory/reservations",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Inventory Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+inventory",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addOrderLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addOrderLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchInventoryItemLevelsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchInventoryItemLevelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "bulkCreateDeleteLevelsWorkflow",
                      "path": "/resources/references/band-store-workflows/bulkCreateDeleteLevelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderClaimWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderClaimWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderExchangeWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderExchangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "completeCartWorkflow",
                      "path": "/resources/references/band-store-workflows/completeCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmClaimRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmClaimRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmExchangeRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmExchangeRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmOrderEditRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmOrderEditRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmReturnReceiveWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmReturnReceiveWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmVariantInventoryWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmVariantInventoryWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "convertDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/convertDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCartWorkflow",
                      "path": "/resources/references/band-store-workflows/createCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createInventoryItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/createInventoryItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createInventoryLevelsWorkflow",
                      "path": "/resources/references/band-store-workflows/createInventoryLevelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReservationsWorkflow",
                      "path": "/resources/references/band-store-workflows/createReservationsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteInventoryItemWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteInventoryItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteReservationsByLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteReservationsByLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteReservationsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteReservationsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEditAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderEditAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderExchangeAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderExchangeAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateInventoryItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateInventoryItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateInventoryLevelsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateInventoryLevelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemInCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateLineItemInCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateReservationsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateReservationsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+inventory",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "adjustInventoryLevelsStep",
                      "path": "/resources/references/band-store-workflows/steps/adjustInventoryLevelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmInventoryStep",
                      "path": "/resources/references/band-store-workflows/steps/confirmInventoryStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createInventoryItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/createInventoryItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createInventoryLevelsStep",
                      "path": "/resources/references/band-store-workflows/steps/createInventoryLevelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductVariantsDefaultInventoryStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductVariantsDefaultInventoryStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReservationsStep",
                      "path": "/resources/references/band-store-workflows/steps/createReservationsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteInventoryItemStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteInventoryItemStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteReservationsByLineItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteReservationsByLineItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteReservationsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteReservationsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "reserveInventoryStep",
                      "path": "/resources/references/band-store-workflows/steps/reserveInventoryStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateInventoryItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateInventoryItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateInventoryLevelsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateInventoryLevelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateReservationsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateReservationsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+inventory",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Inventory Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "inventoryItem",
                      "path": "/resources/references/js-sdk/admin/inventoryItem",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "reservation",
                      "path": "/resources/references/js-sdk/admin/reservation",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/inventory/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/inventory/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "inventory-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Inventory Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/inventory-next",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/inventory_next/IInventoryService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/adjustInventory",
                      "title": "adjustInventory",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/confirmInventory",
                      "title": "confirmInventory",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/createInventoryItems",
                      "title": "createInventoryItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/createInventoryLevels",
                      "title": "createInventoryLevels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/createReservationItems",
                      "title": "createReservationItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/deleteInventoryItemLevelByLocationId",
                      "title": "deleteInventoryItemLevelByLocationId",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/deleteInventoryItems",
                      "title": "deleteInventoryItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/deleteInventoryLevel",
                      "title": "deleteInventoryLevel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/deleteInventoryLevels",
                      "title": "deleteInventoryLevels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/deleteReservationItemByLocationId",
                      "title": "deleteReservationItemByLocationId",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/deleteReservationItems",
                      "title": "deleteReservationItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/deleteReservationItemsByLineItem",
                      "title": "deleteReservationItemsByLineItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/listAndCountInventoryItems",
                      "title": "listAndCountInventoryItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/listAndCountInventoryLevels",
                      "title": "listAndCountInventoryLevels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/listAndCountReservationItems",
                      "title": "listAndCountReservationItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/listInventoryItems",
                      "title": "listInventoryItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/listInventoryLevels",
                      "title": "listInventoryLevels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/listReservationItems",
                      "title": "listReservationItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/restoreInventoryItems",
                      "title": "restoreInventoryItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/restoreInventoryLevels",
                      "title": "restoreInventoryLevels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/restoreReservationItems",
                      "title": "restoreReservationItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/restoreReservationItemsByLineItem",
                      "title": "restoreReservationItemsByLineItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/retrieveAvailableQuantity",
                      "title": "retrieveAvailableQuantity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/retrieveInventoryItem",
                      "title": "retrieveInventoryItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/retrieveInventoryLevel",
                      "title": "retrieveInventoryLevel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/retrieveInventoryLevelByItemAndLocation",
                      "title": "retrieveInventoryLevelByItemAndLocation",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/retrieveReservationItem",
                      "title": "retrieveReservationItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/retrieveReservedQuantity",
                      "title": "retrieveReservedQuantity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/retrieveStockedQuantity",
                      "title": "retrieveStockedQuantity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/softDeleteInventoryItems",
                      "title": "softDeleteInventoryItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/softDeleteInventoryLevels",
                      "title": "softDeleteInventoryLevels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/softDeleteReservationItems",
                      "title": "softDeleteReservationItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/updateInventoryItems",
                      "title": "updateInventoryItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/updateInventoryLevels",
                      "title": "updateInventoryLevels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/updateReservationItems",
                      "title": "updateReservationItems",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "inventory-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Inventory Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/inventory-next/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/inventory_next_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/models/InventoryItem",
                      "title": "InventoryItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/models/InventoryLevel",
                      "title": "InventoryLevel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/inventory-next/models/ReservationItem",
                      "title": "ReservationItem",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "loyalty",
      "title": "Loyalty Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/loyalty",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/loyalty/module-options",
          "title": "Plugin Options",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/loyalty/gift-cards",
              "title": "Gift Cards",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/loyalty/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+loyalty",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Loyalty features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Gift Card Products Overview",
              "path": "/user-guide/loyalty/gift-card-products",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Gift Cards Overview",
              "path": "/user-guide/loyalty/gift-cards",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Loyalty Features in BandStore Admin",
              "path": "/user-guide/loyalty",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Gift Card Products",
              "path": "/user-guide/loyalty/gift-card-products/manage",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Gift Cards",
              "path": "/user-guide/loyalty/gift-cards/manage",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Loyalty Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/loyalty/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+loyalty",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createGiftCardsWorkflow",
                      "path": "/resources/references/band-store-workflows/createGiftCardsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "redeemGiftCardWorkflow",
                      "path": "/resources/references/band-store-workflows/redeemGiftCardWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateGiftCardsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateGiftCardsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+loyalty",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createGiftCardsStep",
                      "path": "/resources/references/band-store-workflows/steps/createGiftCardsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateGiftCardsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateGiftCardsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/loyalty/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "loyalty-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Loyalty Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/loyalty",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/loyalty/ILoyaltyModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/loyalty/createGiftCards",
                      "title": "createGiftCards",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/loyalty/deleteGiftCards",
                      "title": "deleteGiftCards",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/loyalty/getOptions",
                      "title": "getOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/loyalty/listGiftCards",
                      "title": "listGiftCards",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/loyalty/retrieveGiftCard",
                      "title": "retrieveGiftCard",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/loyalty/updateGiftCards",
                      "title": "updateGiftCards",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "loyalty-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Loyalty Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/loyalty/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/loyalty_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/loyalty/models/GiftCard",
                      "title": "GiftCard",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "order",
      "title": "Order Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/order",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/concepts",
              "title": "Order Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/custom-display-id",
              "title": "Custom Order Display ID",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/promotion-adjustments",
              "title": "Promotions Adjustments",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/tax-lines",
              "title": "Tax Lines",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/transactions",
              "title": "Transactions",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/order-versioning",
              "title": "Order Versioning",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/draft-orders",
              "title": "Draft Orders",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/return",
              "title": "Return",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/exchange",
              "title": "Exchange",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/claim",
              "title": "Claim",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/edit",
              "title": "Order Edit",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/order-change",
              "title": "Order Change",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/transfer-to-guest",
              "title": "Transfer Order to Guest",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/links-to-other-modules",
              "title": "Links to Other Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "order+server",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Order Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Add Gift Message",
              "path": "/resources/how-to-tutorials/tutorials/gift-message",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Agentic Commerce",
              "path": "/resources/how-to-tutorials/tutorials/agentic-commerce",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Generate Invoices",
              "path": "/resources/how-to-tutorials/tutorials/invoice-generator",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Loyalty Points",
              "path": "/resources/how-to-tutorials/tutorials/loyalty-points",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Pre-Orders",
              "path": "/resources/how-to-tutorials/tutorials/preorder",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Quote Management",
              "path": "/resources/examples/guides/quote-management",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Re-Order",
              "path": "/resources/how-to-tutorials/tutorials/re-order",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Restrict Order Retrieval",
              "path": "/resources/commerce-modules/order/secure-order-retrieval",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Restrict Return Creation",
              "path": "/resources/commerce-modules/order/secure-return-creation",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/order-totals",
              "title": "Retrieve Order Totals",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+order,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Order Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 5: Complete Cart",
              "path": "/resources/storefront-development/checkout/complete-cart",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Express Checkout with BandStore",
              "path": "/resources/storefront-development/guides/express-checkout",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Mobile App with React Native, Expo, and BandStore",
              "path": "/resources/storefront-development/guides/react-native-expo",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Order Confirmation in Storefront",
              "path": "/resources/storefront-development/checkout/order-confirmation",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Return Request - Order #",
              "path": "/resources/nextjs-starter/guides/storefront-returns",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+order",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Order features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Create Draft Order",
              "path": "/user-guide/orders/draft-orders/create",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Draft Orders",
              "path": "/user-guide/orders/draft-orders",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Edit Order Items",
              "path": "/user-guide/orders/edit",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Export Orders",
              "path": "/user-guide/orders/export",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Draft Order",
              "path": "/user-guide/orders/draft-orders/manage",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Claims",
              "path": "/user-guide/orders/claims",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Details",
              "path": "/user-guide/orders/manage",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Exchanges",
              "path": "/user-guide/orders/exchanges",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Fulfillments",
              "path": "/user-guide/orders/fulfillments",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Payments",
              "path": "/user-guide/orders/payments",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Returns",
              "path": "/user-guide/orders/returns",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Refund Reasons",
              "path": "/user-guide/settings/refund-reasons",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Return Reasons",
              "path": "/user-guide/settings/return-reasons",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Orders Overview",
              "path": "/user-guide/orders",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Order Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+order",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "acceptOrderTransferWorkflow",
                      "path": "/resources/references/band-store-workflows/acceptOrderTransferWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderPromotionWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderPromotionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "archiveOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/archiveOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "authorizePaymentSessionForOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/authorizePaymentSessionForOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "beginClaimOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/beginClaimOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "beginDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/beginDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "beginExchangeOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/beginExchangeOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "beginOrderEditOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/beginOrderEditOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "beginReceiveReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/beginReceiveReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "beginReturnOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/beginReturnOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelBeginOrderClaimWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelBeginOrderClaimWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelBeginOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelBeginOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelBeginOrderExchangeWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelBeginOrderExchangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderChangeWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderChangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderClaimWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderClaimWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderExchangeWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderExchangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderTransferRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderTransferRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelReturnReceiveWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelReturnReceiveWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelReturnRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelReturnRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "capturePaymentWorkflow",
                      "path": "/resources/references/band-store-workflows/capturePaymentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "completeCartWorkflow",
                      "path": "/resources/references/band-store-workflows/completeCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "completeOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/completeOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "computeAdjustmentsForPreviewWorkflow",
                      "path": "/resources/references/band-store-workflows/computeAdjustmentsForPreviewWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "computeDraftOrderAdjustmentsWorkflow",
                      "path": "/resources/references/band-store-workflows/computeDraftOrderAdjustmentsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmClaimRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmClaimRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmExchangeRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmExchangeRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmOrderEditRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmOrderEditRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmReturnReceiveWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmReturnReceiveWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmReturnRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmReturnRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "convertDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/convertDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createAndCompleteReturnOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/createAndCompleteReturnOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createClaimShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createClaimShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createExchangeShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createExchangeShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderChangeWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderChangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderCreditLinesWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderCreditLinesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderEditShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderEditShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderFulfillmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderFulfillmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderShipmentWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderShipmentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnReasonsWorkflow",
                      "path": "/resources/references/band-store-workflows/createReturnReasonsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createReturnShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "declineOrderChangeWorkflow",
                      "path": "/resources/references/band-store-workflows/declineOrderChangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "declineOrderTransferRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/declineOrderTransferRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteDraftOrdersWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteDraftOrdersWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteOrderChangeActionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteOrderChangeActionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteOrderChangeWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteOrderChangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteReturnReasonsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteReturnReasonsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "dismissItemReturnRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/dismissItemReturnRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "fetchShippingOptionForDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/fetchShippingOptionForDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "markOrderFulfillmentAsDeliveredWorkflow",
                      "path": "/resources/references/band-store-workflows/markOrderFulfillmentAsDeliveredWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "markPaymentCollectionAsPaid",
                      "path": "/resources/references/band-store-workflows/markPaymentCollectionAsPaid",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "maybeRefreshShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/maybeRefreshShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "onCarryPromotionsFlagSet",
                      "path": "/resources/references/band-store-workflows/onCarryPromotionsFlagSet",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimRequestItemReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimRequestItemReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEditAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderEditAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEditUpdateItemQuantityWorkflow",
                      "path": "/resources/references/band-store-workflows/orderEditUpdateItemQuantityWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderExchangeAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderExchangeAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderExchangeRequestItemReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/orderExchangeRequestItemReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "receiveItemReturnRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/receiveItemReturnRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshConfirmedDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshConfirmedDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshPendingDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshPendingDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentAndRecreatePaymentSessionWorkflow",
                      "path": "/resources/references/band-store-workflows/refundPaymentAndRecreatePaymentSessionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentsWorkflow",
                      "path": "/resources/references/band-store-workflows/refundPaymentsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentWorkflow",
                      "path": "/resources/references/band-store-workflows/refundPaymentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeAddItemClaimActionWorkflow",
                      "path": "/resources/references/band-store-workflows/removeAddItemClaimActionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeClaimShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeClaimShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderActionShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderActionShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderPromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderPromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeExchangeShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeExchangeShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeItemClaimActionWorkflow",
                      "path": "/resources/references/band-store-workflows/removeItemClaimActionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeItemExchangeActionWorkflow",
                      "path": "/resources/references/band-store-workflows/removeItemExchangeActionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeItemOrderEditActionWorkflow",
                      "path": "/resources/references/band-store-workflows/removeItemOrderEditActionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeItemReceiveReturnActionWorkflow",
                      "path": "/resources/references/band-store-workflows/removeItemReceiveReturnActionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeItemReturnActionWorkflow",
                      "path": "/resources/references/band-store-workflows/removeItemReturnActionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeOrderEditShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeOrderEditShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeReturnShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeReturnShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "requestDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/requestDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "requestItemReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/requestItemReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "requestOrderEditRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/requestOrderEditRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "requestOrderTransferWorkflow",
                      "path": "/resources/references/band-store-workflows/requestOrderTransferWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "transferOrderToGuestWorkflow",
                      "path": "/resources/references/band-store-workflows/transferOrderToGuestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateClaimAddItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateClaimAddItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateClaimItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateClaimItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateClaimShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateClaimShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderActionShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderActionShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateExchangeAddItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateExchangeAddItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateExchangeShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateExchangeShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderChangeActionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderChangeActionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderChangesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderChangesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderChangeWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderChangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderEditAddItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderEditAddItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderEditItemQuantityWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderEditItemQuantityWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderEditShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderEditShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderTaxLinesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderTaxLinesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateReceiveItemReturnRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/updateReceiveItemReturnRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateRequestItemReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/updateRequestItemReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateReturnReasonsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateReturnReasonsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateReturnShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateReturnShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/updateReturnWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+order",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addOrderTransactionStep",
                      "path": "/resources/references/band-store-workflows/steps/addOrderTransactionStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "archiveOrdersStep",
                      "path": "/resources/references/band-store-workflows/steps/archiveOrdersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderChangeStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelOrderChangeStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderClaimStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelOrderClaimStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderExchangeStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelOrderExchangeStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderFulfillmentStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelOrderFulfillmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderReturnStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelOrderReturnStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrdersStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelOrdersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "completeOrdersStep",
                      "path": "/resources/references/band-store-workflows/steps/completeOrdersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCompleteReturnStep",
                      "path": "/resources/references/band-store-workflows/steps/createCompleteReturnStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderChangeStep",
                      "path": "/resources/references/band-store-workflows/steps/createOrderChangeStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderClaimItemsFromActionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createOrderClaimItemsFromActionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderClaimsStep",
                      "path": "/resources/references/band-store-workflows/steps/createOrderClaimsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderExchangeItemsFromActionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createOrderExchangeItemsFromActionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderExchangesStep",
                      "path": "/resources/references/band-store-workflows/steps/createOrderExchangesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrdersStep",
                      "path": "/resources/references/band-store-workflows/steps/createOrdersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnReasonsStep",
                      "path": "/resources/references/band-store-workflows/steps/createReturnReasonsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnsStep",
                      "path": "/resources/references/band-store-workflows/steps/createReturnsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "declineOrderChangeStep",
                      "path": "/resources/references/band-store-workflows/steps/declineOrderChangeStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteClaimsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteClaimsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteDraftOrdersStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteDraftOrdersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteExchangesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteExchangesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteOrderChangeActionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteOrderChangeActionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteOrderChangesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteOrderChangesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteOrderShippingMethods",
                      "path": "/resources/references/band-store-workflows/steps/deleteOrderShippingMethods",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteReturnReasonStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteReturnReasonStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteReturnsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteReturnsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "previewOrderChangeStep",
                      "path": "/resources/references/band-store-workflows/steps/previewOrderChangeStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "registerOrderChangesStep",
                      "path": "/resources/references/band-store-workflows/steps/registerOrderChangesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "registerOrderDeliveryStep",
                      "path": "/resources/references/band-store-workflows/steps/registerOrderDeliveryStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "registerOrderFulfillmentStep",
                      "path": "/resources/references/band-store-workflows/steps/registerOrderFulfillmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "registerOrderShipmentStep",
                      "path": "/resources/references/band-store-workflows/steps/registerOrderShipmentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setOrderTaxLinesForItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/setOrderTaxLinesForItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderStep",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderChangeActionsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateOrderChangeActionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderChangesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateOrderChangesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderShippingMethodsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateOrderShippingMethodsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderShippingMethodsTranslationsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateOrderShippingMethodsTranslationsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrdersStep",
                      "path": "/resources/references/band-store-workflows/steps/updateOrdersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateReturnReasonsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateReturnReasonsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Store",
                  "autogenerate_tags": "jsSdk+storefront+order",
                  "description": "The following methods or properties are used to send requests to Store API Routes related to the Order Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "order",
                      "path": "/resources/references/js-sdk/store/order",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+order",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Order Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "claim",
                      "path": "/resources/references/js-sdk/admin/claim",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "draftOrder",
                      "path": "/resources/references/js-sdk/admin/draftOrder",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "exchange",
                      "path": "/resources/references/js-sdk/admin/exchange",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "order",
                      "path": "/resources/references/js-sdk/admin/order",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEdit",
                      "path": "/resources/references/js-sdk/admin/orderEdit",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundReason",
                      "path": "/resources/references/js-sdk/admin/refundReason",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "return",
                      "path": "/resources/references/js-sdk/admin/return",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "returnReason",
                      "path": "/resources/references/js-sdk/admin/returnReason",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/order/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/order/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "order-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Order Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/order",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/order/IOrderModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/addOrderAction",
                      "title": "addOrderAction",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/addOrderTransactions",
                      "title": "addOrderTransactions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/applyPendingOrderActions",
                      "title": "applyPendingOrderActions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/archive",
                      "title": "archive",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/cancel",
                      "title": "cancel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/cancelClaim",
                      "title": "cancelClaim",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/cancelExchange",
                      "title": "cancelExchange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/cancelFulfillment",
                      "title": "cancelFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/cancelOrderChange",
                      "title": "cancelOrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/cancelReturn",
                      "title": "cancelReturn",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/completeOrder",
                      "title": "completeOrder",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/confirmOrderChange",
                      "title": "confirmOrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createClaim",
                      "title": "createClaim",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createExchange",
                      "title": "createExchange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderAddresses",
                      "title": "createOrderAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderChange",
                      "title": "createOrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderClaimItems",
                      "title": "createOrderClaimItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderClaims",
                      "title": "createOrderClaims",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderCreditLines",
                      "title": "createOrderCreditLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderExchangeItems",
                      "title": "createOrderExchangeItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderExchanges",
                      "title": "createOrderExchanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderLineItemAdjustments",
                      "title": "createOrderLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderLineItemTaxLines",
                      "title": "createOrderLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderLineItems",
                      "title": "createOrderLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderShippingMethodAdjustments",
                      "title": "createOrderShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderShippingMethodTaxLines",
                      "title": "createOrderShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrderShippingMethods",
                      "title": "createOrderShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createOrders",
                      "title": "createOrders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createReturn",
                      "title": "createReturn",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createReturnItems",
                      "title": "createReturnItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createReturnReasons",
                      "title": "createReturnReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/createReturns",
                      "title": "createReturns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/declineOrderChange",
                      "title": "declineOrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderAddresses",
                      "title": "deleteOrderAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderChangeActions",
                      "title": "deleteOrderChangeActions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderChanges",
                      "title": "deleteOrderChanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderClaimItemImages",
                      "title": "deleteOrderClaimItemImages",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderClaimItems",
                      "title": "deleteOrderClaimItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderClaims",
                      "title": "deleteOrderClaims",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderExchangeItems",
                      "title": "deleteOrderExchangeItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderExchanges",
                      "title": "deleteOrderExchanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderLineItemAdjustments",
                      "title": "deleteOrderLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderLineItemTaxLines",
                      "title": "deleteOrderLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderLineItems",
                      "title": "deleteOrderLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderShippingMethodAdjustments",
                      "title": "deleteOrderShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderShippingMethodTaxLines",
                      "title": "deleteOrderShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderShippingMethods",
                      "title": "deleteOrderShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrderTransactions",
                      "title": "deleteOrderTransactions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteOrders",
                      "title": "deleteOrders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteReturnItems",
                      "title": "deleteReturnItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteReturnReasons",
                      "title": "deleteReturnReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/deleteReturns",
                      "title": "deleteReturns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listAndCountOrderClaims",
                      "title": "listAndCountOrderClaims",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listAndCountOrderExchanges",
                      "title": "listAndCountOrderExchanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listAndCountOrders",
                      "title": "listAndCountOrders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listAndCountReturns",
                      "title": "listAndCountReturns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderAddresses",
                      "title": "listOrderAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderChangeActions",
                      "title": "listOrderChangeActions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderChanges",
                      "title": "listOrderChanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderClaims",
                      "title": "listOrderClaims",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderExchanges",
                      "title": "listOrderExchanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderLineItemAdjustments",
                      "title": "listOrderLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderLineItemTaxLines",
                      "title": "listOrderLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderLineItems",
                      "title": "listOrderLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderShippingMethodAdjustments",
                      "title": "listOrderShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderShippingMethodTaxLines",
                      "title": "listOrderShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderShippingMethods",
                      "title": "listOrderShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrderTransactions",
                      "title": "listOrderTransactions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listOrders",
                      "title": "listOrders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listReturnReasons",
                      "title": "listReturnReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/listReturns",
                      "title": "listReturns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/previewOrderChange",
                      "title": "previewOrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/receiveReturn",
                      "title": "receiveReturn",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/registerDelivery",
                      "title": "registerDelivery",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/registerFulfillment",
                      "title": "registerFulfillment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/registerOrderChange",
                      "title": "registerOrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/registerShipment",
                      "title": "registerShipment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderAddresses",
                      "title": "restoreOrderAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderChangeActions",
                      "title": "restoreOrderChangeActions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderChanges",
                      "title": "restoreOrderChanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderClaims",
                      "title": "restoreOrderClaims",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderExchanges",
                      "title": "restoreOrderExchanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderLineItemAdjustments",
                      "title": "restoreOrderLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderLineItemTaxLines",
                      "title": "restoreOrderLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderLineItems",
                      "title": "restoreOrderLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderShippingMethodAdjustments",
                      "title": "restoreOrderShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderShippingMethodTaxLines",
                      "title": "restoreOrderShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderShippingMethods",
                      "title": "restoreOrderShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrderTransactions",
                      "title": "restoreOrderTransactions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreOrders",
                      "title": "restoreOrders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreReturnReasons",
                      "title": "restoreReturnReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/restoreReturns",
                      "title": "restoreReturns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveOrder",
                      "title": "retrieveOrder",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveOrderChange",
                      "title": "retrieveOrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveOrderChangeAction",
                      "title": "retrieveOrderChangeAction",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveOrderClaim",
                      "title": "retrieveOrderClaim",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveOrderExchange",
                      "title": "retrieveOrderExchange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveOrderLineItem",
                      "title": "retrieveOrderLineItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveReturn",
                      "title": "retrieveReturn",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/retrieveReturnReason",
                      "title": "retrieveReturnReason",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/revertLastVersion",
                      "title": "revertLastVersion",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/setOrderLineItemAdjustments",
                      "title": "setOrderLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/setOrderLineItemTaxLines",
                      "title": "setOrderLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/setOrderShippingMethodAdjustments",
                      "title": "setOrderShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/setOrderShippingMethodTaxLines",
                      "title": "setOrderShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderAddresses",
                      "title": "softDeleteOrderAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderChangeActions",
                      "title": "softDeleteOrderChangeActions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderChanges",
                      "title": "softDeleteOrderChanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderClaims",
                      "title": "softDeleteOrderClaims",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderExchanges",
                      "title": "softDeleteOrderExchanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderLineItemAdjustments",
                      "title": "softDeleteOrderLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderLineItemTaxLines",
                      "title": "softDeleteOrderLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderLineItems",
                      "title": "softDeleteOrderLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderShippingMethodAdjustments",
                      "title": "softDeleteOrderShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderShippingMethodTaxLines",
                      "title": "softDeleteOrderShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderShippingMethods",
                      "title": "softDeleteOrderShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrderTransactions",
                      "title": "softDeleteOrderTransactions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteOrders",
                      "title": "softDeleteOrders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteReturnReasons",
                      "title": "softDeleteReturnReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/softDeleteReturns",
                      "title": "softDeleteReturns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/undoLastChange",
                      "title": "undoLastChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderAddresses",
                      "title": "updateOrderAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderChangeActions",
                      "title": "updateOrderChangeActions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderChanges",
                      "title": "updateOrderChanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderClaims",
                      "title": "updateOrderClaims",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderExchanges",
                      "title": "updateOrderExchanges",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderItem",
                      "title": "updateOrderItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderLineItems",
                      "title": "updateOrderLineItems",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrderShippingMethods",
                      "title": "updateOrderShippingMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateOrders",
                      "title": "updateOrders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateReturnReasons",
                      "title": "updateReturnReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/updateReturns",
                      "title": "updateReturns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/upsertOrderLineItemAdjustments",
                      "title": "upsertOrderLineItemAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/upsertOrderLineItemTaxLines",
                      "title": "upsertOrderLineItemTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/upsertOrderShippingMethodAdjustments",
                      "title": "upsertOrderShippingMethodAdjustments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/upsertOrderShippingMethodTaxLines",
                      "title": "upsertOrderShippingMethodTaxLines",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "order-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Order Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/order/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/order_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/Order",
                      "title": "Order",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderAddress",
                      "title": "OrderAddress",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderChange",
                      "title": "OrderChange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderChangeAction",
                      "title": "OrderChangeAction",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderClaim",
                      "title": "OrderClaim",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderClaimItem",
                      "title": "OrderClaimItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderClaimItemImage",
                      "title": "OrderClaimItemImage",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderCreditLine",
                      "title": "OrderCreditLine",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderExchange",
                      "title": "OrderExchange",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderExchangeItem",
                      "title": "OrderExchangeItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderItem",
                      "title": "OrderItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderLineItem",
                      "title": "OrderLineItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderLineItemAdjustment",
                      "title": "OrderLineItemAdjustment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderLineItemTaxLine",
                      "title": "OrderLineItemTaxLine",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderShipping",
                      "title": "OrderShipping",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderShippingMethod",
                      "title": "OrderShippingMethod",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderShippingMethodAdjustment",
                      "title": "OrderShippingMethodAdjustment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderShippingMethodTaxLine",
                      "title": "OrderShippingMethodTaxLine",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderSummary",
                      "title": "OrderSummary",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/OrderTransaction",
                      "title": "OrderTransaction",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/Return",
                      "title": "Return",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/ReturnItem",
                      "title": "ReturnItem",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/order/models/ReturnReason",
                      "title": "ReturnReason",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "payment",
      "title": "Payment Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/payment",
          "title": "Overview",
          "children": []
        },
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/payment/module-options",
          "title": "Module Options",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment-collection",
              "title": "Payment Collections",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment-session",
              "title": "Payment Session",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment",
              "title": "Payment",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment-provider",
              "title": "Payment Module Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment-checkout-flow",
              "title": "Payment in Checkout",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/account-holder",
              "title": "Account Holder",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/webhook-events",
              "title": "Webhook Events",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/links-to-other-modules",
              "title": "Links to Other Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+payment",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Payment Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment-flow",
              "title": "Accept Payment Flow",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/payment/provider",
              "title": "Create Payment Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Saved Payment Methods",
              "path": "/resources/how-to-tutorials/tutorials/saved-payment-methods",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+payment,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Payment Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 4: Choose Payment Provider",
              "path": "/resources/storefront-development/checkout/payment",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Checkout Step 5: Complete Cart",
              "path": "/resources/storefront-development/checkout/complete-cart",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Express Checkout with BandStore",
              "path": "/resources/storefront-development/guides/express-checkout",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Mobile App with React Native, Expo, and BandStore",
              "path": "/resources/storefront-development/guides/react-native-expo",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Payment with Stripe in React Storefront",
              "path": "/resources/storefront-development/checkout/payment/stripe",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Use Stripe's Payment Element in the Next.js Starter Storefront",
              "path": "/resources/nextjs-starter/guides/customize-stripe",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+payment",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Payment features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Order Payments",
              "path": "/user-guide/orders/payments",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Providers",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment-provider/stripe",
              "title": "Stripe",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/payment-provider/adyen",
              "title": "Adyen",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "path": "/integrations/guides/paypal",
              "title": "PayPal",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Payment Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+payment",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addGiftCardToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addGiftCardToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addShippingMethodToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addShippingMethodToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addStoreCreditsToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addStoreCreditsToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "authorizePaymentSessionForOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/authorizePaymentSessionForOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/cancelOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "capturePaymentWorkflow",
                      "path": "/resources/references/band-store-workflows/capturePaymentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "completeCartWorkflow",
                      "path": "/resources/references/band-store-workflows/completeCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmClaimRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmClaimRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmExchangeRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmExchangeRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmOrderEditRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmOrderEditRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmReturnReceiveWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmReturnReceiveWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmReturnRequestWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmReturnRequestWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCartWorkflow",
                      "path": "/resources/references/band-store-workflows/createCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderPaymentCollectionWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderPaymentCollectionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrUpdateOrderPaymentCollectionWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrUpdateOrderPaymentCollectionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPaymentCollectionForCartWorkflow",
                      "path": "/resources/references/band-store-workflows/createPaymentCollectionForCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPaymentSessionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createPaymentSessionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createRefundReasonsWorkflow",
                      "path": "/resources/references/band-store-workflows/createRefundReasonsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePaymentSessionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deletePaymentSessionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteRefundReasonsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteRefundReasonsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "markPaymentCollectionAsPaid",
                      "path": "/resources/references/band-store-workflows/markPaymentCollectionAsPaid",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshCartItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshCartItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshPaymentCollectionForCartWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshPaymentCollectionForCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentAndRecreatePaymentSessionWorkflow",
                      "path": "/resources/references/band-store-workflows/refundPaymentAndRecreatePaymentSessionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentsWorkflow",
                      "path": "/resources/references/band-store-workflows/refundPaymentsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentWorkflow",
                      "path": "/resources/references/band-store-workflows/refundPaymentWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeGiftCardFromCartWorkflow",
                      "path": "/resources/references/band-store-workflows/removeGiftCardFromCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "requestDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/requestDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "transferCartCustomerWorkflow",
                      "path": "/resources/references/band-store-workflows/transferCartCustomerWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartPromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartPromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemInCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateLineItemInCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePaymentSessionClientDataWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePaymentSessionClientDataWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateRefundReasonsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateRefundReasonsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateRegionsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+payment",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "authorizePaymentSessionStep",
                      "path": "/resources/references/band-store-workflows/steps/authorizePaymentSessionStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "cancelPaymentStep",
                      "path": "/resources/references/band-store-workflows/steps/cancelPaymentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "capturePaymentStep",
                      "path": "/resources/references/band-store-workflows/steps/capturePaymentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPaymentAccountHolderStep",
                      "path": "/resources/references/band-store-workflows/steps/createPaymentAccountHolderStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPaymentCollectionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createPaymentCollectionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPaymentSessionStep",
                      "path": "/resources/references/band-store-workflows/steps/createPaymentSessionStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createRefundReasonStep",
                      "path": "/resources/references/band-store-workflows/steps/createRefundReasonStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePaymentSessionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deletePaymentSessionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteRefundReasonsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteRefundReasonsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentsStep",
                      "path": "/resources/references/band-store-workflows/steps/refundPaymentsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refundPaymentStep",
                      "path": "/resources/references/band-store-workflows/steps/refundPaymentStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setRegionsPaymentProvidersStep",
                      "path": "/resources/references/band-store-workflows/steps/setRegionsPaymentProvidersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePaymentCollectionStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePaymentCollectionStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePaymentSessionStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePaymentSessionStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateRefundReasonsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateRefundReasonsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/payment/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Store",
                  "autogenerate_tags": "jsSdk+storefront+payment",
                  "description": "The following methods or properties are used to send requests to Store API Routes related to the Payment Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "payment",
                      "path": "/resources/references/js-sdk/store/payment",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+payment",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Payment Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "payment",
                      "path": "/resources/references/js-sdk/admin/payment",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "paymentCollection",
                      "path": "/resources/references/js-sdk/admin/paymentCollection",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/payment/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "payment-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Payment Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/payment",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/payment/IPaymentModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/authorizePaymentSession",
                      "title": "authorizePaymentSession",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/cancelPayment",
                      "title": "cancelPayment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/capturePayment",
                      "title": "capturePayment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/completePaymentCollections",
                      "title": "completePaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/createAccountHolder",
                      "title": "createAccountHolder",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/createPaymentCollections",
                      "title": "createPaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/createPaymentMethods",
                      "title": "createPaymentMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/createPaymentSession",
                      "title": "createPaymentSession",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/createRefundReasons",
                      "title": "createRefundReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/deleteAccountHolder",
                      "title": "deleteAccountHolder",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/deleteCaptures",
                      "title": "deleteCaptures",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/deletePaymentCollections",
                      "title": "deletePaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/deletePaymentMethods",
                      "title": "deletePaymentMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/deletePaymentSession",
                      "title": "deletePaymentSession",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/deleteRefundReasons",
                      "title": "deleteRefundReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/deleteRefunds",
                      "title": "deleteRefunds",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/getWebhookActionAndData",
                      "title": "getWebhookActionAndData",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listAndCountPaymentCollections",
                      "title": "listAndCountPaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listAndCountPaymentMethods",
                      "title": "listAndCountPaymentMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listAndCountPaymentProviders",
                      "title": "listAndCountPaymentProviders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listCaptures",
                      "title": "listCaptures",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listPaymentCollections",
                      "title": "listPaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listPaymentMethods",
                      "title": "listPaymentMethods",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listPaymentProviders",
                      "title": "listPaymentProviders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listPaymentSessions",
                      "title": "listPaymentSessions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listPayments",
                      "title": "listPayments",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listRefundReasons",
                      "title": "listRefundReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/listRefunds",
                      "title": "listRefunds",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/refundPayment",
                      "title": "refundPayment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/restorePaymentCollections",
                      "title": "restorePaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/restoreRefundReasons",
                      "title": "restoreRefundReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/retrievePayment",
                      "title": "retrievePayment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/retrievePaymentCollection",
                      "title": "retrievePaymentCollection",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/retrievePaymentSession",
                      "title": "retrievePaymentSession",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/softDeletePaymentCollections",
                      "title": "softDeletePaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/softDeleteRefundReasons",
                      "title": "softDeleteRefundReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/updateAccountHolder",
                      "title": "updateAccountHolder",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/updatePayment",
                      "title": "updatePayment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/updatePaymentCollections",
                      "title": "updatePaymentCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/updatePaymentSession",
                      "title": "updatePaymentSession",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/updateRefundReasons",
                      "title": "updateRefundReasons",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/upsertPaymentCollections",
                      "title": "upsertPaymentCollections",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "payment-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Payment Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/payment/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/payment_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/AccountHolder",
                      "title": "AccountHolder",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/Capture",
                      "title": "Capture",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/Payment",
                      "title": "Payment",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/PaymentCollection",
                      "title": "PaymentCollection",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/PaymentProvider",
                      "title": "PaymentProvider",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/PaymentSession",
                      "title": "PaymentSession",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/Refund",
                      "title": "Refund",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/payment/models/RefundReason",
                      "title": "RefundReason",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "pricing",
      "title": "Pricing Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/pricing",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/concepts",
              "title": "Pricing Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/price-rules",
              "title": "Price Tiers and Rules",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/price-calculation",
              "title": "Prices Calculation",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/tax-inclusive-pricing",
              "title": "Tax-Inclusive Pricing",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/links-to-other-modules",
              "title": "Links to Other Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+pricing",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Pricing Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Get Variant Price with Taxes",
              "path": "/resources/commerce-modules/product/guides/price-with-taxes",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Get Variant Prices",
              "path": "/resources/commerce-modules/product/guides/price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Custom Line Item Pricing in BandStore",
              "path": "/resources/examples/guides/custom-item-price",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+pricing,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Pricing Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Example: Show Price with Taxes",
              "path": "/resources/storefront-development/products/price/examples/tax-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Example: Show Sale Price",
              "path": "/resources/storefront-development/products/price/examples/sale-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Example: Show Variant's Price",
              "path": "/resources/storefront-development/products/price/examples/show-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Product Variant's Prices in Storefront",
              "path": "/resources/storefront-development/products/price",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+pricing",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Pricing features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Create a Price List",
              "path": "/user-guide/price-lists/create",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Price Lists",
              "path": "/user-guide/price-lists/manage",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Price Lists Overview",
              "path": "/user-guide/price-lists",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Pricing Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+pricing",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchPriceListPricesWorkflow",
                      "path": "/resources/references/band-store-workflows/batchPriceListPricesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPriceListPricesWorkflow",
                      "path": "/resources/references/band-store-workflows/createPriceListPricesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPriceListsWorkflow",
                      "path": "/resources/references/band-store-workflows/createPriceListsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPricePreferencesWorkflow",
                      "path": "/resources/references/band-store-workflows/createPricePreferencesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createShippingOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createStoresWorkflow",
                      "path": "/resources/references/band-store-workflows/createStoresWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePriceListsWorkflow",
                      "path": "/resources/references/band-store-workflows/deletePriceListsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePricePreferencesWorkflow",
                      "path": "/resources/references/band-store-workflows/deletePricePreferencesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removePriceListPricesWorkflow",
                      "path": "/resources/references/band-store-workflows/removePriceListPricesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePriceListPricesWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePriceListPricesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePriceListsWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePriceListsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePricePreferencesWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePricePreferencesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateShippingOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateStoresWorkflow",
                      "path": "/resources/references/band-store-workflows/updateStoresWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "upsertVariantPricesWorkflow",
                      "path": "/resources/references/band-store-workflows/upsertVariantPricesWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+pricing",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPriceListPricesStep",
                      "path": "/resources/references/band-store-workflows/steps/createPriceListPricesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPriceListsStep",
                      "path": "/resources/references/band-store-workflows/steps/createPriceListsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPricePreferencesStep",
                      "path": "/resources/references/band-store-workflows/steps/createPricePreferencesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPriceSetsStep",
                      "path": "/resources/references/band-store-workflows/steps/createPriceSetsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingOptionsPriceSetsStep",
                      "path": "/resources/references/band-store-workflows/steps/createShippingOptionsPriceSetsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePriceListsStep",
                      "path": "/resources/references/band-store-workflows/steps/deletePriceListsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePricePreferencesStep",
                      "path": "/resources/references/band-store-workflows/steps/deletePricePreferencesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removePriceListPricesStep",
                      "path": "/resources/references/band-store-workflows/steps/removePriceListPricesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setShippingOptionsPricesStep",
                      "path": "/resources/references/band-store-workflows/steps/setShippingOptionsPricesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePriceListPricesStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePriceListPricesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePriceListsStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePriceListsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePricePreferencesAsArrayStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePricePreferencesAsArrayStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePricePreferencesStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePricePreferencesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePriceSetsStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePriceSetsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validatePriceListsStep",
                      "path": "/resources/references/band-store-workflows/steps/validatePriceListsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+pricing",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Pricing Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "priceList",
                      "path": "/resources/references/js-sdk/admin/priceList",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "pricePreference",
                      "path": "/resources/references/js-sdk/admin/pricePreference",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/pricing/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "pricing-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Pricing Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/pricing",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/pricing/IPricingModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/addPriceListPrices",
                      "title": "addPriceListPrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/addPrices",
                      "title": "addPrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/calculatePrices",
                      "title": "calculatePrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/createPriceLists",
                      "title": "createPriceLists",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/createPricePreferences",
                      "title": "createPricePreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/createPriceRules",
                      "title": "createPriceRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/createPriceSets",
                      "title": "createPriceSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/deletePriceListRules",
                      "title": "deletePriceListRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/deletePriceLists",
                      "title": "deletePriceLists",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/deletePricePreferences",
                      "title": "deletePricePreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/deletePriceRules",
                      "title": "deletePriceRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/deletePriceSets",
                      "title": "deletePriceSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listAndCountPriceListRules",
                      "title": "listAndCountPriceListRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listAndCountPriceLists",
                      "title": "listAndCountPriceLists",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listAndCountPriceRules",
                      "title": "listAndCountPriceRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listAndCountPriceSets",
                      "title": "listAndCountPriceSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listAndCountPrices",
                      "title": "listAndCountPrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listPriceListRules",
                      "title": "listPriceListRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listPriceLists",
                      "title": "listPriceLists",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listPricePreferences",
                      "title": "listPricePreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listPriceRules",
                      "title": "listPriceRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listPriceSets",
                      "title": "listPriceSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/listPrices",
                      "title": "listPrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/removePriceListRules",
                      "title": "removePriceListRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/removePrices",
                      "title": "removePrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/restorePriceLists",
                      "title": "restorePriceLists",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/restorePricePreferences",
                      "title": "restorePricePreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/restorePrices",
                      "title": "restorePrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/retrievePriceList",
                      "title": "retrievePriceList",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/retrievePriceListRule",
                      "title": "retrievePriceListRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/retrievePricePreference",
                      "title": "retrievePricePreference",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/retrievePriceRule",
                      "title": "retrievePriceRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/retrievePriceSet",
                      "title": "retrievePriceSet",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/setPriceListRules",
                      "title": "setPriceListRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/softDeletePriceLists",
                      "title": "softDeletePriceLists",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/softDeletePricePreferences",
                      "title": "softDeletePricePreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/softDeletePrices",
                      "title": "softDeletePrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/updatePriceListPrices",
                      "title": "updatePriceListPrices",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/updatePriceLists",
                      "title": "updatePriceLists",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/updatePricePreferences",
                      "title": "updatePricePreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/updatePriceRules",
                      "title": "updatePriceRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/updatePriceSets",
                      "title": "updatePriceSets",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/upsertPricePreferences",
                      "title": "upsertPricePreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/upsertPriceSets",
                      "title": "upsertPriceSets",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "pricing-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Pricing Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/pricing/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/pricing_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/models/Price",
                      "title": "Price",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/models/PriceList",
                      "title": "PriceList",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/models/PriceListRule",
                      "title": "PriceListRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/models/PricePreference",
                      "title": "PricePreference",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/models/PriceRule",
                      "title": "PriceRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/pricing/models/PriceSet",
                      "title": "PriceSet",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "product",
      "title": "Product Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/product",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "autogenerate_tags": "product+concept",
          "autogenerate_as_ref": true,
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/variant-inventory",
              "title": "Variant Inventory",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/physical-customs-attributes",
              "title": "Physical and Customs Attributes",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/selling-products",
              "title": "Selling Use Cases",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/links-to-other-modules",
              "title": "Links to Other Modules",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Inventory Kits",
              "path": "/resources/commerce-modules/inventory/inventory-kit",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Variant Price Rules",
              "path": "/resources/commerce-modules/pricing/price-rules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "product+server",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Product Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Build Wishlist Plugin",
              "path": "/resources/plugins/guides/wishlist",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/extend",
              "title": "Extend Module",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/guides/filter-products",
              "title": "Filter Products",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/guides/variant-inventory",
              "title": "Get Variant Inventory",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/guides/price-with-taxes",
              "title": "Get Variant Price with Taxes",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/guides/price",
              "title": "Get Variant Prices",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Bundled Products",
              "path": "/resources/recipes/bundled-products/examples/standard",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Custom Line Item Pricing in BandStore",
              "path": "/resources/examples/guides/custom-item-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Meta Product Feed",
              "path": "/resources/how-to-tutorials/tutorials/product-feed",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Personalized Products",
              "path": "/resources/recipes/personalized-products/example",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Pre-Order Products",
              "path": "/resources/how-to-tutorials/tutorials/preorder",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Product Builder",
              "path": "/resources/how-to-tutorials/tutorials/product-builder",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Product Rentals",
              "path": "/resources/how-to-tutorials/tutorials/product-rentals",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Product Reviews",
              "path": "/resources/how-to-tutorials/tutorials/product-reviews",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Ticket Booking",
              "path": "/resources/recipes/ticket-booking/example",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Integrate Payload",
              "path": "/resources/integrations/guides/payload",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Integrate Strapi",
              "path": "/resources/integrations/guides/strapi",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Localization with Contentful",
              "path": "/resources/integrations/guides/contentful",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Product Category Images",
              "path": "/resources/how-to-tutorials/tutorials/category-images",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+product,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Product Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Example: Show Price with Taxes",
              "path": "/resources/storefront-development/products/price/examples/tax-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Example: Show Sale Price",
              "path": "/resources/storefront-development/products/price/examples/sale-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Example: Show Variant's Price",
              "path": "/resources/storefront-development/products/price/examples/show-price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Express Checkout with BandStore",
              "path": "/resources/storefront-development/guides/express-checkout",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Mobile App with React Native, Expo, and BandStore",
              "path": "/resources/storefront-development/guides/react-native-expo",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "List Product Collections in Storefront",
              "path": "/resources/storefront-development/products/collections/list",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve a Category in Storefront",
              "path": "/resources/storefront-development/products/categories/retrieve",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve a Category's Products in Storefront",
              "path": "/resources/storefront-development/products/categories/products",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve a Collection in Storefront",
              "path": "/resources/storefront-development/products/collections/retrieve",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve a Collection's Products in Storefront",
              "path": "/resources/storefront-development/products/collections/products",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve a Product in Storefront",
              "path": "/resources/storefront-development/products/retrieve",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Nested Categories in Storefront",
              "path": "/resources/storefront-development/products/categories/nested-categories",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Product Variant's Inventory in Storefront",
              "path": "/resources/storefront-development/products/inventory",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Retrieve Product Variant's Prices in Storefront",
              "path": "/resources/storefront-development/products/price",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Select Product Variants in Storefront",
              "path": "/resources/storefront-development/products/variants",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Show Product Categories in Storefront",
              "path": "/resources/storefront-development/products/categories/list",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Show Products in Storefront",
              "path": "/resources/storefront-development/products/list",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Use Product Options in Storefront",
              "path": "/resources/storefront-development/products/options",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin Guides",
          "autogenerate_tags": "admin+product,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize administative features of the Product Module.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/guides/manage-with-admin-api",
              "title": "Manage Products with Admin API",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+product",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Product features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Create Bundle Product",
              "path": "/user-guide/products/create/bundle",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Create Multi-Part Product",
              "path": "/user-guide/products/create/multi-part",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Create Product",
              "path": "/user-guide/products/create",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Edit Product",
              "path": "/user-guide/products/edit",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Export Products",
              "path": "/user-guide/products/export",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Import Products",
              "path": "/user-guide/products/import",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Product Categories",
              "path": "/user-guide/products/categories",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Product Collections",
              "path": "/user-guide/products/collections",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Product Options",
              "path": "/user-guide/products/options",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Product Tags",
              "path": "/user-guide/settings/product-tags",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Product Types",
              "path": "/user-guide/settings/product-types",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Product Variants",
              "path": "/user-guide/products/variants",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Products Overview",
              "path": "/user-guide/products",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Product Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+product",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchImageVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchImageVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchLinkProductsToCategoryWorkflow",
                      "path": "/resources/references/band-store-workflows/batchLinkProductsToCategoryWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchLinkProductsToCollectionWorkflow",
                      "path": "/resources/references/band-store-workflows/batchLinkProductsToCollectionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchVariantImagesWorkflow",
                      "path": "/resources/references/band-store-workflows/batchVariantImagesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createAndLinkProductOptionsToProductWorkflow",
                      "path": "/resources/references/band-store-workflows/createAndLinkProductOptionsToProductWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCollectionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createCollectionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductCategoriesWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductCategoriesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductTagsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductTagsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductTypesWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductTypesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/createProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCollectionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteCollectionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductCategoriesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductCategoriesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductOptionValuesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductOptionValuesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductTagsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductTagsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductTypesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductTypesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteProductVariantsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "importProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/importProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setProductProductOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/setProductProductOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCollectionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCollectionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductCategoriesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductCategoriesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductOptionValuesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductOptionValuesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductTagsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductTagsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductTypesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductTypesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductVariantsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateProductVariantsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+product",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addImagesToVariantStep",
                      "path": "/resources/references/band-store-workflows/steps/addImagesToVariantStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addImageToVariantsStep",
                      "path": "/resources/references/band-store-workflows/steps/addImageToVariantsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addProductOptionsToProductStep",
                      "path": "/resources/references/band-store-workflows/steps/addProductOptionsToProductStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchLinkProductsToCategoryStep",
                      "path": "/resources/references/band-store-workflows/steps/batchLinkProductsToCategoryStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchLinkProductsToCollectionStep",
                      "path": "/resources/references/band-store-workflows/steps/batchLinkProductsToCollectionStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCollectionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createCollectionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductCategoriesStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductCategoriesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductOptionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductOptionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductsStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductTagsStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductTagsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductTypesStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductTypesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductVariantsDefaultInventoryStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductVariantsDefaultInventoryStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createProductVariantsStep",
                      "path": "/resources/references/band-store-workflows/steps/createProductVariantsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCollectionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteCollectionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductCategoriesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteProductCategoriesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductOptionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteProductOptionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductOptionValuesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteProductOptionValuesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteProductsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductTagsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteProductTagsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductTypesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteProductTypesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteProductVariantsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteProductVariantsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "processProductOptionsForImportStep",
                      "path": "/resources/references/band-store-workflows/steps/processProductOptionsForImportStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeImageFromVariantsStep",
                      "path": "/resources/references/band-store-workflows/steps/removeImageFromVariantsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeImagesFromVariantStep",
                      "path": "/resources/references/band-store-workflows/steps/removeImagesFromVariantStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeProductOptionsFromProductStep",
                      "path": "/resources/references/band-store-workflows/steps/removeProductOptionsFromProductStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCollectionsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateCollectionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductCategoriesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductCategoriesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductOptionsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductOptionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductOptionValuesOnProductStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductOptionValuesOnProductStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductOptionValuesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductOptionValuesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductTagsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductTagsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductTypesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductTypesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateProductVariantsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateProductVariantsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Store",
                  "autogenerate_tags": "jsSdk+storefront+product",
                  "description": "The following methods or properties are used to send requests to Store API Routes related to the Product Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "category",
                      "path": "/resources/references/js-sdk/store/category",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "collection",
                      "path": "/resources/references/js-sdk/store/collection",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "product",
                      "path": "/resources/references/js-sdk/store/product",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "productOption",
                      "path": "/resources/references/js-sdk/store/productOption",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+product",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Product Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "product",
                      "path": "/resources/references/js-sdk/admin/product",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "productCategory",
                      "path": "/resources/references/js-sdk/admin/productCategory",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "productCollection",
                      "path": "/resources/references/js-sdk/admin/productCollection",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "productOption",
                      "path": "/resources/references/js-sdk/admin/productOption",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "productTag",
                      "path": "/resources/references/js-sdk/admin/productTag",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "productType",
                      "path": "/resources/references/js-sdk/admin/productType",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "productVariant",
                      "path": "/resources/references/js-sdk/admin/productVariant",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/product/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/product/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "product-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Product Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/product",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/product/IProductModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/addImageToVariant",
                      "title": "addImageToVariant",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/addProductOptionToProduct",
                      "title": "addProductOptionToProduct",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProductCategories",
                      "title": "createProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProductCollections",
                      "title": "createProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProductOptionValues",
                      "title": "createProductOptionValues",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProductOptions",
                      "title": "createProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProductTags",
                      "title": "createProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProductTypes",
                      "title": "createProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProductVariants",
                      "title": "createProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/createProducts",
                      "title": "createProducts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProductCategories",
                      "title": "deleteProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProductCollections",
                      "title": "deleteProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProductOptionValues",
                      "title": "deleteProductOptionValues",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProductOptions",
                      "title": "deleteProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProductTags",
                      "title": "deleteProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProductTypes",
                      "title": "deleteProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProductVariants",
                      "title": "deleteProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/deleteProducts",
                      "title": "deleteProducts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProductCategories",
                      "title": "listAndCountProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProductCollections",
                      "title": "listAndCountProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProductOptionValues",
                      "title": "listAndCountProductOptionValues",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProductOptions",
                      "title": "listAndCountProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProductTags",
                      "title": "listAndCountProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProductTypes",
                      "title": "listAndCountProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProductVariants",
                      "title": "listAndCountProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listAndCountProducts",
                      "title": "listAndCountProducts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProductCategories",
                      "title": "listProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProductCollections",
                      "title": "listProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProductOptionValues",
                      "title": "listProductOptionValues",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProductOptions",
                      "title": "listProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProductTags",
                      "title": "listProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProductTypes",
                      "title": "listProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProductVariants",
                      "title": "listProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/listProducts",
                      "title": "listProducts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/removeImageFromVariant",
                      "title": "removeImageFromVariant",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/removeProductOptionFromProduct",
                      "title": "removeProductOptionFromProduct",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProductCategories",
                      "title": "restoreProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProductCollections",
                      "title": "restoreProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProductOptionValues",
                      "title": "restoreProductOptionValues",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProductOptions",
                      "title": "restoreProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProductTags",
                      "title": "restoreProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProductTypes",
                      "title": "restoreProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProductVariants",
                      "title": "restoreProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/restoreProducts",
                      "title": "restoreProducts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProduct",
                      "title": "retrieveProduct",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProductCategory",
                      "title": "retrieveProductCategory",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProductCollection",
                      "title": "retrieveProductCollection",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProductOption",
                      "title": "retrieveProductOption",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProductOptionValue",
                      "title": "retrieveProductOptionValue",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProductTag",
                      "title": "retrieveProductTag",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProductType",
                      "title": "retrieveProductType",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/retrieveProductVariant",
                      "title": "retrieveProductVariant",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProductCategories",
                      "title": "softDeleteProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProductCollections",
                      "title": "softDeleteProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProductOptionValues",
                      "title": "softDeleteProductOptionValues",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProductOptions",
                      "title": "softDeleteProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProductTags",
                      "title": "softDeleteProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProductTypes",
                      "title": "softDeleteProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProductVariants",
                      "title": "softDeleteProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/softDeleteProducts",
                      "title": "softDeleteProducts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductCategories",
                      "title": "updateProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductCollections",
                      "title": "updateProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductOptionValues",
                      "title": "updateProductOptionValues",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductOptionValuesOnProduct",
                      "title": "updateProductOptionValuesOnProduct",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductOptions",
                      "title": "updateProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductTags",
                      "title": "updateProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductTypes",
                      "title": "updateProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProductVariants",
                      "title": "updateProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/updateProducts",
                      "title": "updateProducts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/upsertProductCategories",
                      "title": "upsertProductCategories",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/upsertProductCollections",
                      "title": "upsertProductCollections",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/upsertProductOptions",
                      "title": "upsertProductOptions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/upsertProductTags",
                      "title": "upsertProductTags",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/upsertProductTypes",
                      "title": "upsertProductTypes",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/upsertProductVariants",
                      "title": "upsertProductVariants",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/upsertProducts",
                      "title": "upsertProducts",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "product-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Product Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/product/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/product_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/Product",
                      "title": "Product",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductCategory",
                      "title": "ProductCategory",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductCollection",
                      "title": "ProductCollection",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductImage",
                      "title": "ProductImage",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductOption",
                      "title": "ProductOption",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductOptionValue",
                      "title": "ProductOptionValue",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductProductOption",
                      "title": "ProductProductOption",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductProductOptionValue",
                      "title": "ProductProductOptionValue",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductTag",
                      "title": "ProductTag",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductType",
                      "title": "ProductType",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductVariant",
                      "title": "ProductVariant",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/product/models/ProductVariantProductImage",
                      "title": "ProductVariantProductImage",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "promotion",
      "title": "Promotion Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/promotion",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/concepts",
              "title": "Promotion",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/promotion-taxes",
              "title": "Tax-Inclusive Promotions",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/application-method",
              "title": "Application Method",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/campaign",
              "title": "Campaign",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/actions",
              "title": "Promotion Actions",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/links-to-other-modules",
              "title": "Links to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "promotion+server",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Promotion Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/extend",
              "title": "Extend Module",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Customer Tiers",
              "path": "/resources/how-to-tutorials/tutorials/customer-tiers",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement First-Purchase Discount",
              "path": "/resources/how-to-tutorials/tutorials/first-purchase-discounts",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Loyalty Points",
              "path": "/resources/how-to-tutorials/tutorials/loyalty-points",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+promotion,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Promotion Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Cart Promotions in Storefront",
              "path": "/resources/storefront-development/cart/manage-promotions",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+promotion",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Promotion features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Create a Promotion",
              "path": "/user-guide/promotions/create",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Campaigns",
              "path": "/user-guide/promotions/campaigns",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Promotions",
              "path": "/user-guide/promotions/manage",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Promotions Overview",
              "path": "/user-guide/promotions",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Promotion Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+promotion",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderPromotionWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderPromotionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addGiftCardToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addGiftCardToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addOrRemoveCampaignPromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/addOrRemoveCampaignPromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addShippingMethodToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addShippingMethodToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addStoreCreditsToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addStoreCreditsToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchPromotionRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/batchPromotionRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "computeAdjustmentsForPreviewWorkflow",
                      "path": "/resources/references/band-store-workflows/computeAdjustmentsForPreviewWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "computeDraftOrderAdjustmentsWorkflow",
                      "path": "/resources/references/band-store-workflows/computeDraftOrderAdjustmentsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCampaignsWorkflow",
                      "path": "/resources/references/band-store-workflows/createCampaignsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCartWorkflow",
                      "path": "/resources/references/band-store-workflows/createCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPromotionRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/createPromotionRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createPromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCampaignsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteCampaignsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePromotionRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/deletePromotionRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deletePromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "onCarryPromotionsFlagSet",
                      "path": "/resources/references/band-store-workflows/onCarryPromotionsFlagSet",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimRequestItemReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimRequestItemReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEditAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderEditAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEditUpdateItemQuantityWorkflow",
                      "path": "/resources/references/band-store-workflows/orderEditUpdateItemQuantityWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderExchangeAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderExchangeAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderExchangeRequestItemReturnWorkflow",
                      "path": "/resources/references/band-store-workflows/orderExchangeRequestItemReturnWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshCartItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshCartItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderActionShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderActionShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderPromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderPromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeGiftCardFromCartWorkflow",
                      "path": "/resources/references/band-store-workflows/removeGiftCardFromCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeItemOrderEditActionWorkflow",
                      "path": "/resources/references/band-store-workflows/removeItemOrderEditActionWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "transferCartCustomerWorkflow",
                      "path": "/resources/references/band-store-workflows/transferCartCustomerWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCampaignsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCampaignsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartPromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartPromotionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateClaimAddItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateClaimAddItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderActionShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderActionShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateExchangeAddItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateExchangeAddItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemInCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateLineItemInCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderChangeWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderChangeWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderEditAddItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderEditAddItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderEditItemQuantityWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderEditItemQuantityWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePromotionRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePromotionRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePromotionsStatusWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePromotionsStatusWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePromotionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePromotionsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+promotion",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addCampaignPromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/addCampaignPromotionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addRulesToPromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/addRulesToPromotionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCampaignsStep",
                      "path": "/resources/references/band-store-workflows/steps/createCampaignsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createPromotionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteCampaignsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteCampaignsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deletePromotionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "getActionsToComputeFromPromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/getActionsToComputeFromPromotionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeCampaignPromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/removeCampaignPromotionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeRulesFromPromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/removeRulesFromPromotionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCampaignsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateCampaignsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePromotionRulesStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePromotionRulesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePromotionsStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePromotionsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+promotion",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Promotion Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "campaign",
                      "path": "/resources/references/js-sdk/admin/campaign",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "promotion",
                      "path": "/resources/references/js-sdk/admin/promotion",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/promotion/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "promotion-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Promotion Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/promotion",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/promotion/IPromotionModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/addPromotionBuyRules",
                      "title": "addPromotionBuyRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/addPromotionRules",
                      "title": "addPromotionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/addPromotionTargetRules",
                      "title": "addPromotionTargetRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/addPromotionsToCampaign",
                      "title": "addPromotionsToCampaign",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/computeActions",
                      "title": "computeActions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/createCampaigns",
                      "title": "createCampaigns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/createPromotions",
                      "title": "createPromotions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/deleteCampaigns",
                      "title": "deleteCampaigns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/deletePromotions",
                      "title": "deletePromotions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/listAndCountCampaigns",
                      "title": "listAndCountCampaigns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/listAndCountPromotions",
                      "title": "listAndCountPromotions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/listCampaigns",
                      "title": "listCampaigns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/listPromotionRules",
                      "title": "listPromotionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/listPromotions",
                      "title": "listPromotions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/registerUsage",
                      "title": "registerUsage",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/removePromotionBuyRules",
                      "title": "removePromotionBuyRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/removePromotionRules",
                      "title": "removePromotionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/removePromotionTargetRules",
                      "title": "removePromotionTargetRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/removePromotionsFromCampaign",
                      "title": "removePromotionsFromCampaign",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/restoreCampaigns",
                      "title": "restoreCampaigns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/restorePromotions",
                      "title": "restorePromotions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/retrieveCampaign",
                      "title": "retrieveCampaign",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/retrievePromotion",
                      "title": "retrievePromotion",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/revertUsage",
                      "title": "revertUsage",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/softDeleteCampaigns",
                      "title": "softDeleteCampaigns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/softDeletePromotions",
                      "title": "softDeletePromotions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/updateCampaigns",
                      "title": "updateCampaigns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/updatePromotionRules",
                      "title": "updatePromotionRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/updatePromotions",
                      "title": "updatePromotions",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "promotion-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Promotion Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/promotion/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/promotion_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/models/ApplicationMethod",
                      "title": "ApplicationMethod",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/models/Campaign",
                      "title": "Campaign",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/models/CampaignBudget",
                      "title": "CampaignBudget",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/models/CampaignBudgetUsage",
                      "title": "CampaignBudgetUsage",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/models/Promotion",
                      "title": "Promotion",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/models/PromotionRule",
                      "title": "PromotionRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/promotion/models/PromotionRuleValue",
                      "title": "PromotionRuleValue",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "ref",
      "path": "/enterprise/rbac",
      "title": "RBAC Module",
      "badge": {
        "variant": "purple",
        "text": "Enterprise"
      },
      "children": []
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "region",
      "title": "Region Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/region",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/region/links-to-other-modules",
              "title": "Links to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+region,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Region Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Express Checkout with BandStore",
              "path": "/resources/storefront-development/guides/express-checkout",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Implement Mobile App with React Native, Expo, and BandStore",
              "path": "/resources/storefront-development/guides/react-native-expo",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "List Regions in Storefront",
              "path": "/resources/storefront-development/regions/list",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Region React Context in Storefront",
              "path": "/resources/storefront-development/regions/context",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Store Selected Region in Storefront",
              "path": "/resources/storefront-development/regions/store-retrieve-region",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+region",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Region features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Regions",
              "path": "/user-guide/settings/regions",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Region Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/region/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+region",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createShippingOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createShippingOptionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "exportProductsWorkflow",
                      "path": "/resources/references/band-store-workflows/exportProductsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateShippingOptionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateShippingOptionsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+region",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createRegionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createRegionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteRegionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteRegionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "exportProductsStep",
                      "path": "/resources/references/band-store-workflows/steps/exportProductsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateRegionsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateRegionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validateShippingOptionPricesStep",
                      "path": "/resources/references/band-store-workflows/steps/validateShippingOptionPricesStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/region/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Store",
                  "autogenerate_tags": "jsSdk+storefront+region",
                  "description": "The following methods or properties are used to send requests to Store API Routes related to the Region Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "region",
                      "path": "/resources/references/js-sdk/store/region",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+region",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Region Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "region",
                      "path": "/resources/references/js-sdk/admin/region",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/region/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/region/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "region-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Region Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/region",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/region/IRegionModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/createRegions",
                      "title": "createRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/deleteRegions",
                      "title": "deleteRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/listAndCountCountries",
                      "title": "listAndCountCountries",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/listAndCountRegions",
                      "title": "listAndCountRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/listCountries",
                      "title": "listCountries",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/listRegions",
                      "title": "listRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/restoreRegions",
                      "title": "restoreRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/retrieveCountry",
                      "title": "retrieveCountry",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/retrieveRegion",
                      "title": "retrieveRegion",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/softDeleteRegions",
                      "title": "softDeleteRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/updateRegions",
                      "title": "updateRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/upsertRegions",
                      "title": "upsertRegions",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "region-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Region Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/region/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/region_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/models/Country",
                      "title": "Country",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/region/models/Region",
                      "title": "Region",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "sales-channel",
      "title": "Sales Channel Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/sales-channel",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "autogenerate_tags": "concept+salesChannel",
          "autogenerate_as_ref": true,
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/sales-channel/publishable-api-keys",
              "title": "Publishable API Keys",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/sales-channel/links-to-other-modules",
              "title": "Links to Modules",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Product Variant Inventory",
              "path": "/resources/commerce-modules/product/variant-inventory",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+salesChannel",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Sales Channel Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Enforce Sales Channel Availability",
              "path": "/resources/commerce-modules/cart/sales-channel-availability",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Get Variant Inventory",
              "path": "/resources/commerce-modules/product/guides/variant-inventory",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+salesChannel,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Sales Channel Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Use a Publishable API Key in the Storefront",
              "path": "/resources/storefront-development/publishable-api-keys",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+salesChannel",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Sales Channel features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Sales Channels",
              "path": "/user-guide/settings/sales-channels",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Sales Channel Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/sales-channel/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+salesChannel",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createDefaultsWorkflow",
                      "path": "/resources/references/band-store-workflows/createDefaultsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createSalesChannelsWorkflow",
                      "path": "/resources/references/band-store-workflows/createSalesChannelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteSalesChannelsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteSalesChannelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "linkSalesChannelsToApiKeyWorkflow",
                      "path": "/resources/references/band-store-workflows/linkSalesChannelsToApiKeyWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateSalesChannelsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateSalesChannelsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+salesChannel",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createDefaultSalesChannelStep",
                      "path": "/resources/references/band-store-workflows/steps/createDefaultSalesChannelStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createSalesChannelsStep",
                      "path": "/resources/references/band-store-workflows/steps/createSalesChannelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteSalesChannelsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteSalesChannelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateSalesChannelsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateSalesChannelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validateSalesChannelsExistStep",
                      "path": "/resources/references/band-store-workflows/steps/validateSalesChannelsExistStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/sales-channel/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+salesChannel",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Sales Channel Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "salesChannel",
                      "path": "/resources/references/js-sdk/admin/salesChannel",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/sales-channel/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/sales-channel/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "sales-channel-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Sales Channel Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/sales-channel",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/sales_channel/ISalesChannelModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/createSalesChannels",
                      "title": "createSalesChannels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/deleteSalesChannels",
                      "title": "deleteSalesChannels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/listAndCountSalesChannels",
                      "title": "listAndCountSalesChannels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/listSalesChannels",
                      "title": "listSalesChannels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/restoreSalesChannels",
                      "title": "restoreSalesChannels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/retrieveSalesChannel",
                      "title": "retrieveSalesChannel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/softDeleteSalesChannels",
                      "title": "softDeleteSalesChannels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/updateSalesChannels",
                      "title": "updateSalesChannels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/upsertSalesChannels",
                      "title": "upsertSalesChannels",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "sales-channel-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Sales Channel Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/sales-channel/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/sales_channel_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/sales-channel/models/SalesChannel",
                      "title": "SalesChannel",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "settings",
      "title": "Settings Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/settings",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/concepts",
              "title": "Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/view-configurations",
              "title": "View Configurations",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/layout-configurations",
              "title": "Layout Configurations",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/property-labels",
              "title": "Property Labels",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/user-preferences",
              "title": "User Preferences",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+settings",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Settings Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Configure View Configurations",
              "path": "/resources/commerce-modules/settings/configure-view-configurations",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin Guides",
          "autogenerate_tags": "admin+settings,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize administrative features of the Settings Module.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/configure-view-configurations",
              "title": "Configure View Configurations",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+settings",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Settings features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Configure Layouts",
              "path": "/user-guide/tips/layout-configurations",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Configure Table Views",
              "path": "/user-guide/tips/table-views",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Property Labels",
              "path": "/user-guide/settings/property-labels",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Settings Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+settings",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "clearLayoutConfigurationWorkflow",
                      "path": "/resources/references/band-store-workflows/clearLayoutConfigurationWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPropertyLabelsWorkflow",
                      "path": "/resources/references/band-store-workflows/createPropertyLabelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createViewConfigurationWorkflow",
                      "path": "/resources/references/band-store-workflows/createViewConfigurationWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePropertyLabelsWorkflow",
                      "path": "/resources/references/band-store-workflows/deletePropertyLabelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setLayoutConfigurationWorkflow",
                      "path": "/resources/references/band-store-workflows/setLayoutConfigurationWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePropertyLabelsWorkflow",
                      "path": "/resources/references/band-store-workflows/updatePropertyLabelsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateViewConfigurationWorkflow",
                      "path": "/resources/references/band-store-workflows/updateViewConfigurationWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+settings",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "clearLayoutConfigurationStep",
                      "path": "/resources/references/band-store-workflows/steps/clearLayoutConfigurationStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createPropertyLabelsStep",
                      "path": "/resources/references/band-store-workflows/steps/createPropertyLabelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createViewConfigurationStep",
                      "path": "/resources/references/band-store-workflows/steps/createViewConfigurationStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deletePropertyLabelsStep",
                      "path": "/resources/references/band-store-workflows/steps/deletePropertyLabelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setActiveLayoutScopeStep",
                      "path": "/resources/references/band-store-workflows/steps/setActiveLayoutScopeStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setActiveViewConfigurationStep",
                      "path": "/resources/references/band-store-workflows/steps/setActiveViewConfigurationStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setLayoutConfigurationStep",
                      "path": "/resources/references/band-store-workflows/steps/setLayoutConfigurationStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updatePropertyLabelsStep",
                      "path": "/resources/references/band-store-workflows/steps/updatePropertyLabelsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateViewConfigurationStep",
                      "path": "/resources/references/band-store-workflows/steps/updateViewConfigurationStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+settings,jsSdk+admin+views",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Settings Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "views",
                      "path": "/resources/references/js-sdk/admin/views",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/settings/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "settings-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Settings Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/settings",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/settings/ISettingsModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/clearActiveViewConfiguration",
                      "title": "clearActiveViewConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/clearLayoutConfiguration",
                      "title": "clearLayoutConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/createLayoutConfigurations",
                      "title": "createLayoutConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/createPropertyLabels",
                      "title": "createPropertyLabels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/createUserPreferences",
                      "title": "createUserPreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/createViewConfigurations",
                      "title": "createViewConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/deleteLayoutConfigurations",
                      "title": "deleteLayoutConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/deletePropertyLabels",
                      "title": "deletePropertyLabels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/deleteUserPreferences",
                      "title": "deleteUserPreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/deleteViewConfigurations",
                      "title": "deleteViewConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/generateEntityColumns",
                      "title": "generateEntityColumns",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/getActiveLayoutScope",
                      "title": "getActiveLayoutScope",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/getActiveViewConfiguration",
                      "title": "getActiveViewConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/getSystemDefaultLayoutConfiguration",
                      "title": "getSystemDefaultLayoutConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/getSystemDefaultViewConfiguration",
                      "title": "getSystemDefaultViewConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/getUserPreference",
                      "title": "getUserPreference",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/hasEntity",
                      "title": "hasEntity",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/isEntityDiscoveryInitialized",
                      "title": "isEntityDiscoveryInitialized",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listAndCountLayoutConfigurations",
                      "title": "listAndCountLayoutConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listAndCountPropertyLabels",
                      "title": "listAndCountPropertyLabels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listAndCountUserPreferences",
                      "title": "listAndCountUserPreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listAndCountViewConfigurations",
                      "title": "listAndCountViewConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listDiscoverableEntities",
                      "title": "listDiscoverableEntities",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listLayoutConfigurations",
                      "title": "listLayoutConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listPropertyLabels",
                      "title": "listPropertyLabels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listUserPreferences",
                      "title": "listUserPreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/listViewConfigurations",
                      "title": "listViewConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/retrieveLayoutConfiguration",
                      "title": "retrieveLayoutConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/retrievePropertyLabel",
                      "title": "retrievePropertyLabel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/retrieveUserPreference",
                      "title": "retrieveUserPreference",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/retrieveViewConfiguration",
                      "title": "retrieveViewConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/setActiveLayoutScope",
                      "title": "setActiveLayoutScope",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/setActiveViewConfiguration",
                      "title": "setActiveViewConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/setLayoutConfiguration",
                      "title": "setLayoutConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/setSystemDefaultLayoutConfiguration",
                      "title": "setSystemDefaultLayoutConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/setUserPreference",
                      "title": "setUserPreference",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/updatePropertyLabels",
                      "title": "updatePropertyLabels",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/updateUserPreferences",
                      "title": "updateUserPreferences",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/updateViewConfigurations",
                      "title": "updateViewConfigurations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/upsertPropertyLabels",
                      "title": "upsertPropertyLabels",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "settings-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Settings Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/settings/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/settings_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/models/LayoutConfiguration",
                      "title": "LayoutConfiguration",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/models/PropertyLabel",
                      "title": "PropertyLabel",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/models/UserPreference",
                      "title": "UserPreference",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/settings/models/ViewConfiguration",
                      "title": "ViewConfiguration",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "stock-location",
      "title": "Stock Location Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/stock-location",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "autogenerate_tags": "concept+stockLocation",
          "autogenerate_as_ref": true,
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/stock-location/concepts",
              "title": "Stock Location Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/stock-location/links-to-other-modules",
              "title": "Links to Modules",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Inventory Kits",
              "path": "/resources/commerce-modules/inventory/inventory-kit",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Product Variant Inventory",
              "path": "/resources/commerce-modules/product/variant-inventory",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+stockLocation",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Stock Location features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Locations & Shipping Overview",
              "path": "/user-guide/settings/locations-and-shipping",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Locations",
              "path": "/user-guide/settings/locations-and-shipping/locations",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Stock Location Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/stock-location/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+stockLocation",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createStockLocationsWorkflow",
                      "path": "/resources/references/band-store-workflows/createStockLocationsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteStockLocationsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteStockLocationsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "exportInventoryItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/exportInventoryItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateStockLocationsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateStockLocationsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+stockLocation",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createStockLocations",
                      "path": "/resources/references/band-store-workflows/steps/createStockLocations",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteStockLocationsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteStockLocationsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "exportInventoryItemsStep",
                      "path": "/resources/references/band-store-workflows/steps/exportInventoryItemsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateStockLocationsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateStockLocationsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/stock-location/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+stockLocation",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Stock Location Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "stockLocation",
                      "path": "/resources/references/js-sdk/admin/stockLocation",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/stock-location/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "stock-location-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Stock Location Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/stock-location-next",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/stock_location_next/IStockLocationService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/createStockLocations",
                      "title": "createStockLocations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/deleteStockLocationAddresses",
                      "title": "deleteStockLocationAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/deleteStockLocations",
                      "title": "deleteStockLocations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/listAndCountStockLocations",
                      "title": "listAndCountStockLocations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/listStockLocationAddresses",
                      "title": "listStockLocationAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/listStockLocations",
                      "title": "listStockLocations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/restoreStockLocations",
                      "title": "restoreStockLocations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/retrieveStockLocation",
                      "title": "retrieveStockLocation",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/softDeleteStockLocations",
                      "title": "softDeleteStockLocations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/updateStockLocations",
                      "title": "updateStockLocations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/upsertStockLocationAddresses",
                      "title": "upsertStockLocationAddresses",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/upsertStockLocations",
                      "title": "upsertStockLocations",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "stock-location-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Stock Location Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/stock-location-next/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/stock_location_next_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/models/StockLocation",
                      "title": "StockLocation",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/stock-location-next/models/StockLocationAddress",
                      "title": "StockLocationAddress",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "store",
      "title": "Store Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/store",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store/locales",
              "title": "Locales",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+store",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Store features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Store",
              "path": "/user-guide/settings/store",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Store Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+store",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createDefaultsWorkflow",
                      "path": "/resources/references/band-store-workflows/createDefaultsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createStoresWorkflow",
                      "path": "/resources/references/band-store-workflows/createStoresWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteStoresWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteStoresWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateStoresWorkflow",
                      "path": "/resources/references/band-store-workflows/updateStoresWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+store",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createDefaultStoreStep",
                      "path": "/resources/references/band-store-workflows/steps/createDefaultStoreStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createStoresStep",
                      "path": "/resources/references/band-store-workflows/steps/createStoresStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteStoresStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteStoresStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateStoresStep",
                      "path": "/resources/references/band-store-workflows/steps/updateStoresStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+store",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Store Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "store",
                      "path": "/resources/references/js-sdk/admin/store",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "store-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Store Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/store",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/store/IStoreModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/createStores",
                      "title": "createStores",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/deleteStores",
                      "title": "deleteStores",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/listAndCountStores",
                      "title": "listAndCountStores",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/listStores",
                      "title": "listStores",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/restoreStores",
                      "title": "restoreStores",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/retrieveStore",
                      "title": "retrieveStore",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/softDeleteStores",
                      "title": "softDeleteStores",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/updateStores",
                      "title": "updateStores",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/upsertStores",
                      "title": "upsertStores",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "store-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Store Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/store/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/store_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/models/Store",
                      "title": "Store",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/models/StoreCurrency",
                      "title": "StoreCurrency",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store/models/StoreLocale",
                      "title": "StoreLocale",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "store-credit",
      "title": "Store Credit Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/store-credit",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store-credit/concepts",
              "title": "Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store-credit/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+storeCredit",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Store Credit features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Store Credits",
              "path": "/user-guide/loyalty/store-credits/manage",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Store Credits Overview",
              "path": "/user-guide/loyalty/store-credits",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Store Credit Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store-credit/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+storeCredit",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "claimGiftCardWorkflow",
                      "path": "/resources/references/band-store-workflows/claimGiftCardWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "claimStoreCreditAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/claimStoreCreditAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmCartCreditLinesWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmCartCreditLinesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createGiftCardsWorkflow",
                      "path": "/resources/references/band-store-workflows/createGiftCardsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createStoreCreditAccountsWorkflow",
                      "path": "/resources/references/band-store-workflows/createStoreCreditAccountsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "creditAccountsWorkflow",
                      "path": "/resources/references/band-store-workflows/creditAccountsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "creditStoreCreditAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/creditStoreCreditAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "debitAccountsWorkflow",
                      "path": "/resources/references/band-store-workflows/debitAccountsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "debitStoreCreditAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/debitStoreCreditAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "redeemGiftCardWorkflow",
                      "path": "/resources/references/band-store-workflows/redeemGiftCardWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+storeCredit",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createStoreCreditAccountsStep",
                      "path": "/resources/references/band-store-workflows/steps/createStoreCreditAccountsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "creditAccountStep",
                      "path": "/resources/references/band-store-workflows/steps/creditAccountStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "debitAccountStep",
                      "path": "/resources/references/band-store-workflows/steps/debitAccountStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/store-credit/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "store-credit-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Store Credit Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/store-credit",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/store_credit/IStoreCreditModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/createStoreCreditAccounts",
                      "title": "createStoreCreditAccounts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/creditAccounts",
                      "title": "creditAccounts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/debitAccounts",
                      "title": "debitAccounts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/deleteStoreCreditAccounts",
                      "title": "deleteStoreCreditAccounts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/deleteTransactions",
                      "title": "deleteTransactions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/listAccountTransactions",
                      "title": "listAccountTransactions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/listStoreCreditAccounts",
                      "title": "listStoreCreditAccounts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/restoreStoreCreditAccounts",
                      "title": "restoreStoreCreditAccounts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/retrieveAccountStats",
                      "title": "retrieveAccountStats",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/retrieveStoreCreditAccount",
                      "title": "retrieveStoreCreditAccount",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/softDeleteStoreCreditAccounts",
                      "title": "softDeleteStoreCreditAccounts",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/updateStoreCreditAccounts",
                      "title": "updateStoreCreditAccounts",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "store-credit-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Store Credit Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/store-credit/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/store_credit_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/models/AccountTransaction",
                      "title": "AccountTransaction",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/store-credit/models/StoreCreditAccount",
                      "title": "StoreCreditAccount",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "tax",
      "title": "Tax Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/tax",
          "title": "Overview",
          "children": []
        },
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/tax/module-options",
          "title": "Module Options",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/tax/tax-region",
              "title": "Tax Region",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/tax/tax-rates-and-rules",
              "title": "Tax Rates and Rules",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/tax/tax-provider",
              "title": "Tax Module Providers",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/tax/tax-calculation-with-provider",
              "title": "Tax Calculation",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+tax",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the Tax Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/references/tax/provider",
              "title": "Create Tax Provider",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Get Variant Price with Taxes",
              "path": "/resources/commerce-modules/product/guides/price-with-taxes",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+tax,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Tax Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Example: Show Price with Taxes",
              "path": "/resources/storefront-development/products/price/examples/tax-price",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+tax",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Tax features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Tax Regions",
              "path": "/user-guide/settings/tax-regions",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Tax Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/tax/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+tax",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/addDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addGiftCardToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addGiftCardToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addShippingMethodToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addShippingMethodToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addStoreCreditsToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addStoreCreditsToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "addToCartWorkflow",
                      "path": "/resources/references/band-store-workflows/addToCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "confirmDraftOrderEditWorkflow",
                      "path": "/resources/references/band-store-workflows/confirmDraftOrderEditWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "convertDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/convertDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createCartWorkflow",
                      "path": "/resources/references/band-store-workflows/createCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createClaimShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createClaimShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createExchangeShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createExchangeShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderEditShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderEditShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/createOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createReturnShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/createReturnShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTaxRateRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/createTaxRateRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTaxRatesWorkflow",
                      "path": "/resources/references/band-store-workflows/createTaxRatesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTaxRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/createTaxRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteLineItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteLineItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTaxRateRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteTaxRateRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTaxRatesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteTaxRatesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTaxRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteTaxRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderClaimAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderClaimAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderEditAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderEditAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "orderExchangeAddNewItemWorkflow",
                      "path": "/resources/references/band-store-workflows/orderExchangeAddNewItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshCartItemsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshCartItemsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshConfirmedDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshConfirmedDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshPendingDraftOrderShippingMethodsWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshPendingDraftOrderShippingMethodsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/removeDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeGiftCardFromCartWorkflow",
                      "path": "/resources/references/band-store-workflows/removeGiftCardFromCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "setTaxRateRulesWorkflow",
                      "path": "/resources/references/band-store-workflows/setTaxRateRulesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "transferCartCustomerWorkflow",
                      "path": "/resources/references/band-store-workflows/transferCartCustomerWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderActionItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderActionItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderItemWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderItemWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderShippingMethodWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderShippingMethodWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateDraftOrderWorkflow",
                      "path": "/resources/references/band-store-workflows/updateDraftOrderWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateLineItemInCartWorkflow",
                      "path": "/resources/references/band-store-workflows/updateLineItemInCartWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateOrderTaxLinesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateOrderTaxLinesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTaxLinesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateTaxLinesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTaxRatesWorkflow",
                      "path": "/resources/references/band-store-workflows/updateTaxRatesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTaxRegionsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateTaxRegionsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "upsertTaxLinesWorkflow",
                      "path": "/resources/references/band-store-workflows/upsertTaxLinesWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+tax",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTaxRateRulesStep",
                      "path": "/resources/references/band-store-workflows/steps/createTaxRateRulesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTaxRatesStep",
                      "path": "/resources/references/band-store-workflows/steps/createTaxRatesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTaxRegionsStep",
                      "path": "/resources/references/band-store-workflows/steps/createTaxRegionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTaxRateRulesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteTaxRateRulesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTaxRatesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteTaxRatesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTaxRegionsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteTaxRegionsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "getItemTaxLinesStep",
                      "path": "/resources/references/band-store-workflows/steps/getItemTaxLinesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "listTaxRateRuleIdsStep",
                      "path": "/resources/references/band-store-workflows/steps/listTaxRateRuleIdsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTaxRatesStep",
                      "path": "/resources/references/band-store-workflows/steps/updateTaxRatesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTaxRegionsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateTaxRegionsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/tax/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+tax",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the Tax Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "taxProvider",
                      "path": "/resources/references/js-sdk/admin/taxProvider",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "taxRate",
                      "path": "/resources/references/js-sdk/admin/taxRate",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "taxRegion",
                      "path": "/resources/references/js-sdk/admin/taxRegion",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/tax/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "tax-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Tax Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/tax",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/tax/ITaxModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/createTaxRateRules",
                      "title": "createTaxRateRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/createTaxRates",
                      "title": "createTaxRates",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/createTaxRegions",
                      "title": "createTaxRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/deleteTaxRateRules",
                      "title": "deleteTaxRateRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/deleteTaxRates",
                      "title": "deleteTaxRates",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/deleteTaxRegions",
                      "title": "deleteTaxRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/getProvider",
                      "title": "getProvider",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/getTaxLines",
                      "title": "getTaxLines",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/listAndCountTaxRates",
                      "title": "listAndCountTaxRates",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/listTaxProviders",
                      "title": "listTaxProviders",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/listTaxRateRules",
                      "title": "listTaxRateRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/listTaxRates",
                      "title": "listTaxRates",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/listTaxRegions",
                      "title": "listTaxRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/restoreTaxRateRules",
                      "title": "restoreTaxRateRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/restoreTaxRates",
                      "title": "restoreTaxRates",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/restoreTaxRegions",
                      "title": "restoreTaxRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/retrieveTaxRate",
                      "title": "retrieveTaxRate",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/softDeleteTaxRateRules",
                      "title": "softDeleteTaxRateRules",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/softDeleteTaxRates",
                      "title": "softDeleteTaxRates",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/softDeleteTaxRegions",
                      "title": "softDeleteTaxRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/updateTaxRates",
                      "title": "updateTaxRates",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/updateTaxRegions",
                      "title": "updateTaxRegions",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/upsertTaxRates",
                      "title": "upsertTaxRates",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "tax-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Tax Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/tax/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "autogenerate_path": "/references/tax_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/models/TaxProvider",
                      "title": "TaxProvider",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/models/TaxRate",
                      "title": "TaxRate",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/models/TaxRateRule",
                      "title": "TaxRateRule",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/tax/models/TaxRegion",
                      "title": "TaxRegion",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "translation",
      "title": "Translation Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/translation",
          "title": "Overview",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/translation/concepts",
              "title": "Concepts",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/translation/custom-data-models",
              "title": "Translate Custom Models",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/translation/storefront",
              "title": "Translation in Storefront",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/translation/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Storefront Guides",
          "autogenerate_tags": "storefront+translation,-jsSdk",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to integrate the Translation Module's features into your storefront.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Storefront Localization",
              "path": "/resources/storefront-development/localization",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+translation",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage Translation features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Store",
              "path": "/user-guide/settings/store",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Translations",
              "path": "/user-guide/settings/translations",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the Translation Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/translation/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+translation",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchTranslationSettingsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchTranslationSettingsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "batchTranslationsWorkflow",
                      "path": "/resources/references/band-store-workflows/batchTranslationsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTranslationsWorkflow",
                      "path": "/resources/references/band-store-workflows/createTranslationsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTranslationsWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteTranslationsWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTranslationsWorkflow",
                      "path": "/resources/references/band-store-workflows/updateTranslationsWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+translation",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTranslationSettingsStep",
                      "path": "/resources/references/band-store-workflows/steps/createTranslationSettingsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createTranslationsStep",
                      "path": "/resources/references/band-store-workflows/steps/createTranslationsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTranslationSettingsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteTranslationSettingsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteTranslationsStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteTranslationsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTranslationSettingsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateTranslationSettingsStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateTranslationsStep",
                      "path": "/resources/references/band-store-workflows/steps/updateTranslationsStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/translation/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "translation-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "Translation Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/translation",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/translation/ITranslationModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/createLocales",
                      "title": "createLocales",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/createTranslationSettings",
                      "title": "createTranslationSettings",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/createTranslations",
                      "title": "createTranslations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/deleteLocales",
                      "title": "deleteLocales",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/deleteTranslationSettings",
                      "title": "deleteTranslationSettings",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/deleteTranslations",
                      "title": "deleteTranslations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/getInactiveTranslatableFields",
                      "title": "getInactiveTranslatableFields",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/getStatistics",
                      "title": "getStatistics",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/getTranslatableFields",
                      "title": "getTranslatableFields",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/listAndCountLocales",
                      "title": "listAndCountLocales",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/listAndCountTranslationSettings",
                      "title": "listAndCountTranslationSettings",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/listAndCountTranslations",
                      "title": "listAndCountTranslations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/listLocales",
                      "title": "listLocales",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/listTranslationSettings",
                      "title": "listTranslationSettings",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/listTranslations",
                      "title": "listTranslations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/restoreLocales",
                      "title": "restoreLocales",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/restoreTranslations",
                      "title": "restoreTranslations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/retrieveLocale",
                      "title": "retrieveLocale",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/retrieveTranslation",
                      "title": "retrieveTranslation",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/retrieveTranslationSettings",
                      "title": "retrieveTranslationSettings",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/softDeleteLocales",
                      "title": "softDeleteLocales",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/softDeleteTranslations",
                      "title": "softDeleteTranslations",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/updateLocales",
                      "title": "updateLocales",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/updateTranslationSettings",
                      "title": "updateTranslationSettings",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/updateTranslations",
                      "title": "updateTranslations",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "translation-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "Translation Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/translation/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/translation_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/models/Locale",
                      "title": "Locale",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/models/Settings",
                      "title": "Settings",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/translation/models/Translation",
                      "title": "Translation",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "loaded": true,
      "type": "sidebar",
      "sidebar_id": "user",
      "title": "User Module",
      "children": [
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/user",
          "title": "Overview",
          "children": []
        },
        {
          "loaded": true,
          "type": "link",
          "path": "/commerce-modules/user/module-options",
          "title": "Module Options",
          "children": []
        },
        {
          "type": "separator"
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Concepts",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/user/links-to-other-modules",
              "title": "Link to Modules",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Server Guides",
          "autogenerate_tags": "server+user",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to use the User Module in your customizations on the BandStore application server.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Custom Admin Authentication",
              "path": "/resources/how-to-tutorials/how-to/admin/auth",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/user/invite-user-subscriber",
              "title": "Invite User Email",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/user/user-creation-flows",
              "title": "User Creation Flows",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "Admin User Guides",
          "autogenerate_tags": "userGuide+user",
          "autogenerate_as_ref": true,
          "sort_sidebar": "alphabetize",
          "description": "Learn how to utilize and manage User features in the BandStore Admin dashboard.",
          "children": [
            {
              "loaded": true,
              "type": "ref",
              "title": "Common Roles",
              "path": "/user-guide/settings/roles/common-roles",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Login Options",
              "path": "/user-guide/tips/login-options",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Invites",
              "path": "/user-guide/settings/users/invites",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Profile",
              "path": "/user-guide/settings/profile",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Roles",
              "path": "/user-guide/settings/roles",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Manage Users",
              "path": "/user-guide/settings/users",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "Reset Password",
              "path": "/user-guide/reset-password",
              "children": []
            },
            {
              "loaded": true,
              "type": "ref",
              "title": "View Policies",
              "path": "/user-guide/settings/policies",
              "children": []
            }
          ]
        },
        {
          "loaded": true,
          "type": "category",
          "title": "References",
          "description": "Find references for tools and resources related to the User Module, such as data models, methods, and more. These are useful for your customizations.",
          "children": [
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/user/workflows",
              "title": "Workflows",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Workflows",
                  "autogenerate_tags": "workflow+user",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "acceptInviteWorkflow",
                      "path": "/resources/references/band-store-workflows/acceptInviteWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createInvitesWorkflow",
                      "path": "/resources/references/band-store-workflows/createInvitesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createUserAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/createUserAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createUsersWorkflow",
                      "path": "/resources/references/band-store-workflows/createUsersWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteInvitesWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteInvitesWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteUsersWorkflow",
                      "path": "/resources/references/band-store-workflows/deleteUsersWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshInviteTokensWorkflow",
                      "path": "/resources/references/band-store-workflows/refreshInviteTokensWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "removeUserAccountWorkflow",
                      "path": "/resources/references/band-store-workflows/removeUserAccountWorkflow",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateUsersWorkflow",
                      "path": "/resources/references/band-store-workflows/updateUsersWorkflow",
                      "children": []
                    }
                  ]
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Steps",
                  "autogenerate_tags": "step+user",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createInviteStep",
                      "path": "/resources/references/band-store-workflows/steps/createInviteStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "createUsersStep",
                      "path": "/resources/references/band-store-workflows/steps/createUsersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteInvitesStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteInvitesStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "deleteUsersStep",
                      "path": "/resources/references/band-store-workflows/steps/deleteUsersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "refreshInviteTokensStep",
                      "path": "/resources/references/band-store-workflows/steps/refreshInviteTokensStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "updateUsersStep",
                      "path": "/resources/references/band-store-workflows/steps/updateUsersStep",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "validateTokenStep",
                      "path": "/resources/references/band-store-workflows/steps/validateTokenStep",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/user/js-sdk",
              "title": "JS SDK",
              "hideChildren": true,
              "children": [
                {
                  "loaded": true,
                  "type": "sub-category",
                  "title": "Admin",
                  "autogenerate_tags": "jsSdk+admin+user",
                  "description": "The following methods or properties are used to send requests to Admin API Routes related to the User Module.",
                  "autogenerate_as_ref": true,
                  "sort_sidebar": "alphabetize",
                  "children": [
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "invite",
                      "path": "/resources/references/js-sdk/admin/invite",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "ref",
                      "title": "user",
                      "path": "/resources/references/js-sdk/admin/user",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/references/user/events",
              "title": "Events Reference",
              "children": []
            },
            {
              "loaded": true,
              "type": "link",
              "path": "/commerce-modules/user/admin-widget-zones",
              "title": "Admin Widget Zones",
              "children": []
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "user-service-reference",
              "title": "Main Service Reference",
              "childSidebarTitle": "User Module's Main Service Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/user",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Methods",
                  "autogenerate_path": "/references/user/IUserModuleService/methods",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/createInvites",
                      "title": "createInvites",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/createUsers",
                      "title": "createUsers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/deleteInvites",
                      "title": "deleteInvites",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/deleteUsers",
                      "title": "deleteUsers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/listAndCountInvites",
                      "title": "listAndCountInvites",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/listAndCountUsers",
                      "title": "listAndCountUsers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/listInvites",
                      "title": "listInvites",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/listUsers",
                      "title": "listUsers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/refreshInviteTokens",
                      "title": "refreshInviteTokens",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/restoreInvites",
                      "title": "restoreInvites",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/restoreUsers",
                      "title": "restoreUsers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/retrieveInvite",
                      "title": "retrieveInvite",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/retrieveUser",
                      "title": "retrieveUser",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/softDeleteInvites",
                      "title": "softDeleteInvites",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/softDeleteUsers",
                      "title": "softDeleteUsers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/updateInvites",
                      "title": "updateInvites",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/updateUsers",
                      "title": "updateUsers",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/validateInviteToken",
                      "title": "validateInviteToken",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "loaded": true,
              "type": "sidebar",
              "sidebar_id": "user-models-reference",
              "title": "Data Models Reference",
              "childSidebarTitle": "User Module Data Models Reference",
              "children": [
                {
                  "loaded": true,
                  "type": "link",
                  "path": "/references/user/models",
                  "title": "Reference Overview",
                  "children": []
                },
                {
                  "type": "separator"
                },
                {
                  "loaded": true,
                  "type": "category",
                  "title": "Data Models",
                  "hasTitleStyling": true,
                  "autogenerate_path": "/references/user_models/variables",
                  "children": [
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/models/Invite",
                      "title": "Invite",
                      "description": "",
                      "children": []
                    },
                    {
                      "loaded": true,
                      "type": "link",
                      "path": "/references/user/models/User",
                      "title": "User",
                      "description": "",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default generatedgeneratedCommerceModulesSidebarSidebar