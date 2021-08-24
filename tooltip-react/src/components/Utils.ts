export function composeEventHandler(
  internal: (event: MouseEvent) => void,
  external: (event: MouseEvent) => void
) {
  return (event: MouseEvent) => {
    if (external) {
      external(event);
    }
    internal(event);
  };
}
