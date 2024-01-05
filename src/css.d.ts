declare module 'csstype' {
  interface Properties {
    // Add a missing property
    WebkitRocketLauncher?: string;

    // Allow any CSS Custom Properties
    [index: `--${string}`]: any;

    // ...or allow any other property
    [index: string]: any;
  }
}
