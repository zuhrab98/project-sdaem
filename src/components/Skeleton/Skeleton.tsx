import React from 'react'
import ContentLoader from 'react-content-loader'

type Props = { col: number }

export const Skeleton: React.FC<Props> = ({ col }): JSX.Element => {
	return (
		<>
			{[...new Array(col)].map((_, i) => (
				<ContentLoader 
        speed={2}
        width={420}
        height={539}
        viewBox="0 0 420 539"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="153" y="180" rx="0" ry="0" width="0" height="12" /> 
        <rect x="153" y="192" rx="0" ry="0" width="0" height="9" /> 
        <rect x="2" y="3" rx="14" ry="14" width="404" height="225" /> 
        <rect x="15" y="246" rx="18" ry="18" width="111" height="48" /> 
        <rect x="165" y="251" rx="18" ry="18" width="80" height="37" /> 
        <rect x="255" y="251" rx="18" ry="18" width="64" height="37" /> 
        <rect x="329" y="251" rx="18" ry="18" width="55" height="37" /> 
        <rect x="20" y="386" rx="5" ry="5" width="372" height="40" /> 
        <rect x="21" y="432" rx="5" ry="5" width="139" height="11" /> 
        <rect x="22" y="470" rx="18" ry="18" width="118" height="35" /> 
        <rect x="270" y="470" rx="18" ry="18" width="118" height="35" /> 
        <rect x="22" y="315" rx="5" ry="5" width="232" height="19" /> 
        <rect x="23" y="347" rx="5" ry="5" width="103" height="20" /> 
        <rect x="154" y="347" rx="5" ry="5" width="99" height="20" />
      </ContentLoader>
			))}
		</>
	)
}
