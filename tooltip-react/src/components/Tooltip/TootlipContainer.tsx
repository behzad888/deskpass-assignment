export type TootlipContainerPropsType = {
  children: React.ReactNode;
  className: string;
};
function TootlipContainer({children, className}: TootlipContainerPropsType) {
  return <div className={'ne-tooltip ne-tooltip-container ' + className}>{children}</div>;
}

TootlipContainer.defaultProps = {
  className: '',
};

export default TootlipContainer;
