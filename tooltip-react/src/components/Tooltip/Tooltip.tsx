import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {createPopper, Placement} from '@popperjs/core';
import TootlipContainer from './TootlipContainer';
import {useId} from 'hooks';

import 'assets/elements.tooltip.scss';

export type TooltipPropsType = {
  children: React.ReactElement;
  title?: string | React.ReactElement;
  //These are popper options
  //We are filtering some popper useless options.
  place?: Placement;
  flip?: boolean;
  preventOverflow?: boolean;
  offset?: [number, number];
  showArrow?: boolean;
};
//this is a uncontrolled component
function Tooltip(props: TooltipPropsType) {
  const {children, title, place, flip, preventOverflow, offset, showArrow} =
    props;

  const [showTootltip, setShowTootltip] = useState(false);
  const tooltipRef = useRef(null);
  const arrowRef = useRef(null);
  const handleRef = useRef<HTMLElement | null>(null);
  const id = useId();

  //we should not memoize children props
  //because It might change from the parent
  //and we might need that change in the slot/children
  const childrenProps = {
    'aria-describedby': id,
    ...children.props,
    ref: handleRef,
  };

  useEffect(() => {
    if (!showTootltip || !handleRef.current || !tooltipRef.current) return;

    const modifiers = [
      {
        name: 'arrow',
        options: {
          element: arrowRef.current,
        },
      },
      {
        name: 'offset',
        options: {
          offset,
        },
      },
      {
        name: 'flip',
        options: {
          altBoundary: flip,
        },
      },
      {
        name: 'preventOverflow',
        options: {
          altBoundary: preventOverflow,
        },
      },
    ];
    const popper = createPopper(handleRef.current!, tooltipRef.current!, {
      placement: place,
      modifiers,
    });

    //destroy popper for garbage collector
    return () => {
      popper.destroy();
    };
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [showTootltip]);

  const handleMouseOver = useCallback(() => {
    setShowTootltip(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowTootltip(false);
  }, []);

  useEffect(() => {
    const ref = handleRef.current;
    if (!ref) return;
    //we add mousemove and mouseleave event listener after child rendered
    //we should not pass these events to the childProps because the child could be a react element
    ref.addEventListener('mousemove', handleMouseOver);
    ref.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ref.removeEventListener('mousemove', handleMouseOver);
      ref.removeEventListener('mouseleave', handleMouseLeave);
    };
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [handleRef.current]);

  //Classes always are the same, so we memoize them for perf matter
  const classObject = useMemo(() => `de-tooltip de-tooltip--${place}`, [place]);

  return (
    <React.Fragment>
      {React.cloneElement(children, childrenProps)}
      <TootlipContainer show={showTootltip}>
        <div id={id} className={classObject} role="tooltip" ref={tooltipRef}>
          {title}
          {showArrow && (
            <div className="s-e-tooltip__arrow" ref={arrowRef}></div>
          )}
        </div>
      </TootlipContainer>
    </React.Fragment>
  );
}

Tooltip.defaultProps = {
  place: 'top',
  flip: true,
  preventOverflow: true,
  offset: [0, 5],
  showArrow: true,
};

export default Tooltip;
