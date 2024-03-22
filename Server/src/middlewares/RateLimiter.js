import rateLimit from 'express-rate-limit';

const RateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 requests per IP within the defined windowMs
  });

  export {RateLimiter};