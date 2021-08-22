import TootlipContainer from './TootlipContainer';
import 'assets/elements.tooltip.scss';

export type TooltipPropsType = {
  children: React.ReactNode;
};
function Tooltip(props: TooltipPropsType) {
  return <TootlipContainer>{props.children}</TootlipContainer>;
}

export default Tooltip;
