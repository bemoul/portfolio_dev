import { ComponentPropsWithoutRef } from "react"

export const DockerIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 250"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          d="M250.715745,70.4971666 C244.951102,66.4973277 231.740464,64.997388 221.412146,66.9973071 C220.211179,56.9977092 214.68673,48.2480609 205.078993,40.4983724 L199.554544,36.4985331 L195.711449,42.248302 C190.90758,49.7480006 188.505646,60.2475786 189.226226,70.2471769 C189.46642,73.7470364 190.667387,79.9967847 194.270289,85.496564 C190.90758,87.4964838 183.941971,89.996383 174.814621,89.996383 L1.15476998,89.996383 L0.674383104,91.9963028 C-1.00697093,101.9959 -1.00697093,133.244645 18.6888904,157.243681 C33.5808831,175.492947 55.6786788,184.742575 84.7420842,184.742575 C147.672763,184.742575 194.270289,154.493791 216.127891,99.7459909 C224.774854,99.9959813 243.269748,99.7459909 252.637292,80.996745 C252.877486,80.4967649 253.357872,79.4968046 255.039227,75.7469554 L256,73.7470364 L250.715745,70.4971666 L250.715745,70.4971666 Z M139.986573,0 L113.565295,0 L113.565295,24.9989952 L139.986573,24.9989952 L139.986573,0 L139.986573,0 Z M139.986573,29.9987943 L113.565295,29.9987943 L113.565295,54.9977896 L139.986573,54.9977896 L139.986573,29.9987943 L139.986573,29.9987943 Z M108.761427,29.9987943 L82.3401495,29.9987943 L82.3401495,54.9977896 L108.761427,54.9977896 L108.761427,29.9987943 L108.761427,29.9987943 Z M77.5362814,29.9987943 L51.1150037,29.9987943 L51.1150037,54.9977896 L77.5362814,54.9977896 L77.5362814,29.9987943 L77.5362814,29.9987943 Z M46.311135,59.9975886 L19.8898576,59.9975886 L19.8898576,84.9965839 L46.311135,84.9965839 L46.311135,59.9975886 L46.311135,59.9975886 Z M77.5362814,59.9975886 L51.1150037,59.9975886 L51.1150037,84.9965839 L77.5362814,84.9965839 L77.5362814,59.9975886 L77.5362814,59.9975886 Z M108.761427,59.9975886 L82.3401495,59.9975886 L82.3401495,84.9965839 L108.761427,84.9965839 L108.761427,59.9975886 L108.761427,59.9975886 Z M139.986573,59.9975886 L113.565295,59.9975886 L113.565295,84.9965839 L139.986573,84.9965839 L139.986573,59.9975886 L139.986573,59.9975886 Z M171.211719,59.9975886 L144.790441,59.9975886 L144.790441,84.9965839 L171.211719,84.9965839 L171.211719,59.9975886 L171.211719,59.9975886 Z"
          fill="currentColor"
          fill-rule="nonzero">
        </path>
      </g>
    </svg>
  )
}