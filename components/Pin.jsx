import * as React from "react";

import Svg, { Circle, Ellipse, G, Path } from "react-native-svg";

const Pin = ({ color = "red", ...otherProps }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={32}
      {...otherProps}>
      <G data-name="Group 154" transform="translate(-142 -689)">
        <Circle
          data-name="Ellipse 17"
          cx={6}
          cy={6}
          r={6}
          transform="translate(146 694)"
          fill="#fff"
        />
        <G data-name="Group 153" transform="translate(20 1)">
          <Ellipse
            data-name="Ellipse 16"
            cy={16}
            ry={16}
            transform="translate(135 688)"
            fill="#fff"
          />
          <G data-name="12851222121582634796 (1)">
            <Path
              data-name="Path 133"
              d="M139.07 691.93a10 10 0 0 0-14.141 0A9.635 9.635 0 0 0 122 699a8.221 8.221 0 0 0 .644 3.5l7.129 15.118a2.25 2.25 0 0 0 .908 1.015 2.526 2.526 0 0 0 2.637 0 2.369 2.369 0 0 0 .928-1.015l7.109-15.118A8.218 8.218 0 0 0 142 699a9.632 9.632 0 0 0-2.93-7.07Zm-3.535 10.605a5 5 0 0 1-7.07 0A4.818 4.818 0 0 1 127 699a4.817 4.817 0 0 1 1.465-3.535 5 5 0 0 1 7.07 0A4.817 4.817 0 0 1 137 699a4.818 4.818 0 0 1-1.465 3.535Z"
              fill={color}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default Pin;
