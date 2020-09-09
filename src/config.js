export default {
  STRIPE_KEY: "pk_test_51H8IhmK0MCriChhAEPTZKlp2OvXhYy4TI88jsU6aWwZG9Fzap13nU5K87J8nZRCQOytQSPK6qIXMnSOtU3epygbT00yzjSaZ8",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-7yfgrczvc39n"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://yvcymznloj.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_iHfvZHELu",
    APP_CLIENT_ID: "kan56cpon7l8dd10g72qdksbt",
    IDENTITY_POOL_ID: "us-west-2:9cf567fc-4e01-4d55-b078-eecb36cffdf2"
  }
};
