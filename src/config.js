export default {
  STRIPE_KEY: "pk_test_51H8IhmK0MCriChhAEPTZKlp2OvXhYy4TI88jsU6aWwZG9Fzap13nU5K87J8nZRCQOytQSPK6qIXMnSOtU3epygbT00yzjSaZ8",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "coffee-chat-app-api-dev-serverlessdeploymentbucke-4tcviv0itrnz"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://jrew0lokb9.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_RzXd2yn2s",
    APP_CLIENT_ID: "1h964kvm8pq097fnajuj3nj8pi",
    IDENTITY_POOL_ID: "us-west-2:01cfb061-37cf-4e75-b63b-5cfe063e0db3"
  }
};
