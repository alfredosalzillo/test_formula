/**
 * A [clsx](https://www.npmjs.com/package/clsx) like
 * utility to merge conditionally classNames.
 *
 * Examples
 * ```javascript
 * import classes from './Button.module.css'
 * import clsx from './clsx'
 *
 * function Button({ fullWidth = false, className, ...props}) {
 *    return <button
 *      {...props}
 *      className={clsx(className, classes.root, {
 *        [classes.fullWidth]: fullWidth,
 *      })}
 *    />
 * }
 * ```
 */
const clsx = (...args: (string | undefined | null | { [key: string]: boolean })[]): string => args
  .flatMap((className) => {
    if (!className) return null;
    if (typeof className === 'string') return className;
    return Object
      .entries(className)
      .filter(([, value]) => value)
      .map(([key]) => key);
  })
  // filter falsy values as empty string, undefined and nulls
  .filter(Boolean)
  .join(' ');

export default clsx;
