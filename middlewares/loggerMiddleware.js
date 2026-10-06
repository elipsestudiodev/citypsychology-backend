/**
 * Request Logger Middleware
 * Logs method, route, and response time
 */
export const requestLogger = (req, res, next) => {
  const start = Date.now();
  const { method, originalUrl } = req;

  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    const statusColor =
      status >= 500
        ? '🔴'
        : status >= 400
        ? '🟡'
        : status >= 300
        ? '🔵'
        : '🟢';

    console.log(
      `${statusColor} [${new Date().toLocaleTimeString()}] ${method} ${originalUrl} ${status} - ${duration}ms`
    );
  });

  next();
};
