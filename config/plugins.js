module.exports = ({ env }) => ({
  email: {
    provider: "smtp",
    providerOptions: {
      host: "email-smtp.ap-northeast-1.amazonaws.com", //SMTP Host
      port: 465, //SMTP Port
      secure: true,
      username: env("AWS_MAIL_USERNAME"),
      password: env("AWS_MAIL_PASSWORD"),
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      defaultFrom: "no-reply@u-i.mn",
      defaultReplyTo: "no-reply@u-i.mn",
      from: "no-reply@u-i.mn",
      replyTo: "hello@u-i.mn",
    },
  },
});
