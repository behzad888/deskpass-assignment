import ReactDOM from 'react-dom';

export type TootlipContainerPropsType = {
  children: React.ReactNode;
  show: boolean;
};
function TootlipContainer({children, show}: TootlipContainerPropsType) {
  return show ? ReactDOM.createPortal(children, document.body) : null;
}

export default TootlipContainer;
